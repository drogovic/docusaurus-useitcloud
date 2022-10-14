---
id: 2090
title: OVH Cloud
description: Clouds Credentials
sidebar_position: 90
---

```
Document version 1.0.0 (2022-10-01)
```

## Create a OVH Cloud account

To create an OVHcloud account, simply go to [this page](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and fill in the online form.

![Image](/img_UIC_Provider_Cred_Settings/ovhimage010.png#bordered)

Once you have completed this first form, a one-time code will be sent to the email address you have entered. This code will validate your email address. Enter it in the boxes provided.

![Image](/img_UIC_Provider_Cred_Settings/ovhimage011.png#bordered)

Once you have entered and validated the code, fill in the rest of the form. In particular, please ensure that you define the **type of account** among the choices offered.

![Image](/img_UIC_Provider_Cred_Settings/ovhimage012.png#bordered)

Each OVHcloud customer account is associated with a **unique ID**, also called a NIC handle.
It is usually made up of two letters followed by numbers, for example: **xx11111-ovh**.
Make a note of your NIC handle, as you will need it for each time you log in to your account.

## Create your application

Any application that wants to communicate with the OVHcloud API must be declared in advance.
To do this, click the [following link](https://eu.api.ovh.com/createToken/)
In order to allow all OVHcloud APIs for an HTTP method, put an asterisk ```*``` into the field.

![Image](/img_UIC_Provider_Cred_Settings/ovhimage013.png#bordered)

![Image](/img_UIC_Provider_Cred_Settings/ovhimage014.png#bordered)

After you click **Create**, you will be issued three keys:
Once you have obtained your three keys (**AK, AS, CK**), you can sign API requests via UIC platform.

## Onboarding to UIC platform
Navigate to **[Count:User] => Cloud credentials**, select **OVH Cloud** provider and then click ***Add credentials***.

![Image](/img_UIC_Provider_Cred_Settings/ovhimage015.png#bordered)

The settings screen has a form that allows you to configure:

- **Credentials name***: The credential name must be unique.
- **Host***: Set host, ```(https://auth.cloud.ovh.net/v3)```
- **Endpoint***: Set endpoint (ovh-eu)
- **Application key***: Set application key (AK)
- **Secret key***: Set secret key (SK)
- **Consumer key*** : Set consumer key (CK)

Select **Add**.



## Finops mode

## Inventory mode