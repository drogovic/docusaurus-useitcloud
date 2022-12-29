---
id: 10010
title: Installation et configuration
description: UseITcloud documentation 3.2.0
sidebar_position: 1
---

##	Architecture
La solution *Use IT Cloud* est une plateforme de gestion multi-cloud. Elle apporte une réponse concrète aux diverses problématiques de gestion multi-cloud. *Use IT Cloud* se base sur un modèle d’abstraction des ressources des divers fournisseurs Clouds, avec lesquels il s’interface. Il assure l’automatisation et l’orchestration des déploiements des applications tout en permettant de gérer leur cycle de vie complet.

![Image](/img_fr/img_UIC_Guide_Installation/image002.png#bordered)

Selon son architecture, comme le montre la Figure ci-dessus, **UIC** doit interagir avec les entités et les composants suivants : 

- Les fournisseurs Cloud : la plateforme **UIC** se comporte comme un client vis-à-vis des fournisseurs Cloud. La plateforme **UIC** interagit avec ces fournisseurs conformément à leurs APIs. Une configuration réseau adéquate doit être mise en place afin d’activer cet accès.
- Les gestionnaires de configuration tels que Chef et Puppet : **UIC** communique avec ces solutions conformément à leurs APIs. 
- Le serveur de monitoring : La plateforme **UIC** assure le monitoring avec un serveur Zabbix, elle communique avec ce serveur via les API exposés par cet outil.
- Les Machines Virtuelles bootstrappées avec l’agent **UIC** :  La configuration et la personnalisation des machines virtuelles approvisionnées avec la plateforme peut s’effectuer grâce à un agent nommé « **UIC** agent ». La plateforme **UIC** communique avec cet agent via HTTP(S). Le port de communication par défaut est le 8286.
- Accès Web : L’accès au portail **UIC** se fait par HTTP(S).
- API REST:  **UIC** expose une API REST. 
- Serveur de dépôt **UIC** : Par défaut un serveur est mis en place par Prologue, accessible sur le web (AWS S3). La plateforme **UIC** communique avec ce serveur en utilisant HTTP(S). Ce dépôt peut être hébergé par le client dans la localisation de son choix à condition que le dépôt soit accessible via le protocole HTTP(S).

## Prérequis d’installation
Veuillez vous assurer de répondre aux exigences ci-dessous afin d’obtenir une installation réussie.

### Exigences matérielles pour UIC
L’installation de la plateforme *Use IT Cloud* peut être interne ou externe sur une machine physique ou virtuelle. La capacité de la machine à prévoir dépend du nombre de machines virtuelles à gérer, du nombre de comptes et du nombre d'utilisateurs. 
Le tableau ci-dessous fournit quelques exemples de capacité nécessaire en fonction de ces éléments. 

Nom     |   Plateform               | CPU/RAM/Disk  |Comptes    |   Utilisateurs   | Machines virtuelles|
:------:|:-------------------------:|:--------------|:---------:|:----------|:-----------------:|
Small   | Ubuntu Server 18.04 LTS   | CPUs 2        | 5         | 10 utilisateurs par compte  |   500 VM  |
        |                           || RAM 12 GB    |           |           |                   |
        |                           || Disk 100 GB  |           |           |                   |
Medium  |                           | CPUs 4        | 10        | 10 utilisateurs par compte  |  1000 VM |
        |                           || RAM 20 GB    |           |           |                   |
        |                           || Storage 200 GB |         |           |                   |
Large   |                           | A définir     | A définir | A définir | >= 1000 VM|

La validation du bon fonctionnement de *Use IT Cloud* est effectuée sur un système d’exploitation Linux Ubuntu, version 18.04 LTS. 

### Exigences matérielles pour le server Zabbix
Use IT Cloud assure le service de monitoring via *Zabbix*. Ce service est optionnel, il peut être fourni par Prologue et dans ce cas de figure, il est nécessaire de prévoir une machine pour héberger le service *Zabbix* et le SGBD qui lui sera associé. La capacité de cette machine dépend du nombre de machines hôtes (machines virtuelles, serveurs et postes de travail) à surveiller. 
Le tableau suivant fournit plusieurs exemples de configurations pour l’installation de *Zabbix* :

Nom	    |Plateforme	    |CPU/Mémoire	            |Base de données	|Hôtes surveillés
:-------|:-------------------------:|:--------------|:-----------------:|:----------|
Small	|Ubuntu 18.04	| 2 CPU cores/2 GB          |	MySQL InnoDB    |	100
Medium	|Ubuntu 18.04	| 2 CPU cores/              |	MySQL InnoDB    |   500
Large	|Ubuntu 18.04	| 4 CPU cores/8GB           |	RAID10 MySQL InnoDB / PostgreSQL     |	>1000
Very large	|Ubuntu 18.04|	8 CPU cores/16GB        |	Fast RAID10 MySQL InnoDB / PostgreSQL|	>10000

Dans le cas où vous disposez de votre propre serveur de monitoring basé sur Zabbix, version 3.0 ou supérieure, la plateforme Use IT Cloud peut être configurée pour importer et visualiser les données de supervision des machines virtuelles contrôlées par ce serveur.

### Mise en place du serveur de Dépôt UIC 
Certains composants tels que l’agent **UIC** et l’agent Zabbix ont été rassemblés dans un dépôt spécifique, sur AWS S3, accessible via le protocole HTTPS. 
Vous pouvez créer un miroir de ce dépôt dans un emplacement de votre choix et le rendre accessible via le protocole HTTP(S). Vous devrez alors effectuer la configuration nécessaire dans le fichier UIC.cfg détaillé dans la section **Installation** ci-dessous. 

### Paramétrage réseau de la plateforme UIC
Les règles de pare-feu à activer pour la plateforme *Use IT Cloud* sont les suivantes : 

Service	|Port TCP/IP	| Usage
:-------|:-------------:|:--------------|
http	|80	            | Dashboard web access
HTTPS	|443	        | Dashboard web access
HTTPS	|443	        | REST API access

Le tableau ci-dessous présente la liste des domaines externes utilisés pour l’installation de la plateforme **UIC**, les alias éventuels de ces domaines et les valeurs des ports de connexion :

Nom de domaine	        |Alias éventuel	|Port 
:-----------------------|:-------------:|:--------------|
bootstrap.pypa.io       |dualstack.c.ssl.global.fastly.net | 	443
codeload.github.com	    |    |  	443
deb.nodesource.com	    |    |  	443
files.pythonhosted.org	|    |  	443
getcomposer.org	        |    |  	443
launchpad.net	        |    |  	443
packagist.org	        |    |  	443
registry.npmjs.org	    |    |  	443
s3-eu-west-1.amazonaws.com	 |    | 443
uic-repository.s3.amazonaws.com	 |  s3-3-w.amazonaws.com |  	443
downloads3.ioncube.com	 |   s3-website-us-east-1.amazonaws.com      | 80
 |   |  downloads3.ioncube.com.s3-website-us-east-1.amazonaws.com	 | 80
fr.archive.ubuntu.com | 	bouyguestelecom.ubuntu.lafibre.info      | 80
keyserver.ubuntu.com     |   |80
ppa.launchpad.net	     |   |80
security.ubuntu.com	     |   |80
mariadb.mirrors.ovh.net	 |   |80
hkps.pool.sks-keyservers.net	 |  |80

### Paramétrage réseau du serveur Zabbix 
Les règles de pare-feu à activer pour la le serveur *Zabbix* (mode Agent actif est activé).

Service	Port TCP/IP 	Usage
http	80	Dashboard web access
HTTPS	443	Dashboard web access
TCP 	10050	Agent Zabbix

## Installation et configuration de la plateforme UIC

### Installation 
Les étapes ci-dessous décrivent la procédure d’installation de la plateforme UIC
- Connectez-vous  au serveur qui héberge le portail UIC 
- Exécutez la commande suivante :
```bash
sudo su 
```
- Téléchargez l’archive install_uic_lc.tar.gz via le lien suivant : 
```bash
wget https://s3.eu-west-3.amazonaws.com/uicpackages/install/install_uic_lc.tar.gz
```
- Extraire le contenu de cette archive vers la destination de votre choix (e.g. install_uic) : 
```bash
mkdir install_uic && tar -xvf install_uic_lc.tar.gz --strip 1 -C install_uic
```
Une fois l’extraction effectuée,  vous obtenez le contenu suivant :

![Image](/img_fr/img_UIC_Guide_Installation/image003.png#bordered) 

Avant de lancer la procédure d’installation, il est nécessaire d’effectuer quelques opérations  de pré-installation. 
Par exemple, si vous souhaitez créer un miroir du dépôt de Prologue, comme indiqué dans la section Mise en place du Serveur de dépôt UIC, nous vous conseillons de le faire avant de renseigner le fichier uic.cfg comme indiqué ci-dessous et avant de lancer cette installation.
- Editez le fichier **uic.cfg**
- Introduisez les variables suivantes:
```js
UIC_REPOSITORY_ACCESSKEY = votre clé d’accès au dépôt UIC
UIC_REPOSITORY_SECRETKEY = votre clé secrète d’accès au dépôt UIC
```
 Ces variables représentent les clefs d’accès au dépôt des paquets UIC

- Renseignez les champs suivants :
```js
UIC_REPOSITORY_HOST = URL du dépôt Use IT Cloud. 
```
Par défaut, cette variable est positionnée sur le dépôt Prologue, à savoir ```https://s3.eu-west-3.amazonaws.com/uicpackages/agent```. 
Si vous avez créé votre propre dépôt, veuillez insérer la valeur correspondante.
```js
MYSQL_ADMIN_PASSWD = mot_de_passe_mysql_root
MYSQL_UICB_ADMIN_PASSWD = mot_de_passe_mysql_utilisateur_UIC
```
- Lancez le script avec les droits root :
```bash
sudo su 
bash ./install_useitcloud
```
Pendant le déroulement de l’installation, plusieurs questions vous seront posées, répondez-y afin de poursuivre l’installation.

Une fois que l’outil d’installation de la plateforme *UIC* vous rend la main, vous pouvez compléter sa configuration, décrite dans la section suivante. 

### Configuration 
La finalisation de la configuration de votre plateforme s’effectue à partir d’un navigateur internet, tapez simplement l’adresse ```*https://@UIC/*``` , (**@UIC** désigne l’adresse IP ou le nom de la machine qui héberge **UIC**) Use IT Cloud affiche l’écran suivant :

![Image](/img_fr/img_UIC_Guide_Installation/image004.png#bordered)

La configuration de **UIC** se déroule en plusieurs étapes, la configuration, la validation des prérequis, des permissions (Description dans les paragraphes suivants).
- Cliquez sur le bouton **Vérifier les prérequis**, afin de poursuivre l’étape de configuration, 

#### Vérification des prérequis
A ce stade, les prérequis concernent la partie Dashboard qui dépend principalement de composants PHP et du serveur Apache. La partie PHP a besoin des modules Openssl, Pdo, Mbstring, Tokenizer, Json et Curl. Le serveur Apache a besoin du module rewrite « Mod_rewrite » pour la réécriture des URL.
Les prérequis doivent tous être satisfaits, si vous avez utilisé la procédure d’installation, toutes les lignes doivent comporter un signet vert.

![Image](/img_fr/img_UIC_Guide_Installation/image005.png#bordered)

- Cliquez sur le bouton **Vérifier les autorisations**

#### Vérification des autorisations
![Image](/img_fr/img_UIC_Guide_Installation/image006.png#bordered)

Les répertoires de l’application **UIC** listés ci-dessous doivent être accessibles en écriture par le serveur Web :
- Storage/framework/
- Storage/logs/
- Storage/app/
- Boostrap/cache/
- Cliquez sur le bouton **Configurer l’environnement** 

#### Paramètre de l'environnement

##### Environnement UIC
![Image](/img_fr/img_UIC_Guide_Installation/image007.png#bordered)

- **Environnement de l'application** : Sélectionnez le mode production ou le mode local.
- **Mode Débogue** : Cochez Oui ou Non pour activer le mode de débogage ou non sur la plateforme. 
- **URL de l'application** : Indiquez l’URL d'accès à l'interface de UIC, sous format ```*https://@IP* ou *https://mondomaine*```
- **Nom de domaine** : Indiquez le domaine racine utilisé pour les redirections vers les autres services qui doivent garder la session ouverte sans authentification (champ optionnel). Ces services doivent également être dans le même domaine comme (Zabbix, interface VCD). 
- **IP de la plateforme visible depuis les Clouds publics**: Indiquez l’adresse IP publique mise dans la configuration des firewalls des machines virtuelles déployées avec l’agent UIC (champ optionnel).
- **Proxy** : Indiquez l’URL du proxy au format ```https://user:password@host:port``` champ optionnel).
- Cliquez sur le bouton **Configuration Mail**

##### Configuration Mail
![Image](/img_fr/img_UIC_Guide_Installation/image008.png#bordered)

- **Hôte du mail** : Indiquez l’adresse du serveur à utiliser pour la configuration SMTP pour l’envoi des mails,
- **Port** : Indiquez le port de connexion au serveur SMTP
- **Nom d’utilisateur** : Indiquez le nom d’utilisateur pour la configuration SMTP
- **Mot de passe** : Indiquez le mot de passe de l’utilisateur pour la configuration SMTP
- **Chiffrement** : Sélectionnez la connexion chiffrée (tls) ou non chiffrée, 
- **Mail de l’expéditeur** : Indiquez l’adresse mail de la boite aux lettres expéditrice de la plateforme UIC (nominative ou non)
- **Nom de l’expéditeur** : Indiquez le nom de l’expéditeur des mails qui doit apparaitre, 
- **Mail de notification** : Indiquez l’adresse mail où les notifications seront envoyées,
- Cliquez sur le bouton **Configuration de l’application** 

##### Configuration de l’application

![Image](/img_fr/img_UIC_Guide_Installation/image009.png#bordered)

- **Nom de l'application** : Indiquez le nom de l’application qui sera affiché dans les notifications (mail de notification des backups).
- **Sauvegarde** : Cochez Oui pour activer la sauvegarde, par défaut elle est désactivée.
- **Clé publique Recaptcha** : Remplissez la clé publique pour le site **UIC**,
- **Clé privée Recaptcha** : Remplissez la clé secrète qui permet d'effectuer un lien sécurisé entre **UIC** et Google
Pour la création des comptes, il faut remplir les champs ci-dessus afin d’intégrer sur la plateforme **UIC** le captcha de Google. La génération des clés s’effectue depuis le lien suivant : 
```bash
https://www.google.com/recaptcha/intro/index.html
```
- Cliquez sur le bouton Configuration de l’opérateur, 

##### Configuration des licences
L’utilisation de UIC est soumise à Licence. vous devez demandez une licence auprès de l’équipe Use IT Cloud avant de pouvoir mettre en œuvre la plateforme UIC. Cette demande s’effectue à l’aide de la fenêtre suivante : 

![Image](/img_fr/img_UIC_Guide_Installation/image010.png#bordered)

Cliquez sur le bouton **Accepter les conditions et demander une licence**. La demande sera envoyée par mail à la plateforme de gestion des licences. Cette demande sera analysée et en cas d’acceptation, votre licence vous sera envoyée par mail, sous forme de fichier, dans un corps de mail similaire à la fenêtre suivante : 
 
![Image](/img_fr/img_UIC_Guide_Installation/image011.png#bordered)

Copiez le fichier uic_license.txt dans un emplacement et protégez-le. Le mail vous indique la date d’expiration de la licence ainsi que le nombre maximum d’utilisateurs sur la plateforme. 
Pour activer la license vous devez revenir sur votre session de configuration de UIC ou bien appuyer sur le bouton **Enable the License** affiché dans la fenêtre ci-dessus. La boîte de dialogue suivante vous demandera d’inclure le fichier à l’aide du bouton **Parcourir…** :      

![Image](/img_fr/img_UIC_Guide_Installation/image012.png#bordered)
 
Sélectionnez le fichier de licence reçu puis appuyez sur le bouton **Activer la licence** pour continuer la configuration.

#### Création du compte Opérateur

![Image](/img_fr/img_UIC_Guide_Installation/image013.png#bordered)

A partir de cette page, vous allez créer le compte opérateur avec les informations du Compte. 
- **Nom de compte (identifiant)** : Indiquez le nom du compte avec lequel l’utilisateur devra s’authentifier (sans espace),
- **Nom d’utilisateur** : Indiquez le nom de l’utilisateur du compte (opérateur qui administre la plateforme),
- **Email** : Indiquez l’adresse de messagerie de l’opérateur,
- **Mot de passe** : Indiquez le mot de passe de l’opérateur,
- **Confirmer le mot de passe** : Indiquez celui-ci une 2ème fois.

Toutes les informations de l’assistant de configuration sont bien remplies, la fenêtre **Installation est terminée** s’affiche. Dans le cas contraire, les erreurs auront été notifiées dans les champs erronés.

![Image](/img_fr/img_UIC_Guide_Installation/image014.png#bordered)

Vous serez ensuite invité à vous connecter à la plateforme installée.

### Mise en place du Serveur de dépôt UIC
Prologue a mis en place un dépôt contenant les fichiers nécessaires à l’installation de certains composants optionnels comme l’agent UIC ou l’agent Zabbix. Ce dépôt peut être répliqué sur un autre dépôt de votre choix, en suivant les étapes suivantes :
- Télécharger le tarball uicextraresources.tar.gz via l’URL suivante :
```bash
sudo su
wget https://s3.eu-west-3.amazonaws.com/uicpackages/extra/uicextraresources.tar.gz
```
- Extraire sur votre serveur le contenu de cette archive, par exemple à l’aide de la commande suivante : 
```bash
sudo tar -xvf uicextraresources.tar.gz
```
- Rendez le dossier accessible par le protocole HTTP(s) et renseignez la variable indiquée dans le fichier de configuration uic.cfg
```js
UIC_REPOSITORY_HOST=URL du dépôt Use IT Cloud
```
- Renseignez les autres variables du fichier uic.cfg puis lancez le programme d’installation de UIC comme indiqué dans le chapitre Installation.

### Installation du serveur Zabbix 3.2
L’installation du serveur Zabbix  suit les étapes suivantes :
- Téléchargez le script d’installation via le lien suivant :
```bash
wget https://s3.eu-west-3.amazonaws.com/uicpackages/extra/zabbix_install.sh 
```
- Éditez le fichier zabbix_install.sh et remplacer les variables
```js
dbPassword = "root"  mot de passe root de la base de données
passPhrase = "prologue" mot de passe pour les certificats
```
- Exécutez ce script avec les droits root
```bash
bash ./zabbix_install.sh
```

L’emplacement des certificats se trouvent dans : 
```bash
/etc/zabbix/zabbix_server_certs/zabbix_ca.crt
/etc/zabbix/zabbix_server_certs/zabbix_server.crt
/etc/zabbix/zabbix_server_certs/zabbix_server.key
```
Ces certificats seront utilisés dans la configuration du serveur de monitoring Zabbix décrite dans la documentation utilisateur & Administrateur.

## Mise à jour de la plateforme UIC
Au début du processus de mise à jour de UIC, la plateforme se met automatiquement en mode maintenance et les services en tâche de fond sont arrêtés. Par conséquent toute requête émise vers UIC au cours de cette phase aboutira à un échec.
Les étapes ci-dessous décrivent la procédure de mise à jour de la plateforme UIC
- Connectez-vous au serveur qui héberge le portail UIC 
- Exécutez la commande suivante :
```bash
sudo su 
```
- Téléchargez le script de mise à jour à l’aide de la commande suivante : 
```bash
wget https://s3.eu-west-3.amazonaws.com/uicpackages/update/update_uic_lc.sh 
```
- Editez le fichier update_uic_lc.sh 
- Renseignez les variables suivantes, elles représentent les clefs d’accès au dépôt des paquets UIC :
```js
UIC_REPOSITORY_ACCESSKEY = votre clé d’accès au dépôt UIC
UIC_REPOSITORY_SECRETKEY = votre clé secrète d’accès au dépôt UIC
```
- Exécutez le script de mise à jour, à savoir update_uic_lc.sh, avec la commande suivante :
```bash
bash ./update_uic_lc.sh
```

Pendant le déroulement de l’installation, plusieurs questions vous seront posées, répondez par **Oui** ou **Yes** afin de poursuivre l’installation.

Une fois que la mise à jour est terminée, les services sont démarrés, la plateforme quitte le mode maintenance et elle se remet automatiquement en mode production. 

