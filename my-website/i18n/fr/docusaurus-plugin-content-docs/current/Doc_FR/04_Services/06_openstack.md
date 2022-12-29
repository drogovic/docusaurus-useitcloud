---
id: 40060
title: Openstack
description: UseITcloud documentation 1.2.0
sidebar_position: 6
---

## **Les commandes communes aux pages de l’IHM**
Les pages et formulaires affichés par *UIC* présentent certaines commandes dont la signification est la même quelle que soit la page qui les présente. Par conséquent, ces commandes seront décrites dans ce chapitre et cette description est applicable à toutes les ressources et tous les formulaires gérés par *UIC* et présentés dans ce document.

Voici la liste et la description de ces commandes :

![Image](/img_fr/img_UIC_Services/img_openstack/image002.png#bordered)

- La commande **Afficher X éléments** : Cette commande s’applique aux tableaux affichés par *UIC*. Elle permet de limiter le nombre d’éléments visualisés par page. 
- La commande **Rechercher** : Cette commande s’applique aux tableaux affichés par UIC. Elle permet de rechercher et présenter les éléments contenant la chaîne de caractères spécifiée dans le champ de recherche. 
- La commande **Change columns** : Cette commande s’applique aux tableaux affichés par UIC. Elle permet à l’utilisateur de sélectionner les colonnes qu’il souhaite visualiser. 
- La commande **CSV** : Cette commande s’applique aux tableaux affichés par UIC. Elle permet à l’utilisateur d’exporter le tableau affiché dans un fichier au format CSV. 
- Le bouton d’actualisation  ![Image](/img_fr/img_UIC_Services/img_openstack/image003.png#bordered) : Ce bouton permet de forcer l’actualisation des données affichées.


## **Identifiants Cloud OpenStack**
Pour configurer un identifiant Cloud de connexion *UIC* à une infrastructure du cloud public *OpenStack*, vous avez besoin des paramètres *OpenStack* suivants :

- URL de l’Hôte,
- Nom de l’utilisateur de connexion,
- Mot de passe,
- Nom du projet.

Vous avez également besoin des paramètres suivants liés à l’emplacement réseau de la plateforme UIC : 

- Les paramètres du proxy si vous en utilisez un,
- L’adresse IP de dialogue entre la plateforme UIC et le Cloud *OpenStack*. Si ce Cloud et la plateforme UIC sont dans le même réseau, ou qu’ils sont connectés par VPN, ou que la plateforme UIC possède une adresse publique, cette valeur sera égale à l’adresse IP de la plateforme UIC. Dans le cas contraire, cette valeur sera égale à l’adresse IP qui sert de passerelle pour la plateforme UIC.



Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l’étape de configuration de ces paramètres dans *UIC*, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l’environnement *OpenStack*, vous pouvez créer ou obtenir les paramètres spécifiques au Cloud Openstack en vous connectant sur le tableau de bord de votre infrastructure *OpenStack*, en tant qu’administrateur de votre compte.

Si vous n’êtes pas familier avec l’environnement *OpenStack*, vous pouvez consulter les paragraphes suivants pour découvrir comment créer ou obtenir les identifiants *OpenStack* cités ci-dessus.

### ***Obtenir les identifiants d’un nouveau projet OpenStack***
#### **Création d’un Projet**
- Connectez-vous sur le compte *OpenStack*, allez dans le menu **Admin -> Gestion Système -> Gestion des identités -> Projets**, Vous obtenez un formulaire dont voici un exemple : 

![Image](/img_fr/img_UIC_Services/img_openstack/image004.png#bordered)

- Cliquez sur le bouton **Créer un Projet**, l’écran ci-dessous apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image005.png#bordered)

- Complétez les zones de saisie, 
- Cliquez sur le bouton **Créer un Projet.**

#### **Création d’un Utilisateur**
- Connectez-vous à la console *OpenStack* avec un utilisateur ayant les droits d’administration, 
- Sélectionnez le menu **Admin -> Gestion Système -> Gestion des identités -> Utilisateurs**, 

![Image](/img_fr/img_UIC_Services/img_openstack/image006.png#bordered)

- Cliquez sur le bouton **Créer un Utilisateur**, le formulaire ci-dessous apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image007.png#bordered)

Dans la zone **Projet Primaire**, assignez le projet *uic_projet1*,

- Sélectionnez le menu déroulant **Rôle**, choisissez le rôle que vous souhaitez accorder à l’utilisateur. Ce rôle doit avoir toutes les permissions requises pour les connexions aux API des différents services Openstack et pour le déploiement des ressources (VM, réseaux, volumes).
- Cliquez sur le bouton **Créer un Utilisateur**, l’utilisateur *uic_user1* est créé et ajouté dans le projet *uic_projet1*.

![Image](/img_fr/img_UIC_Services/img_openstack/image008.png#bordered)

#### **Obtenir l’URL d’authentification (Service Identity)**
- Connectez-vous à la console *OpenStack* avec un utilisateur ayant les droits d’administration, 
- Sélectionnez le menu **Projet -> Calcul -> Accès et Sécurité,** onglet **Accès API,** l’écran suivant apparait : 

![Image](/img_fr/img_UIC_Services/img_openstack/image009.png#bordered)

- Copiez la valeur du point d’accès au service Identity (Ex, http://172.17.56.7:5000/v2.0). Cette valeur devra être fournie dans l’interface *UIC*, paramètre Hôte.

### ***Création d’un identifiant Cloud OpenStack dans UIC***
Une fois que vous disposez de toutes les informations de connexion précisées dans l’introduction de ce chapitre, vous pouvez sur la plateforme *UIC* procéder à la création d’un identifiant Cloud *OpenStack*.

Depuis la plateforme *UIC*, sélectionnez le menu **Identifiant -> Identifiants Cloud**, la liste des clouds déclarés apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image010.png#bordered)

- Sélectionnez le fournisseur *OpenStack*, 
- Cliquez sur le bouton **Ajouter un identifiant**, le formulaire suivant apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image011.png#bordered)

Complétez les informations demandées dans le formulaire.

- **Nom de l’identifiant** : Indiquez le nom de l’identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu’à 20 caractères, lettres sans accent, chiffres, tirets).
- **Hôte** : Indiquez l’URL du service Identity de OpenStack (Exemple :<http://172.17.117.100:5000/v2.0>)
- **Utilisateur** : Indiquez le nom de l’utilisateur de connexion au service et au projet (Exemple : uic_user1),
- **Mot de passe** : Indiquez le mot de passe de l’utilisateur, 
- **Projet :** Le nom du projet Openstack (Ex : uic_projet1 )
- **Région :** Choisissez une région (facultative)
- **Proxy** : Indiquez l’URL du proxy (facultatif) au format suivant : <https://user:password@host:port>
- **IP visible depuis le fournisseur** : Indiquez l’IP de la plateforme visible depuis le fournisseur (Ex : 192.168.77.88)

- Cliquez sur le bouton **Ajouter**. 

Le message de confirmation suivant apparaît : L'identifiant OpenStack a bien été créé.

#### **Conséquence sur la table des identifiants OpenStack**
L’identifiant créé apparaîtra comme une entrée parmi les identifiants *OpenStack*. Vous pourrez modifier ses attributs en le sélectionnant depuis cette page.

![Image](/img_fr/img_UIC_Services/img_openstack/image012.png#bordered) 

La table des identifiants vous permet d’exécuter sur chacun d’entre eux les commandes du menu **Actions**. Ces actions sont intitulées **Configuration**, **Configurer le proxy**, **Modifier les identifiants** et **Supprimer**. Elles sont toutes décrites dans les sous chapitres suivants.

#####  Modifier la configuration 
- Sélectionnez la commande ***Configuration*** du menu **Actions**, la boite de dialogue **Configuration de l’OpenStack « Nom** **»** apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image013.png#bordered)

- Saisissez le délai d’attente souhaité pour le Cloud *OpenStack*, cliquez sur le(s) bouton(s) **Mettre à jour**. 

Pour chaque déploiement, *UIC* commande le provisionnement des VM auprès du Cloud cible et attend une réponse de celui-ci, indiquant le résultat du déploiement (succès ou échec). Le temps de ce provisionnement dépend principalement de la charge et des performances du Cloud cible, de l’image OS et logiciels à installer sur la VM et des conditions réseau entre la plateforme *UIC* et ce Cloud. Le délai d’attente, à configurer pour ce paramètre, correspond au temps maximum au-delà duquel une absence d’indication de fin de déploiement peut être considérée par *UIC* comme un échec de déploiement. 

Compte-tenu du fait que ce délai est variable d’une infrastructure à une autre, *UIC* vous offre la possibilité d’indiquer la valeur la plus convenable pour votre environnement. 

##### Modifier la Configuration du proxy
- Sélectionnez la commande ***Configuration du proxy*** du menu **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image014.png#bordered)

- Saisissez l’URL du proxy, au format précisé dans la boite de dialogue,
- Cliquez sur le bouton **Sauvegarder**,

#####  Modifier un identifiant
- Sélectionnez la commande ***Modifier identifiant*** du menu **Actions**, la boite de dialogue suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image015.png#bordered)

- Apportez les modifications nécessaires,
- Cliquez sur le bouton **Sauvegarder**,

#####  Supprimer un identifiant
- Sélectionnez la commande ***Supprimer*** du menu **Actions**, la boite de dialogue suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image016.png#bordered)

- Cliquez sur le bouton **Supprimer l’identifiant Cloud**,

#### **Conséquence sur le menu Clouds**
Après l’ajout d’un identifiant Cloud *OpenStack*, *UIC* crée un item portant le nom de l’identifiant dans le menu **Clouds -> OpenStack**, il porte le nom attribué à la création**.** Il vous permet d’accéder et de piloter les ressources *OpenStack* qui sont sous son contrôle.

![Image](/img_fr/img_UIC_Services/img_openstack/image017.png#bordered)

#### **Conséquence sur la page de la préparation d’un déploiement**
Après l’ajout d’un identifiant Cloud *OpenStack*, le nom de cet identifiant sera rajouté dans la liste des valeurs du champ **Tenant** de la page de préparation du déploiement.

![Image](/img_fr/img_UIC_Services/img_openstack/image018.png#bordered)

#### **Conséquence sur le formulaire de référencement d’une image fournisseur**
Après l’ajout d’un identifiant Cloud *OpenStack*, le nom de cet identifiant sera rajouté dans la liste des fournisseurs du menu **Design -> Images** -> **Référencer une image fournisseur**, son formulaire s’affiche et l’identifiant sera sélectionnable depuis le menu déroulant **Fournisseur**.

![Image](/img_fr/img_UIC_Services/img_openstack/image019.png#bordered)

Ceci permet de référencer des images de VM disponibles chez les fournisseurs et les rendre privées pour le tenant spécifié. 

#### **Conséquence sur la gestion des rôles *UIC***
Lorsque vous ajoutez un identifiant Cloud *OpenStack* à un compte, pensez à configurer les permissions appropriées aux utilisateurs de ce compte. Voici le tableau des ressources *OpenStack* et des permissions configurables dans *UIC* :


|**Type de ressource**|**Liste des actions applicables**|
| - | - |
|Instance |Lister, Déployer, Gérer l’état, Supprimer|
|Groupe de sécurité |Lister, Créer, Modifier, Supprimer|
|Réseau|Lister, Créer, Supprimer|
|IP |Lister, Créer, Associer, Dissocier, Supprimer|
|Paire de clés|Lister, Créer, Supprimer|
|Volume|Lister, Créer, Attacher, Détacher, Modifier, Supprimer|
|Instantané|Lister, Créer, Supprimer|
|Image|Lister, Créer, Modifier, Supprimer|
|Quotas|Lister|

Vous pouvez utiliser les rôles prédéfinis par *UIC*, ou bien créer de nouveaux rôles et les configurer à votre convenance. Vous pourrez ensuite attribuer ces rôles à des groupes ou à des utilisateurs conformément à votre environnement de production.

Les détails sur la gestion des utilisateurs, des groupes et des rôles sont fournis dans le document intitulé **UiC_Guide_UserAdmin_FR** qui accompagne *UIC*.

## **Déploiements**
Le déploiement des applications UIC dans un Cloud privé *OpenStack* nécessite les prérequis obligatoires suivants : 

- Un identifiant Cloud, se référer au chapitre *Création d’un identifiant Cloud OpenStack dans UIC*,
- Des images de VMs référencées dans la base de données locale de UIC. 

Toutes les étapes à suivre pour le déploiement d’une application sont illustrées dans les prochaines sections en prenant l’exemple du déploiement d’une application Linux nécessitant une seule VM. Lorsqu’une étape n’est pas identique pour Linux et pour Windows, les spécificités du système Windows sont indiquées. 

Le processus de déploiement d’une application est composé de trois grandes étapes :

- Une étape de configuration, appelée pré-déploiement. Cette étape permet de configurer l’environnement de déploiement,
- Une étape de lancement du déploiement. Cette étape débute à l’instant où le déploiement dans le Cloud est déclenché. Elle se termine au moment où le résultat du lancement de l’opération est affiché,
- Une étape de gestion du déploiement appelée post-instanciation. Cette étape prend le relais à la fin de la phase précédente et se termine au moment de la suppression définitive d’une instance de la base de données des déploiements gérés par *UIC*.

### ***Référencer une image***
Les images des Clouds privés doivent être référencées manuellement. Voici la procédure à suivre :

Depuis le menu **Design**, sélectionnez **Images**, la page **Images publiques** apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image020.png#bordered)

- Cliquez sur le bouton **Référencer une image fournisseur**, le formulaire **Référencer une image fournisseur** s’affiche :

![Image](/img_fr/img_UIC_Services/img_openstack/image021.png#bordered)

Le formulaire permet de rechercher une image de VM publiée sur la plateforme OpenStack et de créer une référence à cette image dans la base de données de la plateforme *UIC*. 

- Sélectionnez le fournisseur et le tenant depuis le menu déroulant **Fournisseur**, vous accédez à la liste des images disponibles chez le fournisseur. 
- Sélectionnez l’image depuis le menu déroulant **Image**, 
- Sélectionnez le système d’exploitation de base correspondant à l’image sélectionnée depuis le menu déroulant **Système d’exploitation**,
- Renseignez le champ **Utilisateur** **par défaut**, il doit avoir le droit « root » pour personnaliser la VM. 

La zone **Mot de passe par défaut** est optionnelle, si elle n’est pas complétée, le mot de passe sera généré automatiquement à la création de la VM.

#### **Conséquence sur le tableau des référencements des images**
Après avoir référencé des images pour l’identifiant créé, ces images sont enregistrées dans la base de données des images privées de cet identifiant. Ces images sont accessibles depuis le menu **Design -> Images.** 

![Image](/img_fr/img_UIC_Services/img_openstack/image022.png#bordered)

- ![Image](/img_fr/img_UIC_Services/img_openstack/image023.png#bordered)

Cliquez sur le lien ci-dessous un exemple de table affichée pour *OpenStack* :

![Image](/img_fr/img_UIC_Services/img_openstack/image024.png#bordered)

Cette page affiche le tableau des images, chacune d’entre elle possède des colonnes avec une liste de paramètres statiques, deux colonnes permettent de modifier les paramètres suivants :

- **Utilisateur** : ce champ indique le nom de l’utilisateur qui sera utilisé pour la connexion à l’image référencée.
- **Mot de passe** : ce champ indique le mot de passe de l’utilisateur de connexion précisé ci-dessus.

La colonne **Actions** présente deux items :

- **Voir le mot de passe** : cette action permet de voir en clair le mot de passe de l’utilisateur associé à l’image,
- **Supprimer :** cette action permet de supprimer l’image de la base de données.

###  ***Configuration d’un déploiement***
Le déploiement des applications et des VM s’effectue à l’aide du menu **Déployer-> Catalogue -> Application>-> Déployer.** L’action **Déployer** permet de configurer l’environnement du déploiement avant de la déclencher réellement. 

- Sélectionnez l’application à déployer, actionnez le bouton **Déployer** correspondant à l’application, vous obtenez l’écran de préparation de déploiement illustré sur l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_openstack/image025.png#bordered)

- Saisissez dans la zone **Etiquette** le nom du déploiement afin de l’identifier,
- Sélectionnez le menu déroulant **Fournisseur** puis *OpenStack*, 

![Image](/img_fr/img_UIC_Services/img_openstack/image026.png#bordered)

- Sélectionnez dans le menu déroulant **Tenant** le nom de l’identifiant Cloud pour le déploiement, s’il y en a plusieurs, comme illustré ci-dessous :

![Image](/img_fr/img_UIC_Services/img_openstack/image027.png#bordered)

- Validez votre choix à l’aide du bouton **Confirmer**, vous obtiendrez l’écran de configuration de tous les paramètres généraux et les paramètres spécifiques à *OpenStack*. Le détail de configuration de chacun des onglets est décrit dans les prochaines sections. 

#### **Infrastructure**
L’onglet **Infrastructure** vous permet de préciser tous les paramètres nécessaires pour le déploiement sur votre infrastructure *OpenStack*, comme illustré sur l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_openstack/image028.png#bordered)

**OS :**  Indique le système d’exploitation de base de l’application,

**Gabarit :** Ce menu propose une liste de gabarits

![Image](/img_fr/img_UIC_Services/img_openstack/image029.png#bordered)

Le menu déroulant **Gabarit** propose des gabarits de machine prédéfinis. 
Lorsque vous sélectionnez un gabarit, *UIC* vous indique le taux d’utilisation des ressources induit par cette valeur choisie.

#### **Configuration du réseau**
L’onglet **Réseau** vous permet de préciser tous les paramètres de configuration réseau nécessaires pour le déploiement sur votre infrastructure vSphere. Ces paramètres sont illustrés sur la figure suivante :

![Image](/img_fr/img_UIC_Services/img_openstack/image030.png#bordered)

- **Réseau** : le nom du réseau où la VM sera déployée, la liste déroulante vous présente tous les réseaux configurés,
- **Sous-réseau** : Indique le sous-réseau rattaché au réseau (si aucun n’est présent il faudra le créer), 
- **Groupe de sécurité** : Ce menu déroulant propose de créer ou de sélectionner un groupe de sécurité, si vous en sélectionnez un, le bouton Afficher les règles s’affichera, vous n’aurez plus qu’à cliquer dessus pour quelles apparaissent : 

![Image](/img_fr/img_UIC_Services/img_openstack/image031.png#bordered)

La case à cocher **Accès direct à l’instance** : cochez cette case si l'instance de la VM est dans le même réseau que la plateforme UIC. La communication entre la plateforme et l’instance se fera en utilisant l’adresse privée de l’instance.

#### **Personnalisation d’une instance**
L’onglet **Personnalisation** permet de spécifier des paramètres non IaaS d’une instance. Quel que soit le type de VM de base (Linux ou Windows). 

![Image](/img_fr/img_UIC_Services/img_openstack/image032.png#bordered)

Il s’agit d’attribuer un nom à l’instance pour l’identifier facilement sur le Cloud cible, de l’option d’installation ou non d’un agent UIC, de l’inclusion de scripts exécutables après le démarrage de l’instance et de rajouts de tags spécifiques à l’instance.

D’autres paramètres sont spécifiques aux VM de type Windows, leur description est décrite dans la section dédiée à la personnalisation spécifique à Windows. 

##### Configuration commune à tous les OS
La personnalisation des instances de VM se fait à l’aide de l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_openstack/image032.png#bordered)

Comme précisé dans le formulaire, la personnalisation de l’instance concerne les paramètres suivants :

- **Nom de l’instance** : Indiquez le nom qui identifiera l’instance sur le Cloud cible,
- **Installer l’agent UIC** : Cochez cette case si vous souhaitez que l’agent UIC soit automatiquement installé dans l’instance,
- **Script prédéfini** : Si vous avez à associer un script prédéfini à cette instance, sélectionnez-le dans la liste déroulante,
- **Script additionnel** : Si vous le souhaitez, ajoutez du code que vous souhaitez être exécuté automatiquement dans l’instance,
- **Tags** : Ajoutez les tags que vous souhaitez attacher à cette instance.

#####  Configuration spécifique à Windows
Pour déployer des applications nécessitant l’installation d’un système Windows de Microsoft, une personnalisation spécifique peut être nécessaire. Cette configuration s’ajoute à celle commune à tous les OS (paragraphe précédent). Les paramètres de cette personnalisation sont illustrés dans la page suivante :

![Image](/img_fr/img_UIC_Services/img_openstack/image033.png#bordered)

- **ID Produit** : Indiquer l’identifiant de votre produit,
- **Générer une nouvelle identité de sécurité (SID) :** Cocher cette case si vous souhaitez Générer une nouvelle identité de sécurité (SID),
- **Groupe de travail** : Si votre instance de VM doit être membre d’un groupe de travail Windows, cochez cette option, puis indiquez le nom du groupe de travail dans le champ **Nom,**
- **Joindre un domaine Windows** : Cochez cette option si votre instance de VM doit être membre d’un domaine Windows. Dans ce cas, indiquez les paramètres suivants :
- **Nom de domaine** : Saisissez le nom du domaine Active Directory à joindre. Ce nom de domaine est à différencier du de domaine réseau qui est à renseigner dans l’onglet réseau,
- **Nom d’utilisateur** : Saisissez le nom de l’utilisateur de connexion sur le domaine Active Directory,
- **Mot de passe** : Indiquez le mot de passe de l’utilisateur. 

#### **Gestion de configuration**
Dans UIC, la gestion de configuration des VM met en œuvre les outils Ansible, Chef et *Puppet*. 

![Image](/img_fr/img_UIC_Services/img_openstack/image034.png#bordered) 

Cette mise en œuvre est commune à tous les Clouds, elle n’est donc pas spécifique à *Openstack*. Elle est cependant documentée et détaillée dans le guide intitulé « **UiC_Guide_UserAdmin_FR** ».

#### **Surveillance**
Dans UIC, la surveillance des VM met en œuvre des services de monitoring comme Centreon et Zabbix. 

![Image](/img_fr/img_UIC_Services/img_openstack/image035.png#bordered)

Cette mise en œuvre est commune à tous les Clouds, elle n’est donc pas spécifique à *Openstack*. Elle est cependant documentée et détaillée dans le guide intitulé « **UiC_Guide_UserAdmin_FR** ».

Une fois que vous avez fini la configuration, vous pouvez lancer votre déploiement en cliquant sur le bouton **Déployer** (en haut à droite de l’écran), ce qui enclenchera le processus de déploiement.

###  ***Opération de déploiement***
Lorsque le déploiement est lancé, la plateforme *UIC* affiche l’écran de progression du déploiement :

![Image](/img_fr/img_UIC_Services/img_openstack/image036.png#bordered)

La durée nécessaire au déploiement dépend de l’environnement de déploiement (puissance et capacité de votre infrastructure) mais également des caractéristiques de la VM à déployer (son gabarit, son système d’exploitation de base et de l’ensemble des logiciels additionnels, du temps nécessaire à l’installation de l’agent si vous l’avez activé pour la VM).

Une fois que l’opération de déploiement est terminée avec succès, *UIC* passe à l’étape de post-instanciation qui permet de gérer la VM active. 

### ***Post-Instanciation***
Une fois que le déploiement est terminé avec succès, l’écran **Déploiement** indiquera le statut Déployé dans la colonne **Etat** :

![Image](/img_fr/img_UIC_Services/img_openstack/image037.png#bordered)

UIC affiche l’identifiant unique pour ce déploiement dans la colonne **Identifiant.** Sa valeur est un champ actif qui vous permet d’accéder aux détails de l’instance déployée. 

Les autres colonnes ont des labels auto-explicatifs du contenu de la colonne. La connexion à l’instance s’effectue depuis la colonne **Actions**, une des deux actions est proposées : 

- **SSH** dans le cas d’une instance Linux,

Ou,

- **RDP Client** dans le cas d’une instance Windows.

Le bouton **Supprimer** permet de terminer et supprimer l’instance de l’application déployée.

#### **Connexion aux instances Linux**
Depuis la plateforme *UIC* connectez-vous en ssh aux instances *Linux*. Si vous cliquez sur le bouton **ssh** de la colonne **Actions** vous obtenez l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_openstack/image038.png#bordered)

Cet écran vous affiche les paramètres qui vous permettront de vous connecter à la VM en choisissant l’une des deux options :

- En utilisant un outil ssh externe, dans ce cas vous pouvez copier toutes les valeurs des paramètres affichés dans cette fenêtre et les injecter dans l’outil que vous utilisez.
- En utilisant l’outil Shell in a box intégré à UIC, dans ce cas vous avez juste à cliquer sur le bouton **Shell in a box** affiché en bas, à gauche de la fenêtre. UIC vous connectera automatiquement sur la VM et ouvrira une fenêtre dans un onglet dédié de votre navigateur.

#### **Connexion aux instances Windows**
UIC vous permet de vous connecter en RDP à une instance Windows, à condition que la connexion Bureau à distance soit autorisée sur cette instance. Assurez-vous que cette condition est respectée en vous connectant sur la console de la VM et en vérifiant au niveau du paramétrage du firewall Windows, que les bonnes options sont activées, comme illustré sur l’écran ci-dessous :

![Image](/img_fr/img_UIC_Services/img_openstack/image039.png#bordered)

#####  Options de connexions 
Si vous cliquez sur le bouton **RDP Client** de la colonne **Actions** vous obtenez l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_openstack/image040.png#bordered)

Cet écran vous affiche les paramètres qui vous permettront de vous connecter à la VM en choisissant l’une des deux options :

- En utilisant un outil RDP externe, dans ce cas vous pouvez copier toutes les valeurs des paramètres affichés dans cette fenêtre et les injecter dans l’outil que vous utilisez.
- En utilisant la procédure proposée par UIC, dans ce cas vous avez juste à cliquer sur le bouton **Télécharger le fichier RDP** affiché en bas, à gauche de la fenêtre. Suivez en suite les instructions et les étapes décrites ci-dessous.

##### Connexion Bureau à distance 
Lorsque vous cliquez sur le bouton **Télécharger le fichier RDP,** Windows vous affiche la fenêtre suivante : 

![Image](/img_fr/img_UIC_Services/img_openstack/image041.png#bordered)

- Sélectionnez **Ouvrir avec** : **Connexion Bureau à distance**, puis cliquez sur **OK.** Vous obtiendrez la fenêtre suivante :

![Image](/img_fr/img_UIC_Services/img_openstack/image042.png#bordered)

- Cliquez sur le bouton **Connexion** pour déclencher l’action de connexion à l’instance, le système Windows affichera une fenêtre semblable à la suivante : 

![Image](/img_fr/img_UIC_Services/img_openstack/image043.png#bordered)

- Entrez le mot de passe de connexion puis cliquez sur **OK**.

**Remarque : Si votre VM ne présente pas un certificat signé par une autorité de confiance, le système affichera la fenêtre suivante :**

![Image](/img_fr/img_UIC_Services/img_openstack/image044.png#bordered)

Si vous êtes dans un réseau sécurisé, appuyez sur le bouton **Oui**, sinon corrigez le problème avant de continuer.

Après l’opération d’authentification, le système Windows de la VM affiche la session de l’utilisateur authentifié. Voici un exemple d’écran d’une session Administrateur par défaut :

![Image](/img_fr/img_UIC_Services/img_openstack/image045.png#bordered)

#### **Détails d’un déploiement**
Vous obtenez la liste des déploiements en cliquant sur le menu **Gérer -> Déploiements,** l’écran ci-dessous fournit un exemple de liste. 

![Image](/img_fr/img_UIC_Services/img_openstack/image046.png#bordered)

Un clic sur le lien **Identifiant** affiche tous les détails du déploiement. 

![Image](/img_fr/img_UIC_Services/img_openstack/image047.png#bordered)

La structure et le contenu de cette page sont décrits en détails dans le document général intitulé ***UiC_Guide_UserAdmin_FR.*** Les sections suivantes reprennent certaines descriptions générales mais se focalisent surtout sur les spécificités de OpenStack. 

#####  Actions sur un déploiement 
Dans la zone située en haut, à gauche de la page, *UIC* affiche la liste des actions applicables à un déploiement : 

![Image](/img_fr/img_UIC_Services/img_openstack/image048.png#bordered)

**Supprimer** : Cette commande permet de supprimer le déploiement de la table des déploiements,

**Template** : Permet d’afficher le template généré par *UIC* et utilisé pour ce déploiement,

**Retirer ce déploiement** : Permet de retirer ce déploiement de la table des déploiements, sans supprimer ses ressources des Cloud où elles ont été approvisionnées. UIC affichera le message suivant : 

![Image](/img_fr/img_UIC_Services/img_openstack/image049.png#bordered)

##### Actions sur un nœud 
Dans la zone centrale, *UIC* affiche la liste des actions de management de la VM, organisée en deux catégories, **Actions sur le nœud** et **Liste des accès à la machine** :

![Image](/img_fr/img_UIC_Services/img_openstack/image050.png#bordered)

Voici la description des commandes du groupe **Actions sur le nœud,** en partant de la première icône à gauche :

![Image](/img_fr/img_UIC_Services/img_openstack/image051.png#bordered)**Démarrer** : Lorsque la machine virtuelle est arrêtée, l’icône permet de la démarrer,

![Image](/img_fr/img_UIC_Services/img_openstack/image052.png#bordered)**Stopper** : La machine virtuelle est à l’état démarré, l’icône permet de l’arrêter,

- **Redémarrer** : Cette action permet de redémarrer la machine virtuelle,
- **Exécuter une commande** : Affiche un éditeur de texte qui vous permet de saisir les commandes à exécuter à distance sur la VM. 
- **Remarque : Cette commande n’est disponible que si l’agent *UIC* est installé sur la machine virtuelle.**
- **Pause :** Cette action permet de mettre en pause la machine virtuelle,
- **Reprendre** : Reprendre l’exécution de la VM après une commande pause,
- **Redimensionner** : Permet de redimensionner le gabarit l’instance, 
- **Sauvegarder** : Permet de créer une sauvegarde, 
- **Restaurer** : Permet de restaurer la machine virtuelle depuis une sauvegarde,

Les commandes du groupe **Liste des accès à la machine** vous permettent d’accéder à distance à la machine à l’aide d’une des deux options :

- **Console** : Cette méthode permet d’accéder à la console de la VM,
- **RDP** (pour Windows) ou **SSH** (pour Linux) : Ces méthodes d’accès sont décrites dans les sections **Connexion aux instances Linux** et **Connexion aux instances Windows.**

##### Démarrer une instance
La commande **Démarrer** une instance n’est disponible que si l’instance est arrêtée.

- Cliquez sur le bouton **Démarrer,** UIC vous affiche une fenêtre vous demandant de confirmer l’action, puis valider à l’aide du bouton OK.

![Image](/img_fr/img_UIC_Services/img_openstack/image053.png#bordered)Patientez, puis rafraichissez à l’aide du bouton suivant , la page de l’instance apparaît avec l’instance démarrée, le champ **Etat** passe à la valeur **Actif**.

##### Arrêter une instance
- Sélectionnez la commande **Arrêter,** UIC affiche la boite de dialogue vous demandant la confirmation de l’action, validez à l’aide du bouton OK. 

Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_openstack/image054.png#bordered), le tableau des instances apparaît, le statut de l’instance passe à l’état *Stoppé*.

##### Commande *Pause*
- Pour mettre une VM en mode pause, sélectionnez la commande **Pause,** UIC affiche la boite de dialogue vous demandant la confirmation de l’action, validez à l’aide du bouton OK. 

Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_openstack/image054.png#bordered), le tableau des instances apparaît, le statut de l’instance passe à l’état *Stoppé*.

##### Redimensionner une instance
Pour redimensionner une instance de VM, cette instance doit être à l’état arrêté.

- Sélectionnez la commande **Redimensionner,** la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image055.png#bordered)

- Cliquez sur le menu **Gabarit**, sélectionnez celui qui vous convient puis cliquez sur le bouton **Redimensionner**,

Patientez le temps que le redimensionnement s’opère au niveau du Cloud OpenStack. En cas de succès, UIC affichera le résultat de l’opération à l’aide de la notification suivante :

![Image](/img_fr/img_UIC_Services/img_openstack/image056.png#bordered)

Et la taille du gabarit est mise à jour dans le tableau des caractéristiques du nœud.

**Remarque :** Il arrive que le tableau ne soit pas mis à jour automatiquement, dans ce cas utilisez le bouton de rafraichissement de la page pour réafficher ce tableau.

##### Accéder à la Console
- Appuyez sur le bouton **Console** de la zone **Liste des accès à la console**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image057.png#bordered)

- Cliquez sur le lien pour vous connecter à la console de l’instance.

Dans le cas d’une instance *Linux Ubuntu*, vous obtenez une console analogue à celle affichée ci-dessous :

![Image](/img_fr/img_UIC_Services/img_openstack/image058.png#bordered)

Dans le cas d’une instance *Windows*, lors de la première connexion, vous pourriez être amené à configurer quelques paramètres du système comme illustré ci-dessous : 

![Image](/img_fr/img_UIC_Services/img_openstack/image059.png#bordered)

- Précisez les paramètres demandés, puis cliquez sur le bouton **Next**, l’écran suivant apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image060.png#bordered)

- Entrez le mot de passe de l’administrateur, confirmez-le, 
- Cliquez sur le bouton **Finish**, le processus de configuration se termine et vous obtiendrez l’écran d’authentification de *Windows* suivant :

![Image](/img_fr/img_UIC_Services/img_openstack/image061.png#bordered)


##### Supprimer une instance
- Sélectionnez la commande **Supprimer** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image062.png#bordered)

- Cliquez sur le bouton **Supprimer**, l’instance n’apparaitra plus dans la liste.

##### Sauvegarder une instance
Le bouton **Sauvegarder** vous permet de programmer des sauvegardes régulières de VM, conformément aux fréquences affichées dans la fenêtre suivante :

![Image](/img_fr/img_UIC_Services/img_openstack/image063.png#bordered)

- **Nom de la sauvegarde :** Indiquez le nom que vous souhaitez donner à la sauvegarde,
- **Type de sauvegarde** : Fréquence de sauvegarde, quotidienne ou hebdomadaire,
- **Rotation** : Fréquence de rotation des sauvegardes. Une fréquence de « N » gardera « N » sauvegardes. A la « N + 1 » ème sauvegarde, la plus ancienne copie sera supprimée et remplacée par la nouvelle. 

#####  Restaurer une sauvegarde d’instance
Le bouton ***Restaurer*** vous permet de restaurer l’état d’une VM à partir d’une sauvegarde:

![Image](/img_fr/img_UIC_Services/img_openstack/image064.png#bordered)

Sélectionnez dans la liste ***Sauvegarde***, l’image à laquelle vous souhaitez revenir. Cochez la case ***Préserver le disque*** si vous souhaitez préserver le disque éphémère de l’instance courante. Appuyez sur le bouton ***Restaurer*** pour confirmer. En cas de succès, *UIC* affiche un message indiquant que l’opération s’est bien déroulée.

#### **Suppression d’un déploiement**
Vous pouvez utiliser le menu **Gérer -> Déploiements** pour supprimer un déploiement. La liste des déploiements s’affiche : 

![Image](/img_fr/img_UIC_Services/img_openstack/image065.png#bordered)

- Sélectionnez la liste déroulante **Actions** du déploiement que vous souhaitez supprimer, la plateforme UIC affiche la commande **Supprimer** :

![Image](/img_fr/img_UIC_Services/img_openstack/image066.png#bordered)

- Sélectionnez cette commande, 

La plateforme UIC vous demandera de confirmer l’action, après la validation, l’opération de suppression se déclenche auprès de l’infrastructure Openstack. La plateforme attend la réponse de suppression définitive avant de passer le déploiement à l’état **Supprimé**, comme indiqué dans l’exemple suivant :

![Image](/img_fr/img_UIC_Services/img_openstack/image067.png#bordered)

Les ressources du déploiement supprimé sont complètement désallouées de l’infrastructure Cloud, en revanche quelques métadonnées restent encore en mémoire de la plateforme *UIC*. 

Pour supprimer aussi ces données et la ligne correspondante dans la table des déploiements, cliquez sur le bouton **Supprimer** de la colonne **Actions** du déploiement. 

## **Tableau de bord *OpenStack*** 
Une fois que les prérequis sont validés, vous pourrez alors gérer les ressources de vos tenants *Openstack* depuis le menu *UIC* **Clouds -> Openstack -> Identifiant Cloud**, le tableau de bord ci-dessous apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image068.png#bordered)

La page **Tableau de bord** vous affiche des indicateurs sur l’utilisation des ressources IaaS rattachées au tenant sélectionné et au compte authentifié.

La page est divisée en deux parties, le volet de gauche permet de sélectionnez un tenant. Les items **Instances**, **Volumes**, **Sauvegardes de volumes, Paires de clés**, **Réseau, Groupe de sécurité**, **IP Flottantes**, **Images**, **quotas** sont mis à disposition pour permettre d’obtenir les indicateurs d’utilisation, par type de ressource.  

Le contenu de la partie centrale (variable en fonction des items sélectionnés) du tableau de bord affiche les informations suivantes : 

- Le temps écoulé depuis la dernière mise à jour (en haut à droite) suivi du bouton permettant de forcer l’actualisation des données (bouton ![Image](/img_fr/img_UIC_Services/img_openstack/image003.png#bordered)),
- Le nombre total d’instances de VMs, le nombre d’instances arrêtées et le nombre d’instances démarrées,
- Le nombre total de volumes configurés, le nombre de volumes attachés et le nombre de volumes disponibles,
- Le nombre total de groupes de sécurité configurés, 
- Le nombre total de paires de clé configurées,
- Le nombre total de réseaux configurés,
- Un graphique représentant les instances démarrées, arrêtées. Cet indicateur fournit la répartition en nombres et en pourcentages,
- Un graphique représentant les volumes attachés, disponibles. Cet indicateur fournit la répartition en nombres et en pourcentages,

## **Instances**
L’item **Instances** de machines virtuelles permet d’afficher les informations et les actions exposées sur les instances des VMs associées à chaque projet de l’identifiant Cloud sélectionné. 

![Image](/img_fr/img_UIC_Services/img_openstack/image069.png#bordered)

Le tableau présente la liste et les paramètres des instances créés, le bouton **+** de la première colonne permet d’afficher les paramètres cachés du tableau : 

|**Nom**	|Nom attribué à l’instance (machine virtuelle)|
| - | - |
|**ID**	|Identifiant attribué à l’instance (machine virtuelle)|
|**Statut** |Statut de l’instance, activée ou désactivée|
|**Image**|Identificateur de l’image de la VM,|
|**Adresse IP**|Adresse IP de la machine virtuelle,|
|**Taille**|Taille de la VM,|
|**Création**	|Indique la date de la création de l’instance, |
|**Paire de clés**|Identifiant de la paire de clés d’accès à l’instance,|
|**Zone de disponibilité**|Zone de disponibilité de la VM,|
|**Groupe de sécurité**|Identifiant du groupe de sécurité appliqué,|
|**Règles du groupe de sécurité**|Règles associées au groupe de sécurité,|
|**État de l'alimentation**|État de l'instance (Active, arrêtée),|
|**Actions** | **Redémarrer/Démarrer :** Permet de démarrer ou redémarrer l’instance arrêtée, |
||**Redimensionner :** Permet de redimensionner le gabarit l’instance, |
||**Prendre un instantané :** Permet d’ajouter une image (snapshot) de l’instance,|
||**Eteindre :** Permet d’éteindre l’instance,|
||**Console :** Accéder à la console de la VM|
||**Supprimer :** Permet de supprimer l’instance,|

### ***Démarrer une instance***
La commande **Démarrer** une instance n’est disponible que si l’instance est arrêtée.

- Cliquez sur le menu **Actions** de l’instance que vous souhaitez démarrer,

![Image](/img_fr/img_UIC_Services/img_openstack/image070.png#bordered)

- Sélectionnez **Démarrer** la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image071.png#bordered)

- Cliquez sur le bouton **Démarrer**, un message vous avertit que l’instance est en cours de démarrage. Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_openstack/image054.png#bordered), le tableau des instances apparaît avec l’instance démarrée, le champ **Statut** passe à l’état **Active**.


### ***Redimensionner une instance***
Pour redimensionner une instance de VM, cette instance doit être à l’état arrêté.

- Sélectionnez la commande **Redimensionner** depuis le menu déroulant **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image072.png#bordered)

- Cliquez sur le menu **Gabarit**, sélectionnez celui qui vous convient puis cliquez sur le bouton **Redimensionner**,

![Image](/img_fr/img_UIC_Services/img_openstack/image073.png#bordered)Patientez, puis rafraichissez à l’aide du bouton suivant , le tableau des instances montre bien que le gabarit de l’instance a été pris en compte,

### ***Prendre un instantané***  
Pour faire une image de l’instance, sélectionnez la commande **Prendre un instantané** ou la commande **Sauvegarder** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image074.png#bordered)

- Saisissez le nom de l’instantané dans la zone prévue à cet effet,
- Cliquez sur le bouton **Valider**, 

### ***Eteindre une instance***
Cette opération mettra l’instance sélectionnée dans un état ‘’Stoppée’’. La VM est arrêtée mais reste associée à l’hyperviseur qui la gère. Au prochain démarrage, elle sera gérée par ce même hyperviseur. 

- Sélectionnez la commande **Arrêter** ou la commande **Eteindre** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image075.png#bordered)

- Cliquez sur le bouton **Arrêter**, un message vous avertit que l’instance est en cours d’arrêt,
- Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_openstack/image054.png#bordered), le tableau des instances apparaît, le statut de l’instance passe à l’état *shutoff*.

### ***Accéder à la Console***
UIC vous permet un accès en mode console à chaque VM déployée.

- Sélectionnez la commande **Console** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image057.png#bordered)

Reportez-vous à la section **Accéder à la Console** qui décrit les détails des opérations à suivre.

### ***Supprimer une instance***
- Sélectionnez la commande **Supprimer** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image062.png#bordered)

- Cliquez sur le bouton **Supprimer**, l’instance n’apparaitra plus dans la liste.

## **Les volumes**
La rubrique **Volumes** liste les volumes déclarés dans la zone géographique sélectionnée. Depuis le menu **Clouds -> Openstack -> Tenant**, sélectionnez l’item **Volumes,** la page suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image076.png#bordered)

Toutes les informations et les actions possibles sur les volumes sont affichées dans 
ce tableau :

- **Nom** : Indique le nom du volume,
- **Description** : Décrit le volume,
- **Taille** (GB) : Indique la taille du volume,
- **Statut** : Indique si le disque est déjà associé à une machine virtuelle ou si celui-ci est disponible,
- **Type** :  Permet d’identifier la technologie utilisée pour le disque, par exemple high-speed,
- **Attaché à** : Indique l’instance à laquelle le volume est attaché,
- **Zone** : Indique le lieu où est situé le volume, 
- **Amorçable** : Indique si le volume est amorçable ou non,
- **Chiffré** : Indique si le volume est chiffré ou non,
- **ID** : Indique l’identifiant du volume,
- **Créé** : Indique la date de création du volume,
- **Métadonnées** : Indique le mode d’attachement du volume (métadonnées possibles, readonly et attached_mode). 
- **Actions** : 
	- **Attacher :**  Permet d’attacher un volume à une instance,
	- **Prendre un instantané :** Permet de sauvegarder le volume,
	- **Détacher :**  Permet de détacher un volume d’une instance,
	- **Supprimer :** Permet de supprimer un volume,

### ***Créer un volume***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> Openstack,** sélectionnez l’item **Volumes**, la page **Volumes** apparaît. 

- Cliquez sur le bouton **Créer un** **Volume**, la boite de dialogue suivante s’affiche : 

![Image](/img_fr/img_UIC_Services/img_openstack/image077.png#bordered)

- Saisissez dans la zone **Nom** le nom du volume,
- Entrez une description du volume,
- Choisissez le type de technologie souhaitée « classic ou high speed » depuis le menu déroulant **Type**,
- Précisez la taille du volume (en GB), 
- Cliquez sur le bouton **Créer**, 

Le volume créé est maintenant visible depuis le tableau de la page des volumes.


## **Les sauvegardes de volumes**
La rubrique **Sauvegarde de volume** liste tous les instantanés (sauvegardes) créés. Lorsque vous cliquez sur ce menu, *UIC* affiche votre liste avec les caractéristiques de chaque instantané ainsi que les actions à appliquer. 

![Image](/img_fr/img_UIC_Services/img_openstack/image078.png#bordered)

*UIC* affiche pour chaque instantané, les paramètres suivants :  

- **Nom / ID** : Indique le nom de l’instantané,
- **Description :** Indique la description brève de l’instantané,
- **Taille** : Taille disque de l’instantané (en GB),
- **Statut** : Statut de l’instantané,
- **ID du volume :** Indique l’identifiant du volume,
- **Créé** : Date de création de l’instantané,
- **Type** : Type d’instantané,
- **Actions** : 
	- **Supprimer** :  Permet de supprimer la sauvegarde.

###  ***Supprimer une sauvegarde du volume***
Vous pouvez supprimer les sauvegardes d’instances individuellement ou bien par lots. 

![Image](/img_fr/img_UIC_Services/img_openstack/image079.png#bordered)

Si vous souhaitez supprimer une sauvegarde individuelle, 

- Cliquez sur le menu **Actions -> Supprimer** associé à la sauvegarde que vous souhaitez supprimer.

Si vous souhaitez supprimer plusieurs sauvegardes en une seule opération, 

- Cochez case par case ou cochez la case qui se trouve en tête de tableau (en haut à gauche) 
- Cliquez sur le bouton **Supprimer les sauvegardes d’instance**,

## **Les paires de clés**
Les paires de clé OpenStack sont des ressources associées aux projets et aux régions du Cloud *OpenStack*. Chaque clé n’est valide que pour la région à laquelle elle est attachée.

Pour accéder aux commandes concernant la gestion des paires de clé de sécurité OpenStack, sélectionnez le menu **Clouds -> OpenStack -> Tenant,**

- Cliquez sur l’item **Paires de clés**, la page **Paires de clés** apparaît : contenant la liste des clés déjà créées :   

![Image](/img_fr/img_UIC_Services/img_openstack/image080.png#bordered)

Cette page contient sous forme de tableau les paramètres des paires de clés existantes :

- **Nom** : Indique l’identifiant de la paire de clés,
- **Empreinte** : Permet de vérifier la validité de la clé de sécurité,
- **Actions** : 	
	- **Supprimer** : Cette action supprime la paire de clés,

Le bouton **Créer une paire de clés** : Cette action permet de créer une paire de clés,

Le bouton **Supprimer les paires de clés** : Cette action supprime l’ensemble des clés sélectionnées dans le tableau, Pour sélectionner les clés, cochez les cases situées sur la colonne à gauche de la colonne ‘**’Nom’’** du tableau.

### ***Création d’une paire de clés***
- Cliquez sur le bouton **Créer une paire de clés**, la fenêtre suivante apparaît :  

![Image](/img_fr/img_UIC_Services/img_openstack/image081.png#bordered)

- Entrez le nom de votre paire de clés dans la boîte de dialogue **Créer une paire de clés**, puis cliquez sur **Créer**.  La clé privée sera téléchargée automatiquement. Lorsque la clé est créée, elle apparaît dans le tableau des clés associées.

**Remarque : Pensez à protéger la clef sur disque, en effectuant les opérations nécessaires, par exemple sous Linux, vous pouvez exécuter la commande suivante :**
```
chmod 0600 yourPrivateKey.pem
```
## **Les réseaux**
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> OpenStack -> Tenant,**

- Sélectionnez l’item **Réseaux** afin d’afficher celle-ci: 

![Image](/img_fr/img_UIC_Services/img_openstack/image082.png#bordered)

Cette page affiche les réseaux virtuels configurés sur *OpenStack* pour le projet sélectionné. Cliquez sur le bouton + de la première colonne pour visualiser toutes les colonnes : 

- **Nom** : Indique le nom du réseau,
- **Statut** : Indique l’état du réseau (actif ou non),
- **Sous-réseaux** : Indique les noms des sous-réseaux et leurs CIDR,
- **Partagé :** indique si le réseau est partagé ou non,
- **Externe :** indique si le réseau est externe ou non,
- **ID du réseau :** Indique l’identifiant du réseau,
- **Etat administrateur :** Actif ou Inactif,
- **Type :** Indique le type d’isolation du réseau (VLAN, GRE, VXLAN, Flat),
- **ID projet** : Indique l’identifiant numérique du projet, 
- **ID segmentation** : identifiant de la segmentation, 
- **Réseau physique** : Identifiant du réseau physique,
- ***Actions*** : 	
	- **Supprimer** : Cette action supprime le réseau,

###  ***Création d’un réseau***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> OpenStack -> Tenant**, sélectionnez l’item **Réseaux**, la page **Réseaux** apparaît.

- Cliquez sur le bouton **Créer un Réseau**, le formulaire **Créer un réseau** apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image083.png#bordered)

**Réseau :** 

- Saisissez le nom du réseau dans la zone **Nom**, 
- Saisissez le **Bloc CIDR du sous réseau** (exemple : 192.168.0.0/24),

**Nouveau sous-réseau :** 

- Saisissez le nom du sous-réseau dans la zone **Nom**, 
- Saisissez le **Bloc CIDR du sous réseau** (exemple : 192.168.0.0/24),
- Cliquez sur le bouton **Créer**, 
  La création apparaît dans la liste disponible depuis la page **Réseaux**, vous pouvez consulter chaque réseau, sous réseau(x), visualisable(s),

![Image](/img_fr/img_UIC_Services/img_openstack/image084.png#bordered)

Le tableau affiche l’ensemble des paramètres liés au sous-réseau,
- **Nom :** Indique le nom du réseau
- **Statut :** Indique le statut du réseau,
- **Sous-réseau :** Indique le nom et l’identifiant du sous-réseau,
- **Partagé :** Indique si le réseau est partagé,
- **Externe :** Indique si le réseau est externe ou interne,
- **Action** : 
	- **Supprimer** le sous-réseau référencé,

- Cliquez sur le lien du réseau concerné de la colonne **Nom**, la page des **Réseaux** et **Sous-réseaux** apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image085.png#bordered)

Il est possible de supprimer le réseau et le sous-réseau.

###  ***Ajout d’un sous-réseau*** 
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> OpenStack -> Tenant**, sélectionnez l’item **Réseaux**, la page **Réseaux** apparaît.

- Cliquez sur le bouton **Créer un Réseau**, le formulaire **Créer un réseau** apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image083.png#bordered)

- Cliquez sur le lien **Je veux utiliser réseau existant**, la liste des réseaux définis s’affiche :

![Image](/img_fr/img_UIC_Services/img_openstack/image086.png#bordered)

- Sélectionnez le réseau qui vous intéresse, définissez le nom du sous-réseau et son bloc CIDR pour cliquez sur le bouton Créer pour ajouter le sous-réseau. 

###  ***Suppression d’un sous-réseau*** 
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> OpenStack -> Tenant**, sélectionnez l’item **Réseaux**, la page **Réseaux** apparaît.

- Cliquez sur le nom du réseau dont vous souhaitez supprimer le sous-réseau, vous obtenez la page spécifique au réseau sélectionné, comme dans l’exemple suivant :

![Image](/img_fr/img_UIC_Services/img_openstack/image087.png#bordered)

- Supprimer le sous-réseau que vous souhaitez à l’aide de son menu **Actions -> Supprimer**. 

###  ***Suppression d’un réseau*** 
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> OpenStack -> Tenant**, sélectionnez l’item **Réseaux**, la page **Réseaux** apparaît.

- Supprimer le réseau que vous souhaitez à l’aide de son menu **Actions -> Supprimer**. 

## **Groupes de sécurité**
Les groupes de sécurité *OpenStack* sont des ressources associées aux projets et aux régions du Cloud *OpenStack*. Chaque groupe de sécurité n’est valide que pour la région à laquelle il est attaché.

Pour accéder aux commandes concernant la gestion des groupes de sécurité *OpenStack*, sélectionnez le menu **Clouds -> OpenStack -> Tenant**, sélectionnez l’item **Groupes de sécurité**, la page **Groupes de sécurité** apparaît :

![Image](/img_fr/img_UIC_Services/img_openstack/image088.png#bordered)

Cette page contient la liste des groupes de sécurité créés, des actions sont également disponibles.   

Le bouton **Créer un groupe de sécurité** : Cette action permet de créer un groupe de sécurité,

Le bouton **Supprimer les groupes de sécurité** : Cette action supprime l’ensemble des groupes de sécurité sélectionnés,

La liste des groupes de sécurité déclarés chez ***OpenStack*** est présentée sous forme de tableau : 

- **ID** : Indique l’identifiant du groupe de sécurité,
- **Nom** : Indique le nom du groupe de sécurité,
- **Nombre de règles** : Indique le nombre de règle rattaché au groupe de sécurité,
- **Description** : Indique la description du groupe de sécurité,
- **Actions** : 	
	- **Supprimer** : Cette action supprime le réseau,

###  ***Création d’un groupe de sécurité*** 
Depuis la page Groupe de sécurité, cliquez sur le bouton **Créer un groupe de sécurité**, le formulaire **Créer un groupe de sécurité** apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image089.png#bordered)

- Saisissez le nom du groupe, il doit être unique dans la base des groupes de sécurité. 
- Saisissez une description textuelle succincte de ce groupe.

*UIC* affiche une notification indiquant que le groupe de sécurité est en cours de création. En cas de succès, UIC affiche automatiquement le formulaire qui permet de configurer les règles de pare-feu pour ce groupe de sécurité. Ce formulaire est décrit dans le paragraphe *Ajouter une règle à un groupe de sécurité*.

**Remarque : Lorsque la création du groupe de sécurité est réussie, le formulaire de configuration des règles de sécurité ne s’affiche pas automatiquement, actualisez l’affichage du tableau à l’aide du bouton ![Image](/img_fr/img_UIC_Services/img_openstack/image003.png#bordered) .** 

- Cliquez sur l’identifiant du groupe pour configurer les règles de sécurité. La section *Ajouter une règle à un groupe de sécurité* fournit les détails sur cette configuration.

###  ***Ajouter une règle à un groupe de sécurité***
L’ajout d’une règle à un groupe de sécurité existant s’effectue à partir de la page **Groupes de sécurité**, 

![Image](/img_fr/img_UIC_Services/img_openstack/image090.png#bordered)

- Cliquez sur le lien de la colonne **ID**, la page suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image091.png#bordered)

- Cliquez sur le bouton **Modifier**, la boite de dialogue apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image092.png#bordered)

- Complétez les zones de saisie : 

- **De** : Indiquez le premier numéro de port auquel la règle s’appliquera,
- **Jusqu’à** : Indiquez la borne maximale des ports auxquels la règle s’appliquera,
- **Protocole** : Indiquez le protocole réseau concerné (TCP, UDP, ICMP),
- **Source** : Indiquez la source concernée (adresse IP unique ou segment d’adresses IP),

- Cliquez sur le bouton **Valider** pour ajouter la règle, 

Vous pouvez créer autant de règles de sécurité que nécessaires pour votre cas d’usage.

## **IP flottantes**
La rubrique **IP flottantes** permet d’afficher la liste des adresses IP flottantes déjà créées. Elle vous permet également d’en créer des nouvelles ou de supprimer celles dont vous n’avez plus l’usage. 

###  ***Afficher la liste des IP flottantes***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> penStack -> Tenant**, 

- Cliquez sur l’item **IP flottantes**, *UiC* affiche la page illustrée ci-dessous : 

![Image](/img_fr/img_UIC_Services/img_openstack/image093.png#bordered)

La fonction **Change columns** : Elle permet d’afficher ou non dans le tableau l’ensemble des paramètres liés au volume, 

La fonction **CSV** : Vous avez la possibilité d’exporter le tableau web affiché dans un format CSV,

Le tableau affiche les informations et actions suivantes : 

- **IP Flottante** : Valeur de l’IP flottante,
- **Status** : Etat (attachée, non attachée),
- **IP fixe** : Adresse IP privée de l’instance d’attachement,
- **Attachée à** : Indique l’identifiant de l’instance d’attachement,
- **Actions** :	**Dissocier :** permet de dissocier l’IP flottante de l’instance d’attachement,
	- **Supprimer** : Permet de supprimer l’IP flottante.

###  ***Créer une IP flottante***
Depuis l’item **IP flottante**, actionnez le bouton **Créer une IP flottante**, 

![Image](/img_fr/img_UIC_Services/img_openstack/image093.png#bordered)

*UiC* affiche la boite de dialogue suivante : 

![Image](/img_fr/img_UIC_Services/img_openstack/image094.png#bordered)

- Cliquez sur le bouton **Créer**, deux messages apparaitront (en cours de création, création effectuée), 

![Image](/img_fr/img_UIC_Services/img_openstack/image095.png#bordered)

- Cliquez sur la croix pour les faire disparaitre,
- Actualisez en cliquant sur le bouton suivant ![Image](/img_fr/img_UIC_Services/img_openstack/image003.png#bordered), l’IP flottante nouvellement créée apparaîtra dans le tableau.  

###  ***Supprimer une IP flottante***
La suppression d’une IP flottante peut se faire à l’aide de la commande **Actions -> Supprimer** 

![Image](/img_fr/img_UIC_Services/img_openstack/image096.png#bordered)

ou,

- Cochez-la, les IP flottante(s) à supprimer puis cliquez sur le bouton **Supprimer les IP flottantes**

![Image](/img_fr/img_UIC_Services/img_openstack/image097.png#bordered)

- Cliquez sur le bouton **Supprimer**, les messages suivants apparaîssent :

![Image](/img_fr/img_UIC_Services/img_openstack/image098.png#bordered)

## **Images**
Les images des machines virtuelles *Openstack* sont des ressources associées aux régions du Cloud *Openstack*. Chaque région possède son offre propre de machines virtuelles, qui peut être différente de celles des autres régions, notamment en matière de gabarits et de tarification.

Pour accéder aux commandes concernant la gestion des images de VMs, sélectionnez le menu **Clouds -> Openstack -> Tenant**, 

- Séléctionnez l’item **Images**, la page **Images** apparaît, 

![Image](/img_fr/img_UIC_Services/img_openstack/image099.png#bordered)

La liste des images disponibles s’affiche :   

- **Nom/ID** : Nom ou identifiant de l’image
- **Type** : Indique le type de système d’exploitation, exemple Linux,
- **Statut** : Indique si elle est active ou non,
- **Visibilité** : Domaine de visibilité de l’image (privé ou public),
- **Minimum RAM** : RAM minimale requise,
- **Minimum Disque** : Disque minimal requis,
- **Création** : Indique la date de création de l’image,
- **Actions** : 
	- **Déployer** : Permet de déployer l’image.

###  ***Déploiement d’une image de machine virtuelle***
Pour accéder à la gestion des images de machines virtuelles, sélectionnez le menu **Clouds -> Openstack -> Tenant -> Images**, la page **Images** apparaît.

- Sélectionnez l’image à déployer à l’aide du menu **Actions -> Déployer**, la boite de dialogue suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_openstack/image100.png#bordered)

- Indiquez le nom de l’application,
- Saisissez le nom du nœud,
- Utilisez le menu déroulant **Plateforme de l’image** et sélectionnez le système d’exploitation de base correspondant à l’image *Openstack* sélectionnée, la page de préparation des déploiements s’affiche : 

![Image](/img_fr/img_UIC_Services/img_openstack/image101.png#bordered)

- Poursuivez l’étape de préparation du déploiement. Les détails sur cette étape sont 

dans la section **Configuration d’un déploiement**. 

## **Les quotas**
La plateforme *UIC* peut collecter et afficher les données concernant les quotas d’utilisation de vos ressources Cloud *Openstack*. Pour accéder à ces données, sélectionnez le menu **Clouds -> OpenStack -> Tenant -> Quotas**, vous obtenez la page ci-dessous :

![Image](/img_fr/img_UIC_Services/img_openstack/image102.png#bordered)

La plateforme *UiC* affiche les quotas des ressources Cloud sous deux formes :

- Une représentation sous forme de tableau récapitulatif indiquant l’usage courant et la limite de chaque type de ressource. 
- Une représentation graphique visualisant les quotas globaux, pour toutes les régions, classés par type de ressource,

Voici la liste des types de ressources représentées dans cette page :

- **Nombre d’instances**
- **Nombre de CPU**
- **RAM** 
- **Nombre d’IP flottantes**  
- **Nombre de groupes de sécurité** 
- **Nombre de volumes** 
- **Taille totale des volumes** 

Lorsqu’une des limites est atteinte, les nouveaux déploiements se terminent en échec. Il sera alors nécessaire de libérer des ressources non utilisées, ou bien d’augmenter la capacité de l’infrastructure OpenStack puis augmenter la limite de la ressource manquante. 
