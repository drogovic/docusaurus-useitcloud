--- 
id: 2050
title: Microsoft Azure
description: Clouds Credentials
sidebar_position: 5
--- 

```
Document version 2.1.0 (2020-10-12)
```

To onboard a Microsoft azure subscription to your Use IT Cloud account, you need the following settings: 
- Subscription ID
- Client ID
- Tenant ID
- Secret Key

If you are familiar with Azure environment, you can get this information by logging into the Azure Cloud Management portal using this link https://portal.azure.com as administrator of your subscription (or as user having enough privileges on *Azure Active Directory*). 

## Access to Azure console

The required information to configure an UIC Cloud credential for Azure infrastructure, can be obtained by connecting to Azure platform. To do this, log into Azure Cloud Management Portal, https://portal.azure.com, as the administrator of your subscription (or from an account with sufficient privileges on the *Azure Active Directory*).

Once authenticated, you get the screen below: 

![Image](/img_UIC_Provider_Cred_Settings/mazimage002.png#bordered)

- On **All services** list, select ***Azure Active Director***,
- Click on **APP** registration then **New registration**

![Image](/img_UIC_Provider_Cred_Settings/mazimage003.png#bordered)

## Creating an application
- From **App Registration**, click on **New application** to register a new application with *Azure Active directory*.

![Image](/img_UIC_Provider_Cred_Settings/mazimage004.png#bordered)

- Enter the name inside **Name** box
- Select Web in the **Redirect URI** zone
- Enter the URL inside **Sign- on URL** field (Log URL of this app)
- Click on **Register** button, **App001** page appears:

![Image](/img_UIC_Provider_Cred_Settings/mazimage005.png#bordered)

- Save the following elements:
- **Application (client) ID** corresponds to **"Client ID"** on UIC platform
- **Directory (tenant) ID** corresponds to **"Tenant ID"** on UIC platform
Now you can create a new key for this application by clicking on **Certificates & Secrets => + New client secret**, then you get the following screen:
 
![Image](/img_UIC_Provider_Cred_Settings/mazimage006.png#bordered)

- Enter a description and choose an expiry period (1 yr, 2yrs or never)
- Click on Add button

The interface displays a secret code **that will be exposed only once**, this is the value that must be provided in the **"Secret Key"** field for UIC.

![Image](/img_UIC_Provider_Cred_Settings/mazimage007.png#bordered)
 
:::note 
Copy-paste the value key before closing the page. This value cannot be recovered, after closing this page.
:::
 
One last element to get, it is Azure subscription identifier: **“Subscription ID”**. This identifier can be retrieved by following the instructions described in the next paragraph.

## Retrieving the “Subscription ID”
In the Web portal, search for **subscription** in the search bar and click on this service.

![Image](/img_UIC_Provider_Cred_Settings/mazimage008.png#bordered)

The following page appears: 

![Image](/img_UIC_Provider_Cred_Settings/mazimage009.png#bordered) 

Select the **Subscription ID** field and retrieve the value. Now, you must give permission to the created application on Azure subscription.

## Access Control on Azure
To associate an Azure role to an application, follow the steps below:
- Click on **subscription** and select **Access Control (IAM)** on the left menu.

![Image](/img_UIC_Provider_Cred_Settings/mazimage010.png#bordered)

- Click on **+Add => Add Role Assignmen**t. The following screen appears:

![Image](/img_UIC_Provider_Cred_Settings/mazimage011.png#bordered) 

- Select **Owner** or **Contributor** in the **Role** input.
- In the **Select** box, type the beginning or the full name of the application and then select the application to which you want to associate the role (in our example App001).
- Click on the **Save** button.

At the end of this step, you have all the required information to declare on the Use IT Cloud platform. 

## Configure Policies for Azure Key Vault Entities
This section is optional, it is used for inventory requirements
Azure Key Vaults have entities that are not accessible using the policy that is set up when the Azure account is onboarded to Use IT Cloud (described above). This is because by default Azure does not grant access rights to vaults, secrets, certificates, and keys. In addition, new entities may be created from time to time. The UIC platform, for example, needs to access these entities when inventorying your Azure environments.<br></br>
Follow the steps below to set up an Automation account and runbook in your Azure account, that will periodically grant rights to UIC to access these new entities. You must set up such an account and runbook for each Azure subscription.<br></br>
Follow the steps below to set up an Automation account and runbook in your Azure account, that will periodically grant rights to UIC to access these new entities. You must set up such an account and runbook for each Azure subscription.

### Create an automation account and runbook on Azure
In this step, you will create an Automation account and runbook, with access to the subscriptions containing the Key Vaults.
- Create an Azure Automation account, with the owner role for the subscription containing the Key Vaults with the entities that need to be inventorying by UIC platform. See https://docs.microsoft.com/en-us/azure/automation/automation-intro for details about creating an Automation account.
- In the Automation Account pane on the left, select the account you created, select **Access control (IAM)**,  and then click **+Add** at the top of the pane on the right.

![Image](/img_UIC_Provider_Cred_Settings/mazimage012.png#bordered)

- In the Add Permissions dialog, grant Owner permission to the Automation account, as follows, and then click Save.
a)	**Role** – Owner
b)	**Assign access to** -  Azure AD user, group, or application
c)	**Select** -  enter the name of your Automation account, and then select the automation account

![Image](/img_UIC_Provider_Cred_Settings/mazimage013.png#bordered) 

- Repeat the above steps for each Azure subscription that has a Key Vault that needs to be updated (each subscription must have its own Automation Account and Runbook).
- Select **Modules** (in Shared Resources), update the list of modules, and then check that the modules **AzureRM.KeyVault** and **AzureRM.Profile** are in the list. If not, click **Browse gallery**, to search for it in the Azure gallery, and then import it.
- 
![Image](/img_UIC_Provider_Cred_Settings/mazimage014.png#bordered) 

- Select **Runbooks** (in Process Automation), and then click **Add a runbook**.
- In the Add Runbook dialog, select **Create a new runbook**. Enter a name for the runbook (say, KeyVault), and select type **Powershell**. Optionally, add a description, then click **Create**.

![Image](/img_UIC_Provider_Cred_Settings/mazimage015.png#bordered) 

### Prepare the runbook script
In this step, you will prepare a script that will grant permissions to the UIC application to access the entities in the Key Vaults. This script will then be scheduled as a job that is run periodically. The script used in this step is an example of a script. You can modify it, or replace it with your own script, if you are skilled in preparing automation scripts.
- Download the file KeyVaultRunbookScript.ps1 
- In the Runbook page, open runbook created in Step 1, and then click Edit.
- Copy the script from the file into the edit pane.
- Search for the variable $excludedKeyVaults, and set its value to exclude specific Key Vaults (if there are no exclusions, leave it blank):
```
$excludedKeyVaults = "DBKeyvault", "VMKeyvault"
```
- Save the changes and close the edit pane.
- From the Azure dashboard, select Enterprise applications, and then select UIC (the application that was created as part of the onboarding process).
- Copy the ObjectID value.

![Image](/img_UIC_Provider_Cred_Settings/mazimage016.png#bordered) 

- Return to the Runbook page, select again the runbook, and open the edit pane.
- Search for the variable $objectIds, and paste the value copied above.
$objectIds = "f81cf819- f710- 4c99- abd0- 2af561dba51e"
- Save the runbook script.
- Optionally, click Test, to open the Test pane, to test the script.
- Click **Start**, to start the test. When it completes, the dialog should indicate that the access policies were update for the vaults.

### Publish & schedule the runbook as an Azure job

- In the Runbook page, select the runbook created in Step 2, and open the edit pane.
- Click Publish.
- In the Runbook, select the runbook, and then select Schedules, (in the Resources section) and then click Add a Schedule
- Select Link a schedule to your runbook, and then Create a new schedule.
- Enter a schedule (for example, hourly). The repetition period should reflect the frequency with which new values are added to the Key Vaults.
- Click Create to save the schedule. The runbook will be run as a job according to a schedule that you set up for it.
- Repeat the above steps for each runbook (if there are more than one).
- In the Runbook page, select Jobs in the left pane to check the status of the jobs. A line will be each time the scheduled runbook completes.

## Azure storage accounts
If any firewall and virtual networks is associated with a storage account, UIC platform is unable to discover storage account services like blobs, files, queues, and tables.
The solution is to add the UIC ip address to Firewall and virtual networks of the storage account.

## Onboarding to UIC platform
Navigate to **[Count:User] => Cloud credentials**, select **Microsoft Azure** provider and then click ***Add credentials***

![Image](/img_UIC_Provider_Cred_Settings/mazimage017.png#bordered) 

The settings screen has a form that allows you to configure:

- **Credentials name***: The credential name must be unique.
- **Account type***: Select Direct or Reseller
- **Subscription ID**: Set subscription ID
- **Client ID***: Set Client ID
- **Tenant ID***: Set Tenant ID
- **Secret key***: Set Secret key
- **Regions to activate**: Select regions
- **Default region***: Select region
- **Proxy**: The proxy URL must be in the following format, ```https://user.password@host.port```

Select **Add**.

## Finops mode
For Finops mode, we need the following actions.

## Inventory mode
Azure Key Vaults have entities that are not accessible using the policy that is set up when the Azure account is onboarded to Use IT Cloud (described above). This is because by default Azure does not grant access rights to vaults, secrets, certificates, and keys. In addition, new entities may be created from time to time. The UIC platform, for example, needs to access these entities when inventorying your Azure environments.
Follow the steps below to set up an Automation account and runbook in your Azure account, that will periodically grant rights to UIC to access these new entities. You must set up such an account and runbook for each Azure subscription.

### Create an automation account and runbook on Azure
In this step, you will create an Automation account and runbook, with access to the subscriptions containing the Key Vaults.
- Create an Azure Automation account, with the owner role for the subscription containing the Key Vaults with the entities that need to be inventorying by UIC platform. See https://docs.microsoft.com/en-us/azure/automation/automation-intro for details about creating an Automation account.
- In the Automation Account pane on the left, select the account you created, select **Access control (IAM)**,  and then click **+Add** at the top of the pane on the right.

![Image](/img_UIC_Provider_Cred_Settings/mazimage012.png#bordered) 

- In the Add Permissions dialog, grant Owner permission to the Automation account, as follows, and then click Save.
	- **Role** - Owner
	- **Assign access to** - Azure AD user, group, or application
	- **Select** - enter the name of your Automation account, and then select the automation account

![Image](/img_UIC_Provider_Cred_Settings/mazimage013.png#bordered) 

- Repeat the above steps for each Azure subscription that has a Key Vault that needs to be updated (each subscription must have its own Automation Account and Runbook).
- Select **Modules** (in Shared Resources), update the list of modules, and then check that the modules **AzureRM.KeyVault** and **AzureRM.Profile** are in the list. If not, click **Browse gallery**, to search for it in the Azure gallery, and then import it.

![Image](/img_UIC_Provider_Cred_Settings/mazimage014.png#bordered) 

- Select **Runbooks** (in Process Automation), and then click A**dd a runbook**.
- In the Add Runbook dialog, select **Create a new runbook**. Enter a name for the runbook (say, KeyVault), and select type **Powershell**. Optionally, add a description, then click **Create**.

![Image](/img_UIC_Provider_Cred_Settings/mazimage015.png#bordered) 

### Prepare the runbook script
In this step, you will prepare a script that will grant permissions to the UIC application to access the entities in the Key Vaults. This script will then be scheduled as a job that is run periodically. The script used in this step is an example of a script. You can modify it, or replace it with your own script, if you are skilled in preparing automation scripts.
- Download the file KeyVaultRunbookScript.ps1 
- In the Runbook page, open runbook created in Step 1, and then click Edit.
- Copy the script from the file into the edit pane.
- Search for the variable $excludedKeyVaults, and set its value to exclude specific Key Vaults (if there are no exclusions, leave it blank):
$excludedKeyVaults = "DBKeyvault", "VMKeyvault"
- Save the changes and close the edit pane.
- From the Azure dashboard, select Enterprise applications, and then select UIC (the application that was created as part of the onboarding process).
- Copy the ObjectID value.

![Image](/img_UIC_Provider_Cred_Settings/mazimage016.png#bordered) 

- Return to the Runbook page, select again the runbook, and open the edit pane.
- Search for the variable $objectIds, and paste the value copied above.
$objectIds = "f81cf819-f710-4c99-abd0-2af561dba51e"
- Save the runbook script.
- Optionally, click Test, to open the Test pane, to test the script.
- Click **Start**, to start the test. When it completes, the dialog should indicate that the access policies were update for the vaults.

### Publish & schedule the runbook as an Azure job
- In the Runbook page, select the runbook created in Step 2, and open the edit pane.
- Click Publish.
- In the Runbook, select the runbook, and then select Schedules, (in the Resources section) and then click Add a Schedule
- Select Link a schedule to your runbook, and then Create a new schedule.
- Enter a schedule (for example, hourly). The repetition period should reflect the frequency with which new values are added to the Key Vaults.
- Click Create to save the schedule. The runbook will be run as a job according to a schedule that you set up for it.
- Repeat the above steps for each runbook (if there are more than one).
- In the Runbook page, select Jobs in the left pane to check the status of the jobs. A line will be each time the scheduled runbook completes.
