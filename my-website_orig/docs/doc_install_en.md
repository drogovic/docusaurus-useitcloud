---
id: 200
title: Installation
description: Installation documentation
sidebar_position: 2
---

## **1. Generalities**

## 1.1	Typography and Font Conventions 

The following conventions are used in this documentation:

Convention| Labels
--------|-----------------------------------
**boldface**|	**Labels, fields and dialog boxes.**
	| **Key names**.
	| **Controls and buttons to use.**
*italics*|	*Titles of other parts, chapters and sections of the manual.* 
	| *Titles of other manuals. Software names from Prologue and other providers.*
Constant| <code>width	Code blocks, Keywords and instructions.</code>
Bullet points|	* Short step-by-step procedures
**Note** :| **Notes containing important information highlighted by the text**.
**Attention** :| **Messages of this type indicate the precautions that must be observed to avoid an error or a problem.**


## **2. Architecture**

The Use IT Cloud solution is a multi-cloud management platform. It provides a concrete answer to various issues of multi-cloud management. Use IT Cloud is based on a model of abstraction of the resources of the various Cloud providers, with which it interfaces. It automates and orchestrates application deployments while managing their entire lifecycle.

![image002.jpg](/img_install_en/image002.jpg)

According to its architecture, as shown in the figure above, UIC must interact with the following entities and components: 

* Cloud providers: the UIC platform behaves like a client of cloud providers. The UIC platform interacts with these providers according to their APIs. Required network configuration must be in place to enable this access. 
* Configuration Managers such as Chef and Puppet: UIC communicates with these solutions according to their APIs. 
* The monitoring server: The UIC platform provides monitoring with a Zabbix server, it communicates with this server via the APIs exposed by this tool. 
* The virtual machines bootstrapped with the UIC agent: The configuration and customization of the virtual machines supplied with the platform can be done through an agent named "UIC agent". The UIC platform communicates with this agent via HTTP (S). The default communication port is 8286. 
* Web access: Access to the UIC portal is via HTTP (S). 
* REST API: UIC exposes a REST API. 
* UIC repository server: By default a server is set up by Prologue, accessible on the web (AWS S3). The UIC platform communicates with this server using HTTP (S). This repository can be mirrored and hosted by the client in the location of his choice provided that the repository is accessible via the HTTP (S) protocol. 



## **3. Installation requirements**
 
Please ensure that you meet the requirements below for a successful installation.

## 3.1	Host requirements

The installation of the *Use IT Cloud* platform can be on premise or external, on a physical or on a virtual machine. The required host power depends on the number of virtual machines to be managed, the number of accounts, and the number of users.
The table below provides some examples of the capacity needed based on these elements.

![table001.png](/img_install_en/table001.png)

The validation process of *Use IT Cloud* is performed on a Ubuntu Linux operating system, version 16.04 LTS. 

## 3.2	Host power requirements for *Zabbix* server

*Use IT Cloud* provides the monitoring service via *Zabbix*. This service is optional, it can be provided by Prologue and in this case, it is necessary to provide a machine to host the *Zabbix* service and the DBMS that will be associated with it. The capacity of this machine depends on the number of nodes (virtual machines, servers, and workstations) to monitor.
The following table provides several sample configurations for installing *Zabbix*:

![table002.png](/img_install_en/table002.png)

In case you have your own *Zabbix* based monitoring server, version 3.0 or later, the *Use IT Cloud* platform can be configured to import and view the supervision data of the virtual machines controlled by this server.

## 3.3	Setting up a *UIC* deposit server 

Some components such as the *UIC* Agent and the *Zabbix* Agent have been gathered in a specific repository on AWS S3, accessible via the HTTPS protocol. You can mirror this repository in a location of your choice and make it accessible through the HTTP (S) protocol. You will need to perform the necessary configuration in the uic.cfg file detailed in section **5.1 Installation** below.

## 3.4	Network settings of the *UIC* platform

The firewall rules to enable for the *Use IT Cloud* platform are as follows:

![table003.png](/img_install_en/table003.png)

The table below shows the list of domains used by *UIC*, their eventual alias(es) and the values of the connection ports:

![table004.png](/img_install_en/table004.png)

## 3.5	Network settings for *Zabbix* server 

The firewall rules to enable for the *Zabbix* server access (active agent mode is enabled).

![table005.png](/img_install_en/table005.png)



## **4. Installation and configuration of UIC platform**
 
# 4.1	Installation 

The steps below describe how to install the *UIC* platform :

* Connect to the server hosting the *UIC* portal and execute the following command :

```
	sudo su
```

* Download the install_uic.tar.gz archive via the following link :

```
	wget https://s3-eu-west-3.amazonaws.com/uicpackages/install/install_uic.tar.gz 
```

* Extract the contents of this archive to the destination of your choice (eg install_uic) : 

```
	mkdir install_uic && tar -xvf install_uic.tar.gz --strip 1 -C install_uic

```

Once extracted, you get the following content :

- ![image003.png](/img_install_en/image003.png)

Before starting the installation procedure, it is necessary to perform some pre-installation operations. For example, if you want to create a mirror of the Prologue repository, as described in section **5.3 Setting up a *UIC* repository server**, we recommend that you do this before filling out the **uic.cfg** file as shown below and before to launch this installation.

* Edit the **uic.cfg** file<
* Set the following variables, they represent the access keys to the deposit of the packets *UIC*: 
	- **UIC_REPOSITORY_ACCESSKEY** = your *UIC* deposit access key  
	- **UIC_REPOSITORY_SECRETKEY** = your secret access key to the *UIC* repository  
* Complete the following fields: 
	- **UIC_REPOSITORY_HOST** = URL of the *Use IT Cloud* repository. By default, this variable value is set to reference the Prologue repository, which is:
https://s3-eu-west-3.amazonaws.com/uicpackages/agent. If you have created your own repository, please insert the corresponding value. 
	- **MYSQL_ADMIN_PASSWD** = your_mysql_root_password 
	- **MYSQL_UICB_ADMIN_PASSWD** = your_mysql_uic_admin  
* Run the script with root rights

```
bash ./install_useitcloud
```

* During the installation process, *UIC* fetches required packages. The linux packaging tools ask you traditional confirmation questions before proceeding, simply answer Y to continue the installation. 

Once the *UIC* packages installation step is finished, you can proceed to the configuration of your platform, described in the next section.

## 4.2	Configuration 

The finalization of the configuration of your platform is done by logging in using an internet browser, simply by typing the address https://@uic/, where @uic designates the IP address or the name of the machine that hosts *UIC*. *Use IT Cloud* then displays the following screen:

![image004.png](/img_install_en/image004.png)

The configuration of *UIC* takes place in several steps which are described in the following paragraphs.

### 4.2.1	Requirements Verification

The prerequisites here are about the Dashboard part, which mainly depends on PHP components and the Apache server. The PHP part needs the modules Openssl, Pdo, Mbstring, Tokenizer, Json and Curl. The Apache server needs the rewrite module "Mod_rewrite" for URL rewriting.
The prerequisites must all be met, if you used the installation procedure, all the checkboxes should be green, as shown in the following figure: 

![image005.png](/img_install_en/image005.png)

### 4.2.2	Permissions checking

![image006.png](/img_install_en/image006.png)

The directories of the *UIC* application below must be writable by the Web server:

* Storage / framework / 
* Storage / logs / 
* Storage / app / 
* Bootstrap / cache /

### 4.2.3	Environment settings

#### 4.2.3.1	*UIC* Environment
 
![image007.png](/img_install_en/image007.png)

**Application environment** : production mode or local mode.
**Debug mode**: allows to put the platform in debug mode or not. 
**URL of the application**: *UIC* interface access URL, in https://@IP or https://mydomain format
**Domain Name**: Optional field, root domain used for redirects to other services that must keep the session open without authentication. These services (e.g. Zabbix, VCD interface) must also be in the same domain as the *UIC* platform. 
**Platform IP visible from public clouds**: This public IP address is used to set up the configuration of the *UIC* agent’s firewall of a virtual machines deployed with *UIC* agent enabled. 
**Proxy**: optional field Proxy URL in the format https://user:password@host:port

#### 4.2.3.2	 Mail Configuration

![image008.png](/img_install_en/image008.png)

**Host**: address of the server to use for the SMTP configuration for sending emails
**Port**: connection port to the SMTP server
**Username**: user name to use for the SMTP configuration
**Password**: User password
**Encryption**: Encrypted or not encrypted connection (tls) 
**Sender’s mail**: Mail address of the sender 
**Sender’s name**: Name of the sender of the emails
**Notifications Mail**: Mail address where notifications will be sent

#### 4.2.3.3	 Application Configuration

![image009.png](/img_install_en/image009.png)

**Application Name**: Name of the application that will be displayed in the notifications (mail notification of backups).
**Backup**: By default, the backup is disabled. To enable it, check the yes box.

In order to integrate Google's captcha on the *UIC* platform for securing account creation requests, you must first generate the recaptcha keys by connecting to the following link: https://www.google.com/recaptcha/intro/index.html 

Once you have generated the keys, you can use them to set the following *UIC* fields:
**Recaptcha Public key**: Public key for the *UIC* site 
**Recaptcha private key**: Secret key that allows a secure link between *UIC* and Google

### 4.2.4	Creation of the Operator account and user

![image010.png](/img_install_en/image010.png)

**Account Information**:
**Account Name (ID)**: This is the name of the account with which the user will have to authenticate (space characters are not accepted),
**Username**: Account User Name,
**Email**: User's email address,
**Password**: The password of the user.
**Confirm password**: Enter the password again for confirmation.

If all the configuration wizard information is complete, in the case where the information is incorrect, the identified errors will be displayed and *UIC* asks you to fix them. 

In the case where everything went well, the next window tells you that the installation is complete. 
Click the button **Click here to exit**, *UIC* will display the login dialog box to let you authenticate and start using your newly installed platform.

![image011.png](/img_install_en/image011.png)

## 4.3	Setting up a *UIC* repository server

Prologue has set up a repository containing the files needed to install some optional components such as the *UIC* Agent or the *Zabbix* Agent. This deposit can be replicated to another deposit of your choice, by following these steps:

Download tarball uicextraresources.tar.gz via the following URL :

```
	sudo su
	wget https://s3-eu-west-3.amazonaws.com/uicpackages/extra/uicextraresources.tar.gz
``` 
* Extract the contents of this archive on your server, for example using the following command :

```
	sudo tar -xvf uicextraresources.tar.gz
```

Put the extracted folder in your server accessible by the protocol HTTP (s) and fill in the variable indicated in the configuration file **uic.cfg**
	**UIC_REPOSITORY_HOST**= Use IT Cloud Repository URL

## 4.4	Installation of *Zabbix* 3.2 server

The *Zabbix* server installation follows the following steps:
L’installation du serveur *Zabbix*  suit les étapes suivantes :
* Download the installation script via the following link:
```
	wget https://s3-eu-west-3.amazonaws.com/uicpackages/extra/zabbix_install.sh
```
* Edit the zabbix_install.sh file and replace the following variables values with yours :

```
	dbPassword="root"  password of the database root user
	passPhrase="prologue"  Certificates passphrase
```
* Run this script with root privileges

```
	bash ./zabbix_install.sh
```

The location of the certificates can be found in:
```
	/etc/zabbix/zabbix_server_certs/zabbix_ca.crt
	/etc/zabbix/zabbix_server_certs/zabbix_server.crt
	/etc/zabbix/zabbix_server_certs/zabbix_server.key
```
These certificates will be used in the configuration of the *Zabbix* monitoring server described in the user and administrator documentation.


## **5. Update of the UIC platform**

During the update process of *UIC*, the *UIC* platform will not be available for any request. The *UIC* frontend switches off to maintenance mode and some background services will be stopped at the begginning of the process. Therefore, requests to *UIC* will result in failure.

Once the update is finished successfully, the stopped services will be started and the platform leaves the maintenance mode to  production state.

The steps below describe how to update the *UIC* platform :

* Connect to the server hosting the *UIC* portal and run the following command :

```
	sudo su
```
* Download the update script using the following command :

```
	wget https://s3-eu-west-3.amazonaws.com/uicpackages/update/update_uic.sh
``` 
* <b>bash ./update_uic.sh</b>
* During the update process, several questions will be asked, answer by Yes to continue the update.

Once the update is finished, all *UIC* services are made available and running.

##  **1. Generalities**