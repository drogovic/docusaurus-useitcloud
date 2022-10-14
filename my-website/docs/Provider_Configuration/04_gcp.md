---
id: 2040
title: Google Cloud
description: Clouds Credentials
sidebar_position: 40
---

```
Document version 2.1.0 (2020-10-12)
```

To configure an UIC Cloud Credential for Google cloud platform infrastructure (named GCP), you must specify the location and name of the file containing the settings required for this connexion.<br></br>
If you already have the required file mentioned above, you can directly proceed to the configuration step on UIC using your file, which is described at the end of this chapter.<br></br>
Otherwise, if you are familiar with GCP environment, you can get the file containing the account settings and the project by logging into the Google Cloud portal using this link https://console.cloud.google.com/ as administrator of your subscription.<br></br>
If you are not familiar with GCP environment, you can follow the steps below to discover how to create a project and download the file with required settings for UIC credential configuration. 

## Creating a project
To create a new project on GCP Cloud, log into a GCP account using this link: https://console.cloud.google.com.  
- Authenticate and select the navigation menu on the left => **IAM et admin => Manage resources**

<center>
  <img src="/img_UIC_Provider_Cred_Settings/image034.png#bordered"></img>
</center>

- The following page appears:

![Image](/img_UIC_Provider_Cred_Settings/gcpimage035.png#bordered)

- Click on **+CREATE PROJECT**, the following page appears:

![Image](/img_UIC_Provider_Cred_Settings/gcpimage036.png#bordered)
 
- Enter the project **name**.
- Click on **Create** button, the project is created, and its name appears in the bleu banner on the top, as shown below: 

![Image](/img_UIC_Provider_Cred_Settings/gcpimage777.png#bordered) 

## Create Credentials
- Under Your console, from the menu select the created project. 
- Select the navigation menu **=> API and services => Credentials**, the credential page appears:

![Image](/img_UIC_Provider_Cred_Settings/gcpimage038.png#bordered) 

- Click on **Create credentials** button.
- Choose **API key**, the following message box appears:

![Image](/img_UIC_Provider_Cred_Settings/gcpimage039.png#bordered)


- Click on **CLOSE**, the credential page reappears considering the new API key 
- Click on **Create Credentials => Service account key**

![Image](/img_UIC_Provider_Cred_Settings/gcpimage040.png#bordered)
 
- The following page appears:

![Image](/img_UIC_Provider_Cred_Settings/gcpimage041.png#bordered)

- Select new service account on **Service account** menu
- Enter the **Service account name**
- Click create

![Image](/img_UIC_Provider_Cred_Settings/gcpimage042.png#bordered)

- Next select the **Role** menu **=> Project => Owner**
- Click **CONTINUE**

![Image](/img_UIC_Provider_Cred_Settings/gcpimage043.png#bordered)

- Click Done

![Image](/img_UIC_Provider_Cred_Settings/gcpimage044.png#bordered)

- Then click on the service account. 

![Image](/img_UIC_Provider_Cred_Settings/gcpimage045.png#bordered)

- Click **ADD KEY** then create new key

- Select JSON type

![Image](/img_UIC_Provider_Cred_Settings/gcpimage046.png#bordered)

- Click **CREATE** 
- Download the JSON file proposed by GCP provider. Here is an example of the file contents:
```
{
  "type": "service_account",
  "project_id": "trusty-splice-237112",
  "private_key_id": "1af328dffb5f1d9acbc2gf5e3ff03e73aec60f0e1",
  "private_key": "-----BEGIN PRIVATE KEY-----………………-----END PRIVATE KEY-----\n",
  "client_email": "uicaccountservice@trusty-splice-237112.iam.gserviceaccount.com",
  "client_id": "104335546672827650901",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/uiccompteservice%40trusty-splice-237112.iam.gserviceaccount.com"
}
```
The content of this file contains the items to onboard GCP project under UIC platform.

## Enable API Services
- To list the created API, select the navigation menu **=> Dashboard => API**, the following screen appears:

![Image](/img_UIC_Provider_Cred_Settings/gcpimage047.png#bordered) 

- Click on **+ENABLE APIS AND SERVICES**, the following page appears:
 
![Image](/img_UIC_Provider_Cred_Settings/gcpimage048.png#bordered)

- Choose **Compute Engine API**, the API library appears:

![Image](/img_UIC_Provider_Cred_Settings/gcpimage049.png#bordered)
 
- Click on **ENABLE** button, the compute Engine API is enabled.
- Repeat those steps to enable **Cloud Billing API**

If you need also to manage billing data, the BigQuery API is required to export data to BigQuery. If the project you selected does not have the BigQuery API enabled, you will be prompted to enable it. Click Enable BigQuery API and the API will be enabled for you.

## Configure Permission for billing account
In the following example we will grant access to a project named **uic-prod** with the service account **« uicprod-service-account@uic-prod.iam.gserviceaccount.com »**
- Open the navigation menu ![Image](/img_UIC_Provider_Cred_Settings/gcpimage050.png#bordered) and select **API &Services => Credentials**
- Copy E-mail of the service account.

Then add the principal account
- Open the navigation menu ![Image](/img_UIC_Provider_Cred_Settings/gcpimage050.png#bordered) and select  **Billing  => Account management**
- Select the billing account associated with your project.
- Click on **ADD PRINCIPAL ACCOUNT**
- Introduce the service account copied previously 
- Select the role **Billing Account Costs Manager**
- And  **Save**

## Billing data
A cloud billing account is used to determine who bears the charges for a given set of resources. It can be associated with one or more projects. Project usage charges are charged to the associated cloud billing account.<br></br>
If you are the billing administrator for a single cloud billing account, new projects that you create are automatically associated with that cloud billing account. If you create a Cloud billing account or have access to multiple accounts, you can change the account a project is billed to.

### Enable billing project
To view the Cloud Billing account linked to a project, do the following.
- Sign in to the Google Cloud Console.
- In the project drop down (Your Project arrow_drop_down) at the top of the Google Cloud Console page, select your project.
- Open the console **Navigation menu** (menu), and then select **Billing**.

If billing is NOT enabled:
- If billing is not enabled on the project, a pop-up window will display, with text similar to:
"This project is not linked to a billing account"
  - To enable billing on the project, select **Link a billing account**.
  - To view a list of billing accounts for your organization, select **Manage billing accounts**.<br></br>

If billing is enabled:
- If billing is enabled on the project, and if you have only one Cloud Billing account, the Billing Overview page is displayed.
- If billing is enabled on the project, and if you have more than one Cloud Billing account, a pop-up window will display, with text similar to:
"Billing account "[Your Billing Account]" is linked to this project"
  - To view the Billing Overview page for the Cloud Billing account that is linked to the project, select **Go to linked billing account**.
  - To view a list of Cloud Billing accounts for your organization, select **Manage billing accounts**.

### Export Cloud Billing Data to BigQuery
Before you enable your Cloud Billing data to export to BigQuery, you must create at least one BigQuery dataset to manage your exported data. You can use the same dataset to contain both your daily cost detail data and your pricing data.<br></br>
A dataset is contained within a Cloud project you specify. Datasets are top-level containers that are used to organize and control access to your tables and views. A table or view must belong to a dataset, so you need to create at least one dataset before loading data into BigQuery.

#### Create BigQuery dataset
To create a BigQuery dataset, do the following:
- Sign in to the Google Cloud Console and go to the **BigQuery** page.
- In the project drop-down list (Your Project arrow_drop_down) at the top of the Google Cloud Console page, select the project you set up to contain your dataset.
- In the BigQuery navigation panel, click arrow_right **your-project-name**.
- Click  Create dataset. The Create dataset panel opens.
  - Enter a **Dataset ID**.
  - Select a **Data location**.
**About locations**: The data location specifies the region where your data is stored. All tables within this dataset will share this location. When creating a dataset, the Default location is the US multi-region. After you create the dataset, the location cannot be changed.
  - Select the **Default table expiration**.
    :::warning
     For data that needs to be preserved, select Never. If you enter a number of days, any new table created in this dataset will be automatically deleted following the specified number of days after creation. Important: If you delete any exported data (such as Cloud Billing data records), we cannot backfill the deleted records.

  - Select the **Encryption** option. For Cloud Billing export, **select Google-managed key**.
  - To save, click **Create dataset**.

#### Enable Cloud Billing export to the BigQuery dataset
You enable Cloud Billing data export in the Cloud Billing section of the Cloud Console. To enable Cloud Billing data export to BigQuery, do the following:
- Sign in to the Google Cloud Console.
- Open the console **Navigation menu** (menu), and then select **Billing**.<br></br>
  If you have more than one Cloud Billing account, do one of the following:
    - To manage Cloud Billing for the current Cloud project, select **Go to linked billing account**.
    - To locate a different Cloud Billing account, select **Manage billing accounts** and choose the account for which you would like to enable Cloud Billing data export to BigQuery.
- In the Billing navigation menu, select **Billing export**.
- Select the **BigQuery export** tab (this tab is selected by default). On the BigQuery export tab, you can enable two types of data you want to export:
  - Daily cost detail 
  - Pricing 

To enable export of your detailed Cloud Billing usage and cost data, do the following:
1.	To enable export or update the export settings, click **Edit settings**.
2.	From the **Project** list, select the project that you set up to contain your BigQuery dataset.
:::note 
The project you select is used to store the exported Cloud Billing data in the BigQuery dataset. The exported Cloud Billing data includes usage/cost data for all Cloud projects paid for by the same Cloud Billing account.
:::
3.	From the ***Billing export dataset** list, select the dataset that you set up to contain your exported Cloud Billing data.
4. Click **Save**.

####  Required Permissions
To access BigQuery API you can grant permissions by assigning roles to a user, group, or service account.
- Open the console **Navigation menu** (menu), and then select **IAM &Admin -> Service Accounts**.
- Select the service account that you have created and copy the email.
- Then select IAM & **Admin -> IAM**
- Click **ADD**

![Image](/img_UIC_Provider_Cred_Settings/gcpimage051.png#bordered) 

- Select the role BigQuery Data Viewer

![Image](/img_UIC_Provider_Cred_Settings/gcpimage052.png#bordered)

- Click **SAVE**

## Onboarding to UIC platform
Navigate to **[Count:User] => Cloud credentials**, select Google Cloud provider and then click ***Add credentials***.

![Image](/img_UIC_Provider_Cred_Settings/gcpimage053.png#bordered)

The settings screen has a form that allows you to configure:

- **Credentials name***: The credential name must be unique.
- **Identifiers***: Select your configuration myfile.json
- **Regions to activate**: Select regions
- **Default region***: Select region
- **Proxy**: The proxy URL must be in the following format, ```https://user.password@host.port```

Select **Add**.

Myfile.json looks like:
```
{
  "type": "service_account",
  "project_id": "trusty-splice-237112",
  "private_key_id": "1af328dffb5f1d9acbc2gf5e3ff03e73aec60f0e1",
  "private_key": "-----BEGIN PRIVATE KEY-----………………-----END PRIVATE KEY-----\n",
  "client_email": "uicaccountservice@trusty-splice-237112.iam.gserviceaccount.com",
  "client_id": "104335546672827650901",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/uiccompteservice%40trusty-splice-237112.iam.gserviceaccount.com"
}
```
## Finops mode

## Inventory mode
