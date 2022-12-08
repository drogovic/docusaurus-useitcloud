---
id: 10410
title: Gestion des Cloud publics Amazon AWS
description: UseITcloud documentation 3.2.0
sidebar_position: 410
---

## Prérequis

La connexion depuis UIC aux services Cloud de _Amazon AWS_ nécessite de disposer des prérequis énumérés ci-dessous :

- Un compte Cloud valide sur la plateforme _Amazon AWS_, ce compte peut être créé à l'aide de la console _Amazon AWS_.
- Des paramètres d'accès aux services APIs exposés par le Cloud Amazon AWS, notamment :

- Une clé d'accès,
- Une clé secrète.

- Des paramètres liés à l'emplacement réseau de la plateforme _UIC_ :

- Les paramètres du proxy si vous en utilisez un,
- L'adresse IP de dialogue entre la plateforme UIC et le Cloud Amazon AWS. Si ce Cloud et la plateforme UIC sont dans le même réseau ou que la plateforme UIC possède une adresse publique, cette valeur sera égale à l'adresse IP de la plateforme UIC. Dans le cas contraire, cette valeur sera égale à l'adresse IP qui sert de passerelle pour la plateforme UIC.

- Un compte _UIC_ valide, vous pouvez consulter la documentation _UIC_ intitulée _UiC\_Guide\_UserAdmin\_FR_ pour découvrir le processus de création de comptes sur la plateforme _UIC_.
- Un identifiant Cloud _UIC_ qui permet d'associer l'ensemble de ces paramètres. Le chapitre _5Identifiants Cloud Amazon AWS_ de ce document décrit une méthode à suivre pour la création d'un identifiant _UIC_ de connexion au Cloud _Amazon AWS_.

## Les commandes communes aux pages de l'IHM

Les pages et formulaires affichés par _UIC_ présentent certaines commandes dont la signification est la même quelle que soit la page qui les présente. Par conséquent, ces commandes seront décrites dans ce chapitre et cette description est applicable à toutes les ressources et tous les formulaires gérés par _UIC_ et présentés dans ce document.

Voici la liste et la description de ces commandes :

![Image](/img_fr/img_UIC_Services/img_amazon/image002.png#bordered)

- La commande **Afficher X éléments ** : Cette commande s'applique aux tableaux affichés par _UIC_. Elle permet de limiter le nombre d'éléments visualisés par page.
- La commande **Rechercher ** : Cette commande s'applique aux tableaux affichés par UIC. Elle permet de rechercher et présenter les éléments contenant la chaîne de caractères spécifiée dans le champ de recherche.
- La commande **Change columns ** : Cette commande s'applique aux tableaux affichés par UIC. Elle permet à l'utilisateur de sélectionner les colonnes qu'il souhaite visualiser.
- La commande **CSV ** : Cette commande s'applique aux tableaux affichés par UIC. Elle permet à l'utilisateur d'exporter le tableau affiché dans un fichier au format CSV.
- Le bouton d'actualisation ![Image](/img_fr/img_UIC_Services/img_amazon/image003.png#bordered)  : Ce bouton permet de forcer l'actualisation des données affichées.


## Identifiants Cloud Amazon AWS

Pour configurer un identifiant Cloud de connexion _UIC_ à une infrastructure du cloud public _Amazon AWS_, vous avez besoin des paramètres _Amazon AWS_ suivants :

- Clé d'accès,
- Clé secrète,
- Région par défaut,

Vous avez également besoin des paramètres suivants liés à l'emplacement réseau de la plateforme UIC :

- Les paramètres du proxy si vous en utilisez un,

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l'étape de configuration de ces paramètres dans UIC, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l'environnement AWS, vous pouvez obtenir ces informations en vous connectant sur le portail de gestion du Cloud AWS à l'adresse [https://console.aws.amazon.com/](https://console.aws.amazon.com/) en tant qu'administrateur de votre abonnement (ou en tant qu'utilisateur ayant des privilèges suffisants sur le compte).

Si vous n'êtes pas familier avec l'environnement AWS, vous pouvez consulter les paragraphes suivants pour découvrir comment créer ou obtenir les identifiants AWS cités ci-dessus.


### Obtenir les clés de sécurité d'un compte Amazon AWS

Les informations nécessaires à la configuration d'un identifiant UIC de connexion au Cloud Amazon peuvent être obtenues en vous connectant à la plateforme _Amazon AWS._ Pour cela authentifiez-vous sur le portail de gestion du Cloud AWS, https://aws.amazon.com/fr/console/, en tant qu'administrateur de votre abonnement (ou à partir d'un compte ayant des privilèges suffisants sur votre compte AWS).

Cliquez sur le nom de votre compte puis sélectionnez la commande _ **Mes identifiants de sécurité :** _

![Image](/img_fr/img_UIC_Services/img_amazon/image004.png#bordered)

La console AWS affiche le menu suivant :

![Image](/img_fr/img_UIC_Services/img_amazon/image005.png#bordered)

Sélectionnez la commande _ **Clés d'accès** _ pour obtenir les valeurs correspondantes. Copiez ces valeurs et sauvegardez-les de manière sécurisée. Vous en aurez besoin pour configurer les identifiants Cloud UIC.

Si vous ne souhaitez pas utiliser les clés du compte racine AWS, vous pouvez créer un utilisateur et utiliser les clés attribuées à celui-ci. Vous aurez à lui accorder des stratégies spécifiques, notamment pour la consultation des factures et le suivi de la consommation. Le chapitre suivant indique la procédure à suivre pour créer une stratégie adéquate à l'aide de la console AWS.


### Création d'une stratégie

Connectez-vous sur le site _AWS_, indiquez votre login utilisateur, mot de passe root/administrateur.

La page d'accueil _AWS_ s'affiche, depuis le service **Management des Identités et des Accès (IAM)**, sélectionnez l'item **Stratégies**.

![Image](/img_fr/img_UIC_Services/img_amazon/image006.png#bordered)

- Cliquez sur le bouton **Créer une stratégie**., la page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image007.png#bordered)

- Sélectionnez l'onglet JSON, puis collez le json ci-dessous :
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "sns:*",
        "gamelift:DescribeEC2InstanceLimits",
        "iam:GetRole",
        "iam:GetPolicy",
        "iam:ListRoles",
        "iam:CreateRole",
        "elasticloadbalancing:*",
        "iam:AttachRolePolicy",
        "iam:PutRolePolicy",
        "autoscaling:*",
        "cloudwatch:ListMetrics",
        "iam:CreatePolicy",
        "cloudwatch:PutMetricAlarm",
        "sts:AssumeRole",
        "cloudwatch:DescribeAlarms",
        "pricing:*",
        "ec2:*",
        "iam:GetUser"
      ],
      "Resource": "*"
    }
  ]
}
```
- Cliquer sur le bouton **Examiner une stratégie** , l'écran suivant s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image008.png#bordered)

- Saisissez le _Nom_ et la _Description_ de la stratégie.
- Cliquez sur le bouton **Créer une stratégie** , l'écran suivant apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image009.png#bordered)

- Cliquez sur la stratégie **uic\_strategie2** , pour afficher ses détails :

![Image](/img_fr/img_UIC_Services/img_amazon/image010.png#bordered)

Pour afficher le billing d'AWS sur la plateforme UIC, nous avons besoin de créer une autre stratégie qu'on va nommer **« uicBillingViewAccess »**.

- Cliquez sur le bouton **Créer une stratégie** , puis collez le json ci-dessous :
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
![Image](/img_fr/img_UIC_Services/img_amazon/image011.png#bordered)

- Cliquer sur le bouton **Examiner une stratégie** , l'écran suivant s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image012.png#bordered)

- Saisissez le _Nom_ suivant pour la stratégie : **uicBillingViewAccess**
- Puis cliquez sur le bouton **Créer une stratégie**


### Activer les accès aux données de facturation

Vous pouvez accorder aux utilisateurs IAM et aux utilisateurs fédérés avec des rôles les autorisations nécessaires pour accéder aux informations de facturation. Cela inclut l'accès aux pages **Paramètres du compte** , **Modes de paiement** et **Rapport**. Vous définissez les utilisateurs et les rôles autorisés à consulter les informations de facturation en créant des stratégies IAM.

Connectez-vous sur le site _AWS_, indiquez votre login utilisateur (ayant les droits d'administration de votre compte (root/administrateur)), entrez le mot de passe de l'utilisateur.

La page d'accueil _AWS_ s'affiche. Dans l'onglet haut à droite, cliquez sur **Mon compte.**

Voir l'image ci-dessous

![Image](/img_fr/img_UIC_Services/img_amazon/image013.png#bordered)

Defilez vers le bas puis cliquez sur l' **Accès des utilisateurs et des rôles IAM aux données de facturation,** puis cochez **Activer l'accès IAM :**

![Image](/img_fr/img_UIC_Services/img_amazon/image014.png#bordered)

Cliquez sur le bouton **Mettre à jour.**

Après cette modification, vous pouvez ajouter la première stratégie créée précédemment «  **uic\_strategie2 »** aux utilisateurs de votre choix . (voir la section ci-dessous )


### Création d'un Utilisateur


#### Processus de création

Connectez-vous à la console d'administration de AWS ouvrez la console IAM à l'adresse [https://console.aws.amazon.com/iam/](https://console.aws.amazon.com/iam/).

Dans le panneau de navigation, choisissez **Utilisateurs** , puis **Ajouter un utilisateur.**

![Image](/img_fr/img_UIC_Services/img_amazon/image015.png#bordered)

- La page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image016.png#bordered)

- Entrez dans la zone **Nom d'utilisateur**  le nom de l'utilisateur à créer,
- Sélectionnez le **type d'accès AWS** souhaité. Pour UIC il est nécessaire d'autoriser un accès par programmation.
- Cliquez sur le bouton **Suivant : Autorisations** , l'écran suivant apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image017.png#bordered)

- Cochez la (les) stratégie(s) que vous souhaitez attacher à l'utilisateur,
- Sélectionnez le bouton **Attacher directement les stratégies existantes** pour réaliser les attachements.


#### Définition d'une limite d'autorisations

Il s'agit d'une fonction avancée utilisée pour déléguer la gestion des autorisations à d'autres utilisateurs. Pour contrôler les autorisations maximales d'un utilisateur, il faut définir une limite d'autorisations.

- Cochez **Utiliser**  **une limite d'autorisations pour contrôler les autorisations user maximales** , puis sélectionnez la stratégie créée, 
![Image](/img_fr/img_UIC_Services/img_amazon/image018.png#bordered)

- Cliquez sur le bouton **Suivant : Balises** (l'ajout de balises est facultatif), la page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image019.png#bordered)

- Cliquez sur le bouton **Suivant : Vérification** , la page ci-dessous apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image020.png#bordered)

- Cliquez sur le bouton **Créer un utilisateur** , le message suivant apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image021.png#bordered)

- Cliquez sur **Afficher (ID de clé d'accès)** puis copier/coller la dans l'interface UIC ou dans un fichier de votre choix,
- Cliquez sur **Afficher (clé d'accès secrète)** puis copier/coller la, dans l'interface UIC ou dans un fichier de votre choix,
- Vous pouvez également cliquer sur le bouton **Télécharger.csv** afin de télécharger le fichier qui contient l'ID de clé d'accès et la clé secrète (rootkey.csv).
- Enregistrez le fichier dans un emplacement sécurisé.


#### Récupérer les clés de sécurité AWS

Authentifiez-vous sur la plateforme AWS [Management Console](https://console.aws.amazon.com/).

- Saisissez le nom de votre compte dans la zone prévue à cet effet,

![Image](/img_fr/img_UIC_Services/img_amazon/image022.png#bordered)

- Choisissez  **Mes identifiants de sécurité** , la page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image023.png#bordered)

- Sélectionnez l'onglet **Informations d'identification AWS IAM**.
- Cliquez sur le bouton  **Créer une clé d'accès** , si cette fonction est désactivée, vous devez supprimer l'une des clés d'accès existantes avant de pouvoir créer une nouvelle clé.

Pour plus d'informations, consultez [Limites des objets d'entité IAM ](https://docs.aws.amazon.com/fr_fr/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entities)dans le IAM Guide de l'utilisateur.

**Remarque : Un avertissement indique qu'il s'agit de la seule fois où vous serez en mesure d'afficher ou de télécharger la clé d'accès secrète. Vous ne pourrez pas la récupérer ultérieurement (vous pouvez créer de nouvelles clés d'accès à tout moment).**

- Choisissez Afficher la clé d'accès pour copier l'ID de clé d'accès et la clé secrète à partir de la fenêtre de votre navigateur et les coller à un autre emplacement.
- Choisissez  **Télécharger le fichier .csv** , il contient un fichier de clé pour télécharger le fichier rootkey.csv qui contient l'ID de clé d'accès et la clé secrète. Enregistrez le fichier dans un emplacement sécurisé.

![Image](/img_fr/img_UIC_Services/img_amazon/image024.png#bordered)


### Configuration d'un identifiant Cloud AWS dans UIC

Depuis la plateforme, menu **Identifiant/Paramètres du compte* -> Identifiants Cloud -> AWS** ,

![Image](/img_fr/img_UIC_Services/img_amazon/image025.png#bordered)

- Cliquez sur le bouton **Ajouter un identifiant** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image026.png#bordered)

- Complétez les zones ci-dessous :
  - **Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets).
  - **Clé d'accès**  : Saisissez la clé d'accès (Ex : AKIAIOSFODNN7EXAMPLE)
  - **Clé secrète**  : Saisissez la clé secrète (Ex : wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY).
  - **Région** par défaut : Choisissez une région par défaut (Ex : eu-west-1 – Irlande) que vous souhaitez associer à cet identifiant.
  - **Proxy**  : Indiquez l'URL du proxy (facultatif)au format suivant : https://user:password@host:port


#### Conséquence sur la table des identifiants Amazon AWS

L'identifiant créé apparaîtra comme une entrée parmi les identifiants _Amazon AWS_. Vous pourrez modifier ses attributs en le sélectionnant depuis cette page.

![Image](/img_fr/img_UIC_Services/img_amazon/image027.png#bordered)

La table des identifiants vous permet d'exécuter sur chacun d'entre eux les commandes du menu **Actions**. Ces actions sont intitulées **Configuration** , **Configurer le proxy** , **Modifier les identifiants** et **Supprimer**. Elles sont toutes décrites dans les sous-chapitres suivants.


##### Modifier la configuration

- Sélectionnez la commande _ **Configuration** _ du menu **Actions** , la boite de dialogue **Configuration de l'identifiant AMAZON AWS** apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image028.png#bordered)

- Sélectionnez le menu **Région par défaut,** si vous souhaitez modifier la région par défaut puis cliquez sur le bouton **Mettre à jour**.
- Saisissez le délai d'attente souhaité pour le Cloud _Amazon AWS_, cliquez sur le(s) bouton(s) **Mettre à jour**.
- Actionnez le bouton **Fermer**.

**Remarque :**

Pour chaque déploiement, _UIC_ commande le provisionnement des VM auprès du cloud cible et attend une réponse de celui-ci, indiquant le résultat du déploiement (succès ou échec). Le temps de ce provisionnement dépend principalement de la charge et des performances du Cloud cible, de l'image OS et logiciels à installer sur la VM et des conditions réseau entre la plateforme _UIC_ et ce Cloud. Le délai d'attente, à configurer pour ce paramètre, correspond au temps maximum au-delà duquel une absence d'indication de fin de déploiement peut être considérée par _UIC_ comme un échec de déploiement.

Compte-tenu du fait que ce délai est variable d'une infrastructure à une autre, _UIC_ vous offre la possibilité d'indiquer la valeur la plus convenable pour votre environnement.


##### Modifier la Configuration du proxy

- Sélectionnez la commande _ **Configuration du proxy** _ du menu **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image029.png#bordered)

- Saisissez l'URL du proxy, au format précisé dans la boite de dialogue,
- Cliquez sur le bouton **Sauvegarder** ,


##### Modifier un identifiant

- Sélectionnez la commande _ **Modifier les identifiants** _ du menu **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image030.png#bordered)

- Apportez les modifications souhaitées,
- Cliquez sur le bouton **Sauvegarder** ,


##### Supprimer un identifiant

- Sélectionnez la commande _ **Supprimer** _ du menu **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image031.png#bordered)

- Cliquez sur le bouton **Supprimer l'identifiant Cloud** ,

#### Conséquence sur le menu Clouds

Après l'ajout d'un identifiant Cloud _Amazon AWS_, _UIC_ crée un item portant le nom de l'identifiant dans le menu **Clouds**  ****  **Amazon AWS** , il porte le nom attribué à la création **.** Il vous permet d'accéder et de piloter les ressources _Amazon AWS_ qui sont sous son contrôle.

![Image](/img_fr/img_UIC_Services/img_amazon/image032.png#bordered)

#### Conséquence sur la page de la préparation d'un déploiement

Après l'ajout d'un identifiant Cloud _Amazon AWS_, le nom de cet identifiant sera rajouté dans la liste des valeurs du champ **Tenant** de la page de préparation du déploiement.

![Image](/img_fr/img_UIC_Services/img_amazon/image033.png#bordered)

#### Conséquence sur le formulaire de référencement d'une image fournisseur

Après l'ajout d'un identifiant Cloud _Amazon AWS_, le nom de cet identifiant sera rajouté dans la liste des fournisseurs du menu **Design -> Images -> Référencer une image fournisseur** , son formulaire s'affiche et l'identifiant sera sélectionnable depuis le menu déroulant **Fournisseur**.

![Image](/img_fr/img_UIC_Services/img_amazon/image034.png#bordered)

Ceci permet de référencer des images de machines virtuelles disponibles chez les fournisseurs et les rendre privées pour le tenant spécifié.

#### Conséquence sur la gestion des rôles _UIC_

Lorsque vous ajoutez un identifiant Cloud _Amazon AWS_ à un compte, pensez à configurer les permissions appropriées aux utilisateurs de ce compte. Voici le tableau des ressources _Amazon AWS_ et des permissions configurables dans _UIC_ :

| **Type de ressource** | **Liste des actions applicables** |
| --- | --- |
| Instances | Lister, Déployer, Gérer l'état (stopper, démarrer), Supprimer |
| Groupes de sécurité | Lister, Créer, Modifier, Supprimer |
| VPC | Lister, Créer, Supprimer |
| IP élastiques | Lister, Créer, Associer, dissocier, Supprimer |
| Paires de clés | Lister, Créer, Supprimer |
| Volumes | Lister, Créer, Attacher, détacher, modifier, Supprimer |
| Instantanés | Lister, Créer, Supprimer |
| Equilibreurs de charge (ELB) | Lister, Créer, Modifier, Supprimer |
| Auto scaling – configurations de lancement | Lister, Créer, Supprimer |
| Auto scaling - Groupes | Lister, Créer, Modifier, Supprimer |
| AMI | Lister, Créer, Supprimer |
| Groupes de placement | Lister, Créer, Supprimer |
| Quotas | Lister |
| Consommation et facturation | Lister |

Vous pouvez utiliser les rôles prédéfinis par _UIC_, ou bien créer de nouveaux rôles et les configurer à votre convenance. En fonction de votre environnement de production vous pourrez attribuer des rôles à des groupes ou à des utilisateurs.

Les détails sur la gestion des utilisateurs, des groupes et des rôles sont fournis dans le document intitulé **UiC\_Guide\_UserAdmin\_FR** (transmis avec la plateforme).


## Déploiements

Le déploiement des applications UIC dans un Cloud public _Amazon AWS_ nécessite les prérequis obligatoires suivants :

- Un identifiant Cloud, se référer au chapitre _Erreur ! Source du renvoi introuvable.Erreur ! Source du renvoi introuvable._,
- Des images de VMs référencées dans la base de données locale de UIC.

Toutes les étapes à suivre pour le déploiement d'une application sont illustrées dans les prochaines sections en prenant l'exemple du déploiement d'une application Linux nécessitant une seule VM. Lorsqu'une étape n'est pas identique pour Linux et pour Windows, les spécificités du système Windows sont indiquées.

Le processus de déploiement d'une application est composé de trois grandes étapes :

- Une étape de configuration (appelée pré-déploiement). Cette étape permet de configurer l'environnement de déploiement,
- Une étape de lancement du déploiement. Cette étape débute à l'instant où le déploiement dans le Cloud est déclenché. Elle se termine au moment où le résultat du lancement de l'opération est affiché,
- Une étape de gestion du déploiement (appelée post-instanciation). Cette étape prend le relais à la fin de la phase précédente et se termine au moment de la suppression définitive d'une instance de la base de données des déploiements gérés par _UIC_.


### Référencer une image Amazon AWS

UIC référence automatiquement toutes les images publiques disponibles sur le Cloud public _Amazon AWS_. Si vous souhaitez référencer des images que vous avez créé vous-même, il suffit de suivre la procédure suivante :

Depuis le menu **Design** , sélectionnez **Images** , la page **Images publiques** apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image035.png#bordered)

- Cliquez sur le bouton **Référencer une image fournisseur** , le formulaire **Référencer une image fournisseur** s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image036.png#bordered)

Le formulaire permet de rechercher une image d'une machine virtuelle publiée sur la plateforme Amazon AWS et de créer une référence à cette image dans la base de données de la plateforme _UIC_.

- Sélectionnez _Amazon AWS_ et le tenant depuis le menu déroulant **Fournisseur** , vous accédez à la liste des images disponibles chez le fournisseur. La zone **Région**  se compléte automatiquement, si d'autres régions sont disponibles, alors, il sera possible de la changer.
- Sélectionnez l'image qui doit être référencée depuis le menu déroulant **Image** ,
- Sélectionnez le système d'exploitation auquel vous souhaitez intégrer l'image depuis le menu déroulant **Système d'exploitation** ,
- Renseignez le champ **Utilisateur par défaut**, pour personnaliser la machine virtuelle il doit avoir des droits d'administration.

La zone **Mot de passe par défaut** (optionnelle), si elle n'est pas complétée, le mot de passe sera généré automatiquement à la création de la machine virtuelle.


#### Conséquence sur le tableau des référencements des images

Les images publiques référencées sur l'identifiant créé sont enregistrées dans la base de données des images de cet identifiant. Toutes les images sont accessibles depuis le menu **Design -> Images** , l'onglet **Images publiques** (par défaut) apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image037.png#bordered)

C ![Image](/img_fr/img_UIC_Services/img_amazon/image038.png#bordered)liquez sur le lien .

Ci-dessous un exemple de table affichée pour _Amazon AWS_ :

![Image](/img_fr/img_UIC_Services/img_amazon/image039.png#bordered)

Cette page affiche le tableau des images, chacune d'entre elles possède des colonnes avec une liste de paramètres statiques (ID, Type, …). Les deux colonnes suivantes permettent de modifier leurs paramètres.

- **Utilisateur**  : ce champ indique le nom de l'utilisateur qui sera utilisé pour la connexion à l'image référencée.
- **Mot de passe**  : ce champ indique le mot de passe de l'utilisateur de connexion précisé ci-dessus.

La colonne **Actions** présente deux items si l'image a été référencé et si elle a été définie avec un mot de passe:

- **Voir le mot de passe**  : cette action permet de voir en clair le mot de passe de l'utilisateur associé à l'image,
- **Supprimer :** cette action permet de supprimer l'image de la base de données.


### Configuration d'un déploiement

Le déploiement des applications et des VM s'effectue à l'aide du menu **Déployer -> Catalogue -> "Application" -> Déployer**. L'action **Déployer** permet de configurer l'environnement du déploiement avant de le déclencher réellement.

- Sélectionnez l'application à déployer, actionnez le bouton **Déployer** correspondant à l'application, vous obtenez l'écran de préparation de déploiement illustré sur l'écran suivant :

![Image](/img_fr/img_UIC_Services/img_amazon/image040.png#bordered)

- Saisissez dans la zone **Etiquette** le nom du déploiement afin de l'identifier,
- Sélectionnez le fournisseur depuis le menu déroulant **Fournisseur** ainsi que le nom de l'identifiant cloud à partir du menu déroulant **Tenant** (s'il y en a plusieurs),
- Validez votre choix à l'aide du bouton **Confirmer** , vous obtiendrez l'écran de configuration des paramètres généraux et des paramètres spécifiques à _Amazon AWS_. Le détail de configuration de chacun des onglets est décrit dans les prochaines sections.


#### Configuration du réseau

L'onglet **Réseau** vous permet de préciser tous les paramètres de configuration réseau nécessaires pour le déploiement sur votre infrastructure _Amazon AWS_. Ces paramètres sont illustrés sur la figure suivante :

![Image](/img_fr/img_UIC_Services/img_amazon/image041.png#bordered)

- **VPC** : Indique le nom du réseau où la machine virtuelle sera déployée. Une liste peut être présente, elle montre tous les réseaux configurés. A l'aide du lien _**Créer un VPC ou sous-réseau**_, vous pouvez en créer un nouveau si vous le souhaitez ou si aucun n'est présent,
- **Sous-réseau**  : Indique le sous-réseau rattaché au VPC. A l'aide du lien _**Créer un VPC ou sous-réseau**_, vous pouvez en créer un nouveau si vous le souhaitez ou si aucun n'est présent,
- **IP Publique :** Indique si la VM possède une adresse IP publique ou non, et si oui, la méthode d'attribution de cette adresse (IP dynamique ou IP statique allouée automatiquement),
- **Groupe de sécurité**  : Ce menu déroulant propose de créer ou de sélectionner un groupe de sécurité :

![Image](/img_fr/img_UIC_Services/img_amazon/image042.png#bordered)

Si vous sélectionnez un groupe de sécurité existant, le lien en bleu affiché à droite du menu vous permet de consulter la liste des règles définies par ce groupe, comme illustré dans l'exemple suivant :

![Image](/img_fr/img_UIC_Services/img_amazon/image043.png#bordered)

La case à cocher **Accès direct à l'instance**  : Cochez cette case si l'instance de la machine virtuelle est dans le même réseau que la plateforme UIC. La communication entre la plateforme et l'instance se fera en utilisant l'adresse privée de l'instance.


#### Infrastructure

L'onglet **Infrastructure** vous permet de préciser tous les paramètres nécessaires pour le déploiement sur votre infrastructure _Amazon AWS_, comme illustré sur l'écran suivant :

![Image](/img_fr/img_UIC_Services/img_amazon/image044.png#bordered)

- **OS :** Indique le système d'exploitation de base de l'application,
- **Image :** Indique l'image qui a été référencée sur ce système d'exploitation,
Le menu déroulant **Gabarit** propose des gabarits de machines prédéfinis chez _Amazon AWS_ :
![Image](/img_fr/img_UIC_Services/img_amazon/image045.png#bordered)
 Lorsque vous sélectionnez un gabarit, _UIC_ vous indique les dimensions en CPU, RAM et disque, ainsi que les coûts horaires et mensuels de ce gabarit, comme illustré ci-dessous :
![Image](/img_fr/img_UIC_Services/img_amazon/image046.png#bordered)
- **Paire de clés :** Indique la paire de clé associée à cette VM. Vous pouvez choisir entre les différentes options proposées par UIC, comme illustré dans l'exemple suivant :
![Image](/img_fr/img_UIC_Services/img_amazon/image047.png#bordered)
Vous pouvez utiliser une paire de clés existante (générique ou fournisseur), ou bien laisser UIC créer une nouvelle paire de clés. Vous pouvez également déployer cette VM sans aucune paire de clés.
Dans _UIC,_ la gestion des paires de clés étant Cloud agnostic, les détails de cette gestion sont décrites dans le document global intitulé «  **UiC\_Guide\_UserAdmin\_FR ».**
- **Rôe IAM :** Indique le rôle IAM associé à la VM. Vous pouvez choisir de ne pas associer de rôle particulier à cette VM, dans ce cas, sélectionnez _Aucun_.


#### Personnalisation d'une instance

L'onglet P **ersonnalisation** permet de spécifier des paramètres non IaaS d'une instance. Quel que soit le type de machine virtuelle (Linux ou Windows).

Il s'agit d'attribuer un nom à l'instance pour l'identifier facilement sur le Cloud cible, d'installer ou non l'agent UIC (option), d'inclure des scripts exécutables après le démarrage de l'instance et d'ajouter des tags spécifiques à l'instance.

![Image](/img_fr/img_UIC_Services/img_amazon/image048.png#bordered)

D'autres paramètres sont spécifiques aux machines virtuelles de type Windows, leur description est décrite dans la section dédiée à la personnalisation spécifique à Windows.


##### Configuration commune à tous les OS

La personnalisation des instances de VM se fait à l'aide de l'écran suivant :

![Image](/img_fr/img_UIC_Services/img_amazon/image049.png#bordered)

Comme précisé dans le formulaire, la personnalisation de l'instance concerne les paramètres suivants :

- **Nom de l'instance**  : Indiquez le nom qui identifiera l'instance sur le Cloud cible,
- **Installer l'agent UIC**  : Cochez cette case si vous souhaitez installer par défaut l'agent UIC sur l'instance,
- **Script prédéfini**  : Lorsque vous déployez une application depuis un template et si vous avez prédéfini un script associé à ce template, _UIC_ le sélectionne automatiquement. Mais vous pouvez en sélectionner un autre si vous le souhaitez.
- **Script additionnel**  : Ajoutez-la ou les ligne(s) de code du script si vous souhaitez l'exécuter automatiquement dans cette instance,
- **Variables d'environnement**  : Si des variables d'environnement ont été définis dans le template d'application, elles apparaissent à la suite du champ _Script additionnel_. Dans l'exemple d'illustration choisi ici, des variables d'environnement ont été associées au template d'application, elles sont nommées DB\_NAME, DB\_USER et DB\_USER\_PASSWORD. Indiquez leurs valeurs dans les champs de saisie correspondants.
- **Tags**  : Ajoutez les tags que vous souhaitez attacher à cette instance.


#### Gestion de configuration

La plateforme _UIC_ peut mettre en œuvre la gestion de configuration des machines virtuelles en proposant les outils Ansible, Chef et _Puppet_.

![Image](/img_fr/img_UIC_Services/img_amazon/image050.png#bordered)

Cette mise en œuvre est commune à tous les Clouds, elle n'est donc pas spécifique à _Amazon AWS_. Elle est documentée en détail dans le guide intitulé «  **UiC\_Guide\_UserAdmin\_FR** ».


#### Surveillance

La plateforme UIC peut mettre en œuvre la surveillance des machines virtuelles en proposant des services de monitoring Centreon et Zabbix.

![Image](/img_fr/img_UIC_Services/img_amazon/image051.png#bordered)

Une fois que vous avez fini la configuration, vous pouvez lancer votre déploiement en cliquant sur le bouton **Déployer** (en haut à droite de l'écran), le processus de déploiement s'enclenchera.

**Remarque : Cette mise en œuvre est commune à tous les Clouds, elle n'est donc pas spécifique à _Amazon AWS_. Elle est cependant documentée en détail dans le guide intitulé « UiC\_Guide\_UserAdmin\_FR ».**


### Opération de déploiement

Lorsque le déploiement est lancé, la plateforme _UIC_ affiche l'écran de progression du déploiement :

![Image](/img_fr/img_UIC_Services/img_amazon/image052.png#bordered)

La durée nécessaire au déploiement dépend de l'environnement de déploiement (puissance et capacité de votre infrastructure) mais également des caractéristiques de la VM à déployer (son gabarit, son système d'exploitation de base et de l'ensemble des logiciels additionnels, du temps nécessaire à l'installation de l'agent si vous l'avez activé pour la VM).

Une fois que l'opération de déploiement est terminée avec succès, _UIC_ passe à l'étape de post-instanciation qui permet de gérer la VM active.


### Post-Instanciation

Une fois que le déploiement est terminé avec succès, l'écran **Déploiement** indiquera le statut Déployé dans la colonne **Etat** :

![Image](/img_fr/img_UIC_Services/img_amazon/image053.png#bordered)

UIC affiche l'identifiant unique pour ce déploiement dans la colonne **Identifiant.** Sa valeur est un champ actif qui vous permet d'accéder aux détails de l'instance déployée.

Les autres colonnes ont des labels auto-explicatifs du contenu de la colonne. La connexion à l'instance s'effectue depuis la colonne **Actions** , une des deux actions est proposée :

- **SSH** dans le cas d'une instance Linux,

Ou,

- **RDP Client** dans le cas d'une instance Windows.

Le bouton **Supprimer** permet de terminer et supprimer l'instance de l'application déployée.


#### Connexion aux instances Linux

Depuis la plateforme _UIC_ connectez-vous en ssh aux instances _Linux_. Si vous cliquez sur le bouton **ssh** de la colonne **Actions** vous obtenez l'écran suivant :

![Image](/img_fr/img_UIC_Services/img_amazon/image054.png#bordered)

Cet écran vous affiche les paramètres qui vous permettront de vous connecter à la VM en choisissant l'une des deux options :

- En utilisant un outil ssh externe, dans ce cas vous pouvez copier toutes les valeurs des paramètres affichés dans cette fenêtre et les injecter dans l'outil que vous utilisez.
- En utilisant l'outil Shell in a box intégré à UIC, dans ce cas vous avez juste à cliquer sur le bouton **Shell in a box** affiché en bas, à gauche de la fenêtre. UIC vous connectera automatiquement sur la VM et ouvrira une fenêtre dans un onglet dédié de votre navigateur.


#### Connexion aux instances Windows

UIC vous permet de vous connecter en RDP à une instance Windows, à condition que la connexion Bureau à distance soit autorisée sur cette instance. Si vous utilisez une image publique AMAZON AWS, cette condition est supposée être nativement respectée. Si vous utilisez une image privée, assurez-vous que cette condition est respectée en vérifiant au niveau du paramétrage du firewall Windows, que les bonnes options sont activées, comme illustré sur l'écran ci-dessous :

![Image](/img_fr/img_UIC_Services/img_amazon/image055.png#bordered)


##### Options de connexions

Si vous cliquez sur le bouton **RDP Client** de la colonne **Actions** vous obtenez l'écran suivant :

![Image](/img_fr/img_UIC_Services/img_amazon/image056.png#bordered)

Cet écran vous affiche les paramètres qui vous permettront de vous connecter à la VM en choisissant l'une des deux options :

- En utilisant un outil RDP externe, dans ce cas vous pouvez copier toutes les valeurs des paramètres affichés dans cette fenêtre et les injecter dans l'outil que vous utilisez.
- En utilisant la procédure proposée par UIC, dans ce cas vous avez juste à cliquer sur le bouton **Télécharger le fichier RDP** affiché en bas, à gauche de la fenêtre. Suivez en suite les instructions et les étapes décrites ci-dessous.


##### Connexion Bureau à distance

Lorsque vous cliquez sur le bouton **Télécharger le fichier RDP,** Windows vous affiche la fenêtre suivante :

![Image](/img_fr/img_UIC_Services/img_amazon/image057.png#bordered)

- Sélectionnez **Ouvrir avec**  : **Connexion Bureau à distance** , puis cliquez sur **OK.** Vous obtiendrez la fenêtre suivante :

![Image](/img_fr/img_UIC_Services/img_amazon/image058.png#bordered)

- Cliquez sur le bouton **Connexion** pour déclencher l'action de connexion à l'instance, le système Windows affichera une fenêtre semblable à la suivante :

![Image](/img_fr/img_UIC_Services/img_amazon/image059.png#bordered)

- Entrez le mot de passe de connexion puis cliquez sur **OK**.

**Remarque : Si votre VM ne présente pas un certificat signé par une autorité de confiance, le système affichera la fenêtre suivante :**

![Image](/img_fr/img_UIC_Services/img_amazon/image002.png#bordered)

Si vous êtes dans un réseau sécurisé, appuyez sur le bouton **Oui** , sinon corrigez le problème avant de continuer.

Après l'opération d'authentification, le système Windows de la VM affiche la session de l'utilisateur authentifié. Voici un exemple d'écran d'une session Administrateur par défaut :

![Image](/img_fr/img_UIC_Services/img_amazon/image060.png#bordered)


#### Détails d'un déploiement

Vous obtenez la liste des déploiements en cliquant sur le menu **Gérer**  **Déploiements,** l'écran ci-dessous fournit un exemple de liste.

![Image](/img_fr/img_UIC_Services/img_amazon/image061.png#bordered)

Un clic sur le lien **Identifiant** affiche tous les détails du déploiement.

![Image](/img_fr/img_UIC_Services/img_amazon/image062.png#bordered)

La structure et le contenu de cette page sont décrits en détails dans le document général intitulé _ **UiC\_Guide\_UserAdmin\_FR.** _ Les sections suivantes reprennent certaines descriptions générales mais se focalisent surtout sur les spécificités de Amazon AWS.


##### Actions sur un déploiement

Les actions situées en haut, à gauche de la page sont celles applicables au déploiement :

![Image](/img_fr/img_UIC_Services/img_amazon/image063.png#bordered)
- **Supprimer**  : Cette commande permet de supprimer le déploiement de la table des déploiements,
- **Template**  : Permet d'afficher le template généré par _UIC_ et utilisé pour ce déploiement,
- **Retirer ce déploiement**  : Permet de retirer ce déploiement de la table des déploiements, sans supprimer ses ressources des Clouds où elles ont été approvisionnées. Lorsque la suppression est enclenchée, la plateforme UIC affichera le message suivant :

![Image](/img_fr/img_UIC_Services/img_amazon/image064.png#bordered)


##### Actions sur un nœud

Les actions situées dans la partie centrale sont celles applicables au management de la machine virtuelle. Les actions sont organisées en deux catégories, **Actions sur le nœud** et **Liste des accès à la machine**  :

![Image](/img_fr/img_UIC_Services/img_amazon/image065.png#bordered)

Voici la description des commandes du groupe **Actions sur le nœud,** en partant de la première icône à gauche :

- **Démarrer**  : Lorsque la machine virtuelle est arrêtée, l'icône permet de la démarrer,
- **Stopper**  : La machine virtuelle est à l'état démarré, l'icône permet de l'arrêter,
- **Redémarrer**  : Cette action permet de redémarrer la machine virtuelle,
- **Exécuter une commande**  : Affiche un éditeur de texte qui vous permet de saisir les commandes à exécuter à distance sur la VM.
- **Remarque : Cette commande n'est disponible que si l'agent _UIC_ est installé sur la machine virtuelle.**
- **Redimensionner**  : Permet de redimensionner le gabarit du nœud.

Les commandes du groupe **Liste des accès à la machine** vous permettent d'accéder à distance à la machine à l'aide d'une des deux options :

- **RDP** (pour Windows) ou **SSH** (pour Linux) : Ces méthodes d'accès sont décrites dans les sections **Connexion aux instances Linux** et **Connexion aux instances Windows.**

###### Démarrer une instance

La commande **Démarrer** une instance n'est disponible que si l'instance est arrêtée.

- Cliquez sur le bouton **Démarrer,** UIC vous affiche une fenêtre vous demandant de confirmer l'action, puis valider à l'aide du bouton OK.

P ![Image](/img_fr/img_UIC_Services/img_amazon/image066.png#bordered) atientez, puis rafraichissez à l'aide du bouton suivant , la page de l'instance apparaît avec l'instance démarrée, le champ **Etat** passe à la valeur **Actif**.

###### Arrêter une instance

- Sélectionnez la commande **Arrêter,** UIC affiche la boite de dialogue vous demandant la confirmation de l'action, validez à l'aide du bouton OK.
- P ![Image](/img_fr/img_UIC_Services/img_amazon/image066.png#bordered) atientez, puis rafraichissez à l'aide du bouton suivant , le tableau des instances apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image067.png#bordered)

Le statut de l'instance passe à l'état **Stoppé**. Vous pouvez la redémarrer à tout moment.

###### Redimensionner un gabarit de d'une instance

Pour redimensionner une instance de VM, cette instance doit être à l'état arrêté.

- Sélectionnez la commande **Redimensionner** depuis le menu déroulant **Actions** , la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image068.png#bordered)

- Cliquez sur le menu **Gabarit** , sélectionnez celui qui vous convient puis cliquez sur le bouton **Redimensionner**. UIC affiche un message indiquant que l'instance est en cours de redimensionnement.

Patientez, puis rafraichissez à l'aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_amazon/image066.png#bordered) , le tableau des instances montre bien que le nouveau gabarit de l'instance a été pris en compte. Vous pouvez donc redémarrer l'instance.

#### Suppression d'un déploiement

Vous pouvez utiliser le menu **Gérer**  **Déploiements** pour supprimer un déploiement. La liste des déploiements s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image069.png#bordered)

- Sélectionnez la liste déroulante **Actions** du déploiement que vous souhaitez supprimer, le menu propose la commande **Supprimer** :

![Image](/img_fr/img_UIC_Services/img_amazon/image070.png#bordered)

- Sélectionnez **Supprimer** , la plateforme UIC vous demandera de confirmer l'action :

![Image](/img_fr/img_UIC_Services/img_amazon/image071.png#bordered)

- Cliquez sur le bouton **OK** , l'opération de suppression se déclenche auprès de l'infrastructure Amazon AWS. La plateforme attend la réponse de suppression définitive avant de passer le déploiement à l'état **Supprimé** , comme indiqué dans l'exemple suivant :

![Image](/img_fr/img_UIC_Services/img_amazon/image072.png#bordered)

**Remarque : Les ressources du déploiement supprimé sont complètement désallouées de l'infrastructure Cloud, en revanche quelques métadonnées restent encore en mémoire de la plateforme _UIC_.**

Pour supprimer ces données et la ligne correspondante dans la table des déploiements, cliquez sur le bouton **Supprimer** de la colonne **Actions** du déploiement.

## Tableau de bord _Amazon AWS_

Une fois que les prérequis sont validés, vous pourrez alors gérer les ressources de vos tenants _Amazon AWS_ depuis le menu _UIC_ **Clouds -> Amazon AWS -> Identifiant Cloud** , le tableau de bord ci-dessous apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image073.png#bordered)

La page **Tableau de bord** est divisée en deux parties, la partie de gauche permet de choisir la région _AWS_ (liste déroulante) dans laquelle vous souhaitez travailler. Les items **Région, Instances** , **Réseau et sécurité** , **VPC** , **EBS** , **AMI** , **Equilibreurs de charge** , **Auto scaling** , **quotas** , **Facturation** sont mis à disposition, vous pourrez alors afficher l'ensemble des services utilisés pour une région sélectionnée.

La partie centrale présente une synthèse des ressources et des services utilisés ainsi que de la consommation en cours chez _Amazon_ pour le tenant choisi. Les indicateurs sont fournis sous formes numériques et sous formes graphiques.

Le contenu de la partie centrale (variable en fonction des items sélectionnés) du tableau de bord affiche les informations suivantes :

- Le temps écoulé depuis la dernière mise à jour (en haut à droite) suivi du bouton permettant de forcer l'actualisation des données (bouton ![Image](/img_fr/img_UIC_Services/img_amazon/image066.png#bordered)),
- Le nombre total d'instances ainsi que le nombre d'instances arrêtées et démarrées,
- Le nombre total de volumes et d'instantanés configurés,
- Le nombre total de groupes de sécurité, de VPC, d'IP élastiques, de paires de clés configurés, de groupes de placement,
- Le nombre de configurations et de groupes d'auto-scaling,
- Le nombre total d'équilibreurs de charge et d'images privées et publiques,

Un graphique représentant la synthèse de la consommation en cours ainsi que la répartition de cette consommation par service AWS,

Un graphique représentant les instances démarrées, arrêtées. Cet indicateur fournit la répartition en nombres et en pourcentages,

Un graphique représentant les volumes et instantanés attachés, disponibles. Cet indicateur fournit la répartition en nombres et en pourcentages.

Les instances et les volumes sont également représentés par région.

## Instances

L'item **Instances** permet d'afficher les informations et les actions exposées sur les instances des machines virtuelles associées à l'identifiant cloud sélectionné.

![Image](/img_fr/img_UIC_Services/img_amazon/image074.png#bordered)

Le tableau présente la liste et les paramètres des instances créés, le bouton **+** de la première colonne permet d'afficher les paramètres cachés du tableau :

| **ID :** | Identifiant attribué à l'instance (machine virtuelle) |
| --- | --- |
| **Nom :** | Nom attribué à l'instance (machine virtuelle) |
| **Type :** | Gabarit de l'instance |
| **Zone :** | Zone géographique de disponibilité de la machine virtuelle, |
| **Etat :** | Etat de l'instance |
| **IP publique/privée :** | Adresses IP de la machine virtuelle, |
| **DNS public :** | Nom de domaine public de l'instance |
| **Lancement :** | Indique la date de la création de l'instance, |
| **Image :** | Identificateur de l'image de la machine virtuelle, |
| **DNS privé :** | Nom de domaine privé de l'instance |
| **Paire de clés :** | Identifiant de la paire de clés d'accès à l'instance, |
| **Groupe de sécurité :** | Identifiant du groupe de sécurité appliqué, |
| **Tags :** | Liste des tags associés à l'instance |

La colonne **Actions**  offre les possibilités suivantes :

![Image](/img_fr/img_UIC_Services/img_amazon/image075.png#bordered)
- **Démarrer :** Démarrel'instance,
- **Redimensionner :** Permet de redimensionner l'instance,
- **Redémarrer :** Redémarre l'instance,
- **Eteindre :** Arrête l'instance,
- **Activer la protection de la résiliation :** permet de protéger les données contre la résiliation d'une instance EC2,
- **Désactiver la protection de résiliation :** désactive la protection contre la résiliation d'une instance,
- **Activer la protection de résiliation sur un volume :** permet de protéger les données contre la résiliation d'un volume EBS
- **Désactiver la protection de résiliation sur un volume :** désactive la protection de la résiliation du volume
- **Changer les groupes de sécurité**  : Permet de modifier les groupes de sécurité,
- **Créer une AMI**  : Permet de créer une nouvelle AMI,
- **Terminer**  : Cette action résilie l'instance,

### Démarrer une instance

La commande **Démarrer** (instance) est disponible seulement si l'instance est arrêtée.

- Cliquez sur le menu **Actions** de l'instance que vous souhaitez démarrer,
- Sélectionnez **Démarrer** la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image076.png#bordered)

- Cliquez sur le bouton **Valider** , un premier message vous avertit que l'instance est en cours de démarrage. Attendez le deuxième message qui vous avertit lorsque l'instance est démarrée, puis rafraichissez à l'aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_amazon/image066.png#bordered) , le tableau des instances apparaît avec l'instance démarrée, le champ **Statut** passe à l'état **Running**.

### Redimensionner un gabarit de VM

Pour redimensionner un gabarit de VM, celle-ci doit préalablement arrêtée. Sélectionnez la commande **Redimensionner** depuis la colonne/menu **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image077.png#bordered)

Sélectionnez le nouveau gabarit que vous souhaitez puis validez à l'aide du bouton **Valider**.

### Redémarrer une instance

La commande **Redémarrer** est disponible seulement si l'instance est démarrée.

- Cliquez sur le menu **Actions** de l'instance que vous souhaitez redémarrer,
- Sélectionnez **Redémarrer,** la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image078.png#bordered)

- C ![Image](/img_fr/img_UIC_Services/img_amazon/image066.png#bordered) liquez sur le bouton **Valider** , un premier message vous avertit que l'instance est en cours de démarrage. Attendez le deuxième message qui vous avertit lorsque l'instance est redémarrée, puis rafraichissez à l'aide du bouton suivant , le tableau des instances apparaît avec l'instance démarrée, le champ **Statut** passe à l'état **Running**.

### Eteindre une instance

Cette opération mettra l'instance sélectionnée dans un état « Stopped ». La machine virtuelle est arrêtée mais reste associée à l'hyperviseur qui la gère. Au prochain démarrage, elle sera gérée par ce même hyperviseur.

- Sélectionnez la commande **Eteindre** depuis la colonne **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image079.png#bordered)

- Cliquez sur le bouton **Valider** , un message vous avertit que l'instance est en cours d'arrêt.

Patientez, puis rafraichissez à l'aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_amazon/image066.png#bordered) , le tableau des instances apparaît, le statut de l'instance passe à l'état _stopped_.

### Activer la protection de la résiliation

Cette fonctionnalité vous permet de protéger une VM contre des suppressions involontaires. Sélectionnez la commande **Activer la protection de la résiliation** depuis la colonne/menu **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image080.png#bordered)

- Cliquez sur le bouton **Valider** , un premier message vous avertit que l'activation de la protection est en cours. Attendez le deuxième message qui vous informe lorsque l'instance est protégée.

### Désactiver la protection de la résiliation

Cette fonctionnalité vous permet de désactiver la protection d'une VM contre la résiliation. Sélectionnez la commande **Désactiver la protection de la résiliation** depuis la colonne/menu **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image081.png#bordered)

- Cliquez sur le bouton **Valider** , un premier message vous avertit que l'activation de la protection est en cours. Attendez le deuxième message qui vous informe lorsque la protection est désactivée.

### Changer les groupes de sécurité

Vous pouvez changer les groupes de sécurité à l'aide de la commande **Changer les groupes de sécurité** depuis la colonne/menu **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image082.png#bordered)

- Sélectionnez les groupes de sécurité que vous souhaitez appliquer puis cliquez sur le bouton **Valider**. Attendez le message qui vous informe lorsque la modification est appliquée.

### Créer une image

Pour faire une image de l'instance, sélectionnez la commande **Créer une AMI** depuis la colonne/menu **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image083.png#bordered)

L'identifiant de l'instance est indiqué.

- Saisissez le nom de l'image puis cliquez sur le bouton **Créer**.

L'image créée sera ajouté à la table des AMI et accessible via le menu AMI.

### Terminer une instance

- Sélectionnez la commande **Terminer** depuis la colonne **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image084.png#bordered)

- Cliquez sur le bouton **Supprimer** , l'instance n'apparaitra plus dans la liste. Si la page ne se met pas à jour automatiquement, cliquez sur le bouton prévu pour la mise à jour explicite.

## Stockage

### Les volumes

La rubrique **Volumes** liste les volumes alloués dans la zone géographique sélectionnée. Depuis le menu **Clouds -> Amazon AWS -> Tenant** , sélectionnez l'item **Stockages -> Volumes,** la page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image085.png#bordered)

Toutes les informations et les actions possibles sur les volumes sont affichées dans
 ce tableau :
- **ID**  : Indique l'identifiant du volume,
- **Nom** : Indique le nom du volume,
- **Taille**  (GB) : Indique la taille du volume,
- **Type :** Permet d'identifier le type de disque, par exemple standard,
- **IOPS :** indique les caractéristiques IOPS du volume,
- **Instantané :** indique le nom de l'instantané du volume,
- **Date de création**  : Indique la date de création du volume,
- **Zone**  : Indique le lieu où est situé le volume,
- **Etat**  : Indique si le disque est déjà associé à une machine virtuelle ou si celui-ci est disponible,
- **Instance** : Indique les paramètres suivants :
  - ID de l'instance : indique l'identifiant de la VM à laquelle le volume est rattaché,
  - Heure de l'attachement : indique la date et l'heure du rattachement du volume à l'instance de VM,
  - État : attaché ou détaché,
  - DeleteOnTermination : indique s'il faut supprimer le volume à la terminaison de l'instance de la VM attachée,
  - Périphérique : Nom du périphérique associé au volume.

**Actions**  :

- **Attacher :** Permet d'attacher un volume à une instance,
- **Détacher :** Permet de détacher un volume d'une instance,
- **Prendre un instantané :** Permet de sauvegarder le volume,
- **Supprimer :** Permet de supprimer un volume,

### Créer un volume

Depuis la plateforme _UiC_, sélectionnez le menu **Clouds -> Amazon AWS -> Tenant** sélectionnez l'item **Stockage -> Volumes**, la page **Volumes** apparaît.

- Cliquez sur le bouton **Créer un Volume**, la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image086.png#bordered)

- Saisissez dans la zone **Nom** le nom du volume,
- Choisissez le type de technologie souhaitée (General purpose, Provisioned IOPS, Magnetic) depuis le menu déroulant **Type** ,
- Précisez la taille du volume (en GB),
- Précisez la zone de disponibilité du volume,
- Cliquez sur le bouton **Créer** ,

Le volume créé est maintenant visible depuis le tableau de la page des volumes.

### Les sauvegardes de volumes

La rubrique **Sauvegarde de volume** liste tous les instantanés (sauvegardes) créés. Lorsque vous cliquez sur cet item, _UIC_ affiche votre liste avec les caractéristiques de chaque instantané ainsi que les actions à appliquer.

![Image](/img_fr/img_UIC_Services/img_amazon/image087.png#bordered)

_UIC_ affiche pour chaque instantané, les paramètres suivants :

- **ID** : Indique l'identifiant de l'instantané,
- **Nom :** Indique le nom de l'instantané,
- **Taille**  : Taille disque de l'instantané (en GB),
- **Description :** Indique la description brève de l'instantané,
- **Date** : Date de création de l'instantané,
- **Volume :** Indique l'identifiant du volume,
- **Actions**  : **Créer un volume**  : Cette commande vous permet de créer un volume
- **Supprimer**  : Permet de supprimer la sauvegarde.

### Supprimer une sauvegarde du volume

Vous pouvez supprimer individuellement ou par lots les sauvegardes d'instantanés.

![Image](/img_fr/img_UIC_Services/img_amazon/image088.png#bordered)

Si vous souhaitez supprimer une sauvegarde individuelle,

- Cliquez sur le menu **Actions -> Supprimer** associé à la sauvegarde que vous souhaitez supprimer.

Si vous souhaitez supprimer plusieurs sauvegardes en une seule opération,

- Cochez case par case ou cochez la case qui se trouve en tête de tableau (en haut à gauche)
- Cliquez sur le bouton **Supprimer les sauvegardes de volume** ,

## OMI

Les images des machines virtuelles _Amazon AWS_ sont des ressources associées aux régions du Cloud _Amazon AWS_. Chaque région possède son offre propre de machines virtuelles, qui peut être différente de celles des autres régions, notamment en matière de gabarits et de tarification.

Pour accéder aux commandes concernant la gestion des images de VMs, sélectionnez le menu **Clouds -> Amazon AWS -> Tenant** ,

- Séléctionnez l'item **OMI** , deux sous items (Images privées et images publiques) apparaîssent :

![Image](/img_fr/img_UIC_Services/img_amazon/image089.png#bordered)

En fonction de l'item choisi (images privées ou publiques) la liste des images déclarées apparaît :

- **Nom :** Nom de l'image,
- **ID**  : Identifiant de l'image,
- **Source :** Source de l'image
- **Description :** Description de l'image
- **Plateforme :** Système d'exploitation de base
- **Type de périphérique** : type de périphérique de l'image
- **Virtualisation** : type de virtualisation de l'image
- **Architecture** : Architecture processeur
- **Actions**  : **Déployer**  : Permet de déployer l'image,
**Supprimer** : Permet de supprimer l'image (images privées uniquement).

### Déployer une image publique

Pour accéder à la gestion des images publiques de machines virtuelles, sélectionnez le menu **Clouds -> Amazon AWS* -> Tenant\ -> OMI -> Images publiques** , la page contenant la liste des images publiques apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image090.png#bordered)

- Sélectionnez l'image à déployer à l'aide du menu **Actions -> Déployer** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image091.png#bordered)

- Indiquez le nom de l'application,
- Saisissez le nom du nœud,
- Utilisez le menu déroulant **Plateforme de l'image** et sélectionnez le système d'exploitation de base correspondant à l'image _Amazon AWS_ sélectionnée,
- Cliquez sur le bouton **Déployer** , la page de préparation des déploiements s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image092.png#bordered)

- Poursuivez l'étape de préparation du déploiement. Les détails sur cette étape sont

dans la section _Configuration d'un déploiement_.

### Déployer une image privée

Pour accéder à la gestion des images privées de machines virtuelles, sélectionnez le menu **Clouds -> Amazon AWS -> Tenant -> OMI -> Images privées** , la page contenant la liste des images privées apparaît. Cliquez ensuite sur le menu **Actions -> Déployer**  associé à l'image que vous souhaitez instancier, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image093.png#bordered)

- Indiquez le nom de l'application,
- Saisissez le nom du nœud,
- Utilisez le menu déroulant **Plateforme de l'image** et sélectionnez le système d'exploitation de base correspondant à l'image privée sélectionnée,
- Cliquez sur le bouton **Déployer** , la page de préparation des déploiements s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image092.png#bordered)

- Poursuivez l'étape de préparation du déploiement. Les détails sur cette étape sont

dans la section _Configuration d'un déploiement_.

## Réseau et sécurité

L'item **Réseau et sécurité** permet d'accéder aux ressources de type groupes de sécurité, paires de clés et adresses IP déclarées sur le cloud Amazon AWS.

### Groupes de sécurité

Les groupes de sécurité _Amazon AWS_ sont des ressources associées aux régions du Cloud _Amazon AWS_. Chaque groupe de sécurité n'est valide que sur la région à laquelle il est attaché.

Pour accéder aux commandes concernant la gestion des groupes de sécurité _Amazon AWS_, sélectionnez le menu **Clouds -> Amazon AWS -> Tenant -> Réseau et sécurité** , sélectionnez l'item **Groupes de sécurité** , la page **Groupes de sécurité** apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image094.png#bordered)

Cette page contient la liste des groupes de sécurité créés, des actions sont également disponibles.

Le bouton **Créer un groupe de sécurité**  : Cette action permet de créer un groupe de sécurité,

Le bouton **Supprimer les groupes de sécurité**  : Cette action supprime l'ensemble des groupes de sécurité sélectionnés,

La liste des groupes de sécurité déclarés chez **Amazon AWS** est présentée sous forme de tableau :
- **ID** : Indique l'identifiant du groupe de sécurité,
- **Nom**  : Indique le nom du groupe de sécurité,
- **Description**  : Indique la description du groupe de sécurité,
- **VPC**  : VPC auquel le groupe de sécurité est attaché,
- **Tags**  : Tags associés au groupe de sécurité,
- **Propriétaire**  : Identifiant Amazon AWS propriétaire du groupe de sécurité,
- **Nombre de règles**** entrantes** : Indique le nombre de règle rattaché au groupe de sécurité,
- **Nombre de règles**** sortantes** : Indique le nombre de règle rattaché au groupe de sécurité,
- **Actions**  :
- **Supprimer**  : Cette action supprime le groupe de sécurité.

#### Création d'un groupe de sécurité

Depuis la page **Groupe de sécurité** , cliquez sur le bouton **Créer un groupe de sécurité** , le formulaire **Créer un groupe de sécurité** apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image095.png#bordered)

- Saisissez le nom du groupe, il doit être unique dans la base des groupes de sécurité.
- Saisissez une description textuelle succincte de ce groupe.
- Sélectionnez le VPC auquel vous souhaitez associer ce groupe de sécurité.
- Cliquez sur le bouton **Créer** pour confirmer.

_UIC_ affiche une notification indiquant que le groupe de sécurité est en cours de création. En cas de succès, UIC affiche automatiquement le formulaire qui permet de configurer les règles de pare-feu pour ce groupe de sécurité. Ce formulaire est décrit dans le paragraphe. Ajouter une règle à un groupe de sécurité.

**Remarque : Il arrive que lorsque la création du groupe de sécurité est réussie, le formulaire de configuration des règles de sécurité ne s'affiche pas automatiquement, si tel est le cas, actualisez l'affichage du tableau à l'aide du bouton ![Image](/img_fr/img_UIC_Services/img_amazon/image066.png#bordered)  .**

#### Ajouter une règle à un groupe de sécurité

L'ajout d'une règle à un groupe de sécurité existant s'effectue à partir de la page **Groupes de sécurité** ,

![Image](/img_fr/img_UIC_Services/img_amazon/image094.png#bordered)

- Cliquez sur le lien de la colonne **ID** , la page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image096.png#bordered)

- Cliquez sur le bouton **Modifier** , la boite de dialogue apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image097.png#bordered)

Complétez les zones de saisie :
- **De**  : Indiquez le premier numéro de port auquel la règle s'appliquera,
- **Jusqu'à** : Indiquez la borne maximale des ports auxquels la règle s'appliquera,
- **Protocole** : Indiquez le protocole réseau concerné (TCP, UDP, ICMP),
- **Source** : Indiquez la source concernée (adresse IP unique ou segment d'adresses IP),
- Cliquez sur le bouton **Valider** pour ajouter la règle,

Vous pouvez créer autant de règles de sécurité que nécessaires pour votre cas d'usage.

### Les paires de clés

Les paires de clé _Amazon AWS_ sont des ressources associées dans les régions du cloud _Amazon AWS_. Chaque clé n'est valide que sur la région à laquelle elle est attachée.

Pour accéder aux commandes concernant la gestion des paires de clé de sécurité _Amazon AWS_, sélectionnez le menu **Clouds -> Amazon AWS -> Tenant -> Réseau et sécurité**.

- Cliquez sur l'item **Paires de clés** , la page **Paires de clés** apparaît, contenant la liste des clés déjà créées :

![Image](/img_fr/img_UIC_Services/img_amazon/image098.png#bordered)

Cette page contient sous forme de tableau les paramètres des paires de clés existantes :

**Nom** : Indique l'identifiant de la paire de clés,

**Empreinte**  : indique la valeur de l'empreinte de la clé de sécurité,

**Actions**  :

- **Supprimer**  : Cette action supprime la paire de clés,

Le bouton **Créer une paire de clés**  : Cette action permet de créer une paire de clés,

Le bouton **Supprimer les paires de clés**  : Cette action supprime l'ensemble des clés sélectionnées dans le tableau, Pour sélectionner les clés, cochez les cases situées sur la colonne à gauche de la colonne **Nom** du tableau.

#### Création d'une paire de clés

- Cliquez sur le bouton **Créer une paire de clés** , la fenêtre suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image099.png#bordered)

- Entrez le nom de votre paire de clés dans la boîte de dialogue **Créer une paire de clés** , puis cliquez sur **Créer**. La clé privée sera téléchargée automatiquement.Lorsque la clé est créée, elle apparaît dans le tableau des clés associées.

**Remarque : Pensez à protéger la clef sur disque, en effectuant les opérations nécessaires, par exemple sous Linux, vous pouvez exécuter la commande suivante :**

chmod 0600 yourPrivateKey.pem

#### Import d'une paire de clés

- Cliquez sur le bouton **Importer une paire de clés** , la fenêtre suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image100.png#bordered)

- Entrez le nom de votre paire de clés dans le champ **Nom de la paire de clés**. Vous avez deux possibilités :
  - Soit vous télécharger le fichier contenant la clé publique que vous souhaitez importer, à l'aide du bouton «  **Parcourir** »,
  - Ou bien vous copiez le contenu du fichier de la clé publique et vous l'insérer dans la fenêtre intitulée «  **Contenu de la clé publique**  ».
- Cliquez ensuite sur le bouton «  **Importer**  » pour finaliser l'opération.

### Adresses IP externes

La rubrique **Adresses**** IP externes** permet d'afficher la liste des adresses IP externes déjà créées. Vous pouvez également en créer de nouvelles ou supprimer celles dont vous n'avez plus l'usage.

#### Afficher la liste des Adresses IP externes

Depuis la plateforme _UiC_, sélectionnez le menu **Clouds* -> Amazon AWS -> Tenant -> Réseau et sécurité -> Adresses -> IP externes** , _UiC_ affiche la page illustrée ci-dessous :

![Image](/img_fr/img_UIC_Services/img_amazon/image101.png#bordered)

La fonction **Change columns** : Elle permet d'afficher dans le tableau l'ensemble des paramètres liés au volume,

La fonction **CSV** : Vous avez la possibilité d'exporter le tableau web affiché dans un format CSV,

Le tableau affiche les informations et actions suivantes :
- **IP d'allocation**  : Identifiant de l'allocation attribué à l'adresse,
- **Adresse IP** : Valeur de l'adresse publique,
- **Adresse IP privée** : Adresse IP privée de l'instance d'attachement,
- **Instance** : Instance de rattachement,
- **Portée** : Indique la portée de l'adresse IP (standard, VPC)
- **DNS public** : Nom DNS public attaché à l'adresse,
- **ID d'interface réseau**  : Identifiant de l'interface réseau associée à l'adresse,
- **ID du propriétaire de l'interface réseau** : Identifiant du propriétaire de l'interface réseau,
- **Actions**  : **Associer :** permet d'associer l'IP à une instance de VM,
- **Dissocier**  : permet de dissocier l'IP de l'instance d'attachement,
- **Supprimer**  : Permet de supprimer l'IP.

#### Créer une nouvelle adresse IP

Pour créer une nouvelle adresse IP, cliquez sur le bouton **Allouer une nouvelle adresse** , _UiC_ affiche la boite de dialogue suivante :

![Image](/img_fr/img_UIC_Services/img_amazon/image102.png#bordered)

- Choisissez le type d'adresse VPC ou Classic,
- Cliquez sur le bouton **Allouer** , deux messages apparaitront (en cours de création, création effectuée),

![Image](/img_fr/img_UIC_Services/img_amazon/image103.png#bordered)

- Cliquez sur les croix pour les faire disparaitre,
- Actualisez en cliquant sur le bouton suivant ![Image](/img_fr/img_UIC_Services/img_amazon/image066.png#bordered) , l'IP flottante nouvellement créée apparaîtra dans le tableau.

### Supprimer une IP externe

La suppression d'une IP externe peut se faire à l'aide de la commande **Actions -> Supprimer** ,

Ou bien en sélectionnant les adresses à supprimer puis cliquez sur le bouton **Supprimer les IP externes.**

![Image](/img_fr/img_UIC_Services/img_amazon/image104.png#bordered)

- Cliquez sur le bouton **Supprimer** , les messages suivants apparaîssent:

![Image](/img_fr/img_UIC_Services/img_amazon/image105.png#bordered)

## VPC

Le menu VPC permet de gérer les ressources de type VPC et les ressources de type passerelles internet.

### Les VPCs

Depuis la plateforme _UiC_, sélectionnez le menu **Clouds -> Amazon AWS -> Tenant -> VPC -> VPCs** la page contenant le tableau des VPC s'affiche:

![Image](/img_fr/img_UIC_Services/img_amazon/image106.png#bordered)

Cette page affiche les réseaux virtuels configurés sur _Amazon AWS_.
- **ID :** Indique l'identifiant du VPC,
- **Nom** : Indique le nom du réseau,
- **Tags :** affiche la liste des tags associés au VPC,
- **Etat :** Indiquele statut du VPC,
- **CIDR :** Indique le CIDR du VPC,
- **DHCP options set :** options DHCP,
- **Tenancy :** Identifiant du tenant,
- **VPC par défaut :** rôle de VPC par défaut ou non,
- **Actions**:
  - **Supprimer**: Cette action supprime le réseau,

#### Création d'un réseau

Depuis la plateforme _UiC_, sélectionnez le menu **Clouds -> Amazon AWS -> Tenant -> VPC -> VPCs** , **Cliquez sur le bouton** Créer un Réseau** , le formulaire **Créer un réseau** apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image107.png#bordered)

**VPC :**

- Saisissez le nom du réseau dans la zone **VPC** ,

**Nouveau sous-réseau :**

- Saisissez le nom du sous-réseau dans la zone **Nom** ,
- Saisissez le **Bloc CIDR du sous réseau** (exemple : 192.168.0.0/24),

- Sélectionnez la zone de création du VPC,
- Cliquez sur le bouton **Créer** ,
 Le VPC créé apparaît dans la liste depuis la page **VPCs** , vous pouvez consulter chaque réseau, sous réseau(x), visualisable(s),

![Image](/img_fr/img_UIC_Services/img_amazon/image108.png#bordered)

Le tableau affiche l'ensemble des paramètres liés au VPC. La description de ces paramètres est incluse dans la section _Les VPCs_ de ce document.

Si vous souhaitez consulter les détails concernant un VPC, cliquez sur le lien du réseau concerné de la colonne **ID** , la page des détails apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image109.png#bordered)

Cette page est constituée de deux zones :

- Une zone qui contient les paramètres globaux du VPC,
- Une zone composée d'un onglet présentant la passerelle attachée au VPC et d'un onglet présentant la table des sous-réseaux associés au VPC, ainsi qu'un bouton de création de nouveaux sous-réseaux.

#### Ajout d'un sous-réseau

Pour ajouter un sous-réseau à un VPC existant, cliquez sur le lien bleu de la colonne **ID** du VPC, la page contenant les détails sur le VPC apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image109.png#bordered)

- Cliquez sur Créer un sous-réseau, la boite de dialogue suivante s'affiche :

!![Image](/img_fr/img_UIC_Services/img_amazon/image110.png#bordered)

- Saisissez le nom du sous-réseau,
- Définissez le bloc CIDR du sous-réseau,
- Sélectionnez la zone de disponibilité du sous-réseau,
- Cliquez sur le bouton **Créer**. UIC affiche le résultat de la création (succès ou échec) et ajoute le sous-réseau créé à la table existante. En cas de succès, si cette nouvelle entrée n'est pas affichée automatiquement, appuyez sur le bouton de mise à jour forcée associé à la table des sous-réseaux.

#### Suppression d'un sous-réseau

Pour supprimer un sous-réseau d'un VPC existant, cliquez sur le bouton **Actions**  **Supprimer** associé au sous-réseau. UIC affichera une boite de dialogue vous demandant de confirmer la suppression. Cliquez sur le bouton **Supprimer** pour effectuer la suppression définitive du sous-réseau.

#### Suppression d'un VPC

Pour supprimer un VPC, cliquez sur le bouton **Actions**  **Supprimer** associé au VPC. UIC affichera une boite de dialogue vous demandant de confirmer la suppression :

![Image](/img_fr/img_UIC_Services/img_amazon/image111.png#bordered)

Cochez la case **Supprimer toutes les dépendances du VPC** , puis cliquez sur le bouton **Supprimer** pour effectuer la suppression définitive du VPC.

### Les Passerelles

Depuis la plateforme _UiC_, sélectionnez le menu **Clouds -> Amazon AWS -> Tenant -> VPC -> Passerelles -> Passerelles Internet,** la page des passerelles internet s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image112.png#bordered)

- **ID:** Indique l'identifiant de la passerelle,
- **Nom** : Indique le nom de la passerelle,
- **VPC** : Nom du VPC auquel la passerelle est attachée,
- **Tags :** Liste les tags associés à la passerelle,
- **Statut :** Indiquele statut de la passerelle (attachée, détachée),
- **Actions**:
  - **Supprimer**  : Cette action supprime la passerelle,

## Equilibreur de charge

L'équilibreur de charge (désigné par ELB dans la suite de ce document) permet de mettre en place une distribution automatique du trafic entrant en optimisant les ressources sollicitées en fonction de leur charge, état de fonctionnement.

Lorsque vous créez un équilibreur de charge dans un VPC, vous devez choisir entre un équilibreur de charge interne et un équilibreur de charge accessible sur Internet (désigné ici par externe).

| **Nature de l'ELB** | **Description** |
| --- | --- |
| Interne | Les nœuds d'un équilibreur de charge interne ont des adresses IP privées uniquement. Le nom DNS d'un équilibreur de charge interne est publiquement résolu en les adresses IP privées des nœuds. Les équilibreurs de charge internes acheminent uniquement des demandes de clients avec un accès au VPC de l'équilibreur de charge. |
| Externe | Les nœuds d'un équilibreur de charge accessible sur Internet ont des adresses IP publiques. Le nom DNS d'un équilibreur de charge accessible sur Internet est publiquement résolu en les adresses IP publiques des nœuds. |

Depuis la plateforme _UiC_, sélectionnez le menu **Clouds** _ **Amazon AWS** _  \< **Tenant\>**  **Equilibreurs de charge**** ,** la page des équilibreurs de charge s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image113.png#bordered)

Initialement la table est vide. Le bouton **Créer un équilibreur de charge**  permet de créer une nouvelle entrée dans cette table.

La liste des équilibreurs de charge s'affiche sous forme de tableau dans lequel les informations suivantes seront disponibles :
- **Nom**  : Indique le nom l'équilibreur de charge,
- **DNS**  : Enregistrement DNS affecté à l'ELB,
- **VPC**  : VPC ou sera exécuté l'ELB,
- **Zone de disponibilité**  : Zone de disponibilité choisie pour l'exécution de L'ELB,
- **Nombre d'instances**  : Indique le nombre d'instance affectés à l'ELB,
- **Date de création**  : Date de Création de l'ELB,
- **Actions**  :
  - ![Image](/img_fr/img_UIC_Services/img_amazon/image114.png#bordered) 
  - **Health check**  : Intervalle entre deux interrogations du bon fonctionnement de l'ELB, 
  - **Sous-réseaux**  : Sous réseaux utilisé pour l'exécution de l'ELB, 
  - **Instances**  : Permet d'associé de nouvelles instances de VM, 
  - **Listeners**  : Permet de définir ou rajouter les ports d'écoutes utilisés, 
  - **Groupes de sécurité**  : Indique le groupe de sécurité utilisé et permet éventuellement d'en associer un nouveau, 
  - **Attributs**  : Permet de valider la répartition de l'ensemble des instances utilisées sur les différentes zones de disponibilité et le temps de maintien lors des bascules. 
  - **Supprimer**  : Permet de supprimer l'ELB sélectionné. 

### Créer un équilibreur de charge

La création d'un équilibreur de charge s'effectue à partir de la page _Equilibreur de charge_,

![Image](/img_fr/img_UIC_Services/img_amazon/image115.png#bordered)

- Cliquez sur le bouton **Créer un équilibreur de charge** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image116.png#bordered)

- Indiquez le nom de l'équilibreur de charges (sans espace),
- Sélectionnez la zone de disponibilité à l'aide du menu déroulant,
- Sélectionnez le VPC à l'aide du menu déroulant,
- Sélectionnez le sous-réseau,
- Précisez le délai maximum d'inactivité,
- Si vous souhaitez que l'ELB soit interne, cochez la case correspondante,
- Configurez les écouteurs (Listeners) en précisant pour chacun, le protocole et le port clients d'une part, le protocole et le port des instances d'autre part. Configurez également la gestion des sessions d'ELB (Cookie stickiness) en fonction de votre cas d'usage.

Passez à l'étape deux en cliquant sur le bouton **Suivant**. La page de sélection des groupe de sécurité à associer à l'ELB apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image117.png#bordered)

- Cochez les groupes de sécurité souhaités puis cliquez sur le bouton **Suivant**. La page correspondant à l'étape trois apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image118.png#bordered)

Précisez les critères de surveillance de l'état de fonctionnement des instances :
- **Health check**   **protocol** : protocole de vérification,
- **Port**  : Port de connexion,
- **Application health check -> URL** : URL de contrôle,
- **Response Timeout**  : Timeout de réponse,
- **Interval**  : Intervalle de vérification,
- **Unhealthy threshold**  : Nombre de vérifications consécutives échouées avant de déclarer l'instance en mauvais fonctionnement,
- **Healthy threshold**  : Nombre de vérifications consécutives réussies avant de déclarer l'instance en bon fonctionnement,

Cliquez sur le bouton **Suivant** , la page de l'étape quatre apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image119.png#bordered)

Sélectionnez les instances qui vont participer à cet équilibrage de charge, puis cliquez sur le bouton **Créer** , un message confirmant la création de l'équilibrage de charge s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image120.png#bordered)

### Supprimer un équilibreur de charge

![Image](/img_fr/img_UIC_Services/img_amazon/image121.png#bordered)

A partir de la page _Equilibreur de charge_, sélectionnez le menu **Actions -> Supprimer** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_amazon/image122.png#bordered)

- Confirmez en cliquant sur le bouton **Supprimer** ,

![Image](/img_fr/img_UIC_Services/img_amazon/image123.png#bordered)

## Les quotas

La plateforme _UIC_ peut collecter et afficher les données concernant les quotas d'utilisation de vos ressources Cloud _Amazon AWS_. Pour accéder à ces données, sélectionnez le menu **Clouds -> Amazon AWS -> Tenant -> Quotas** , vous obtenez la page ci-dessous :

![Image](/img_fr/img_UIC_Services/img_amazon/image124.png#bordered)

La plateforme _UiC_ affiche les quotas des ressources Cloud sous deux formes :

- Une représentation sous forme de tableau récapitulatif indiquant l'usage courant et la limite de chaque type de ressource :
- Nombre d'instances,
- Nombre de CPU,
- Taille totale de mémoire vive RAM,
- Nombre de VPC,
- Nombre d'IP externes,
- Nombre de volumes,
- Taille totale des volumes de type gp2,
- Taille totale des volumes de type io1,
- Taille totale des volumes de type standard
- Une représentation graphique visualisant les quotas globaux, pour toutes les régions, classés par type de ressource,

Lorsqu'une des limites est atteinte, les nouveaux déploiements se terminent en échec. Il sera alors nécessaire de libérer des ressources non utilisées, ou bien d'augmenter la capacité de l'infrastructure Amazon AWS puis augmenter la limite de la ressource manquante.

## Facturation

La plateforme UIC peut collecter et afficher les données de consommation du Cloud _Amazon AWS_. Pour accéder à ces données, sélectionnez le menu **Clouds -> Amazon AWS -> Identifiant Cloud -> Facturation** , _UiC_ affiche un sous-menu avec la liste des commandes implémentées, illustrée ci-dessous :

![Image](/img_fr/img_UIC_Services/img_amazon/image125.png#bordered)

### Aperçu des coûts

L'aperçu des coûts affiche la page suivante :

![Image](/img_fr/img_UIC_Services/img_amazon/image126.png#bordered)

Cette page affiche les données des coûts en fonction des critères sélectionnés. Vous pouvez choisir les critères parmi les catégories suivantes :

- **Comptes**  : Tous les comptes ou bien un compte ou encore une liste de comptes,
- **Période**  : sélectionnez la période qui vous intéresse,
- **Type de coûts**  : pondérés, amortis, non pondérés,
- **Classification** : Par région, par type d'usage, par type de frais,

### Factures

Le menu **Factures** affiche une page contenant un onglet **Factures** et un onglet **Analyse de facture** , comme illustré sur la figure suivante :

![Image](/img_fr/img_UIC_Services/img_amazon/image127.png#bordered)

L'onglet **Factures** présente les montants des factures mensuelles sur la période choisie. Les fichiers pdf de ces factures sont téléchargeables.

L'onglet Analyse de facture permet d'afficher les détails des factures mensuelles comme illustré sur la figure suivante ;

![Image](/img_fr/img_UIC_Services/img_amazon/image128.png#bordered)

Les détails des coûts sont fournis par service et par région.

### Prévision des coûts

Le menu **Prévision des coûts** affiche une page contenant la prévision des coûts pour le mois en cours :

![Image](/img_fr/img_UIC_Services/img_amazon/image129.png#bordered)

La page affiche le montant consommée depuis le début du mois et une projection de la consommation jusqu'à la fin du mois. Les prévisions peuvent être affichées par compte.

D'autres périodes peuvent être sélectionnées pour cette estimation.

### Explorateur des coûts

Le menu **Explorateur des coûts** affiche une page contenant la répartition des coûts pour une période donnée :

![Image](/img_fr/img_UIC_Services/img_amazon/image130.png#bordered)

Cette page affiche les données des coûts en fonction des critères sélectionnés. Vous pouvez choisir les critères parmi les catégories suivantes :

- **Comptes**  : Tous les comptes ou bien un compte ou encore une liste de comptes,
- **Période**  : Sélectionnez la période qui vous intéresse,
- **Type de coûts**  : Pondérés, amortis, non pondérés,
- **Classification** : Par service, par région, par type d'usage, par type de frais, par type d'instance ou par compte lié.
- **Tags** : Permet de sélectionnez les tags qui vous intéressent.

### Agrégation des coûts

Le menu **Agrégation des coûts** affiche la page suivante :

![Image](/img_fr/img_UIC_Services/img_amazon/image131.png#bordered)

Cette page affiche les données des coûts en fonction des critères sélectionnés. Vous pouvez choisir les critères parmi les catégories suivantes :

- **Comptes**  : Tous les comptes ou bien un compte ou encore une liste de comptes,
- **Période**  : sélectionnez la période qui vous intéresse,
- **Type de coûts**  : Global, par service ou par catégorie.

Si vous sélectionnez l'agrégation par catégorie, UIC affiche les coûts agrégés par catégorie de service (IaaS, PaaS, etc.) comme illustré sur la figure suivante :

![Image](/img_fr/img_UIC_Services/img_amazon/image132.png#bordered)

### Recommandations d'ajustement

Le menu Recommandations d'ajustement affiche la liste des recommandations par instance susceptible d'être ajustée :

![Image](/img_fr/img_UIC_Services/img_amazon/image133.png#bordered)

Les montants des économies réalisables et les suggestions de gabarits préférentiels sont indiqués dans cette page.

### Recommandations

Le menu **Recommandations** affiche la liste des recommandations pour des plans d'économie en fonction des durées d'engagement et et des options de paiement initial :

![Image](/img_fr/img_UIC_Services/img_amazon/image134.png#bordered)

L'onglet **Réservations** permet d'obtenir des recommandations sur les services EC2, les services de base de données, et d'autres services AWS.

### Budgets

Le menu **Budgets** affiche la liste des budgets définis :

![Image](/img_fr/img_UIC_Services/img_amazon/image135.png#bordered)

Vous pouvez créer un budget à l'aide du bouton Créer un budget, la page suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_amazon/image136.png#bordered)

Cette page affiche les types de budget disponibles :

- **Budget de coûts**  : Budget global,
- **Budget d'utilisation**  : Budget par type d'utilisation,
- **Budget de réservation**  : Budget lié aux instances et services en mode réservation,
- **Budget ''Saving plans''**  : Budget de plans d'économies.

Les paramètres de définition d'un budget sont illustrés sur la figure suivante :

![Image](/img_fr/img_UIC_Services/img_amazon/image137.png#bordered)

Une fois le budget défini, vous pouvez configurer des alertes sur des seuils de consommation avec la page suivante :

![Image](/img_fr/img_UIC_Services/img_amazon/image138.png#bordered)

Une fois vos alertes définies, appuyez sur le bouton **Suivant** , la page de récapitulatif s'affiche alors :

![Image](/img_fr/img_UIC_Services/img_amazon/image139.png#bordered)

Vous pouvez modifier la configuration de votre budget si vous le souhaitez. Appuyez sur le bouton **Confirmer** pour enregistrer le budget.

Prologue – [www.useitcloud.com](http://www.useitcloud.com/) Tél : +33(0)1 41 47 70 00

Pour nous contacter au sujet de ce document :support.uic@prologue.fr