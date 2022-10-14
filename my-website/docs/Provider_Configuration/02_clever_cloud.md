---
id: 2020
title: Clever Cloud
description: Clouds Credentials
sidebar_position: 20
---

```
Document version 1.0.0 (2022-10-01)
```


To onboard a Clever Cloud subscription to your Use IT Cloud account, you need the following settings: 
* Access Key
* Secret Key
* Token Key
* Token Secret Key

You can get this information by logging into the [Clever Cloud Management portal](https://console.clever-cloud.com/)  as administrator of your subscription. 

![Image](/img_UIC_Provider_Cred_Settings/cleverimage010.png#bordered)

## Create a Clever Cloud account
The API of Clever Cloud uses OAuth 1 to perform authentication actions. 

![Image](/img_UIC_Provider_Cred_Settings/cleverimage011.png#bordered)

![Image](/img_UIC_Provider_Cred_Settings/cleverimage012.png#bordered)

![Image](/img_UIC_Provider_Cred_Settings/cleverimage013.png#bordered)


## Manage your account
In the Clever Cloud Web Console, select **Profile** in the bottom left menu.
You will see several menu entries.
- **Information**: on that page you can edit your name, address, phone number, profile picture, manage the link between your Clever Cloud and Github account and select the language of your Clever Cloud web console.
- **Emails**: manage your linked email addresses.
- **Authentication**: Change your password, enanble/disable Two Factor Authentication.
- **SSH keys**: add or remove your SSH keys, manage your Github SSH keys if you have linked your Github account.
- **Oauth tokens**: See and revoke your access tokens
- **Delete my account**: Delete your Clever Cloud account

### Create an organization
In the Clever Cloud Web Console, select **Add an organization** in the left menu.
Give it a name, description, specify if it is a company and add billing informations.
Each organization have its own identifier looking like orga_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.

![Image](/img_UIC_Provider_Cred_Settings/cleverimage014.png#bordered)

## Onboarding to UIC platform
Navigate to **[Count:User] => Cloud credentials**, select **Clever Cloud** provider and then click **Add credentials**.

![Image](/img_UIC_Provider_Cred_Settings/cleverimage015.png#bordered)

The settings screen has a form that allows you to configure:

- **Credentials name***: The credential name must be unique.
- **Access key***: Set your access key (see 8.1)
- **Secret key***: Set your secret key (see 8.1)
- **Token***: Set your token 
- **Secret Token***: Set your secret token 
- **Version***: Set Clever cloud api version, (v2)
- **Host*** : Set host, ```(https://api.clever-cloud.com)```

Select **Add**.

https://www.clever-cloud.com/doc/extend/cc-api/



## Finops mode



## Inventory mode





