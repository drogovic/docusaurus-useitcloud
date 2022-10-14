---
id: 2100
title: Scaleway
description: Clouds Credentials
sidebar_position: 100
---

```
Document version 1.0.0 (2022-10-01)
```

Credentials are unique to each project. Credentials include SSH Keys and API Keys.
Each Organization must have at least one associated Project, and at the time of account creation this project is called default.
Members are people who are part of an Organization. Members can have different roles which define their permissions and access rights.
A role is a set of permissions and access rights available to members of an Organization. Four roles are available: Owner, Administrator, Editor and Billing Administrator.

## Create an account
Login information consists of the e-mail address your account is registered to and its corresponding password.

1. Open the [Scaleway website](https://www.scaleway.com/en/) in a web browser.
2. Enter your email address in the form, then click **Get started now**. Alternatively, click **Sign Up** in the upper right corner of the page. You are redirected to the sign up page:

![Image](/img_UIC_Provider_Cred_Settings/scalewayimage010.png#bordered)

3. Select an account type (**Personal** or **Corporate**) and fill out your first and last name, as well as your email address.
4. Check the box and solve the reCaptcha if you would like to receive marketing communications from Scaleway. Then, click Get Started! to create your account. A message displays to request that you check your email inbox for the verification email.
5. Click the verification link in your mailbox to confirm your email address and agree to our terms of service. You are redirected to the Scaleway Console. A welcome message displays.

![Image](/img_UIC_Provider_Cred_Settings/scalewayimage011.png#bordered)

6. Click Add information to add your billing information and payment method. This will give you access to Scaleway resources.

## How to retrieve your Organization ID

The Organization ID can be found on the Organization Account page under **Organization Information**.

![Image](/img_UIC_Provider_Cred_Settings/scalewayimage012.png#bordered)


## Create a project
If you have a [Scaleway account](https://www.scaleway.com/en/docs/console/my-account/how-to/create-an-account), and subsequently an [Organization](https://www.scaleway.com/en/docs/console/my-project/concepts#organization), you will also automatically have a [default Project](https://www.scaleway.com/en/docs/console/my-project/concepts#default-project), that contains all your existing [resources](https://www.scaleway.com/en/docs/console/my-project/concepts#resources). You can also create additional Projects, allowing you to group your resources.

1. From the Organization Dashboard which displays when you log into the console, click the **Projects** tab. A list of your Projects displays.
2. Click + **Create Project** on the righthand side and a pop-up appears.
3. Enter the **Project Name** and **Description** in the corresponding boxes.
4. Click **Create new Project** and the new Project is added to the list.


## Generate API keys
An API key is a unique identifier associated with each Scaleway project. It is used to authenticate requests made to the Scaleway API. An API Key consists of an Access Key and a Secret Key.
Each Scaleway Project can have several API keys, to give multiple accesses to the same Project. 
Creating an API key can be done directly from the Scaleway console:
From the Scaleway console, navigate to the Credentials tab of your Project Dashboard:

![Image](/img_UIC_Provider_Cred_Settings/scalewayimage013.png#bordered)

Scroll down to the API Key section:

![Image](/img_UIC_Provider_Cred_Settings/scalewayimage014.png#bordered)

Click **Generate new API key**. The following pop-up appears:

![Image](/img_UIC_Provider_Cred_Settings/scalewayimage015.png#bordered)

Add an **API Key purpose** (for your own reference) or leave this blank. Then click **Generate API Key**.
The two parts of your API Key (access key and secret key) are displayed. Take careful note of the secret key, as it will not be recoverable or viewable after this point.

![Image](/img_UIC_Provider_Cred_Settings/scalewayimage016.png#bordered)

Click **OK** to conclude.

## Onboarding to UIC platform
Navigate to **[Count:User] => Cloud credentials**, select **Scaleway** provider and then click ***Add credentials***.

![Image](/img_UIC_Provider_Cred_Settings/scalewayimage017.png#bordered)

The settings screen has a form that allows you to configure:

- **Credentials name***: The credential name must be unique.
- **Account type***: Select Direct or Reseller
- **Host***: Set your host name, ```(https://api.scaleway.com)```
- **Version***: Set Scaleway version, (v1)
- **Organization ID***: Set organization ID, (841446c4-14d6-4cda-a7f2-08dd2d9dd0c4)
- **Secret key of project “default”*** : Set API Secret Key (see 6.4)

Click Add.

## Finops mode

## Inventory mode