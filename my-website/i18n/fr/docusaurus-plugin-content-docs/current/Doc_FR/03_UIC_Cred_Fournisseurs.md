---
id: 10030
title: Configuration des identifiants
description: UseITcloud documentation 3.1.1
sidebar_position: 3
---

**Pour les opérations de déploiement et les opérations financières**

## Microsoft Azure

Pour configurer un identifiant Cloud de connexion UIC à une infrastructure Microsoft Azure, vous avez besoin des paramètres Azure suivants :

- Un identifiant de souscription
- Un identifiant de Client
- Un identifiant de tenant
- Une clé secrète

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l'étape de configuration de ces paramètres dans UIC, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l'environnement Azure, vous pouvez obtenir ces informations en vous connectant sur le portail de gestion du Cloud Azure à l'adresse [https://portal.azure.com](https://portal.azure.com/) en tant qu'administrateur de votre abonnement (ou à partir d'un compte ayant des privilèges suffisants sur l'_Azure Active Directory_).

Si vous n'êtes pas familier avec l'environnement Azure, vous pouvez consulter les paragraphes suivants pour découvrir comment créer ou obtenir les identifiants Azure cités ci-dessus.

### Accès à la console Azure

Les informations nécessaires à la configuration d'un identifiant UIC de connexion au Cloud Azure pourront être obtenus en vous connectant à la plateforme _Azure._ Pour cela authentifiez-vous sur le portail de gestion du Cloud Azure, [https://portal.azure.com](https://portal.azure.com/), en tant qu'administrateur de votre abonnement (ou à partir d'un compte ayant des privilèges suffisants sur l'_Azure Active Directory_).

Une fois authentifié, vous obtenez l'écran ci-dessous :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image002.png#bordered)

- Dans la liste **All services** , sélectionnez le service _ **Azure Active Directory**
- Cliquez sur **App registrations** puis **New registration**

![Image](/img_fr/img_UIC_Cred_Fournisseur/image003.png#bordered)

### Création d'une application

- Depuis **App Registration** , cliquez sur **New application** afin d'enregistrer une nouvelle application auprès d'_Azure Active Directory_.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image004.png#bordered)

- Indiquez le nom dans la zone **Name**
- Sélectionnez _Web_ dans la zone **Redirect URI**.
- Saisissez une URL dans la zone Sign-on URL (URL de login de cette application)
- Cliquez sur le bouton **Register,** la page **App001** apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image005.png#bordered)

- Sauvegardez les champs suivants :

- **Application (client) ID** correspond à la valeur **«ID de client»** sur la plateforme UIC
- **Directory (tenant) ID** correspond à la valeur **«ID de tenant»** sur la plateforme UIC

Vous pouvez ensuite créer une nouvelle clé pour cette application en cliquant sur **Certificates & secrets + New client secret** , vous obtenez alors l'écran suivant :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image006.png#bordered)

- Saisissez une description et choisissez une période d'expiration (1 an, 2 ans ou pas d'expiration).
- Cliquez sur le bouton **Add**

L'interface affiche un code secret **qui ne sera exposé qu'une seule fois** , c'est la valeur qu'il faudra fournir dans le champ **« Clé secrète »** pour UIC.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image007.png#bordered)

**Attention : Faites un copier-coller avant de fermer la page. La valeur de la clé ne sera pas récupérable, après avoir fermé cette page.**

Un dernier élément est à récupérer, c'est l'identifiant de l'abonnement Azure : «  **ID de souscription**  ». Cet identifiant peut être récupéré depuis le portail Web en suivant les instructions décrites dans le paragraphe suivant.

### Récupération de l'identifiant «ID de souscription»

Depuis le portail Web, sélectionnez la zone _subscription_ et récupérez la valeur.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image008.png#bordered)

Maintenant, il faut donner des droits à l'application créée sur l'abonnement _Azure_.

### Contrôle d'accès sur une souscription Azure

Pour associer un rôle Azure à une application, procédez comme ceci :

- Cliquez sur **subscription** et aller dans la zone **Access Control** (IAM).

![Image](/img_fr/img_UIC_Cred_Fournisseur/image009.png#bordered)

- Cliquez sur + **Add**  ****  **Add Role Assignment** , L'écran ci-dessous apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image010.png#bordered)

- Dans la zone **Role** , sélectionnez **Owner** ou **Contributor**.
- Dans la zone **Select** Saisissez le début ou le nom complet de l'application, puis sélectionnez l'application à laquelle vous souhaitez associer le rôle. Dans notre exemple App001.
- Cliquez sur le bouton Save

A la fin de cette étape, vous disposez des quatre informations Azure nécessaires, à déclarer sur la plateforme _Use It Cloud_.

Pour autoriser l'accès de l'App001 sur d'autres souscriptions, veuillez répéter les étapes de la section.

### Configuration des identifiants Clouds Azure dans UIC

Depuis la plateforme UIC, menu **Compte:Utilisateur / Identifiants Cloud / Microsoft Azure**.

Cliquez sur le bouton **Ajouter un identifiant** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image011.png#bordered)

Complétez les zones ci-dessous :
- **Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets).
- **ID de souscription, ID de client, ID de tenant et la clé secrète** , décrits dans les pages précédentes.
- **Régions à activer**  : Sélectionnez les régions à activer pour ce compte,
- **Région**  **par défaut**  : Choisissez la région Azure par défaut que vous souhaitez pour cet identifiant.
- **Proxy**  : Indiquez l'URL du proxy (facultatif)au format suivant : ```https://user:password@host:port```

## OVH

Pour configurer un identifiant Cloud de connexion UIC à une infrastructure Cloud Public OVH, vous avez besoin des paramètres OVH suivants :

- L'adresse du hôte des services API,
- Le point de terminaison (End point),
- La clé d'application,
- La clé secrète,
- La clé du consommateur.

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l'étape de configuration de ces paramètres dans UIC, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l'environnement OVH, vous pouvez obtenir ces informations en vous connectant sur le portail de gestion : [https://www.ovh.com/manager/web](https://www.ovh.com/manager/web) en tant qu'administrateur de votre compte.

Si vous n'êtes pas familier avec l'environnement OVH, vous pouvez consulter les paragraphes suivants pour découvrir comment créer ou obtenir les identifiants OVH cités ci-dessus.

### Création des clés d'application

L'authentification sur les services API du Cloud OVH nécessite de disposer de deux clés, la clé d'application et la clé secrète. Toute application souhaitant communiquer avec l'API OVH doit être déclarée à l'avance.

- Cliquez sur le lien suivant : [https://eu.api.ovh.com/createApp/](https://eu.api.ovh.com/createApp/)

![Image](/img_fr/img_UIC_Cred_Fournisseur/image012.png#bordered)

- Entrez votre ID client, votre mot de passe et le nom de votre application, et une description. Ce nom vous sera utile ultérieurement si vous souhaitez autoriser d'autres personnes à l'utiliser.
- Cliquez sur **Create Keys**, vous obtenez vos deux premières clés :
    - la clé d'application, nommée AK, (ex : 7kbG7Bk7S9Nt7ZSV)
    - La clé d'application secrète, nommée AS, (ex : EgWIz07P0HYwtQDs7cNIqCiQaWSuHF)

![Image](/img_fr/img_UIC_Cred_Fournisseur/image013.jpg#bordered)

### Demander un jeton d'authentification à OVH

Maintenant que nous avons les clés (AK, AS), nous allons demander un jeton (consumer key) à OVH afin de nous permettre de faire des demandes à l'API. Pour ce faire, vous devez vous rendre sur https://eu.api.ovh.com/1.0/auth/credential pour spécifier l'accès requis. Pour les besoins de la plateforme UIC, nous demanderons un jeton OVH pour l'intégralité de l'API.

**Exemple cURL**
```bash
curl -XPOST -H "X-Ovh-Application: 7kbG7Bk7S9Nt7ZSV " -H "Content-type: application/json" https://eu.api.ovh.com/1.0/auth/credential -d
'{
    "accessRules": [
        {"method": "GET", "path": "/\*"}
    ]
}'
```
**Exemple de réponse**
```json
{
    "state": "pendingValidation",
    "validationUrl": "https://eu.api.ovh.com/auth/?credentialToken=7AGohYAWSd9es9uec4HIdrZWvPhsgFOVviJ08OgtlWhpwmmd0URnMDQpcutiZTHh",
    "consumerKey": " MtSwSrPpNjqfVSmJhLbPyr2i45lSwPU1"
}
```

### Connecter le jeton d'authentification au compte client OVH

Dans la réponse, vous recevrez une URL de validation et une clé de consommation (le jeton, nommé CK). Ce jeton n'est initialement associé à aucun client. Vous (ou un autre client) connecterez votre compte OVH à ce jeton en vous connectant à l'URL rendue par le service d'API dans le paramètre ''validationUrl'', par exemple  :

[https://eu.api.ovh.com/auth/?credentialToken=7AGohYAWSd9es9uec4HIdrZWvPhsgFOVviJ08OgtlWhpwmmd0URnMDQpcutiZTHh](https://eu.api.ovh.com/auth/?credentialToken=7AGohYAWSd9es9uec4HIdrZWvPhsgFOVviJ08OgtlWhpwmmd0URnMDQpcutiZTHh)

Cette étape vous permettra d'identifier tout client d'OVH et d'obtenir des droits sur son compte. Choisir une durée de vie illimitée pour ce jeton.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image014.png#bordered)

### Configuration des Identifiants Cloud OVH dans UIC

Depuis la plateforme, menu **Compte:Utilisateur / Identifiants Cloud / OVH** ,

- Cliquez sur le bouton **Ajouter un identifiant** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image015.png#bordered)

- Complétez les zones de saisie de cet écran :
    - **Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets).
    - **Les noms de hôte et le point de terminaison :** Ces deux paramètres sont pré-remplis.
    - **Clé d'application, Clé secrète, Clé du consommateur**  : Entrez les valeurs respectives obtenues auprès des services OVH.

Le Cloud OVH géré par UIC est basé sur OpenStack. Les paragraphes suivants décrivent comment créer des utilisateurs et des projets au sein de ce Cloud.

### Créer un utilisateur OVH

Lorsque vous êtes connecté sur le compte _OVH_ et que vous avez sélectionné un projet en utilisant par exemple le menu **Cloud -> Serveurs -> \<Nom du projet\>,** vous pouvez ajouter un utilisateur à ce projet, pour cela, sélectionnez le menu **Gestion technique -> OpenStack users**.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image016.png#bordered)

- Cliquez sur le bouton  **Ajouter un utilisateur**
- Entrez une **Description** de l'utilisateur.

Vous obtenez alors l'écran listant tous les utilisateurs du projet :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image017.png#bordered) 

Le mot de passe est visible dans l'espace client jusqu'à l'actualisation de la page, conservez-le afin de l'utiliser lors d'une connexion ultérieure. L'identifiant et le mot de passe sont automatiquement générés par la suite. Une fois l'opération terminée, le message de confirmation de création du compte s'affichera.

Il est également possible de générer un nouveau mot de passe en cliquant sur le pictogramme d'actualisation (refresh), à droite de la valeur du mot de passe.

Pour récupérer les autres champs, il faut télécharger le fichier de configuration _OpenStack_ (cliquez sur le pictogramme à droite de l'identifiant).

![Image](/img_fr/img_UIC_Cred_Fournisseur/image201.png#bordered)

Veillez à cocher la case **Utiliser le fichier de configuration OpenRC v3** avant de confirmer le téléchargement du fichier. En effet UIC est compatible avec cette version.

Ce fichier contient les paramètres qui vous seront demandés lors de la configuration du projet au niveau de la plateforme UIC. Voici un exemple de contenu de ce fichier :

```bash
#!/bin/bash

# To use an Openstack cloud you need to authenticate against keystone, which
# returns a \*\*Token\*\* and \*\*Service Catalog\*\*. The catalog contains the
# endpoint for all services the user/tenant has access to - including nova,
# glance, keystone, swift.
#

export OS_AUTH_URL=https://auth.cloud.ovh.net/v3/
export OS_IDENTITY_API_VERSION=3
export OS_USER_DOMAIN_NAME=${OS_USER_DOMAIN_NAME:-"Default"}
export OS_PROJECT_DOMAIN_NAME=${OS_PROJECT_DOMAIN_NAME:-"Default"}
# With the addition of Keystone we have standardized on the term \*\*tenant\*\*
# as the entity that owns the resources.
export OS_TENANT_ID=cf35e498cd704827989e695d0e657c17
export OS_TENANT_NAME="2673511130383729"
# In addition to the owning entity (tenant), openstack stores the entity
# performing the action as the \*\*user\*\*.
# With Keystone you pass the keystone password.
echo "Please enter your OpenStack Password: "
read -sr OS_PASSWORD_INPUT
export OS_PASSWORD=$OS_PASSWORD_INPUT
# If your configuration has multiple regions, we set that information here.
# OS_REGION_NAME is optional and only valid in certain environments.
export OS_REGION_NAME="BHS1"
# Don't leave a blank variable, unset it if it was empty
if [-z "$OS_REGION_NAME"]; then unset OS_REGION_NAME; fi
```
### Configuration d'un projet OVH au niveau UIC
Depuis la plateforme, menu **Compte:Utilisateur -> Identifiants Cloud -> OVH** , vous pouvez ajouter la configuration d'un projet OVH à la plateforme _UIC._ Vous aurez besoin pour cela des paramètres du projet que vous avez créé sur la plateforme OVH et dont vous avez téléchargé le fichier de configuration.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image019.png#bordered)

- Sélectionnez le menu **Actions / Projets** , l'écran suivant apparaît:

![Image](/img_fr/img_UIC_Cred_Fournisseur/image020.png#bordered)

- Renseignez les champs du formulaire, en vous référant au fichier de configuration du projet que vous avez téléchargé depuis le Cloud OVH :
    - **ID du projet**  : Il correspond à la variable du fichier OS_TENANT_ID= xxxx…(32 caractères)
    - **Etiquette**  : label pour différencier les projets sur la plateforme UIC
    - **Nom du projet**  : correspond à la variable du fichier OS_TENANT_NAME= xxxx… (16 caractères)
    - **Utilisateur**  : correspond à la variable du fichier OS_USERNAME qui correspond aussi à l'ID de l'utilisateur de la figure précédente
    - **Mot de passe :** mot de passe de l'utilisateur, que vous avez obtenu lors de la création de l'utilisateur sur le portail OVH.
    - **Remarque : Il est nécessaire d'avoir créé un projet Public Cloud, c'est un prérequis indispensable. Si vous ne disposez pas de projet veuillez suivre ce guide (lien ci-dessous). Il est indiqué comment créer votre premier projet Public Cloud.**<br></br>
    [https://docs.ovh.com/fr/public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project/](https://docs.ovh.com/fr/public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project/)
    - **Version :** Ce champ correspond à la valeur de la variable OS_IDENTITY_API_VERSION du fichier OpenStack téléchargé.
    - **Région par défaut :** Région par défaut à attacher à ce projet

## Orange Flexible Engine

Pour configurer un identifiant Cloud de connexion UIC à une infrastructure Orange Flexible Engine, vous avez besoin des paramètres suivants :

- **Un identifiant de compte entreprise** (identifiant au format OCBXXXXXXX)
- **Un identifiant** d'utilisateur_,_
- **Le mot de passe** de l'utilisateur

Dans le reste de ce chapitre, nous considérons que vous êtes familier avec l'environnement du Cloud Orange Flexible Engine et que vous avez déjà un compte entreprise créé dans ce Cloud.

### Configurer l'analyse de facturation

Pour accéder aux données de votre contrat et particulièrement aux données de consommation et aux factures _Flexible Engine_, vous pouvez souscrire au service _ **Cloud Store Customer Space,** _ qui permet la gestion des données de votre contrat par API. Cet API requiert trois paramètres :

- Un identifiant associé à l'application, appelé « identifiant de client »,

- Un code secret partagé entre l'application et le serveur d'authentification Orange,
- Un jeton d'API fourni par le service _ **Cloud Store Customer Space** _

Pour obtenir ces paramètres il faut enregistrer l'application UIC via le portail _**Orange Developer (https://developer.orange.com/)**_. Cet enregistrement s'effectue en plusieurs étapes :

**1.** Inscrivez-vous puis authentifiez-vous sur le portail _**Orange Developer**_,
**2.** Cliquez sur le bouton «My apps»

![Image](/img_fr/img_UIC_Cred_Fournisseur/image021.png#bordered)

**3.** Créez une application à l'aide du formulaire « Create new application », voici un exemple

![Image](/img_fr/img_UIC_Cred_Fournisseur/image022.png#bordered)

**4.** Le portail crée un identifiant d'application, un identifiant de client et un code secret :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image023.png#bordered)

Ce formulaire vous indique que vous n'avez souscrit à aucune API pour cette application. Vous pouvez cliquer sur le bouton « Add an API » pour souscrire aux API proposées :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image024.png#bordered)

**5.** Sélectionnez « Cloud Store Customer Space API », puis appuyez sur le bouton « Next », vous passez alors à l'écran suivant, vous indiquant que la souscription est soumise à validation et que vous serez informé par email de l'issue de cette validation :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image025.png#bordered)

Une fois que la souscription est acceptée, le statut de l'application est mis à jour dans le tableau des applications enregistrées, comme dans l'exemple suivant :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image026.png#bordered)

### Création d'un identifiant Cloud Flexible Engine dans UIC

Une fois que vous disposez de toutes les informations de connexion précisées dans l'introduction de ce chapitre, vous pouvez sur la plateforme _UIC_ procéder à la création d'un identifiant cloud _Flexible Engine_.

Depuis la plateforme _UIC_, sélectionnez le menu **Identifiant -> dentifiants Cloud** , la page permettant de configurer les identifiants des Cloud supportés par UIC apparaît :

- Sélectionnez le fournisseur _Flexible Engine_,
- Cliquez sur le bouton **Ajouter un identifiant** , le formulaire suivant apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image027.png#bordered)

- Complétez les informations demandées dans le formulaire.
    - **Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets).
    - **Hôte**  : Indiquez l'URL du service Identity de Flexible Engine (Ex : https://iam.eu-west-0.prod-cloud-ocb.orange-business.com),
    - **Version :** Indiquez la version de l'API,
    - **Compte Entreprise**: Indiquez l'identifiant du compte entreprise à utiliser lors la connexion, (format OCBxxxx)
    - **Identifiant**: Indiquez l'identifiant de connexion au service d'authentification,
    - **Mot de passe**: Indiquez le mot de passe associé à l'identifiant de connexion,
    - **Régions à activer :** Choisissez les régions à activer pour cet identifiant,
    - **Région par défaut :** Choisissez une région (facultative)
    - **Proxy**  : Indiquez l'URL du proxy (facultatif) au format suivant : https://user:password@host:port

## Amazon Web Services

Pour configurer un identifiant Cloud de connexion UIC à une infrastructure AWS, vous avez besoin des paramètres suivants :

- Une clé d'accès
- Une clé secrète

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l'étape de configuration de ces paramètres dans UIC, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l'environnement AWS, vous pouvez obtenir ces informations en vous connectant sur le portail de gestion du Cloud AWS à l'adresse [https://console.aws.amazon.com/](https://console.aws.amazon.com/) en tant qu'administrateur de votre abonnement (ou en tant qu'utilisateur ayant des privilèges suffisants sur le compte).

Si vous n'êtes pas familier avec l'environnement AWS, vous pouvez consulter les paragraphes suivants pour découvrir comment créer ou obtenir les identifiants AWS cités ci-dessus.

### Création d'une stratégie
Connectez-vous sur le site _AWS_, indiquez votre login utilisateur, mot de passe root/administrateur.

La page d'accueil _AWS_ s'affiche, depuis le service **Management des Identités et des Accès (IAM)**, sélectionnez l'item **Stratégies**.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image028.png#bordered)

- Cliquez sur le bouton **Créer une stratégie**., la page suivante apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image029.png#bordered)

- Sélectionnez l'onglet JSON, puis collez le json ci-dessous :
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "iam:GetUser",
        "iam:GetPolicy",
        "iam:GetRole",
        "iam:ListRoles",
        "iam:CreateRole",
        "iam:AttachRolePolicy",
        "iam:PutRolePolicy",
        "iam:CreatePolicy",
        "organizations:ListParents",
        "organizations:ListAccounts",
        "sts:AssumeRole",
        "ce:GetSavingsPlansPurchaseRecommendation",
        "ce:GetCostAndUsage",
        "ce:GetReservationPurchaseRecommendation",
        "ce:GetReservationUtilization",
        "ce:GetDimensionValues",
        "ce:GetSavingsPlansUtilizationDetails",
        "ce:GetAnomalySubscriptions",
        "ce:GetReservationCoverage",
        "ce:GetAnomalyMonitors",
        "ce:GetUsageForecast",
        "ce:DescribeCostCategoryDefinition",
        "ce:GetSavingsPlansCoverage",
        "ce:GetRightsizingRecommendation",
        "ce:GetCostAndUsageWithResources",
        "ce:GetSavingsPlansUtilization",
        "ce:GetAnomalies",
        "ce:ListCostCategoryDefinitions",
        "ce:GetCostForecast",
        "ce:GetTags",
        "budgets:*",
        "pricing:*",
        "sns:*",
        "ec2:*",
        "gamelift:DescribeEC2InstanceLimits",
        "elasticloadbalancing:*",
        "autoscaling:*",
        "cloudwatch:ListMetrics",
        "cloudwatch:PutMetricAlarm",
        "cloudwatch:DescribeAlarms"
      ],
      "Resource": "*"
    }
  ]
}
```
- Cliquer sur le bouton **Examiner une stratégie** , l'écran suivant s'affiche :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image030.png#bordered)

- Saisissez le _Nom_ et la _Description_ de la stratégie.
- Cliquez sur le bouton **Créer une stratégie** , l'écran suivant apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image031.png#bordered)

- Cliquez sur la stratégie **uic_strategie2** , pour afficher ses détails :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image032.png#bordered)

Pour afficher le billing d'AWS sur la plateforme UIC, nous avons besoin de créer une autre stratégie qu'on va nommé **« uicBillingViewAccess »**.

- Cliquez sur le bouton **Créer une stratégie**., puis collez le json ci-dessous :
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "aws-portal:ViewAccount",
        "aws-portal:ViewBilling",
        "aws-portal:ViewPaymentMethods",
        "aws-portal:ViewUsage"
      ],
      "Resource": [
        "*"
      ],
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
```
![Image](/img_fr/img_UIC_Cred_Fournisseur/image033.png#bordered)

- Cliquer sur le bouton **Examiner une stratégie** , l'écran suivant s'affiche :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image034.png#bordered)

- Saisissez le _Nom_ suivant pour la stratégie : **uicBillingViewAccess**
- Puis cliquez sur le bouton **Créer une stratégie**

### Activer les accès aux données de facturation

Vous pouvez accorder aux utilisateurs IAM et aux utilisateurs fédérés avec des rôles les autorisations nécessaires pour accéder aux informations de facturation. Cela inclut l'accès aux pages **Paramètres du compte** , **Modes de paiement** et **Rapport**. Vous définissez les utilisateurs et les rôles autorisés à consulter les informations de facturation en créant des stratégies IAM.

Connectez-vous sur le site _AWS_, indiquez votre login utilisateur (ayant les droits d'administration de votre compte (root/administrateur)), entrez le mot de passe de l'utilisateur.

La page d'accueil _AWS_ s'affiche. Dans l'onglet haut à droite, cliquez sur **Mon compte.**

Voir l'image ci-dessous

![Image](/img_fr/img_UIC_Cred_Fournisseur/image035.png#bordered)

Defilez vers le bas puis cliquez sur l' **Accès des utilisateurs et des rôles IAM aux données de facturation,** puis cochez **Activer l'accès IAM :**

![Image](/img_fr/img_UIC_Cred_Fournisseur/image036.png#bordered)

Cliquez sur le bouton **Mettre à jour.**

Après cette modification, vous pouvez ajouter la première stratégie créée précédemment «  **uic_strategie2 »** aux utilisateurs de votre choix .

### Création d'un Utilisateur

#### Processus de création

Connectez-vous à la console d'administration de AWS ouvrez la console IAM à l'adresse [https://console.aws.amazon.com/iam/](https://console.aws.amazon.com/iam/).

Dans le panneau de navigation, choisissez **Users (Utilisateurs)**, puis **Add user (Ajouter un utilisateur).**

![Image](/img_fr/img_UIC_Cred_Fournisseur/image037.png#bordered)

- La page suivante apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image038.png#bordered)

- Entrez dans la zone **Nom d'utilisateur**  le nom de l'utilisateur à créer,
- Sélectionnez le **type d'accès AWS** souhaité. Pour UIC il est nécessaire d'autoriser un accès par programmation.
- Cliquez sur le bouton **Suivant : Autorisations** , l'écran suivant apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image039.png#bordered)

- Cochez la (les) stratégie(s) que vous souhaitez attacher à l'utilisateur,
- Sélectionnez le bouton **Attacher directement les stratégies existantes** pour réaliser les attachements.

#### Définition d'une limite d'autorisations

Il s'agit d'une fonction avancée utilisée pour déléguer la gestion des autorisations à d'autres utilisateurs. Pour contrôler les autorisations maximales d'un utilisateur, il faut définir une limite d'autorisations.

- Cochez **Utiliser**  **une limite d'autorisations pour contrôler les autorisations user maximales** , puis sélectionnez la stratégie créée, !![Image](/img_fr/img_UIC_Cred_Fournisseur/image040.png#bordered)

- Cliquez sur le bouton **Suivant : Balises** (l'ajout de balises est facultatif), la page suivante apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image041.png#bordered)

- Cliquez sur le bouton **Suivant : Vérification** , la page ci-dessous apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image042.png#bordered)

- Cliquez sur le bouton **Créer un utilisateur** , le message suivant apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image043.png#bordered)

- Cliquez sur **Afficher (ID de clé d'accès)** puis copier/coller la dans l'interface UIC ou dans un fichier de votre choix,
- Cliquez sur **Afficher (clé d'accès secrète)** puis copier/coller la, dans l'interface UIC ou dans un fichier de votre choix,
- Vous pouvez également cliquer sur le bouton **Télécharger.csv** afin de télécharger le fichier qui contient l'ID de clé d'accès et la clé secrète (rootkey.csv).
- Enregistrez le fichier dans un emplacement sécurisé.

### Récupérer des identifiants AWS (utilisateur existant)

Authentifiez-vous sur la plateforme AWS [Management Console](https://console.aws.amazon.com/).

- Saisissez le nom de votre compte dans la zone prévue à cet effet,

![Image](/img_fr/img_UIC_Cred_Fournisseur/image044.png#bordered)

- Choisissez  **Mes identifiants de sécurité** , la page suivante apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image045.png#bordered)

- Sélectionnez l'onglet **Informations d'identification AWS IAM**.
- Cliquez sur le bouton  **Créer une clé d'accès** , si cette fonction est désactivée, vous devez supprimer l'une des clés d'accès existantes avant de pouvoir créer une nouvelle clé.

Pour plus d'informations, consultez [Limites des objets d'entité IAM ](https://docs.aws.amazon.com/fr_fr/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entities)dans le IAM Guide de l'utilisateur.

**Remarque : Un avertissement indique qu'il s'agit de la seule fois où vous serez en mesure d'afficher ou de télécharger la clé d'accès secrète. Vous ne pourrez pas la récupérer ultérieurement (vous pouvez créer de nouvelles clés d'accès à tout moment).**

- Choisissez Afficher la clé d'accès pour copier l'ID de clé d'accès et la clé secrète à partir de la fenêtre de votre navigateur et les coller à un autre emplacement.
- Choisissez  **Télécharger le fichier .csv** , il contient un fichier de clé pour télécharger le fichier rootkey.csv qui contient l'ID de clé d'accès et la clé secrète. Enregistrez le fichier dans un emplacement sécurisé.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image046.png#bordered)

### Configuration d'un identifiant Cloud AWS dans UIC
Depuis la plateforme UIC, menu **\<Compte:Utilisateur\> ->Identifiants Cloud - >AWS** ,

![Image](/img_fr/img_UIC_Cred_Fournisseur/image047.png#bordered)

- Cliquez sur le bouton **Ajouter un identifiant** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image048.png#bordered)

- Complétez les zones ci-dessous :
    - **Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets).
    - **Clé d'accès**  : Saisissez la clé d'accès (Ex : ACCESSKEYAWSEXAMPLE)
    - **Clé secrète**  : Saisissez la clé secrète (Ex : SecretAWSEXAMPLEKEY).
    - **Explorateur des coûts**  : Cochez la case si vous souhaitez activer l'explorateur de coûts,
    - **Régions à activer**  : Sélectionnez les régions à activer pour cet identifiant,
    - **Région** par défaut : Choisissez une région par défaut (Ex : eu-west-1 – Irlande) que vous souhaitez associer à cet identifiant.
    - **Proxy**  : Indiquez l'URL du proxy (facultatif)au format suivant : https://user:password@host:port

## Google Cloud Platform
Pour configurer un identifiant Cloud de connexion UIC à une infrastructure Google Cloud Platform (nommé GCP par la suite), vous avez besoin de préciser l'emplacement et le nom du fichier contenant les paramètres nécessaires à cette connexion.

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l'étape de configuration de ces paramètres dans UIC, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l'environnement GCP, vous pouvez obtenir le fichier contenant les paramètres de compte et de projet en vous connectant sur le portail de gestion GCP, par exemple à l'adresse [https://console.cloud.google.com/](https://console.cloud.google.com/) en tant qu'administrateur de votre abonnement.

Si vous n'êtes pas familier avec l'environnement GCP, vous pouvez consulter les paragraphes suivants pour découvrir comment créer un nouveau projet et télécharger le fichier de paramètres nécessaire à la configuration de l'identifiant UIC.

### Créer un Projet

Pour créer un nouveau projet sur le Cloud GCP connectez-vous sur un compte _GCP,_ en utilisant le portail [https://console.cloud.google.com](https://console.cloud.google.com/).

- Authentifiez-vous puis sélectionnez le menu de navigation  **IAM et administration -> Gérer les ressources** ,

![Image](/img_fr/img_UIC_Cred_Fournisseur/image049.png#bordered)

La page suivante apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image050.png#bordered)

- Cliquez sur le bouton **+ Créer un Projet** , la page suivante apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image051.png#bordered)

- Entrez le Nom du projet,
- Cliquez sur le bouton **Créer** , le projet est créé et son nom apparaît dans le bandeau bleu du portail, comme indiqué ci-dessous.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image052.png#bordered)

- Utilisez le menu déroulant (My Project 2692 ) pour sélectionner le nouveau projet
- Sélectionnez le menu de navigation -> **API et Services** -> **Identifiants** , la page des identifiants apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image053.png#bordered)

- Cliquez sur le bouton **Créer des identifiants** ,
- Cliquez sur **Créer des identifiants -> Clé de compte de service** :

La page suivante apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image054.png#bordered)

- Saisissez Nom du compte de service puis cliquez sur **créer**

![Image](/img_fr/img_UIC_Cred_Fournisseur/image055.png#bordered)

- Sélectionnez le menu déroulant **Rôle -> Project -> Lecteur** , puis cliquez sur **continuer**  :

L'étape 3 « Autoriser les utilisateurs à accéder à ce compte de service » étant facultatif

![Image](/img_fr/img_UIC_Cred_Fournisseur/image056.png#bordered)

- Cliquez sur OK pour créer le compte de service, la page des identifiants apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image057.png#bordered)

- Cliquez sur le compte de service créer pour voir les détails du compte :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image058.png#bordered)

- Cliquez sur le bouton **Ajouter une clé -> Créer une clé**
- Choisir JSON come Type de clé.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image059.png#bordered)

La console GCP vous affiche la boite de dialogue suivante :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image060.png#bordered)

Voici un exemple de contenu du fichier 'uic-prod-8dc4eabf97b2.json'' :
```json
{

"type": "service_account",
"project_id": "trusty-splice-237112",
"private_key_id": "1af328dffb5f1d9acbc2c5e3ff03e73aec60f0e1",
"private_key": "-----BEGIN PRIVATE KEY-----…………………………………-----END PRIVATE KEY-----\n",
"client_email": "uiccompteservice@trusty-splice-237112.iam.gserviceaccount.com",
"client_id": "104335546672827650901",
"auth_uri": "https://accounts.google.com/o/oauth2/auth",
"token_uri": "https://oauth2.googleapis.com/token",
"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/uiccompteservice%40trusty-splice-237112.iam.gserviceaccount.com"
}
```
Pour lister les API créées, sélectionnez le menu de navigation  **Tableau de Bord -> API**, l'écran suivant apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image061.png#bordered)

- Cliquez sur **+ Activer des API et des Services**, la page ci-dessous s'affiche :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image062.png#bordered)

- Choisissez le service **Compute Engine API**, la bibliothèque d'API apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image063.png#bordered)

- Cliquez sur le bouton **Activer,** le service Compute Engine API est activé.

### Configurer l'exportation des données de facturation vers BigQuery

Un compte de facturation Cloud sert à déterminer qui assume les frais pour un ensemble de ressources donné. Il peut être associé à un ou plusieurs projets. Les frais d'utilisation du projet sont imputés au compte de facturation Cloud associé.

Si vous êtes l'administrateur de facturation d'un seul compte de facturation Cloud, les nouveaux projets que vous créez sont automatiquement associés à ce compte de facturation Cloud. Si vous créez un compte de facturation Cloud ou si vous avez accès à plusieurs comptes, vous pouvez modifier le compte sur lequel un projet est facturé

Exporter des données Cloud Billing vers BigQuery

Créer un projet dans lequel les données Cloud Billing seront stockées, et activer la facturation sur le projet (si ce n'est pas déjà fait)

Pour afficher le compte de facturation Cloud associé à un projet, procédez comme suit :

- 1. Connectez-vous à Google Cloud Console.
- 2. Sélectionnez votre projet dans la liste déroulante située en haut de la page Google Cloud Console.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image064.png#bordered)

- 3. Ouvrez le  **menu de navigation**   ![Image](/img_fr/img_UIC_Cred_Fournisseur/image065.png#bordered) de la console, puis sélectionnez  **Facturation**.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image066.png#bordered)

Copiez l'ID du compte de facturation. Cela ressemblera à quelque chose comme 009B77-XXXXAE-XXXX8A

**Si la facturation n'est PAS activée** , procédez comme suit :

- Si la facturation n'est pas activée sur le projet, une fenêtre pop-up s'affiche avec un texte indiquant :
  - _"Ce projet n'est pas associé à un compte de facturation"_
  - Pour activer la facturation sur le projet, sélectionnez  **Associer un compte de facturation**.
  - Pour afficher la liste des comptes de facturation de votre organisation, sélectionnez  **Gérer les comptes de facturation**.

#### Configurer les autorisations sur le projet et sur le compte de facturation Cloud

Pour activer et configurer l'exportation des données Google Cloud Billing vers un ensemble de données BigQuery, vous devez disposer des autorisations suivantes :

- Le rôle  **Administrateur de compte de facturation**  pour le compte de facturation Cloud cible
- Le rôle  **Utilisateur de BigQuery**  pour le projet Cloud qui contient l'ensemble de données BigQuery qui sera utilisé pour stocker les données Cloud Billing

En outre, pour activer et configurer l'exportation des données tarifaires de Cloud Billing, vous devez disposer des autorisations suivantes :

- **Administrateur BigQuery**  pour le projet Cloud contenant l'ensemble de données BigQuery qui sera utilisé pour stocker les données de facturation de Cloud Billing
- Autorisation resourcemanager.projects.update pour le projet sur le cloud contenant l'ensemble de données cible. Ces autorisations sont incluses dans le rôle roles/editor.

Activer l'API du service de transfert de données BigQuery (obligatoire pour exporter vos données de tarification)

##### Créer un ensemble de données BigQuery dans lequel stocker les données.

Créer un ensemble de données pour héberger les données de facturation

- Assurez-vous que vous êtes dans le projet que vous avez créé à l'étape 1
- Ouvrez le  **menu de navigation**   ![Image](/img_fr/img_UIC_Cred_Fournisseur/image065.png#bordered) de la console, puis sélectionnez  **Big Data\> BigQuery**
- Cliquez sur le nom de votre projet dans le menu de gauche
- Cliquez sur + **CREATE DATA SET**
![Image](/img_fr/img_UIC_Cred_Fournisseur/image067.png#bordered)
- Utilisez les paramètres suivants:
  - **Data set ID** : gcp_billing_export
  - **Data location** : sélectionner un emplacement.
  - **Default table expiry** : jamais
- Cliquez sur  **Create data set**

Étape 3: activer l'exportation de la facturation vers BigQuery

Voici les étapes pour exporter vos données de facturation vers BigQuery (vous aurez besoin de privilèges d'administrateur de facturation):

- Accédez à la  **facturation**
- Sélectionnez le compte de facturation pour lequel vous souhaitez exporter les données
- Cliquez sur  **Exportation de la facturation**
- Cliquez sur  **MODIFIER LES PARAMÈTRES**
- Utilisez les paramètres suivants:
  - **Projets**  : sélectionnez le projet que vous avez créé à l'étape 1
  - **Ensemble de données d'exportation de la facturation**  : sélectionnez l'ensemble de données que vous avez créé à l'étape 2. À ce stade, vos paramètres doivent ressembler à:
![Image](/img_fr/img_UIC_Cred_Fournisseur/image068.png#bordered)
- Cliquez sur  **Enregistrer**

Vous avez maintenant correctement associé les données de votre compte de facturation à BigQuery.

Ne vous inquiétez pas si vous ne voyez pas encore de données, car il faudra quelques heures pour que les données commencent à se remplir.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image069.png#bordered)

Ne vous inquiétez pas si vous ne voyez pas encore de données, car il faudra quelques heures pour que les données commencent à se remplir.

Activer l'exportation Cloud Billing des données de coût et des données de tarification à écrire dans l'ensemble de données

### Configurer un identifiant Cloud Google dans UIC

Depuis Google Cloud Platform, vous avez récupéré le fichier JSON, il faut donc créer l'identifiant Cloud Google (credential) sur la plateforme _UIC_. Connectez-vous sur UIC, sélectionnez le menu **Compte:Utilisateur -> Identifiants Cloud -> Google Cloud Platform** , vous accédez à l'ensemble des paramètres.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image070.png#bordered)

- Cliquez sur le bouton Ajouter un identifiant, le formulaire suivant apparaît :
    ![Image](/img_fr/img_UIC_Cred_Fournisseur/image071.png#bordered)
    - **Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets).
    - **Identifiant**: A l'aide du bouton **Parcourir…**, attachez le fichier JSON téléchargé depuis Google Cloud Platform (Ex : My Project 2692-1af328dffb5f.json)
    - **Régions à activer :** Sélectionnez les régions à activer pour cet identifiant,
    - **Région par défaut :** Sélectionnez une région à l'aide du menu déroulant,
    - **Proxy**  : indiquez l'URL du proxy (facultatif)au format suivant : https://user:password@host:port

- Cliquez sur le bouton **Ajouter** , l'identifiant est créé.

#### Accorder des autorisations BigQuery à un compte de service

Lorsqu'une identité appelle une API Google Cloud, BigQuery exige qu'elle dispose des autorisations appropriées pour accéder à la ressource. Vous pouvez accorder des autorisations en attribuant des rôles à un utilisateur, à un groupe ou à un compte de service.

##### Accès en lecture aux données d'un projet

Dans l'exemple suivant nous allons accorder l'accès à un projet nommé **uic-prod** qui dispose d'un compte de service ** uicprod-service-account@uic-prod.iam.gserviceaccount.com**

- Ouvrez le menu de navigation  ![Image](/img_fr/img_UIC_Cred_Fournisseur/image065.png#bordered) de la console, puis sélectionnez **API et services -> Identifiant**
- Copier E-mail du compte de service.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image072.png#bordered)

**Attribuez le rôle prédéfini lecture de données BigQuery à un membre d'un projet**

- Ouvrez le projet avec lequel l'exportation de la facturation a été réalisée
- Ouvrez le menu de navigation  ![Image](/img_fr/img_UIC_Cred_Fournisseur/image065.png#bordered) de la console, puis sélectionnez **IAM et admin -> IAM**
- Cliquez sur **AJOUTER**

![Image](/img_fr/img_UIC_Cred_Fournisseur/image073.png#bordered)

Le volet suivant apparait

![Image](/img_fr/img_UIC_Cred_Fournisseur/image074.png#bordered)

- **Nouveaux membres :** coller le mail du compte de service du projet **uic-prod**
- **Rôle :** choisir BigQuery Lecture de données BigQuery
- Cliquez sur **Enregistrer**

## OUTSCALE

Pour configurer un identifiant Cloud de connexion _UIC_ à une infrastructure du cloud public _Outscale_, vous avez besoin des paramètres _Outscale_ suivants :

- Identifiant du compte _OUTSCALE_,
- Clé d'accès,
- Clé secrète,
- Région par défaut,

Vous avez également besoin des paramètres suivants liés à l'emplacement réseau de la plateforme UIC :

- Les paramètres du proxy si vous en utilisez un,

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l'étape de configuration de ces paramètres dans _UIC_, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l'environnement _Outscale_, vous pouvez créer ou obtenir les paramètres spécifiques au Cloud _Outscale_ en vous connectant sur le tableau de bord de votre infrastructure _Outscale_, en tant qu'administrateur de votre compte.

Si vous n'êtes pas familier avec l'environnement _Outscale_, vous pouvez consulter les paragraphes suivants pour découvrir comment créer ou obtenir les identifiants _Outscale_ cités ci-dessus.


### Création d'un compte sur le Cloud Outscale

Dans la barre supérieure du [site officiel de _OUTSCALE_](https://fr.outscale.com/), cliquez sur l'icône de connexion en haut à droite,

![Image](/img_fr/img_UIC_Cred_Fournisseur/image075.png#bordered)

Cliquez sur le menu **Inscription** , La page d'inscription apparaît. Remplissez les champs affichés et suivez les instructions du formulaire pour créer votre compte et obtenir les paramètres prérequis par UIC (Identifiant du compte, clé d'accès, clé secrète et région par défaut).


### Obtention des paramètres du compte Cloud Outscale

Dans la barre supérieure du [site officiel de _OUTSCALE_](https://fr.outscale.com/), cliquez sur l'icône de connexion en haut à droite,

![Image](/img_fr/img_UIC_Cred_Fournisseur/image075.png#bordered)

Cliquez sur le menu **Connexion** , La page de connexion apparaît. Remplissez les champs affichés pour vous authentifier.

Une fois authentifié, placez le curseur de la souris sur votre nom. Un menu déroulant apparaît : Pour obtenir des informations sur votre compte, cliquez sur **Profil et access keys**.
Une page avec vos informations personnelles apparaît. Tous les attributs associés à votre compte sont listés. Recopiez ceux qui sont prérequis par UIC (Identifiant du compte, clé d'accès, clé secrète et région par défaut).


### Création d'un identifiant Cloud Outscale dans UIC

Une fois que vous disposez de toutes les informations de connexion précisées dans l'introduction de ce chapitre, vous pouvez sur la plateforme _UIC_ procéder à la création d'un identifiant Cloud _Outscale_.

Depuis la plateforme _UIC_, sélectionnez le menu **<Compte:Utilisateur> -> Identifiants Cloud**, la liste des clouds déclarés apparaît.

- Sélectionnez le cloud _Outscale_,
- Cliquez sur le bouton **Ajouter un identifiant** , le formulaire suivant apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image076.png#bordered)

- Complétez les informations demandées dans le formulaire.
    - **Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets),
    - **Clé d'accès**  : Saisissez la clé d'accès (Ex : AKIAIOSFODNN7EXAMPLE),
    - **Clé secrète**  : Saisissez la clé secrète (Ex : wJalrXUtnFEMI/…/bPxRfiCYEXAMPLEKEY),
    - **ID du compte Outscale** : Saisissez l'identifiant du compte, ce champ est facultatif,
    - **Région** par défaut : Choisissez une région (Ex : eu-west -2 – Paris) que vous souhaitez associer à cet identifiant,
    - **Proxy**  : Indiquez l'URL du proxy au format suivant : ```https://user:password@host:port```, ce champ est facultatif si vous n'utilisez pas de proxy,

- Cliquez sur le bouton **Ajouter**. Le message de confirmation suivant apparaît : 

![Image](/img_fr/img_UIC_Cred_Fournisseur/image077.png#bordered)


## Oracle Cloud Infrastructure

Pour configurer un identifiant Cloud de connexion _UIC_ à une infrastructure du cloud public _Oracle_, vous avez besoin des paramètres suivants:

- Identifiant de l'utilisateur
- Mot de passe de l'utilisateur
- Identifiant du tenant
- Clé privée
- Empreinte numérique
- Passphrase
- Région à activer
- Région par défaut

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l'étape de configuration de ces paramètres dans _UIC_, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l'environnement _Oracle_, vous pouvez créer ou obtenir les paramètres spécifiques au Cloud _Oracle_ en vous connectant sur le tableau de bord de votre infrastructure _Oracle_, en tant qu'administrateur de votre compte.

Si vous n'êtes pas familier avec l'environnement _Oracle_, vous pouvez consulter les paragraphes suivants pour découvrir comment créer ou obtenir les identifiants _Oracle_ cités ci-dessus.


### Création d'un compte sur le Cloud Oracle

Il existe plusieurs moyens de création de compte chez Oracle Cloud Infrastructure, parmi eux :

- Contactez un commercial Oracle qui vous fournira des renseignements relatifs aux options de tarification disponibles pour votre entreprise.
- Accédez à [https://www.oracle.com/cloud/free/](https://www.oracle.com/cloud/free/) et inscrivez-vous à l'_essai gratuit Oracle_. Oracle vous enverra un courriel de bienvenue contenant les instructions de première connexion à la console. Rien ne vous est facturé, sauf si vous choisissez d'effectuer une  **mise à niveau vers une version payante**.


### Création des OCID et des clés

Pour préparer les pré-requis de connexion au Cloud Oracle, procédez comme suit :

- Créez un utilisateur dans IAM pour la personne ou le système qui appellera l'API, et placez-le dans au moins un groupe IAM disposant des droits d'accès souhaités. Reportez-vous à la documentation Oracle pour les détails. Vous pouvez ignorer cette étape si l'utilisateur existe déjà.

Obtenez les éléments suivants :

- Paire de clés RSA  **au format PEM**  (2 048 bits au minimum). Reportez-vous au paragraphe [**Génération d'une clé de signature API**](https://docs.oracle.com/fr-fr/iaas/Content/API/Concepts/apisigningkey.htm#two).
- Empreinte de la clé publique. Reportez-vous au paragraphe **9.2.2** Procédure d'obtention de l'empreinte de la clé.
- OCID de la location et OCID de l'utilisateur. Reportez-vous au paragraphe **9.2.3Emplacement de l'OCID de la location et de l'OCID de l'utilisateur.**
- Téléchargez la clé publique à partir de la paire de clés dans la console. Reportez-vous au paragraphe **9.2.4Procédure de téléchargement de la clé publique**.

#### Génération d'une clé de signature API

Le processus de génération ci-dessous est valide pour Linux et Mac OS/X. Utilisez les commandes [OpenSSL](http://www.openssl.org/) suivantes pour générer la paire de clés au format PEM requis.

- Si vous ne l'avez pas déjà fait, créez un répertoire .oci où stocker les informations d'identification :
```bash
mkdir ~/.oci
```
- Générez la clé privée à l'aide de l'une des commandes suivantes.
  - Pour générer la clé, cryptée avec une phrase secrète fournie lorsque vous y êtes invité, procédez comme suit :
```bash
openssl genrsa -out ~/.oci/oci_api_key.pem -aes128 2048
```
- Pour générer la clé sans phrase de passe, procédez comme suit (déconseillé):
```bash
openssl genrsa -out ~/.oci/oci_api_key.pem 2048
```
- Modifiez le droit d'accès au fichier pour vous assurer que vous ne pouvez lire que le fichier de clés privées :
```bash
chmod go-rwx ~/.oci/oci_api_key.pem
```
- Générez la clé publique à partir de votre nouvelle clé privée :
```bash
openssl rsa -pubout -in ~/.oci/oci_api_key.pem -out ~/.oci/oci_api_key_public.pem
```
- Vous devrez coller la valeur dans la console oracle ultérieurement.

Vos demandes d'API seront signées avec votre clé privée et Oracle utilisera la clé publique pour vérifier l'authenticité de la demande. Vous devez télécharger la clé publique dans IAM (instructions dans la documentation Oracle).

#### Procédure d'obtention de l'empreinte de la clé

Vous pouvez obtenir l'empreinte de la clé en utilisant la commande OpenSSL suivante.
```bash
openssl rsa -pubout -outform DER -in ~/.oci/oci_api_key.pem | openssl md5 -c
```
Lorsque vous téléchargez la clé publique dans la console Oracle, l'empreinte y est automatiquement affichée. Elle se présente comme suit : 12:34:56:78:90:ab:cd:ef:12:34:56:78:90:ab:cd:ef

#### Emplacement de l'OCID de la location et de l'OCID de l'utilisateur

Les deux OCID se trouvent dans la console, qui se situe à l'adresse [https://console.us-ashburn-1.oraclecloud.com](https://console.us-phoenix-1.oraclecloud.com/). Si vous ne disposez pas d'identifiant de connexion ni de mot de passe pour accéder à la console, contactez un administrateur.

##### CID de la location

Obtenez l'OCID de location à partir d'Oracle Cloud Infrastructure Console sur la page  **Détails de location**  :

- Ouvrez le menu de navigation. Sous **Gouvernance et administration**, accédez à  **Administration**  et cliquez sur  **Détails de location**.
- L'OCID de location est affiché sous  **Informations sur la location**. Cliquez sur  **Copier**  pour le copier dans le presse-papiers.

##### OCID de l'utilisateur

Obtenez l'OCID de l'utilisateur dans la console sur la page des détails de l'utilisateur. Pour accéder à cette page, procédez comme suit :

- Si vous êtes connecté en tant qu'utilisateur :
  - Ouvrez le menu  **Profil**  ( ![Image](/img_fr/img_UIC_Cred_Fournisseur/image078.png#bordered)), puis cliquez sur  **Paramètres utilisateur**.
- Si vous effectuez cette opération en tant qu'administrateur pour un autre utilisateur : ouvrez le menu de navigation. Sous Gouvernance et administration, accédez à Identité et cliquez sur  **Utilisateurs**. Sélectionnez l'utilisateur dans la liste.
- OCID utilisateur est affiché sous  **Informations utilisateur**. Cliquez sur  **Copier**  pour le copier dans le presse-papiers.

#### Procédure de téléchargement de la clé publique

Vous pouvez télécharger la clé publique PEM dans la console, qui se situe à l'adresse [https://console.us-ashburn-1.oraclecloud.com](https://console.us-phoenix-1.oraclecloud.com/). Si vous ne disposez pas d'identifiant de connexion ni de mot de passe pour accéder à la console, contactez un administrateur.

- Ouvrez la console et connectez-vous.
- Affichez les détails de l'utilisateur qui appellera l'API avec la paire de clés :
- Si vous êtes connecté en tant qu'utilisateur :
  - Ouvrez le menu  **Profil**  ( ![Image](/img_fr/img_UIC_Cred_Fournisseur/image078.png#bordered)), puis cliquez sur  **Paramètres utilisateur**.
- Si vous effectuez cette opération en tant qu'administrateur pour un autre utilisateur :
  - Ouvrez le menu de navigation. Sous Gouvernance et administration, accédez à Identité et cliquez sur  **Utilisateurs**. Sélectionnez l'utilisateur dans la liste.
- Cliquez sur  **Ajouter une clé publique**.
- Collez le contenu de la clé publique PEM dans la boîte de dialogue et cliquez sur  **Ajouter**.

L'empreinte de la clé s'affiche (par exemple, 12:34:56:78:90:ab:cd:ef:12:34:56:78:90:ab:cd:ef).

Une fois que vous avez téléchargé la première clé publique, vous pouvez également utiliser l'opération d'API [UploadApiKey](https://docs.oracle.com/iaas/api/#/en/identity/latest/ApiKey/UploadApiKey) pour télécharger des clés supplémentaires. Un utilisateur peut avoir jusqu'à trois paires de clés d'API. Dans une demande d'API, spécifiez l'empreinte de la clé afin d'indiquer la clé que vous utilisez pour signer la demande.


### Stratégie IAM requise

Pour utiliser Oracle Cloud Infrastructure, vous devez disposer du type d'accès requis dans une  **stratégie**  écrite par un administrateur, que vous utilisiez la console ou l'API REST avec un kit SDK, une interface de ligne de commande ou un autre outil. Si vous essayez d'effectuer une action et qu'un message indique que vous n'y êtes pas autorisé, vérifiez auprès de l'administrateur le type d'accès qui vous a été accordé et le compartiment dans lequel vous devez travailler.

D'une manière générale pour permette à UIC d'avoir accès à tous les services OCI, il peut être judicieux de configurer un utilisateur ayant un rôle d'administration. En revanche pour permettre à des utilisateurs d'accéder uniquement à certains services, il sera nécessaire d'employer des stratégies propres à chacun de ces services.

#### Accès aux budgets

Pour accéder à la gestion des budgets, vous devez être membre d'un groupe qui peut utiliser " **usage-budgets**" dans la location (compartiment racine) ou être en mesure d'utiliser toutes les ressources de la location. Tous les budgets sont créés dans le compartiment racine, indépendamment du compartiment qu'ils ciblent : les stratégies IAM qui accordent des autorisations de budget en dehors de la racine ne sont donc pas pertinentes.

#### Rapports sur les coûts et l'utilisation

Les états de coût et d'utilisation sont des fichiers CSV (valeurs séparées par des virgules) générés quotidiennement et stockés dans un bucket Object Storage. Les rapports sont stockés dans la région d'origine de la location. L'espace de noms Object Storage utilisé pour les rapports est bling. Le nom du bucket correspond à l'OCID de location.

Pour accéder à ces rapports, vous devez avoir les permissions nécessaires accordées par l'administrateur de compte, par exemple en définissant la politique suivante pour le groupe dont vous êtes membre :
```bash
define tenancy usage-report as _\<Tenancy OCID\>_
endorse group _\<group\>_ to read objects in tenancy usage-report
```
#### Création d'un utilisateur

##### Ajout d'un utilisateur avec des droits d'accès administrateur

L'utilisateur que vous créez dans cette tâche bénéficiera des droits d'accès administrateur complets de l'administrateur par défaut. Cela signifie que l'utilisateur dispose d'un accès complet à tous les compartiments, et qu'il peut créer et gérer l'ensemble des ressources dans Oracle Cloud Infrastructure, ainsi que d'autres services gérés via Oracle Identity Cloud Service. Vous devez disposer des droits d'accès administrateur Cloud pour effectuer cette tâche.

- Ouvrez le menu de navigation. Sous Gouvernance et administration, accédez à Identité et cliquez sur  **Fédération**.
- Cliquez sur votre fédération Oracle Identity Cloud Service. Pour la plupart des locations, la fédération est nommée  **OracleIdentityCloudService**. La page de détails du fournisseur d'identités s'affiche.
- Cliquez sur  **Créer un utilisateur IDCS**.
- Dans la boîte de dialogue  **Créer un utilisateur IDCS** , entrez les informations suivantes :
  - **Nom utilisateur :**  entrez un nom ou une adresse électronique unique pour le nouvel utilisateur. La valeur sera le nom de connexion utilisateur à la console et doit être unique pour tous les autres utilisateurs de votre location.
  - **Adresse électronique :**  saisissez l'adresse électronique de l'utilisateur. Les informations d'identification de connexion initiales seront envoyées à cette adresse électronique.
  - **Prénom :**  entrez le prénom de l'utilisateur.
  - **Nom :**  saisissez le nom de famille de l'utilisateur.
  - **Numéro de téléphone :**  entrez un numéro de téléphone (facultatif).
  - **Groupes :**  vous pouvez ignorer cette étape. Vous allez accorder des privilèges d'administrateur complets à cet utilisateur.
- Cliquez sur  **Créer**.

L'utilisateur est créé dans Oracle Identity Cloud Service. Cet utilisateur ne peut pas accéder à son compte tant qu'il n'a pas terminé les étapes de réinitialisation du mot de passe.

- Cliquez sur  **Envoyer les instructions de mot de passe par courriel**  pour envoyer le lien et les instructions sur le mot de passe à l'utilisateur. Si l'application de messagerie ne se lance pas, copiez les instructions de réinitialisation et envoyez-les manuellement par courriel à l'utilisateur.

Le lien de mot de passe est valide pendant 24 heures. Si l'utilisateur ne réinitialise pas son mot de passe dans les temps, vous pouvez générer un nouveau lien de mot de passe en cliquant sur  **Réinitialiser le mot de passe**  pour l'utilisateur.

- Cliquez sur  **Fermer**  pour fermer la boîte de dialogue. Vous revenez à la liste  **Utilisateurs**  de la page  **Détails du fournisseur d'identités**.
- Cliquez sur le nom de l'utilisateur que vous venez de créer. La page  **Détails de l'utilisateur**  s'affiche.
- Cliquez sur  **Gérer les rôles**.
- Cochez la case en regard de l'option  **Ajouter le rôle d'administrateur de compte cloud**.
- Cliquez sur  **Appliquer des paramètres de rôle**.
- Une boîte de dialogue confirme les habilitations octroyées à l'utilisateur. Pour avertir l'utilisateur de ces mises à jour, cliquez sur  **Envoyer un courriel à l'utilisateur**. Cliquez sur  **Fermer**  pour fermer cette boîte de dialogue.


### Création d'un identifiant Cloud Oracle dans UIC

Une fois que vous disposez de toutes les informations de connexion précisées dans l'introduction de ce chapitre, vous pouvez sur la plateforme _UIC_ procéder à la création d'un identifiant Cloud _Oracle_.

Depuis la plateforme _UIC_, sélectionnez le menu **<Compte:Utilisateur> -> Identifiants Cloud**, la liste des clouds déclarés apparaît.

- Sélectionnez le cloud _Oracle_,
- Cliquez sur le bouton **Ajouter un identifiant** , le formulaire suivant apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image079.png#bordered)

- Complétez les informations demandées dans le formulaire.
    - **Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets),
    - **OCID de l'utilisateur**  : l'OCID de l'utilisateur,
    - **Mot de passe**  : Saisissez le mot de passe de l'utilisateur,
    - **OCID de la location** : Saisissez l'OCID de la location,
    - **Clé privée** : Recopiez le contenu de la clé privé de connexion,
    - **Empreinte numérique** : Recopiez le contenu de l'empreinte numérique de la clé publique,
    - **Passphrase** : Recopiez la passphrase que vous avez utilisé pour la création des clés de sécurité,
    - **Régions à activer** : Sélectionnez les régions autorisées pour cet identifiant,
    - **Région par défaut** : Sélectionnez la région par défaut pour cet identifiant,
    - **Proxy**  : Indiquez l'URL du proxy au format suivant : https://user:password@host:port, ce champ est facultatif si vous n'utilisez pas de proxy,

- Cliquez sur le bouton **Ajouter**. Le message de confirmation apparaît.

## VMware vCloud

Depuis la plateforme _UIC_, vous pouvez configurer les identifiants nécessaires aux connexions à l'infrastructure vCloud. Pour ce faire, il est nécessaire d'obtenir les informations de configuration identifiant votre infrastructure vCloud (credentials) :

- Hôte de l'API vCloud
- Organisation
- Utilisateur (ayant un rôle d'administration de l'organisation)
- Mot de passe
- Version de l'API vCloud

Dans le reste de ce chapitre, nous considérons que vous maîtrisez la technologie VMware vCloud et sa terminologie et que vous avez déjà mis en place une infrastructure vCloud, avec un Hôte d'API ayant une version précise.

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer à l'étape de configuration de ces paramètres dans UIC.

Pour permettre à UIC de piloter vCloud pour le compte d'une organisation, UIC doit s'authentifier avec un utilisateur ayant un rôle d'administration sur le compte de cette organisation. Si vous souhaitez créer un tel utilisateur dans vCloud, vous pouvez suivre les instructions décrites dans le prochain paragraphe.

### Créer un utilisateur Cloud vCloud pour UIC

Dans la suite ce paragraphe, nous considérons que vous avez déjà créé une organisation vCloud à laquelle l'utilisateur sera ajouté.

Si vous avez les permissions d'administration, connectez-vous sur le compte _vCloud_ de l'organisation, sélectionnez **Administration -> Membres -> Utilisateurs** , le formulaire suivant apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image080.png#bordered)

- Saisissez les informations d'identification (nom de l'utilisateur (uicuser1), mot de passe…)
- Sélectionnez le menu Rôles disponibles pour cet utilisateur, sélectionnez ''Administrateur de l'organisation''.
- Remplissez les zones **Coordonnées** et **Quotas** (facultatives)
- Cliquez sur le bouton **OK** , l'utilisateur est créé.

### Créer un identifiant Cloud vCloud dans UIC

Une fois que vous disposez des informations nécessaires vous pouvez procéder à la création de l'identifiant (credential) sur la plateforme _UIC_. Sélectionnez le menu **<Compte:Utilisateur> -> Identifiants Cloud -> vCloud** , vous accédez à l'écran suivant :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image081.png#bordered)

- Cliquez sur le bouton **Ajouter un identifiant** , le formulaire suivant apparaît :
![Image](/img_fr/img_UIC_Cred_Fournisseur/image082.png#bordered)
- **Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets).
- **Hôte**  : Indiquez l'adresse de l'hôte vCloud (Ex : [https://api-5.vcloud.xxx](https://api-5.vcloud.xxx/))
- **Utilisateur**: Indiquez le nom de l'utilisateur qui sera utilisé pour la connexion à l'hôte vCloud
- **Mot de passe**: Indiquez le mot de passe de l'utilisateur
- **Organisation**:Nom de l'organisation à laquelle l'identifiant est attaché
- **Version de l'API**: 27.0 pour la version _vCloud Director 8.2_,
- **Proxy**  : Indiquez l'URL du proxy (facultatif)au format suivant : ```https://user:password@host:port```
- **IP visible depuis le fournisseur**:Indiquez l'adresse IP de la plateforme UIC, qui sera visible depuis l'infrastructure vCloud.

- Cliquez sur le bouton **Ajouter**.

## VMware vSphere

Pour configurer un identifiant Cloud de connexion UIC à une infrastructure VMware vSphere, vous avez besoin des paramètres suivants :

- Adresse du serveur vCenter
- Protocole de connexion
- Port de connexion
- Un nom d'utilisateur
- Le mot de passe de l'utilisateur

Dans le reste de ce chapitre, nous considérons que vous maîtrisez la technologie VMware vSphere et sa terminologie et que vous avez déjà mis en place une infrastructure vSphere, avec un serveur vCenter ayant une version supportée par UIC (la liste des versions supportées par UIC est maintenue à jour dans la boite de dialogue de configuration affichée par UIC).

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer à l'étape de configuration de ces paramètres dans UIC.

Pour permettre à UIC de piloter un domaine d'une infrastructure vSphere, UIC doit s'authentifier avec un utilisateur ayant un rôle d'administration sur ce domaine. Si vous souhaitez créer un tel utilisateur dans vSphere, vous pouvez suivre les instructions décrites dans le prochain paragraphe.

### Ajouter un utilisateur vCenter Single Sign-On

Les utilisateurs répertoriés depuis l'onglet Utilisateurs de _vSphere Web Client_ sont internes à vCenter Single Sign-On ils font partis du domaine vsphere.local.

Vous pouvez sélectionner d'autres domaines et afficher des informations sur les utilisateurs de ces domaines. Par contre vous ne pouvez pas ajouter des utilisateurs aux autres domaines dans l'interface de gestion _vCenter Single Sign-On_ de _vSphere Web Client_.

- Connectez-vous à _vSphere Web Client_ en tant qu' ```administrator@vsphere.local``` ou un autre utilisateur disposant des privilèges _vCenter Single Sign-On_.

Les utilisateurs disposant de privilèges d'administrateur de _vCenter Single Sign-On_ font partis du groupe CAAdmins.

- Cliquez sur **Accueil** -> Administration -> Single Sign-On  -> Utilisateurs et groupes.

Si vsphere.local n'est pas le domaine sélectionné, sélectionnez-le dans le menu déroulant. Vous ne pouvez pas ajouter des utilisateurs aux autres domaines.

Depuis l'onglet **Utilisateurs** , cliquez sur l'icône **Nouvel utilisateur** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image083.png#bordered)

- Saisissez un nom d'utilisateur (impossible de le modifier après sa création) et un mot de passe (il doit répondre aux exigences des règles de mot de passe du système).
- Saisissez le prénom, le nom du nouvel utilisateur (Facultatif).
- Entrez une adresse e-mail et une description pour l'utilisateur (Facultatif).
- Cliquez sur OK.

L'utilisateur nouvellement créé ne dispose initialement d'aucune autorisation pour effectuer des opérations de gestion.

### Créer un rôle personnalisé

Nous allons créer un rôle personnalisé _vCenter Server_ correspondant aux besoins de contrôle d'accès à l'environnement _Use IT Cloud_.

- Vérifiez que vous êtes connecté en tant qu'utilisateur avec des privilèges « administrateur ».
- Connectez-vous à vCenter Server avec vSphere Web Client.
- Sélectionnez **Accueil** , cliquez sur **Administration -> Rôles**.
- Cliquez sur le bouton **Créer une action de rôle (+)**, introduisez un nom au nouveau rôle.
- Sélectionner les privilèges _UIC_ ci-dessous :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image084.png#bordered)

_Banque de données :_

- Allouer espace,
- Mettre à jour fichiers de machine virtuelle,
- Mettre à jour les métadonnées de la machine virtuelle,
- Parcourir banque de données

_Dossier_

- Créer dossier,
- Déplacer dossier,
- Renommer dossier,
- Supprimer dossier,

ESX Agent Manager :

- Afficher

Inventory Data Service tagging

- Cochez l'ensemble des cases

Machine virtuelle

- Cochez l'ensemble des cases

Profile d'hôte

- Afficher

Ressource

- Attribuer une machine virtuelle au pool de ressources,
- Attribuer une vApp au pool de ressources

_Réseau_

- Assigner réseau :

_Vues de stockage_

- Afficher

_vApp_

- Cochez l'ensemble des cases
- Cliquez sur le bouton **OK**.

### Attribuer les Permissions pour UIC à l'infrastructure vSphere

Il est important d'ajouter l'utilisateur au niveau de _vCenter_ afin qu'il dispose des mêmes autorisations sur l'arborescence des objets pour accéder aux divers services.

- Attribuez le rôle créé lors de l'étape précédente (par exemple, uicRole) au nouvel utilisateur (uic1).
- Sélectionnez **Accueil -> hôte et clusters**.
- Cliquez droit sur l'icône _vCenter_ et sélectionnez **Ajouter une autorisation**.
- Cliquez sur **Ajouter** , sélectionnez le nouvel utilisateur (par exemple, uic2),

![Image](/img_fr/img_UIC_Cred_Fournisseur/image085.png#bordered)

- Cliquez sur **Ajouter**.
- Cliquez sur le bouton **OK**
- Attribuez à l'utilisateur le rôle (exemple, uicRole) que vous avez créé (plate-forme _UIC)_.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image086.png#bordered)

Dans notre exemple pour déployer sur l'infrastructure _vSphere_, nous avons autorisé les éléments suivants :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image087.png#bordered)

### Créer un identifiant Cloud vSphere dans UIC

Une fois que vous disposez de toutes les informations de connexion précisées dans l'introduction de ce chapitre, vous pouvez procéder à la création de l'identifiant (credential) sur la plateforme _UIC_.

Depuis la plateforme UIC, menu **<Compte:Utilisateur> -> Identifiants Cloud -> vSphere**, vous accédez à l'écran suivant :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image088.png#bordered)

- Cliquez sur le bouton **Ajouter un identifiant** , le formulaire suivant apparaît :
![Image](/img_fr/img_UIC_Cred_Fournisseur/image089.png#bordered)
- **Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets).
- **Hôte**  : Indiquez l'adresse de l'hôte vSphere (Ex : [192.168.71.8](https://api-5.vcloud.prologue.com/) )
- **Protocole :** Indiquez le protocole à utiliser. (Exemple : HTTPS)
- **Utilisateur**: Indiquez le nom de l'utilisateur qui sera utilisé pour la connexion à l'hôte vSphere, en précisant le domaine auquel il est rattaché (Ex : uic_user1@vsphere.prl)
- **Mot de passe**: Indiquez le mot de passe de l'utilisateur
- **Proxy**  : Indiquez l'URL du proxy (facultatif)au format suivant : ```https://user:password@host:port```
- Cliquez sur le bouton **Ajouter**.

## OpenStack

Pour configurer un identifiant Cloud de connexion UIC à une infrastructure OpenStack, vous avez besoin des paramètres suivants :

- L'adresse du serveur de connexion
- Un nom d'utilisateur
- Le mot de passe de l'utilisateur
- Le nom du projet OpenStack (ou tenant)

Dans le reste de ce chapitre, nous considérons que vous êtes familier avec l'environnement du Cloud OpenStack, que vous avez déjà mis en place un Cloud OpenStack ayant une version supportée par UIC (la liste des versions supportées par UIC est maintenue à jour dans la boite de dialogue de configuration affichée par UIC). Nous considérons également que vous avez déjà un compte créé dans ce Cloud.

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer à l'étape de configuration de ces paramètres dans UIC.

Pour permettre à UIC de piloter un projet dans le Cloud OpenStack, UIC doit s'authentifier avec un utilisateur ayant un rôle d'administration sur ce projet. Si vous souhaitez obtenir ces informations de la plateforme OpenStack, vous pouvez suivre les instructions décrites dans le prochain paragraphe.

### Obtenir les identifiants d'un nouveau projet OpenStack

#### Création d'un Projet

- Connectez-vous sur le compte _OpenStack_, sélectionnez l'onglet **Projets** ,

![Image](/img_fr/img_UIC_Cred_Fournisseur/image090.png#bordered)

- Cliquez sur le bouton **Créer un Projet** , l'écran suivant apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image091.png#bordered)

- Complétez les zones de saisie,
- Cliquez sur le bouton **Créer un Projet.**

#### Création d'un Utilisateur

Connectez-vous à la console OpenStack avec un utilisateur ayant les droits d'administration,

- Sélectionnez le menu **Admin/Gestion des identités/Utilisateurs** ,

![Image](/img_fr/img_UIC_Cred_Fournisseur/image092.png#bordered)

- Cliquez sur le bouton **Créer un Utilisateur** , le formulaire ci-dessous apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image093.png#bordered)

- Assignez le projet uic_projet1 dans la zone Projet Primaire,
- Sélectionnez le rôle user dans la zone Rôle,
- Cliquez sur le bouton Créer un Utilisateur,

L'Utilisateur **uic_user1** est créé et ajouté dans le projet **uic_projet1**.

![Image](/img_fr/img_UIC_Cred_Fournisseur/image094.png#bordered)

#### Obtenir l'URL d'authentification (Service Identity)

Connectez-vous à la console OpenStack avec un utilisateur ayant les droits d'administration,

- Sélectionnez le menu **Projet -> Calcul -> Accès et Sécurité,** l'écran suivant apparait :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image095.png#bordered)

- Copiez/collez la valeur du point d'accès au service Identity (Ex, [http://172.xx.xxx.xxx/](http://172.xx.xxx.xxx/)...). C'est cette valeur qu'il faudra fournir comme paramètre ''Hôte'' dans l'interface UIC.

### Configurer un identifiant Cloud OpenStack dans UIC

Une fois que vous disposez de toutes les informations de connexion précisées dans l'introduction de ce chapitre, vous pouvez procéder à la création d'un identifiant Cloud OpenStack sur la plateforme _UIC_.

Depuis la plateforme UIC, menu **<Compte:Utilisateur> Identifiants / Cloud / OpenStack**, vous accédez à l'écran suivant :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image002.png#bordered)

- Cliquez sur le bouton **Ajouter un identifiant** , le formulaire suivant apparaît :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image096.png#bordered)

- **Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets).
- **Hôte**  : Indiquez l'URL du service Identity de OpenStack (Ex : [http://172.17.117.100:5000/v2.0](http://172.17.117.100:5000/v2.0) )
- **Utilisateur**: Indiquez le nom de l'utilisateur utilisé lors la connexion, (Ex : uic_user1)
- **Mot de passe**: Indiquez le mot de passe de l'utilisateur (Ex : prologue)
- **Projet :** Le nom du projet mis en place (Ex : uic_projet1 )
- **Région :** Choisissez une région (facultative)
- **Proxy**  : Indiquez l'URL du proxy (facultatif)au format suivant : https://user:password@host:port
- **IP visible depuis le fournisseur** :Indiquez l'IP de la plateforme visible depuis le fournisseur (Ex : 192.168.77.88)
- Cliquez sur le bouton **Ajouter**.

Le message de confirmation suivant apparaît : L'identifiant OpenStack a bien été créé.

## Gestion des identifiants Cloud dans UIC

UIC propose une fonctionnalité permettant d'activer ou désactiver des identifiants Cloud. Pour accéder à cette fonctionnalité, utilisez le menu **<Compte:Utilisateur> -> Identifiants Cloud,** puis cliquez sur le bouton «  **Gérer les identifiants** » comme illustré dans l'écran suivant :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image097.png#bordered)

Vous obtenez alors l'écran suivant :

![Image](/img_fr/img_UIC_Cred_Fournisseur/image098.png#bordered)

Cet écran affiche tous les identifiants que vous avez déclarés au niveau de UIC et indique les paramètres de chacun des identifiants.

Vous pouvez effectuer des filtres d'affichage pour sélectionner uniquement les identifiants qui vous intéressent. Les filtres disponibles sont :

- **Mots clés**: Indiquez les mots clés pour le filtre,
- **Fournisseur**: Sélectionnez les fournisseurs de Cloud,
- **Activation**: Indiquez l'état d'activation souhaité (activé ou désactivé ou tous),
- **État** : Indiquez les états de création souhaités (succès, erreur, en attente, inconnu, ou tous),
- Le bouton **Actions** vous permet de désactiver, activer ou supprimer un identifiant.