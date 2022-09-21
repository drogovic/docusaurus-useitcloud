---
id: 300
title: User
description: User documentation
sidebar_position: 3
---

##  **1. Generalities**

##  1.1 About

Before starting the installation of the product, make sure to read the configuration instructions, advice and all other information included in this guide.

##  1.2 Typography and Font Conventions

The following conventions are used in this documentation:

Convention           | Labels
---------------------|------------------------------------------------------------
**boldface**		| **Labels, fields and dialog boxes.Key names.Controls and buttons to use.**
*italics*			| *Titles of other parts, chapters and sections of the manual. Titles of other manuals. Software names from Prologue and other providers.*
Constant width 		| ```Code blocks, Keywords and instructions.```
Bullet points		| * Short step-by-step procedures
**Note :**				| **Notes containing important information highlighted by the text.**
**Attention :** 		| **Messages of this type indicate the precautions that must be observed to avoid an error or a problem.**


## **2.	Introduction**

*Use IT Cloud* belongs to the family of CMP (Cloud Management Platform), it allows you to model and manage your deployments in hybrid environments combining public and private clouds. 

Thanks to its design and its unified interface, *Use IT Cloud* hides the complexity and diversity of different Cloud technologies. *Use IT Cloud* federates the various services offered by CSPs (Cloud Service Providers), it also offers additional services agnostic to cloud providers. *Use IT Cloud* supports network interfacing and secure inter-cloud connections.

Cloud deployments can be described into predefined templates that are registered in a customizable public or private catalog, organized into categories.
These deployments can be made from images of virtual machines pre-installed by you or from images available in cloud providers marketplaces. They may also be triggered from a library of dedicated applications scripts. This model is suitable not only for simple individual virtual machines but also for applications that may require clusters of virtual machines. 

*Use IT Cloud* integrates trace-ability (log files) and monitoring mechanisms. A graphical and dynamic representation of deployed architectures enables you to act directly, through a command pane, on each component of the deployed architecture.

*Use IT Cloud* can interface with various tools such as *Zabbix* for monitoring, *Puppet* and *Chef* for configuration management, LDAP for user management, SAML for SSO authentication and Google Authenticator for Multi-factor authentication. Other interfaces are possible on demand.

For DEVOPS teams, a set of REST APIs and command-line access to the platform allow you to automate your deployments and integrate them into your processes.

*Use IT Cloud* supports the management of the following virtualization and cloud technologies:
* VMware vCloud and vSphere,
* Private clouds based on OpenStack ®,
* Public clouds such as Amazon Web Services, Microsoft Azure, Cloudwatt, and Softlayer.
Other cloud providers technologies can also be added on demand.
This guide is intended for administrators, application developers, and users who have good knowledge of the Cloud environments, and who want to manage their application deployments more simply and efficiently in the clouds.


## **3.	General Description of the Main Menus**

The first chapters of this document explain all the commands available by exploring all the menus of the interface. Deployment scenarios will be described in sections 4 and 5.

When you connect to the *Use IT Cloud* portal you access directly to the home page presenting the main menu commands.
The **Home** page displays two widgets that indicate the deployments made and recent events (actions performed) associated with deployed applications. By clicking on *Use IT Cloud* in the menu bar (top left) you will be automatically returned to this home page.

![image002.png](/img_user_en/image002.png)
 
The left pane (**"Deployments"**) shows the list of recently deployed applications, their labels and their states. The right pane shows the list of recent events, the applications they are related to, their production dates and timestamps. 

The complete main menu commands that users may use, depending on their roles and permissions, are described in the following sections :
* The **Deploy** menu presents has one sub-menu :

![image003.png](/img_user_en/image003.png) 

* **Catalog** allows an access to the list of pre-defined available applications that are ready for deployments 

* The menu **Design** provides commands for the description of application templates, library scripts and operating system images :

![image004.png](/img_user_en/image004.png)

* **Templates** uses a wizard that allows for the description of the infrastructures being deployed. Templates reference virtual machines that may be customised using startup scripts.
* **Scripts** allows editing and referencing scripts that may be used to customise virtual machines. 
* **Images** helps in defining and referencing operating system images that may be used in the templates. 
* The menu **Manage** allows for the supervision of post deployment phases. 

![image005.png](/img_user_en/image005.png)

* ***Deployments*** allows administration and access to deployed applications.
* ***Deployments*** Graph presents an interactive graph of all the deployed infrastructures.

The menu **Clouds** shows all managed clouds and allows the configuration of each of them :


![image006.png](/img_user_en/image006.png)

* The settings menu is intended for the management of accounts and catalog settings. The list of commands under the settings menu depends on the user’s profile. 


![image007.png](/img_user_en/image007.png)

The **accounts** command may be used to manage accounts settings. The **Catalog** command allows to manage the applications catalog.


## **4.	Detailed Description of the Main Menus**

## 4.1 Deploy Menu

The **Deploy** menu shows the configured and ready-to-deploy applications from the *UIC* Catalog.

### 4.1.1 Catalogue

The applications **Catalog** is organized into categories (left-hand column), each category contains a set of applications that are selectable for deployment. New public or private categories can be created and added to the list of existing categories, from the **Settings => Catalog** menu. Each category can be enriched with new applications.
 
![image008.png](/img_user_en/image008.png) 

The left column shows the different categories of software and applications (operating systems, databases, CRM, CMS, etc.) defined in the catalog. Just click on a category to see the items it offers, or directly enter the name of the item you want in the search box.  
The Catalogue offers two tabs (Central zone):
Products provides information on available items:
* **Name**: Indicates the name of the item,
* **Category**: Recalls the title of the category,
* **Description**: Presents the element in a summarized form. See details will redirect you to a more detailed description.
* **Add to Cart** : add the item you want to your shopping cart, and my cart inserts it into your private cart
My Cart allows you to view the content of your cart. 
Checkout goes to the '' preparing deployments '' stage of your pre-selection
Remove allows you to delete the item from your shopping cart.

![image009.png](/img_user_en/image009.png)

The **Deploy** button displays the page **Manage Deployments** appears:

![image010.png](/img_user_en/image010.png) 

**Labels**: this zone allows you to name VM,
**Provider** menu lists created providers,
**Tenant** menu lists all existing tenants,
**Region** menu lists all available regions
**Confirm** button allows to:
* Alows to validate the informations on the page **Preparation**
* To access to configuration settings of the Prepare Deployment

![image011.png](/img_user_en/image011.png) 

The **Network, Infrastructure, Customizing, Settings, Monitoring** tabs are explained in the chapter 4.14.2. Provisioning preparation

## 4.2 Design Menu

*Use IT Cloud* also offers you commands to define and configure new applications.  You can then deploy them and check that they are functioning correctly before publishing them on the public catalog or on your private catalog.

The **Design** part includes three commands for: 

* Creating the descriptions of applications and infrastructures to be deployed,
* Access to a library of scripts that will be used to customise your applications,
* Image management to reference images of virtual machines already prepared by vendors or to create and register yours.

Scripts and images are template configuration elements.

### 4.2.1 Templates

The **Templates** command in the **Design** menu allows you to create the description of an application infrastructure. 
The application templates presented on this page can be modified, tested, deleted. Once the description of the application is validated, it is possible to submit it to the platform operator to be published in the catalog and make it accessible to all accounts.

![image012.png](/img_user_en/image012.png)

This form shows the templates created (this table is not displayed if no template is present), and an edit field to create a new template.
The following settings of the already created templates are displayed :  
**Template name**: This the name that identifies the template
**Category**: Name of the category to which the template is attached, 
**Description**: Description of the template, 
**Creation date**: The date and time on which it was created, 
**Update Dat**e: Date and time on which the template was updated,
From the **Actions** column, several operations are possible on the templates:
The **Edit** button allows you to go back to edit mode and review the application description, or to activate other commands using the drop-down menu, see Chapter 4.13 Using an Existing Application Template:
* **Test** : allows you to launch and check the application deployment and execution before submitting it,
* **Export** : Allows to export a template between plateforms
* **Submit application** : allows the portal operator to be asked to publish the application in the catalog.
* **Delete** : removes the application from the list.
To follow the creation of an application's template, please see Chapter 4.14 Create a new application template.

### 4.2.2 Scripts

*UIC* provides an extensible database of private and public scripts. Private scripts are visible and usable only by the owner account. Public scripts are shared by all accounts.
The scripts allow the personalization of virtual machines. They are invoked and associated with VMs in templates. Environment variables can be defined and initialized and can be used in script code. The values of the environment variables are customizable in the deployment configuration phase of virtual machines. Personalized scripts are executed at the first start of the VMs.
The scripts are categorized into two categories, private scripts and public scripts displayed in the **My Scripts** and **Public** scripts tabs, respectively. 

The **Design => Scripts** menu, displays the **My scripts** page as illustrated in the figure below :

![image013.png](/img_user_en/image013.png)

Tab display is customable. Specify the number of entries you want to be displayed per page (10, 25, 50, or 100). 
**Add scripts** button : add a new script
The table presents six columns (scripts private or public) summarizing the characteristics of the scripts:
**ID** : indicates the unique credential of the script in the scripts database
**Name** : recalls the name of the script
**Description**:  gives a summary description of the script
**Public/private** : indicates the type of the script (public or private script). If it is a public script, other accounts can use it in their templates.
**Created at**:  presents its date and time of creation
**Actions**:  allows you to modify, duplicate, or delete the script.
**Note** : tab Public Scripts has no action Delete
**Previous** and **next** : allow you to view the previous or subsequent pages.

#### 4.2.2.1 Add Private Script

The **Design => Scripts** menu, displays the **My scripts** page as illustrated in the figure below :

![image013.png](/img_user_en/image013.png)
* The **Add a script** button displays the following window:

![image014.png](/img_user_en/image014.png)

* Name: Enter the name of the script
* Description: Briefly describe the script's purpose
* Script: Enter the content of the script here. Scripts can be written in any scripting language. Simply indicate the executing program at the beginning of the script (ex: #!/bin/bash), or invoke the script by launching it with the right interpreter program.

The **Public script** checkbox allows you to publish the script and share it with the other *UIC* accounts.
The lower part of the form gives access to the declaration of variables that will be used by the script. 
The **"+"** and **"-"** commands allow you to add or remove environment variables (variable name, Description, default value).
* Press + Add the script button to register it in the scripts library.
**Note : Adding a Public Script is done in the same way**

### 4.2.3 Images

Thanks to its templates model, *Use IT Cloud* provides a Cloud agnostic mechanism for describing Cloud infrastructures that can be deployed on different Clouds and in different regions. A template describes the resources of one or more VMs (also referred to as nodes in this document). Among these resources, the system image is an essential element. 

*Use IT Cloud* offers a list of generic and editable *UIC* images. Each of the images refers to the different system images available from cloud providers in different regions. 

So in templates, when a system image is associated with a node, actually it is only a reference to a system image that is performed. It is at the time of deployment, when the provider and region are selected, that *Use IT Cloud* selects the vendor's system image ID.

Cloud vendors System image IDs change regularly. The list of *Use IT Cloud* image references and their corresponding cloud providers images is updated automatically by *UIC* from a central *UIC* repository.
 
#### 4.2.3.1 Insert image 

The menu  **Design => Images** tab **Public Images** displays:

![image015.png](/img_user_en/image015.png)

**Show entries** (top or bottom left): Specify the number of entries you want to be displayed per page (10, 25, 50, or 100). 
Search allows you to filter by a label.
The **Public images** and **Private images** tabs display the information related to them: 
**ID** 		indicates the Unique credential in the *Use IT Cloud* database,
**Family** 	means the system image group, for example, a Free Linux distribution family or a Windows OS family (Windows Server, Windows SQL server, ...), 
**Name**		 is the name of the image *UIC* reference,
**Actions** 	makes it possible to consult with the suppliers the images associated with the *UIC* r	eference image, and to check whether an image is available in a region at a cloud provider.
**Previous and Next** allow you to view the previous or subsequent pages.
The **Create Private image** button allows you to enrich the image list by adding private images. 

For example, if there is a system image called "IMG1" provided by a cloud provider "A" in one or more regions. To associate "IMG1" with an instance in a template, the first step will be to create a *Use IT Cloud* reference to that image. 
* Press the **Create Private image** button, the following form is used to define the *Use IT Cloud* image reference.

![image016.png](/img_user_en/image016.png)

* Fill in the input fields and then click the **Create Private image** button, the following screen appears:

![image017.png](/img_user_en/image017.png)

Once the reference image is created, it will be present in the private image table, using the menu **Design => Images, Private Images** tab.
* Click the **Reference a Provider image** button to associate the "IMG1" image of Vendor "A".
Use the **Reference a Provider image** form displayed here below, to search for and associate the "IMG1" image with the *UIC* image reference.

![image018.png](/img_user_en/image018.png)

The **Provider and Region** areas provide access to the list of private images available from the Cloud Provider, "IMG1" must be included. 
* Fill in the Default User and password fields corresponding to your system image. These settings will allow the instances personalization and will give the ability to access to the instances from the *UIC* portal (for example, using SSH and RDP connections).
* Click the button Reference this image to add it to the images database. 

Once the image is referenced, you can associate it with the VMs described in your templates.

## 4.3 Manage Menu

The **Manage** menu allows the management of the post deployment phases. You can administer and access all deployed applications, display Interactive graphs and show the entire deployed infrastructure. Monitoring shows the status of metrics associated with virtual machines.

### 4.3.1 Deployments

The menu **Manage => Deployments** allows administration and access to all applications (templates) that are deployed. 

![image019.png](/img_user_en/image019.png)

This page displays a table with the list of deployed applications and a set of columns :
**Credential :** 	Unique credential created by *UIC* in the deployment database.
**Application :** 	Name of the application template in the catalog.
**Label :** 		User-assigned distinguishing label of the application instance.
**Provider :** 	The name of the cloud provider that hosts the deployed application.
**Nodes :**		The number of nodes (virtual machines) that make up the application.
**State :** 		indicates the status of the application:  "being deployed ",  "deployed ", 
"Deployment failure",  "being deleted " or  "removed ". 
**Actions :** 	Context Menu that allows you to perform two types of actions, administration or
access:
- **Delete**: Removes the application (all nodes).
- **System access**: SSH, RDP or VNC type access.
- **Webmode** application access (e.g. access to the application Web site).
Different accesses are possible from the *UIC* portal, they are defined in the application templates.
In order to allow access from the portal, *UIC* automatically generates the configuration parameters :
SSH key-pairs : for use with an SSH client or SSH Web client integrated into the *UIC* portal,
* RDP configuration files to download,
* VNC Settings.

#### 4.3.1.1 Application’s Administration

When you click the Deployment **credential** link, you access the details of the deployed application's administration page.

![image020.png](/img_user_en/image020.png)

This page is composed of 3 different areas, the higher one contains:
The **Delete** button that allows to remove all the nodes of the application. 
The **Template** button directs you to a page in the YAML format, which describes the resources used for this deployment.
A table with the application deployment information summary (deployment date, status, Cloud providers, the number of nodes associated with the deployment) is also displayed. 

The second part, in the middle of the page, entitled **Nodes**, shows details about the deployed nodes :

![image021.png](/img_user_en/image021.png)

<u>**Node Actions**</u> 
The list of possible actions depends on the chosen cloud provider. Otherwise, you can run independently different specific actions on the different nodes.

![table001.png](/img_user_en/table001.png)

The available button actions simplify node access on condition that the corresponding application is accessible from the administrators machine.
The list of actions below is given for reference only and may not match the list of actions supported by the version of your *UIC* platform.

![table002.png](/img_user_en/table002.png)

This field shows the list of access types configured for a node. These access types are displayed according to the options that have been set during the application configuration phase. 

![image022.png](/img_user_en/image022.png)

*UIC* supports 4 access types :
WEB<span class='tab'>&emsp;</span>Web access to the deployed application
SSH<span class='tab'>&emsp;</span>Prepares the necessary parameters for the SSH connection
RDP<span class='tab'>&emsp;</span>Prepares the parameters needed for the RDP connection
VNC<span class='tab'>&emsp;</span>Prepares the necessary parameters for the VNC connection

![table003.png](/img_user_en/table003.png) 

 
#### 4.3.1.2 Security Groupe Access from VM 

Menu **Manage => Deployments**: When you click on the Security Group link, the security group page appears. This form is Cloud vendor based, and in the case of AWS, the view displays as follows:

![image023.png](/img_user_en/image023.png)
 
Security Group information is displayed, click **Edit** button to modify a rule:

* Enter the desired port, protocol, ... in the zones provided for this purpose,
* Click + or - to add or remove a rule and click **Validate rules**.

![image024.png](/img_user_en/image024.png)

The third part of the page displays **Volume and Monitoring** tabs as shown below:

![image025.png](/img_user_en/image025.png)

**Volumes** Tab allows you to create, attach or detach system volumes (disks) for usage within the node.
* The **Create** button displays a form for defining a Volume. The form content depends on the Cloud provider selected for this node. For example, the displayed form, in case of provisioning from AWS, is as follows :

![image026.png](/img_user_en/image026.png)

* Complete the input fields : Name, Type, Size ... 
* Click the **Create** button, a link will be added under the **Volumes** Tab, as shown in the following screen :

![image027.png](/img_user_en/image027.png)

List of volumes with corresponding informations :  
**ID** : Volume Credential,
**Disk number** : Disk Number, 
**Size** : Disk size,
**Type** : Disk type (magnetic, SSD…)
The actions that may be applied to a created volume are :
* **Attach** : allows to attach a volume to a VM,
* **Detach** : allows to detach a volume from VM,
* **Force the detachment** : allows to force the detachment of a volume if the soft detachment doesn’t succeed,
* **Delete** : allows to delete a volume

 
### 4.3.2 Deployments Graph

The **Deployments Graph** menu allows to display your deployed applications and VMs using graphical representations :
Click the **Manage => Deployments graph** menu, the following window appears:  

![image028.png](/img_user_en/image028.png)

The page has two parts, a first on the left that lists the applications deployed from the *UIC* platform. The second part is central, with one or more interactive graphs, they correspond to the deployments made. 

The end nodes represent the deployed VMs, they are attached to the virtual networks of the providers (and to the region in which they have been defined according to the providers).

In the figure above, the deployment of the application was done on a virtual network at vCloud. There are two deployed VMs, and they are active (green dot on each node), otherwise the patch is red. 

When you select the Wordpress application on the left pane, two virtual machines (nodes) are linked to this application (highlighted in green). 
On the right, a third part of window appears, this one gives access to the possible actions on the application.  

![image029.png](/img_user_en/image029.png)

More details can be found in the section **4.3.1 Deployments** of this document.

## 4.4 Clouds Menu (providers)

This menu allows an access to services and to the configuration of the services subscribed for your account at **Cloud** providers. 

![image030.png](/img_user_en/image030.png)

Thus, if you have accounts at all the Cloud providers supported by *UIC*, the Clouds menu displays the following commands :
Details on the features supported for each Cloud are provided in the following sections. 

### 4.4.1 Access to VMWare vCloud Services

The connection to the infrastructure from the *UIC* platform is feasible provided that it has an "Organization Administrator" role access. You must also have a cloud infrastructure managed by VMWare vCloud Director. The *UIC* platform version 1.1.1 supports vCloud versions 5.5 & 8.2. 
To access your vCloud platforms, select the **Clouds menu => vCloud => Tenant** as shown in the following figure :
 
![image031.png](/img_user_en/image031.png)

*Use IT Cloud* then displays the list of vCloud resources that are managed, namely, vApps, volumes, affinity rules, catalogs, networks, distributed firewalls, gateways, quotas, and flavoers.

![image032.png](/img_user_en/image032.png)

The sections below describe in detail the management of resources from *UIC* dashboard.

#### 4.4.1.1 vApps

A vApp is a set of virtual machines, possibly interconnected by one or more private network(s). 
When you select vApps menu, the list of all existing virtual machines appears along with the information and actions related to them.

![image032.png](/img_user_en/image032.png)

**Name**: Specifies the name of all virtual machines (vApp name), 
**Status**: Presents the status of all virtual machines, 
**Number of VMs**: Indicates the number of virtual machines linked to this set (Ubuntu ...), 
**Network Name**: Specifies the name of the network where the virtual machine is connected

The **Actions**  button: 
**Start :** starts the instance
**Suspend :** Pauses the instance, 
**Stop :** Stops the instance, 
**Restart :** Restarts the instance, 
**Snapshot :** Create an image of the instance, 
**Rebuild :** Restores an image of the instance 
**Delete snapshot :** Deletes an image of the instance 
**Resize :** Resizes the instance 
**Delete :** Deletes the instance.

![image033.png](/img_user_en/image033.png)

#### 4.4.1.2 Volumes

From the **volumes** view, you have the ability to list, create, attach, and delete volumes from a machine.

![image034.png](/img_user_en/image034.png)

For each volume, *UIC* displays the following settings :
**ID** : Volume credential
**Name** : indicates the volume name
**Size** : Indicates the name of the volume
**Status** : status of the volume
**Attachment** : indicates the associated VM
**Owner** : Owner credential
**Storage Profile** : Indicates the storage profile type

**Possible Actions on a Volume**: 
* **Delete** : Deletes the selected volume<
* **Attach** : Allows to attach an available volume to an instance.
* **Detach** : Allows to detach a volume from an instance.

##### 4.4.1.2.1 Create Volume

Select the menu Clouds => vCloud => Tenant,
* Click on the tab Volumes, the following page displays:

![image034.png](/img_user_en/image034.png)

* Click the button Create Volume, the following box appears:

![image035.png](/img_user_en/image035.png)

* Complete the Name,
* Select volume size(GB)
* Chose technology type « SILVER ,  GOLD , PLATINIUM 3K » by means of drop menu Storage Profile
* Click the button Create

The Volume is created an visible in the page volumes table.
 
#### 4.4.1.3 Affinity Rules

The affinity and anti-affinity rules are used for the purpose of distributing a group of virtual machines between different hosts or to instantiate a group of virtual machines on a particular host. An affinity rule places a group of virtual machines on a specific host so that you can easily perform an audit of virtual machines usage. An anti-affinity rule distributes a group of virtual machines between different hosts, which prevents all virtual machines from failing simultaneously if a single host fails.
To manage the affinity rules in vCloud, use the **Clouds menu => vCloud => Tenant => Affinity Rules**. In this case, *UIC* displays the following form:

![image036.png](/img_user_en/image036.png)

The form displays already existing affinity rules, if any, with the following fields :
**ID** : Rule identifier
**Name** : Rule name,
**Polarity** : Polarity of the rule (affinity, anti-affinity)
**Instances** : list of instances that the rule will be applied to, 
**State** : Rule state (Enabled or not enabled)
**Actions** : List of possible actions (Edit or Delete) 

The **search** field allows you to search for specific affinity rule names.
The function **Change columns** : this button alows to display or not table collons.
The **csv** button allows to export tha table to a csv file.

The **Create Affinity Rule** button allows you to define an affinity rule for your virtual machines. 
 
##### 4.4.1.3.1 Create Affinity Rule

Menu **vClouds => vCloud => tenant => Affinity Rule** displays the below page:

![image037.png](/img_user_en/image037.png)

* When you click on the button Create Affinity Rule, you get the following form:

![image038.png](/img_user_en/image038.png)

* Complete the necessary elements to implement the rule: 
**Name**: Enter the name of the rule, 
**Affinity or Anti-affinity** : check the desired type of rule, 
**Enable checkbox** : check or uncheck to set its status, 
**vApps**: Select at least 2 virtual machines on which the rule will be applied.
* Validate by clicking the **Create** button, *UIC* creates this rule, it will appear in the rule list table as shown below:

#### 4.4.1.4 Catalogs (vCloud)

The Catalogs item allows to display VMware vCloud vendor catalogs with virtual machine templates that can be deployed with your own operating systems and applications.
From the menu **Clouds => vCloud => Tenant**, select Catalogs tab, *UIC* will display the list of  vCloud catalogs that the current tenant can use :

![image039.png](/img_user_en/image039.png)
 
The screen above displays the following elements :
**Show entries** : Allows you to specify the desired number of entries per page (10, 25, 50 or 100). 
**Search**: Allows you to filter datas based on their names. 
**Change columns**: This function lists attributes that can appear in the table, 
**CSV**: This push button allows you to export the Catalogs table to a csv file. 

The table shows the information related to the tenant's catalog.
**Name**: This is the name of the vCloud catalog resource,
**Visibility**: Indicates the type of catalog, private (linked to the organization) or public (linked to all organizations)
**ID**: Credential of the catalog, generated during the creation of the catalog under vCloud.

##### 4.4.1.4.1 Deploy from vCloud Catalog

From the menu **Clouds => vCloud => Tenant**, select Catalogs tab, *UIC* will display the list of  vCloud catalogs that the current tenant can use :

![image039.png](/img_user_en/image039.png)
 
* When you click a blue link in the Name column of the table shown in the previous window, a form similar to the following page appears:

![image040.png](/img_user_en/image040.png)

The table above lists templates that can be deployed from this vCloud tenant's catalog, with the following fields : 
**Name** : Template name,
**ID** : Identier of the template,
**Actions** : Allows to apply authorized actions on the template. 
The **Actions => Deploy** menu can be used to deploy an instance of the selected entry.

#### 4.4.1.5 Networks

The **Networks** page lists an organization's existing networks (vendor-side account). It allows deletion, network creation and association to a range of IP addresses. VDC networks are internal virtual networks.

![image041.png](/img_user_en/image041.png)

**Create Organization Network** button: This button is used to create an organization network within the vCloud infrastructure,
**Change columns**: This command allows you to select the attributes to display in the table, 
**CSV**: This button allows you to export this table to a csv file. 
The array of configured networks indicates, for each network, the following attributes: 
**Name**: Network Name 
**Status**: Network status (enabled or disabled) 
**Gateway IP**: IP address of the access gateway to this network 
**IP address ranges**: This field is used to specify the range of IP addresses for this network Subnet 
**Mask**: Subnet Mask 
**DNS**: DNS of the subnet 
**Actions**: Currently this menu contains only the **Delete** action, applicable to the subnet.

##### 4.4.1.5.1 Create Network

The creation of a new network may be done through the menu **Cloud => vCloud => Tenant** :
* Click the **Create Organization Network** button to create an organization network, the following form appears: 

![image042.png](/img_user_en/image042.png)

This form is to be completed according to different parameters, your vCloud infrastructure and your use case.

<u>**Selecting the Edge Gateway**</u>
**Name of the gateway**: This menu allows the selection of the desired gateway,

<u>**Network configuration**</u>
**Network Name**: This field is used to specify the network name,
* If you check the type of addressing, fill in the address range:
**First IP**: It is necessary to indicate the first IP address of the range to be created
**Last IP**: It is necessary to indicate the last IP address of the range to be created
**IP of the gateway**: It is necessary to indicate the IP address of the gateway
**Subnet mask**: You must indicate the subnet mask
Or,
* If you check the type of addressing, fill in the CIDR block:
**Block CIDR**: It is necessary to indicate the block of address, example (10.0.0.1 / 24),
**Primary DNS**: Must indicate the primary DNS
**Secondary DNS**: Secondary DNS must be specified
 
#### 4.4.1.6 Distributed Firewall

The **Distributed Firewall** item allows you to add an **NSX** firewall rule.
The NSX Distributed Firewall is a firewall built into the core of the hypervisor. It provides visibility and control over virtualized workloads and networks. It controls east-west traffic between the executed application workloads. For more information, see the VMware documentation related to this topic.

![image043.png](/img_user_en/image043.png)

It is possible to create a general rule or an Ethernet rule. Layer 3 rules (L3) are configured from the **General** tab. Layer 2 (L2) rules are configured from the **Ethernet** tab.

##### 4.4.1.6.1 Add Rule 

* Select the type of rule **General** or **Ethernet**, in our case, we will choose a rule from the **General** tab, the following window appears:

![image043.png](/img_user_en/image043.png)

* Click the **Add a rule** button, an additional line is added to the table above, fill in the fields provided for this purpose: 

![image043.png](/img_user_en/image044.png)

**N°**: Change the order of the existing rules by positioning your cursor on this two-way arrow, Name: Enter the name of the rule in the box provided for this purpose,
**Enabled**: Select Enable or Disable,
**Sources**: Select the following button  to specify a source to the rule other than an IP address, the **Edit Sources** window appears:  

![image046.png](/img_user_en/image046.png)

**Add IP**: Type the value you want to use and click **Add** it will be added to the **Sources** box.
**Caution: Valid values are an IP address, CIDR blocks, an IP range or the keyword "All".**
**Search by Type** drop-down menu: Select the type of sources to search for, click Search, the search result is displayed:

![image047.png](/img_user_en/image047.png)

It is possible to refine the search using the Filter area, 
* Click on the  ![image048.png](/img_user_en/image048.png) button of the object to add, it will be added in the **Sources** box. 

![image049.png](/img_user_en/image049.png)

The **Enable Exclusion** check box: When checked, the selected sources will be excluded, the rule will be applied to traffic from all sources, except the specified sources.
Otherwise, the rule applies to traffic from the source specified in the selected sources.
* Click the Contirm button from the Edit Sources window when all sources have been added to this rule.

The **Destinations** column: Select the ![image045.png](/img_user_en/image045.png) button to select the destinations of the rule, the **Edit Destinations** window appears:

![image050.png](/img_user_en/image050.png)

**Add IP**: Type the value you want to use and push Add button, it will be added to the box. 
**Caution: Valid values are an IP address, CIDR blocks, an IP range or the keyword "All".**
The **Search by Type** drop-down menu: Select the type of destinations to search for, click Search, the search result will be displayed as follows: 

![image047.png](/img_user_en/image047.png)

It is possible to refine the search using the **Filter** area,
* Click on the  object to add, it will be added in the **Destinations** box.

![image051.png](/img_user_en/image051.png)

The **Enable Exclusion** check box: When checked, the selected destinations will be excluded, the rule will be applied to all destinations, except the specified ones.
Otherwise, the rule applies only to the selected destinations.
* Click the Contirm button from the Edit Destinations window when all destinations have been added to this rule.
The **Services** column: Select the ![image045.png](/img_user_en/image045.png) button, the Services form appears: 

![image052.png](/img_user_en/image052.png)

The **Protocol** menu: Select the service protocol then click on the **Add service** button, it will be added in the **Services** box,
**Source port**: Enter the source port number, it is from this input area that you define to apply the rule to a specific "source" port,
**Destination port**: Enter the destination port number, it is from this input area that you define to apply the rule to a specific "destination" port,

The drop-down menu in the **Action** column provides two entries:
* **Allow**: This option allows traffic to or from specified sources, destinations, and services.
* **Deny**: This option blocks traffic from or to specified sources, destinations, and services.

From the **Direction** column drop-down menu, select the desired traffic (In, Out, In/Out) to apply to the rule.

The drop-down menu in the **Package Type** column, This option allows you to choose the type of IP packets: All, IPV4 or IPV6.

The **Applied To** column lets you find and define the objects to which this rule applies.
Select the edit button ![image045.png](/img_user_en/image045.png), the **Applied To** window appears:

![image053.png](/img_user_en/image053.png)
 
The **Search by Type** drop-down menu lists the resources that you may enforce the rules on **(Organisation networks, Virtual machines, VDC)** : Select the type of destinations to search for, click **Search** button. For organisation networks, an example of the search result looks as follows: 

![image047.png](/img_user_en/image047.png)

It is possible to apply filters on the results using the **Filter field**. 
* Click on the ![image048.png](/img_user_en/image048.png) button of the the entry to add, it will be inserted in the **Applied To** area: 

![image054.png](/img_user_en/image054.png)

**Note: When the rule contains virtual machines in Sources and Destinations, you must add the source and destination virtual machines to the <u>Applied To</u> list so that the rule works correctly.**
* Click the **Confirm** button from the Applied To window when all chosen entries have been addedto this rule.
 
#### 4.4.1.7 Gateways

The **Gateways** item lists all existing gateways, the table displays the following parameters:

![image055.png](/img_user_en/image055.png)

**Name** : Gateway name
**Firewall** : Firewall state (Enabled, Disabled)
**DHCP** : DHCP state (Enabled, Disabled)
**VPN** : VPN state (Enabled, Disabled)
**NAT** : NAT state ( Enabled, Disabled)
**Public IPs**  : Public IPs of the gateway
**Internal network interfaces** : Network Interfaces for internal communications
**External network Interfaces** : Network Interfaces for external communications.
 
##### 4.4.1.7.1 Manage Settings of Existing Gateways

The management of the settings (creating a new firewall rule, NAT, activate a VPN service) of gateways are accessible from the gateways item. 

![image056.png](/img_user_en/image056.png)
 
Click on the name of the gateway to manage and the appropriate form will be displayed as shown in the following figure : 

![image057.png](/img_user_en/image057.png)

We will detail the different tabs in the following chapters.

#### 4.4.1.8 Firewall Tab

The Firewall tab displays a table of existing firewall rules.

![image058.png](/img_user_en/image058.png)

**Rule ID**: Indicates the rule ID
**Name**: indicates the name of the rule
**Source**: Source address of the packets
**Destination**: destination address of the packages
**Service**: protocol to which the rule applies
**Action**: Action applicable to the rule (Accept, Decline)
**Confined**: yes or no for firewall rule
**Enabled**: Rule State
**Actions**: This button removes the security rules,

The **Create New Firewall Rule** button displays a form that allows you to add a new rule (as described above):

![image059.png](/img_user_en/image059.png)
 
* Complete the parameters according to your use case. 

#### 4.4.1.9 NAT Tab

This tab allows you to define the rules for translating IP addresses and communication ports: 

![image060.png](/img_user_en/image060.png)

The different information in the table represents the standard configuration parameters of the NAT rules, ie, the rule ID, the interface, the type, the originating IP, and so on.
The **Create New NAT Rule** button will allow you to define a new NAT rule.
When you click on the button **Create a new NAT rule**, a dialog box allows you to select the type of rule to be defined (SNAT (Source NAT) or DNAT (Destination NAT)):

![image061.png](/img_user_en/image061.png)

A **Source NAT** rule allows you to change the source address contained in the header of an IP packet. It also allows you to change the source port of the header of a TCP or UDP packet. Typical usage is for changing private addresses and ports to public addresses and ports for packets that are going out of a private network.

A **Destination NAT** rule is used to change the destination address contained in the header of an IP packet. It also allows you to change the destination port of the header of a TCP or UDP packet. Typical use is for redirection of packets destined for public addresses and / or ports to addresses and ports of a private network.

If you select **SNAT** or **DNAT** the following dialog box is displayed:

![image062.png](/img_user_en/image062.png)

Enter the parameters that define the new rule: 
* **Source IP/range** : The IP or range  source or destination address range 
* **Port to translate**: The value of the original to translate 
* **Protocol**: The transport protocol, the possible values are TCP, UDP, ICMP or All 
* **Translated IP/range**: The translation IP or range of IP 
* **Translated port** : The value of the redirection or transposed port

#### 4.4.1.10 Load Balancer Tab 

This tab allows you to define configurations that allow load balancing between multiple resources running identical services. When you click on this tab, *UIC* displays the dashboard below:

![image063.png](/img_user_en/image063.png)

This page displays the list of already defined configurations for the following resources : 
The globally applicable settings for load balancing, load balancing pools, application profiles, application rules, monitoring settings, and virtual servers members that participate to load balancing.

<u>**Load Balancer - Configuration Tab** </u>
The configurable settings on this tab apply to all pools defined in the Pools tab. 
* Specify these parameters according to your use case: 
**Enable the Load Balancer** : Check this box if you want to enable load balancer 
**Enable Acceleration** : Enable the '' Traffic Acceleration '' mode. In this case the load distribution will be at the level of the transport layer (TCP or UDP) 
**Enable Logging** : Enable Event Logging 
**Log Level** : Specify the desired logging level from a list of well-known standard levels (Emergency, Critical, Error, Info, etc.). 

<u>**Load Balancer - Pools Tab** </u> 
The **Pools**  tab displays the list of already defined server pools and their settings.

![image064.png](/img_user_en/image064.png)

**ID**: Pool ID 
**Name**: Name assigned to the pool 
**Description**: Pool Description 
**Transparent**: This fields describes the operating mode (Transparent, No transparent). In transparent mode, the load balancer will not hide the addresses of clients and servers. In non-transparent mode, the dispatcher will mask client and server addresses, perform client requests with its own address, and send server responses with its own address. 
**Algorithm**: Load balancing algorithm 
**Algorithm parameters**: parameters of the allocation algorithm 
**Monitoring ID**: Monitoring Profile 
**Number of members**: Number of virtual servers that are members of the pool 
**Actions**: Possible actions on each pool are **View Members, Edit, or Delete** 
The pools tab also allows you to define new ones, thanks to the button Create a new pool. When you click this button, *UIC* displays the following form :

![image065.png](/img_user_en/image065.png)

This window displays the following parameters: 
**Name**: Specify the name you want to assign to this server pool 
**Description**: Enter the description of this pool 
**Algorithm**: Indicate which type of load balancing algorithm you want to apply. The *UIC* platform version 1.1.1, offers the following algorithm options: 

**Load balancing Method**	|   **Description**
------------------------|----------------
*Round Robin*|	The distribution is done on servers in turn
*Ip-hash*|	Selects a server based on the source IP address of a packet
*Leastconn*	|The distribution depends on the number of connections
*URI*	|The distribution is based on the URI
*Httpheader*|	The distribution is according to the http header
*URL*	|The distribution is based on the URL

**Monitoring**: Select the monitoring configuration to apply to this pool. Monitoring configurations can be created using the **Monitoring** tab. 
**Transparent**: Check the transparent operating mode (load balancer will not hide client and server addresses) or non-transparent (the dispatcher will hide client and server addresses, perform client requests with its address, and forward the answers of the servers with its own address).

##### 4.4.1.10.1 Create a Pool Member (Load Balancing Server)

The servers on which the load is to be distributed are called load balancing pool members. The declaration of these members is made by clicking on the **Actions button => View members => Create a new member**. 
This action causes the following form to appears :

![image066.png](/img_user_en/image066.png)

**Enabled**: Check this box if you want this member to be enabled
**Name**: Indicate the name you want to assign to this member
**IP Address**: Enter the IP address of the member
**Port**: Enter the port number on which network traffic will be directed
**Weight**: Enter the relative weight of this member relative to other members of the pool
**Monitor Port**: Specify the monitoring port of this member
**Minimum connections**: Specify the minimum number of concurrent connections that this member can handle
**Maximum connections**: Specify the maximum number of simultaneous connections that this member can handle
Click on the button Create new member to validate the creation of the member.

<u>**Load Balancer - Application Profiles Tab**</u>
The Application Profiles tab displays the list of previously defined application profiles and their settings.

![image067.png](/img_user_en/image067.png)

**ID**: Profile ID
**Name**: Indicates the name of the assigned profile
**Type**: Indicates the type of profile selected (http, https ...)
**Enabled SSL Server**: Indicates whether to enable SSL server
**SSL Passthrough**: Indicates whether or not an SSL relay is enabled,
**Persistence Method**: Indicates the persistence mechanism used
**Http redirect to**: Indicates the redirection address
**Insert X-Forwarded For**: The load balancer indicates the origin address of the requests,
**Actions**: Edit or Delete

The Create New Application Profile button allows you to define new ones. When you click this button, *UIC* displays the following dialog box:

![image068.png](/img_user_en/image068.png)

**Name**: Enter the name you want to assign to this profile. 
**Type**: Select the type of profile from the list provided, *UIC* version 1.1.1 offers the following types: HTTP, HTTPS, TCP and UDP. 
**Redirect to**: Enter the redirect URL (if necessary). 
**Insert X-Forwarded-For**: Check whether the dispatcher should insert the original address of the requests. 
**Enable SSL Server**: Check if you want to enable the SSL server. 
**SSL passthrough**: Check if you want to Enable an SSL passthrough 
**Persistence**: Specify the persistence mechanism to use. Possible values are: None, source IP, Cookie, MSRDP. 
**Expires in (seconds)**: Specify the duration of persistence. 

<u>**Load Balancer - Application Rules Tab**</u>
The Application Rules tab displays the list of application rules for load balancing.

![image069.png](/img_user_en/image069.png)

**ID**: Credential of the rule, 
**Name**: Specifies the name of the application rule, 
**Script**: Indicates the script associated with the rule, 
**Actions**: List of applicable actions 
The Create New Application Rule button allows you to define new application rules. When you click this button, the following dialog box appears:

![image070.png](/img_user_en/image070.png)

**Name**: Specify the name you want to assign to this rule 
**Script**: Enter the content of the application rule script, 
The button Create validates the creation.

<u>**Load Balancer - Monitoring Tab**</u>

The Monitoring tab displays a list of monitoring configurations for virtual server pools.

![image071.png](/img_user_en/image071.png)

**ID**: Configuration ID,
**Name**: Specifies the name of this configuration,
**Type**: Indicates the name of the protocol used,
**Method**: indicates the monitoring method,
**Expected**: Answer expected,
**Interval**: Indicates the time interval between 2 checks,
**Timeout**: Timeout for a response,
**Maximum retries**: Maximum number of attempts in case of failure,
**Send**: Data to send
**Receive**: Expected data
**Extension**: Allows to specify advanced parameters, in the form of **key=value** pairs, separated by carriage returns. For example, warning=10 tells the load balancer that when a server stops responding after 10 seconds, its state should be changed to 'Warning'.
**Actions**: **Edit** and **Delete** Actions, applicable to monitoring.

The **Create new monitoring** button allows you to define new monitoring. When you click this button, the following dialog box appears:

![image072.png](/img_user_en/image072.png)

* Complete the following entry fields: 
**Name**: Specify the name you want to assign to this configuration 
**Type**: Select the type of protocol that will be used by this configuration. Possible values are HTTP, HTTPS, TCP, ICMP, or UDP. 
**Interval**: Specify the time interval between two checks 
**Timeout**: Specify the maximum wait time for a response to a verification request 
**Maximum number of retries**: Specify the maximum number of unanswered attempts 
**Send**: The data to send 
**Receive**: The data to check for answers 
**Extension**: Allows you to specify advanced parameters, in the form of **key=value** pairs, separated by carriage returns. For example, warning = 10 tells the load balancer that when a server stops responding after 10 seconds, its state should be changed to 'Warning'. 

**Note: When the chosen protocol type is HTTP or HTTPS, the following additional parameters appear:**

![image073.png](/img_user_en/image073.png)

The Method drop-down menu allows you to select the possible values:

![image074.png](/img_user_en/image074.png)

**URL**: Specify the value of the URL to use for verification 
**Expected**: Specify the expected string in the status line of the response to the HTTP request, for example HTTP / 1.1 

<u>**Load Balancer - Virtual Servers Tab**</u>

The Virtual Servers tab displays the list of virtual servers already configured :

![image075.png](/img_user_en/image075.png)

**ID**: Virtual Server ID
**Name**: Specifies the name of the server
**Description**: Indicates the description of the server,
**On**: Indicates whether the server is enabled or disabled
**IP Address**: Indicates the IP address of the server,
**Port**: Indicates the server connection port,
**Protocol**: Indicates the connection protocol used by the server,
**Application Rules**: Indicates the application rules associated with this server,
**Application Profile**: Indicates the application profile associated with this server,
**Default Pool**: Specifies the default pool to which the virtual server is attached
**Connection Limit**: Indicates the maximum number of simultaneous connections to the server,
**Actions**: Specifies supported actions for virtual servers.

The **Create New Virtual Server** button allows you to define a new server. When you click this button, the following dialog box appears :

![image076.png](/img_user_en/image076.png)

* Complete the following parameters: 
**Enabled**: Check this box to enable or disable the server, 
**Name**: Specify the name of the server, 
**Description**: Enter the description of this server 
**Acceleration**: Check this box if you want to enable the '' traffic acceleration '' mode. In this case the load balancer will be at the level of the transport layer (TCP or UDP) 
**IP Address**: IP address of the virtual server 
**Protocol**: Specify the connection protocol used for load balancing, 
**Port**: Specify the connection port used, 
**Connection Limit**: Specify the maximum number of simultaneous connections to the server, Connection Rate Limit: Specify the maximum number of connections (per second) that the server can accept, 
**Pool**: Specify the Pool this server participates in 
**Application Profile**: Specify the application profile associated with this server 
**Application rules**: Set the application rules associated with this server

#### 4.4.1.11 Virtual Private Network (VPN) Tab

The **VPN** tab allows to activate or not the private virtual network (s).

![image077.png](/img_user_en/image077.png)

**The IPSec** - Activation Status page offers the following services: 
**IPSec VPN Service Status**: This allows you to enable or disable the IPSec VPN service while dragging the cursor right or left, 
**Enable logging**: This allows to activate or not the logging of events (sliding of cursor to the right or to the left), 
The Logging Level drop-down menu allows you to configure or not the severity of logging with the following list of codes: 
* Emergency (Unusable System), 
* Alert (Immediate intervention is required) 
* Critical (critical error for the system) 
* Error (operating error) 
* Warning, an error may occur if no action is taken 
* Notice (Normal event worth reporting) 
* Info (For information) 
* Debug (debug message) 

The **IPSec - IPSec VPN** Sites page enables you to create and configure IPSec VPN connections between your organization's virtual datacenter and another site that uses an IPsec VPN gateway.

![image078.png](/img_user_en/image078.png)
 
The table lists the existing IPSec VPN site (s) with the following information or actions: 
**Name**: Indicates the name of the connection (optional), 
**Enabled**: Indicates whether to enable the IPsec VPN site, 
**Local ID**: Specifies the external IP address of the Edge Gateway instance (the public IP address of the Edge Gateway). This IP address will be the one used for the peer ID in the IPsec VPN configuration at the remote site. 
**Local IP**: Specifies the local IP address of the Edge Gateway instance 
**Local subnets**: The indication specifies the networks shared between the sites. 
**Peer ID**: This information uniquely identifies the peer site. 
**Peer endpoint**: Specifies the IP address or FQDN of the peer site (corresponds to the public address of the remote device you are connecting to). 
**Actions button**: This allows you to delete the connection, 
**Peer subnets**: Specifies the remote network to which the VPN connects. 
**Encryption Algorithm**: Indicates the type of encryption you have configured. The type of encryption you select must match the type of encryption configured on the remote site's VPN device. 
**PFS enabled (Perfect Forwarding Security)**: This option enables the system to generate unique public keys for all IPsec VPN sessions initiated by your users. 
**Authentication**: Indicates the selected digital modulation, currently the platform supports PSK. Diffie-Hellman Group: Indicates the encrypted scheme selected during configuration (ensures confidentiality between sender and receiver), 
**Extension**: Specifies the IP address

##### 4.4.1.11.1 Configure VPN Connection (IPSEC site)

When you click the Create IPsec Site button, the following window appears:

![image079.png](/img_user_en/image079.png)

**Enabled**: Click OFF to disable or ON to enable the IPsec VPN connection,
**PFS enabled** (Perfect forwarding security): Click OFF to disable or ON to enable the system generating unique public keys (all sessions) IPsec VPNs initiated by your users.
Enabling PFS ensures that the system does not create a link between the Edge Gateway private key and each session key. In addition, when PFS is enabled, IPsec VPN connections to this Peripheral Gateway experience a slight overhead.
**Name**: Specify the name of the connection (optional),
**Local ID**: Specify the external IP address of the Edge Gateway instance (the public IP address of the Edge Gateway). This IP address will be the one used for the peer ID in the IPsec VPN configuration at the remote site.
**Local Endpoint**: Specify the network on which the Edge Gateway will transmit to your organization's virtual datacenter.
**Local Subnets**: Enter a network range (not a specific IP address) by entering the IP address, for example, using the CIDR format, 192.168.99.0/24. A comma is needed to separate multiple subnets.
**Peer ID**: Specify the credential that will uniquely identify the remote device for the VPN connection, typically its IP address is public.
For peers using certificate authentication, this ID must be the distinguished name of the peer certificate.
For PSK counterparts, this ID can be any string.
An NSX-recommended practice is to use the public IP address or the fully qualified domain name (FQDN) of the remote device as the peer ID.
If the peer IP address is from another organization virtual datacenter network, you enter the native IP address of the peer.
If NAT is configured for the peer, you enter the Private peer IP address.  
**Peer endpoint**: Specify the IP address or FQDN of the peer site. When a NAT is configured for the peer, enter the public IP address that the device uses for NAT. 
**Peer subnets**: Specify the network range (not a specific IP address) of the remote network on which the VPN will connect, using the CIDR format, for example, 192.168.99.0/24. A comma is needed to separate multiple subnets. 
**Encryption Algorithm**: Select the type of encryption to configure, which must match the type of encryption configured on the remote site VPN device. 
**Authentication** : select the PSK option, 
**Diffie-Hellman Group**: Select one of the cryptographic options, this will allow the peer site and this edge gateway to establish a shared secret over an unsecured communication channel. The Diffie-Hellman group must match what is configured on the VPN device at the remote site. 
**Pre-shared key**: Select PSK as the authentication type, type an alphanumeric string. The secret key can be a string up to 128 bytes long. The shared key must match the key configured on the remote site's VPN device. 
**Extension** (Optional): Enter one of the following options: 
* securelocaltrafficbyip = IPAddress to redirect the local traffic of the edge gateway to the IPsec VPN tunnel, this is the default value. 
* passthroughSubnets = PeerSubnetIPAddress to support overlapping subnets.

#### 4.4.1.12 Quotas

The **Quotas** item shows the indicators of the consumption of physical resources on a vCloud host (processor, memory, disk) concerning the selected organization. It also shows the number of vApps, the number of VMs, the number of organizational networks, and the number of gateways deployed by the selected organization. The figure below shows all the information displayed by this command.

![image080.png](/img_user_en/image080.png)

**The Update button**: It allows you to refresh the displayed information. 
**Memory utilization**: The memory used (free and busy) is displayed graphically and in tabular form. 
**CPU utilization**: The use of the microprocessor processing unit (free or busy) is displayed graphically and in tabular form. 
**Disk Usage**: The percentage of free and busy disk is displayed as a graph and as a table. deployed vApps: Number of deployed vApps 
**Deployed VMs**: Number of deployed VMs 
**Organization Networks**: Number of networks associated with the organization 
**Gateways** : Number of gateways associated with the organization 
**Storage profile**: Indicates the type of storage used, this parameter depends on the technology, the terminology proposed by the vCloud infrastructure provider.

##### 4.4.1.13 Flavors

The Flavors tab is used to create, modify, and delete template templates for virtual machines.

![image081.png](/img_user_en/image081.png)

For each template, *UIC* displays the list of parameters that define it: 
**Name**: Name of the flavor 
**Number of cores**: Number of cores that will be allocated to this template 
**RAM**: RAM size in gigabytes 
**Disk**: Disk size in gigabytes 
**OS family**: Operating system associated with the template 
**Actions** : List of possible actions on the template. 

The **Change columns** button allows you to hide certain columns displayed or to display columns if they are hidden. 
The button **CSV** allows you to export the list of templates to a file in csv format. 
You can also create new flavors or modify existing ones using the button **Create or modify flavors**, *UIC* then displays the following screen:

![image082.png](/img_user_en/image082.png)

The form above allows you to enter the parameters of a new template or edit those of an existing template. These parameters are identical to those described in the previous paragraph.
Once you have entered your settings, validate your data by clicking the **Create or modify flavors** button on this form.

### 4.4.2 Access to VMware vSphere Services

* The connection to the infrastructure from the *UIC* platform is feasible provided that it has an "Organization Administrator" role access. You must also have a cloud infrastructure managed by VMware vSphere, versions 5.1, 5.5, 6, and 6.5. You can then use each of your vSphere tenants from the **Clouds =>  vSphere =>  Tenant** menu, as shown in the following figure:

![image083.png](/img_user_en/image083.png)

#### 4.4.2.1 Hosts and Clusters

The menu **Clouds => vSphere => tenant => Hosts** and Clusters allows access to vSphere infrastructures. Below is an example of a view displayed using this menu :

![image084.png](/img_user_en/image084.png)

This view shows the liste of vDC, and for each vDC, the liste and the number of objects belonging to the vDC, namely, the clusters, the hosts, the VMS, the templates, the disks and the networks.
Detailed informations about the hosts, the disques and the networks are also provided. Chosen names for the fields explain by themselves the nature of the information they provide.
![image085.png](/img_user_en/image085.png) This icon indicate the virtual Data Center,
![image086.png](/img_user_en/image086.png) This icon allows to displays the Cluster details,
![image087.png](/img_user_en/image087.png) This icon displays VM details, 
![image088.png](/img_user_en/image088.png) Indicates that the VM is stopped,
![image089.png](/img_user_en/image089.png) Indicates that th VM is running,
To display a Cluster détails, click on icon  ![image086.png](/img_user_en/image086.png)(Cluster name), the detailed view appears (example below) :

![image090.png](/img_user_en/image090.png)

*UIC* displays a graphical view and indicators about usage states of CPU, RAM and Disk.
The resourcesles pools belonging to the cluster are also displayed. For each ppol, Number of VM instances, indicators of reservations and limits of CPU and memory are also displayed.
Pool details may be displayed, from the list of pools, using the icon ![image087.png](/img_user_en/image087.png) associated to the pool name. The following screen presents an example of displayed information :

![image091.png](/img_user_en/image091.png)

This detail includes both its state, its constitution (including CPU resources, memory resources, VM instances) and its membership (Cluster, Host).
For each VM instance, some important attributes are also specified, such as the state of the instance, its IP address, the resources allocated, and the name of the operating system being run.
If you wish to have more details about a VM, it will be enough to click on the name of the VM in question, *UIC* will then display you a screen similar to that which is in the following figure:

![image092.png](/img_user_en/image092.png)

This screen displays all the important information of the VM as well as indicators of status and load CPU, memory and disk (monitoring of the hypervisor). 
*UIC* also displays a list of buttons / actions applicable to the VM: 
**Start**: Start a VM, 
**Stop**: Stop a VM, 
**Restart**: Restart a VM, 
**Clone**: Clone a VM, 
**Delete**: Delete a VM, 
**Snapshot**: Take a snapshot of a VM, 
**Resize**: Resize (CPU and / or RAM) a VM, 
**Create Disk**: Create a disk and attache it to a VM.

#### 4.4.2.2 Instances

The **Clouds => vSphere => Tenant => Instances** menu lets you view the entire list of VM instances that the vSphere server manages. *UIC* displays this list according to the presentation shown in the following figure:

![image093.png](/img_user_en/image093.png)

*UIC* displays the list of VMs as well as the parameters of the attributes selected from the button Change Columns, details of the attributes:

![image094.png](/img_user_en/image094.png)

**ID**: VM Credential
**Status**: VM status (power off or on)
**Name**: Name of the VM
**IP Address**: IP address of the VM
**Hostname**: The host name given to the VM
**Operating System**: VM Operating System
**Number of cores**: Number of VM cores
**RAM memory (GB)**: RAM size
**VDC**: VDC
**Resource Pool**: VM Resource Pool
**Uptime**: Total running time since the last start

Using the **csv** button, you can export this table to a csv file if you wish.

#### 4.4.2.3 Templates

The **Clouds => vSphere => Tenant => Templates** menu lets you view the full list of VM templates that your vSphere server manages. *UIC* displays this list according to the presentation shown in the following figure:

![image095.png](/img_user_en/image095.png)
 
*UIC* displays a list of available VM models and important settings for each model: 
**ID**: Model Credential 
**Name**: Model name 
**VDC**: Name of the VDC 
**Actions**: List of actions applicable to the model, for example '' Deploy ''. 

#### 4.4.2.4 IP Pools

The menu **Clouds => vSphere => tenant => IP Pools** allows you to view the complete list of IP address pools. *UIC* displays this list according to the presentation shown in the following figure:

![image096.png](/img_user_en/image096.png)
 
*UIC* displays the list of available IP pools and important settings for each pool:
**Name**: Pool name
**Range**: The range of IP addresses that make up this pool
**Subnet mask**: The subnet mask applicable to this pool
**DNS**: The DNS (s) associated with this pool. If you define a primary DNS and a secondary DNS, both will be visible in this field.
**Status**: Displays the number of IP addresses used in the IP pool provided
**Actions**: The Delete button is used to delete the pool.
The Create IP Pool button allows you to create, and *UIC* will display the form to enter the parameters that define the pool:

![image097.png](/img_user_en/image097.png)

* Complete the list of parameters wich is identical to that one described above.
* Click the button Create an IP Pool, the page **IP Pools** displays message “IP Pool is created”:

#### 4.4.2.5 Flavors

The menu **Clouds => vSphere =>tenant => Flavors** lets you view the entire list of VM templates that are defined. *UIC* displays this list according to the presentation shown in the following figure:

![image098.png](/img_user_en/image098.png)
 
For each flavor, *UIC* displays the list of parameters that define it:
**Name**: Name of the template
**Number of cores**: Number of cores that will be allocated to this template
**RAM**: RAM size in gigabytes,
**Disk**: Disk size in gigabytes
**OS family**: Operating system associated with the template
**Actions**: List of possible actions on the template.
The **Change columns** button allows you to hide certain columns displayed or to display columns if they are hidden.
The button **CSV** allows you to export the list of templates in a file in csv format.

You can also create new flavors or modify existing flavors using the button **Create or modify the flavors**, *UIC* then displays the following screen:

![image099.png](/img_user_en/image099.png)

The form above allows you to enter the parameters of a new template or edit those of an existing template. These parameters are the same as described in the previous paragraph. 
Once you have entered your settings, validate your data by clicking the **Create or modify the flavors** button on this form.

### 4.4.3 Access to Flexible Engine Services

The connection to the infrastructure from the *UIC* platform is feasible provided that it holds the role "Organization Administrator". You must also have a Cloud infrastructure managed by Flexible Engine.
From the *UIC* platform, select the **Clouds => Flexible Engine =>Tenant** menu (shown below):

![image100.png](/img_user_en/image100.png)

The *UIC* platform displays all the services related to Flexible Engine (instances, Volumes, Pair of keys ...).
Before implementing possible actions on supported services, it is necessary to select the region with which you want to work (below).

![image101.png](/img_user_en/image101.png)

Continue your settings by continuing the following sections.

#### 4.4.3.1 Add Credential for Flexible Engine

The *UIC* platform makes it possible to use the cloud services offered by Orange Business Services. To declare the credential, the settings must be made from the **Login / Account Settings => Cloud Credentials**:

![image102.png](/img_user_en/image102.png)

The **Cloud Credentials** page appears, select the **Flexible Engine** tab,

![image103.png](/img_user_en/image103.png)

* Click on the **Add an credential** button, the following form is displayed:

![image104.png](/img_user_en/image104.png)

Enter the following parameters:
**Name of the credential**: The name of the credential to Create.
**Note**: The name must be unique throughout the *UIC* platform
**Domain ID**: The public address of the domain
**User**: The name of the user (used for the connection to the host)
**Password**: The password
**Regions**: The region in which the credential will be attached,
**Proxy**: the proxy URL (not required).
* Click the Add button to validate the configuration.
The registration is done, you can now access the various parameters of your provider from the *UIC* platform (see 4.4 Menu Clouds).

#### 4.4.3.2 Instances

The **Instances** section lists by region the declared instances at *Flexible Engine*.

![image105.png](/img_user_en/image105.png)

A certain number of information and actions are available from the platform:

Show items (top or bottom left): Specify the number of desired entries per page (10, 25, 50 or 100).
**Search**: Allows you to filter by a label.
**The Change columns function**: It allows to display or not in the table all the parameters related to the instance and listed in the following figure:
**The CSV function**: You have the possibility to export the displayed web table in a CSV format,
The button ![image108.png](/img_user_en/image108.png) updates the displayed data.

The table shows the list and parameters of the created instances:
**Name / ID** Name or credential assigned to the instance (virtual machine)
**Image** Image credential of the VM,
**Geographical area** of the instance,
**Status** Instance status, enabled or disabled
**Private IP** address of the virtual machine
**Flavors** Specifies the instance type (size, CPU, Disk)
**Key pair** Identifying the key pair used by this instance
**Security Group** The security group associated with the instance
**Launch Date** of bringing the instance into service
**Actions**: 	Start: Starts the stopped instance,
* **Stop**: Stops the started instance (action available when the instance is stopped),
* **ReStart**: Restarts the instance,
* **Pause**: Pauses the instance,
* **Resume**: End Pause Instance,
* **Resize**: Resizes the template of the instance,
* **Delete**: Deletes the instance,

<u>**Stop an instance**</u>

* Select the **Stop** command from the **Actions** column, the following dialog box appears:

![image107.png](/img_user_en/image107.png)

* Click the **Stop** button, a message warns you that the instance is stopping,
* Wait, then refresh with the following button ![image108.png](/img_user_en/image108.png), the instance table appears with the stopped instance,

![image109.png](/img_user_en/image109.png)

<u>**ReStart an instance**</u>

Select the **ReStart** command from the **Actions** column, the following dialog box appears:

![image110.png](/img_user_en/image110.png)

* Click on the button **ReStart**, a message warns you that the instance is being restarted,
* Wait, then refresh with the following button, the instance table appears with the restarted instance,

<u>**Suspend an instance**</u>

* Select the **Suspend** command from the **Actions** column, the following dialog box appears:

![image111.png](/img_user_en/image111.png)

* Click the **Suspend** button, a message warns you that the instance is being suspended,
* Wait, then refresh with the following button, the instance table appears with the suspended instance,

<u>**Resume an instance**</u>

* Select the **Resume** command from the **Actions** column, the following dialog box appears:

![image112.png](/img_user_en/image112.png)

* Click the **Resume** button, a message warns you that the instance is being resumed,
* Wait, then refresh with the following button, the instance table appears with the active instance,

<u>**Resize an instance**</u>

Select the **Resize** command from the **Actions** column, the following dialog box appears:

![image113.png](/img_user_en/image113.png)

* Click the **Flavors** menu, select the desired one and click on the **Validate** button.
Wait, then refresh with the following button ![image108.png](/img_user_en/image108.png) , the instance table shows that the template of the instance has been taken into account,

#### 4.4.3.3 Volumes

The **Volumes** heading lists the volumes declared in the selected geographic area. An example is shown in the following screen:

![image114.png](/img_user_en/image114.png)

**Name / ID**: Indicates the name or ID of the volume,
**Description**: Describes the volume,
**Size (GB)**: Indicates the size of the volume,
**Status**: Indicates if the disk is already associated with a vm and if it is available,
**Type**: Identifies the technology used for the disk, for example SATA,
**Attached to**: Indicates the instance to which the volume is attached,
**Zone**: Indicates where the volume is located,
**Bootable**: Indicates whether the volume is bootable or not,
**Encrypted**: Indicates whether the volume is encrypted or not,
**Created**: Indicates the creation date of the volume,
**Updated**: Indicates the date of the volume update,
**Metadata**: Indicates how the volume is attached (possible metadata, readonly, and attached_mode).
**Actions**:
* Detach: This action detaches the volume from the node at any time,
* Attach: This action lets you attach a volume to an instance,
* Delete: This action allows Delete a previously created volume,
* The Change columns function: It allows to display or not in the table all the parameters related to the volume,
* The **CSV** function: You have the possibility to export the displayed web table in a CSV format,
The button  ![image108.png](/img_user_en/image108.png) updates the displayed data.

##### 4.4.3.3.1 Create a volume

From the *UIC* platform, select the **Clouds => Flexible Engine => Tenant** menu.
* Click on the Volumes item, the Volumes page appears:

![image114.png](/img_user_en/image114.png)
 
* Click the **Create Volume** button, the following dialog box appears:

![image115.png](/img_user_en/image115.png)

* Fill in the **Name** box,
* Select the volume size using the arrows,
* Choose the desired technology type "SDD or SATA" from the **Type** drop-down menu.
* Click on the **Create** button,
The created volume is now visible from the table of the volumes page.

#### 4.4.3.4 Key-pairs

This topic is used to manage by region the key pairs used. The key pair is provided by your provider. Key generated pairs will allow secure access to deploy servers.

![image116.png](/img_user_en/image116.png)

The table lists the Key pairs reported at Flexible Engine,
**Name**: Indicates the credential of the key pair,
**Size (GB):** Indicates the date of creation of the key pair,
**Imprint**: Check the validity of the security key,
**Actions**:
* Delete: This action deletes the key pair,

The **Change columns function**: It allows to display or not in the table all the parameters related to the volume,
The **CSV function**: You have the possibility to export the displayed web table in a CSV format,
The **Delete Key Pairs button**: This action deletes all keys selected in the table,
The **Create Key Pairs button**: This action allows you to create a key pair,

##### 4.4.3.4.1 Create Key-pairs

From the *UIC* platform, select the **Clouds => Flexible Engine =>Tenant** menu.
* Click the Key Pairs tab, the Key Pairs page appears:

![image116.png](/img_user_en/image116.png)

* Click the Create Key Pairs button, the following dialog box appears:

![image117.png](/img_user_en/image117.png)

* Enter the name of the key pair,
* Click the **Create** button, the key pair is created, the private key is automatically downloaded to the workstation.
If the download does not trigger automatically, a link will be provided to download the private key (Note however that the key download is only feasible once).
The key pair will appear in the Key Pairs table,

#### 4.4.3.5 Network

The **Network** (Virtual Servers) section allows you to List by Region the Network defined for that region at Flexible Engine.

![image118.png](/img_user_en/image118.png)
 
The table lists the Virtual Networks reported at Flexible Engine,
**Name / ID**: Indicates the name and credential of the network,
**CIDR block**: Indicates the configured CIDR block,
**Status**: Indicates the status of the network,
**Actions**:
* Delete: This action deletes the network,

The **Change columns function**: It allows to display or not in the table all the parameters related to the volume,
The **CSV function**: You have the possibility to export the displayed web table in a CSV format,
The button ![image108.png](/img_user_en/image108.png)  updates the displayed data.

##### 4.4.3.5.1 Create Network

* From the *UIC* platform, select the **Clouds => Flexible Engine =>Tenant** menu.
* Click on the **Network** section, the Network page appears:

![image118.png](/img_user_en/image118.png)

* Click the **Create Network** button, the Create Network form appears

![image119.png](/img_user_en/image119.png)
 
<u>**Network:**</u>
* Enter the network name in the Network Name box,
* Specify the address block, example (10.0.0.1 / 24) in the Network CIDR block box:

<u>**Subnet:**</u>

* Enter the subnet name in the Subnet Name,
* Enter the subnet name in the CIDR block box of the subnet.
* Select the location using the Availability Zone drop-down menu
* Enter the DNS server address in the DNS zone 1,
Enter the secondary DNS server address in the DNS zone 2

##### 4.4.3.5.2 Subnets

Each network created contains one or more Network sub-sections, which can be viewed by double clicking on the name of the network concerned, see below.

![image120.png](/img_user_en/image120.png)

From the above page you can get the information listed below
**Name / ID**: Name and credential of the subnet
**Availability Zone**: Subnet Availability Area Reference
**Block CIDR**: Scope of the subnet
**Gateway IP**: Address used for the gateway
**DHCP**: DHCP server address
**DNS**: Addresses of the Primary and Secondary DNS Servers
**Action** button: Gives access to the Delete function for the subnet in reference
The **Change columns function**: It allows to display or not in the table all the parameters related to the Subnet,
The **CSV** function: You have the possibility to export the information related to the sub-Network in a file in CSV format.
The button  ![image108.png](/img_user_en/image108.png) updates the displayed data.

##### 4.4.3.5.3 Create Subnet

To access the creation of a subnet, you must first display the details of the network in which you want to make changes. To do this, double click on the name of the network concerned to display the display below.

![image120.png](/img_user_en/image120.png)

* Click the **Add Subnet** button, the following dialog appears

![image121.png](/img_user_en/image121.png)
 
* Fill in the fields in the Create New Subnet dialog box:
**Name**: Enter the name of the new subnet
**CIDR block**: Specify the address block, example (10.0.0.1 / 24)
**Availability Zone**: Select the Availability Zone in the selected region.
**DNS 1**: Enter the DNS server address
**DNS 2**: Enter the secondary DNS server address.

#### 4.4.3.6 Security Groups

The **Security Group** section allows you to list Security Groups created and configured at Flexible Engine.

![image122.png](/img_user_en/image122.png)

The table lists the Security Group reported at Flexible Engine,
**Name / ID**: Indicates the name and ID of the security group,
**Description**: Indicates the designation of the security group,
**Actions**:
* Delete: This action deletes the network,
The **Change columns function**: It allows to display or not in the table all the parameters related to the volume,
The **CSV** function: You have the possibility to export the displayed web table in a CSV format,
The button  ![image108.png](/img_user_en/image108.png) updates the displayed data.

##### 4.4.3.6.1 Modify Security Group 

To modify an existing security group it is necessary to go through the detailed display of a security group to be modified.

![image122.png](/img_user_en/image122.png)
 
To do this, click on the name of the security group concerned to obtain a page displayed below:

![image123.png](/img_user_en/image123.png)
 
* Click the Add Rule button.
* Fill in the dialog box identical to the one below

![image124.png](/img_user_en/image124.png)

**From**: Enter the first port number to which the rule will apply.
**To**: Specify the maximum bound of the ports to which the rule will apply.
**Protocol**: Specify the network protocol concerned,
**Source**: Specify the source concerned (single IP address or IP address segment),
**Direction**: Indicate the direction of the network flow concerned (ingress, egress).
* Validate the rule added by action on the Create button

##### 4.4.3.6.2 Create Security Group 

From the *UIC* platform, select the **Clouds => Flexible Engine => Menu** menu.
* Select the **Security Group** tab, click the Create Security Group button, the Create Security Group form appears:

![image125.png](/img_user_en/image125.png)

* Name this group, this name must be unique in the Security Group database.
* Enter a short, textual description of this group.
The creation is successful, *UIC* displays the following screen:

![image126.png](/img_user_en/image126.png)

You can then add security rules to this group using the **Add Rule** button. You will then have to define the fields contained in the following form:

![image127.png](/img_user_en/image127.png)

* Enter the parameters defining the new rule, namely:
**From**: Enter the first port number to which the rule will apply.
**To**: Specify the maximum bound of the ports to which the rule will apply.
**Protocol**: Specify the network protocol concerned,
**Source**: Specify the source concerned (single IP address or IP address segment),
**Direction**: Indicate the direction of the network flow concerned (ingress, egress).
* Validate the creation of the rule by pressing the Create button.

The creation was successful, *UIC* displays the screen that lists all the rules created for this group, as shown in the following example:

![image128.png](/img_user_en/image128.png)

You can create as many security rules as necessary for your use case.

#### 4.4.3.7 Floating IP 

The **Floating IPs** section is used to display the list of floating IP addresses already created for a specific region. It also allows you to create new ones or delete those you no longer have use of.

##### 4.4.3.7.1 List of Floating IPs 

* From the *UIC* platform, select the **Clouds => Flexible Engine => Tenant** menu.
* Click the **floating IP** tab, *UIC* displays the page shown below:

![image129.png](/img_user_en/image129.png)

The Change columns function: It allows to display or not in the table all the parameters related to the volume,
The **CSV function**: You have the possibility to export the displayed web table in a CSV format,
The table displays the following information and actions:
**Floating IP**: Value of the floating IP,
**Status**: Status (attached, unattached),
**IP Address**: Private IP address of the attachment instance,
**Attached to**: Attachment Instance Id,
**Actions**: 
* **Detach**: detach the floating IP from the attachment instance
* **Delete**: Delete the floating IP.

##### 4.4.3.7.2 Create Floating IP  

From the **floating IP** item, press the **Create a floating IP** button,

![image129.png](/img_user_en/image129.png)
 
*UIC* then displays the following dialog box:
 
![image130.png](/img_user_en/image130.png)

Click the **Create** button, two messages will appear (being created, created),
* Click on the cross to make them disappear and update by clicking on the button provided, the newly created floating IP will appear in the table.

##### 4.4.3.7.3 Delete Floating IP  

Deleting a floating IP can be done using the **Actions => Delete** command located in the Actions column or by checking the lines of the floating IPs to Delete and using the **Delete floating IPs** button.

#### 4.4.3.8 Images 

* The Images tab is used to display the list of virtual machine images available from the supplier.
* From the *UIC* platform, select the **Clouds => Flexible Engine =>Tenant** menu.
Click the Images tab, *UIC* displays the page shown below:

![image131.png](/img_user_en/image131.png)

The **Change columns function**: It allows to display or not in the table all the parameters related to the images,
The **CSV function**: You have the possibility to export the displayed web table in a CSV format,
The button  ![image108.png](/img_user_en/image108.png) updates the displayed data.

**Name / ID**: Name or ID of the image
**Type of OS**: type of operating system, currently Windows or Linux,
**Visibility**: Area of visibility of the image (private or public),
**Minimum RAM**: minimum RAM required,
**Minimum Disk**: Minimum disk required,
**Creation**: Indicates the creation date of the image,
**Actions**: **Deploy**: Deploy the image.

#### 4.4.3.9 Quotas

Quotas is available from the **Clouds=>Flexible Engine=>Tenant=>Quotas** menu. This page shows the resource consumption indicators for the tenant in the selected region, as shown in the following sample screen:

![image132.png](/img_user_en/image132.png) 

The table above provides indicators on resources consumed on the tenant for a given region (Ex above => Quota for the Paris region - eu-west-0).
For each of these resources, *UIC* displays the following parameters:
**Name**: Indicates the name of the resource,
**Common usage**: indicates the value of the current usage,
**Limit**: indicates the maximum value that the holder can use.
The **Update** button allows you to update the tables and graphs on this page in real time.
The **Last Update** field indicates the time elapsed since the last update of the indicators.
The graphs show the resource consumption:
* The number of instances,
* The number of processors,
* The size of RAM,
* The number of floating IP addresses,
The number of Security Group.



### 4.4.4 Access to Amazon services

### 4.4.5 Access to services Azure services

### 4.4.6 Access to services Google services

### 4.4.7 Access to Cloudwatt services
 
## 4.5 Settings Menu (Client Account)

### 4.5.1 Introduction

The Settings menu offers various options, which are presented according to the defined rights (operator / customer).
Customer-type accounts have the rights to define their private catalog of services. This feature is accessed using the **Settings => Catalog => Private Categories** menu, as shown in the following figure:

![image132.png](/img_user_en/image133.png)

Private Categories Creation 
The creation of a new private category can be done from the **Settings menu => Catalog => private categories**, the list of created private categories of the catalog is displayed:

![image134.png](/img_user_en/image134.png)

* Click the Create Private Category button, the following window appears: 

![image135.png](/img_user_en/image135.png)

Click the Create Category button, which adds to the list of private categories:  

![image136.png](/img_user_en/image136.png)

Private categories can be deleted, modified, just click on the **Actions** drop-down menu => **Change / Remove**

**Note: When the private category is created, it is available from the Deploy menu => Catalog (left frame):**

![image137.png](/img_user_en/image137.png)


## 4.6 Settings Menu (Operator Account)

From the Settings menu you can create accounts and organize the private or public catalog, accept or reject the publication of applications submitted by other users.

### 4.6.1 Accounts

All existing accounts are visible to the operator from the **Settings => Accounts** menu. The name, company, nature, creation date, status and active actions are displayed. 

![image138.png](/img_user_en/image138.png)

The **Accounts** page displays a table that lists the different existing accounts and below actions. 
The button **Generate a Report**: Rapport generation in JSON/CSV format
The button **Create a new account**: New account creation
**ID**: Indicates the account credential in *UIC*. 
**Account Name**: Specifies the name of the account. 
**Nature** : Indicates the type of entitlement (operator, customer) granted to the account. 
**Account status**: 
* Active: The account is activated, 
* Waiting for validation of mail: The applicant must validate his e-mail so that the creation request is taken into account by the operator, 
* Waiting for validation by the operator: The operator can give his agreement to create an account by clicking on the Create and Show button. 
* Total Instances Deployed / Limit: Indicates the total number of instances deployed and the limit allowed for the account. 
* Created on: Indicates the account creation date. 

![image139.png](/img_user_en/image139.png)

The **Actions => View** column offers different functions: 
**Modify the limit of instances**: The operator can limit the total number of instances to deploy,
**Change status to Waiting for email validation**: The operator must choose this status to confirm the email of the account creation requestor, 
**Change status to Pending validation**: Waiting for validation by the operator: The operator validates the creation of an account, 
**Change status to Disabled**: The operator can enable or disable the state of the entity. 
**Delete account**: The operator can delete the account

#### 4.6.1.1 Create Account

From the **Accounts** page, it is possible to add an account on the fly by clicking on the button **Create a new account**, the following window is displayed :

![image140.png](/img_user_en/image140.png)

* Complete the fields above: 
**Account Name**: Select the company name 
**User Name**: User Name 
**E-mail**: User's email address 
**First name**: First name of the user 
**Last Nam**: User Name 
**Password**: Password of the user 
**Password confirmation** : Just click the Create Account button to appear in the list of users. 
* Cliquer sur le bouton **Create** pour qu’il apparaisse dans la liste des comptes.

### 4.6.2 Catalog (Creation)

The **Catalog** command from the **Settings** menu gives you access to your available applications. It is possible to create public or private categories from this one. When a request to publish applications is submitted by another account or another user, you accept or reject it from the **Catalog.**

#### 4.6.2.1 Access to Applications Catalog

* Select the **Settings => Catalog => Applications** menu to get the list of available applications, the **Application List** page appears: 

![image137.png](/img_user_en/image137.png)

The table shows the catalog applications with a certain amount of information: 
**ID**: Indicates the chronology order of the different application entries, 
**Application**: Indicates the name of the application, the system, 
**Description**: Indicates the brief description of the application, 
**Actions => Delete**: This action deletes the application from the catalog.
**Add to templates** : this function allows to clone selected template
**Export** : this action allows to export one application between two platforms

#### 4.6.2.2 Accessing User Requests for Publishing Applications 

Subsequently an user has defined and submitted an application so that it’s proposed and published in the Catalog, from menu Design => Templates, commande Actions => Application validation.
* Select the Application validation command from **Settings => Catalog**, the following page appears: 

![image141.png](/img_user_en/image141.png)

The table on the **Application Validation** page is empty by default. A user must define and submit an application in the design part so that it is proposed and published in the catalog.

In this case, the operator of the *UIC* platform will see this request on this page and may decide whether or not to add the application in the catalog.
All applications queued in the catalog are listed in the table with the following indications:
**Account Name**: The account name is indicated
**Name of the application**: It is indicated the name of the application
**Categories**: This is the name of the category to which the application is assigned
**Actions**:
The **Test Application** button: This function temporarily saves the application in the catalog (deployment configuration). The operator can test his deployment before making the decision to integrate it into the catalog from this command.
The **Add to Catalog** button: This action adds the application to the catalog.

#### 4.6.2.3 Create Public Category

The **Public Categories** command (**Settings => Catalog**) gives you access to the management of public categories (at creation, modification and deletion).

![image142.png](/img_user_en/image142.png)

* Click the **Create Public Category** button, the following window appears: 

![image143.png](/img_user_en/image143.png)

* Fill in the input areas, 
* Validate by clicking the **Create Category** button, the newly created category appears in your list of public categories.

![image144.png](/img_user_en/image144.png)

This creation procedure is the same for private categories except that you have to select the menu **private categories (Settings => Catalog)**.

## 4.7 Current Tasks Menu

The **Current Tasks** menu is located just to the left of the Deployment Configuration menu. It allows you to view all the activities in progress.
Click on the Tasks in progress menu, a window appears: 

![image145.png](/img_user_en/image145.png)

**Name**: Indicates the name of the task, 
**Status**: Indicates the status of the task, 
**Result**: Indicates the result of the task, 
**Creation**: Indicates the date and time of the creation of the task, 
**Actions**: Propose to erase or view in detail the selected task,

## 4.8  Deployments Configuration Menu

For each application present in this menu, you can perform the following actions, by clicking on the corresponding button :

![image146.png](/img_user_en/image146.png)

* **Configure**: Allows you to customize the application and its environment, before deploying it, (when you click the Configure a series of tabs button, linked to the different personalization items, appears under the list of applications to deploy).
* **Delete** Deletes the application from the temporary catalog.
* **Deploy**: Enables the deployment of the application, as indicated during the customization.
Refer to the chapter **5.6.2 Application provisioning preparation** for details on the parameters related to a provider.

## 4.9 Connection Credential Menu 

The connexion credential menu allows you to manage the settings of the different Users profiles (Administrator, Regular User) and Operator Account. 
* ***Regular user profile***: Has no rights on the account (unless the account administrator assigns him permissions through the roles), 
* ***Administrator profile***: Has full rights to the account, he can also create other account administrators and other regular users. 
* ***The Operator Profile***: Can create, set up accounts, users and can manage the *UIC* platform. 

Therefore, the menu composition of the connexion credential differs according to these profiles.
*Users* (Account Administrator/Regular user) or Operator (Global Administrator)

### 4.9.1 Regular User Profile 

The **Regular User** profile has very limited access to account settings, but has full rights on the user's settings.

![image147.png](/img_user_en/image147.png)

<u>**Account settings:**</u>
Info: The consultation of the general information is searchable, it is possible to modify the coordinates of the company.

<u>**User Settings:**</u>
**Info**: Shows the characteristics of the active account,
**Authentication**: Allows the modification of the login password
**MFA**: Allows to manage a Google Authenticator multi-factor authentication.

#### 4.9.1.1 Account Settings – Infos

![image148.png](/img_user_en/image148.png)

General information about the account is displayed, it is possible to change its coordinates.

#### 4.9.1.2 User Settings – Infos 

This command displays the account information of the user logged into the portal.

![image149.png](/img_user_en/image149.png)

<u>**Change User Information:**</u>

This page shows you different information, the Account Name (username), the first and last name of the user, Email address, date of creation of the user, Type, Roles, Groups, Type of connection. The other commands in the **User Parameters** drop-down menu are also accessible from the items on the left of this page.

#### 4.9.1.3 Authentication (Change Password)

This command is used to modify the current password by adding and validating a new password.

![image150.png](/img_user_en/image150.png)
 
#### 4.9.1.4 Multi-Factor Authentication 

This command allows to use the multi-factor authentication proposed by Google. This dual authentication mode requires, in order to validate the connection to the portal, the use of a login/password method and to confirm the connection with a code obtained on your smartphone via the Google Authenticator application.


##### 4.9.1.4.1 Configure the MFA Mode

* Get your smartphone to set up the **MFA** mode. 
* Download the Google Authenticator app from one of the major mobile download sites (PlayStore, Google Play, and App Store) and follow the instructions. 
* Select from the drop-down menu of the **MFA ID** (User Settings on the *UIC* Portal). The following screen is displayed: 

![image151.png](/img_user_en/image151.png)

* In the Devices input box, enter the desired device name, 
* Validate by clicking on the button Add a device (this name will be automatically associated with your smartphone), the following page appears: 

![image152.png](/img_user_en/image152.png)

* Install and launch the Google Authenticator app, 
* Scan with your smartphone the QR code presented on the displayed page (*UIC*), 
* Enter the code displayed on your smartphone in the Code field (this is only necessary for the first use of Google Authenticator). Once the code is entered, authentication is enabled.

Upon launch, the Google Authenticator application will display the code to enter to validate your connection to the portal. This code is updated every 30 seconds (in case of failure, repeat the code with the last code presented).

![image153.png](/img_user_en/image153.png)
![image154.png](/img_user_en/image154.png)
 
The **Desactivate** button removes double authentication. 
If the MFA is enabled, when you connect to the *UIC* portal a login code will be requested, in addition to your login / password.

![image155.png](/img_user_en/image155.png)


### 4.9.2 Administrator Profile

The Administrator profile (User) has all the rights on his account, he can also create other administrators of accounts and regular users).
All of these settings are presented by Block, Account Settings, Logs, and User Settings:

![image156.png](/img_user_en/image156.png)

<u>**Account settings**</u>

The account settings are accessible from the Operator profile. It gives access to all the settings of the account and the user. 
**Info**: Shows the characteristics of the active account, 
**Users**: Allows adding and editing users and importing from an LDAP directory, 
**Roles**: Allows creation, modification and deletion of roles, 
**User groups**: Allows the creation, modification and deletion of groups 
**LDAP**: Allows you to define the access and visualization parameters of an LDAP directory and to import the users, 
**SAML**: Sets the identity and service provider settings for SAMLv2.0-compliant Single Sign-On or SSO. 
Monitoring => *Zabbix*: To interface the platform with monitoring software, 
**Configuration Management:** 
- ***Puppet***: Allows interfacing with a *Puppet* configuration management server, 
- ***Chef***: Allows you to interface the platform to a *Chef* configuration management server. 
**Cloud credentials**: Configure cloud login credentials 
**Notifications**: Configure the notification mechanism settings 

<u>**Logs**</u>

The Logs command allows you to view the activity log of the *Use IT Cloud* platform. 

<u>**User Settings:**</u>

The User Settings menu is available to users (2 types: Account Administrator / Regular User) and the operator.  

#### 4.9.2.1 Account Settings - Infos

This command displays the account and company information. 
The Account Information includes:
* Name of the account (credential),
* The date of creation, 
* the number of users defined (operator not included)

<u>**The Company**</u> section lists information related to the company (values entered when creating the account):
* The name, address, city, zip code and country of the company.

![image157.png](/img_user_en/image157.png)

All information related to the Operator (Account Information) account is displayed in read mode.Toutes les informations liées au compte Opérateur (Information du compte) sont affichées en mode lecture.

#### 4.9.2.2 Users

The **Account Settings => Users** menu allows you to manage (create, edit, delete, import) users. 
When you launch this command, the users present (declared) and their characteristics are displayed.

![image158.png](/img_user_en/image158.png)

**ID**: Indicates the numerical credential of the user,
**Name**: The unique name identifying the user,
**First name and last name**: Full name of the user,
**Email**: Indicates the user's address,
**Type**: Indicates the user profile Administrator, Regular User,
**Roles**: Indicates the assigned role (this field can be empty if no role has been created and selected),
**User groups**: indicates the group (s), if any, of which the user is a member
**Connection type**: indicates the type of connection of the user
**Created**: The date of creation of the user
**Actions**:
* View, Edit (Operator): Change the password
* View, Edit and Delete (Regular User): Allows you to delete the user, change the user type and role,

##### 4.9.2.2.1 User Creation

The creation of a user is done from the drop-down menu of **Account Settings**, select the **Users** item.
* Click the Create New User button, the following form appears:

![image159.png](/img_user_en/image159.png)

* Enter the information, the ones whose wording ends with the * character are mandatory:
**Name**: Indicate the login ID 
**Email**: Enter the email address of the user (can not create the same address twice) 
**First name**: Indicate the first name of the user, 
**Last Name**: Enter the name of the user 
**Type**: Select the Account Administrator or Regular User profile, 
**Role**: This field can be empty if no role has been defined or selected, 
**User groups**: The list of groups of which the user can be a member 
**Password and confirmation**: Fill in the password and confirm it, 
* Click the Create User button, 

##### 4.9.2.2.2 Change User Type

* From the Account Settings => Users drop-down menu, the following window appears:

![image160.png](/img_user_en/image160.png)
 
**ID**: User's numeric ID 
**User ID**: Indicates the login ID of the user, 
**First and Last Name**: Indicate the first name and the last name of the user, 
**Email**: Indicates the email address of the user, 
**Type**: Indicates the Account Administrator or Regular User profile of the user, 
**Role**: This field can be empty if no role has been defined or selected, 
**User groups**: This field can be empty if the user is not a member of at least one group, Connection type: Indicates the type of connection (Ldap, local), 
**Created on**: Indicates the creation date of the user, 
**Actions:**
* The **View / Edit** button offers different views, Operator or User (Regular User or Account Administrator): 

<u>**Operator type case:**</u>
Operator user data are read-only at this form. Data can not be modified, as shown in the following figure:

![image161.png](/img_user_en/image161.png)

<u>**Non aperator users (Regular Users or Account Administrators):**</u>
* Click **Edit** bouton, below page appears:

![image162.png](/img_user_en/image162.png)

**Type**: Regular User or Account Administrator 
**Roles**: Check the roles you want to associate with the user. 
**Note : This field can be empty if no role has been defined.** 

**User Groups**: Select the groups to which the user must be a member. 
**Note: This field can be empty if no group has been defined.** 

The button **Edit the user** It makes it possible to validate the modification 

#### 4.9.2.3 User Groups 

It is possible to group multiple users to form a group. By assigning permissions to a group, all users in that group will inherit these permissions.

##### 4.9.2.3.1  Create Users Group

From the **Login / Account Settings** drop-down menu => **Groups of users**, the following page appears : 

![image163.png](/img_user_en/image163.png)

* Click on the button **Create a group**, the following dialog box appears: 

![image164.png](/img_user_en/image164.png)

* Fill in the Name field and then click the **Create Users Group** button. On successful creation, the following page will be displayed:

![image165.png](/img_user_en/image165.png)
 
* Refine the group by selecting a role if necessary,
* Check the users to belong to this group.

#### 4.9.2.4 Roles

The Roles menu allows management and setting user permissions. From the **Credential / Account Settings** drop-down menu =>**Roles**, the RoleManagement window appears as follows :

![image166.png](/img_user_en/image166.png)

All existing roles are listed in the **Role Management** table:
**ID**: Digital ID of the role,
**Name**: Specifies the name of the role to create,
**Description**: Briefly states the role description,
The **Actions** drop-down menu offers:

![image167.png](/img_user_en/image167.png)

* **View**: View role settings
* **Edit**: Change the permission fields
* **Change associated users**: Associate the selected role with the users concerned
* **Duplicate**: Duplicates the selected role.
* **Delete**: Delete the selected role.
To make roles management easier for administrators, *UIC* implements predefined roles with predefined permissions on *UIC* objects configured with ACLs. These roles may be used as is. If they don’t match exactly with the adminsitrator’s needs, they may be changed to suit to the right policies. 
The next section describes the *UIC* predefined roles.

##### 4.9.2.4.1 Predefined Roles (objects and permissions)

During its installation, *UIC* stores in its database a list of predefined roles, each with the list of authorized actions on each of the *UIC* objects subject to access control. The predefined roles can be modified, the addition of new roles is also possible.
The types of objects subject to the control and the permissions granted to the predefined roles are listed in the table below.
This table shows the following columns:
**Object Type**: Contains the types of objects that *UIC* submits to controlled access,
**Actions** : Contains the list of functions (or actions) applicable to each object type and whose execution is subject to prior checking,
**Predefined roles**: presents the list of roles predefined by *UIC*. This list contains eight roles that are Developer, Tester, Support, Sysops, Service Manager, Financial, Architect, and Security Expert.

In the cells of the predefined roles columns, an **X** symbol indicates that the role on the same column is allowed to execute the action on the same line, regarding the type of object located on the same line.


![table004.png](/img_user_en/table004.png)
![table005.png](/img_user_en/table005.png)
![table006.png](/img_user_en/table006.png)
![table007.png](/img_user_en/table007.png)
![table008.png](/img_user_en/table008.png)
![table009.png](/img_user_en/table009.png)
![table010.png](/img_user_en/table010.png)


##### 4.9.2.4.2 Create Role

From the **Credential / Account Settings** drop-down menu => **Roles**, the Role Management window appears:  

![image166.png](/img_user_en/image166.png)

Click on the button **Create a new role**, the following page is displayed :  

![image168.png](/img_user_en/image168.png)

* If you want to use a predefined role, click the **Predefined roles** button, then select the role,

![image169.png](/img_user_en/image169.png)

* Fill in the Name and Description fileds, 
* Click the arrow of each of the Permissions (roles, users ...), 
* Check the permissions you want to grant, uncheck the ones you want to deny. The button Permissions Granted allows to view only granted permissions to selected role. The button Permissions not granted allows to see only permissions denied to the role.
* Click the Create button, the following window appears: 

![image170.png](/img_user_en/image170.png)

A green banner with the message The role has been created is displayed, you can close the green banner by clicking on the close (x) button.
All existing roles are listed in the **Role Management** table:
**ID**: Digital ID of the role,
**Name**: Specifies the name of the role to create,
**Description**: Briefly states the role description,
The **Actions** drop-down menu offers:
* **View**: View role settings
* **Edit**: Change the permission fields
* **Change associated users**: Associate the selected role with the users concerned
* **Delete**: Delete the selected role.

##### 4.9.2.4.3 Consult Role’s Permisions Policies 

From Account/ Account **settings => Rôles, Roles management** table displays:
* Click the button **View** on desired **Role**.

![image171.png](/img_user_en/image171.png)

Permissions assigned to selectionned role appears on the **Permission** tag.
**User** tag lists users assigned to a role
**Edit Permission** button links to the Role management page
**Edit Users** allows to modify users assigned to a selected role

##### 4.9.2.4.4 Change User Permissions

Select the **Credential/Account Settings** menu => **Roles, the Role Management** page appears:

![image172.png](/img_user_en/image172.png)

Select the **View => Edit** menu of the desired user, the following window appears:  

![image173.png](/img_user_en/image173.png)

* Check or uncheck permissions, click on the Edit button to validate.
Button **Close All** allows to cancel all under-permissions.
Button **Open All** permissions allows to grant all existing permissions.
Tab **Permissions granted** lists all permissions granted to one role.
Tab **Permission not granted** lists all non-granted permissions to one role


##### 4.9.2.4.5 Associate Role to Users 

* Select the **Credential / Account Settings** menu => **Roles**, the Role Management page appears: 

![image174.png](/img_user_en/image174.png)

Select the **View => Change associated users** drop-down menu for the desired user, the list of users is presented from the following window:   

![image175.png](/img_user_en/image175.png)

* Check the users you want to have this role. 
* Click the Edit Role Users button to commit the changes,


#### 4.9.2.5 LDAP 

Lightweight Directory Access Protocol (**LDAP**) is a protocol for accessing directory services. This protocol is a standard for directory systems, and is particularly popular in organizations. An LDAP directory is a hierarchical structure (tree) composed of entries. Each directory entry consists of a set of attributes. An attribute has a name, a type, and one or more values. Attributes are defined in a schema

![table011.png](/img_user_en/table011.png)

Each entry has a unique credential, the Distinguished Name (DN) which is an absolute path of the directory entry. The Distingished Name of the tree presented above is: dn: uid = myname, or = people, dc = example, dc = myorg. 
By declaring your LDAP directory service in *UIC* you can directly import users from your LDAP directory into the portal.

##### 4.9.2.5.1 Interface your LDAP directory with *UIC*

*UIC* allows you to integrate users into its user database. From the **Credential/Account Settings** drop-down menu => **LDAP**, the following page appears:

![image176.png](/img_user_en/image176.png)

The form is composed of two parts, the first part on the left represents the settings needed to access the LDAP directory:
**Server** : LDAP Server ID (Address or Name)
**Port** : TCP connection port to the LDAP service (default 389)
**Distinguished name** : The distinguished name (Distinguished Name) of your directory
**User name** : The name of the user to use for the connection to the server
**Password** : The password of the user

The right part describes the attributes of the users that will be retrieved to feed the *UIC* user database.

**Object Class**
	The **LDAP** object classes represent people, organizations, etc. Here, because the intention is to retrieve user information, the object class is for example : **person or inetOrgPerson or organizationalPerson**
**User Name**
	This field can be fed by the attributes cn (common name) or **uid** (user credential)
**Email** :	Mail in standard form : **name@domain.xx**
**Display Name**	Display name is often represented by the attribute :**sn**
**Given Name**  	The first name is given by the attribute : **givenname**
**Surname**	The last name is given by the attribute : **sn**
**Phone number**	The phone is given by the attribute : **telephonenumber**

* Fill out this form to interface your LDAP directory with *UIC*, 
* Retrieve and enter the attributes of the users to import, 
* Click the **Save** button to validate all the information entered. 

The button **Test (after save)** allows to validate the access to the directory and to have a feedback on the test (error or ok), as presented below :

![image177.png](/img_user_en/image177.png)

Once the test succeeds, you get the message stating that the connection to the LDAP server has been established.

![image178.png](/img_user_en/image178.png)

##### 4.9.2.5.2 Import and Test Access to your LDAP directory

From the drop-down menu of the **Credential/Account Settings => LDAP** click on the link Import users, the import takes place in several steps:

![image179.png](/img_user_en/image179.png)

* Search for the user (s) according to the criteria set from the search filter **User to search for**. 
* Enter your criteria (all fields are tested, the search is not case sensitive).
* Select the line (s) (answer (s)) resulting from the search, 

Click the **Add to Selection** button, the following window appears :

![image180.png](/img_user_en/image180.png)

The names of the selected users will appear in the **Selection of users** area. You can also search for users by using the search field labeled Search on the same page.
* Select the user type from the **Choose type** menu that you want to assign to this list of users.

**Note: Only default user types are shown (Operator, Regular User and Account Administrator).**

* Click the **Import Users Selection** button to complete the action.
A validation of the operation appears at the top of the screen. The users have been imported. 
If the entry is already present in the *UIC* database, an error message is displayed indicating that the user already exists in your account and no entry is made in the database.
If the User Selection contains a syntax error, the message ‘’The user was not found is displayed’’.

To check the import successful, click the **Users** tab, the users should have been added to the users database table.

![image181.png](/img_user_en/image181.png)


#### 4.9.2.6 SAML

This chapter is intended for users with a centralized identity directory (a Single Sign On solution) based on SAML in their enterprise. Security Assertion Markup Language (SAML) is a standard for the secure exchange of identity information (authentication and authorization). This authentication mechanism is based on browser redirects and implements two services to secure the exchanges : 
* **The Identity Provider (IdP)**, here the company's SSO directory, responsible for authenticating the user, responds to the request of the service provider with the information associated with the identity. 
* **The Service Provider (SP)**, integrated with *UIC*, provides access protection to the resources of the *Use IT Cloud* web portal and blocks access to unauthenticated users and directs it to the identity provider ( IdP) associated with it. The form presented by *UIC* displays on the right area the information on the Service Provider (SP) configured in the portal, on the left side are presented the fields to fill in regarding your identity provider. 

![image182.png](/img_user_en/image182.png)

* Service Provider Settings (SP)

Setting               | Libel
------------------|------------------------------------------------------
Connection URL | 	https://xxx.xxx.xxx.xxx/UrlLogin
NameIDFormat |	urn:oasis:names:tc:SAML:2.0:nameid-format:persistent
Entity ID (Audience) | 	https://xxx.xxx.xxx.xxx/saml2/prologue/metadata
ACS (Assertion Consumer Service) URL | 	https://xxx.xxx.xxx.xxx/UrlACS
ACS Binding |	urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST
SLS (Single Logout Service) URL | 	https://xxx.xxx.xxx.xxx/UrlSLS
SLS Binding |	urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect where xxx.xxx.xxx.xxx is the IP address of *Use IT Cloud*  plateform


A network administrator can enable SAML authentication (SSO) and set it up to interface with *Use IT Cloud*. This implies the need for metadata exchange between the identity provider (IdP) and the service provider (SP). The IdP metadata include the IdP URL and the required certificates

* Identity Provider (IdP) settings

Setting               | Libel
------------------|------------------------------------------------------
Entity ID (Issuer URL) |	URL or domain name of the emitter, needed for fetching required URL and certificates metadata.
SSO URL |	URL target for http requests and/or connection requests
SSO binding |	*urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect indicates the binding protocol to use for IdP connection requests.*
SLO URL |	URL target for http requests and/or disconnection requests 
SLO binding |	*urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect indicates the binding protocol to use for IdP connection requests.*
Public Key |	Public Key to use.

**Note : All these settings are mandatory. SSO and SLO bindings settings are pre-filled with default values.**
Details on SAML specifications can be found at  http://saml.xml.org/saml-specifications. 

#### 4.9.2.7 Monitoring

##### 4.9.2.7.1 *Zabbix* Menu

*Zabbix* is a monitoring software that allows to monitor servers, workstation, network services, etc. *Use IT Cloud* can connect to *Zabbix* servers and fetch data from them. 
From the menu **Credential/Account Settings, select Monitoring => *Zabbix*,** the following window appears :

![image183.png](/img_user_en/image183.png)

The table describes *Zabbix* declared settings:
**ID**: server credential
**Name**: server name
**URL**: host
**User**: user’s name
**Activate by default**: The button Add a *Zabbix* server allows to create a server.
**Actions** : 
- **Connect to Zabbix**: Redirect to serveur *Zabbix*
- **Modify certificates** : Permit to update or edit used certificates
- **Set a model by default** : This option allows to select models activate by default for Linux and Windows
- **Set access to server** : Allows to set host name different from installation setup in aim to access server.
**Other settings** : Allows to activate by default monitoring for all deployments
**Delete** : This action Delete the serveur


##### 4.9.2.7.2 Add *Zabbix* Server

From the menu Credential/Account Settings, select Monitoring => *Zabbix*, the following window appears :

![image183.png](/img_user_en/image183.png)

Click the Add button, the following dialog box appears :

![image184.png](/img_user_en/image184.png)

**Name** :	Enter a name to recognize your server in the *UIC* portal 
**Url** :	Specify the *Zabbix* server host
**User** :	Specify the *Zabbix* user name
**Password** :	Specify the password of the *Zabbix* user
**Zabbix Tenant**  :	Specify the tenant (User Group) to use on the *Zabbix* server. If the tenant doesn’t already exist, *UIC* will create it on the *Zabbix* server. .  
**Authority Certificate** : 	Authority certificate file 
**Certificate** :	Certificate File
**Key** :	Private Key file 

The **Certificate Authority, Certificate, and Key** fields are optional, they are used to secure communication between agents and the server in TLS mode. The Choose File button allows you to select the right certificates and keys files. 


##### 4.9.2.7.3 Connect to *Zabbix* Dashboard

From the menu Credential/Account Settings, select Monitoring => *Zabbix*, the following window appears :  

![image183.png](/img_user_en/image183.png)

The *Zabbix* dashboard displays :

![image186.png](/img_user_en/image186.png)


##### 4.9.2.7.4 Change Connection Informations

From the menu **Credential/Account Settings,** select **Monitoring => Zabbix**, the following window appears :

![image187.png](/img_user_en/image187.png)

* Select drop menu Actions => **Modify connection configuration**, the next box appears:

![image188.png](/img_user_en/image188.png)

Connection configuration has to be indicated in the above box:
**Tenant**: unchageable,
**URL**: connection address https,
**User**: user login,
**Password**: user password,
* Click Update button


##### 4.9.2.7.5 Edit Certificates

From the menu Credential/Account Settings, select Monitoring => *Zabbix*, the following window appears :

![image187.png](/img_user_en/image187.png)
 
* Select drop menu **Actions => Configur**e by default model, the dialog box appears:

![image189.png](/img_user_en/image189.png)
 
* Make the changes on the active models:
**Update models**: allows to update the list of available “templates”.
**Models by default for Linux**: allows to select models for Linux run.
**Models by default for Windows**: allows to select models for Linux run.
**Run mode**: allows to define run type model.
* Click the Update button to validate.


##### 4.9.2.7.6 Configure 	Accesses to the Server

From the menu **Credential/Account Settings**, select Monitoring => *Zabbix*, the following window appears :

![image187.png](/img_user_en/image187.png)

* From the menu **Actions => Settings server access**, the following box appears :

![image190.png](/img_user_en/image190.png)

* Specify new host name(s) to add (different from the host installation setup)
* Click on the **Update** button.

 
##### 4.9.2.7.7 Activate Monitoring for all Instances

From the menu **Credential/Account Settings**, select Monitoring => *Zabbix*, the following window appears :

![image187.png](/img_user_en/image187.png)

* Select the drop menu **Actions => Another Configurations**, the following box appears :

![image191.png](/img_user_en/image191.png)
 
* Check box to activate monitoring for all deployments.
* Click on **Close** button.


##### 4.9.2.7.8 Delete Monitoring

From the menu **Credential/Account Settings**, select Monitoring => *Zabbix*, the following window appears :

![image187.png](/img_user_en/image187.png)
 
* Check drop menu **Actions => Delete**, the next box appears:

![image192.png](/img_user_en/image192.png)
 
* Click **Delete** button
 
#### 4.9.2.8 Configuration Management

##### 4.9.2.8.1 *Puppet* Menu

This command is accessible from the menu **Credential / Account Settings => Puppet**. 
*Use IT Cloud* can be interfaced with the *Puppet* tool for configuration management. *Puppet* works on the principle of clients (installed on machines deployed on premise and also in the cloud) and servers (installed on one or more servers in your data center). The purpose of this interface is to allow you to automatically add to your *Puppet* server the virtual machines that will be deployed using the *Use IT Cloud* and to let *Puppet* configure the VMs. 
From the drop-down menu of the **Credential / Account Settings => Configuration Management => Puppet**, the following window appears:

![image193.png](/img_user_en/image193.png)

The table shows information about *Puppet* servers running on machines.
**ID**: Indicates the credential of the Tenant,
**Tenant**: *Puppet* Server Holder Name
**Host**: http address of the *Puppet* server
**Port**: Listening port
**FQDN**: Designation of the fully qualified domain name of the server
**Type**: License (company, open source ...)
**User**: The name of the user used for the connection
**URL to the Windows Agent**: Link to the Windows Agent
**URL to the Linux Agent**: Link to the Linux Agent
**URL to the CA API**: Link to the CA API
**CA API Port**: Communication port used for the CA API
**DB *Puppet* URL**: Link to the *Puppet* Database
**Port *Puppet* DB**: Communication port to access the *Puppet* database
**Server IP**: Server IP Address
**Deposit**:
**Actions**:
* **Edit**: This action allows you to change the configured settings
* **Delete**: This action allows you to Delete the configuration
The Add *Puppet* Server button allows you to add a server.

##### 4.9.2.8.2 Declare *Puppet* from *UIC*

In fact, *UIC* supports the installation and configuration of the *Puppet* agent, it is during the preparation of the VM deployment that *UIC* installs the *Puppet* agent in it.
*UIC* uses the notion of "Fact" for the association of VMs to predefined classes in *Puppet*.
When launching the deployment, *UIC* registers or verifies that the Fact "*UIC*_class_*Puppet*" is associated with the "class_*Puppet*" class described in the selected *Puppet* server.
The VM, via the *Puppet* agent, declares at the server level, the *Puppet* administrator can then validate the registration to allow *Puppet* to ensure the continuation of the operations on the deployed VM. The *Puppet* agent is started at VM boot.


##### 4.9.2.8.3 Add a *Puppet* Server

From the drop-down menu of the **Credential / Account Settings => Configuration Management => Puppet**, the following window appears:
 
![image193.png](/img_user_en/image193.png)

* Click the **Add Puppet Server** button, the following dialog box appears:
 
* Complete the input fields, during the installation in addition to the information indicated above you will be asked for several certificates which are to be informed.
* **Certificate**: Certificate to recover from your *Puppet* Administrator
* **Private key**: Private key to recover from your *Puppet* administrator
Click the **Add** button to validate the configuration. The system is configured on the platform.

##### 4.9.2.8.4 *Puppet* Configuration Management

The use of the VM in a *Puppet* configuration system (supported version, *Puppet* Enterprise 3.7.0) is defined during the preparation of the deployments, at the time of the customization phase of the node (VM) to be deployed, from the Configuration Management tab.

![image195.png](/img_user_en/image195.png)

* Select the drop-down list of the **Configuration Management** command.
* Select from the *Puppet* Server command drop-down list, the *Puppet* server declared later,
Click the Select Groups button, the node table is displayed:

![image196.png](/img_user_en/image196.png)

Check the node groups on which you want *Puppet* to act,
Click the **Select** button to validate the choice (s), you are redirected again to the **Configuration Management** tab,
 
![image197.png](/img_user_en/image197.png)

You can see that the **Selected Groups** box displays the number of selected nodes, when you hover over the same area, the node name (s) will be displayed.


##### 4.9.2.8.5 *Chef* Menu

The *Chef* command allows you to interface *Use IT Cloud* with the *Chef* tool to set up machine configuration management. From the drop-down menu of the **Credential**, select *Chef* entry, the following window appears: 

![image198.png](/img_user_en/image198.png)
 
* Click the Add *Chef* Server button, the following form appears: 

![image199.png](/img_user_en/image199.png)

Fill in the input fields :
**Name** :	Enter a name to recognize your server in the *UIC* portal
**User** :	Specify the name of the *Chef* server user
**User Key** :	Enter the password of the *Chef* user Specify the *Chef* server host
**Url**:	Specify the URL of the *Chef* server
**Organization** :	Specify the name of the organization to use on the *Chef* server
**Organization Key**: 	Specify the organization validation key 
**Key** :	Enter the user's private key 

* Click the Add *Chef* Server button to validate the configuration.


#### 4.9.2.9 Cloud Providers Credentials

The *Use IT Cloud* platform interfaces with different providers and infrastructures provided that you set up the credentials of targeted Cloud providers. All Clouds require at least one identification key and one secret key. Some clouds require additional settings such as a project or tenant ID, a host name or address, and so on. You need this information and register it with *UIC* before you can use the cloud services on which you want to deploy. 
*UIC* allows you to set these settings using the menu of the **Credential/Account Settings => Cloud credentials**:

![image200.png](/img_user_en/image200.png)
 
The figure above illustrates the **Cloud credentials** page that shows the different managed clouds as separate tabs. Each tab has the name of the cloud that can be configured. 
The next two sections provide details on VMware vSphere-specific credentials and VMware vCloud-specific credentials. The necessary settings for configuring the credentials of other Clouds are provided in the **Provider Specifics chapter 4.15**, which is contained in this document.

#### 4.9.2.10 VMware vCloud 

The page **vCloud** offers various opearations, Create credentials, modify initial credential configuration: 

![image201.png](/img_user_en/image201.png)

The link vCloud : guides to vCloud services.
**Add credential button** : creates credentials,
**Credential name** : Enter the name you want to give to this credential
**Host** : vCloud host address,
**User** : user’s connection name,
**Organisation** : organisation’s name
**API version** : Indicate 5.5 or 27.0 for vCloud Director 8.2 version
You can change the configuration of Cloud credentials using the **Actions** Button, as shown in the figure below :

![image202.png](/img_user_en/image202.png)

**Configuration** : This parameter allows you to specify the timeout period from which you want to stop deploying an instance,
**Configure the proxy** : You can configure the proxy of your network if you have any, 
**Edit credentials** : This gives you the possibility to modify the credentials,
**Delete** : This allows you to delete this entry.

	
##### 4.9.2.10.1 Add Credentials

* Select the Credential/Account Settings menu => Cloud IDs => vCloud tab, the following page is displayed:

![image201.png](/img_user_en/image201.png)

* Click the Add credentials button, the following form is displayed :

![image203.png](/img_user_en/image203.png)

* Enter the following settings :
**Credential name** : Enter the name you want to give to this credential
**Host** : vCloud Host address
**User** : Name of the user who will be used to connect to the vCloud host
**Mot de passe** : Password 
**Organization**:  Organization name
**API Version**: 5.5 or 27.0 vCloud Director version 8.2,
**Proxy** : Specify the proxy URL if there is one, otherwise leave this field empty
**Visible IP from Provider** : IP address of the *UIC* platform, which will be visible from the vCloud infrastructure.
*  Click the **Add** button to validate the configuration.

![image204.png](/img_user_en/image204.png)

<u>**Access to organisation’s IP**</u>
* Write IP address, click on Update button

<u>**Default vDC**</u>
* Select vDC or leave the default one

<u>**Direct access**</u>
* Check the box the Platform is in the same network as deployed instances, so that direct access will be selected by default on deployment.
* Indicate the value
* Click the Close button.

Once the credentials registration is done, you can access the various parameters of your provider from the *UIC* platform (see 4.4 Clouds Menu).


##### 4.9.2.10.2 Modify Configuration 

* Select the **Credential/Account Settings menu => Cloud IDs => vCloud** tab.
The following page lists the declared credentials:

![image201.png](/img_user_en/image201.png)

* Select menu **Actions => Configuration**, the following form appears :

![image205.png](/img_user_en/image205.png)

* Make necessary modifications, click **Update** button.
* Uncheck or not Direct access, the action is active at once.
* Click **Close** button


##### 4.9.2.10.3 Modify Proxy Configuration

* Select the **Credential/Account Settings menu => Cloud IDs => vClou**d tab.
The following page is displayed:

![image201.png](/img_user_en/image201.png)

* Select menu **Actions => Configure** the proxy, the following form appears :

![image206.png](/img_user_en/image206.png)
 
* Specify the proxy URL
* Click **Save** button

##### 4.9.2.10.4 Modify Credentials

* Select the **Credential/Account Settings menu => Cloud IDs => vCloud** tab.
The following page is displayed:

![image207.png](/img_user_en/image207.png)
 
* Select **Actions => Edit credentials**, the following page displays:

![image208.png](/img_user_en/image208.png)
 
* Specify modifications
* Click **Save** button

##### 4.9.2.10.5 Delete Credentials

* Select the **Credential/Account Settings menu => Cloud IDs => vCloud** tab.
The following page is displayed:

![image209.png](/img_user_en/image209.png)
 
* Select menu **Actions => Delete**, the following page displays:

![image210.png](/img_user_en/image210.png)
 
* Click **Delete** Cloud credential
 
#### 4.9.2.11 VMware vSphere 

The page vSphere offers various opearations, Create credentials, modify initial credential configuration: 

![image211.png](/img_user_en/image211.png)

**The link vSphere** : guides to vSphere services.
**Add credential button** : creates credentials,
**Credential name** : Enter the name you want to give to this credential
**vSphere Server**: Server IP address
**Protocol** : API connection protocol (https)
**Port** : API connection Port (443)
**User** : User name for the connection to the server
You can change the configuration of a tenant using the **Actions** button, as shown in the figure below :
 
![image212.png](/img_user_en/image212.png)

**Configuration** : Allows to specify the timeout period from which you want to stop deploying an instance,
**Configure the proxy** : You can set up your network proxy URL and port if you have one,
**Edit credentials** : Allows to modify credentials,
**Delete** : Allows to delete this entry.

##### 4.9.2.11.1 Add Credentials

We assume that you have a cloud infrastructure managed by VMWare vCenter Server. To connect to the infrastructure, the *UIC* platform must have the needed credentials. You can define multiple vSphere tenants for each targeted vSphere infrastructure.
* Select the **Credential/Account Settings menu => Cloud IDs => vSphere** tab, the following page is displayed:

![image211.png](/img_user_en/image211.png)
 
* Click the **Add credentials** button, the following form is displayed :

![image213.png](/img_user_en/image213.png)

* Fill in the following parameters :
**Credentials name** : Enter the name you want to give to these credentials
**Host** : vSphere host address
**Protocol** : API connection protocol (https)
**Port** : API connection Port (443)
**User** : User name for the connection to the server
**Password** : User password
**Proxy** : Specify the proxy URL (if applicable)
* Click the **Add** button.


##### 4.9.2.11.2 Modify Configuration 

* Select the **Credential/Account Settings menu => Cloud IDs => vSphere** tab.

The following page lists the declared credentials:

![image214.png](/img_user_en/image214.png)

* Select **Actions => Configuration**, the following page is displayed:

![image215.png](/img_user_en/image215.png)
 
* Specify timeout, click **Update** button
* Click Close button

##### 4.9.2.11.3 Modify Proxy Configuration

Select the **Credential/Account Settings menu => Cloud IDs => vSphere** tab.
The following page is displayed:

![image214.png](/img_user_en/image214.png)

* Select menu **Actions => Configur**e the proxy, the following form appears :

![image216.png](/img_user_en/image216.png)
 
* Specify the proxy URL
* Click **Save** button

##### 4.9.2.11.4 Modify Credentials

Select the **Credential/Account Settings menu => Cloud IDs => vSphere** tab.The following page is displayed:

![image214.png](/img_user_en/image214.png)

* Select **Actions => Edit** credentials, the following page displays:

![image217.png](/img_user_en/image217.png)

* Specify modifications
* Click **Save** button

##### 4.9.2.11.5 Delete Credentials

Select the **Credential/Account Settings menu => Cloud IDs => vSphere** tab.
The following page is displayed:

![image214.png](/img_user_en/image214.png)

* Select menu **Actions => Delete**, the following page displays:

![image218.png](/img_user_en/image218.png)

* Click **Delete Cloud** credential


#### 4.9.2.12 Amazon

The page **Amazon** offers various opearations, Create credentials, modify initial credential configuration: 
* Select the **Credential/Account Settings menu => Cloud IDs => Amazon** tab, the following page is displayed:

![image219.png](/img_user_en/image219.png)

**The link AWS** : guides to Amazon services.
**Add credential button** : creates credentials,
**Credential name** : Enter the name you want to give to this credential
**Access key** : access key delivered by AWS
**Default Region** : default region deployment
You can change the configuration of a tenant using the **Actions** button, as shown in the figure below :
 
![image212.png](/img_user_en/image212.png)

**Configuration** : Allows to specify the timeout period from which you want to stop deploying an instance,
**Configure the prox**y : You can set up your network proxy URL and port if you have one,
**Edit credentials** : Allows to modify credentials,
**Delete** : Allows to delete this entry.

##### 4.9.2.12.1 Add Credentials

You have to have AWS cloud infrastructure created, and grant *UIC* access to AWS by means of a access role. It’s possible to have multiple AWS tenants.
Select the **Credential/Account Settings menu => Cloud IDs => Amazon** tab, the following page is displayed:

![image219.png](/img_user_en/image219.png)
 
* Click the **Add** credentials button, the following form is displayed :

![image220.png](/img_user_en/image220.png)

* Enter the following settings :
**Credential name** : Enter the name you want to give to this credential
**Access key** : delivered by AWS
**Secret key** : delivered by AWS
**Default region** : Select one region
**Proxy** : 
* Click **Add** button, next message appears:
***The AWS credential has been created***

##### 4.9.2.12.2 Modify Configuration 

Select the **Credential/Account Settings menu => Cloud IDs => Amazon** tab. 
The following page lists the declared credentials:

![image219.png](/img_user_en/image219.png)
 
* Select menu **Actions => Configuration**, the following form appears :

![image222.png](/img_user_en/image222.png)

* Select Region, click **Update** button.
* Specify timeout, click **Update** button.
* Click **Close** button


##### 4.9.2.12.3 Modify Proxy Configuration

Select the **Credential/Account Settings menu => Cloud IDs => Amazon** tab, 
The following page is displayed:

![image219.png](/img_user_en/image219.png)

* Select menu **Actions => Configure** the proxy, the following form appears :

![image223.png](/img_user_en/image223.png)
 
* Specify the proxy URL
* Click **Save** button

##### 4.9.2.12.4 Modify Credentials

Select the **Credential/Account Settings menu => Cloud IDs => Amazon** tab, 
The following page is displayed:

![image219.png](/img_user_en/image219.png)

* Select **Actions => Edit credentials**, the following page displays:

![image224.png](/img_user_en/image224.png)

* Specify modifications
* Click **Save** button

##### 4.9.2.12.5 Delete Credentials

Select the **Credential/Account Settings menu => Cloud IDs => Amazon** tab, 
The following page is displayed:

![image219.png](/img_user_en/image219.png)

* Select menu **Actions => Delete**, the following page displays:

![image225.png](/img_user_en/image225.png)

* Click **Delete Cloud credential**


#### 4.9.2.13 CloudWatt 

The page **CloudWatt** offers various opearations, Create credentials, modify initial credential configuration,
Select the **Credential/Account Settings menu => Cloud IDs => CloudWatt** tab, the following page is displayed:

![image226.png](/img_user_en/image226.png)

**The link CloudWatt** : guides to CloudWatt  services.
**Add credential button** : creates credentials,
**Credential name** : Enter the name you want to give to this credential
**Host** : vCloud Host address
**User** : user’s connection name,
**Project** : project definition
**Default Region** : instance deploying region
You can change the configuration of a tenant using the **Actions** button, as shown in the figure below :

![image212.png](/img_user_en/image212.png)

**Configuration** : Allows to specify the timeout period from which you want to stop deploying an instance,
**Configure the proxy** : You can set up your network proxy URL and port if you have one,
**Edit credentials** : Allows to modify credentials,
**Delete** : Allows to delete this entry.

##### 4.9.2.13.1 Add Credentials

You have to have **CloudWatt**  cloud infrastructure created, and grant *UIC* access to CloudWatt  by means of a access role. It’s possible to have multiple CloudWatt  tenants.
Select the **Credential/Account Settings menu => Cloud IDs => CloudWatt** tab, the following page is displayed:

![image226.png](/img_user_en/image226.png)

* Click the **Add** credentials button, the following form is displayed :

![image227.png](/img_user_en/image227.png)

* Enter the following settings :
**Credential name** : Enter the name you want to give to this credential
**Host** : CloudWatt Host address
**User** : user’s connection name,
**Password** : specify your password
**Project** : project definition
**Default Region** : instance deploying region
**Proxy** : proxy address if exists
* Click the **Add** button to validate the configuration.

![image228.png](/img_user_en/image228.png)

The credential is well created.

##### 4.9.2.13.2 Modify Configuration

Select the **Credential/Account Settings menu => Cloud IDs => CloudWatt** tab.
The following page lists the declared credentials:

![image229.png](/img_user_en/image229.png)
 
* Select menu **Actions => Configuration**, the following form appears :

![image230.png](/img_user_en/image230.png)
 
* Select Region, click **Update** button.
* Specify timeout, click **Update** button.
* Click **Close** button

##### 4.9.2.13.3 Modify Proxy Configuration

Select the **Credential/Account Settings menu => Cloud IDs => CloudWatt** tab. 
The following page is displayed:

![image229.png](/img_user_en/image229.png)

* Select menu **Actions => Configure** the proxy, the following form appears :

![image231.png](/img_user_en/image231.png)

* Specify the proxy URL
* Click **Save** button

##### 4.9.2.13.4 Modify Credentials

Select the **Credential/Account Settings menu => Cloud IDs => CloudWat**t tab.
The following page is displayed:

![image229.png](/img_user_en/image229.png)

* Select **Actions => Edit credentials**, the following page displays:

![image232.png](/img_user_en/image232.png)

* Specify modifications
* Click **Save** button

##### 4.9.2.13.5 Delete Credentials

Select the **Credential/Account Settings menu => Cloud IDs => CloudWatt** tab.
The following page is displayed:

![image229.png](/img_user_en/image229.png)

* Select menu **Actions => Delete**, the following page displays:

![image233.png](/img_user_en/image233.png)
 
* Click **Delete Cloud credential**


#### 4.9.2.14 Microsoft Azure

The page **Microsoft Azure** offers various opearations, Create credentials, modify initial credential configuration,
* Select the **Credential/Account Settings menu => Cloud IDs => Microsoft Azure** tab, the following page is displayed:

![image234.png](/img_user_en/image234.png)

The link **Microsoft Azure** : guides to Microsoft Azure  services.
**Add credential button** : creates credentials,
**Name** : credential name
**Subscription ID** : specify subscription ID during tenant creation
**Client ID** : specify client ID during tenant creation
**Tenant ID** : specify tenant ID during tenant creation
**Default Region** : instance deploying region
You can change the configuration of a tenant using the **Actions** button, as shown in the figure below :

![image212.png](/img_user_en/image212.png)

**Configuration** : Allows to specify the timeout period from which you want to stop deploying an instance,
**Configure the proxy**: You can set up your network proxy URL and port if you have one,
**Edit credentials** : Allows to modify credentials,
**Delete** : Allows to delete this entry.

##### 4.9.2.14.1 Add Credentials

You have to have **Microsoft Azure**  cloud infrastructure created, and grant *UIC* access to Microsoft Azure  by means of a access role. It’s possible to have multiple Microsoft Azure  tenants.
Select the **Credential/Account Settings menu => Cloud IDs => Microsoft Azure** tab, the following page is displayed:

![image234.png](/img_user_en/image234.png)
 
* Click the **Add** credentials button, the following form is displayed :

![image235.png](/img_user_en/image235.png)

* Enter the following settings :
**Credential name** : Enter the name you want to give to this credential
**Subscription ID** : delivered by MS Azure
**Client ID** : delivered by MS Azure
**Tenant ID** : delivered by MS Azure
**Secret key** : delivered by MS Azure
**Default Region** : instance deploying region
**Proxy** : proxy address if exists
* Click the **Add** button to validate the configuration.
The credential is well created.

##### 4.9.2.14.2 Modify Configuration 

Select the **Credential/Account Settings menu => Cloud IDs => Microsoft Azure** tab
The following page lists declared credentials:

![image234.png](/img_user_en/image234.png)

* Select menu **Actions => Configuration**, the following form appears :

![image236.png](/img_user_en/image236.png)

* Select Region, click **Update** button.
* Specify timeout, click **Update** button.
* Click **Close** button

##### 4.9.2.14.3 Modify Proxy Configuration

Select the **Credential/Account Settings menu => Cloud IDs => Microsoft Azure** tab.
The following page is displayed:

![image234.png](/img_user_en/image234.png)

* Select menu **Actions => Configure** the proxy, the following form appears :

![image237.png](/img_user_en/image237.png)
 
* Specify the proxy URL
* Click **Save** button

##### 4.9.2.14.4 Modify Credentials

Select the **Credential/Account Settings menu => Cloud IDs => Microsoft Azure** tab.
The following page is displayed:

![image234.png](/img_user_en/image234.png)

* Select **Actions => Edit credentials**, the following page displays:

![image238.png](/img_user_en/image238.png)
 
* Specify modifications
* Click **Save** button

##### 4.9.2.14.5 Delete Credentials

Select the **Credential/Account Settings menu => Cloud IDs** => Microsoft Azure tab.
 The following page is displayed:

![image234.png](/img_user_en/image234.png)

* Select menu **Actions => Delete**, the following page displays:

![image239.png](/img_user_en/image239.png)

* Click **Delete Cloud credentials**

 
#### 4.9.2.15 Flexible Engine 

The page **Flexible Engine** offers various opearations, Create credentials, modify initial credential configuration,
* Select the **Credential/Account Settings menu => Cloud IDs => Flexible Engine** tab, the following page is displayed:

![image240.png](/img_user_en/image240.png)

**The link Flexible Engine** : guides to Flexible Engine  services.
**Add credential button** : creates credentials,
**Credential name** : Enter the name you want to give to this credential
**Domain ID** : Domain public IP
**User** : Connection User name 
**Regions** : List of available regions
**Default Region** : instance deploying region

You can change the configuration of a tenant using the **Actions** button, as shown in the figure below :

![image212.png](/img_user_en/image212.png)

**Configuration** : Allows to specify the timeout period from which you want to stop deploying an instance,
**Configure the proxy** : You can set up your network proxy URL and port if you have one,
**Edit credentials** : Allows to modify credentials,
**Delete** : Allows to delete this entry.

##### 4.9.2.15.1 Add Credentials

You have to have **Flexible Engine** cloud infrastructure created, and grant *UIC* access to Flexible Engine  by means of a access role. It’s possible to have multiple Flexible Engine tenants.
Select the **Credential/Account Settings menu => Cloud IDs => Flexible Engine** tab, the following page is displayed:

![image240.png](/img_user_en/image240.png)
 
* Click the **Add** credentials button, the following form is displayed :

![image241.png](/img_user_en/image241.png)

* Enter the following settings :
**Credential name** : Enter the name you want to give to this credential
**Domain ID** : Domain Public IP
**User** : Connection user name
**Password** : password
**Default Region** : select one region
**Proxy** : indicate URL if exists
* Click the **Add** button to validate the configuration. The credential is well created.

##### 4.9.2.15.2 Modify Configuration 

Select the **Credential/Account Settings menu => Cloud IDs => Flexible Engine** tab.
The following page lists declared credentials:

![image240.png](/img_user_en/image240.png)

* Select menu **Actions => Configuration**, the following form appears :

![image242.png](/img_user_en/image242.png)

* Select Region, click **Update** button.
* Specify timeout, click **Update** button.
* Click **Close** button

##### 4.9.2.15.3 Modify Proxy Configuration

Select the **Credential/Account Settings menu => Cloud IDs => Flexible Engine** tab.
The following page is displayed:

![image240.png](/img_user_en/image240.png)

* Select menu **Actions => Configure** the proxy, the following form appears :

![image243.png](/img_user_en/image243.png)
 
* Specify the proxy URL
* Click **Save** button

##### 4.9.2.15.4 Modify Credentials

Select the **Credential/Account Settings menu => Cloud IDs => Flexible Engine** tab.
The following page is displayed:

![image240.png](/img_user_en/image240.png)

* Select **Actions => Edit credentials**, the following page displays:

![image244.png](/img_user_en/image244.png)
 
* Specify modifications
* Click **Save** button

##### 4.9.2.15.5 Delete Credentials

Select the **Credential/Account Settings menu => Cloud IDs => Flexible Engine** tab.
The following page is displayed:

![image240.png](/img_user_en/image240.png)

* Select menu **Actions => Delete**, the following page displays:

![image245.png](/img_user_en/image245.png)
 
* Click **Delete Cloud credential**

#### 4.9.2.16 OpenStack 

The page **Openstack** offers various opearations, Create credentials, modify initial credential configuration,

![image246.png](/img_user_en/image246.png)

The link **OpenStack** : guides to OpenStack  services.
**Add credential butto**n : creates credentials,
**Credential name** : Enter the name you want to give to this credential
**Host** : Openstack Host address
**User** : Connection User name 
**Project** : project definition
You can change the configuration of a tenant using the **Actions button**, as shown in the figure below :

![image212.png](/img_user_en/image212.png)

**Configuration** : Allows to specify the timeout period from which you want to stop deploying an instance,
**Configure the proxy** : You can set up your network proxy URL and port if you have one,
**Edit credentials** : Allows to modify credentials,
**Delete** : Allows to delete this entry.

##### 4.9.2.16.1 Add Credentials

You have to have **OpenStack** cloud infrastructure created, and grant *UIC* access to OpenStack Azure  by means of a access role. It’s possible to have multiple OpenStack tenants.

Select the **Credential/Account Settings menu => Cloud IDs => OpenStac**k tab , the following page is displayed:

![image246.png](/img_user_en/image246.png)

* Click the **Add** credentials button, the following form is displayed :

![image247.png](/img_user_en/image247.png)
 
* Enter the following settings :
**Host** : Openstack Host address
**User** : Connection user name
**Password** : user password
**Project** : project name
**Region** : select your region
**Proxy** : server address if exists
**IP visible from provider** : indicate IP
* Click the **Add** button to validate the configuration.
The credential OpenStack  is well created.

##### 4.9.2.16.2 Modify Configuration 

Select the **Credential/Account Settings menu => Cloud IDs => OpenStack** tab.
The following page lists declared credentials:

![image246.png](/img_user_en/image246.png)

* Select menu **Actions => Configuration**, the following form appears :

![image248.png](/img_user_en/image248.png)

* Specify timeout, click Update button.
* Click **Close** button

##### 4.9.2.16.3 Modify Proxy Configuration

Select the **Credential/Account Settings menu => Cloud IDs** => OpenStack tab.
The following page is displayed:

![image246.png](/img_user_en/image246.png)

* Select menu **Actions => Configure** the proxy, the following form appears :

![image249.png](/img_user_en/image249.png)
 
* Specify the proxy URL
* Click **Save** button

##### 4.9.2.16.4 Modify Credentials

Select the **Credential/Account Settings** menu => Cloud IDs => OpenStack tab.
The following page is displayed:

![image246.png](/img_user_en/image246.png)

* Select **Actions => Edit credentials**, the following page displays:

![image250.png](/img_user_en/image250.png)
 
* Specify modifications
* Click **Save** button

##### 4.9.2.16.5 Delete Credentials

Select the **Credential/Account Settings menu => Cloud IDs => OpenStack** tab.
The following page is displayed:  

![image246.png](/img_user_en/image246.png)

* Select menu **Actions => Delete**, the following page displays:

![image251.png](/img_user_en/image251.png)
 
* Click **Delete Cloud credential**

 
#### 4.9.2.17 Notifications

The *Use IT Cloud* platform can notify the administrator or any other person (e-mail address) that is declared in the Notifications section when a deployment is performed or deleted, when a node is stopped or started, provided that the corresponding settings are set. 
From the **Credential / Account Settings menu => Notifications**, the following page appears : 

![image252.png](/img_user_en/image252.png)

* *Emails List*
The *UIC* platform presents the list of notified emails. The **Trash** button is used to delete an address from the list. The **Add Email** button allows you to add an email address, which will receive notifications. 
If you click the **Add Email** button, the following window appears:

![image253.png](/img_user_en/image253.png)

Enter in the email address then click Add button, a green box with the message "Email ... has been added" appears on the main window.

* *Notifications*
The table lists the names of the existing notifications, the check boxes in the **Notified** column enable or disable the notification mechanism. In our example, only the deployment and the VM related actions can generate notifications. 
Refer to the previous chapter 4.9.1.2 User settings – Infos included in this document.

### 4.9.3 Operator Profile

The Operator profile has the same permissions as the Administrator profile, see the previous chapter 4.9.2 Administrator Profile. Other accreditations of this profile are: 
* Creation of "client" accounts, 
* Creation of user profiles (Regular User, Administrator and Operator). The operator has access to the activity log of the *Use IT Cloud*. 

#### 4.9.3.1 Logs Menu

The **Credential => Logs** command can be used to view the logs activity of the *Use IT Cloud* platform. The following window appears: 

![image254.png](/img_user_en/image254.png)

Click on the **Logs** menu (blue banner), the following page appears: 

![image255.png](/img_user_en/image255.png)

The table lists the daily logs of the *Use IT Cloud* portal according to severity levels :
**All**: Total number of logs 
**Emergency**: Number of "Emergency" logs, unusable system 
**Alert**: Number of "Alert" type logs, Immediate intervention is required. 
**Critical**: Number of logs of type "Critical", Critical error for the system. 
**Error**: Number of logs of type "Error", Operation error 
**Warning**: Number of logs of type "Warning", Warning (an error may occur if no action is taken).
**Notice**: Number of logs of type "Notice", Normal event worth noting. 
**Info**: Number of logs of type "Informational", For information. 
**Debug**: Number of Debugging logs, Debugging Message. 
The available operations on logs data may be applied through the displayed buttons on the Actions Column: 
**Magnifying glass button**: Displays the detail, 
**Download**: The logs data may be exported to a file in .log format, 
**Trash**: Deletes the logs data.
 
## 4.10 Authentication with the Administration Account

The *UIC* platform administration account, created during the *UIC* installation and configuration steps, gives you all the rights to control and administer the *Use IT Cloud* (*UIC*) platform. In the *UIC* terminology, this account is also called the '' Operator '' account. When you enter the URL of the *Use IT Cloud* platform, the **Authentication** web page appears as follows : 

![image256.png](/img_user_en/image256.png)
  
* Enter the requested information (Account name, User name and Password). All this information was saved when creating this account. 
* Click on the **Login** banner.
The *Use IT Cloud* home page appears, (the content of the displayed page depends on the rights associated with the authenticated user). 
 
![image257.png](/img_user_en/image257.png)

You can select the *UIC* display language from the **English/French** links that appear at the bottom of the page.
 
## 4.11 Account Creation Request

When you type the URL for the *Use IT Cloud* platform, the **Authentication** page appears: 

![image258.png](/img_user_en/image258.png)

* Click on the link **Create an account**, the following page appears:

![image259.png](/img_user_en/image259.png)

* Fill in the mandatory entry fields: 
<u>**Account authentication Information:**</u> 
**Account Name** : This is the name of the account with which the user will have to authenticate (blank characters are not accepted), 
**Username**: Account username, which will be used for authentication 
**Email**: User's email address, 
**Password**: The password of the user. 
**Confirmation Password**: Enter the password again. 

* The Conditions of Use box must be checked after being read and accepted,
<u>**Company and user Information:**</u> 
**Given name**: First name of the user, 
**Surname**: family Name of the user, 
**Company name**: Name of the company, 
**Telephone**: Company telephone number 
**Address**: Address of the company 
**City**: City of residence of the company 
**Postal code**: Postcode of company domiciliation 
**Country**: Country of domiciliation of the company. 
* **Click on the green button Send request, the Login page appears with the following message "An e-mail was sent to confirm your account opening request".**

![image258.png](/img_user_en/image258.png)

Following steps will finalise and validate count creation demande.

### 4.11.1 Reception of the Message « Email Confirmation »

The platform operator acknowledges your request and sends you the message "*Use IT Cloud*: Confirmation of your *Use IT Cloud* account request" in the mail:

![image260.png](/img_user_en/image260.png)

* Click the **Confirm my e-mail** link, the login *Use IT Cloud* page with the message "The email address has been validated. An operator will proceed to create the account" will appear.

![image261.png](/img_user_en/image261.png)
 
The platform operator must verify and approve the creation of the account. After acceptance, you will receive an email stating "*Use IT Cloud*: Welcome to the *Use IT Cloud* platform".

### 4.11.2 Reception of the Message « Welcome to the *Use IT Cloud* plateform »

When the operator has accepted the creation of the account, the following welcome message is sent to you: 
 
![image262.png](/img_user_en/image262.png)

* Click on the link of the platform, the login page appears: <

![image263.png](/img_user_en/image263.png)

Enter the necessary elements to access the platform.
 
## 4.12 Account Creation Approval (Operator)

When an account creation request is made by a user via the *UIC* interface, an email is sent to the e-mail address of the *UIC* platform. The operator of the platform can then process this request. To do this, the platform operator should select the Settings => Accounts menu :

![image264.png](/img_user_en/image264.png)

The following page appears : 

![image265.png](/img_user_en/image265.png)
 
To activate the new account, click the View button in the Actions column, the following menu appears: 

![image266.png](/img_user_en/image266.png)

This menu allows you to perform the following actions: 
* **Change the limit of Instances** : This allows you to set a VM instance limit for the account 
* Change the state of the account creation process to one of the following states: 
* **Waiting for email validation** 
* **Waiting for validation by the operator**  
* **Active**  
* **Disabled** 
If you want to set an instance limit threshold for this account, click the **Modify the limit of instances**  menu, the following window appears:

![image267.png](/img_user_en/image267.png)

By default no limit is imposed by *UIC*. Uncheck the No limit check box and specify the maximum number of instances that can be deployed by this account.

Regarding the change of state of the account creation process, each time such an operation is triggered, *UIC* requests a confirmation using a dialog box. For example, when you click the Waiting for validation by operator menu, the following window appears:

![image268.png](/img_user_en/image268.png)

* Click the Confirm button, the following page appears: 

![image269.png](/img_user_en/image269.png)
 
The next step is to activate the account, this can be done using the menu View => Change status to Active of the window above. 
You can then see from the Account Status column that the account is active. 
 
## 4.13 Using an Existing Application Template

From the **Design => Templates** menu, you can change an existing application template, to make it suitable to your use cases. When you select this command, *UIC* displays the following form :
![image270.png](/img_user_en/image270.png)
 
* See chapt 4.2.1 Templates for more details.
From **Template** page choose a template, click from colone **Action** on **Edit** button:

![image271.png](/img_user_en/image271.png)

The commande **List Templates** allows to return on the home Template page.
This page consists of a fixed part on the left with the following items, each one displaying its properties on the central part.
* **List of templates**: This button allows to return back to the list of existing templates,
* **General Information**: Allows you to specify the general information of an application
* **Nodes**: This item provides the setting of the node (s)
* **Orchestration**: Allows you to add one or more script (s),
* **Test Application button**: Temporarily saves the application in the Catalog (Deployments configuration) 
**Export Application** : this button permits to export the application between two platforms.

### 4.13.1 General Information

The **General Information** item allows you to specify general information related to the application :
**Application Name** : The name originally created is added, it can be modified. 
**Category**: A drop-down menu is available, just select the category of the current application. 
**Description**: This is the description of your application as it will appear in the application catalog.
**Logo**: The logo represents the application, it is a png type image. It will be displayed in the application catalog.
The button **Save Changes**, save your changes. 

### 4.13.2 Nodes

The **Nodes** item provides the configuration of the nodes required for the the application execution :

![image272.png](/img_user_en/image272.png)
 
The page Templates is detailed in chapt 4.2.1 Templates.

#### 4.13.2.1 Modify Node

From menu **Design => Templates**, click the button **Edit (Actions** colon) of desired template:

![image273.png](/img_user_en/image273.png)
 
Select Node item, the list of nodes displays:

![image274.png](/img_user_en/image274.png)

**Update Deployment Policy** drop-down menu: Allows you to choose the deployment strategy for multiple Nodes :
* **Parallel** to deploy the virtual machines simultaneously. 
* **Sequential** to deploy the virtual machines one after the other. 

**Node name** box allows to add new node with **Add Node** button.
List of  Nodes is displayed in a table list.
**Order** : the nodes order is drag and drop managed
**Node name**: Indicates the name of the node, 
**Image**: Indicates the operating system of the virtual machine, 
**The Actions drop-down menu:** This menu allows you to perform three operations: 
* Edit allows you to edit the node, 
**Duplicate** allows you to duplicate the node as it is defined (for more details, see Properties of the Edit button),
**Delete**, remove the application node. 

Select one **Node** and click on **Edit button**, the Node Configuration page appears:

![image275.png](/img_user_en/image275.png)

**Name**: Indicates the name of the node 
**Image**: Indicates the operating system of the virtual machine 
**Authorized providers**: Lists all authorized cloud providers, 
**Script**: This drop-down menu lists all existing scripts 
**Menu Predefined Script** : list of all existing scripts.
**Additional Script** : this edit zone allows to write a personalized script
**Additional script variables** : click on + to insert your specific script’s variables and values.
**Volumes**: This section lists the names and sizes of the volumes attached to the node. The ''+'' button allows you to specify new ones. 

![image276.png](/img_user_en/image276.png)

The firewall configuration and node access configuration areas are also displayed as follows:

![image277.png](/img_user_en/image277.png)
 
* The **Firewall** sections allow you to configure the following settings: 
**Name**: Name of the firewall rule 
**Protocol**: Transport protocol type (TCP or UDP) 
**From**: Source port number 
**To**: Destination port number 
**Source**: Authorized network source. In the input field you can specify an IP address or a continuous range of IP addresses, for example 192.168.0.0/16, per rule. You can not specify multiple different addresses, for example 192.168.0.4 and 192.168.0.7, in a single rule. To do this you must create a rule for each address, or each segment of addresses. 

![image278.png](/img_user_en/image278.png)
 
* The Access List to the machine section requires the following settings: 
**Name**: Name of the rule 
**Protocol**: Connection Protocol 
**Port**: connection port 
**Description**: Description 
**Administrator Access**: If you select this checkbox, only the account administrator will be allowed to perform this login. Otherwise, all account users will be able to log in. 
**Web Access**: Allows you to indicate whether the machine is accessible in web mode or not 
**URL Base**: If web access is enabled, specify the login URL. 

The **Validate** button confirms the changes.
The button **Save Changes** saves the changes.
 
#### 4.13.2.2 Duplicate Node

From menu **Design => Templates**, click Edit button in the **Actions** colon, the **General Information** appears:

![image279.png](/img_user_en/image279.png)

* Click **Node** item, the list of nodes appears:

![image280.png](/img_user_en/image280.png)

* Select the **Duplicate** drop-down menu, the following dialog box appears:

![image281.png](/img_user_en/image281.png)

* Enter the number of nodes you need and click **OK**.
Duplicated nodes appear in the template's nodes list, and their definition can be customized as needed

### 4.13.3 Orchestration

*Use IT Cloud* provides a method for orchestrating the steps for any application deployment involving multiple virtual machines. This method is based on the use of scripts associated with deployed VMs. Each script is executed at the end of the boot of the virtual machine for which it was defined.
You can attach multiple scripts to a virtual machine, *UIC* will execute them in the order they appear on the screen. You choose this order by simply dragging and dropping scripts.

When you create or edit a template, the Orchestration menu allows you to define the scripts you want to associate with each node of the template.
The screen below shows an example of a template called HALAMP, involving a pool of 5 VMs in total, 2 VMs each having a front-end role web (web1 and web2) and 3 virtual machines running DBMSs (db1, db2 and db3).
 
![image282.png](/img_user_en/image282.png)

The deployment of web1 front-end will be orchestrated using the two ```haproxyConfig``` and ```glusterFS_Install``` scripts. The haproxyConfig script will be executed first and will be followed by the execution of the glusterFS_Install script. 
The definition of the contents of the scripts is left to the designer of the orchestration of the template, they can be of type shell, powershell, python, or any other scripting system. 

#### 4.13.3.1 Add a Script to Node

From menu **Design => Templates**, click Edit button in the **Actions** colon, the **General Information** appears:
* Click button **Orchestration**, the following window will be displayed:

![image283.png](/img_user_en/image283.png)

You can add a script using the **Add** Script button. The following window will be displayed: 

![image284.png](/img_user_en/image284.png)

* Fill in the displayed parameters:
**Name**: Specify the name of the script
**Node**: Specify the name of the script's home node
**Target**: The node on which the script will be executed
**Script**: Script content

You can also add a list of environment variables if you find them useful for orchestrating your deployment:
**Variable name**: Indicate the name of the variable
**Source**: Specify the source node that will provide the value of the variable
**Attribute**: Specify the attribute whose value will be assigned to the variable. The list of possible attributes is as follows: 

![image285.png](/img_user_en/image285.png)

* **accessip** : IP address for network access, which can take the value publicaddr or privateaddr IP d’accès, qui peut prendre la valeur publicaddr ou privateaddr
* **publicaddr** : Public IP address of the VM source
* **privateaddr** : Private IP address of the VM source
* **hostname** : Host name of the VM source

The screen below shows an example of an orchestration script:

![image286.png](/img_user_en/image286.png)

In this example the name of the script is '' initMycnf1 '', it will be executed by the '' bash '' shell when starting the node db1. The script needs 3 variables, $IPdb1 which is the private IP address (attribute '' privateaddr '') of the node db1, $IPdb2 which is the private IP address of the node db2 and $IPdb3 which is the private IP address of node db3.
 
## 4.14 Creating a new Application Template

### 4.14.1 Defining the Settings

The goal is to define the application template settings like the template name, its description, the number of nodes, the logo, etc.
* Select the menu **Design => Templates**, the following page appears :

![image287.png](/img_user_en/image287.png)
 
* Fill in the input field **template name** « SQL SERVER 2014 », click the Create button, *UIC* displays a form that asks you to provide the settings related to the template :

![image288.png](/img_user_en/image288.png)
 
* Fill in the settings of the General Information tab: 
* Enter the name of the application in the Application Name box. 
* Select the Category drop-down menu, select a category in which you want to list the application, 
* Specify a description of the application in the English & French Description fields, 
* Click on the Browse New Logo button to insert the logo of the application, 
 
Select the **Nodes** tab , the **Configuration** page appears:

![image289.png](/img_user_en/image289.png)

* Click on the name of the node to rename it, the following page appears :
 
![image290.png](/img_user_en/image290.png)
![image291.png](/img_user_en/image291.png)


Select **Node name**
Select **Authorized Providers**, check for example Flexible Engine
Select a script in **Predefined** script
Select **Additional** script if necessary
Continue with configuration of Volume, Firewall, Access list to the machine
Click on button **Save Changes**
Select the **Orchestration** item 
complete this part by referring to chapter 4.13.3 Orchestration
Now you have to prepare the deployment of the template, click on the **Test Application** button (chapter below)

### 4.14.2 Application Provisioning Preparation

Once you have run the test, the Deployment Preparation page of your template appears:

![image292.png](/img_user_en/image292.png)

* Type the name of the deployment in the Label box, which will allow you to differentiate your deployment if there are more than one.
On the **Node** tag, select **Provider, Tenant, Region**
* Select the cloud provider then click the Confirm button. 
* The settings tabs (Network, Infrastructure, Customization, Configuration Management, Monitoring) are also available, they do not always appear in this order.

#### 4.14.2.1 Infrastructure

The **Infrastructure** tab will allow you to refine and configure the infrastructure settings related to your deployment, in our example Flexible Engine. 

![image293.png](/img_user_en/image293.png)

OS: The operating system or application is indicated,
The drop-down menu **Flavors** provides predefined machine templates (small, medium, large, extra large).

![image294.png](/img_user_en/image294.png)

**Key-pairs** : select an existing key-pair or create a new one.
**Note: a volume is present only if it was created while defining an application in catalog**
* Click on the **Network** tag
 
#### 4.14.2.2 Network

The **Network** tab gives you the ability to create a private network and select a range of IP addresses, and then attach the application to that network. *UIC* will automatically create a private network in the cloud provider platform. In our example Flexible Engine

![image295.png](/img_user_en/image295.png)

* Select a Network-VPC from a drop menu
* Select a Subnet from a drop menu
**Notes : Network and subnet allows to select existing network(private cloud) or to create them “Create a VPC or subnet”**
* Select **Public IP**, options : None, Dynamic IP, Elastic IP
* Select an exiting **Security Group**
or
* Select a **New Security Group**, Insert group in the zone New, the group will be created in the deploying time
or
* Click link <u>Create a security group</u>:

![image296.png](/img_user_en/image296.png)

* Complete the zone and click button **Create**.
**Direct access to the instance**: if checked and in the same network, private instace IP will be utilized for the communication with it.
**New security group rules** : secures input/output network traffic.
Click on the tab **Personalisation**:

#### 4.14.2.3 Personalization

* Click on **Personalization** tab 
The personalization tab will allow you to customize the current provisioning configuration. The extent of this customization depends on the operating system of the VM and the application that will be deployed. 

##### 4.14.2.3.1 Customization Common to All Operating Systems 

The settings common to all Operating Systems managed by *UIC* are indicated in the following page:

![image297.png](/img_user_en/image297.png)

**OS**: Speperating system or application to deploy 
* Indicate name in the **Instance Name**
* Click on the link **Advanced** :

![image298.png](/img_user_en/image298.png)

If you want the **UIC Agent** to be automatically installed on the VM, select the **Install *UIC* Agent** check box. This will allow you to associate scripts with this deployment and also to execute remote commands on the VM once it is deployed
DBUSER : database user
DBPASSWORD :user database password

**Tags, Key & Value**: This field allows you to associate key-value pairs with this deployment.
* Click on the **Configuration management** tag

##### 4.14.2.3.2 Microsoft Windows-specific Customization 

To deploy applications that require the installation of a Microsoft Windows system, specific customization may be required, in addition to that common to all OSs. This is the case if you use vSphere infrastructure. The settings for this customization are shown on the following page:

![image299.png](/img_user_en/image299.png)

**Product ID** : Enter the ID of your product 
**Generate a new security identity (SID)** : Check this box if you want to Generate a new security identity (SID) 
**Workgroup** : If your VM instance will need to be a member of a Windows Workgroup, check this option, then enter the workgroup name in the Name field 
**Join a Windows Domain** : If your VM instance will need to be a member of a Windows domain, check this option and specify the following settings: 
**Domain Name** : Allows you to specify the name of the domain to join 
**Username**: The name of the login user on the domain 
**Password**: Password of the user
 
#### 4.14.2.4 Configuration Management

The **Configuration Management** tab allows you to add or not a configuration management tool.
 
![image300.png](/img_user_en/image300.png)

The **Configuration Management** drop-down menu lists supported configuration management tools such as *Puppet* and *Chef*.

##### 4.14.2.4.1 *Chef* Integration

The applications you deploy with *Use IT Cloud* can be orchestrated and customized using the *Chef* Configuration Manager. This feature is available when building the configuration process for your application, using the Configuration Management command available from the preparation of a deployment: 

![image300.png](/img_user_en/image300.png)

* Select the Configuration Management => *Chef* menu, the screen to configure the necessary parameters will be displayed:

![image301.png](/img_user_en/image301.png)

* Fill in the following configuration parameters:
**Chef** server: Select the server manager(which you have already configured beforehand) 
**Roles**: Check the role (s) you want to apply to the node that is being configured,
**Cookbooks**: Select the cookbooks you want to apply to the node,
**Run Mode**: Select how to launch the *Chef* Agent on the node, from the three possible execution modes, Client, Service, Daemon (on Linux), or Task (on Windows).

It is possible to create or modify the attributes of a *Chef* cookbook by clicking on the push button **Write** (pencil) provided on the upper right of the Cookbooks widget.

![image302.png](/img_user_en/image302.png)

*UIC* then displays the edit box that allows to set the attributes:

![image303.png](/img_user_en/image303.png)
  
This editor allows you to define the attributes you need, in JSON format. 
Example of content that you could enter in this editor: 
{ '' Filesystem '' => { '' / Dev / disk1 '' => { '' Size '' => '' 10mb '' } } } 
**Note: *UIC* checks for compliance with JSON syntax. The *Chef* system also performs this check before the acceptance of the content.**

##### 4.14.2.4.2 *Puppet* Integration

Select the **Configuration Management => Puppet**menu, the screen to configure the necessary parameters will be displayed:

![image300.png](/img_user_en/image300.png)

* Select drop menu **Configuration management**
* Select **Puppet server** ( alredy declared )
* Click on **Group Selection**, the following list appears:

![image304.png](/img_user_en/image304.png)

* Check the Nodes to be managed with *Puppet*
* To validate, click **Select** button. You are redirected to the Configuration management tab.
 
Zone **Group Selection** displays a number of selected nodes or node’s names when drag over the zone.
* Click on **Monitoring** tag

#### 4.14.2.5 Monitoring

The **Monitoring** tab is used to interface *Zabbix*, an open source monitoring solution, to the *Use IT Cloud* platform. 

![image305.png](/img_user_en/image305.png)

* Select the **Monitoring** drop-down menu, select *Zabbix*, 
* Check the desired *Zabbix* **template** (s), 
* Check **Active** or **Passive** to define the operating mode of the monitoring agent. 
* **Active**: This form of supervision is the exact opposite of the previous one. Here, it is the monitored components that send, at regular intervals, metrics and messages to a central supervisory instance. 
* **Passive**: In this form of supervision, it is the supervision server that periodically polls the components to be monitored. In this mode you must add a security rule by opening port 10050. You can change the default port to the value of your choice.
* **Direct access to the instance**: if checked and in the same network, private instace IP will be utilized for the communication with it.
* Select the **Encrypt with certificates** check box if you are using encrypted connections. 
Now, click  on the **Deployment** button.

### 4.14.3 Deployment

Now you can deploy the application by clicking the **Deploy** button, the deployment starts and the following screen appears, stating that *UIC* is deploying the application: 
The VMs provisioning may take several minutes, depending on the chosen Cloud provider, and on the application configuration. When the complete deployment ends successfully, *UIC* displays the following screen :

![image306.png](/img_user_en/image306.png)

**Credential**: Indicates the account credential
**Application**: Indicates the name of the deployed application
**Label**: Credential assigned to the instance of the application during deployment preparation.
**Provider**: Specifies the name of the vendor where you deploy
**Nodes**: Indicates the number of nodes
**State**: Indicates the active or inactive status of the deployment,
**Actions**: A drop-down menu that allows you to perform various actions related to the  application. The actions available in the drop-down menus vary depending on the application definition. The list below is not exhaustive; it is provided as an example:
* **Ssh**: Allows to connect in ssh to the application
* **Vnc**: Connect via a vnc client
* **Web**: Allows you to connect to the web application

## 4.15 Provider’s Specifics

Deployments are done through the *UIC* platform interfacing with the provider architectures, each of them having its specificities of inscription.
When preparing for deployment, the list of authorized providers appears as long as there are credentials and the ability to deploy the image from the authorized providers template. If the node image is not available, the provider will not be displayed.

### 4.15.1 AWS Specifics

#### 4.15.1.1 AWS Registration

*Use IT Cloud* uses access keys to make AWS API calls to drive AWS services. It is therefore necessary to create an AWS account to access these services.
Once your account is created at AWS, you'll get AWS root account credentials (such as access keys or key pairs) from the AWS Administration Console's Security Credentials page. You obtain the IAM user credentials from the IAM console.

* Retrieve your access keys via the link below:
https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html
From *UIC*'s **Account:User** menu (on top right of the dashboard), select the **Cloud credentials** command, *UIC* displays the following form:

![image307.png](/img_user_en/image307.png)

* Click on the **Amazon Web Services** tab, then click the **Add credentials** button, the following dialog box appears: 

![image308.png](/img_user_en/image308.png)

You must fill in the requested information:
* **Credentials Name**: This is the name of the credential that you want to add,
* **Access key**: Enter the access key of the credential,
* **Secret key**: Enter the secret key of the credential,
* **Proxy** : proxy URL if there is one for this credential,
Click the **Confirm** button to confirm the entries.

For details on all the specificities of deploying resources on AWS, see the chapter "Designing a Deployment Project with AWS".

#### 4.15.1.2 Deploying on AWS

The deployment of the applications or virtual machines defined in an infrastructure managed by Amazon requires the preparation of this one. Follow the instructions for preparing a deployment, as detailed below:

![image309.png](/img_user_en/image309.png)

* Select **Amazon** (Provider), **Tenant, Region** from the drop-down menus,
* Click the **Confirm** button, a screen similar to the following will be displayed by *UIC*:

![image310.png](/img_user_en/image310.png)
 
We will have to configure the network, chapter below:

##### 4.15.1.2.1 Network Configuration

The **Network** tab lets you specify all the network configuration settings needed for deployment on your Amazon infrastructure. These parameters are shown in the above  figure:
**VPC**: Select or create the name of the network where the VM will be deployed,
**Subnet**: The subnet belonging to the network is indicated,
**Public IP**: Selection of the public PI,
**Security group**: Select or create rules that control incoming and outgoing traffic
The box **Direct access to the instance** (box is checked): If the instance is in the same network as the platform, the communication with the agent will be done using the private address of the instance.

##### 4.15.1.2.2 Infrastructure Definition

The **Infrastructure** tab allows you to specify all the parameters necessary for deployment on your Amazon infrastructure:

![image311.png](/img_user_en/image311.png)

**OS**: The operating system or application is indicated,
The drop-down menu **Flavors** offers predefined machine flavor (some templates propose to add a placement group).
The drop-down menu **Placement group**: 2 possibilities, none or new, it will be necessary to indicate the name in the zone envisaged for this purpose, and it will be created at the time of the deployment.
**Note: The Placement Group is only offered in the following size:**

"m4.large","m4.xlarge","m4.2xlarge","m4.4xlarge","m4.10xlarge","m4.16xlarge","c4.large","c4.xlarge","c4.2xlarge","c4.4xlarge",
"c4.8xlarge","c3.large","c3.xlarge","c3.2xlarge","c3.4xlarge","c3.8xlarge","cc2.8xlarge","cr1.8xlarge","r3.large","r3.xlarge",
"r3.2xlarge","r3.4xlarge","r3.8xlarge","r4.large","r4.xlarge","r4.2xlarge","r4.4xlarge","r4.8xlarge","r4.16xlarge","x1.16xlarge",
"x1.32xlarge","d2.xlarge","d2.2xlarge","d2.4xlarge","d2.8xlarge","hi1.4xlarge","hs1.8xlarge","i2.xlarge","i2.2xlarge","i2.4xlarge","i2.8xlarge","cg1.4xlarge","g2.2xlarge","g2.8xlarge","p2.xlarge","p2.8xlarge","p2.16xlarge"


**Key pair**: Selection of the credential of the key-pair to use,
**IAM role**: Choos the IAM role you want to assign to this VM.

### 4.15.2 VMware vSphere Specifics

*UIC* gives you the ability to use any virtualized infrastructure under VMware vSphere, versions 5.1, 5.5, 6, and 6.5. This can be done through the **Clouds => vSphere** menu for viewing and monitoring existing resources, as well as creating new resources such as IP pool types or virtual machine template types.
You can also use *UIC* to deploy applications or virtual machines defined in the *UIC* environment, in a managed infrastructure under VMware vSphere.

#### 4.15.2.1 Setting VMware vSphere Credentials

The specific description of VMware vSphere credentials is detailed in the section **4.9.2.10.2 VMware vSphere credentials**.

#### 4.15.2.2 Deploying on VMware vSphere

You can use *UIC* to deploy applications or virtual machines defined in the *UIC* environment, in a managed infrastructure under VMware vSphere. This is done during the preparation of a deployment, as shown in the following figure:

![image312.png](/img_user_en/image312.png)
 
* To view your vSphere infrastructure settings, select **vSphere** from the **Provider** drop-down list and click the **Confirm** button, a screen similar to the following will be displayed by *UIC*:

![image313.png](/img_user_en/image313.png)

We will have to define the infrastructure, chapter below:

##### 4.15.2.2.1 Infrastructure Definition

The **Infrastructure** tab allows you to specify all the necessary settings for deployment on your vSphere infrastructure, including:

![image314.png](/img_user_en/image314.png)

**vDC**: the name of the target vDC
**Cluster**: the name of the target cluster
**Host server**: the name of the host server
**Data store**: the datastore that will host the machine files
**Resource Pool**: The name of the target resource pool
**Folder**: the name of the VM storage folder
**Flavor**: the name of the chosen template (the attributes of the template are indicated by *UIC*). The Custom Flavor button lets you define a custom template if you want. *UIC* then displays the settings shown below:

![image315.png](/img_user_en/image315.png)
 
You can choose the number of vCPUs, the size of the RAM and the disk size you want, either by specifying the values in the input boxes on the right or by using the displayed sliders. 
The drop-down menu **Flavors** offers predefined machine templates (small, medium, large, extra large).
**Note**: A Volumes box may be present, only if a volume was created when the application was defined in the catalog.

##### 4.15.2.2.2 Network Configuration

The **Network** tab lets you specify all the network configuration settings needed for deployment on your vSphere infrastructure. These parameters are illustrated in the following figure:

![image316.png](/img_user_en/image316.png)

* **Network**: The name of the network where the VM will be deployed 
* **Domain**: The membership domain of the VM 
* **Type**: Type of IP address assignment. Choose from three types: DHCP, static or IP Pool. 
If you choose the static addressing type, *UIC* displays the form that allows you to enter the elements inherent to this type of addressing, namely the IPV4 address, the network mask, the address of the gateway to use, primary and secondary DNS addresses: 

![image317.png](/img_user_en/image317.png)
 
* If you choose an **IP pool** type of addressing, *UIC* displays the list of IP pools that you have already configured, as shown in the figure below:

![image318.png](/img_user_en/image318.png)

The box **Direct access** to the instance (box is checked): If the instance is in the same network as the platform, the communication with the agent will be done using the private address of the instance.

### 4.15.3 VMware vCloud Specifics

#### 4.15.3.1 Setting VMware vCloud Credentials

The specific description of VMware vCloud credentials is provided in section 3.10.9.1 **VMware vCloud credentials** in this document. 
4.15.3.2 Deploying on VMware vCloud
The deployment of the applications or virtual machines defined in a vCloud-managed infrastructure requires the preparation of this one. Follow the instructions for preparing a deployment, as detailed below:

![image319.png](/img_user_en/image319.png)

* Select **vCloud**, the **Tenant, the Region** from the drop-down menus,
* Click the **Confirm button**, a screen similar to the following will be displayed by *UIC*:

![image320.png](/img_user_en/image320.png)

We will have to define the infrastructure, chapter below:

##### 4.15.3.2.1 Infrastructure Definition

The **Infrastructure** tab allows you to specify all the necessary settings for deployment on your vCloud infrastructure:

![image321.png](/img_user_en/image321.png)

**OS**: The operating system or application is indicated,
**Storage profile**: Indicates the type of storage used, this parameter depends on the technology, the terminology proposed by the infrastructure provider vCloud
The Custom flavors check box Allows you to customize the flavors of the machine (s). *UIC* then displays the parameters shown below:

![image322.png](/img_user_en/image322.png)
 
**vCPU**: Use the slider or arrows to specify the number of CPUs needed,
**Ram**: Use the cursor to express the size of the RAM,
**Disc**: Use the slider to specify the size of Disk required,

The drop-down menu Flavors offers predefined machine templates (small, medium, large, extra large).
**Note: A Volumes box may be present, only if a volume was created when the application was defined in the catalog**.

##### 4.15.3.2.2 Network Configuration

The Network tab allows you to specify all the network configuration settings needed for deployment on your vCloud infrastructure. These parameters are illustrated in the following figure:

![image323.png](/img_user_en/image323.png)

**Network**: The name of the network where the VM will be deployed
**Gateway**: A gateway is selected, if other gateways have been declared, others will be accessible from the drop-down menu.
The **Instance Direct Access** check box: When you select the check box and if the instance is in the same network as the platform, you do not need to use the public IP, the communication with the instance will be done using the private address of this one.

**Gateway IP**: Select the gateway IP or not, the additional setting is displayed when you select one.

![image324.png](/img_user_en/image324.png)
 
**Public Access** (Incoming Stream): Check the box to see or associate with the Security Group Rules instance that control incoming and outgoing traffic,

![image325.png](/img_user_en/image325.png)

**Note: To avoid conflicts, a warning message will appear, if you select a port that is already in use, you will need to change it.**

#### 4.15.3.3 Volume Creation

From the Clouds drop-down menu => **vCloud => tenant => Volumes**. The Volumes page appears:  

![image326.png](/img_user_en/image326.png)

* Click the **Create a volume** button, the following dialog box appears:

![image327.png](/img_user_en/image327.png)

Fill in the **Name and Size** fields,
Click the **Create Volume** button
The created volume is now visible from the table of the volumes page.

#### 4.15.3.4 Attach Volume to Instance

If you click the Volumes item of the vCloud provider, you will get the following form :

![image328.png](/img_user_en/image328.png)

* Select the menu **Actions => Attach**, the following dialog box appears : 

![image329.png](/img_user_en/image329.png)

* Click **Attach Volume**, wait a few moments, the table on the volumes page updates, and the Attachment column shows the instance to which you just attached the volume. 

#### 4.15.3.5 Create Organisation’s Network

* From the menu **Clouds => vCloud => tenant => Networks**, click the **Create Organization Network** button 
* Click on the link Create a new address range, a form **Create a new organization network** appears:

![image330.png](/img_user_en/image330.png)

<u>**Selecting the Edge Gateway**</u>
* Gateway Name: Select the desired gateway:

<u>**Network configuration**</u>

Network Name: Enter the network settings of the new organization VDC network for this virtual datacenter

<u>**Network configuration**</u>

**Network Name**: This field is used to specify the network name,
* If you check the type of addressing, fill in the address range:
**First IP**: It is necessary to indicate the first IP address of the range to Create
**Last IP**: It is necessary to indicate the last IP address of the range to Create
**Gateway IP**: The IP address of the gateway must be specified
**Subnet Mask**: You must indicate the network mask
Or,
* If you check the type of addressing, fill in the CIDR block:
**Block CIDR**: It is necessary to indicate the block of address, example (10.0.0.1 / 24),
**Primary DNS**: Primary DNS must be specified
**Secondary DNS**: You must specify the secondary DNS
**Note**: *Use IT Cloud* will fill in the fields, First IP = 10.0.0.2, Last IP = 10.0.0.254, IP of Gateway 10.0.0.1 and Subnet Mask automatically = 255.255.255.0.
* Click the **Validate Organization Network** button.

#### 4.15.3.6 Deploying with vCloud Catalog

Each supplier makes available its catalog (applications, operating systems). From the menu **Clouds => vCloud => tenant => Catalogs**, the following window is displayed: 

![image331.png](/img_user_en/image331.png)

* Click on the desired model name (**Name** column), the frame that lists the **Catalog Templates** appears: 

![image332.png](/img_user_en/image332.png)

* Select the menu **Actions => Deploy**, a dialog box asking to confirm the action is displayed
* Click **OK to confirm**, you will get the following form :

![image333.png](/img_user_en/image333.png)

* Fill in the Label field to identify your deployment, 
Select one of the predefined flavors via the **Flavor** pull-down menu.Nommez l’Etiquette  

![image334.png](/img_user_en/image334.png)

Or,
* Check the box **Custom Flavor** : 

![image335.png](/img_user_en/image335.png)
 
Use the slider to set the number of **vCPUs** you want, the **RAM** and **Disk** sizes you need,


### 4.15.4 CloudWatt Specifics

#### 4.15.4.1 Add Credentials

To connect to the CloudWatt infrastructure, the *UIC* platform must register an "Organization Administrator" role and infrastructure settings 
* Select the menu **Account Credential : User name> => Cloud credentials => Cloudwatt tab => Add credentials**, the following dialog box appears: 

![image336.png](/img_user_en/image336.png)

* Fill in the following fields :
**Credentials Name**: Name of the cloud credentials
**Host**: Connection host, for example https://identity.fr1.cloudwatt.com/v2.0
**User**: Login ID at CloudWatt
**Password**: user password at CloudWatt
**Project**: Cloudwatt project credential
**Proxy**: Proxy URL, if applicable

* Click the **Add** button.
Once credentials registration is done, you can access the different settings of your provider from *UIC*.

#### 4.15.4.2 Deploying on CloudWatt

Deploying applications or virtual machines defined in an infrastructure managed by CloudWatt requires its preparation. Follow the instructions for preparing a deployment, as detailed below:

![image337.png](/img_user_en/image337.png)
 
* Select **CloudWatt (Provider**), **Tenant, Region** from drop-down menus,
* Click the **Confirm** button, a screen similar to the following will be displayed by *UIC*:

![image338.png](/img_user_en/image338.png)
 
We will have to configure the network, chapter below:

#### 4.15.4.2.1 Network Configuration

The Network tab allows you to specify all network configuration settings needed for deployment on your ClouWatt infrastructure. These parameters are illustrated in the following figure:

![image339.png](/img_user_en/image339.png)

The **Public IP** Address check box: Check or uncheck the box to enable the public IP address
**Network**: Network Selection,
**Subnet**: Subnet Selection
**Security Group**: Selection of the security group associated with the instance rules that control incoming and outgoing traffic)
The box **Direct access** to the instance (box is checked): If the instance is in the same network as the platform, the communication with the agent will be done using the private address of the instance.

##### 4.15.4.2.2 Infrastructure Definition

The Infrastructure tab allows you to specify all the parameters needed for deployment on your vCloud infrastructure:

![image340.png](/img_user_en/image340.png)

**OS**: The operating system or application is indicated,
The drop-down menu **Flavors** offers predefined machine flavors (small, standard ...).
**Note: A Volumes box may be present, only if a volume was created when the application was defined in the catalog.**
**Key pair**: Select an existing key pair,
Or Select, no, or, new, and enter the name in the New entry box,

### 4.15.5 OpenStack Specifics

#### 4.15.5.1 Add Credentials

To connect to the **OpenStack** infrastructure, the *UIC* platform must register an "Organization Administrator" role and infrastructure settings. 
* Select the menu **Account Credential : User name> => Cloud credentials => Openstack tab => Add credentials**, the following dialog box appears: 

![image341.png](/img_user_en/image341.png)

* Fill in the following settings :
**Credentials Name**: Name of the cloud credentials
**Host**: Openstack connection host,
**User**: Openstack Login ID
**Password**: Openstack user password
**Project**: Openstack project credential
**Proxy**: Proxy URL, if applicable
**Visible IP from provider** : The IP address of the *UIC* platform that will be visible from the Openstack infrastructure. 

* Click the **Add** button.
Once credentials registration is done, you can access the different settings of your provider from *UIC*.

#### 4.15.5.2 Deploying on OpenStack

The deployment of applications or virtual machines defined in an OpenStack-managed infrastructure requires its preparation. Follow the instructions for preparing a deployment, as detailed below:

![image342.png](/img_user_en/image342.png)

* Select **OpenStack (Provider),the Tenant** from the pull-down menus,
* Click the **Confirm** button, a screen similar to the following will be displayed by *UIC*:

![image343.png](/img_user_en/image343.png)
 
We will have to configure the network, chapter below:
 
##### 4.15.5.2.1 Network Configuration

The **Network** tab allows you to specify all the network configuration settings needed for deployment on your OpenStack infrastructure. These parameters are illustrated in the following figure:

![image344.png](/img_user_en/image344.png)

The **Public IP** Address check box: Check the box to enable the public IP address or not
**Network**: Network Selection,
**Subnet**: Subnet Selection
**Security Group**: Selection of the security group associated with the instance rules that control incoming and outgoing traffic)
The Instance **Direct Access** checkbox (box checked): If the instance is in the same network as the platform, communication with the agent will be done using the instance's private address.

##### 4.15.5.2.2 Infrastructure Definition

The **Infrastructure** tab allows you to specify all the necessary settings for deployment on your OpenStack infrastructure:

![image345.png](/img_user_en/image345.png)

**OS**: The operating system or application is indicated,
The drop-down menu **Flavor** offers predefined machine flavors.
**Key pairs**: Select an existing key pair,
Or Select, no, or, new, and enter the name in the New entry box,
**Note: A Volumes box may be present, only if a volume was created when the application was defined in the catalog.**

### 4.15.6 Microsoft Azure Specifics

#### 4.15.6.1 Add Credentials

To connect to the Microsoft Azure infrastructure, the *UIC* platform must register an "Organization Administrator" role and infrastructure settings. 
* Select the menu **Account Credential : User name** => **Cloud credentials => Microsoft Azure tab => Add credentials**, the following dialog box appears: 

![image346.png](/img_user_en/image346.png)

* Fill in the following input fields :
**Credentials Name**: Name of the cloud credentials
**Subscription ID**: Azure subscription credential, 
**Client ID**: Azure client credential
**Tenant ID**: Azure tenant credential
**Secret Key**: Azure connection secret Key
**Proxy**: Proxy URL, if applicable

* Click the **Add** button.
Once credentials registration is done, you can access the different settings of your provider from *UIC*.

#### 4.15.6.2 Deploying on MS Azure

Deploying applications or virtual machines defined in an MS Azure-managed infrastructure requires its preparation. Follow the instructions for preparing a deployment, as detailed below:

![image347.png](/img_user_en/image347.png)

* Select **Microsoft Azure (Provider), Tenant and Region** from the drop-down menus,
* Click the **Confirm** button, a screen similar to the following will be displayed by *UIC*:

![image348.png](/img_user_en/image348.png)

We will have to define the infrastructure, chapter below:

##### 4.15.6.2.1 Infrastructure Definition

The **Infrastructure** tab allows you to specify all the necessary settings for deployment on your MS Azure infrastructure:

![image348.png](/img_user_en/image348.png)

**OS**: The operating system or application is indicated,
The drop-down menu **Flavors** offers predefined machine flavors.
**Resource Group**: Select the resource group,
**Disk**: Check the Managed or Unmanaged check box
**Note: A Volumes box may be present, only if a volume was created when the application was defined in the catalog**.

##### 4.15.6.2.2 Network Configuration

The Network tab allows you to specify all the network configuration settings needed for deployment on your MS Azure infrastructure. These parameters are illustrated in the following figure:

![image349.png](/img_user_en/image349.png)

The **Public IP** Address check box: Check the box to enable the public IP address or not
**Network**: Network Selection,
The Instance **Direct Access** checkbox (box checked): If the instance is in the same network as the platform, communication with the agent will be done using the instance's private address.

### 4.15.7 Flexible Engine Specifics

#### 4.15.7.1 Add Credentials

The *UIC* platform makes it possible to use the cloud services offered by Orange Business Services. To declare the credential, the settings must be made from the **Login / Account Settings => Cloud Credentials**:

![image350.png](/img_user_en/image350.png)

The **Cloud Credentials** page appears, select the **Flexible Engine** tab,

![image351.png](/img_user_en/image351.png)

* Click on the Add an credential button, the following form is displayed:

![image352.png](/img_user_en/image352.png)
 
* Fill in the following input fields :
**Credentials Name**: Name of the cloud credentials
**Subscription ID**: Azure subscription credential, 
**Client ID**: Azure client credential
**Tenant ID**: Azure tenant credential
**Secret Key**: Azure connection secret Key
**Proxy**: Proxy URL, if applicable
* Click the **Add** button.
Once credentials registration is done, you can access the different settings of your provider from *UIC*. 

#### 4.15.7.2 Deploying on Flexible Engine

The deployment of applications or virtual machines defined in an infrastructure managed by Flexible Engine requires the preparation of this one. Follow the instructions for preparing a deployment, as detailed below:

![image353.png](/img_user_en/image353.png)

* Select **Flexible Engine, the Tenant and the Region** from the drop-down menus,
* Click the **Confirm** button, a screen similar to the following will be displayed by *UIC*:

![image354.png](/img_user_en/image354.png)

We will have to configure the network, chapter below:

##### 4.15.7.2.1 Network Configuration

The **Network** tab allows you to specify all the network configuration settings needed for deployment on your Flexible Engine infrastructure. These parameters are illustrated in the following figure:

![image355.png](/img_user_en/image355.png)
 
**Network**: Network Selection,
**Subnet**: Subnet Selection
**Public IP**: Selecting a Public IP Address
**Security Group**: Selection of the security group associated with the instance (rules that control incoming and outgoing traffic)
The box **Direct access** to the instance (box is checked): If the instance is in the same network as the platform, the communication with the agent will be done using the private address of the instance.

##### 4.15.7.2.2 Infrastructure Definition

The **Infrastructure** tab allows you to specify all the parameters necessary for deployment on your Flexible Engine infrastructure:

![image356.png](/img_user_en/image356.png)

**OS**: The operating system or application is indicated,
The drop-down menu **Flavors** offers predefined machine flavors.
**Key pair**: Select an existing key pair,
Or Select, no, or, new, and enter the name in the New entry box,
**Note: A Volumes box may be present, only if a volume was created when the application was defined in the catalog.**

## **5.	Designing a deployment project for AWS Cloud**

This chapter provides a step-by-step description of how to design and implement a deployment with *Use IT Cloud*. The access account must be created on the Amazon Cloud platform.

## 5.1 Presentation of a Typical Project

The use case chosen to illustrate the phases of an application provisioning on AWS Cloud is a deployment of the WordPress application built on an architecture comprising two nodes: 
* The first node with a private WordPress application image at a CSP (the image was created beforehand) 
* The second node contains the MySQL database installed in a VM which is a member of a private network that is not accessible from outside. 
In this scenario, we will describe the different steps from design and description phase to the deployment phase of the application. 
The goal of the scenario is to define an application and include it in the *UIC* catalog, and then create an instance of that application at the AWS ifrastructure. The created application will be called "Wordpress Multinode". 

## 5.2 Global Architecture

The following diagram shows the infrastructure that will be deployed in AWS Cloud.
 
![image357.png](/img_user_en/image357.png)
 
Before deploying the **Wordpress Multinode** application, we will define and prepare the infrastructure that will host it. We first need to create a virtual private network (VPC) called "VPC_Wordpress". This network will have two subnetworks, the first one is public and the second one is private. 
* The public subnet, **Subnet_Wordpress**, will host the frontend server "Wordpress". This subnet is linked to an internet gateway that allows access to the Wordpress URL from the internet.
* The Private network, **Subnet_Private_Wordpress** will host the database server "mysqlserver". No access from the internet to the server is allowed. Only the wordpress server can connect to it on the 3306 port of the mysql service. 

In order to control access to the servers, two security groups will be created "sg_Wordpress" and "sg_Mysql". SSH Administration connections will be made using the SSH key "Key_Wordpress" that we will create. 
In this scenario, we will use a private Wordpress image, we assume that the AWS AMI for this application is already created.
 
## 5.3 The Design and Deployment Phases of the Project

The design of the project and its deployment will consist of several phases composed themselves of several stages.
The <u>**first phase**</u> is to design the template of the application "Wordpress Multinode " in *UIC*, we will proceed as follows:
* Define references to system images: We will use a standard image provided by AWS provider for the Mysql server. Regarding the wordpress server, we will describe how to reference a private image in *UIC*.
* Define the customization scripts that will run when the virtual machines are instantiated.
* Define the template that will describe the two virtual machines with their access rights and how to access them through the *UIC* portal (application access of the wordpress site and administrative access using SSH client)

The <u>**second phase**</u> is to create the infrastructure that will host the application in the AWS Cloud. Once the application is defined through the template, add it to the *UIC* catalog, before proceeding with its deployment, we will prepare the necessary infrastructure in the AWS Cloud:
* Creation of the VPC with the sub networks,
* Creating security groups,
* Creating the SSH key.

The <u>**final phase**</u> will be to deploy to the AWS infrastructure. For this, during the configuration phase and before deployment of the application, we will select the previously defined components.
 
## 5.4 First Phase : Design of the Application Image and Scripts

### 5.4.1 Use Standard Image

The virtual machine "mysqlServer" will rely on a standard system image (ubuntu 14.04). *UIC* is preconfigured to reference a set of system images provided by cloud providers.

### 5.4.2 Define Private Image

In this scenario, we assume that the "Wordpress" virtual machine uses a private system image (private AMI) already present on AWS. In the sections below, we describe the steps to reference the private image in *UIC*.

Click on the menu **Design => Images**, then select **Private Images** tab, the following form will be displayed :

![image358.png](/img_user_en/image358.png)

* Click the button **Create a private image**, the following page appears : 

![image359.png](/img_user_en/image359.png)

* Fill in the required data : 
**Name** : Give a name to this private image 
**Version** : give the version number of this image
**Architecture** : select the hardware architecture type (x64, x86)
**Based on** : Select the base operating system for this image.

* Click the button **Create private image**, in case of successful operation, the following message will appear : 

![image360.png](/img_user_en/image360.png)

* The private images database is updated and the new created image is visible in the **Private images** tab, as shown in the screen below :

![image361.png](/img_user_en/image361.png)

Now, we have to reference this private image in *UIC* image references database. To do this, click the **See references to the image**, in the new displayed form, click **reference a provider** button, you will get the following form

![image362.png](/img_user_en/image362.png)

* Select the AWS Cloud provider, select the region, the base Cloud provider image (AMI), and fill in the default user and the password. 
* Validate using the button **Reference this image**.
* Complete the above fields. Choose the AWS cloud provider and region.
* Select the private image (in the scenario it is named "Wordpress_base").
The Operating System field is preselected and must match the reference image defined in the previous "Ubuntu with Wordpress" step.
* Confirm by clicking the Reference private image button.

### 5.4.3 Customize Using Scripts

Access the **Design => Scripts** menu, for more details on this menu, refer to chapter 4.2.2 **Scripts** contained in this document.
 
![image363.png](/img_user_en/image363.png)

* Click the button **Add a script**, the following form will be displayed :

![image364.png](/img_user_en/image364.png) 

* Fill in the input fields, the **Script** area should contain the script code to be executed.
* To save the script, click the button **Add script**.

## 5.5 Second Phase : Design of the Application Template 

### 5.5.1 Create Application Template 

Now we will add the "Wordpress Multinode " application in the *UIC* catalog. We first create the application template using the **Design => Template** menu. The following screen appears :

![image365.png](/img_user_en/image365.png) 

* Enter Wordpress Multinode in the field **Template name**,
* Click the button **Create**, the page « Wordpress Multinode - General Information » appears :

![image366.png](/img_user_en/image366.png) 

* Enter the parameters necessary for the creation of the template, 
* Select the application **Category** from the drop-down menu 
* Indicate a brief **description** in the English and then the French box 
* Insert the **logo** of the application if you wish, 
* Click on the item Node1, the **configuration** window of the node appears:

![image367.png](/img_user_en/image367.png) 

We will create a first mysqlserver node, enter mysqlserver in the name field, 
* Select the system image of the virtual machine from the drop-down menu, ubuntu 14.04 (X64).
* Select the authorized cloud providers, the node can be deployed only to the selected providers (by default, no provider is selected). 
* Choose the customization script, 
* Define the firewall rules. These rules will be recalled when the application is deployed and the access controls that will be applied. It will always be possible in the deployment phase to modify or choose an already defined security group. 
* Complete the list of direct access from the portal. 
* Click the button **Save Changes** to confirm the configuration.

To create the second node, click on the Node item, the Node List page appears :

![image368.png](/img_user_en/image368.png) 

* Enter Wordpress then click the button **Add node**, the following page appears :

![image369.png](/img_user_en/image369.png)  

* Click the button **Edit** of the wordpress node, the page Wordpress Multinode – Node Wordpress appears : 

![image370.png](/img_user_en/image370.png)  
	
* Select the private image (e.g. "Wordpress_base") defined in the previous step from the **image** drop-down menu, 
* Check the desired Cloud provider from the Authorized providers drop-down menu. 
* Choose the customization script and continue filling in the settings. In the Access List section, you can define two accesses methods from the *UIC* portal : SSH access and access to the Wordpress site (link to the Wordpress URL). 
* Click **Save Changes**, both nodes are created. 

The template is now defined, it appears automatically in the *UIC* catalog of your account (**Deploy => Catalog**).


## 5.6 Third Phase : Deployment of the Application on AWS Cloud

In the context of the scenario "Definition of the Wordpress project with two servers (Database server and front-end web server)", we present in detail, an example of deployment of the procedure of preparation of the Cloud infrastructure and the resources that will host the application.
The example explains how to deploy the application to AWS Cloud.

Before deploying the application we need to create and / or prepare the following resources:
* The virtual network (an AWS VPC) with the subnets that will host both servers
* AWS security groups that define server access rules
* An SSH key dedicated to servers to enable secure server administration.

### 5.6.1 Cloud Infrastructure Preparation

#### 5.6.1.1 Create Network (VPC-Virtual Private Cloud) 

* The creation of an Amazon VPC from *Use IT Cloud* is done from the menu **Clouds =>  Amazon =>  Tenant**,
* Select the **VPC** item, the VPC page appears:

![image371.png](/img_user_en/image371.png) 

* Click the **Create Network** button, the VPC declaration form appears:

![image372.png](/img_user_en/image372.png) 
 
<u>**VPC**</u> 
**Name**: Enter the name of the new VPC_Wordpress, it will be used to host the servers. 
**CIDR block**: Specify the address block, example (10.0.0.1 / 24) 

<u>**New subnet**</u> 
**Name**: Enter the name of the new VPC_Wordpress, it will be used to host the servers. 
**CIDR block**: Specify the address block, example (10.0.0.1 / 24) 
**Zone**: Select the geographical area, 
**Access**: Different types of access are available Public, Private, Private with Internet access: 
• Define the Public subnet, Name "subnet_Wordpress", 

**Note: The public subnet will host the web application server (the frontend), it is associated with the network. It has the particularity of being connected to an internet gateway allowing VMs of the subnet to be accessible from the Internet if they have a public IP**. 
Or, 
• Set the Subnet Private "Subnet_Private_Wordpress" in the same way. 
The VMs in this subnet will be isolated, they can not be accessed directly from the internet. 
Or, 
• Define the Private subnet with Internet access, 2 additional possibilities will be proposed for the NAT configuration (NAT Gateway, NAT Instance). 
• Check Create a new NAT gateway, 

![image373.png](/img_user_en/image373.png) 

* Check **Create a new NAT instance**

![image374.png](/img_user_en/image374.png) 
	
* Click the **Create** button, the VPC appears in the table that lists all created Network.

![image375.png](/img_user_en/image375.png) 

* Click on the blue link (table of the ID column), the following page appears, it presents the network VPC_Wordpress with its sub Network.

![image376.png](/img_user_en/image376.png) 

All Network details are displayed.

**Note: Note that the creation or deletion of a new network is accessible after validation of the creation of a VPC.**

#### 5.6.1.2 Create Security Groups

For each server, we need to define the security rules (ports to open, by default all ports are closed). In the template definition, the security rules for each server have already been defined. In the deployment phase, it will be proposed to dynamically create new security groups composed of predefined rules. They will be automatically applied on the server.
Another way to manage security groups is to prepare them in advance and refer to them during the deployment phase.

To complete this preparation, the following image shows the creation of an AWS security group.
Select the menu Clouds => Amazon AWS => Network and Security, => Security Groups.
* Click the Create a Security Group button to design a first security group. The New Security Group dialog box appears,

![image377.png](/img_user_en/image377.png) 
 
* Set the name of the security group : e.g. ‘’sg_Wordpress’’
* Click the Create button, the following page will appears :

![image378.png](/img_user_en/image378.png) 
 
* Click the Edit button to define the security group rules

![image379.png](/img_user_en/image379.png) 
 
* Enter the desired rules, then repeat the same operations for a new security group dedicated to the mysql node. 
* Once all the scurity groups settings are defined *UIC* displays the folowing form :

![image380.png](/img_user_en/image380.png) 
 
#### 5.6.1.3 Create SSH key

An SSH key ishold also be generated and associated with deployed servers. The menu **Clouds => Amazon AWS => Network and security => Key pairs** shows all existing key pairs and allows to create new ones using the **Create key pair** button  :  
 
Click **Create Key Pair**, the Create Key Pair dialog box appears: 

![image381.png](/img_user_en/image381.png) 

* Enter the key pair name, e.g. Key_wordpress, in the **Key pair name** field 
* Click the **create** button, 

Once created, the private key is downloaded to your browser machine. It is also stored on the *UIC* platform. It will be used for SSH access to VMs from the *UIC* web interface through the integrated ssh web client. 
The key thus defined may be associated to your VMs during the deployment phase. 

### 5.6.2 Pre-deployment of the Application 

From the menu **Deploy**, select **Catalog** command, the following page appears : 

![image382.png](/img_user_en/image382.png) 

Click on the Deploy button of the desired application, you are automatically directed to the **Configure** ... page:
* Click the Add to cart button of the **Wordpress Multinode** entry,
* Click the **Checkout** button to confirm your pre-selection, you will be automatically directed to the Deploy Preparation page:

![image383.png](/img_user_en/image383.png) 
 
It is from this page that you can configure your selection to deploy it,
* Fill in the **Label** field to name your deployment instance,
Complete the **Label** field to name your deployment, it will be distinguishable from others.
Choose the **Provider, the Tenant, the Region** from the drop-down menus,
Click the **Confirm** button, the page deploys the configuration tabs **(Network, Infrastructure, Customization, Configuration Management, Monitoring)**.

![image384.png](/img_user_en/image384.png) 

From the **Nodes** tab (virtual machine), choose the region (menu) in which you want to deploy and click the **Confirm or Confirm button for all nodes*** (same provider and region for all nodes):
* From the **Nodes** tab, we see that the provider is selected,
* Choose the **region** in which you want to deploy and click the **Confirm** button, a new input box appears:

![image384.png](/img_user_en/image384.png) 

* Complete the **Network** tab,
* Select an existing VPC or create one via the Create VPC or Subnet link.
* Select the **subnet** drop-down menu
* Select the drop-down menu of the **public IP, of the Security Group** (rules that control incoming and outgoing traffic) ...
* Define new rules for the security group or not.
* Select the **Infrastructure** tab,

![image385.png](/img_user_en/image385.png) 

* Complete the drop-down menus:
**Flavor**: Select the virtual machine template
**Key pair**: Specify the credential of the key-pair to use
**IAM role**: Choose the IAM role you want to assign to this VM.
**Volumes**: Specify the type and size of the volume you want to attach to the VM.
* Click on the tab **Personalization**, the following page appears:

![image386.png](/img_user_en/image386.png) 

* Click the **Install UIC Agent** check box, the *UIC* agent installation on the node is required to run the scripts, to interface the platform with *Puppet*, *Chef*.
* Add a script by selecting the Script drop-down menu, click the Validate the script changes button,
* Tags, Key & value: click on the + button to add your tags and attach them to the node,

* Click the **Configuration Management** tab, the following page appears:

![image387.png](/img_user_en/image387.png) 

* Choose the configuration manager (*Puppet*, *Chef*) using the **Configuration Management** drop-down menu
* Click the **Monitoring** tab, you will get the following page:

![image388.png](/img_user_en/image388.png) 

Select the **Monitoring** drop-down menu, select *Zabbix* entry,
* Check the desired model (s) from the list provided,
* Check the **Active or Passive** launch mode,
Check the desired models checkboxes,
Check the Active or Passive as **Run Mode**,
Instance **Direct Access** check box: When checked, the *Zabbix* server connects to the instance using its private IP, otherwise a firewall rule will be created to allow communication between the *Zabbix* server and instance.
**Agent Port**: Agent Communication Port
The **Server Access** drop-down menu: Server Connection Address
The Encrypt with Certificates check box: Encrypts certificates
The configuration of the application is complete, the deployment step can be started.

### 5.6.3 Deploy Application 

Click the **Validate and Save** button then click the **Deploy** button. *UIC* will tell you that the application deployement is in progress. Wait until the *UIC* returns the result (success or failure).
Once the deployment is finished successfully, click the menu Manage => Deployments, you will see that the deplyment status is set to **Deployed**. An example is shown in the figure below : 

![image389.png](/img_user_en/image389.png) 

Now the application is deployed, the table above displays the following information:
**Credential**: Indicates the account credential,
**Application**: Indicates the name of the deployed application,
**Label**: Application Instance Credential 
**Provider**: Indicates the name of the Cloud infrastructure provider you are deploying to,
**Nodes**: Indicates the number of nodes,
**Deployment Date** : Start Date and time of the deployment 
**State**: Indicates the status of the deployment,
**The Actions menu**: Allows you to perform various actions related to the application.
**Notes**: The actions available in the drop-down menus vary depending on the application definition. The list below is not exhaustive, it is provided as an example:
* **Ssh**: Allows to connect in ssh to the application,
* **Vnc** : Connect via a vnc client,
* **Web**: Allows you to connect to the web application instance page,

It is possible to view events related to application deployments, whether they are active or inactive. To do this, click on *Use IT Cloud* (blue banner), the **Home** page appears.

![image390.png](/img_user_en/image390.png) 

In the first frame, **Deployments**, are displayed all deployed applications as well as the status of each deployment of them.
In the second frame, **Events**, is to display the history of the last events of the deployments, the deletions, the date and the time.

