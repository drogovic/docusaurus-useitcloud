---
id: 40050
title: Flexible Engine
description: UseITcloud documentation 2.0.0
sidebar_position: 5
---


## **Les commandes communes aux pages de l’IHM**
Les pages et formulaires affichés par *UIC* présentent certaines commandes dont la signification est la même quelle que soit la page qui les présente. Par conséquent, ces commandes seront décrites dans ce chapitre et cette description est applicable à toutes les ressources et tous les formulaires gérés par *UIC* et présentés dans ce document.

Voici la liste et la description de ces commandes :


![Image](/img_fr/img_UIC_Services/img_flexibleengine/image002.png)

- La commande **Afficher X éléments** : Cette commande s’applique aux tableaux affichés par *UIC*. Elle permet de limiter le nombre d’éléments visualisés par page. 
- La commande **Rechercher** : Cette commande s’applique aux tableaux affichés par UIC. Elle permet de rechercher et présenter les éléments contenant la chaîne de caractères spécifiée dans le champ de recherche. 
- La commande **Change columns** : Cette commande s’applique aux tableaux affichés par UIC. Elle permet à l’utilisateur de sélectionner les colonnes qu’il souhaite visualiser. 
- La commande **CSV** : Cette commande s’applique aux tableaux affichés par UIC. Elle permet à l’utilisateur d’exporter le tableau affiché dans un fichier au format CSV. 
- Le bouton d’actualisation  ![Image](/img_fr/img_UIC_Services/img_flexibleengine/image003.png) : Ce bouton permet de forcer l’actualisation des données affichées.


## **Identifiants Cloud Flexible Engine** 
Pour configurer un identifiant de connexion *UIC* à une infrastructure du cloud public *Flexible Engine*, vous avez besoin des paramètres *Flexible Engine* suivants :

- L’adresse de l’hôte des services API *Flexible Engine*,
- Le nom du compte entreprise déclaré sur *Flexible Engine*,
- L’identifiant de connexion aux services API *Flexible Engine*,
- Le mot de passe de l’identifiant de connexion,
- La région de déploiement par défaut,

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l’étape de configuration de ces paramètres dans *UIC*, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l’environnement *Flexible Engine*, vous pouvez créer ou obtenir ces informations en vous connectant sur le portail de gestion : https://selfcare.cloud.orange-business.com/ en tant qu’administrateur de votre compte.

Si vous n’êtes pas familier avec l’environnement *Flexible Engine*, vous pouvez consulter les paragraphes suivants pour découvrir comment créer ou obtenir les identifiants *Flexible Engine* cités ci-dessus.

### ***Obtenir les identifiants d’un nouveau projet Flexible Engine*** 
#### **Création d’un Projet**
- Connectez-vous sur la console technique de *Flexible Engine*, sélectionnez le menu **Management & Deployment -> Identity and Access Management -> Projects -> Create Project**, L’écran suivant s’affiche :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image004.png) 

- Sélectionnez la région du projet puis complétez les zones de saisie, 
- Cliquez sur le bouton **OK** pour confirmer, le projet sera rajouté à la liste des projets. 

#### **Création d’un Utilisateur**
Connectez-vous à la console *Flexible Engine* avec un utilisateur ayant les droits d’administration, Sélectionnez le menu **Services -> Utilisateurs -> Ajout d’un utilisateur**,

Suivez les instructions de la console FE pour créer l’utilisateur avec le profil souhaité.  

### ***Création d’un identifiant Cloud Flexible Engine dans UIC***
Une fois que vous disposez de toutes les informations de connexion précisées dans l’introduction de ce chapitre, vous pouvez sur la plateforme *UIC* procéder à la création d’un identifiant cloud *Flexible Engine*.

Depuis la plateforme *UIC*, sélectionnez le menu **Identifiant -> Identifiants Cloud**, la page permettant de configurer les identifiants des Cloud supportés par UIC apparaît :

- Sélectionnez le fournisseur *Flexible Engine*, 
- Cliquez sur le bouton **Ajouter un identifiant**, le formulaire suivant apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image005.png)

- Complétez les informations demandées dans le formulaire.
	- **Nom de l’identifiant** : Indiquez le nom de l’identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu’à 20 caractères, lettres sans accent, chiffres, tirets).
	- **Hôte** : Indiquez l’URL du service Identity de Flexible Engine (Ex : https://iam.eu-west-0.prod-cloud-ocb.orange-business.com),
	- **Version :** Indiquez la version de l’API,
	- **Compte Entreprise** : Indiquez l’identifiant du compte entreprise à utiliser lors la connexion, (format ```OCBxxxx```)
	- **Identifiant** : Indiquez l’identifiant de connexion au service d’authentification,
	- **Mot de passe** : Indiquez le mot de passe associé à l’identifiant de connexion,
	- **Région par défaut :** Choisissez une région (facultative)
	- **Proxy** : Indiquez l’URL du proxy (facultatif) au format suivant : ```https://user:password@host:port```

#### **Conséquence sur la table des identifiants Flexible Engine** 
L’identifiant créé apparaîtra comme une entrée parmi les identifiants *Flexible Engine*. Vous pourrez le modifier en sélectionnant le menu **Compte:Utilisateur -> Identifiants Cloud**.

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image006.png) 

La table des identifiants vous permet d’exécuter sur chacun d’entre eux les commandes du menu **Actions**. Ces actions sont intitulées **Mettre à jour les projets**, **Configurer l’analyse de facturation**, **Configuration**, **Configurer le proxy**, **Modifier les identifiants** et **Supprimer** (décrites dans les sous chapitres suivants).

#####  Mettre à jour les projets
Lorsque vous créez de nouveaux projets dans la console *FE*, vous pouvez synchroniser la base FE avec la base UIC. Pour cela, cliquez sur le menu **Compte:Utilisateur -> Identifiants Cloud -> Flexible Engine** : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image007.png)

- Sélectionnez la commande **Mettre à jour les projets** depuis la colonne et le menu **Actions**. Lorsque la synchronisation est terminée, le message *Les projets ont été mis à jour* apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image008.png)

- Cliquez sur la croix pour faire disparaitre le message. 

##### Configurer l’analyse de facturation
Pour accéder aux données de votre contrat et particulièrement aux données de consommation et aux factures *Flexible Engine*, vous pouvez souscrire au service ***Cloud Store Customer Space,*** qui permet la gestion des données de votre contrat par API. Cet API requiert trois paramètres :

- Un identifiant associé à l’application, appelé « identifiant de client »,
- Un code secret partagé entre l’application et le serveur d’authentification Orange,
- Un jeton d’API fourni par le service ***Cloud Store Customer Space*** 

Pour obtenir ces paramètres il faut enregistrer l’application UIC via le portail ***Orange Developer (https://developer.orange.com/)***. Cet enregistrement s’effectue en plusieurs étapes :

- Inscrivez-vous puis authentifiez-vous sur le portail ***Orange Developer***,
- Cliquez sur le bouton « My apps »

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image009.png)

- Créez une application à l’aide du formulaire « Create new application », voici un exemple

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image010.png)

- Le portail crée un identifiant d’application, un identifiant de client et un code secret : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image011.png)

Ce formulaire vous indique que vous n’avez souscrit à aucune API pour cette application. Vous pouvez cliquer sur le bouton « Add an API » pour souscrire aux API proposées :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image012.png) 

- Sélectionnez « Cloud Store Customer Space API », puis appuyez sur le bouton « Next », vous passez alors à l’écran suivant, vous indiquant que la souscription est soumise à validation et que vous serez informé par email de l’issue de cette validation :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image013.png)

Une fois que la souscription est acceptée, le statut de l’application est mis à jour dans le tableau des applications enregistrées, comme dans l’exemple suivant :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image014.png)

Pour inscrire ces paramètres dans UIC, cliquez sur le menu **Compte:Utilisateur -> Identifiants Cloud -> Flexible Engine** : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image015.png)

- Sélectionnez la commande **Configurer l’analyse de facturation** depuis la colonne et le menu **Actions**, la boite de dialogue suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image016.png)

- Complétez les zones de saisie puis cliquer sur le bouton **Mettre à jour**.

##### Configuration 
La page des Identifiants Clouds s’affiche depuis le menu **Compte:Utilisateur -> Identifiants Cloud -> Flexible Engine** : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image017.png)

- Sélectionnez la commande ***Configuration*** de la colonne, menu **Actions**, la boite de dialogue **Configuration de l’Flexible Engine …** apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image018.png)

- Sélectionnez le menu **Région par défaut** si nécessaire puis cliquez sur le bouton **Mettre à jour**.
- Saisissez le délai d’attente souhaité pour le Cloud *Flexible Engine*, cliquez sur le bouton **Mettre à jour**. 

Pour chaque déploiement, *UIC* commande le provisionnement des VM auprès du Cloud cible et attend une réponse de celui-ci, indiquant le résultat du déploiement (succès ou échec). Le temps de ce provisionnement dépend principalement de la charge et des performances du Cloud cible, de l’image OS et logiciels à installer sur la VM et des conditions réseau entre la plateforme *UIC* et ce Cloud. Le délai d’attente, à configurer pour ce paramètre, correspond au temps maximum au-delà duquel une absence d’indication de fin de déploiement peut être considérée par *UIC* comme un échec de déploiement. 

Compte-tenu du fait que ce délai est variable d’une infrastructure à une autre, *UIC* vous offre la possibilité d’indiquer la valeur la plus convenable pour votre environnement. 

##### Modifier la Configuration du proxy
La page des Identifiants Clouds s’affiche depuis le menu **Compte:Utilisateur -> Identifiants Cloud -> Flexible Engine**. 

- Sélectionnez la commande ***Configuration du proxy*** de la colonne, menu **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image019.png)

- Saisissez l’URL du proxy,
- Cliquez sur le bouton **Sauvegarder**,

##### Modifier un identifiant
La page des Identifiants Clouds s’affiche depuis le menu **Compte:Utilisateur -> Identifiants Cloud -> Flexible Engine**. 

- Sélectionnez la commande ***Modifier identifiant*** du menu **Actions**, la boite de dialogue suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image020.png)

- Apportez les modifications nécessaires, changez l’URL de connexion (Hôte), la version, …, 
- Cliquez sur le bouton **Sauvegarder**,

#####  Supprimer un identifiant
- Sélectionnez la commande ***Supprimer*** du menu **Actions**, la boite de dialogue suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image021.png)

- Cliquez sur le bouton **Supprimer l’identifiant Cloud**,

#### **Conséquence sur le menu Clouds**
Après l’ajout d’un identifiant Cloud *Flexible Engine*, la plateforme *UIC* crée un item (le Tenant) dans le menu **Clouds -> Flexible Engine -> nom du tenant** (celui attribué à la création).

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image022.png)

Ce tenant vous permet sous son contrôle d’accéder et de piloter les ressources *Flexible Engine*.

#### **Conséquence sur la page de la préparation d’un déploiement**
Après l’ajout de l’identifiant Cloud *Flexible Engine*, il sera ajouté dans la liste des valeurs des fournisseurs de la page de la préparation du déploiement. 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image023.png)

La page des Déploiement est disponible depuis la barre des menus de la plateforme *Use IT Cloud,* bouton **Configuration des déploiements.** La page **Préparation de déploiements** apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image024.png)

- Cliquez sur le bouton **Configurer**, la page **Préparation du déploiement** de … apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image025.png)

Le menu déroulant **Fournisseur** contient l’identifiant nouvellement créé. 

#### **Conséquence sur le formulaire de référencement d’une image fournisseur**
Après l’ajout d’un identifiant Cloud *Flexible Engine* , le nom de cet identifiant sera rajouté dans la liste des fournisseurs du menu **Design -> Images** -> **Référencer une image fournisseur**, son formulaire s’affiche et l’identifiant sera sélectionnable depuis le menu déroulant **Fournisseur**.

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image026.png)

Ceci permet de référencer des images de VM disponibles chez les fournisseurs et les rendre privées pour le tenant spécifié. 

#### **Conséquence sur la gestion des rôles *UIC***
Lorsque vous ajoutez un identifiant Cloud *Flexible Engine* à un compte, pensez à configurer les permissions appropriées aux utilisateurs de ce compte. 

Voici le tableau des ressources *Flexible Engine* et des permissions configurables dans *UIC* :

|**Type de ressources**|**Liste de permissions applicables**|
| - | - |
|Instances |Lister, Déployer une instance, Gérer l’état (stopper, démarrer), Supprimer.|
|Volumes|Lister, Créer, Attacher, Détacher, Modifier, Supprimer.|
|Sauvegarde des volumes|Lister, Supprimer.|
|Paires de clés|Lister, Créer, Supprimer.|
|Réseau|Lister, Créer, Modifier, Supprimer.|
|Groupe de sécurité|Lister, Créer, Modifier, Supprimer.|
|IP flottantes|Lister, Créer, Associer (dissocier, modifier) Supprimer.|
|Images|Lister, Créer, Modifier, Supprimer.|
|Quotas|Lister.|
|Consommation|Lister.|

Vous pouvez utiliser les rôles prédéfinis par *UIC*, ou bien créer de nouveaux rôles et les configurer à votre convenance. Vous pourrez ensuite attribuer ces rôles à des groupes ou à des utilisateurs conformément à votre environnement de production.

Les détails sur la gestion des utilisateurs, des groupes et des rôles sont fournis dans le document intitulé **UiC_Guide_UserAdmin_FR** qui accompagne *UIC*.

## **Déploiements**
Le déploiement au travers *Flexible Engine* nécessite les prérequis obligatoires suivants : 

- Un tenant (se référer au chapitre **Création d’un identifiant Cloud Flexible Engine dans UIC**) 
- Un référencement d’image(s). 

Le processus de déploiement d’une application est composé de trois grandes étapes :

- Une étape de configuration, appelée pré-déploiement. Cette étape permet de configurer l’environnement de déploiement,
- Une étape de lancement du déploiement. Cette étape débute à l’instant où le déploiement dans le Cloud est déclenché. Elle se termine au moment où le résultat du lancement de l’opération est affiché,
- Une étape de gestion du déploiement appelée post-instanciation. Cette étape prend le relais à la fin de la phase précédente et se termine au moment de la suppression définitive d’une instance de la base de données des déploiements gérés par *UIC*.

### ***Référencer une image***
UIC référence automatiquement toutes les images publiques disponibles sur le Cloud public *Flexible Engine*. Si vous souhaitez référencer des images que vous avez créé vous-même, il suffit de suivre la procédure suivante :

Depuis le menu **Design**, sélectionnez **Images**, la page **Images publiques** apparaît :  

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image027.png)

- Cliquez sur le bouton **Référencer une image fournisseur**, le formulaire **Référencer une image fournisseur** s’affiche :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image028.png)

Le formulaire permet de rechercher et d’associer une image fournisseur sur la plateforme *UIC*. 

- Sélectionnez le fournisseur et le tenant depuis le menu déroulant **Fournisseur**, vous accédez à la liste des images privées disponibles chez le fournisseur,
- Sélectionnez la région,
- Sélectionnez le projet,
- Par défaut UIC affiche uniquement les images privées créées par le tenant sur le Cloud *FE*, si vous souhaitez afficher les images publiques également, cochez la case **Public**, 
- Sélectionnez l’image depuis le menu déroulant **Image**, 
- Sélectionnez le système d’exploitation de l’image, depuis le menu déroulant **Système d’exploitation**,
- Renseignez le champ **Utilisateur** **par défaut**, il doit avoir le droit « root » pour personnaliser la VM. 

La zone **Mot de passe par défaut** ne doit pas être obligatoirement complétée, le mot de passe sera généré automatiquement à la création de la VM.

#### **Conséquence sur le tableau des référencements des images**
Après avoir référencé des images pour l’identifiant créé, ces images sont enregistrées dans la base de données des images privées de cet identifiant. Ces images sont accessibles depuis le menu **Design -> Images.** 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image029.png)

Choisissez la famille et la version de base qui vous intéresse puis cliquez sur le lien « ***Voir les images disponibles chez les fournisseurs*** ». Dans la page affichée, saisissez « *Flexible Engine* » dans le champ ***Rechercher***, ci-dessous un exemple de table affichée dans le cas de *ubuntu 18*, pour *Flexible Engine* :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image030.png)

Cette page affiche le tableau des images, chacune d’entre elles possède des colonnes avec une liste de paramètres statiques, deux colonnes permettent de modifier les paramètres suivants :

- **Utilisateur** : ce champ indique le nom de l’utilisateur « root » de l’image référencé.
- **Mot de passe** : ce champ indique le mot de passe de l’utilisateur de connexion précisé ci-dessus.

La colonne **Actions** présente deux items :

- **Voir le mot de passe** : cette action permet de voir en clair le mot de passe de l’utilisateur associé à l’image,
- **Supprimer :** cette action permet de supprimer l’image de la base de données.

###  ***Configuration d’un déploiement***
Le déploiement des applications et des VM s’effectue à l’aide du menu **Déployer** -> **Catalogue** -> **Application** -> **Déployer.** L’action **Déployer** permet de configurer l’environnement du déploiement avant de la déclencher réellement. 

- Sélectionnez l’application à déployer, actionnez le bouton **Déployer** correspondant à l’application, vous obtenez l’écran de préparation de déploiement illustré sur l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image031.png)

- Saisissez dans la zone **Etiquette** le nom du déploiement afin de l’identifier,
- Sélectionnez le menu déroulant **Fournisseur** puis *Flexible Engine*, 
- Sélectionnez le menu déroulant **Tenant** (nom de l’identifiant) désiré, s’il y en a plusieurs, 
- Sélectionnez la région du déploiement à l’aide du menu **Région** ainsi que le projet à l’aide du menu **Projet**, 
- Cliquez sur le bouton **Confirmer** pour valider votre choix, vous obtiendrez l’écran de configuration de tous les paramètres généraux et les paramètres spécifiques à *Flexible Engine*. Le détail de configuration de chacun des onglets est décrit dans les prochaines sections. 

#### **Infrastructure**
L’onglet **Infrastructure** vous permet de préciser tous les paramètres nécessaires pour le déploiement sur votre infrastructure *Flexible Engine*, comme illustré sur l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image032.png)

**OS :**  Indique le système d’exploitation lié à l’application,

**Gabarit :** Par défaut un gabarit est proposé, le menu offre une liste des gabarits disponibles chez le fournisseur, dans la région choisie, 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image033.png)

Lorsque vous sélectionnez un gabarit, *UIC* vous indique les caractéristiques du gabarit choisi ainsi que les coûts horaires et les coûts mensuels, comme illustré dans l’exemple ci-dessous : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image034.png)

**Paires de clé :** Par défaut UIC vous propose l’usage d’une nouvelle paire de clef pour ce nœud. Si vous souhaitez changer ce choix, vous pouvez utiliser une des autres options présentées dans le menu : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image035.png)

Sélectionnez l’option souhaitée puis passez à la configuration des paramètres réseau à l’aide de l’onglet réseau, décrit ci-dessous. 

#### **Configuration du réseau**
L’onglet **Réseau** vous permet de préciser tous les paramètres de configuration réseau nécessaires pour le déploiement sur votre infrastructure *Flexible Engine*. Ces paramètres sont illustrés sur la figure suivante :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image036.png)

- **Réseau** : le nom du réseau où la VM sera déployée, la liste déroulante vous présente tous les réseaux configurés,
- **Sous-réseau** : Indique le sous-réseau rattaché au réseau (si aucun n’est présent il faudra le créer), 
- **IP Publique** : Choisissez l’adresse IP publique de la machine virtuelle,
- **Groupe de sécurité** : Ce menu déroulant propose de créer ou de sélectionner un groupe de sécurité : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image037.png)

- Si vous sélectionnez un groupe de sécurité existant, le bouton **Afficher les règles** s’affichera. Ce bouton vous permet de consulter la liste des règles définies par ce groupe, comme illustré dans l’exemple suivant :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image038.png)

- La case à cocher **Accès direct à l’instance** : Cochez cette case si l'instance de la machine virtuelle est dans le même réseau que la plateforme UIC. La communication entre la plateforme et l’instance se fera en utilisant l’adresse privée de l’instance.

#### **Personnalisation d’une instance**
L’onglet P**ersonnalisation** permet de spécifier des paramètres non IaaS d’une instance. Quel que soit le type de VM de base (Linux ou Windows). 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image039.png)

Comme précisé dans le formulaire, la personnalisation de l’instance concerne les paramètres suivants :

- **Nom de l’instance** : Indiquez le nom qui identifiera l’instance sur le Cloud cible,
- **Installer l’agent UIC** : Cochez cette case si vous souhaitez que l’agent UIC soit automatiquement installé dans l’instance,
- **Script prédéfini** : Si vous avez à associer un script prédéfini à cette instance, sélectionnez-le dans la liste déroulante,
- **Script additionnel** : Si vous le souhaitez, ajoutez du code que vous souhaitez être exécuté automatiquement dans l’instance,
- **Tags** : Ajoutez les tags que vous souhaitez attacher à cette instance.

#### **Gestion de configuration**
UIC propose la gestion de configuration des machines virtuelles en mettant en œuvre les outils *Ansible*, *Chef* et *Puppet*. 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image040.png)

Le menu déroulant **Gestion de configuration** les met à disposition. 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image041.png)

Cette mise en œuvre est commune à tous les Cloud, elle n’est donc pas spécifique à *Flexible Engine*. Elle est cependant documentée et détaillée dans le guide intitulé « **UiC_Guide_UserAdmin_FR** ».

#### **Surveillance**
UIC propose la surveillance des machines virtuelles en mettant en œuvre les services de monitoring Centreon ou Zabbix. 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image042.png)

Le menu déroulant **Surveillance** les met à disposition. 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image043.png)Cette mise en œuvre est commune à tous les Clouds, elle n’est donc pas spécifique à *Flexible Engine*. Elle est cependant documentée et détaillée dans le guide intitulé « **UiC_Guide_UserAdmin_FR** ».

Une fois que vous avez fini la configuration, vous pouvez lancer votre déploiement en cliquant sur le bouton **Déployer** (en haut à droite de l’écran) le processus de déploiement est enclenché.

###  ***Opération de déploiement***
Lorsque le déploiement est lancé, la plateforme *UIC* affiche l’écran de progression du déploiement :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image044.png)

La durée nécessaire au déploiement dépend de l’environnement de déploiement (puissance et capacité de votre infrastructure) mais également des caractéristiques de la machine virtuelle à déployer (son gabarit, son système d’exploitation de base et de l’ensemble des logiciels additionnels, du temps nécessaire à l’installation de l’agent si vous l’avez activé pour la VM).

Une fois que l’opération de déploiement est terminée avec succès, *UIC* passe à l’étape de post-instanciation qui permet de gérer la machine virtuelle active. 

### ***Post-Instanciation***
Une fois que le déploiement est terminé avec succès, l’écran **Déploiement** indiquera le statut Déployé dans la colonne **Etat** :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image045.png)

UIC affiche l’identifiant unique pour ce déploiement dans la colonne **Identifiant.** Sa valeur est un champ actif qui vous permet d’accéder aux détails de l’instance déployée. 

Les autres colonnes ont des labels auto-explicatifs du contenu de la colonne. La connexion à l’instance s’effectue depuis la colonne **Actions**, une des deux actions est proposée : 

- **SSH** dans le cas d’une instance Linux,

Ou,

- **RDP Client** dans le cas d’une instance Windows.

Le bouton **Supprimer** permet d’effacer l’instance de la VM.

#### **Connexion aux instances Linux**
Depuis la plateforme *UIC* connectez-vous en ssh aux instances *Linux*. Si vous cliquez sur le bouton **ssh** de la colonne **Actions** vous obtenez l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image046.png)

Cet écran vous affiche les paramètres qui vous permettront de vous connecter à la machine virtuelle en choisissant l’une des deux options :

- En utilisant un outil ssh externe, dans ce cas vous pouvez copier toutes les valeurs des paramètres affichés dans cette fenêtre et les injecter dans l’outil que vous utilisez.
- En utilisant l’outil Shell in a box intégré à UIC, dans ce cas vous avez juste à cliquer sur le bouton **Shell in a box** affiché en bas, à gauche de la fenêtre. UIC vous connectera automatiquement sur la VM et ouvrira une fenêtre dans un onglet dédié de votre navigateur.

#### **Connexion aux instances Windows**
UIC vous permet de vous connecter en RDP à une instance Windows, à condition que la connexion Bureau à distance soit autorisée sur cette instance. Assurez-vous que cette condition est respectée en vous connectant sur la console de la VM et en vérifiant au niveau du paramétrage du firewall Windows, que les bonnes options sont activées, comme illustré sur l’écran ci-dessous :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image047.png)

#####  Options de connexions 
Si vous cliquez sur le bouton **RDP Client** de la colonne **Actions** vous obtenez l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image048.png)

Cet écran vous affiche les paramètres qui vous permettront de vous connecter à la VM en choisissant l’une des deux options :

- En utilisant un outil RDP externe, dans ce cas vous pouvez copier toutes les valeurs des paramètres affichés dans cette fenêtre et les injecter dans l’outil que vous utilisez.
- En utilisant la procédure proposée par UIC, dans ce cas vous avez juste à cliquer sur le bouton **Télécharger le fichier RDP** affiché en bas, à gauche de la fenêtre. Suivez en suite les instructions et les étapes décrites ci-dessous.

##### Connexion Bureau à distance 
Lorsque vous cliquez sur le bouton **Télécharger le fichier RDP,** Windows vous affiche la fenêtre suivante : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image049.png)

- Sélectionnez **Ouvrir avec** : **Connexion Bureau à distance**, puis cliquez sur **OK.** Vous obtiendrez la fenêtre suivante :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image050.png)

- Cliquez sur le bouton **Connexion** pour déclencher l’action de connexion à l’instance, le système Windows affichera une fenêtre semblable à la suivante : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image051.png)

- Entrez le mot de passe de connexion puis cliquez sur **OK**.

**Remarque : Si votre VM ne présente pas un certificat signé par une autorité de confiance, le système affichera la fenêtre suivante :**

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image052.png)

Si vous êtes dans un réseau sécurisé, appuyez sur le bouton **Oui**, sinon corrigez le problème avant de continuer.

Après l’opération d’authentification, le système Windows de la VM affiche la session de l’utilisateur authentifié. Voici un exemple d’écran d’une session Administrateur par défaut :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image053.png)

#### **Détails d’un déploiement**
Vous obtenez la liste des déploiements en cliquant sur le menu **Gérer** -> **Déploiements,** l’écran ci-dessous fournit un exemple de liste. 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image054.png)

Un clic sur le lien **Identifiant** affiche tous les détails du déploiement. 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image055.png)

A partir de cet écran, vous trouverez tous les paramètres qui caractérisent la machine virtuelle et son état. 

**Adresse IP publique** : Permet de supprimer l’adresse publique,

**Groupe de sécurité** : Il est possible de changer, d’ajouter un ou plusieurs groupe(s) de sécurité à l’instance. 

- Cliquez sur l’icône **Crayon**, la page suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image056.png) 

- Cochez-le ou les groupes de sécurité puis cliquez sur le bouton **Valider**.

#####  Actions sur un déploiement 
Dans la zone située en haut, à gauche de la page, *UIC* affiche la liste des actions applicables à un déploiement : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image057.png)

- **Supprimer** : Cette commande permet de supprimer le déploiement de la table des déploiements,
- **Template** : Permet d’afficher le template généré par *UIC* et utilisé pour ce déploiement,
- **Retirer ce déploiement** : Permet de retirer ce déploiement de la table des déploiements, sans supprimer ses ressources des Cloud où elles ont été approvisionnées. UIC affichera le message suivant : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image058.png)

##### Actions sur un nœud 
Depuis la zone centrale *UIC* affiche la liste des actions de management de la machine virtuelle, organisée en deux catégories, **Actions sur le nœud** et **Liste des accès à la machine** :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image059.png)

Voici la description des commandes du groupe **Actions sur le nœud,** en partant de la première icône à gauche :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image060.png)**Démarrer** : Lorsque la machine virtuelle est arrêtée, l’icône permet de la démarrer,

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image061.png)**Stopper** : La machine virtuelle est à l’état démarré, l’icône permet de l’arrêter,

- **Redémarrer** : Cette action permet de redémarrer la machine virtuelle,
- **Exécuter une commande** : Affiche un éditeur de texte qui vous permet de saisir les commandes à exécuter à distance sur la VM. 
- **Remarque : Cette commande n’est disponible que si l’agent *UIC* est installé sur la machine virtuelle.**
- **Pause :** Cette action permet de mettre en pause la machine virtuelle,

Les commandes du groupe **Liste des accès à la machine** vous permettent d’accéder à distance à la machine à l’aide d’une des deux options :

- **RDP** (pour Windows) ou **SSH** (pour Linux) : La méthode d’accès est décrite dans la section **Post-Instanciation**.

#### **Suppression d’un déploiement**
Vous pouvez utiliser le menu **Gérer** -> **Déploiements** pour supprimer un déploiement. La liste des déploiements s’affiche : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image062.png)

- Sélectionnez la liste déroulante **Actions** du déploiement que vous souhaitez supprimer, choisissez la commande **Supprimer**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image063.png)

- Cliquez sur le bouton **OK** pour confirmer la suppression, après avoir validé, l’opération de suppression se déclenche auprès de l’infrastructure Flexible Engine. 

La plateforme attend la réponse de suppression définitive avant de passer le déploiement à l’état **Supprimé**, comme indiqué dans l’exemple suivant :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image064.png)

**Remarque : Les ressources du déploiement supprimé sont complètement désallouées de l’infrastructure Cloud, en revanche quelques métadonnées restent encore en mémoire de la plateforme *UIC*.** 

Pour supprimer aussi les données et la ligne correspondante dans la table des déploiements, cliquez sur le bouton **Supprimer** de la colonne **Actions**. La boite de dialogue « Are you sure you want to delete this service ? »  apparaît :

- Cliquez sur le bouton **OK** pour confirmer la suppression des métadonnées.

## **Tableau de bord *Flexible Engine*** 
Une fois que les prérequis sont validés, vous pourrez alors gérer les ressources de vos tenants *Flexible Engine.* Depuis le menu *UIC* **Clouds** -> **Flexible Engine** -> **Identifiant Cloud**, le tableau de bord apparaît. 

La page **Tableau de bord** vous affiche des indicateurs sur l’utilisattion des ressources IaaS rattachées au tenant sélectionné et au compte authentifié.

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image065.png)

La page est divisée en deux parties (gauche et centrale), le contenu de la partie centrale affiche des informations variables (en fonction des items sélectionnés), ci-dessous celles du tableau de bord : 

- Le bouton ![Image](/img_fr/img_UIC_Services/img_flexibleengine/image003.png) (Informations actualisées) : Indique le temps écoulé depuis la dernière mise à jour. Si vous cliquez sur ce bouton vous forcerez l’actualisation des données.
- La brique **Instance** : Indique le nombre total d’instances (machines virtuelles) ainsi que le nombre arrêté et démarré,
- La brique **Volumes** : Indique le nombre total de volumes configurés ainsi que le nombre de attachés et disponibles,
- La brique **IP Flottantes** : Indique le nombre total d’IP flottantes 
- La brique **Groupe de Sécurité**, **Paires de clés** & **Réseaux** : Indique le nombre total de paires de clés, de groupe de Sécurité et de réseaux configurés,
- Le graphique **Usage** : Il affiche toutes les ressources utilisées et le coût total. 
- Le graphique **Instances** : Il représente le nombre total d’instances (tenant) ainsi que le nombre démarré, arrêté. Cet indicateur fournit la répartition en nombres et en pourcentages,
- Le graphique **Volumes** : Il représente le nombre total de volumes ainsi que le nombre attaché, disponibles. L’indicateur fournit la répartition en nombres et en pourcentages,
- Le graphique **Instances par région** : Il représente le nombre total d’instances par région, ainsi que le nombre démarré, arrêté. 
- Un graphique **Volumes** **par région** :  Il représente le nombre total de volumes par région ainsi que le nombre de volumes attaché, disponible. 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image066.png)

Les menus déroulants permettent de sélectionner la région et le nom du projet. 

Les items **Instances**, **Volumes**, **Sauvegardes de volumes, Paires de clés**, **Réseau, Groupes de sécurité**, **IP Flottantes**, **Images**, **quotas** et **consommation** sont détaillés dans les paragraphes suivants.  

## **Instances**
L’item **Instances** de machines virtuelles permet d’afficher les informations et les actions exposées sur les instances des VMs associées à chaque projet de l’identifiant Cloud sélectionné. 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image067.png)

Le tableau présente la liste et les paramètres des instances créés : 

|**Nom / ID**|Nom et Identifiant attribués à l’instance (machine virtuelle)|
| - | - |
|**Zone**|Zone géographique de l’instance |
|**Etat** |Statut de l’instance, activée ou désactivée|
|**IP privée**|Adresse IP privée de la machine virtuelle|
|**IP public**|Adresse IP publique de la machine virtuelle|
|**Gabarit**|Indique le type d’instance (taille, CPU, Disque)|
|**Paire de clés**|Nom de la paire de clé|
|**Groupes de sécurité**|Le ou les groupes de sécurité associés à l’instance sont listés|
|**Tags**|Tags associés à la VM|
|**Lancement**|Indique la date et l’heure de la création de l’instance |
|**Actions** | **Démarrer :** Permet de démarrer l’instance,|
||**Redimensionner :** Permet de redimensionner le gabarit de l’instance,|
||**Redémarrer :** Permet de redémarrer l’instance arrêtée,|
||**Arrêter :** Permet d’arrêter l’instance|
||**Créer une image et sa sauvegarde :** Permet d’ajouter une image (snapshot) à l’instance,|
||**Changer les groupes de sécurité** : Permet de changer, de supprimer, d’ajouter un ou plusieurs groupes de sécurité, 
||**Supprimer :** Permet de supprimer l’instance,|


**Démarrer une instance**

La commande **Démarrer** une instance n’est disponible que si l’instance est arrêtée.

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image068.png)

- Cliquez sur le menu **Actions** de l’instance que vous souhaitez démarrer,
- Sélectionnez **Démarrer** la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image069.png)

- Cliquez sur le bouton **Démarrer**, un message vous avertit que l’instance est en cours de démarrage. Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_flexibleengine/image070.png), le tableau des instances apparaît avec l’instance démarrée, le champ **Statut** passe à l’état **Active**.

**Redimensionner une instance**

Pour redimensionner une instance de VM, cette instance doit être à l’état arrêté.

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image068.png)

- Sélectionnez la commande **Redimensionner** depuis le menu déroulant **Actions**, la boite de dialogue suivante s’affiche :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image071.png)

- Cliquez sur le menu **Gabarit**, sélectionnez celui qui vous convient puis cliquez sur le bouton **Redimensionner**. UIC affiche un message indiquant que l’instance est en cours de redimensionnement.

Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_flexibleengine/image070.png), le tableau des instances montre bien que le nouveau gabarit de l’instance a été pris en compte. Vous pouvez donc redémarrer l’instance.

**Créer une image et sa sauvegarde**  

Pour créer une image de l’instance, sélectionnez la commande **Créer une image et sa sauvegarde** depuis la colonne **Actions** de la page **Instances**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image072.png)

- Saisissez le nom de l’image dans la zone prévue à cet effet,
- Cliquez sur le bouton **Créer**, 

**Changer les groupes de sécurité**  

Pour supprimer, ajouter un groupe de sécurité à une instance, sélectionnez la commande **Changer les groupes de sécurité** depuis la colonne **Actions** de la page **Instances**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image073.png)

- Effectuez l’ajout ou la suppression d’un groupe de sécurité puis cliquez sur le bouton **Valider**. 

**Arrêter une instance**

Cette opération mettra l’instance sélectionnée dans un état stoppé. La VM est arrêtée mais reste associée à l’hyperviseur qui la gère. Au prochain démarrage, elle sera gérée par ce même hyperviseur. 

- Sélectionnez la commande **Arrêter** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image074.png)

- Cliquez sur le bouton **Arrêter**, un message vous avertit que l’instance est en cours d’arrêt,
- Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_flexibleengine/image070.png), le tableau des instances apparaît, le statut de l’instance passe à l’état *stoppée*.

**Supprimer une instance**

- Sélectionnez la commande **Supprimer** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image075.png)

- Cliquez sur le bouton **Supprimer**, l’instance n’apparaitra plus dans la liste.

## **Volumes**
La rubrique **Volumes** liste les volumes déclarés dans la zone géographique sélectionnée. Depuis le menu **Clouds** -> ***Flexible Engine***  -> **Tenant**, sélectionnez l’item **Volumes** la page suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image076.png)

Toutes les informations et actions possibles sur les volumes sont affichées dans 
ce tableau :

- **Nom / ID** : Indique le nom et l’identifiant du volume,
- **Description** : Décrit le volume,
- **Taille** (GB) : Indique la taille du volume,
- **Statut** : Indique si le disque est déjà attaché à une machine virtuelle ou si celui-ci est disponible,
- **Type** :  Permet d’identifier la technologie utilisée pour le disque, par exemple SATA, SSD,
- **Attaché à** : Indique l’instance à laquelle le volume est attaché,
- **Zone** : Indique le lieu où est situé le volume, 
- **Amorçable** : Indique si le volume est amorçable ou non,
- **Chiffré** : Indique si le volume est chiffré ou non,
- **Créé** : Indique la date et l’heure de création du volume,
- **Mis à jour** : Indique la date et l’heure de mise à jour du volume,
- **Métadonnées** : Indique le mode d’attachement du volume (métadonnées possibles, readonly et attached\_mode). 
- **Actions** : 
	- **Attacher :**  Permet d’attacher un volume à une instance,
	- **Prendre un instantané :** Permet de sauvegarder le volume,
	- **Détacher :**  Permet de détacher un volume d’une instance,
	- **Redimensionner :**  Permet de redimensionner un volume en une taille supérieure,
	- **Supprimer :** Permet de supprimer un volume,

### ***Créer un volume***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds** -> ***Flexible Engine,*** sélectionnez l’item **Volumes**, la page **Volumes** apparaît. 

- Cliquez sur le bouton **Créer un** **Volume**, la boite de dialogue suivante s’affiche : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image077.png)

- Saisissez dans la zone **Nom** le nom du volume,
- Précisez la taille du volume (en GB), 
- Choisissez le type de technologie souhaitée « classic ou high speed » depuis le menu déroulant **Type**,
- Cliquez sur le bouton **Créer**, 

Le volume créé est maintenant visible depuis le tableau de la page des volumes.

### ***Redimensionner un volume***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds** -> ***Flexible Engine,*** sélectionnez l’item **Volumes**, la page **Volumes** apparaît. 

- Cliquez sur le bouton **Actions** du volume que vous souhaitez redimensionner, puis cliquez sur la commande **Redimensionner**, la boite de dialogue suivante s’affiche : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image078.png)

- Précisez la nouvelle valeur dans la zone **Nouvelle taille**, cette valeur doit être supérieure ou égale à la valeur initiale,
- Cliquez sur le bouton **Redimensionner**, 

UIC affichera un message indiquant que le volume est en cours de redimensionnement. En cas de succès de l’opération, UIC affiche un message indiquant que le volume a bien été redimensionné. Si la table des volumes n’est pas mise automatiquement à jour, cliquez sur le bouton de mise à jour, situé en haut à droite de la table.

##  **Sauvegardes de volumes**
La rubrique **Sauvegardes de volume** liste tous les instantanés (sauvegardes) créés. Lorsque vous cliquez sur ce menu, *UIC* affiche votre liste avec les caractéristiques de chaque instantané ainsi que les actions à appliquer. 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image079.png)

*UIC* affiche pour chaque instantané, les paramètres suivants :  

- **ID :** Indique l’identifiant de l’instantané,
- **Nom** : Indique le nom de l’instantané,
- **Description :** Indique la description brève de l’instantané,
- **Taille** : Taille disque de l’instantané (en GB),
- **Statut** : Statut de l’instantané,
- **ID du volume :** Indique l’identifiant du volume,
- **Créé** : Date de création de l’instantané,
- **Mis à jour** : Date de mise à jour,
- **Actions** : 
	- **Supprimer** :  Permet de supprimer la sauvegarde.

###  ***Supprimer une sauvegarde du volume***
Vous pouvez supprimer les sauvegardes de volumes, individuellement ou par lot. 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image079.png)

Si vous souhaitez supprimer une sauvegarde individuelle, 

- Cliquez sur le menu **Actions** -> **Supprimer** associé à la sauvegarde que vous souhaitez supprimer.

Si vous souhaitez supprimer plusieurs sauvegardes en une seule opération, 

- Cochez case par case ou cochez la case qui se trouve en tête de tableau (en haut à gauche) 
- Cliquez sur le bouton **Supprimer les sauvegardes de volume**,

##  **Paires de clés**
Les paires de clé Flexible Engine sont des ressources associées aux projets et aux régions du Cloud *Flexible Engine*. Chaque clé n’est valide que pour la région à laquelle elle est attachée.

Pour accéder aux commandes concernant la gestion des paires de clé de sécurité Flexible Engine, sélectionnez le menu **Clouds -> Flexible Engine -> Tenant,**

- Cliquez sur l’item **Paires de clés**, la page **Paires de clés** apparaît : contenant la liste des clés déjà créées :   

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image080.png)

Cette page contient sous forme de tableau les paramètres des paires de clés existantes :

- **Nom** : Indique l’identifiant de la paire de clés,
- **Créée :** Indique la date de création de la paire de clés,
- **Empreinte** : Permet de vérifier la validité de la clé de sécurité,
- **Actions** : 	
	- **Supprimer** : Cette action supprime la paire de clés,

Le bouton **Créer une paire de clés** : Cette action permet de créer une paire de clés,

Le bouton **Supprimer les paires de clés** : Cette action supprime l’ensemble des clés sélectionnées dans le tableau, Pour sélectionner les clés, cochez les cases situées sur la colonne à gauche de la colonne **Nom** du tableau.

###  ***Création d’une paire de clés***
- Cliquez sur le bouton **Créer une paire de clés**, la fenêtre suivante apparaît :  

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image081.png)

- Entrez le nom de votre paire de clés dans la boîte de dialogue **Créer une paire de clés**, puis cliquez sur **Créer**.  La clé privée sera téléchargée automatiquement. Lorsque la clé est créée, elle apparaît dans le tableau des clés associées.

**Remarque : Si vous souhaitez être seul à lire et écrire dans le fichier, modifiez les autorisations en exécutant la commande suivante :**
```bash
chmod 0600 yourPrivateKey.pem
```

##  **Réseaux**
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> Flexible Engine -> Tenant,**

- Sélectionnez l’item **Réseau** afin d’afficher celle-ci : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image082.png)

Cette page affiche les réseaux virtuels configurés, déclarés chez *Flexible Engine* pour le projet sélectionné.

- **Nom / ID** : Indique le nom et l’identifiant du réseau,
- **Bloc CIDR :** Indique le bloc CIDR configuré,
- **Statut** : Indique l’état du réseau (actif ou non),
- ***Actions*** : 	
	- **Supprimer** : Cette action supprime le réseau,

###  ***Création d’un réseau***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds** -> **Flexible Engine -> Tenant**, sélectionnez l’item **Réseaux**, la page **Réseaux** apparaît.

- Cliquez sur le bouton **Créer un Réseau**, le formulaire **Créer un réseau** apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image083.png)

**Réseau :** 

- Saisissez le nom du réseau dans la zone **Nom du réseau**, 
- Saisissez le **Bloc CIDR du sous réseau** (exemple : 192.168.0.0/24),

**Nouveau sous-réseau :** 

- Saisissez le nom du réseau dans la zone **Nom**, 
- Saisissez le **Bloc CIDR du sous réseau** (exemple : 192.168.0.0/24),
- Sélectionnez la zone de disponibilité,
- Indiquez les serveurs DNS 1 et 2 pour la résolution des noms de domaines, si vous souhaitez que ce réseau accède à internet. Si vous souhaitez installer l’agent UIC depuis un dépôt internet, notamment depuis le dépôt publique UIC, vous devez indiquer au moins un serveur DNS.
- Cliquez sur le bouton **Créer**, 
  La création apparaît dans la liste disponible depuis la page **Réseaux.** Vous pouvez visualiser chaque réseau et sous réseau(x).

###  ***Visualiser un réseau et ses sous-réseaux***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds** -> ***Flexible Engine -> Tenant***, sélectionnez l’item **Réseaux**, la page **Réseaux** apparait :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image084.png)

- Cliquez sur le lien du réseau concerné de la colonne **Nom**, la page des **Réseaux** et **Sous-réseaux** apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image085.png)

A partir de cette page vous pouvez ajouter ou supprimer un sous-réseau.

##  **Groupes de sécurité**
Les groupes de sécurité *Flexible Engine* sont des ressources associées aux projets et aux régions du Cloud *Flexible Engine*. Chaque groupe de sécurité n’est valide que pour la région à laquelle il est attaché.

Pour accéder aux commandes concernant la gestion des groupes de sécurité *Flexible Engine*, sélectionnez le menu **Clouds** -> ***Flexible Engine -> Tenant***, séléctionnez l’item **Groupes de sécurité**, la page **Groupes de sécurité** apparaît :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image086.png)

Cette page contient la liste des groupes de sécurité créés, des actions sont également disponibles.

Le bouton **Créer un groupe de sécurité** : Cette action permet de créer un groupe de sécurité,

Le bouton **Supprimer les groupes de sécurité** : Cette action supprime l’ensemble des groupes de sécurité sélectionnés,

La liste des groupes de sécurité déclarés chez ***Flexible Engine*** est présentée sous forme de tableau : 

- **Nom / ID** : Indique le nom et l’identifiant du groupe de sécurité,
- **Règles** : Permet d’afficher un aperçu des règles d’un groupe de sécurité,
- **Description** : Indique la description du groupe de sécurité,
- **Créé** : Indique la date et l’heure de création du groupe de sécurité,
- **Actions** : 	
	- **Supprimer** : Cette action supprime le réseau,

###  ***Création d’un groupe de sécurité*** 
Depuis la page Groupe de sécurité, cliquez sur le bouton **Créer un groupe de sécurité**, le formulaire **Créer un groupe de sécurité** apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image087.png)

- Saisissez le nom du groupe, il doit être unique dans la base des groupes de sécurité. 
- Saisissez une description textuelle succincte de ce groupe.

*UIC* affiche une notification indiquant que le groupe de sécurité est en cours de création. En cas de succès, le groupe de sécurité est ajouté à la table des groupes de sécurité. Pour visualiser la nouvelle entrée, actualisez l’affichage du tableau à l’aide du bouton ![Image](/img_fr/img_UIC_Services/img_flexibleengine/image003.png) . 

###  ***Configurer une règle de sécurité***
L’ajout d’une règle à un groupe de sécurité existant s’effectue à partir de la page **Groupes de sécurité**, 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image088.png)

- Cliquez sur le lien de la colonne **Nom** / **ID**, la page suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image089.png)

- Cliquez sur le bouton **Ajouter des règles**, la boite de dialogue apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image090.png)

- Complétez les zones disponibles : 
	- **De** : Indiquez le premier numéro de port auquel la règle s’appliquera,
	- **Jusqu’à** : Indiquez la borne maximale des ports auxquels la règle s’appliquera,
	- **Protocole** : Indiquez le protocole réseau concerné (TCP, UDP, ICMP),
	- **Source** : Indiquez la source concernée (adresse IP unique ou segment d’adresses IP),
	- **Direction** : Indiquez la direction du flux à laquelle la règle sera appliquée, 
- Cliquez sur le bouton **Créer** pour ajouter la règle, 

Vous pouvez créer autant de règles de sécurité que nécessaires pour votre cas d’usage.

##  **IP flottantes**
La rubrique **IP flottantes** permet d’afficher la liste des adresses IP flottantes déjà créées. Elle vous permet également d’en créer des nouvelles ou de supprimer celles dont vous n’avez plus l’usage. 

###  ***Afficher la liste des IP flottantes***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds** -> ***Flexible Engine -> Tenant***, 

- Cliquez sur l’item **IP flottantes**, *UiC* affiche la page illustrée ci-dessous : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image091.png)

Le tableau affiche les informations et actions suivantes : 

- **IP Flottante** : Valeur de l’IP flottante,
- **Status** : Etat (attachée, détachée),
- **Adresse IP**: Adresse IP privée de l’instance d’attachement,
- **Attachée à** : Indique l’identifiant de l’instance d’attachement,
- **Créé** : Date et heure de création,
- **Actions** :	
	- **Associer** : Permet d’associer l’IP flottante à une instance,
	- **Dissocier :** Permet de dissocier l’IP flottante de l’instance d’attachement,
	- **Supprimer** : Permet de supprimer l’IP flottante.

###  ***Créer une IP flottante***
Depuis l’item **IP flottante**, actionnez le bouton **Créer une IP flottante**, 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image091.png)

*UiC* affiche la boite de dialogue suivante : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image092.png)

- Cliquez sur le bouton **Créer**, deux messages apparaitront en haut à droite (en cours de création, création effectuée) :  

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image093.png)

- Cliquez sur la croix pour les faire disparaitre,
- Actualisez en cliquant sur le bouton suivant ![Image](/img_fr/img_UIC_Services/img_flexibleengine/image003.png), l’IP flottante nouvellement créée apparaîtra dans le tableau.  


###  ***Supprimer une IP flottante***
La suppression d’une IP flottante peut se faire à l’aide de la commande **Actions -> Supprimer** 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image094.png)

ou,

- Cochez-la, les IP flottante(s) à supprimer puis cliquez sur le bouton **Supprimer les IP flottantes**

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image093.png)

- Cliquez sur le bouton **Supprimer**, les messages suivants apparaîssent :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image095.png)

##  **Images**
Les images des machines virtuelles *Flexible Engine* sont des ressources associées aux régions du Cloud *Flexible Engine*. Chaque région possède son offre propre de machines virtuelles, qui peut être différente de celles des autres régions, notamment en matière de gabarits et de tarification.

Pour accéder aux commandes concernant la gestion des images de VMs, sélectionnez le menu **Clouds** -> ***Flexible Engine -> Tenant***, 

- Sélectionnez l’item **Images**, la page **Images** apparaît, 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image096.png)

La page propose deux onglets, **Images publiques**, **Images privées,** chacun d’entre eux liste les images publiques ou privées disponibles :   

- **Nom/ID** : Nom ou identifiant de l’image
- **Type d’OS** : Indique le type de système d’exploitation, exemple Linux,
- **Plateforme :** Indique le type de plateforme, exemple Ubuntu,
- **Version d’OS :** Indique la version du système d’exploitation,
- **Visibilité** : Domaine de visibilité de l’image (privé ou public),
- **Minimum RAM** : RAM minimale requise,
- **Minimum Disque** : Disque minimal requis,
- **Création** : Indique la date de création de l’image,
- **Actions** : 
	- **Déployer** : Permet de déployer l’image,
	- **Supprimer** : Permet de supprimer l’image privée.

###  ***Déploiement d’une image de machine virtuelle***
Pour accéder à la gestion des images de machines virtuelles, sélectionnez le menu **Clouds** -> ***Flexible Engine*** -> **Tenant** -> **Images**, la page **Images** apparaît.

- Sélectionnez l’image à déployer à l’aide du menu **Actions -> Déployer**, la boite de dialogue suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image097.png)

- Indiquez le nom de l’application,
- Saisissez le nom du nœud,
- Sélectionnez le menu déroulant **Plateforme de l’image**, puis choisissez le système d’exploitation de base correspondant à l’image *Flexible Engine,* la page de préparation des déploiements s’affiche : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image098.png)

- Poursuivez l’étape de préparation du déploiement, celle-ci est décrite dans la section **Configuration d’un déploiement** de ce document. 

##  **Quotas**
La plateforme *UIC* peut collecter et afficher les données concernant les quotas d’utilisation de vos ressources Cloud *Flexible Engine*. Pour accéder à ces données, sélectionnez le menu **Clouds** -> ***Flexible Engine***  -> **Tenant,** sélectionnez l’item **Quotas**, vous obtenez la page ci-dessous : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image099.png)

Le bouton **Mettre à jour** vous permet de mettre à jour en temps réel les tableaux et les graphiques de cette page. 

Le champ **Dernière mise à jour** indique le délai passé depuis la dernière mise jour des indicateurs.

La plateforme *UiC* affiche les quotas des ressources Cloud sous deux formes :

- Une représentation sous forme de tableau récapitulatif indiquant les quotas de chaque type de ressource. Ce tableau contient les colonnes suivantes :
	- **Nombre d’instances** : Indique le nombre d’instances utilisées par rapport à la limite déclarée, 
	- **Nombre de CPU :** Indique le nombre de processeurs virtuels utilisés par rapport à la limite déclarée, 
	- **Taille totale de mémoire vive (RAM)** : Indique le quota de mémoire virtuelle utilisée par rapport à la limite déclarée,
	- **Nombre d’IP flottantes :** Indique le nombre d’IP flottantes utilisée par rapport à la limite déclarée,
	- **Nombre de groupes de sécurité :** Indique le nombre de groupes de sécurité utilisés par rapport à la limite déclarée,

- Une représentation graphique indiquant les quotas globaux, pour toutes les régions, classés par type de ressource,

Les graphiques affichent les consommations des ressources :

- Le nombre d’instances,
- Le nombre de processeurs,
- La taille de RAM,
- Le nombre d’adresses IP flottantes,
- Le nombre de groupes de sécurité.

##  **Consommation** 
La plateforme UIC peut collecter et afficher les données de facturation *Flexible Engine*. Pour accéder à ces données : 

- Sélectionnez le menu **Clouds** -> ***Flexible Engine*** -> **Identifiant Cloud** -> **Consommation**, *UiC* affiche la page illustrée ci-dessous : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image100.png)

La page **Estimation de la consommation et factures** contient plusieurs onglets :

- **Estimation de la consommation :**  Cet onglet affiche l’estimation de la consommation en cours,
- **Factures** : Cet onglet permet d’accéder aux factures, trois formats sont disponibles, PDF, XLS ou ZIP,
- **Explorateur des coûts :** Cet onglet permet d’analyser et d’afficher chaque facture disponible. 

###  ***Estimation de la consommation***
L’onglet **Estimation de la consommation** présente les données sous forme de graphique et sous forme de tableau :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image100.png)

La partie supérieure affiche sous forme graphique l’estimation de la consommation, globale ou par projet, répartie par type de service. Vous pouvez afficher ou cacher un service en cliquant sur le motif de couleur qui lui est associé, comme illustré sur la figure suivante : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image101.png)

Le tableau de la partie inférieure présente les détails de la consommation. Chaque ligne indique le nom du service, le type de ressource, la quantité, le prix unitaire, le montant en euros et la région de consommation.  

Pour filtrer le tableau par type de service, sélectionnez le service concerné depuis le menu déroulant **Service**. Voici un exemple de résultat avec un filtre sur le service Elastic Cloud Server :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image102.png)

Le tri par Projet est également réalisable à l’aide du menu déroulant **Choisir un projet** :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image103.png)  

###  ***Factures***
####  **Synthèse et historique**
L’onglet **Factures** présente les données de facturation sous la forme affichée ci-dessous :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image104.png)

Cette page est composée de deux zones :

- Une zone affichant l’histogramme des factures pour une période donnée. Vous pouvez sélectionner la période qui vous intéresse à l’aide des deux champs **Entre** et **Et**, puis en cliquant sur le bouton **Résumé des factures**,
- Un tableau présentant pour chaque facture, sa date de paiement, son identifiant, son montant et des liens permettant de la télécharger au format PDF, XLS ou ZIP.

####  **Explorateur des coûts**
Si vous souhaitez accéder aux détails d’une facture donnée, cliquez sur la barre de l’histogramme correspondant à la facture. L’onglet **Explorateur des coûts** est alors automatiquement affiché. Voici un exemple pour le mois de février 2020 : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image105.png)

L’onglet **Explorateur des coûts - February 2020** apparaît avec le détail des données de facturation. La page est constituée de trois zones :

- Une zone contenant les menus déroulants **Service** et **Projet**, permettant de sélectionner le service et le projet dont on souhaite afficher les détails. Le contenu des deux autres zones dépend des choix effectués dans ces menus,
- Une zone affichant les graphiques de consommation par service et par région, relatifs aux choix sélectionnés dans le menu Service et dans le menu Projet,
- Un tableau présentant pour chaque service, le code de la ressource, la quantité consommée, l’unité de mesure de la consommation, le prix unitaire, le montant calculé en euros, la date et l’heure de début de la consommation, la date et l’heure de fin de la consommation, l’identifiant unique de la ressource.

#####  Consommation mensuelle globale
Par défaut UIC affiche la répartition de la consommation globale de tous les services et de tous les projets, à la fois au niveau des graphiques et au niveau du tableau des détails. Voici un exemple de graphique :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image106.png)

La page affiche le coût total, les coûts répartis par service et les coûts répartis par région. 

Si vous souhaitez par exemple afficher les graphiques pour le service Elastic Cloud Server (en abrégé : ECS), sélectionnez ce service au niveau du menu déroulant **Service**, comme illustré sur la figure suivante : 

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image107.png) 

UIC affiche alors la répartition des coûts par type d’instance sur un graphique, et la répartition par plateforme de système d’exploitation (Linux libre, Windows, etc)  sur un deuxième graphique.

Tous les détails des ressources ECS consommées sont fournis dans le tableau situés en dessous des deux graphiques. Voici un exemple ci-dessous :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image108.png)

Chaque ligne du tableau affiche les colonnes suivantes :

- Code de spécification de la ressource : Ce code indique à la fois le gabarit de VM et le système d’exploitation associé,
- La quantité consommée,
- L’unité de mesure de la consommation,
- Le prix unitaire, 
- Le montant monétique résultant, 
- Le pays de consommation,
- La date et l’heure de début de la consommation,
- La date et l’heure de fin de la consommation.

#####  Consommation mensuelle par projet
Si vous souhaitez effectuer l’exploration des coûts des ressources par projet, sélectionnez un service puis sélectionnez le projet qui vous intéresse, comme dans l’exemple ci-dessous :

![Image](/img_fr/img_UIC_Services/img_flexibleengine/image109.png) 

UIC vous affichera les coûts spécifiques au projet sélectionné, présentés de la même manière que pour le projet global. Cette présentation est détaillée dans les sections précédentes.
