---
id: 2020
title: Google Cloud
description: Clouds Credentials
sidebar_position: 3
---

To configure an UIC Cloud Credential for Google cloud platform infrastructure (named GCP), you must specify the location and name of the file containing the settings required for this connexion.
If you already have the required file mentioned above, you can directly proceed to the configuration step on UIC using your file, which is described at the end of this chapter.
Otherwise, if you are familiar with GCP environment, you can get the file containing the account settings and the project by logging into the Google Cloud portal using this link https://console.cloud.google.com/ as administrator of your subscription.
If you are not familiar with GCP environment, you can follow the steps below to discover how to create a project and download the file with required settings for UIC credential configuration. 

## 3.1 Creating a project
To create a new project on GCP Cloud, log into a GCP account using this link: https://console.cloud.google.com.  
-	Authenticate and select the navigation menu on the left  IAM et admin  Manage resources
 

-	The following page appears:

 

-	Click on +CREATE PROJECT, the following page appears:

 
-	Enter the project name.
-	Click on Create button, the project is created, and its name appears in the bleu banner on the top, as shown below: 

 
4.2 Create Credentials
-	Under Your console, from the menu select the created project. 
-	Select the navigation menu  API and services  Credentials, the credential page appears:
-	
 

-	Click on Create credentials button.
-	Choose API key, the following message box appears:
-	
 


-	Click on CLOSE, the credential page reappears considering the new API key 
-	Click on Create Credentials  Service account key

 
-	The following page appears:

 

-	Select new service account on Service account menu
-	Enter the Service account name
-	Click create

 

-	Next select the Role menu  Project  Owner
-	Click CONTINUE
 

-	Click Done
 
-	Then click on the service account. 
-	
 

-	Click ADD KEY then create new key

-	Select JSON type
 

-	Click CREATE 
-	Download the JSON file proposed by GCP provider. Here is an example of the file contents:
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

The content of this file contains the items to onboard GCP project under UIC platform.
4.3 Enable API Services
-	To list the created API, select the navigation menu  Dashboard  API, the following screen appears:

 

-	Click on +ENABLE APIS AND SERVICES, the following page appears:
 

-	Choose Compute Engine API, the API library appears:

 
-	Click on ENABLE button, the compute Engine API is enabled.
-	Repeat those steps to enable Cloud Billing API

If you need also to manage billing data, the BigQuery API is required to export data to BigQuery. If the project you selected does not have the BigQuery API enabled, you will be prompted to enable it. Click Enable BigQuery API and the API will be enabled for you.
4.4 Configure Permission for billing account
In the following example we will grant access to a project named uic-prod with the service account « uicprod-service-account@uic-prod.iam.gserviceaccount.com »
-	Open the navigation menu     and select API &Services  Credentials
-	Copy E-mail of the service account.

Then add the principal account
-	Open the navigation menu    and select  Billing   Account management
-	Select the billing account associated with your project.
-	Click on ADD PRINCIPAL ACCOUNT 
-	Introduce the service account copied previously 
-	Select the role Billing Account Costs Manager
-	And  Save

4.5 Billing data
A cloud billing account is used to determine who bears the charges for a given set of resources. It can be associated with one or more projects. Project usage charges are charged to the associated cloud billing account.
If you are the billing administrator for a single cloud billing account, new projects that you create are automatically associated with that cloud billing account. If you create a Cloud billing account or have access to multiple accounts, you can change the account a project is billed to.
4.5.1 Enable billing project
To view the Cloud Billing account linked to a project, do the following.
-	Sign in to the Google Cloud Console.
-	 In the project drop down (Your Project arrow_drop_down) at the top of the Google Cloud Console page, select your project.
-	Open the console Navigation menu (menu), and then select Billing.

If billing is NOT enabled:
-	If billing is not enabled on the project, a pop-up window will display, with text similar to:
"This project is not linked to a billing account"
o	To enable billing on the project, select Link a billing account.
o	To view a list of billing accounts for your organization, select Manage billing accounts.
If billing is enabled:
-	If billing is enabled on the project, and if you have only one Cloud Billing account, the Billing Overview page is displayed.
-	If billing is enabled on the project, and if you have more than one Cloud Billing account, a pop-up window will display, with text similar to:
"Billing account "[Your Billing Account]" is linked to this project"
o	To view the Billing Overview page for the Cloud Billing account that is linked to the project, select Go to linked billing account.
o	To view a list of Cloud Billing accounts for your organization, select Manage billing accounts.
4.5.2 Export Cloud Billing Data to BigQuery
Before you enable your Cloud Billing data to export to BigQuery, you must create at least one BigQuery dataset to manage your exported data. You can use the same dataset to contain both your daily cost detail data and your pricing data.
A dataset is contained within a Cloud project you specify. Datasets are top-level containers that are used to organize and control access to your tables and views. A table or view must belong to a dataset, so you need to create at least one dataset before loading data into BigQuery.
4.5.2.1 Create BigQuery dataset
To create a BigQuery dataset, do the following:
-	Sign in to the Google Cloud Console and go to the BigQuery page.
-	In the project drop-down list (Your Project arrow_drop_down) at the top of the Google Cloud Console page, select the project you set up to contain your dataset.
-	In the BigQuery navigation panel, click arrow_right your-project-name.
-	Click  Create dataset. The Create dataset panel opens.
o	Enter a Dataset ID.
o	Select a Data location.
About locations: The data location specifies the region where your data is stored. All tables within this dataset will share this location. When creating a dataset, the Default location is the US multi-region. After you create the dataset, the location cannot be changed.
o	Select the Default table expiration.
Warning: For data that needs to be preserved, select Never. If you enter a number of days, any new table created in this dataset will be automatically deleted following the specified number of days after creation. Important: If you delete any exported data (such as Cloud Billing data records), we cannot backfill the deleted records.
o	Select the Encryption option. For Cloud Billing export, select Google-managed key.
o	To save, click Create dataset.
4.5.2.2 Enable Cloud Billing export to the BigQuery dataset
You enable Cloud Billing data export in the Cloud Billing section of the Cloud Console. To enable Cloud Billing data export to BigQuery, do the following:
-	Sign in to the Google Cloud Console.
-	Open the console Navigation menu (menu), and then select Billing.
If you have more than one Cloud Billing account, do one of the following:
o	To manage Cloud Billing for the current Cloud project, select Go to linked billing account.
o	To locate a different Cloud Billing account, select Manage billing accounts and choose the account for which you would like to enable Cloud Billing data export to BigQuery.
-	In the Billing navigation menu, select Billing export.
-	Select the BigQuery export tab (this tab is selected by default). On the BigQuery export tab, you can enable two types of data you want to export:
o	Daily cost detail 
o	Pricing 
To enable export of your detailed Cloud Billing usage and cost data, do the following:
1.	To enable export or update the export settings, click Edit settings.
2.	From the Project list, select the project that you set up to contain your BigQuery dataset.
Note: The project you select is used to store the exported Cloud Billing data in the BigQuery dataset. The exported Cloud Billing data includes usage/cost data for all Cloud projects paid for by the same Cloud Billing account.
3.	From the Billing export dataset list, select the dataset that you set up to contain your exported Cloud Billing data.
4.	Click Save.
4.5.2.3 Required Permissions
To access BigQuery API you can grant permissions by assigning roles to a user, group, or service account.
-	Open the console Navigation menu (menu), and then select IAM &Admin -> Service Accounts.
-	Select the service account that you have created and copy the email.
-	Then select IAM & Admin -> IAM
-	Click ADD

 

-	Select the role BigQuery Data Viewer
 
-	Click SAVE
5	VMware vSphere
To configure an UIC Cloud Credential for VMware vSphere infrastructure, you need the following elements: 
-	vCenter Server address  
-	Connexion protocol
-	Connexion port
-	User name
-	User password

In the rest of this chapter, we consider that you are familiar with VMware vSphere technology and its terminology and that you have already implemented a vSphere infrastructure, with a vCenter server having a version supported by UIC (the list of UIC supported versions is kept updated in the configuration dialog displayed by UIC). 

If you already have the elements mentioned above, you can directly proceed to the configuration step on UIC using your keys, which is described at the end of this chapter. 
To allow UIC to control a vSphere infrastructure domain, UIC must authenticate with a user having an administrative role on this domain. If you want to create such user in vSphere, you can follow the instructions in the next paragraph.
5.1 Adding a vCenter Single Sign-on user
Users listed on vSphere Web Client tab are internal to vCenter Single Sign-on, they are part of vsphere.local domain.

You can select other domains and view information about users. However, you cannot add users in these domains via vCenter Single Sign-on management interface of vSphere Web Client.
-	Log into vSphere Web Client as administrator@vsphere.local or as another user with having vCenter Single Sign-on privileges.
-	Users having vCenter Single Sign-on administrator privileges are part of CAAdmins group. Click on Home  Administration  Single Sign-On Users and groups.
If vsphere.local is not the selected domain, select it on the drop-down menu. You cannot add users to other domains.
 
From Users tab, click on the New User icon, the following message box appears:
 

-	Enter the user name (cannot to modified after the creation) and a password (it must meet the password policy requirements).
-	Complete the other inputs (optional).
-	Click on the OK button.
The newly created user initially has no permissions to perform management operations.
5.2 Creating a custom role
We will create a custom vCenter Server role that matches the access control needs for Use IT Cloud environment. 
-	Verify that you are logged in as a user with "administrator" privileges.
-	Log into vCenter Server with vSphere Web Client.
-	Select Home, then Administration  Roles.
-	Click the Create Role Action (+) button, enter a name for the new role.
-	Select the UIC privileges below:

 

Datastore:
-	Allocate space,
-	Update virtual machine files,
-	Update virtual machine metadata,
-	Browse datastore
Folder:
-	Create folder,
-	Move folder,
-	Rename folder,
-	Delete folder
ESX Agent Manager:
-	Show
Inventory Data Service tagging
Virtual machine
Host profile
-	Show
Resource:
-	Assign a virtual machine to a resource pool,
-	Assign a vApp to a resource pool
Network
-	Assign network
Storage view:
-	Show
vApp
-	Click on the OK button
5.3 Assigning UIC permission to vSphere infrastructure
Assign the new user (Ex: uic1) the role that you created in the previous step (Ex: uicRole). It's important to add the user at the vCenter level so that it can have the same permissions throughout the object hierarchy as well as have access to various services. From that point on, you can always restrict the uic1 user to a specific cluster, you can go down to that specific cluster and add permission for this user. 
-	Assign the role created in the previous step (Ex: uicRole) to the new user uic1.
-	Select Home  Host and clusters. Right click on the vCenter icon and select Add permission.
-	Click on Add, then select the new user (Ex: uic2)
 
-	Click on Add
-	Click on the OK button
-	Assign the role (Ex: uicRole) you have created (for UIC platform) to the user

 
In our example to deploy on vSphere infrastructure, we allowed the following elements:
 