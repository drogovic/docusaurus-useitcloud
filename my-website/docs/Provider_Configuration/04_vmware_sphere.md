---
id: 2030
title: VMware vSphere
description: Clouds Credentials
sidebar_position: 4
---

```
Document version 2.1.0 (2020-10-12)
```

To configure an UIC Cloud Credential for VMware vSphere infrastructure, you need the following elements: 
- vCenter Server address  
- Connexion protocol
- Connexion port
- User name
- User password

In the rest of this chapter, we consider that you are familiar with VMware vSphere technology and its terminology and that you have already implemented a vSphere infrastructure, with a vCenter server having a version supported by UIC (the list of UIC supported versions is kept updated in the configuration dialog displayed by UIC). 

If you already have the elements mentioned above, you can directly proceed to the configuration step on UIC using your keys, which is described at the end of this chapter.<br></br> 
To allow UIC to control a vSphere infrastructure domain, UIC must authenticate with a user having an administrative role on this domain. If you want to create such user in vSphere, you can follow the instructions in the next paragraph.

## Adding a vCenter Single Sign-on user
Users listed on vSphere Web Client tab are internal to vCenter Single Sign-on, they are part of vsphere.local domain.

You can select other domains and view information about users. However, you cannot add users in these domains via vCenter Single Sign-on management interface of vSphere Web Client.
- Log into vSphere Web Client as administrator@vsphere.local or as another user with having vCenter Single Sign-on privileges.
- Users having vCenter Single Sign-on administrator privileges are part of CAAdmins group. Click on Home => Administration => Single Sign-On =>Users and groups.
If vsphere.local is not the selected domain, select it on the drop-down menu. You cannot add users to other domains.
 
From Users tab, click on the New User icon, the following message box appears:
 
![Image](/img_UIC_Provider_Cred_Settings/image053.png#bordered)

- Enter the user name (cannot to modified after the creation) and a password (it must meet the password policy requirements).
- Complete the other inputs (optional).
- Click on the OK button.
The newly created user initially has no permissions to perform management operations.

## Creating a custom role
We will create a custom vCenter Server role that matches the access control needs for Use IT Cloud environment. 
- Verify that you are logged in as a user with "administrator" privileges.
- Log into vCenter Server with vSphere Web Client.
- Select Home, then Administration => Roles.
- Click the Create Role Action (+) button, enter a name for the new role.
- Select the UIC privileges below:

![Image](/img_UIC_Provider_Cred_Settings/image054.png#bordered) 

- Datastore:
    - Allocate space,
    - Update virtual machine files,
    - Update virtual machine metadata,
    - Browse datastore
- Folder:
    - Create folder,
    - Move folder,
    - Rename folder,
    - Delete folder
- ESX Agent Manager:
    - Show
- Inventory Data Service tagging
- Virtual machine
- Host profile
    - Show
- Resource:
    - Assign a virtual machine to a resource pool,
    - Assign a vApp to a resource pool
- Network
    - Assign network
- Storage view:
    - Show
- vApp
    - Click on the **OK** button

## Assigning UIC permission to vSphere infrastructure
Assign the new user (Ex: **uic1**) the role that you created in the previous step (Ex: **uicRole**). It's important to add the user at the vCenter level so that it can have the same permissions throughout the object hierarchy as well as have access to various services. From that point on, you can always restrict the **uic1** user to a specific cluster, you can go down to that specific cluster and add permission for this user. 
- Assign the role created in the previous step (Ex: **uicRole**) to the new user **uic1**.
- Select **Home => Host and clusters**. Right click on the vCenter icon and select **Add permission**.
- Click on **Add**, then select the new user (Ex: **uic2**)

![Image](/img_UIC_Provider_Cred_Settings/image055.png#bordered)

- Click on **Add**
- Click on the OK button
- Assign the role (Ex: **uicRole**) you have created (for *UIC platform*) to the user

![Image](/img_UIC_Provider_Cred_Settings/image056.png#bordered)

In our example to deploy on vSphere infrastructure, we allowed the following elements:
 
![Image](/img_UIC_Provider_Cred_Settings/image057.png#bordered)

