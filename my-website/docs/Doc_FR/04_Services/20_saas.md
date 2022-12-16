---
id: 40200
title: SaaS
description: UseITcloud documentation 3.2.0
sidebar_position: 20
---

## **Introduction**
Ce document est dédié à la gestion des services SaaS* depuis l’IHM de la plateforme Use IT Cloud (UIC). Il décrit notamment les points suivants :

- Les prérequis nécessaires à l’accès aux données financières des services SaaS. Ce point concerne les services de l’API, les comptes, les utilisateurs et les projets tels que définis par les fournisseurs de SaaS.
- Les fonctionnalités supportées par *UIC*. Ce point concerne les données de facturation et les données permettant d’effectuer des états analytiques sur la consommation des services SaaS.

Ce document ne décrit que les spécificités relatives aux données financières liées aux services SaaS. Toutes les fonctionnalités de UIC qui sont génériques et communes à tous les Clouds gérés par UIC sont décrites dans le document global intitulé **UiC_Guide_UserAdmin_FR**.

Les conventions suivantes seront utilisées dans de ce document, elles concernent les menus variables du portail *UIC* :

- Le menu **Identifiant de connexion** : Il permet de configurer les identifiants de connexion aux Clouds. Il est composé du nom du compte, suivi du caractère deux points, du nom de l’utilisateur authentifié sur la plateforme. A titre d’exemple, lorsque l’utilisateur user1 du compte account1 se connecte au portail UIC, le menu aura pour valeur **account1:user1**. Dans différentes sections de cette documentation ce menu sera désigné d’une façon générique par <**Compte:Utilisateur>**.
- Le menu **SaaS** vous permet d’accéder aux ressources associées à un identifiant SaaS créé sur la plateforme *UIC* (menu **SaaS -> Offre-> nom de l’identifiant**). A titre d’exemple, si un identifiant **Id1Offre1** a été défini, les ressources attachées à cet identifiant seront accessibles à l’aide du menu **Clouds -> Offre1 -> Id1Offre1**. 

Dans différentes sections de cette documentation cet identifiant sera désigné d’une façon générique par <**Identifiant SaaS -> Tenant>**.


## **Prérequis**
Chaque offre SaaS peut définir les paramètres qui lui sont propres.

### ***SaaS Partner Center de Microsoft***
Pour configurer un identifiant SaaS de connexion *UIC* à une offre Partner Center, vous avez besoin des paramètres suivants : 

- Un identifiant de tenant
- Un identifiant de client
- Une clé secrète
- Un jeton
- Un point de terminaison

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l’étape de configuration de ces paramètres dans *UIC*, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l’environnement Partner Center, vous pouvez créer ou obtenir les paramètres spécifiques en vous connectant sur le tableau de bord de votre espace, en tant qu’administrateur global de votre compte. Dans le cas contraire vous pouvez suivre la procédure décrite dans la section suivante.

### ***Création des paramètres Microsoft Partner Center***
Quatre étapes sont nécessaires à l’obtention des paramètres requis pour la connexion de UIC à l’offre Microsoft Partner Center. Elles sont décrites dans les sections suivantes.

Pour dérouler ces étapes, vous devez satisfaire les pré-requis suivants :

- Avoir un compte utilisateur avec authentification MFA
- Avoir une version de Powershell >= 3.0
- Installer les modules Powershell suivants:
  - AzureAD
  - PartnerCenter

#### **Obtention du tenant ID** 
Connectez-vous au tableau de bord de Microsoft Partner Center. Naviguez jusqu’à la page [Organization Profile](https://partner.microsoft.com/en-us/pcv/accountsettings/organizationprofile). Le **tenant ID** est affiché sous le champ **Microsoft ID**.

![Image](/img_fr/img_UIC_Services/img_saas/image002.png)

Copiez ou notez ce tenant ID, il vous sera demandé dans les prochaines étapes.

#### **Créer une Application Partner Center**
Pour créer une application Partner Center, procédez comme ceci :

- téléchargez le script <https://uicpackages.s3.eu-west-3.amazonaws.com/azure/Create-AzureADApplication.ps1>
- Exécutez ce script comme indiqué ci-dessous : 
```bash
PS C:> .\Create-AzureADApplication.ps1 -ConfigurePreconsent -DisplayName "Partner Center Web App" -TenantId [your tenant ID]
```
Ce script affichera les valeurs suivantes :

- ApplicationId : c’est l’identifiant client
- ApplicationSecret : c’est la clé secrète

Copiez et/ou notez ces deux paramètres, ils vous seront demandés dans les prochaines étapes. 

Connectez-vous ensuite sur le portail Azure Active Directory, sélectionnez le menu « App registrations » puis sélectionnez votre application comme indiqué ci-dessous :

![Image](/img_fr/img_UIC_Services/img_saas/image003.png)

Sélectionnez *Authentification* puis cliquez sur *Add URI*, entrez   <http://localhost:8400/>, puis sauvegardez :

![Image](/img_fr/img_UIC_Services/img_saas/image004.png)

#### **Activer l’accès à l’API**
Il est nécessaire d’activer l’accès à l’API pour le compte primaire, en exécutant la procédure suivante :

- Connectez-vous au tableau de bord en utilisant un compte global d’administration, 
- Depuis le menu Paramètres (icône d’engrenage) dans le coin supérieur droit de l’écran, sélectionnez **Paramètres du compte (Account settings)**,

![Image](/img_fr/img_UIC_Services/img_saas/image005.png)

Vous obtenez la page suivante :

![Image](/img_fr/img_UIC_Services/img_saas/image006.png)

- Dans cette page, sélectionnez App management,
- Sélectionnez Web App puis cliquez sur register pour accéder à l’API et au SDK Partner Center,
- Quitter le tableau de bord Microsoft Partner Center.

#### **Autoriser l’application Web App**
Pour autoriser l’application Web App à accéder à l’API Partner center vous devez obtenir un jeton d’accès en exécutant les commandes suivantes :
```bash
PS C:\>$credential = Get-Credential
```
La boîte de dialogue suivante s’affiche :

![Graphical user interface, application

Description automatically generated](Aspose.Words.6597f93f-2d70-4125-b0f6-87d65c1ca8c8.007.png)

Entrez l’identifiant de l’application comme nom d’utilisateur et la clé secrète comme mot de passe. Puis exécutez la commande suivante :
```bash
PS C:\> $token = New-PartnerAccessToken -ApplicationId [AppId]' -Scopes 'https://api.partnercenter.microsoft.com/user\_impersonation' -ServicePrincipal -Credential $credential -Tenant '[tenant id]' -UseAuthorizationCode
```
Vous serez de nouveau invité à rentrer les paramètres d’authentification du compte partenaire que vous allez utiliser.

En cas de succès, la variable $token contient la valeur du jeton qui vous sera demandé par UIC. Copiez cette valeur dans un emplacement sécurisée pour pouvoir l’utiliser à chaque demande.

### ***Création d’un identifiant SaaS dans UIC***
Une fois que vous disposez de toutes les informations de connexion précisées dans l’introduction de ce chapitre, vous pouvez sur la plateforme *UIC* procéder à la création d’un identifiant SaaS Partner Solution.

Depuis la plateforme *UIC*, sélectionnez le menu **Compte:Utilisateur -> Identifiants SaaS**, la liste des identifiants SaaS déclarés apparaît.

![Image](/img_fr/img_UIC_Services/img_saas/image008.png)

- Cliquez sur le bouton **Ajouter un identifiant**, le formulaire suivant apparaît : 

![Image](/img_fr/img_UIC_Services/img_saas/image009.png)

- Complétez les informations demandées dans le formulaire:

- **Nom de l’identifiant** : Indiquez le nom de l’identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu’à 20 caractères, lettres sans accent, chiffres, tirets),
- **Tenant ID** : Indiquez l’identifiant du tenant,
- **Client ID** : Indiquez l’identifiant du client,
- **Client Secret** : Indiquez la clé secrète,
- **Token** : Entrez la valeur du jeton d’accès,
- **Endpoint** : Indiquez le point de terminaison.

- Cliquez sur le bouton **Ajouter**. Le message de confirmation apparaît. 

#### **Conséquence sur la table des identifiants SaaS** 
L’identifiant créé apparaîtra comme une entrée parmi les identifiants *SaaS*. Vous pourrez modifier ses attributs en le sélectionnant depuis cette page.

![Image](/img_fr/img_UIC_Services/img_saas/image010.png) 

La table des identifiants vous permet d’exécuter sur chacun d’entre eux les commandes du menu **Actions**. Ces actions sont intitulées **Profils et Délégation, Modifier les identifiants** et **Supprimer**. 

**Profils et Délégation**

Ce menu vous permet de définir des profils et les associer à des comptes.

**Modifier un identifiant**

Ce menu vous permet de modifier les paramètres d’un identifiant.

 **Supprimer un identifiant**

Ce menu vous permet de supprimer les paramètres d’un identifiant.

#### **Conséquence sur le menu SaaS**
Après l’ajout d’un identifiant SaaS, *UIC* crée un item portant le nom de l’identifiant dans le menu **SaaS [ Partner Solution**, il porte le nom attribué à la création**.** Il vous permet d’accéder et de piloter les données qui sont sous son contrôle.

![Image](/img_fr/img_UIC_Services/img_saas/image011.png)

## **Tableau de bord *SaaS***  
Une fois que les prérequis sont validés, vous pourrez alors gérer les ressources de vos tenants Partner Center depuis le menu *UIC* **SaaS -> Partner Center -> Identifiant SaaS**, le tableau de bord ci-dessous apparaît :

![Image](/img_fr/img_UIC_Services/img_saas/image012.png)

La page **Tableau de bord** est divisée en deux parties, la partie de gauche permet de choisir les types de données. Quatre items sont proposés : 

- **Overview :** permet d’avoir une vue générale sur les abonnements, les produits, les licences et la consommation,
- **Clients :** permet d’avoir la page qui liste les clients et qui permet de gérer leurs d’abonnements,
- **Analytique :** permet d’accéder aux pages d’analyses relatives aux abonnements et aux licences,
- **Facturation :** permet d’accéder aux pages de facturation et d’estimation de la consommation.

Ces vues sont détaillées dans les prochaines sections.

### ***Vue Overview***
Lorsque vous cliquez sur l’item Consommation, vous obtenez l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_saas/image012.png)

Cette page présente les données d’une période déterminée, sous forme de valeurs numériques et sous forme graphique. Le tableau indique les données suivantes relatives à la période choisie :

- Le montant de la consommation,
- Le client associé à la dépense maximale,
- Le produit associé à la dépense maximale,
- Le nombre de clients, le nombre d’abonnements, le nombre d’abonnements actifs, le nombre de licences et le nombre d’abonnements expirant dans 30 jours.
- Le graphique des consommations par client,
- Le graphique des consommations par produit,
- Le graphique des licences par produit.

### ***Vue Clients***
Lorsque vous cliquez sur l’item **Clients**, vous obtenez l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_saas/image013.png)

Cette page présente la liste des clients, le nom de domaine et le type de chaque client. Pour accéder aux données SaaS d’un client, vous pouvez cliquer sur le nom du client présenté dans la colonne ***Nom de la compagnie***. Vous obtiendrez alors un écran semblable à l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_saas/image014.png)

Cette page affiche les abonnements souscrits par le client, la quantité, la fréquence de facturation, la date d’expiration, le statut et les actions pouvant être appliquées.

En cliquant sur le bouton de la colonne Actions, vous accédez aux détails de l’abonnement. Par exemple les détails de **la version d’évaluation d’office 365 E3** sont affichés sur la page suivante :

![Image](/img_fr/img_UIC_Services/img_saas/image015.png)

La page Commander un abonnement vous permet d’accéder à la liste des abonnements disponibles dans l’offre Partner Center :

![Image](/img_fr/img_UIC_Services/img_saas/image016.png)

La page ***Utilisateurs*** vous permet d’accéder à la page qui liste l’ensemble des utilisateurs déclarés.

La page ***Historique des commandes*** vous permet d’accéder à l’historique des commandes effectuées sur les abonnements.

### ***Vue Analytique***
Lorsque vous cliquez sur l’item **Analytique**, vous obtenez l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_saas/image017.png)

Ce menu vous permet d’effectuer des analyses relatives aux abonnements et des analyses sur l’utilisation des licences.

 **Analyse des abonnements**

Lorsque vous cliquez sur le menu ***Analyses relatives aux abonnements***, vous obtenez la page suivante :

![Image](/img_fr/img_UIC_Services/img_saas/image018.png)

Cette page affiche les données concernant les abonnements et les licences relatives à chaque produit.

**Analyse d’utilisation des licences**

Lorsque vous cliquez sur le menu ***Analyses d’utilisation des licences***, vous obtenez la page suivante :

![Image](/img_fr/img_UIC_Services/img_saas/image019.png)

Cette page affiche les données relatives aux licences concernant chaque produit et la répartition par client.

### ***Vue Facturation***
Lorsque vous cliquez sur l’item **Facturation**, vous obtenez l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_saas/image020.png)

Ce menu vous permet d’accéder aux factures déjà émises et à l’estimation de la consommation en cours.

 **Factures**

Lorsque vous cliquez sur le menu ***Factures***, vous obtenez la page suivante :

![Image](/img_fr/img_UIC_Services/img_saas/image021.png)

Cette page affiche les données concernant les factures émises pendant la période que vous avez choisie. Vous pouvez télécharger les fichiers de factures disponibles au format PDF.

**Estimation de la consommation**

Lorsque vous cliquez sur le menu ***Estimation de la consommation***, vous obtenez la page suivante :

![Image](/img_fr/img_UIC_Services/img_saas/image022.png)

Cette page affiche les valeurs estimées concernant la consommation en cours, pour chaque client.
