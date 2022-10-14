---
id: 2070
title: Oracle Cloud
description: Clouds Credentials
sidebar_position: 70
---

```
Document version 1.0.0 (2022-10-01)
```

## Create Oracle Cloud account

To request an Oracle Account from the Oracle Cloud website:
- Go to the Oracle Cloud website.
- Click ![Image](/img_UIC_Provider_Cred_Settings/oracleimage010.png#bordered) **View Accounts**.

![Image](/img_UIC_Provider_Cred_Settings/oracleimage011.png#bordered)

- Click **Create an Account**.
- Enter your email address and other details in the appropriate fields. Be sure to complete all the required fields.
- Click **Create Account**.
After your account is created, you'll receive a confirmation email at the email address that you provided.
- Follow the instructions in the email to verify your email address.

To request an Oracle Account from My Oracle Support:
- Go to the [My Oracle Support website](https://support.oracle.com/)
- Click **New user? Register here** to create your Oracle Account.
The **Create Your Oracle Account** page opens.
- Enter your email address and other details in the appropriate fields. Be sure to complete all the required fields.
- Click **Create Account**. We create your account and send a confirmation email to the address that you provided.
- Follow the instructions in the email to verify your email address.
After your email address is verified, you can use your Oracle.com account make purchases or log service requests.


## Required keys and OCIDs
Whether you're using an Oracle client (see Software Development Kits and Command Line Interface) or a client you built yourself, you need to do the [following](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm)

### Where to Get the Tenancy's OCID and User's OCID
Both OCIDs are in the Console, which can be accessed by signing in [here](https://cloud.oracle.com). If you don't have a login and password for the Console, 
contact an administrator. If you're not familiar with OCIDs, see Resource Identifiers.
#### Tenancy's OCID
Get the tenancy OCID from the Oracle Cloud InfrastructureConsole on the **Tenancy Details** page:
- 
	- Sign in to the Oracle Cloud Infrastructure Console.
	- Open the Region menu in the top bar of the Console. Your home region is identified on the menu:

![Image](/img_UIC_Provider_Cred_Settings/oracleimage012.png#bordered)

- The tenancy OCID is shown under **Tenancy Information**. Click **Copy** to copy it to your clipboard.

#### User's OCID
Get the user's OCID in the Console on the page showing the user's details. To get to that page:
- If you're signed in as the user:
Open the **Profile** menu (![Image](/img_UIC_Provider_Cred_Settings/oracleimage013.png#bordered)) and click **User Settings**.
- If you're an administrator doing this for another user: Open the navigation menu and click **Identity & Security**. Under **Identity**, click **Users**. Select the user from the list.
- The user OCID is shown under **User Information**. Click **Copy** to copy it to your clipboard.

##  Onboarding to UIC platform
Navigate to **[Count:User] => Cloud credentials**, select **Oracle Cloud** provider and then click ***Add credentials***.

![Image](/img_UIC_Provider_Cred_Settings/oracleimage014.png#bordered)

The settings screen has a form that allows you to configure:

- **Credentials name***: The credential name must be unique.
- **User (OCID)***: Set Oracle Cloud Identifier, identifier in ocid1.user.oc1..xxxxxxx format
- **Password**: Set password
- **Tenancy (OCID)***: Set Oracle Cloud Identifier, identifier in ocid1.tenancy.oc1..xxxxxxx format
- **Private key***: Set private key
- **Fingerprint***: Set fingerprint (6d:88:73:81:8f:66:8f:a8:2c:da:c6:c9:27:8b:74:3a)
- **Passphrase**: Set passphrase
- **Regions to activate**: Set regions
- **Default region***: Set default region (eu-frankfurt-1)
- **Proxy**: The proxy URL must be in the following format: https://user:password@host:port

Select **Add**.

## Finops mode

## Inventory mode