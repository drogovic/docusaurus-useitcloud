---
id: 3000
title: Microsoft partner center
description: UseITcloud documentation
sidebar_position: 1
---

## Overview
This page walks you through the steps to connect your Microsoft partner center to Use IT Cloud
for cost reporting purposes. 
To manage cost data for your customers with Use IT Cloud, you must provide your CSP Partner 
credentials. This credential allows the Use IT Cloud platform to call the Microsoft Partner Center 
API on your behalf, to get data about your CSP customers and their detailed subscription usage 
information.
The following steps must be completed to get the required credentials.
- Locate your Microsoft Partner **Tenant ID**
- Create the CSP Web App
- Consent the Wep App
Each of the steps above is explained in detail on this page.

## Requirement
- A user account with MFA configured
- Powershell version >= 3.0
- Powershell modules:
    - AzureAD (Install-Module -Name AzureAD)
    - PartnerCenter (Install-Module -Name PartnerCenter)

## Generate Credentials
### Locate your Microsoft Partner Tenant ID 
Connect to your Microsoft Partner Center dashboard to obtain your tenant ID, which you will 
need in future steps.
To find your tenant ID in Partner Center, navigate to the Organization Profile page and 
the **tenant ID** is displayer under **Microsoft ID** label.

![Image](/img_UIC_ServicesSaaS_FR-V3.2.0/image002.png)

### Create the CSP Web App
To Create a web app download a script via this link: <br></br>
https://uicpackages.s3.eu-west3.amazonaws.com/azure/Create-AzureADApplication.ps1

Then this PowerShell script can be used to create and configure the required Azure AD 
application. Execute the script. 
```script
PS C:\> .\Create-AzureADApplication.ps1 -ConfigurePreconsent -
DisplayName "Partner Center Web App" -TenantId [replace with your 
tenant ID]
```
This script will display those values:
- ApplicationId which is client id
- ApplicationSecret which is the client secret
Connect to your Active Directory on Azure go to App registrations and select you application

![Image](/img_UIC_ServicesSaaS_FR-V3.2.0/image003.png)

Then under the selected application chose Authentication and click on Add URI 
Put http://localhost:8400/ , and Save

![Image](/img_UIC_ServicesSaaS_FR-V3.2.0/image004.png)

### Enable Price Sheet API access
![Image](/img_UIC_ServicesSaaS_FR-V3.2.0/image005.png)

1. Choose API permissions for the application. On the Request API permissions screen, 
choose Add a permission, then choose APIs my organization uses
2. Search for the Microsoft Partner API (4990cffe-04e8-4e8b-808a-1175604b879f).

![Image](/img_UIC_ServicesSaaS_FR-V3.2.0/image006.png)

3. Set the Delegated Permissions to Partner Center.

![Image](/img_UIC_ServicesSaaS_FR-V3.2.0/image007.png)

4. Then then select **Grant Admin Consent for Partner Account**.

### Enable API access 
After your account is set up, you must enable API access before you can use the Partner Center 
SDK. You need to enable access to the API for your primary Partner account.
1. Sign into Partner Dashboard using a global admin account.
2. From the Settings menu (gear icon), select Partner settings.
3. On the Account settings page, choose App management.
4. Choose Web App and register the app created in the previous steps.
5. Sign out of Partner Dashboard.

![Image](/img_UIC_ServicesSaaS_FR-V3.2.0/image008.png)

### Consent the Wep App
Historically, the resource owner password credentials grant has been used to request an access 
token for use with the Partner Center REST API, .NET API, Java API, or PowerShell module. That 
method was used to request an access token from Azure Active Directory using a client identifier 
and user credentials. However, this approach will no longer work because Partner Center 
requires multi-factor authentication, when using app + user authentication. To comply with this 
requirement Microsoft has introduced a secure, scalable framework for authenticating Cloud 
Solution Provider (CSP) partners and control panel vendors (CPV) using multi-factor 
authentication. This framework is known as the Secure Application Model, and it is composed 
of a consent process and a request for an access token using a refresh token.

To consent the application you will need to invoke the New-PartnerAccessToken command as 
shown below to perform the consent process.

```script
PS C:\>$credential = Get-Credential
```

When the command is invoked, you will be prompted to enter the following values:
Specify the application id as the username and the application secret as the password.

![Image](/img_UIC_ServicesSaaS_FR-V3.2.0/image009.png)

```script
PS C:\> $token = New-PartnerAccessToken -ApplicationId '[AppId]' -
Scopes 'https://api.partnercenter.microsoft.com/user_impersonation' -
ServicePrincipal -Credential $credential -Tenant '[tenant id]' -
UseAuthorizationCode
```

When then New-PartnerAccessToken command is invoked, you will be prompted for credentials 
once again via your default browser, it is recommended to use edge or firefox browser. This time
you will need to specify the credentials for the service account that you will be using. The service 
account (user/password) should be a partner account with the appropriate permissions with 
MFA enabled. After the successful execution of the command, you will find that 
the $token variable contains the response from Azure Active Directory for a token. In the 
response is a refresh token, you will want to store this value in a secure repository such as Azure 
Key Vault or a similar service.<br></br>
Copy the refresh token with this command:
```
PS C:\> $token.RefreshToken | clip
```
With this last step we have obtained and enabled the required credentials: tenant_id, client_id, 
client_secret and token.

## References
- https://docs.microsoft.com/en-us/powershell/partnercenter/secure-appmodel?view=partnercenterps-1.5&viewFallbackFrom=partnercenterps-3.0
- https://docs.microsoft.com/en-us/powershell/partnercenter/multi-factorauth?view=partnercenterps-3.0
- https://www.chader.fr/en/powershell-install-module-name-powershellget-force-nuget/
