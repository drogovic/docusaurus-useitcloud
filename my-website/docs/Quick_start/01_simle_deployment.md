---
id: 1000
title: Simple deployment
description: UseITcloud documentation
sidebar_position: 1
---


## Setup credentials

To setup credentials for your provider, on the left navigation bar click on **Provider Configuration**, select **your provider** and then click on
**Onboarding to UIC platform**

##	Image management

To deploy with UIC you have to configure references of your private cloud provider’s images. The list of referenced images for public cloud providers is updated automatically by UIC.
To reference an image got through the menu **design > images**.

![Image](/img_quick_start/image025.png#bordered)
 
Then click on **reference a provider image**
 
![Image](/img_quick_start/image027.png#bordered) 

You will be prompted to select the targeted provider, next select the desired image and its corresponding operation system, and for its default and password.

![Image](/img_quick_start/image029.png#bordered) 

Default user and password are optional according to each cloud provider, par example for VMware vSphere Linux family image’s booth are required.


##	Deploy

To perform a deployment with UIC go through the menu **Deploy > Catalog**. 

![Image](/img_quick_start/image031.png#bordered) 

The applications catalog is organized into categories (left-hand column), each category contains a set of applications that are selectable for deployment.  New public or private categories can be created and added to the list of existing categories, from the **Settings > Catalog** menu.  Each category can be enriched with new applications.

![Image](/img_quick_start/image033.png#bordered) 

The left column shows the different categories of software and applications (operating systems, databases, CRM, CMS, etc.) defined in the catalog. Just click on a category to see the items it offers, or directly enter the name of the item you want in the search box. 
For example, to deploy an application (wordpress) click on deploy and then you reach the following tab:

![Image](/img_quick_start/image035.png#bordered)
 
Next select the **provider** ovh and the ovh **tenant** to use. Select the ovh **project**, the **region** and click on **confirm**.

![Image](/img_quick_start/image037.png#bordered)

Under the **Network** tab, you can setup the configuration of the networks in terms of virtual network and subnet. Select the public ip and the security group.

![Image](/img_quick_start/image039.png#bordered) 

On the **infrastructure** tab you can setup the compute in terms of flavor and keypair.

![Image](/img_quick_start/image041.png#bordered)
 
On the **personalization** tab you can configure the instance name, the bootstrapping script to use and tags.

After this configuration click on **validate and save** and **deploy**

##	Manage

When the deployment is performed a notification is raised on the dashboard.  To manage the life cycle of the deployed application, go through the menu **manage > deployments**

![Image](/img_quick_start/image043.png#bordered) 

This deployments page displays a table with the list of deployed applications and a set of columns:

![Image](/img_quick_start/image045.png#bordered) 


- Identifier: Unique identifier created by UIC in the deployment database.
- Application: Name of the application template in the catalog.
- Label: User -assigned distinguishing label of the application instance.
- Provider:  The name of the cloud provider that hosts the deployed application.
- Nodes: The number of nodes (virtual machines) that make up the application.
- State:  indicates the status of the application:  "being deployed «, «deployed «, «Deployment failure «, «being deleted " or «removed ". 
- Actions:  Context Menu that allows you to perform two types of actions, administration or access.
- Delete: delete the application (all nodes).
- Operation System access: SSH, RDP or VNC type access.
- Application access: e.g. access to the application Web site. Different accesses are possible from the UIC portal, they are defined in the application design.

In order to allow access from the portal, UIC automatically generates the configuration parameters: 
- SSH key-pairs: for use with an SSH client or SSH Web client integrated into the UiC portal
- RDP configuration files to download,
- VNC Settings
When you click the deployment **identifier** link, you access the details of the deployed application's administration page.

![Image](/img_quick_start/image047.png#bordered) 

This page is composed of 3 different areas, the one located on top contains: 
- This list depends on The Delete button that allows to remove all the nodes of the application. 
- The Template button directs you to a page in the YAML format, which describes the resources used for this deployment.
- A table with the application deployment information summary (deployment date, status, Cloud providers, the number of nodes associated with the deployment) is also displayed. The second part, in the middle of the page, entitled Nodes, shows details about the deployed nodes: 
- For each node, this pane shows three important sub-areas: 
- Node actions: presents the list of actions allowed on instance.
- Access List to the machine (node): presents the list of access types to the node
- Infrastructure settings: presents the list of the infrastructure level settings of the node. 

