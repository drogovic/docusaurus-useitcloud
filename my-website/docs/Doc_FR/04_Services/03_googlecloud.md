---
id: 40003
title: Google Cloud
description: UseITcloud documentation 3.2.0
sidebar_position: 3
---

## **Les commandes communes aux pages de l’IHM**
Les pages et formulaires affichés par *UIC* présentent certaines commandes dont la signification est la même quelle que soit la page qui les présente. Par conséquent, ces commandes seront décrites dans ce chapitre et cette description est applicable à toutes les ressources et tous les formulaires gérés par *UIC* et présentés dans ce document.

Voici la liste et la description de ces commandes:

![Image](/img_fr/img_UIC_Services/img_google/image002.png)

- La commande **Afficher X éléments**: Cette commande s’applique aux tableaux affichés par *UIC*. Elle permet de limiter le nombre d’éléments visualisés par page. 
- La commande **Rechercher**: Cette commande s’applique aux tableaux affichés par UIC. Elle permet de rechercher et présenter les éléments contenant la chaîne de caractères spécifiée dans le champ de recherche. 
- La commande **Change columns**: Cette commande s’applique aux tableaux affichés par UIC. Elle permet à l’utilisateur de sélectionner les colonnes qu’il souhaite visualiser. 
- La commande **CSV**: Cette commande s’applique aux tableaux affichés par UIC. Elle permet à l’utilisateur d’exporter le tableau affiché dans un fichier au format CSV. 
- Le bouton d’actualisation  ![Image](/img_fr/img_UIC_Services/img_google/image003.png): Ce bouton permet de forcer l’actualisation des données affichées.


## **Identifiants Cloud Google Cloud**
Pour configurer un identifiant Cloud de connexion *UIC* à une infrastructure du cloud public *Google Cloud*, vous avez besoin des paramètres *Google Cloud* suivants:

- Le fichier contenant les identifiants d’accès à GCP,
- Les régions à activer,
- La région par défaut,

Vous avez également besoin des paramètres suivants liés à l’emplacement réseau de la plateforme UIC: 

- Les paramètres du proxy si vous en utilisez un,

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l’étape de configuration de ces paramètres dans UIC, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l’environnement GCP, vous pouvez obtenir le fichier contenant les paramètres de compte et de projet en vous connectant sur le portail de gestion GCP, par exemple à l’adresse <https://console.cloud.google.com/> en tant qu’administrateur de votre abonnement.

Si vous n’êtes pas familier avec l’environnement GCP, vous pouvez consulter les paragraphes suivants pour découvrir comment créer un nouveau projet et télécharger le fichier de paramètres nécessaire à la configuration de l’identifiant UIC.

### ***Créer un Projet***
Pour créer un nouveau projet sur le Cloud GCP connectez-vous sur un compte *GCP,* en utilisant le portail <https://console.cloud.google.com>.  

- Authentifiez-vous puis sélectionnez le menu de navigation **IAM et administration -> Gérer les ressources**,

![Image](/img_fr/img_UIC_Services/img_google/image004.png)

La page suivante apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image005.png)


- Cliquez sur le bouton **+ Créer un Projet**, la page suivante apparaît: 

![Image](/img_fr/img_UIC_Services/img_google/image006.png)

- Entrez le Nom du projet, 
- Cliquez sur le bouton **Créer**, le projet est créé et son nom apparaît dans le bandeau bleu du portail, comme indiqué ci-dessous.

![Image](/img_fr/img_UIC_Services/img_google/image007.png)

- Utilisez le menu déroulant (My Project 2692 ) pour sélectionner le nouveau projet 
- Sélectionnez le menu de navigation **API et Services -> Identifiants**, la page des identifiants apparaît: 

![Image](/img_fr/img_UIC_Services/img_google/image008.png)

- Cliquez sur le bouton **Créer des identifiants**,
- Cliquez sur **Créer des identifiants -> Clé de compte de service** :

La page suivante apparaît: 

![Image](/img_fr/img_UIC_Services/img_google/image009.png)

- Saisissez Nom du compte de service puis cliquez sur **créer**

![Image](/img_fr/img_UIC_Services/img_google/image010.png)

- Sélectionnez le menu déroulant **Rôle -> Project -> Lecteur**, puis cliquez sur **continuer**:

L’étape 3 Autoriser les utilisateurs à accéder à ce compte de service étant facultatif

![Image](/img_fr/img_UIC_Services/img_google/image011.png)

- Cliquez sur OK pour créer le compte de service, la page des identifiants apparaît: 

![Image](/img_fr/img_UIC_Services/img_google/image012.png)

- Cliquez sur le compte de service créer pour voir les détails du compte:

![Image](/img_fr/img_UIC_Services/img_google/image013.png)

- Cliquez sur le bouton **Ajouter une clé à Créer une clé** 
- Choisir JSON come Type de clé.

![Image](/img_fr/img_UIC_Services/img_google/image014.png)

La console GCP vous affiche la boite de dialoguesuivante :

![Image](/img_fr/img_UIC_Services/img_google/image015.png)

Voici un exemple de contenu du fichier ‘uic-prod-8dc4eabf97b2.json’’:
```json
{

"type": "service_account",
"project_id": "trusty-splice-237112",
"private_key_id": "1af328dffb5f1d9acbc2c5e3ff03e73aec60f0e1",
"private_key": "-----BEGIN PRIVATE KEY-----…………………………………-----END PRIVATE KEY-----",
"client_email": "uiccompteservice@trusty-splice-237112.iam.gserviceaccount.com",
"client_id": "104335546672827650901",
"auth_uri": "https://accounts.google.com/o/oauth2/auth",
"token_uri": "https://oauth2.googleapis.com/token",
"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/uiccompteservice%40trusty-splice-237112.iam.gserviceaccount.com"
}
```

Pour lister les API créées, sélectionnez le menu de navigation **Tableau de Bord -> API**, l’écran suivant apparaît: 

![Image](/img_fr/img_UIC_Services/img_google/image016.png)

- Cliquez sur **+ Activer des API et des Services**, la page ci-dessous s’affiche: 

![Image](/img_fr/img_UIC_Services/img_google/image017.png)

- Choisissez le service **Compute Engine API**, la bibliothèque d’API apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image018.png)

- Cliquez sur le bouton **Activer,** le service Compute Engine API est activé.

### ***Configurer l’exportation des données de facturation vers BigQuery***

Un compte de facturation Cloud sert à déterminer qui assume les frais pour un ensemble de ressources donné. Il peut être associé à un ou plusieurs projets. Les frais d'utilisation du projet sont imputés au compte de facturation Cloud associé.

Si vous êtes l'administrateur de facturation d'un seul compte de facturation Cloud, les nouveaux projets que vous créez sont automatiquement associés à ce compte de facturation Cloud. Si vous créez un compte de facturation Cloud ou si vous avez accès à plusieurs comptes, vous pouvez modifier le compte sur lequel un projet est facturé 

Exporter des données Cloud Billing vers BigQuery

Créer un projet dans lequel les données Cloud Billing seront stockées, et activer la facturation sur le projet (si ce n'est pas déjà fait)

Pour afficher le compte de facturation Cloud associé à un projet, procédez comme suit:

- 1. Connectez-vous à Google CloudConsole.
- 2. Sélectionnez votre projet dans la liste déroulante située en haut de la page Google CloudConsole.

![Image](/img_fr/img_UIC_Services/img_google/image019.png)

- 3. Ouvrez le **menu de navigation** ![Image](/img_fr/img_UIC_Services/img_google/image020.png)  de la console, puis sélectionnez **Facturation**.

![Image](/img_fr/img_UIC_Services/img_google/image021.png)

Copiez l'ID du compte de facturation. Cela ressemblera à quelque chose comme 009B77-XXXXAE-XXXX8A

**Si la facturation n'est PAS activée**, procédez comme suit:

- Si la facturation n'est pas activée sur le projet, une fenêtre pop-up s'affiche avec un texte indiquant:

*"Ce projet n'est pas associé à un compte de facturation"*

- Pouractiver la facturation sur le projet, sélectionnez **Associer un compte de facturation**.
- Pour afficher la liste des comptes de facturation de votre organisation, sélectionnez **Gérer les comptes de facturation**.

### ***Configurer les autorisations sur le projet et sur le compte de facturation Cloud***
Pour activer et configurer l'exportation des données Google CloudBilling vers un ensemble de données BigQuery, vous devez disposer des autorisations suivantes:

- Le rôle **Administrateur de compte de facturation** pour le compte de facturation Cloud cible
- Le rôle **Utilisateur de BigQuery** pour le projet Cloudqui contient l'ensemble de données BigQuery qui sera utilisé pour stocker les données CloudBilling

En outre, pour activer et configurer l'exportation des données tarifaires de CloudBilling, vous devez disposer des autorisations suivantes:

- **Administrateur BigQuery** pour le projet Cloudcontenant l'ensemble de données BigQuery qui sera utilisé pour stocker les données de facturation de CloudBilling
- Autorisationresourcemanager.projects.updatepour le projet sur le cloud contenant l'ensemble de données cible. Ces autorisations sont incluses dans le rôleroles/editor.

Activer l'API du service de transfert de données BigQuery (obligatoire pour exporter vos données de tarification)

#### Créer un ensemble de données BigQuery dans lequel stocker les données.
Créer un ensemble de données pour héberger les données de facturation

- Assurez-vous que vous êtes dans le projet que vous avez créé à l'étape 1
- Ouvrez le **menu de navigation** ![Image](/img_fr/img_UIC_Services/img_google/image020.png)  de la console, puis sélectionnez **Big Data -> BigQuery**
- Cliquez sur le nom de votre projet dans le menu de gauche
- Cliquez sur+ **CREATE DATA SET**
  ![Image](/img_fr/img_UIC_Services/img_google/image022.png)
- Utilisez les paramètres suivants:
  - **Data set ID**: gcp_billing_export
  - **Data location**: sélectionner un emplacement.
  - **Default table expiry**: jamais
- Cliquez sur **Create data set**

Étape 3: activer l'exportation de la facturation vers BigQuery

Voici les étapes pour exporter vos données de facturation vers BigQuery (vous aurez besoin de privilèges d'administrateur de facturation):

- Accédez à la **facturation**
- Sélectionnez le compte de facturation pour lequel vous souhaitez exporter les données
- Cliquez sur **Exportation de la facturation**
- Cliquez sur **MODIFIER LES PARAMÈTRES**
- Utilisez les paramètres suivants:
  - **Projets**: sélectionnez le projet que vous avez créé à l'étape 1
  - **Ensemble de données d'exportation de la facturation**: sélectionnez l'ensemble de données que vous avez créé à l'étape 2. À ce stade, vos paramètres doivent ressembler à:
    ![Image](/img_fr/img_UIC_Services/img_google/image023.png)
- Cliquez sur **Enregistrer** 

Vous avez maintenant correctement associé les données de votre compte de facturation à BigQuery.

Ne vous inquiétez pas si vous ne voyez pas encore de données, car il faudra quelques heures pour que les données commencent à se remplir.

![Image](/img_fr/img_UIC_Services/img_google/image024.png)

Ne vous inquiétez pas si vous ne voyez pas encore de données, car il faudra quelques heures pour que les données commencent à se remplir.

Activer l'exportation Cloud Billing des données de coût et des données de tarification à écrire dans l'ensemble de données

### ***Configurer un identifiant Cloud Google dans UIC***
Depuis Google Cloud Platform, vous avez récupéré le fichier JSON, il faut donc créer l’identifiant Cloud Google (credential) sur la plateforme *UIC*. Connectez-vous sur UIC, sélectionnez le menu **Compte:Utilisateur -> Identifiants Cloud -> Google Cloud Platform**, vous accédez à l’ensemble des paramètres.

![Image](/img_fr/img_UIC_Services/img_google/image025.png)

- Cliquez sur le bouton Ajouter un identifiant, le formulaire suivant apparaît: 

![Image](/img_fr/img_UIC_Services/img_google/image026.png)

- **Nom de l’identifiant**: Indiquez le nom de l’identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu’à 20 caractères, lettres sans accent, chiffres, tirets).
- **Identifiant**: A l’aide du bouton **Parcourir…**, attachez le fichier JSON téléchargé depuis Google Cloud Platform (Ex: My Project 2692-1af328dffb5f.json)
- **Régions à activer:** Sélectionnez les régions à activer pour cet identifiant,
- **Région par défaut:** Sélectionnez une région à l’aide du menu déroulant,
- **Proxy**: indiquez l’URL du proxy (facultatif)au format suivant: ```https://user:password@host:port```
- Cliquez sur le bouton **Ajouter**, l’identifiant est créé.

#### **Accorder des autorisations BigQuery à un compte de service** 
Lorsqu'une identité appelle une API Google Cloud, BigQuery exige qu'elle dispose des autorisations appropriées pour accéder à la ressource. Vous pouvez accorder des autorisations en attribuant des rôles à un utilisateur, à un groupe ou à un compte de service.

#### Accès en lecture aux données d'un projet
Dans l’exemple suivant nous allons accorder l’accès à un projet nommé **uic-prod** qui dispose d’un compte de service **uicprod-service-account@uic-prod.iam.gserviceaccount.com**

- Ouvrez lemenu de navigation ![Image](/img_fr/img_UIC_Services/img_google/image020.png)  de la console, puis sélectionnez **API et services à Identifiant**
- Copier E-mail du compte de service.

![Image](/img_fr/img_UIC_Services/img_google/image027.png)


**Attribuez le rôle prédéfini lecture de données BigQuery à un membre d’un projet** 

- Ouvrez leprojet avec lequel l’exportation de la facturation a été réalisée
- Ouvrez le menu de navigation ![Image](/img_fr/img_UIC_Services/img_google/image020.png)  de la console, puis sélectionnez **IAM et admin à IAM**
- Cliquez sur **AJOUTER**


![Image](/img_fr/img_UIC_Services/img_google/image028.png)

Le volet suivant apparait

![Image](/img_fr/img_UIC_Services/img_google/image029.png)

- **Nouveaux membres:** coller le mail du compte de service du projet **uic-prod**
- **Rôle:** choisir BigQuery à Lecture de données BigQuery
- Cliquez sur **Enregistrer**

#### **Conséquence sur la table des identifiants Google Cloud**
L’identifiant créé apparaîtra comme une entrée parmi les identifiants *Google Cloud*. Vous pourrez modifier ses attributs en le sélectionnant depuis cette page.

![Image](/img_fr/img_UIC_Services/img_google/image030.png) 

La table des identifiants vous permet d’exécuter sur chacun d’entre eux les commandes du menu **Actions**. Ces actions sont intitulées **Configuration**, **Configurer le proxy**, **Modifier les identifiants** et **Supprimer**. Elles sont toutes décrites dans les sous-chapitres suivants.

##### Modifier la configuration
- Sélectionnez la commande ***Configuration*** du menu **Actions**, la boite de dialogue **Configuration de l’identifiant GOOGLE CLOUD** apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image031.png)

- Sélectionnez le menu **Région par défaut,** si vous souhaitez modifier la région par défaut puis cliquez sur le bouton **Mettre à jour**.
- Saisissez le délai d’attente souhaité pour le Cloud *Google Cloud*, cliquez sur le(s) bouton(s) **Mettre à jour**. 
- Actionnez le bouton **Fermer**.

**Remarque:**

Pour chaque déploiement, *UIC* commande le provisionnement des VM auprès du cloud cible et attend une réponse de celui-ci, indiquant le résultat du déploiement (succès ou échec). Le temps de ce provisionnement dépend principalement de la charge et des performances du Cloud cible, de l’image OS et logiciels à installer sur la VM et des conditions réseau entre la plateforme *UIC* et ce Cloud. Le délai d’attente, à configurer pour ce paramètre, correspond au temps maximum au-delà duquel une absence d’indication de fin de déploiement peut être considérée par *UIC* comme un échec de déploiement. 

Compte-tenu du fait que ce délai est variable d’une infrastructure à une autre, *UIC* vous offre la possibilité d’indiquer la valeur la plus convenable pour votre environnement. 

##### Modifier la Configuration du proxy
- Sélectionnez la commande ***Configuration du proxy*** du menu **Actions**, la boite de dialogue suivante apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image032.png)

- Saisissez l’URL du proxy, au format précisé dans la boite de dialogue,
- Cliquez sur le bouton **Sauvegarder**,

##### Modifier un identifiant
- Sélectionnez la commande ***Modifier les identifiants*** du menu **Actions**, la boite de dialogue suivante apparaît: 

![Image](/img_fr/img_UIC_Services/img_google/image033.png)

- Apportez les modifications souhaitées,
- Cliquez sur le bouton **Sauvegarder**,

##### Supprimer un identifiant
- Sélectionnez la commande ***Supprimer*** du menu **Actions**, la boite de dialogue suivante apparaît: 

![Image](/img_fr/img_UIC_Services/img_google/image034.png)

- Cliquez sur le bouton **Supprimer l’identifiant Cloud**,

#### **Conséquence sur le menu Clouds**
Après l’ajout d’un identifiant Cloud *Google Cloud*, *UIC* crée un item portant le nom de l’identifiant dans le menu **Clouds -> Google Cloud**, il porte le nom attribué à la création**.** Il vous permet d’accéder et de piloter les ressources *Google Cloud* qui sont sous son contrôle.

![Image](/img_fr/img_UIC_Services/img_google/image035.png)

#### **Conséquence sur la page de la préparation d’un déploiement**
Après l’ajout d’un identifiant Cloud *Google Cloud*, le nom de cet identifiant sera rajouté dans la liste des valeurs du champ **Tenant** de la page de préparation du déploiement.

![Image](/img_fr/img_UIC_Services/img_google/image036.png)

#### **Conséquence sur la gestion des rôles *UIC***
Lorsque vous ajoutez un identifiant Cloud *Google Cloud* à un compte, pensez à configurer les permissions appropriées aux utilisateurs de ce compte. Voici le tableau des ressources *Google Cloud* et des permissions configurables dans *UIC*:


|**Type de ressource**|**Liste des actions applicables**|
| - | - |
|Instances |Lister,Déployer, Gérer l’état (stopper, démarrer), Supprimer|
|Pare-feux |Lister,Créer, Modifier, Supprimer|
|Volumes|Lister,Créer, Attacher, détacher, modifier, Supprimer|
|Instantanés|Lister,Créer, Supprimer|
|Réseaux|Lister,Créer, Modifier, Supprimer|
|IP |Lister,Créer, Associer, dissocier, Modifier, Supprimer|
|Quotas|Lister|
|Consommation et facturation|Lister|
|Budgets|Lister, Gérer|

Vous pouvez utiliser les rôles prédéfinis par *UIC*, ou bien créer de nouveaux rôles et les configurer à votre convenance. En fonction de votre environnement de production vous pourrez attribuer des rôles à des groupes ou à des utilisateurs.

Les détails sur la gestion des utilisateurs, des groupes et des rôles sont fournis dans le document intitulé **UiC_Guide_UserAdmin_FR** (transmis avec la plateforme).

## **Déploiements**
Le déploiement des applications UIC dans un Cloud public *Google Cloud* nécessite les prérequis obligatoires suivants: 

- Un identifiant Cloud, se référer au chapitre **Erreur! Source du renvoi introuvable.**
- Des images de VMs référencées dans la base de données locale de UIC. 

Toutes les étapes à suivre pour le déploiement d’une application sont illustrées dans les prochaines sections en prenant l’exemple du déploiement d’une application Linux nécessitant une seule VM. Lorsqu’une étape n’est pas identique pour Linux et pour Windows, les spécificités du système Windows sont indiquées. 

Le processus de déploiement d’une application est composé de trois grandes étapes:

- Une étape de configuration (appelée pré-déploiement). Cette étape permet de configurer l’environnement de déploiement,
- Une étape de lancement du déploiement. Cette étape débute à l’instant où le déploiement dans le Cloud est déclenché. Elle se termine au moment où le résultat du lancement de l’opération est affiché,
- Une étape de gestion du déploiement (appelée post-instanciation). Cette étape prend le relais à la fin de la phase précédente et se termine au moment de la suppression définitive d’une instance de la base de données des déploiements gérés par *UIC*.

### ***Configuration d’un déploiement***
Le déploiement des applications et des VM s’effectue à l’aide du menu **Déployer -> Catalogue -> Application -> Déployer.** L’action **Déployer** permet de configurer l’environnement du déploiement avant de le déclencher réellement. 

- Sélectionnez l’application à déployer, actionnez le bouton **Déployer** correspondant à l’application, vous obtenez l’écran de préparation de déploiement illustré sur l’écran suivant:

![Image](/img_fr/img_UIC_Services/img_google/image037.png)

- Saisissez dans la zone **Etiquette** le nom du déploiement afin de l’identifier,
- Sélectionnez le fournisseur depuis le menu déroulant **Fournisseur** ainsi que le nom de l’identifiant cloud à partir du menu déroulant **Tenant** (s’il y en a plusieurs), 
- Validez votre choix à l’aide du bouton **Confirmer**, vous obtiendrez l’écran de configuration des paramètres généraux et des paramètres spécifiques à *Google Cloud*. Le détail de configuration de chacun des onglets est décrit dans les prochaines sections. 

#### **Configuration du réseau**
L’onglet **Réseau** vous permet de préciser tous les paramètres de configuration réseau nécessaires pour le déploiement sur votre infrastructure *Google Cloud*. Ces paramètres sont illustrés sur la figure suivante:

![Image](/img_fr/img_UIC_Services/img_google/image038.png)

- **Réseau** : Indique le nom du réseau où la machine virtuelle sera déployée. Une liste peut être présente, elle montre tous les réseaux configurés. 
- **Adresse IP Publique:** Indique si la VM possède une adresse IP publique ou non, et si oui, la méthode d’attribution de cette adresse (IP dynamique ou IP statique allouée automatiquement),
- **Balise cible**: Ce menu déroulant propose de créer ou de sélectionner une balise cible.

Si vous sélectionnez une balise cible existante, le bouton affiché à droite du menu vous permet de consulter la liste des règles définies par ce groupe, comme illustré dans l’exemple suivant:

![Image](/img_fr/img_UIC_Services/img_google/image039.png)

La case à cocher **Accès direct à l’instance**: Cochez cette case si l'instance de la machine virtuelle est dans le même réseau que la plateforme UIC. La communication entre la plateforme et l’instance se fera en utilisant l’adresse privée de l’instance.

#### **Serveur**
L’onglet **Serveur** vous permet de préciser tous les paramètres nécessaires pour le déploiement sur votre infrastructure *Google Cloud*, comme illustré sur l’écran suivant:

![Image](/img_fr/img_UIC_Services/img_google/image040.png)

**OS:**  Indique le système d’exploitation de base de l’application,

**Image:** Indique l’image qui a été référencée sur ce système d’exploitation,

Le menu déroulant **Gabarit** propose des gabarits de machines prédéfinis chez *Google Cloud*.

**Paire de clés:** Indique la paire de clé associée à cette VM. Vous pouvez choisir entre les différentes options proposées par UIC, comme illustré dans l’exemple suivant:

![Image](/img_fr/img_UIC_Services/img_google/image041.png)

Vous pouvez utiliser une paire de clés existante générique, ou bien laisser UIC créer une nouvelle paire de clés. Vous pouvez également déployer cette VM sans aucune paire de clés.

Dans *UIC,* la gestion des paires de clés étant Cloud agnostic, les détails de cette gestion sont  décrites dans le document global intitulé **UiC_Guide_UserAdmin_FR.** 

#### **Personnalisation d’une instance**
L’onglet **Personnalisation** permet de spécifier des paramètres non IaaS d’une instance. Quel que soit le type de machine virtuelle (Linux ou Windows). 

Il s’agit d’attribuer un nom à l’instance pour l’identifier facilement sur le Cloud cible, d’installer ou non l’agent UIC (option), d’inclure des scripts exécutables après le démarrage de l’instance et d’ajouter des tags spécifiques à l’instance.

![Image](/img_fr/img_UIC_Services/img_google/image042.png)

D’autres paramètres sont spécifiques aux machines virtuelles de type Windows, leur description est décrite dans la section dédiée à la personnalisation spécifique à Windows. 

##### Configuration commune à tous les OS
La personnalisation des instances de VM se fait à l’aide de l’écran suivant:

![Image](/img_fr/img_UIC_Services/img_google/image043.png)

Comme précisé dans le formulaire, la personnalisation de l’instance concerne les paramètres suivants:

- **Nom de l’instance**: Indiquez le nom qui identifiera l’instance sur le Cloud cible,
- **Installer l’agent UIC**: Cochez cette case si vous souhaitez installer par défaut l’agent UIC sur l’instance,
- **Script prédéfini**: Lorsque vous déployez une application depuis un template et si vous avez prédéfini un script associé à ce template, *UIC* le sélectionne automatiquement. Mais vous pouvez en sélectionner un autre si vous le souhaitez.
- **Script additionnel**: Ajoutez-la ou les ligne(s) de code du script si vous souhaitez l’exécuter automatiquement dans cette instance,
- **Variables d’environnement**: Si des variables d’environnement ont été définis dans le template d’application, elles apparaissent à la suite du champ *Script additionnel*. Dans l’exemple d’illustration choisi ici, des variables d’environnement ont été associées au template d’application, elles sont nommées DB_NAME, DB_USER et DB_USER_PASSWORD. Indiquez leurs valeurs dans les champs de saisie correspondants.
- **Tags**: Ajoutez les tags que vous souhaitez attacher à cette instance.

#### **Gestion de configuration**
La plateforme *UIC* peut mettre en œuvre la gestion de configuration des machines virtuelles en proposant les outils Ansible, Chef et *Puppet*. 

![Image](/img_fr/img_UIC_Services/img_google/image044.png)

Cette mise en œuvre est commune à tous les Clouds, elle n’est donc pas spécifique à *Google Cloud*. Elle est documentée en détail dans le guide intitulé **UiC_Guide_UserAdmin_FR**.

#### **Surveillance**
La plateforme UIC peut mettre en œuvre la surveillance des machines virtuelles en proposant des services de monitoring Centreon et Zabbix. 

![Image](/img_fr/img_UIC_Services/img_google/image045.png)

Une fois que vous avez fini la configuration, vous pouvez lancer votre déploiement en cliquant sur le bouton **Déployer** (en haut à droite de l’écran), le processus de déploiement s’enclenchera.

**Remarque: Cette mise en œuvre est commune à tous les Clouds, elle n’est donc pas spécifique à *Google Cloud*. Elle est cependant documentée en détail dans le guide intitulé UiC_Guide_UserAdmin_FR.**

### ***Opération de déploiement***
Lorsque le déploiement est lancé, la plateforme *UIC* affiche l’écran de progression du déploiement :

![Image](/img_fr/img_UIC_Services/img_google/image046.png)

La durée nécessaire au déploiement dépend de l’environnement de déploiement (puissance et capacité de votre infrastructure) mais également des caractéristiques de la VM à déployer (son gabarit, son système d’exploitation de base et de l’ensemble des logiciels additionnels, du temps nécessaire à l’installation de l’agent si vous l’avez activé pour la VM).

Une fois que l’opération de déploiement est terminée avec succès, *UIC* passe à l’étape de post-instanciation qui permet de gérer la VM active. 

### ***Post-Instanciation***
Une fois que le déploiement est terminé avec succès, l’écran **Déploiement** indiquera le statut Déployé dans la colonne **Etat** :

![Image](/img_fr/img_UIC_Services/img_google/image047.png)

UIC affiche l’identifiant unique pour ce déploiement dans la colonne **Identifiant.** Sa valeur est un champ actif qui vous permet d’accéder aux détails de l’instance déployée. 

Les autres colonnes ont des labels auto-explicatifs du contenu de la colonne. La connexion à l’instance s’effectue depuis la colonne **Actions**, une des deux actionsest proposée : 

- **SSH** dans le cas d’une instance Linux,

Ou,

- **RDP Client** dans le cas d’une instance Windows.

Le bouton **Supprimer**permet de terminer et supprimer l’instance de l’application déployée.

#### **Connexion aux instances Linux**
Depuis la plateforme *UIC* connectez-vous en ssh aux instances *Linux*. Si vous cliquez sur le bouton **ssh** de la colonne **Actions** vous obtenez l’écran suivant:

![Image](/img_fr/img_UIC_Services/img_google/image048.png)

Cet écran vous affiche les paramètres qui vous permettront de vous connecter à la VM en choisissant l’une des deux options:

- En utilisant un outil ssh externe, dans ce cas vous pouvez copier toutes les valeurs des paramètres affichés dans cette fenêtre et les injecter dans l’outil que vous utilisez.
- En utilisant l’outil Shell in a box intégré à UIC, dans ce cas vous avez juste à cliquer sur le bouton **Shell in a box** affiché en bas, à gauche de la fenêtre. UIC vous connectera automatiquement sur la VM et ouvrira une fenêtre dans un onglet dédié de votre navigateur.

#### **Connexion aux instances Windows**
UIC vous permet de vous connecter en RDP à une instance Windows, à condition que la connexion Bureau à distance soit autorisée sur cette instance. Si vous utilisez une image publique GOOGLE CLOUD, cette condition est supposée être nativement respectée. Si vous utilisez une image privée, assurez-vous que cette condition est respectée en vérifiant au niveau du paramétrage du firewall Windows, que les bonnes options sont activées, comme illustré sur l’écran ci-dessous:

![Image](/img_fr/img_UIC_Services/img_google/image049.png)

##### Options de connexions 
Si vous cliquez sur le bouton **RDP Client** de la colonne **Actions** vous obtenez l’écran suivant:

![Image](/img_fr/img_UIC_Services/img_google/image050.png)

Cet écran vous affiche les paramètres qui vous permettront de vous connecter à la VM en choisissant l’une des deux options:

- En utilisant un outil RDP externe, dans ce cas vous pouvez copier toutes les valeurs des paramètres affichés dans cette fenêtre et les injecter dans l’outil que vous utilisez.
- En utilisant la procédure proposée par UIC, dans ce cas vous avez juste à cliquer sur le bouton **Télécharger le fichier RDP** affiché en bas, à gauche de la fenêtre. Suivez en suite les instructions et les étapes décrites ci-dessous.

##### Connexion Bureau à distance 
Lorsque vous cliquez sur le bouton **Télécharger le fichier RDP,** Windows vous affiche la fenêtre suivante: 

![Image](/img_fr/img_UIC_Services/img_google/image051.png)

- Sélectionnez **Ouvrir avec**: **Connexion Bureau à distance**, puis cliquez sur **OK.** Vous obtiendrez la fenêtre suivante:

![Image](/img_fr/img_UIC_Services/img_google/image052.png)

- Cliquez sur le bouton **Connexion** pour déclencher l’action de connexion à l’instance, le système Windows affichera une fenêtre semblable à la suivante: 

![Image](/img_fr/img_UIC_Services/img_google/image053.png)

- Entrez le mot de passe de connexion puis cliquez sur **OK**.

**Remarque: Si votre VM ne présente pas un certificat signé par une autorité de confiance, le système affichera la fenêtre suivante:**

![Image](/img_fr/img_UIC_Services/img_google/image054.png)

Si vous êtes dans un réseau sécurisé, appuyez sur le bouton **Oui**, sinon corrigez le problème avant de continuer.

Après l’opération d’authentification, le système Windows de la VM affiche la session de l’utilisateur authentifié. Voici un exemple d’écran d’une session Administrateur par défaut:

![Image](/img_fr/img_UIC_Services/img_google/image055.png)

#### **Détails d’un déploiement**
Vous obtenez la liste des déploiements en cliquant sur le menu **Gérer -> Déploiements,** l’écran ci-dessous fournit un exemple de liste. 

![Image](/img_fr/img_UIC_Services/img_google/image047.png)

Un clic sur le lien **Identifiant** affiche tous les détails du déploiement. 

![Image](/img_fr/img_UIC_Services/img_google/image056.png)

La structure et le contenu de cette page sont décrits en détails dans le document général intitulé ***UiC_Guide_UserAdmin_FR.*** Les sections suivantes reprennent certaines descriptions générales mais se focalisent surtout sur les spécificités de Google Cloud. 

##### Actions sur un déploiement 
Les actions situées en haut, à gauche de la page sont celles applicables au déploiement: 

![Image](/img_fr/img_UIC_Services/img_google/image057.png)

**Supprimer**: Cette commande permet de supprimer le déploiement de la table des déploiements,

**Template**: Permet d’afficher le template généré par *UIC* et utilisé pour ce déploiement,

**Retirer ce déploiement**: Permet de retirer ce déploiement de la table des déploiements, sans supprimer ses ressources des Clouds où elles ont été approvisionnées. Lorsque la suppression est enclenchée, la plateforme UIC affichera le message suivant: 

![Image](/img_fr/img_UIC_Services/img_google/image058.png)

##### Actions sur un nœud
Les actions situées dans la partie centrale sont celles applicables au management de la machine virtuelle. Les actions sont organisées en deux catégories, **Actions sur le nœud** et **Liste des accès à la machine**:

![Image](/img_fr/img_UIC_Services/img_google/image059.png)

Voici la description des commandes du groupe **Actions sur le nœud,** en partant de la première icône à gauche:

**Démarrer**: Lorsque la machine virtuelle est arrêtée, l’icône permet de la démarrer,

**Stopper**: La machine virtuelle est à l’état démarré, l’icône permet de l’arrêter,

**Redémarrer**: Cette action permet de redémarrer la machine virtuelle,

Les commandes du groupe **Liste des accès à la machine** vous permettent d’accéder à distance à la machine à l’aide d’une des deux options:

- **RDP** (pour Windows) ou **SSH** (pour Linux): Ces méthodes d’accès sont décrites dans les sections **Connexion aux instances Linux** et  **Connexion aux instances Windows.**

###### *Démarrer une instance*
La commande **Démarrer** une instance n’est disponible que si l’instance est arrêtée.

- Cliquez sur le bouton **Démarrer,** UIC vous affiche une fenêtre vous demandant de confirmer l’action, puis valider à l’aide du bouton OK.

![Image](/img_fr/img_UIC_Services/img_google/image060.png)Patientez, puis rafraichissez à l’aide du bouton suivant , la page de l’instance apparaît avec l’instance démarrée, le champ **Etat** passe à la valeur **Actif**.

###### *Arrêter une instance*
- Sélectionnez la commande **Arrêter,** UIC affiche la boite de dialogue vous demandant la confirmation de l’action, validez à l’aide du bouton OK. 
- ![Image](/img_fr/img_UIC_Services/img_google/image061.png)Patientez, puis rafraichissez à l’aide du bouton suivant , le tableau des instances apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image062.png)

Le statut de l’instance passe à l’état **Stoppé**. Vous pouvez la redémarrer à tout moment.

#### **Suppression d’un déploiement**
Vous pouvez utiliser le menu **Gérer -> Déploiements** pour supprimer un déploiement. La liste des déploiements s’affiche: 

![Image](/img_fr/img_UIC_Services/img_google/image063.png)

- Sélectionnez la liste déroulante **Actions** du déploiement que vous souhaitez supprimer, le menu propose la commande **Supprimer** :

![Image](/img_fr/img_UIC_Services/img_google/image064.png)

- Sélectionnez **Supprimer**, la plateforme UIC vous demandera de confirmer l’action:

![Image](/img_fr/img_UIC_Services/img_google/image065.png)

- Cliquez sur le bouton **OK**, l’opération de suppression se déclenche auprès de l’infrastructure Google Cloud. La plateforme attend la réponse de suppression définitive avant de passer le déploiement à l’état **Supprimé**, comme indiqué dans l’exemple suivant:

![Image](/img_fr/img_UIC_Services/img_google/image066.png)

**Remarque: Les ressources du déploiement supprimé sont complètement désallouées de l’infrastructure Cloud, en revanche quelques métadonnées restent encore en mémoire de la plateforme *UIC*.** 

Pour supprimer ces données et la ligne correspondante dans la table des déploiements, cliquez sur le bouton **Supprimer** de la colonne **Actions** du déploiement. 

## ***Tableau de bord Google Cloud*** 
Une fois que les prérequis sont validés, vous pourrez alors gérer les ressources de vos tenants *Google Cloud* depuis le menu *UIC* **Clouds -> *Google Cloud* -> Identifiant Cloud**, le tableau de bord ci-dessousapparaît:

![Image](/img_fr/img_UIC_Services/img_google/image067.png)

La page **Tableau de bord** est divisée en deuxparties, la partie de gauche permet de choisir la région *AWS* (liste déroulante) dans laquelle vous souhaitez travailler. Les items **Région, Instances**, **Sauvegardes d’instance, Volumes, Pare-feux, Adresses IP publiques, Réseaux, Quotas**, **Facturation** sont mis à disposition, vous pourrez alors afficher l’ensemble des services utilisés pour une région sélectionnée.  

La partie centrale présente une synthèse des ressources et des services utilisés ainsi que de la consommation en cours chez *Google Cloud* pour le tenant choisi. Les indicateurs sont fournis sous formes numériques et sous formes graphiques. 

Le contenu de la partie centrale (variable en fonction des items sélectionnés)du tableau de bord affiche les informations suivantes : 

- Le temps écoulé depuis la dernière mise à jour (en haut à droite) suivi du bouton permettant de forcer l’actualisation des données (bouton ![Image](/img_fr/img_UIC_Services/img_google/image003.png)),
- Le nombre total d’instances ainsi que le nombre d’instances arrêtées et démarrées,
- Le nombre total de volumes et d’instantanés configurés,
- Le nombre total d’adresse IP publiques et de réseaux configurés, 
- Un graphique représentant la synthèse de la consommation en cours ainsi que la répartition de cette consommation par service,
- Un graphique représentant les instances démarrées, arrêtées. Cet indicateur fournit la répartition en nombres et en pourcentages,
- Un graphique représentant les volumes et instantanés attachés, disponibles. Cet indicateur fournit la répartition en nombres et en pourcentages. 
- Les instances et les volumes sont également représentés par région.

## **Instances**
L’item **Instances** permet d’afficher les informations et les actions exposées sur les instances des machines virtuelles associées à l’identifiant cloud sélectionné.

![Image](/img_fr/img_UIC_Services/img_google/image068.png)

Le tableau présente la liste et les paramètres des instances créés, le bouton **+** de la première colonne permet d’afficher les paramètres cachés du tableau : 

|**ID:**	|Identifiant attribué à l’instance (machine virtuelle)|
| - | - |
|**Nom:**|Nom attribué à l’instance (machine virtuelle)|
|**Zone:**|Zone géographique de disponibilité de la machine virtuelle,|
|**Etat:**|Etat de l’instance|
|**IP publique/privée:**|Adresses IP de la machine virtuelle,|
|**Gabarit:**|Gabarit de l’instance |
|**Tags:**|Liste des tags associés à l’instance|
|**Création:**|Horodatage de création de l’instance|

La colonne **Actions**offre les possibilités suivantes : 

![Image](/img_fr/img_UIC_Services/img_google/image069.png)

- **Démarrer:** Démarre l’instance,
- **Redimensionner:** Permet de redimensionner l’instance,
- **Redémarrer:** Redémarre l’instance,
- **Prendre un instantané**: Permet de prendre un instantané de l’instance, 
- **Arrêter**: Permet d’arrêter l’instance,
- **Supprimer**: Permet de supprimer l’instance. 

### ***Démarrer une instance***
La commande **Démarrer** (instance) est disponible seulement si l’instance est arrêtée.

- Cliquez sur le menu **Actions** de l’instance que vous souhaitez démarrer,
- Sélectionnez **Démarrer** la boite de dialogue suivante apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image070.png)

- Cliquez sur le bouton **Valider**, un premier message vous avertit que l’instance est en cours de démarrage. Attendez le deuxième message qui vous avertit lorsque l’instance est démarrée, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_google/image061.png), le tableau des instances apparaît avec l’instance démarrée, le champ **Statut** passe à l’état **Active**.

### ***Redimensionner un gabarit de VM***
Pour redimensionner un gabarit de VM, celle-ci doit être préalablement arrêtée. Sélectionnez la commande **Redimensionner** depuis la colonne/menu **Actions**, la boite de dialogue suivante apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image071.png)

Sélectionnez le nouveau gabarit que vous souhaitez puis validez à l’aide du bouton **Valider**.

### ***Redémarrer une instance***
La commande **Redémarrer** est disponible seulement si l’instance est démarrée.

- Cliquez sur le menu **Actions** de l’instance que vous souhaitez redémarrer,
- Sélectionnez **Redémarrer,** la boite de dialogue suivante apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image072.png)

- ![Image](/img_fr/img_UIC_Services/img_google/image073.png)Cliquez sur le bouton **Valider**, un premier message vous avertit que l’instance est en cours de démarrage. Attendez le deuxième message qui vous avertit lorsque l’instance est redémarrée, puis rafraichissez à l’aide du bouton suivant , le tableau des instances apparaît avec l’instance démarrée, le champ **Statut** passe à l’état **Active**.

### ***Arrêter une instance***
Cette opération mettra l’instance sélectionnée dans un état Stopped. La machine virtuelle est arrêtée mais reste associée à l’hyperviseur qui la gère. Au prochain démarrage, elle sera gérée par ce même hyperviseur.

- Sélectionnez la commande **Arrêter** depuis la colonne **Actions**, la boite de dialogue suivante apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image074.png)

- Cliquez sur le bouton **Valider**, un message vous avertit que l’instance est en cours d’arrêt.

Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_google/image061.png), le tableau des instances apparaît, le statut de l’instance passe à l’état *Arrêtée*.

### ***Prendre un instantané d’instance***
Pour prendre un instantané de VM, sélectionnez la commande **Prendre un instantané** depuis la colonne/menu **Actions**, la boite de dialogue suivante apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image075.png)

Indiquez le nom que vous souhaitez puis validez à l’aide du bouton **Valider**.

L’instantané sera rajouté à la liste des instantanés associés au compte.

### ***Supprimer une instance***
- Sélectionnez la commande **Supprimer** depuis la colonne **Actions**, la boite de dialogue suivante apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image076.png)

- Cliquez sur le bouton **Supprimer**, l’instance n’apparaitra plus dans la liste. Si la page ne se met pas à jour automatiquement, cliquez sur le bouton prévu pour la mise à jour explicite.

## **Les sauvegardes des instances**
La rubrique **Sauvegarde d’instance** liste tous les instantanés (Images) créés. Lorsque vous cliquez sur ce menu, UIC vous affiche cette liste avec les caractéristiques de chaque instantané ainsi que les actions que vous pouvez leur appliquer. Un exemple de liste est affiché ci-dessous:**  

![Image](/img_fr/img_UIC_Services/img_google/image077.png)

UIC affiche pour chaque instantané, les paramètres suivants:  

- **Nom** : Indique le nom de l’instantané,
- **Zone**: Zone de sauvegarde de l’instantané,
- **Taille**: Taille disque de l’instantané (en GB),
- **Date de création**: Date de création de l’instantané,
- **Actions**: Liste des opérations possibles sur l’instantané.

### ***Supprimer une sauvegarde d’instance***
Vous pouvez supprimer les sauvegardes d’instances individuellement ou bien par lots. 

![Image](/img_fr/img_UIC_Services/img_google/image078.png)

- Si vous souhaitez supprimer une sauvegarde individuelle, Cliquez sur le menu **Actions -> Supprimer** associé à la sauvegarde que vous souhaitez supprimer.

Si vous souhaitez supprimer plusieurs sauvegardes en une seule opération, pour chaque sauvegarde à supprimer, cochez le bouton situé à gauche de la colonne ‘’Nom’’, puis cliquez sur le bouton **Supprimer les sauvegardes d’instance**.

## **Stockage**
### ***Les volumes***
La rubrique **Volumes** liste les volumes alloués dans la zone géographique sélectionnée. Depuis le menu **Clouds -> Google Cloud -> Tenant**, sélectionnez l’item **Stockages -> Volumes,** la page suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_google/image079.png)

Toutes les informations et les actions possibles sur les volumes sont affichées dans 
ce tableau :

- **ID**: Indique l’identifiant du volume,
- **Nom** : Indique le nom du volume,
- **Taille**(GB) : Indique la taille du volume,
- **Etat**: Indique l’état du volume,
- **Attaché à** : Indique si le disque est déjà associé à une machine virtuelle ou si celui-ci est disponible,
- **Zone**: Indique le lieu où est situé le volume, 
- **Type:** indique le type de volume,
- **Date de création**: Indique la date de création du volume,
- **Actions**: 
	- **Attacher:**  Permet d’attacher un volume à une instance,
	- **Détacher:**  Permet de détacher un volume d’une instance,
	- **Supprimer:** Permet de supprimer un volume,

### ***Créer un volume***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> *Google Cloud* -> *Tenant,*** sélectionnez l’item **Stockage -> Volumes**, la page **Volumes** apparaît.

- Cliquez sur le bouton **Créer un Volume**, la boite de dialogue suivante s’affiche: 

![Image](/img_fr/img_UIC_Services/img_google/image080.png)

- Saisissez dans le champ **Nom** le nom du volume,
- Choisissez le type de technologie souhaitée (SSD, Standard) depuis le menu déroulant **Type**,
- Précisez la **taille** du volume (en GB), 
- Précisez la **zone** de disponibilité du volume, 
- Cliquez sur le bouton **Créer**,

Le volume créé est maintenant visible depuis le tableau de la page des volumes.

### ***Supprimer un volume***
Vous pouvez supprimer individuellement ou par lots les volumes. 

![Image](/img_fr/img_UIC_Services/img_google/image079.png)

Si vous souhaitez supprimer une sauvegarde individuelle, 

- Cliquez sur le menu **Actions -> Supprimer** associé au volume que vous souhaitez supprimer.

Si vous souhaitez supprimer plusieurs sauvegardes en une seule opération, 

- Cochez case par case ou cochez la case qui se trouve en tête de tableau (en haut à gauche) 
- Cliquez sur le bouton **Supprimer les volumes**,

## **Pare-feux**
L’item **Pare-feux** permet d’accéder aux règles de pare-feux définies sur le cloud Google Cloud. Sélectionnez le menu **Clouds -> Google Cloud -> Tenant -> Pare-feux**, la page **Pare-feux** apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image081.png)

Cette page contient la liste des règles de sécurité créés, des actions sont également disponibles.   

Le bouton **Supprimer les pare-feux**: Cette action supprime l’ensemble des groupes de sécurité sélectionnés,

La liste des pare-feux déclarés chez ***Google Cloud*** est présentée sous forme de tableau: 

- **Nom**: Indique le nom du pare-feu de sécurité,
- **Direction**: Indique la direction du flux,
- **Tag cible**: Tag de ressource cible,
- **Plage d’IP**: Plage d’IP auxquelles la règle est appliquée, 
- **Protocole/Ports** : Protocole et ports auxquels la règle sera appliquée,
- **Réseau** : Nom du réseau associé,
- **Actions**: 	
	- **Supprimer**: Cette action supprime le pare-feu.

## **Adresses IP publiques**
La rubrique **Adresses** **IP publiques** permet d’afficher la liste des adresses IP publiques déjà créées. Vous pouvez également en créer de nouvelles ou supprimer celles dont vous n’avez plus l’usage. 

#### **Afficher la liste des Adresses IP publiques**
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> Google Cloud -> Tenant -> *Adresses IP publiques***, *UiC* affiche la page illustrée ci-dessous : 
![Image](/img_fr/img_UIC_Services/img_google/image082.png)

La fonction **Change columns**: Elle permet de sélectionner les colonnes à afficher, 

La fonction **CSV**: Vous avez la possibilité d’exporter le tableau web affiché dans un format CSV,

Le tableau affiche les informations et actions suivantes: 

- **Nom**: Identifiant de l’allocation attribué à l’adresse,
- **Adresse IP**: Valeur de l’adresse publique,
- **Statut**: état de l’Adresse IP,
- **Création**: Date de création de l’adresse,
- **Actions**:	**Associer:** permet d’associer l’IP à une instance de VM,
	- **Dissocier**: permet de dissocier l’IP de l’instance d’attachement,
	- **Supprimer**: Permet de supprimer l’IP.

#### **Créer une nouvelle adresse IP**
Pour créer une nouvelle adresse IP, cliquez sur le bouton **Créer une adresse IP publique**, *UiC* affiche la boite de dialogue suivante : 

![Image](/img_fr/img_UIC_Services/img_google/image083.png)

- Entrez le nom de l’adresse,
- Cliquez sur le bouton **Valider**, deux messages apparaitront (en cours de création, création effectuée),

### ***Supprimer une IP publique***
La suppression d’une IP externe peut se faire à l’aide de la commande **Actions -> Supprimer** ,

Ou bien en sélectionnant les adresses à supprimer puis cliquez sur le bouton **Supprimer les IP externes.**

![Image](/img_fr/img_UIC_Services/img_google/image084.png)

- Cliquez sur le bouton **Supprimer** pour valider l’action.

## **Réseaux**
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> Google Cloud -> Tenant> -> Réseaux,** la page contenant le tableau des VPC s’affiche : 

![Image](/img_fr/img_UIC_Services/img_google/image085.png)

Cette page affiche les réseaux virtuels configurés sur *Google Cloud*.

- **ID:** Indique l’identifiant du réseau,
- **Nom** : Indique le nom du réseau,
- **Nombre de sous-réseaux:** affiche le nombre de sous-réseaux,
- **Description:** Description du réseau,
- **Création:** Date et heure de création,
- ***Actions***: 
	- **Supprimer**: Cette action supprime le réseau,

### ***Création d’un réseau***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> Google Cloud -> Tenant> -> Réseaux,** Cliquez sur le bouton **Créer un** **Réseau**, le formulaire **Créer un réseau** apparaît : 

![Image](/img_fr/img_UIC_Services/img_google/image086.png)

**Réseau:** 

- Sélectionnez un réseau si vous souhaitez utiliser un existant, 
- Saisissez le nom du réseau si vous souhaitez créer un nouveau, 

**Sous-réseau:** 

- Saisissez le nom du sous-réseau dans la zone **Nom**, 
- Saisissez le **Bloc CIDRdu sous réseau** (exemple: 192.168.0.0/24),
- Cliquez sur le bouton **Créer** pour valider. 

### ***Ajout d’un sous-réseau*** 
Pour ajouter un sous-réseau à un réseau existant, cliquez sur le lien bleu de la colonne **ID** du réseau, la page contenant les détails sur le réseau apparaît:

![Image](/img_fr/img_UIC_Services/img_google/image087.png)

- Cliquez sur Créer un sous-réseau, la boite de dialogue suivante s’affiche:

![Image](/img_fr/img_UIC_Services/img_google/image088.png)

- Saisissez le nom du sous-réseau,
- Définissez le bloc CIDR du sous-réseau,
- Cliquez sur le bouton **Créer**. UIC affiche le résultat de la création (succès ou échec) et ajoute le sous-réseau créé à la table existante. En cas de succès, si cette nouvelle entrée n’est pas affichée automatiquement, appuyez sur le bouton de mise à jour forcée associé à la table des sous-réseaux.

#### **Suppression d’un sous-réseau** 
Pour supprimer un sous-réseau, cliquez sur le bouton **Actions -> Supprimer** associé au sous-réseau. UIC affichera une boite de dialogue vous demandant de confirmer la suppression. Cliquez sur le bouton **Supprimer** pour effectuer la suppression définitive du sous-réseau.

#### **Suppression d’un réseau** 
Pour supprimer un réseau, cliquez sur le bouton **Actions -> Supprimer** associé au réseau. UIC affichera une boite de dialogue vous demandant de confirmer la suppression: 

![Image](/img_fr/img_UIC_Services/img_google/image089.png)

Cliquez sur le bouton **Supprimer** pour effectuer la suppression définitive du réseau. 

## **Les quotas**
La plateforme *UIC* peut collecter et afficher les données concernant les quotas d’utilisation de vos ressources Cloud *Google Cloud*. Pour accéder à ces données, sélectionnez le menu **Clouds -> Google Cloud -> Tenant>-> Quotas**, vous obtenez la page ci-dessous :

![Image](/img_fr/img_UIC_Services/img_google/image090.png)

La plateforme *UiC* affiche les quotas des ressources Cloud. La représentation est sous forme de tableau récapitulatif indiquant l’usage courant et la limite de chaque type de ressource: 

- Nombre d’instances,
- Nombre de CPU,
- Taille totale de mémoire viveRAM,
- Etc.

Lorsqu’une des limites est atteinte, les nouveaux déploiements se terminent en échec. Il sera alors nécessaire de libérer des ressources non utilisées, ou bien d’augmenter la capacité de l’infrastructure Google Cloud puis augmenter la limite de la ressource manquante. 

## **Facturation**
La plateforme UIC peut collecter et afficher les données de consommation du Cloud *Google Cloud*. Pour accéder à ces données, sélectionnez le menu **Clouds -> *Google Cloud* -> Identifiant Cloud -> Facturation**, *UiC* affiche un sous-menu avec la liste des commandes implémentées, illustrée ci-dessous:

![Image](/img_fr/img_UIC_Services/img_google/image091.png)

### ***Aperçu des coûts***
L’aperçu des coûts affiche la page suivante:

![Image](/img_fr/img_UIC_Services/img_google/image092.png)

Cette page affiche les données des coûts en fonction des critères sélectionnés. Vous pouvez choisir les critères parmi les catégories suivantes:

- **Projets**: Tous les projets ou bien une liste de projets,
- **Période**: sélectionnez la période qui vous intéresse,

Les données sont affichées par service, par région, par projet et par SKU.

### ***Factures***
Le menu **Factures** affiche une page contenant un onglet **Factures** et un onglet **Analyse de facture**, comme illustré sur la figure suivante:

![Image](/img_fr/img_UIC_Services/img_google/image093.png)

L’onglet **Factures** présente les montants des factures mensuelles sur la période choisie. 

L’onglet Analyse de facture permet d’afficher les détails des factures mensuelles comme illustré sur la figure suivante;

![Image](/img_fr/img_UIC_Services/img_google/image094.png)

Les détails des coûts sont fournis par service et par projet.

### ***Explorateur des coûts***
Le menu **Explorateur des coûts** affiche une page contenant la répartition des coûts pour une période donnée:

![Image](/img_fr/img_UIC_Services/img_google/image095.png) 

Cette page affiche les données des coûts en fonction des critères sélectionnés. Vous pouvez choisir les critères parmi les catégories suivantes:

- **Projets**: Tous les projets ou bien une liste de projets,
- **Période**: Sélectionnez la période qui vous intéresse,
- **Classification** : Par service, par région, par type d’usage, par type de frais, par projet, par SKU.
- **Labels** : Permet de sélectionnez les tags qui vous intéressent.

### ***Agrégation des coûts***
Le menu **Agrégation des coûts** affiche la page suivante:

![Image](/img_fr/img_UIC_Services/img_google/image096.png)

Cette page affiche les données des coûts en fonction des critères sélectionnés. Vous pouvez choisir les critères parmi les catégories suivantes:

- **Projets**: Tous les projets ou bien une liste de projet,
- **Période**: sélectionnez la période qui vous intéresse,
- **Type de coûts**: Global, par service ou par catégorie.

Si vous sélectionnez l’agrégation par catégorie, UIC affiche les coûts agrégés par catégorie de service (IaaS, PaaS, etc.) comme illustré sur la figure suivante:

![Image](/img_fr/img_UIC_Services/img_google/image097.png)

### ***Budgets***
Le menu **Budgets** affiche la liste des budgets définis:

![Image](/img_fr/img_UIC_Services/img_google/image098.png)

Vous pouvez créer un budget à l’aide du bouton **Créer un budget**, la page suivante s’affiche:

![Image](/img_fr/img_UIC_Services/img_google/image099.png)

Une fois le budget défini, vous pouvez confirmer à l’aide du bouton **Créer.** Le budget sera rajouté à la table des budgets.
