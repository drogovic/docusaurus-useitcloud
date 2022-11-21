---
id: 5030
title: Installation and configuration
description: UseITcloud documentation
sidebar_position: 4
---


This document describes the configuration process of the Use IT Cloud platform (referred to as UIC later in this document). 

##	Architecture
The Use IT Cloud solution is a multi-cloud management platform. It provides a concrete answer to various issues of multi-cloud management. Use IT Cloud is based on a model of abstraction of the resources of the various Cloud providers, with which it interfaces. It automates and orchestrates application deployments while managing their entire lifecycle.

![Image](/img_UIC_Setup/img_uicsetup_001.png#bordered)


According to its architecture, as shown in the figure above, UIC must interact with the following entities and components: 
- Cloud providers: the UIC platform behaves like a client of cloud providers. The UIC platform interacts with these providers according to their APIs. Required network configuration must be in place to enable this access. 
- Configuration Managers such as Chef, Puppet and Ansible: UIC communicates with these solutions according to their APIs. 
- The monitoring server: The UIC platform integrates monitoring with a Zabbix server, PRTG and Centreon
- Web access: Access to the UIC portal is via HTTP (S). 
- REST API: UIC exposes a REST API. 

##	Requirements
Please ensure that you meet the requirements below for a successful installation.

###	Host requirements
The installation of the Use IT Cloud platform can be on premise or external, on a physical or on a virtual machine. The required host power depends on the number of virtual machines to be managed, the number of accounts, and the number of users.
The table below provides some examples of the capacity needed based on these elements.
 
Name 	| 	Host OS					| CPU/RAM/Disk 	|Accounts 	|	Users 	|	Virtual Machines|
:-------|:-------------------------:|:--------------|:---------:|:----------|:-----------------:|
Small 	| Ubuntu Server 18.04 LTS	| CPUs 2 		| 5			| 10 users per account 	|	500 VM 	|
		|							|| RAM 12 GB 	| 	 		| 	 		|					|
		|							|| Disk 100 GB 	|			| 			|					|
Medium	|							| CPUs 4 		| 10		| 10 users per account 	|  1000 VM |
		|							|| RAM 20 GB 	| 			| 	 		|   				|
		|							|| Storage 200 GB |			| 	 		|					|
Large 	|							| To be defined	| To be defined	| To be defined	| >= 1000 VM|


The validation process of Use IT Cloud is performed on a Ubuntu Linux operating system, version 18.04 LTS.

###	Network settings of the UIC platform
The firewall rules to enable for the Use IT Cloud platform are as follows:

Service	| TCP/IP Port 	| Usage
:-------|:-------------:|:-----------------
http	| 80			| Dashboard web access
HTTPS	| 443			| Dashboard web access
HTTPS	| 443			| REST API access

The table below shows the list of domains used by UIC, their eventual alias(es) and the values of the connection ports:

Domain Name	| Eventual Aliases | Port 
:-----------|:-----------------|:--------------|
bootstrap.pypa.io	| dualstack.c.ssl.global.fastly.net	| 443
codeload.github.com	| | 	443
deb.nodesource.com	| | 	443
files.pythonhosted.org | | 		443
getcomposer.org		| | 443
launchpad.net		| | 443
packagist.org		| | 443
registry.npmjs.org		| | 443
s3-eu-west-1.amazonaws.com		| | 443
uic-repository.s3.amazonaws.com	s3-3-w.amazonaws.com	| | 443
downloads3.ioncube.com	|s3-website-us-east-1.amazonaws.com |80
| | downloads3.ioncube.com.s3-website-us-east-1.amazonaws.com| 80
fr.archive.ubuntu.com	|bouyguestelecom.ubuntu.lafibre.info	|80
keyserver.ubuntu.com	||	80
ppa.launchpad.net		||80
security.ubuntu.com		||80
mariadb.mirrors.ovh.net		||80
hkps.pool.sks-keyservers.net		||80

##	Installation and configuration of UIC platform
###	Installation 
The steps below describe how to install the UIC platform :
•	Connect to the server hosting the UIC portal and execute the following command :
```bash
sudo su 
```
•	Download the install_uic.tar.gz archive via the following link : 
```bash
wget https://uicpackages.s3.eu-west-3.amazonaws.com/install/install_uic_lc.tar.gz
```
•	Extract the contents of this archive to the destination of your choice (eg install_uic) : 
```bash
mkdir install_uic && tar -xvf install_uic_lc.tar.gz --strip 1 -C install_uic
```
Once extracted, you get the following content :

![Image](/img_UIC_Setup/image024.png#bordered) 

Before starting the installation procedure, it is necessary to perform some pre-installation operations. For example, if you want to create a mirror of the Prologue repository, as described in section **Setting up a UIC repository server**, we recommend that you do this before filling out the uic.cfg file as shown below and before to launch this installation. 
- Edit the uic.cfg file 
- Set the following variables, they represent the access keys to the deposit of the packets UIC: 
```js
UIC_REPOSITORY_ACCESSKEY = your UIC deposit access key 
``` 
```js
UIC_REPOSITORY_SECRETKEY = your secret access key to the UIC repository 
``` 
- Complete the following fields: 
```js
UIC_REPOSITORY_HOST = URL of the Use IT Cloud repository
```
By default, this variable value is set to reference the Prologue repository, which is:

```bash
https://s3-eu-west-3.amazonaws.com/uicpackages/agent
```

If you have created your own repository, please insert the corresponding value. 

```js
MYSQL_ADMIN_PASSWD = your_mysql_root_password 
MYSQL_UICB_ADMIN_PASSWD = your_mysql_uic_admin 
```
- Run the script with root rights 
	```bash
	bash ./install_useitcloud
	```
- During the installation process, UIC fetches required packages. The linux packaging tools ask you traditional confirmation questions before proceeding, simply answer Y to continue the installation. 
Once the UIC packages installation step is finished, you can proceed to the configuration of your platform, described in the next section.

###	Configuration 
The finalization of the configuration of your platform is done by logging in using an internet browser, simply by typing the address **https://@uic/**, where @uic designates the IP address or the name of the machine that hosts UIC. Use IT Cloud then displays the following screen:

![Image](/img_UIC_Setup/image025.png) 
 
The configuration of UIC takes place in several steps which are described in the following paragraphs.

####	Requirements Verification
The prerequisites here are about the Dashboard part, which mainly depends on PHP components and the Apache server. The PHP part needs the modules Openssl, Pdo, Mbstring, Tokenizer, Json and Curl. The Apache server needs the rewrite module "Mod_rewrite" for URL rewriting.
The prerequisites must all be met, if you used the installation procedure, all the checkboxes should be green, as shown in the following figure: 

![Image](/img_UIC_Setup/image026.png) 
 
####	Permissions checking

![Image](/img_UIC_Setup/image027.png) 

The directories of the UIC application below must be writable by the Web server: 
- Storage / framework / 
- Storage / logs / 
- Storage / app / 
- Bootstrap / cache /

####	Environment settings
#####	Environment

![Image](/img_UIC_Setup/image028.png) 

- **Application environment** : production mode or local mode.
- **Debug mode**: allows to put the platform in debug mode or not. 
- **URL of the application**: UIC interface access URL, in https://@IP or https://mydomain format
- **Domain Name:** Optional field, root domain used for redirects to other services that must keep the session open without authentication. These services (e.g. Zabbix, VCD interface) must also be in the same domain as the UIC platform. 
- **Platform IP visible from public clouds**: This public IP address is used to set up the configuration of the UIC agent’s firewall of a virtual machines deployed with UIC agent enabled. 
- **Proxy**: optional field Proxy URL in the format 
```bash
https://user:password@host:port
```
#####	 Mail Configuration

![Image](/img_UIC_Setup/image029.png) 

- **Host**: address of the server to use for the SMTP configuration for sending emails
- **Port**: connection port to the SMTP server
- **Username**: user name to use for the SMTP configuration
- **Password**: User password
- **Encryption**: Encrypted or not encrypted connection (tls) 
- **Sender’s mail**: Mail address of the sender 
- **Sender’s name**: Name of the sender of the emails
- **Notifications Mail**: Mail address where notifications will be sent

##### Application Configuration

![Image](/img_UIC_Setup/image030.png)  

- **Application Name**: Name of the application that will be displayed in the notifications (mail notification of backups).
- **Backup**: By default, the backup is disabled. To enable it, check the yes box. 

In order to integrate Google's captcha on the UIC platform for securing account creation requests, you must first generate the recaptcha keys by connecting to the following link: 
```bash
https://www.google.com/recaptcha/intro/index.html 
```
Once you have generated the keys, you can use them to set the following UIC fields: 
- **Recaptcha Public key**: Public key for the UIC site 
- **Recaptcha private key**: Secret key that allows a secure link between UIC and Google

#### License
To request a license from the platform, click the button « Agree terms and request a license. »

![Image](/img_UIC_Setup/image031.png)  

The license request is sent, you will receive the license by email once the request is accepted

![Image](/img_UIC_Setup/image032.png)  

You will receive an email containing the license file "license.txt uic" in this form:

![Image](/img_UIC_Setup/image033.png)  
 
#### Creation of the Operator account and user
 
![Image](/img_UIC_Setup/image034.png)  

**Account Information:**

- **Account Name (ID)**: This is the name of the account with which the user will have to authenticate (space characters are not accepted),
- **Username**: Account User Name,
- **Email**: User's email address,
- **Password**: The password of the user.
- **Confirm password**: Enter the password again for confirmation.

If all the configuration wizard information is complete, in the case where the information is incorrect, the identified errors will be displayed and UIC asks you to fix them. 
In the case where everything went well, the next window tells you that the installation is complete. Click the button **Click here to exit**, UIC will display the login dialog box to let you authenticate and start using your newly installed platform.

![Image](/img_UIC_Setup/image035.png)  

###	Setting up a UIC repository server
Prologue has set up a repository containing the files needed to install some optional components such as the UIC Agent or the Zabbix Agent. This deposit can be replicated to another deposit of your choice, by following these steps:
- Download tarball uicextraresources.tar.gz via the following URL :
```bash
sudo su
wget https://s3-eu-west-3.amazonaws.com/uicpackages/extra/uicextraresources.tar.gz
```
- Extract the contents of this archive on your server, for example using the following command : 
```bash
sudo tar -xvf uicextraresources.tar.gz
```
- Put the extracted folder in your server accessible by the protocol HTTP (s) and fill in the variable indicated in the configuration file uic.cfg
```js
UIC_REPOSITORY_HOST = Use IT Cloud Repository URL
```

##	Update of the UIC platform
During the update process of UIC, the UIC platform will not be available for any request. The UIC frontend switches off to maintenance mode and some background services will be stopped at the begginning of the process. Therefore, requests to UIC will result in failure.
Once the update is finished successfully, the stopped services will be started and the platform leaves the maintenance mode to  production state. 
The steps below describe how to update the UIC platform :
•	Connect to the server hosting the UIC portal and run the following command :
```bash
sudo su 
````
•	Download the update script using the following command : 
```bash
wget https://s3-eu-west-3.amazonaws.com/uicpackages/update/update_uic_lc.sh 
````
•	Edit the file update_uic.sh and fill in the following variables, they represent the access keys to the deposit of UIC packages :
```js
UIC_REPOSITORY_ACCESSKEY = your public access key to UIC repository 
UIC_REPOSITORY_SECRETKEY = your secret access key to UIC repository
````
•	
```bash
bash ./update_uic.sh
```
•	During the update process, several questions will be asked, answer by Yes to continue the update.

Once the update is finish
