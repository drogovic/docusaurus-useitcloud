---
id: 2080
title: OUTSCALE
description: Clouds Credentials
sidebar_position: 80
---

```
Document version 1.0.0 (2022-10-01)
```

Cockpit is a web interface developed by 3DS OUTSCALE that enables you to create and manage your resources in the OUTSCALE Cloud.

## Request to create a Cloud Account

![Image](/img_UIC_Provider_Cred_Settings/outscaleimage010.png#bordered)

![Image](/img_UIC_Provider_Cred_Settings/outscaleimage011.png#bordered)


## Managing your Account
### Creation
Account is created for a specific Region of the OUTSCALE Cloud. If you want to create and manage resources in other Regions, you must create additional accounts for these Regions. For more information about Regions, see [About Regions, Endpoints, and Availability Zones](https://docs.outscale.com/en/userguide/About-Regions-Endpoints-and-Availability-Zones.html)

You can also request that your existing account be copied to another Region. To do so, contact your Technical Account Manager, or our Support team support@outscale.com.

### Authentication
Your account has several authentication methods depending on the tools used.
- A password, used mainly for graphical user interfaces (GUIs). For more information, see About Password Security.
- Access keys, used mainly for APIs and command line interfaces (CLIs). For more information see About Access Keys.
- Keypairs, used for connecting to your instances. For more information, see About Keypairs.

## Managing your Access Keys
### Creating an Access Key Using Cockpit v1
Access keys enable you to sign your API requests. At the creation of an access key, its state is automatically set to ACTIVE, enabling it to sign requests.

- Hover over your name.
	A drop-down menu appears.
- Click Personal information & Access keys.
	A page with your account details appears.
- Click Access keys.
	The PASSWORD CONFIRMATION dialog box appears.
- Enter your current password and click Confirm.
	The list of your access keys appears.
- Click Create.
	A confirmation dialog box appears.
- Click Generate to validate.
	The access key is created.

![Image](/img_UIC_Provider_Cred_Settings/outscaleimage012.png#bordered)

## Onboarding to UIC platform
Navigate to **[Count:User] => Cloud credentials**, select **OUTSCALE** provider and then click ***Add credentials***.

![Image](/img_UIC_Provider_Cred_Settings/outscaleimage013.png#bordered)


The settings screen has a form that allows you to configure:

- **Credentials name***: The credential name must be unique.
- **Project credentials***: 
	- **Access key**: Set your access key of your user account
	- **Secret key**: Set your secret key of your user account
	- **Account ID**: Set your account id
	- **Region**: Select your region, (eu-west-2-Paris)
- **Proxy**: The proxy URL must be in the following format: https://user:password@host:port

Select **Add**.

If Billing only is selected:

![Image](/img_UIC_Provider_Cred_Settings/outscaleimage014.png#bordered)

The settings screen has a form that allows you to configure:

- **Credentials name***: The credential name must be unique.
- **Billing access key***: Set your billing access key of your billing account 
- **Billing secret key***: Set your billing secret key of your billing account
- **Buckets*** : 
	- **Name**: Set your bucket name
	- **Region**: Select your region (eu-west-2-Paris)

Select **Add**.
