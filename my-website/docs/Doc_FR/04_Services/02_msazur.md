---
id: 40002
title: Microsoft Azur
description: UseITcloud documentation 3.2.0
sidebar_position: 2
---

## Les commandes communes aux pages de l'IHM

Les pages et formulaires affichés par _UIC_ présentent certaines commandes dont la signification est la même quelle que soit la page qui les présente. Par conséquent, ces commandes seront décrites dans ce chapitre et cette description est applicable à toutes les ressources et tous les formulaires gérés par _UIC_ et présentés dans ce document.

Voici la liste et la description de ces commandes :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- La commande **Afficher X éléments ** : Cette commande s'applique aux tableaux affichés par _UIC_. Elle permet de limiter le nombre d'éléments visualisés par page.
- La commande **Rechercher ** : Cette commande s'applique aux tableaux affichés par UIC. Elle permet de rechercher et présenter les éléments contenant la chaîne de caractères spécifiée dans le champ de recherche.
- La commande **Change columns ** : Cette commande s'applique aux tableaux affichés par UIC. Elle permet à l'utilisateur de sélectionner les colonnes qu'il souhaite visualiser.
- La commande **CSV ** : Cette commande s'applique aux tableaux affichés par UIC. Elle permet à l'utilisateur d'exporter le tableau affiché dans un fichier au format CSV.
- Le bouton d'actualisation ![Image](/img_fr/img_UIC_Services/img_msazur/image003.png#bordered)  : Ce bouton permet de forcer l'actualisation des données affichées.

## Identifiants Cloud Microsoft Azure

Pour configurer un identifiant de connexion _UIC_ à une infrastructure du cloud public _Microsoft Azure_, vous avez besoin des paramètres _Microsoft Azure_ suivants :

- Un identifiant de souscription,
- Un identifiant de Client,
- Un identifiant de tenant,
- Une clé secrète,
- La région de déploiement par défaut.

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l'étape de configuration de ces paramètres dans _UIC_, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l'environnement _Microsoft Azure_, vous pouvez créer ou obtenir ces informations en vous connectant sur le portail de gestion du Cloud Azure à l'adresse [https://portal.azure.com](https://portal.azure.com/) en tant qu'administrateur de votre abonnement (ou à partir d'un compte ayant des privilèges suffisants sur l'_Azure Active Directory_).

Si vous n'êtes pas familier avec l'environnement _Microsoft Azure_, vous pouvez consulter les paragraphes suivants pour découvrir comment créer ou obtenir les identifiants _Microsoft Azure_ cités ci-dessus.

## 5.1Obtenir les identifiants d'un compte Microsoft Azure

Les informations nécessaires à la configuration d'un identifiant UIC de connexion au Cloud Azure pourront être obtenus en vous connectant à la plateforme _Azure._ Pour cela authentifiez-vous sur le portail de gestion du Cloud Azure, [https://portal.azure.com](https://portal.azure.com/), en tant qu'administrateur de votre abonnement (ou à partir d'un compte ayant des privilèges suffisants sur l'_Azure Active Directory_).

Une fois authentifié, vous obtenez l'écran ci-dessous :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Dans la liste **All services** , sélectionnez le service _ **Azure Active Directory** __,_
- Cliquez sur **App registrations** puis **New registration**

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

### 5.1Création d'une application

- Depuis **App Registration** , cliquez sur **New application** afin d'enregistrer une nouvelle application auprès d'_Azure Active Directory_.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Indiquez le nom dans la zone **Name**
- Sélectionnez _Web_ dans la zone **Redirect URI**.
- Saisissez une URL dans la zone Sign-on URL (URL de login de cette application)
- Cliquez sur le bouton **Register,** la page **App001** apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sauvegardez les champs suivants :

- **Application (client) ID** correspond à la valeur **«ID de client»** sur la plateforme UIC
- **Directory (tenant) ID** correspond à la valeur **«ID de tenant»** sur la plateforme UIC

Vous pouvez ensuite créer une nouvelle clé pour cette application en cliquant sur **Certificates & secrets**  ****  **+New client secret** , vous obtenez alors l'écran suivant :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Saisissez une description et choisissez une période d'expiration (1 an, 2 ans ou pas d'expiration).
- Cliquez sur le bouton **Add**

L'interface affiche un code secret **qui ne sera exposé qu'une seule fois** , c'est la valeur qu'il faudra fournir dans le champ **« Clé secrète »** pour UIC.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

**Attention : Faites un copier-coller avant de fermer la page. La valeur de la clé ne sera pas récupérable, après avoir fermé cette page.**

Un dernier élément est à récupérer, c'est l'identifiant de l'abonnement Azure : «  **ID de souscription**  ». Cet identifiant peut être récupéré depuis le portail Web en suivant les instructions décrites dans le paragraphe suivant.

### 5.2Récupération de l'identifiant « ID de souscription »

A partir du portail Web, depuis la barre de recherche **Subscription** cliquez sur ce service.
![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

La page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Récupérez la valeur dans la zone _Subsciption ID_
- Donnez des droits à l'application créée (abonnement _Azure_).

### 5.3Contrôle d'accès sur Azure

Pour associer un rôle Azure à une application, procédez comme ceci :

- Cliquez sur **subscription** et aller dans la zone **Access Control** (IAM).

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Cliquez sur + **Add**  ****  **Add Role Assignment** , L'écran ci-dessous apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Dans la zone **Role** , sélectionnez **Owner** ou **Contributor**.
- Dans la zone **Select** Saisissez le début ou le nom complet de l'application, puis sélectionner l'application à laquelle vous souhaitez associer le rôle. Dans notre exemple App00
- Cliquez sur le bouton Save

A la fin de cette étape, vous disposez des quatre informations Azure nécessaires, à déclarer sur la plateforme _Use It Cloud_.

## 5.2Configuration des identifiants Clouds Azure dans UIC

Depuis la plateforme UIC, menu \< **Compte:Utilisateur\>**  ****  **Identifiants Cloud**  **Microsoft**** Azure**,

- Cliquez sur le bouton **Ajouter un identifiant** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Complétez les zones ci-dessous :

**Nom de l'identifiant**  : Indiquez le nom de l'identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu'à 20 caractères, lettres sans accent, chiffres, tirets).

**ID de souscription, ID de client, ID de tenant et la clé secrète** , décrits dans les pages précédentes.

**Région** par défaut : Choisissez la région Azure par défaut que vous souhaitez pour cet identifiant.

**Proxy**  : URL du proxy (facultatif) au format suivant : https://user:password@host:port

## 5.3Conséquence sur la table des identifiants Microsoft Azure

L'identifiant créé apparaîtra comme une entrée parmi les identifiants _Microsoft Azure_. Vous pourrez le modifier en sélectionnant le menu **\<Compte:Utilisateur\>**  ****  **Identifiants Cloud**  ****  **Microsoft Azure**.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

La table des identifiants vous permet d'exécuter sur chacun d'entre eux les commandes du menu **Actions**. Ces actions sont intitulées **Configuration** , **Configurer le proxy** , **Modifier les identifiants** et **Supprimer** (décrites dans les sous chapitres suivants).

#### 5.3.1Configuration

La page des Identifiants Clouds s'affiche depuis le menu **\<Compte:Utilisateur\>**  ****  **Identifiants Cloud**   ****  **Microsoft Azure** :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez la commande _ **Configuration** _ de la colonne, menu **Actions** , la boite de dialogue **Configuration de l'identifiant Microsoft Azure …** apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez le menu **Région par défaut** si nécessaire puis cliquez sur le bouton **Mettre à jour**.
- Saisissez le délai d'attente souhaité pour le Cloud _Microsoft Azure_, cliquez sur le bouton **Mettre à jour**.

Pour chaque déploiement, _UIC_ commande le provisionnement des VM auprès du Cloud cible et attend une réponse de celui-ci, indiquant le résultat du déploiement (succès ou échec). Le temps de ce provisionnement dépend principalement de la charge et des performances du Cloud cible, de l'image OS et logiciels à installer sur la VM et des conditions réseau entre la plateforme _UIC_ et ce Cloud. Le délai d'attente, à configurer pour ce paramètre, correspond au temps maximum au-delà duquel une absence d'indication de fin de déploiement peut être considérée par _UIC_ comme un échec de déploiement.

Compte-tenu du fait que ce délai est variable d'une infrastructure à une autre, _UIC_ vous offre la possibilité d'indiquer la valeur la plus convenable pour votre environnement.

#### 5.3.2Modifier la Configuration du proxy

La page des Identifiants Clouds s'affiche depuis le menu **\<Compte:Utilisateur\>**  ****  **Identifiants Cloud**   ****  **Microsoft Azure**.

- Sélectionnez la commande _ **Configuration du proxy** _ de la colonne, menu **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Saisissez l'URL du proxy,
- Cliquez sur le bouton **Sauvegarder** ,

#### 5.3.3Modifier un identifiant

La page des Identifiants Clouds s'affiche depuis le menu **\<Compte:Utilisateur\>**  ****  **Identifiants Cloud**   ****  **Microsoft Azure**.

- Sélectionnez la commande _ **Modifier identifiant** _ du menu **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Apportez les modifications nécessaires,
- Cliquez sur le bouton **Sauvegarder**.

#### 5.3.4 Supprimer un identifiant

- Sélectionnez la commande _ **Supprimer** _ du menu **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Cliquez sur le bouton **Supprimer l'identifiant Cloud** ,

### 5.3.2Conséquence sur le menu Clouds

Après l'ajout d'un identifiant Cloud _Microsoft Azure_, la plateforme _UIC_ crée un item (le Tenant) dans le menu **Clouds**  ****  **Microsoft Azure**  ****  **\<nom du tenant\>** (celui attribué à la création) **.**

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Ce tenant vous permet d'accéder et de piloter les ressources _Microsoft Azure_.

### 5.3.3Conséquence sur la page de préparation d'un déploiement

Après la création d'un identifiant Cloud _Microsoft Azure_, celui-ci sera ajouté à la liste des tenants _Microsoft Azure_ de la page de préparation d'un déploiement, comme illustré dans l'exemple ci-dessous :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Le menu déroulant **Tenant** contient l'identifiant nouvellement créé.

### 5.3.4Conséquence sur le formulaire de référencement d'une image fournisseur

Après l'ajout d'un identifiant Cloud _Microsoft Azure_, le nom de cet identifiant sera rajouté dans la liste des fournisseurs du menu **Design**  ****  **Images**  **Référencer une image fournisseur** , son formulaire s'affiche et l'identifiant sera sélectionnable depuis le menu déroulant **Fournisseur**.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Ceci permet de référencer des images de VM disponibles chez les fournisseurs et les rendre privées pour le tenant spécifié.

### 5.3.5Conséquence sur la gestion des rôles _UIC_

Lorsque vous ajoutez un identifiant Cloud _Microsoft Azure_ à un compte, pensez à configurer les permissions appropriées aux utilisateurs de ce compte.

Voici le tableau des ressources _Microsoft Azure_ et des permissions configurables dans _UIC_ :

| **Type de ressources** | **Liste de permissions applicables** |
| --- | --- |
| Groupes de ressources | Lister, Créer, Supprimer. |
| Instances | Lister, Déployer une instance, Gérer l'état (stopper, démarrer), Supprimer. |
| Groupes de sécurité | Lister, Créer, Modifier, Supprimer. |
| Volumes | Lister, Créer, Attacher, Détacher, Modifier, Supprimer. |
| Comptes de stockage | Lister, Créer, Supprimer. |
| Blobs | Lister, Supprimer. |
| Réseaux | Lister, Créer, Supprimer. |
| Interfaces réseau | Lister, Supprimer. |
| Paires de clés | Lister, Créer, Supprimer. |
| IP | Lister, Créer, Associer (dissocier, modifier) Supprimer. |
| Instantanés | Lister, Créer, Supprimer. |
| Quotas | Lister. |
| Consommation | Lister. |

Vous pouvez utiliser les rôles prédéfinis par _UIC_, ou bien créer de nouveaux rôles et les configurer à votre convenance. Vous pourrez ensuite attribuer ces rôles à des groupes ou à des utilisateurs conformément à votre environnement de production.

Les détails sur la gestion des utilisateurs, des groupes et des rôles sont fournis dans le document intitulé **UiC\_Guide\_UserAdmin\_FR** qui accompagne _UIC_.

# 6Déploiements

Les déploiements de machines virtuelles dans une infrastructure _Microsoft Azure_ nécessitent les prérequis obligatoires suivants :

- Un identifiant Cloud ou tenant,
- Un référencement d'image(s) si vous avez des images de VM spécifiques. Ce référencement n'est pas nécessaire pour les images publiques disponibles sur _Azure_.

Le processus de déploiement d'une application est composé de trois grandes étapes :

- Une étape de configuration, appelée pré-déploiement. Cette étape permet de configurer l'environnement de déploiement,
- Une étape de lancement du déploiement. Cette étape débute à l'instant où le déploiement dans le Cloud est déclenché. Elle se termine au moment où le résultat du lancement de l'opération est affiché,
- Une étape de gestion du déploiement appelée post-instanciation. Cette étape commence à la fin de la phase précédente et se termine au moment de la suppression définitive d'une instance de la base de données des déploiements gérés par _UIC_.

## 6.1Configuration d'un déploiement

Le déploiement des applications et des VM s'effectue à l'aide du menu **Déployer**  **Catalogue**  **\<Application\>**  **Déployer.** L'action **Déployer** permet de configurer l'environnement du déploiement avant de la déclencher réellement.

- Sélectionnez l'application à déployer, actionnez le bouton **Déployer** correspondant à l'application, vous obtenez l'écran de préparation de déploiement illustré sur l'écran suivant :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Saisissez dans la zone **Etiquette** le nom du déploiement afin de l'identifier,
- Sélectionnez le menu déroulant **Fournisseur** puis _Microsoft Azure_,
- Sélectionnez le menu déroulant **Tenant** (nom de l'identifiant) désiré, s'il y en a plusieurs,
- Sélectionnez la région du déploiement à l'aide du menu **Région,**
- Cliquez sur le bouton **Confirmer** pour validervotre choix, vous obtiendrez l'écran de configuration de tous les paramètres généraux et les paramètres spécifiques à _Microsoft Azure_. Le détail de configuration de chacun des onglets est décrit dans les prochaines sections.

### 6.1Infrastructure

L'onglet **Infrastructure** vous permet de préciser tous les paramètres nécessaires pour le déploiement sur votre infrastructure _Microsoft Azure_, comme illustré sur l'écran suivant :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

**OS :** Indique le système d'exploitation lié à l'application,

**Gabarit :** Par défaut un gabarit est proposé, le menu offre une liste des gabarits disponibles chez le fournisseur, dans la région choisie,

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Lorsque vous sélectionnez un gabarit, _UIC_ vous indique les caractéristiques du gabarit choisi ainsi que les coûts horaires et les coûts mensuels, comme illustré dans l'exemple ci-dessous :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

**Groupe de ressources :** Sélectionnez le groupe de ressources que vous souhaitez associer à ce déploiement, ou bien créez un nouveau.

**Disque :** Sélectionnez le type de disque associé au nœud parmi les deux options suivantes :

- **Géré**  : Dans ce mode, le disque attaché au nœud est implicitement géré par le Cloud Azure,
- **Non géré**  : Dans ce mode, le disque n'est pas géré de façon implicite par le Cloud Azure. Vous devez indiquer le compte de stockage pour le disque ou bien en créer un nouveau, comme illustré ci-dessous :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

**Paires de clé :** Par défaut UIC vous propose l'usage d'une nouvelle paire de clef pour ce nœud. Si vous souhaitez changer ce choix, vous pouvez utiliser une des autres options présentées dans le menu :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Sélectionnez l'option souhaitée puis passez à la configuration des paramètres réseau à l'aide de l'onglet réseau, décrit ci-dessous.

### 6.2Configuration du réseau

L'onglet **Réseau** vous permet de préciser tous les paramètres de configuration réseau nécessaires pour le déploiement sur votre infrastructure _Microsoft Azure_. Ces paramètres sont illustrés sur la figure suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

**IP Publique** : Cochez la case Adresse IP publique si vous souhaitez qu'une adresse IP publique soit affectée à la machine virtuelle,

**Réseau**  : le nom du réseau où la VM sera déployée, la liste déroulante vous présente tous les réseaux configurés. Vous pouvez aussi créer un nouveau réseau ou sous-réseau si vous le souhaitez,

**Groupe de sécurité**  : Ce menu déroulant propose de créer un groupe de sécurité ou de sélectionner un existant pour cette VM:

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Si vous sélectionnez un groupe de sécurité existant, le bouton **Afficher les règles** s'affichera, comme ceci :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Ce bouton vous permet de consulter la liste des règles définies par ce groupe, comme illustré dans l'exemple suivant :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

**Priorité** : Niveau de priorité de la règle. Ce nombre doit être compris entre 100 et 4096. Azure considère que les nombres les plus faibles sont prioritaires. Les traitements sont effectués par ordre croissant. Une fois que le trafic correspond à une règle, le traitement s'arrête et les règles ayant des priorités avec des nombres plus élevés sont ignorées,

**Nom**  : Nom unique identifiant la règle,

**Source**  : Source concernée par la règle,

**Destination**  : Destination concernée par la règle,

**Protocole**  : Protocole et port concernée par la règle,

**Accès**  : Action associée à la règle (autoriser, refuser),

**Direction**  : Indique si la règle s'applique au trafic entrant ou sortant.

**Accès direct à une instance**

La case à cocher **Accès direct à l'instance**  : Cochez cette case si l'instance de la machine virtuelle est dans le même réseau que la plateforme UIC. La communication entre la plateforme et l'instance se fera en utilisant l'adresse privée de l'instance.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

**Nouvelles règles du groupe de sécurité**  : Ce tableau vous permet de définir ou de rajouter des règles qui régissent le groupe de sécurité.

### 6.3Personnalisation d'une instance

L'onglet **Personnalisation** permet de spécifier des paramètres non IaaS d'une instance. Quel que soit le type de VM de base (Linux ou Windows).

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Comme précisé dans le formulaire, la personnalisation de l'instance concerne les paramètres suivants :

**Nom de l'instance**  : Indiquez le nom qui identifiera l'instance sur le Cloud cible,

**Installer l'agent UIC**  : Cochez cette case si vous souhaitez que l'agent UIC soit automatiquement installé dans l'instance,

**Script prédéfini**  : Si vous avez à associer un script prédéfini à cette instance, sélectionnez-le dans la liste déroulante,

**Script additionnel**  : Si vous le souhaitez, ajoutez du code dans cette zone. Ce code sera exécuté automatiquement après le démarrage de l'instance,

**Tags**  : Ajoutez les tags que vous souhaitez attacher à cette instance.

### 6.4Gestion de configuration

UIC propose la gestion de configuration des machines virtuelles en mettant en œuvre les outils _Ansible_, _Chef_ et _Puppet_.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Le menu déroulant **Gestion de configuration** liste les gestionnaires de configuration définis au niveau de UIC. Cette liste est vide si aucun gestionnaire n'a été défini.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Cette mise en œuvre est commune à tous les Cloud, elle n'est donc pas spécifique à _Microsoft Azure_. Elle est documentée et détaillée dans le guide intitulé **UiC\_Guide\_UserAdmin\_FR**.

### 6.5Surveillance

UIC propose la surveillance des machines virtuelles en mettant en œuvre les services de monitoring Centreon ou Zabbix.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Le menu déroulant **Surveillance** les met à disposition.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered) Cette mise en œuvre est commune à tous les Clouds, elle n'est donc pas spécifique à _Microsoft Azure_. Elle est documentée et détaillée dans le guide intitulé  **UiC\_Guide\_UserAdmin\_FR**.

Une fois que vous avez fini la configuration, vous pouvez lancer votre déploiement en cliquant sur le bouton **Déployer** (en haut à droite de l'écran) le processus de déploiement est enclenché.

## 6.2 Opération de déploiement

Lorsque le déploiement est lancé, la plateforme _UIC_ affiche l'écran de progression du déploiement :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

La durée nécessaire au déploiement dépend de l'environnement de déploiement (puissance et capacité de votre infrastructure) mais également des caractéristiques de la machine virtuelle à déployer (son gabarit, son système d'exploitation de base et de l'ensemble des logiciels additionnels, du temps nécessaire à l'installation de l'agent si vous l'avez activé pour la VM).

Une fois que l'opération de déploiement est terminée avec succès, _UIC_ passe à l'étape de post-instanciation qui permet de gérer la machine virtuelle active.

## 6.3Post-Instanciation

Une fois que le déploiement est terminé avec succès, l'écran **Déploiement** indiquera le statut Déployé dans la colonne **Etat** :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

UIC affiche l'identifiant unique pour ce déploiement dans la colonne **Identifiant.** Sa valeur est un champ actif qui vous permet d'accéder aux détails de l'instance déployée.

Les autres colonnes ont des labels auto-explicatifs du contenu de la colonne. La connexion à l'instance s'effectue depuis la colonne **Actions** , une des deux actions est proposée :

- **SSH** dans le cas d'une instance Linux,

Ou,

- **RDP Client** dans le cas d'une instance Windows.

Le bouton **Supprimer** permet d'effacer l'instance de la VM.

### 6.3.1Connexion aux instances Linux

Depuis la plateforme _UIC_ connectez-vous en ssh aux instances _Linux_. Si vous cliquez sur le bouton **ssh** de la colonne **Actions** vous obtenez l'écran suivant :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Cet écran vous affiche les paramètres qui vous permettront de vous connecter à la machine virtuelle en choisissant l'une des deux options :

- En utilisant un outil ssh externe, dans ce cas vous pouvez copier toutes les valeurs des paramètres affichés dans cette fenêtre et les injecter dans l'outil que vous utilisez.
- En utilisant l'outil Shell in a box intégré à UIC, dans ce cas vous avez juste à cliquer sur le bouton **Shell in a box** affiché en bas, à gauche de la fenêtre. UIC vous connectera automatiquement sur la VM et ouvrira une fenêtre dans un onglet dédié de votre navigateur.

### 6.3.2Connexion aux instances Windows

UIC vous permet de vous connecter en RDP à une instance Windows, à condition que la connexion Bureau à distance soit autorisée sur cette instance. Assurez-vous que cette condition est respectée en vous connectant sur la console de la VM et en vérifiant au niveau du paramétrage du firewall Windows, que les bonnes options sont activées, comme illustré sur l'écran ci-dessous :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

#### 6.3.2.1 Options de connexions

Si vous cliquez sur le bouton **RDP Client** de la colonne **Actions** vous obtenez l'écran suivant :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Cet écran vous affiche les paramètres qui vous permettront de vous connecter à la VM en choisissant l'une des deux options :

- En utilisant un outil RDP externe, dans ce cas vous pouvez copier toutes les valeurs des paramètres affichés dans cette fenêtre et les injecter dans l'outil que vous utilisez.
- En utilisant la procédure proposée par UIC, dans ce cas vous avez juste à afficher le mot de passe pour le copier car il vous sera demandé lors de la connexion, puis cliquer sur le bouton **Télécharger le fichier RDP** affiché en bas, à gauche de la fenêtre. Suivez en suite les instructions et les étapes décrites ci-dessous.

#### 6.3.2.2Connexion Bureau à distance

Lorsque vous cliquez sur le bouton **Télécharger le fichier RDP,** Windows vous affiche la fenêtre suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez **Ouvrir avec**  : **Connexion Bureau à distance** , puis cliquez sur **OK.** Vous obtiendrez la fenêtre suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Cliquez sur le bouton **Connexion** pour déclencher l'action de connexion à l'instance, le système Windows affichera une fenêtre semblable à la suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Entrez le mot de passe de connexion puis cliquez sur **OK**.

**Remarque : Si votre VM ne présente pas un certificat signé par une autorité de confiance, le système affichera la fenêtre suivante :**

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Si vous êtes dans un réseau sécurisé, appuyez sur le bouton **Oui** , sinon corrigez le problème avant de continuer.

Après l'opération d'authentification, le système Windows de la VM affiche la session de l'utilisateur authentifié. Voici un exemple d'écran d'une session Administrateur par défaut :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

### 6.3.3Détails d'un déploiement

Vous obtenez la liste des déploiements en cliquant sur le menu **Gérer**  **Déploiements,** l'écran ci-dessous fournit un exemple de liste.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Un clic sur le lien **Identifiant** affiche tous les détails du déploiement.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Les zones constituant cette page sont décrites dans les sections suivantes.

#### 6.3.3.1Actions sur un déploiement

Dans la zone située en haut, à gauche de la page, _UIC_ affiche la liste des actions applicables à un déploiement :

!![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

**Supprimer**  : Cette commande permet de supprimer le déploiement de la table des déploiements,

**Template**  : Permet d'afficher le template généré par _UIC_ et utilisé pour ce déploiement,

**Retirer ce déploiement**  : Permet de retirer ce déploiement de la table des déploiements, sans supprimer ses ressources des Cloud où elles ont été approvisionnées. UIC affichera le message suivant :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

#### 6.3.3.2Actions sur un nœud

Depuis la zone centrale _UIC_ affiche la liste des actions de management de la machine virtuelle, organisée en deux catégories, **Actions sur le nœud** et **Liste des accès à la machine**  :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Voici la description des commandes du groupe **Actions sur le nœud,** en partant de la première icône à gauche :

**D ![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered) émarrer** : Lorsque la machine virtuelle est arrêtée, l'icône permet de la démarrer,

**A !![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered) rrêter** : La machine virtuelle est à l'état démarré, l'icône permet de l'arrêter,

**Redémarrer**  : Cette action permet de redémarrer la machine virtuelle,

**Exécuter une commande**  : Affiche un éditeur de texte qui vous permet de saisir les commandes à exécuter à distance sur la VM.

**Remarque : Cette commande n'est disponible que si l'agent _UIC_ est installé sur la machine virtuelle.**

**Redimensionner :** Cette action permet de redimensionner le gabarit de la VM.

Les commandes du groupe **Liste des accès à la machine** vous permettent d'accéder à distance à la machine à l'aide d'une des deux options :

- **RDP** (pour Windows) ou **SSH** (pour Linux) : Ces méthodes d'accès sont décrites dans la section _6.3Post-Instanciation_.

### 6.3.4Suppression d'un déploiement

Vous pouvez utiliser le menu **Gérer**  **Déploiements** pour supprimer un déploiement. La liste des déploiements s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez la liste déroulante **Actions** du déploiement que vous souhaitez supprimer, choisissez la commande **Supprimer** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Cliquez sur le bouton **OK** pour confirmer la suppression, après avoir validé, l'opération de suppression se déclenche auprès de l'infrastructure Microsoft Azure.

La plateforme attend la réponse de suppression définitive avant de passer le déploiement à l'état **Supprimé** , comme indiqué dans l'exemple suivant :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

**Remarque : Les ressources du déploiement supprimé sont complètement désallouées de l'infrastructure Cloud, en revanche quelques métadonnées restent encore en mémoire de la plateforme _UIC_.**

Pour supprimer aussi les données et la ligne correspondante dans la table des déploiements, cliquez sur le bouton **Supprimer** de la colonne **Actions**. La boite de dialogue « Are you sure you want to delete this service ? » apparaît :

- Cliquez sur le bouton **OK** pour confirmer la suppression des métadonnées.

# 7Tableau de bord _Microsoft Azure_

Une fois que les prérequis sont validés, vous pourrez alors gérer les ressources de vos tenants _Microsoft Azure._ Depuis le menu _UIC_ **Clouds**  **Microsoft Azure**  **\<Tenant\>** , le tableau de bord apparaît.

La page **Tableau de bord** vous affiche des indicateurs sur l'utilisation des ressources IaaS rattachées au tenant sélectionné et au compte authentifié.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

La page est divisée en deux parties (gauche et centrale), le contenu de la partie centrale affiche des informations variables (en fonction des items sélectionnés), ci-dessous celles du tableau de bord :

- Le bouton ![Image](/img_fr/img_UIC_Services/img_msazur/image003.png#bordered) (Informations actualisées) : Indique le temps écoulé depuis la dernière mise à jour. Si vous cliquez sur ce bouton vous forcerez l'actualisation des données.
- La brique **Instances**  : Indique le nombre total d'instances (machines virtuelles) ainsi que le nombre arrêté et démarré,
- La brique **Volumes**  : Indique le nombre total de volumes configurés ainsi que le nombre de attachés et disponibles,
- La brique **Groupes de ressources, Groupes de sécurité**  : Indique le nombre de groupes de ressources et le nombre de groupes de sécurité,
- La brique **Réseaux, Adresses IP publiques, Interfaces réseau** : Indique le nombre total de paires de clés, de groupe de Sécurité et de réseaux configurés,
- Le graphique **Usage**  : Il affiche toutes les ressources utilisées et le coût total.
- Le graphique **Instances**  : Il représente le nombre total d'instances (tenant) ainsi que le nombre démarré, arrêté. Cet indicateur fournit la répartition en nombres et en pourcentages,
- Le graphique **Volumes**  : Il représente le nombre total de volumes ainsi que le nombre de volumes attachés et disponibles. L'indicateur fournit la répartition en nombres et en pourcentages,
- Le graphique **Instances par groupe de ressources**  : Il représente le nombre total d'instances par groupe de ressources, ainsi que le nombre d'instances démarrées et le nombre d'instances arrêtées.
- Un graphique **Volumes**   **par groupe de ressources** : Il représente la répartition en taille et en nombre des volumes par groupe de ressources. Il fournit également le nombre et la taille de volumes attachés aux VM ainsi que la taille et le nombre de volumes disponibles.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Les items **Groupes de ressources, Instances** , **Comptes de stockage** , **Groupes de sécurité** , **Volumes** , **Sauvegardes de Volume,**  **Réseaux, Interfaces réseau, Adresses IP publiques** , **Quotas et**  **Facturation** sont détaillés dans les paragraphes suivants.

# 8Groupes de ressources

Un groupe de ressources _Microsoft Azure_ permet de regrouper des ressources associées à une solution ou à une application. Le groupe de ressources peut inclure toutes les ressources de la solution, ou uniquement celles que vous souhaitez gérer en tant que groupe. Lorsque vous cliquez sur l'item « Groupe de ressources », la plateforme _UIC_ présente la liste des groupes de ressources au centre de la page dans un tableau :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Le tableau présente les colonnes suivantes :

**Nom**  : Indique le nom du groupe de ressources,

**ID de souscription**  : Indique l'identifiant de souscription Azure ayant créé le groupe de ressources,

**Emplacement**  : Indique la situation géographique du groupe de ressources,

**Actions**  : **Supprimer**  : Cette action permet la suppression du groupe de ressources,

### 8.1Créer un groupe de ressources

A partir de la page **Groupes de ressources** , cliquez sur le bouton **Créer un groupe de ressources** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez le menu déroulant **Région** , puis celle où vous souhaitez créer le groupe de ressources,

Saisissez le nom du groupe dans la zone prévue à cet effet, puis cliquez sur **Créer** , celui-ci apparaitra sur la page **Groupes de ressources**.

## 8.2Supprimer un groupe de ressources

Pour supprimer un groupe de ressources, cliquez sur le bouton **Actions**  ****  **Supprimer** associé au groupe que vous souhaitez supprimer. UIC affiche la fenêtre suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

La suppression d'un groupe de ressources entraine la suppression de toutes les ressources qu'il représente. Confirmez à l'aide du bouton **supprimer**. Le groupe sera supprimé de la table des groupes de ressources.

# 9Instances

L'item **Instances** de machines virtuelles permet d'afficher les informations et les actions exposées sur les instances des VM associées à chaque application ou solution de l'identifiant Cloud sélectionné.

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Il est possible d'afficher partiellement ou totalement les informations présentées dans le tableau, à partir du bouton **Change Columns**  :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

| ![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered) | **ID**  de l'instance : Identifiant de la VM, **Nom**  : Nom de la VM, **Statut**  : Indique l'état de l'instance (Stopped, Running …), **Etat de provisionnement** : Etat du provisionnement **Groupe de ressources :** Groupes de ressources **Emplacement :** Indique la situation géographique de la VM, **IP**   **publique/privée**  : Adresse IP (privée ou publique) de la VM **Nombre de disque**  : Indique le nombre de disque sur la machine virtuelle, **Groupe de sécurité**  : Indique le groupe de sécurité en cours d'utilisation pour cette instance, **Système d'exploitation**  : Indique le système d'exploitation utilisé pour cette VM, **ID de souscription**  : Indique l'identifiant de souscription, **Référence Image**  : Image de référence utilisée **Tags**  : Indique la liste des tags associés à la VM, **Disque**  : Informations sur le disque associé à la VM. |
| --- | --- |

Le bouton **csv** , vous permet d'exporter ces Informations dans un fichier csv (si vous le souhaitez).

La colonne/bouton **Actions**  offre les possibilités suivantes :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

**Redémarrer :** Redémarrel'instance

**Prendre un instantané :** Permet de prendre un instantané de l'instance,

**Arrêter**  : Le système d'exploitation de la machine virtuelle est arrêté et les services de la machine virtuelle ne sont pas disponibles, mais la machine virtuelle continue de réserver les ressources de calcul et de réseau fournies par _Azure_.

**Arrêter (Désallouer)** : Cette action arrêteet résilie (désallocation) la machine virtuelle, le système d'exploitation de celle-ci, vous libérez également les ressources de calcul (cpu, ram) et les ressources réseau qu'Azure avait préalablement provisionnés, vous continuez de payer lestockage disque.

**Supprimer**  : Cette action supprime l'instance et la facturation,

**Démarrer une instance**

La commande **Démarrer** une instance n'est disponible que si l'instance est arrêtée.

- Cliquez sur le menu **Actions** de l'instance que vous souhaitez démarrer,
- Sélectionnez **Démarrer** la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Cliquez sur le bouton **Démarrer** , un message vous avertit que l'instance est en cours de démarrage. Patientez, puis rafraichissez à l'aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_msazur/image003.png#bordered) , le tableau des instances apparaît avec l'instance démarrée, le champ **Statut** passe à l'état **Active**.

**Redimensionner une instance**

Pour redimensionner une instance de VM, cette instance doit être à l'état arrêté.

- Sélectionnez la commande **Redimensionner** depuis le menu déroulant **Actions** , la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Cliquez sur le menu **Gabarit** , sélectionnez celui qui vous convient puis cliquez sur le bouton **Redimensionner**. UIC affiche un message indiquant que l'instance est en cours de redimensionnement.

Patientez, puis rafraichissez à l'aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered) , le tableau des instances montre bien que le nouveau gabarit de l'instance a été pris en compte. Vous pouvez donc redémarrer l'instance.

**Arrêter une instance**

Cette opération mettra l'instance sélectionnée dans un état ''stoppé''. La VM est arrêtée mais reste associée à l'hyperviseur qui la gère. Au prochain démarrage, elle sera gérée par ce même hyperviseur.

- Sélectionnez la commande **Arrêter** depuis la colonne **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Cliquez sur le bouton **Arrêter** , un message vous avertit que l'instance est en cours d'arrêt,
- Patientez, puis rafraichissez à l'aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_msazur/image003.png#bordered) , le tableau des instances apparaît, le statut de l'instance passe à l'état _stoppée_.

**Supprimer une instance**

- Sélectionnez la commande **Supprimer** depuis la colonne **Actions** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Cliquez sur le bouton **Supprimer** , l'instance n'apparaitra plus dans la liste.

# 10 Comptes de stockage

Un compte de stockage Azure contient tous vos objets de données de stockage Azure : objets blob, fichiers, files d'attente, tables et disques. Le compte de stockage fournit pour vos données de stockage Azure un espace de noms unique, accessible de n'importe où dans le monde via HTTP ou HTTPS.

## 10.1 Présentation

Dans UIC, les comptes de stockages sont accessibles à l'aide du menu **Clouds** _ **Microsoft Azure** _  **\<Tenant\>****  **** Comptes de stockage** :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Le formulaire affiche la liste des comptes déjà créés sous forme d'un tableau contenant les colonnes suivantes :

**Nom**  : indique le nom du compte,

**Performances**  : indique le type de performance attribué au compte,

**Réplication**  : indique le nom du compte,

**Groupe de ressources**  : Nom du groupe de ressources attaché au compte,

**Emplacement**  : Emplacement géographique du compte,

**ID de souscription**  : Identifiant de souscription du compte Azure,

**Actions**  : Présente la liste des actions applicables au compte.

## 10.2 Création d'un compte de stockage

Pour créer un compte de stockage, cliquez sur le bouton **Créer un compte de stockage** , UIC affiche la fenêtre suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Sélectionnez le groupe de ressources que vous souhaitez associer au compte, indiquez le nom du compte puis cliquez sur le bouton **Créer** pour valider. Lorsque le compte est créé sur la plateforme Azure, UIC affiche le message suivant :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Le compte sera rajouté dans la table des comptes de stockage.

## 10.3 Suppression d'un compte de stockage

Pour supprimer un compte de stockage, cliquez sur le bouton **Actions**  ****  **Supprimer** associé au compte que vous souhaitez supprimer. UIC affiche la fenêtre suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Confirmez à l'aide du bouton supprimer. Le compte sera supprimé de la table des comptes.

# 11 Groupes de sécurité

Les groupes de sécurité _Microsoft Azure_ sont des ressources associées à des groupes de ressources et des régions du Cloud _Microsoft Azure_.

Pour accéder aux commandes concernant la gestion des groupes de sécurité _Microsoft Azure_, sélectionnez le menu **Clouds** _ **Microsoft Azure** _  \< **Tenant\>** , séléctionnez l'item **Groupes de sécurité** , la page **Groupes de sécurité** apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

**Nom**  : Indique le nom du groupe de sécurité,

**Groupe de ressources**  : Indique le groupe de ressources associé,

**Emplacement**  : Indique la situation géographique du groupe de sécurité,

**ID**   **de souscription** : Indique l'identifiant de souscription,

**Règles de sécurité entrantes** : Règles de sécurité du trafic entrant,

**Règles de sécurité sortantes** : Règles de sécurité du trafic sortant,

La colonne **Actions**  :

- **Supprimer**  : Cette action supprime le groupe de sécurité correspondant.

## 11 Créer un groupe de sécurité

- Sélectionnez le menu **Clouds**  **Microsoft Azure**  **Tenant,** sélectionnez l'onglet **Groupe de sécurité** la page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Cliquez sur le bouton **Créer un groupe de sécurité** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez le groupe nécessaire depuis le menu déroulant **Groupe de ressources** ,
- Saisissez le nom du groupe de sécurité,
- Cliquez sur le bouton **Créer** , le groupe de sécurité s'ajoute à la liste présente sur la page _Groupe de sécurité_.

## 12 Supprimer un groupe de sécurité

Pour supprimer un groupe de sécurité, cliquez sur le bouton **Actions**  ****  **Supprimer** associé au groupe que vous souhaitez supprimer. UIC affiche la fenêtre suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Confirmez à l'aide du bouton supprimer. Le groupe sera supprimé de la table des groupes.

# 12 Volumes

La rubrique **Volumes** liste les volumes déclarés dans la zone géographique sélectionnée. Depuis le menu **Clouds** _ **Microsoft Azure** _  **\<Tenant\>** , sélectionnez l'item **Volumes** la page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Le tableau liste l'ensemble des volumes existants et leurs caractéristiques :

**Nom**  : Indique le nom du volume,

**Taille**  : Indique la taille du volume,

**Etat**  : Indique la disponibilité ou non du volume,

**Type**  : Indique le type de disque (HDD, SSD),

**Attaché à**  : Si le volume est attaché à une VM, ce champ indique son nom. Sinon, le champ est vide.

**Groupe de ressources**  : Indique le nom du groupe de ressources auquel le volume est rattaché,

**Emplacement**  : Indique l'emplacement géographique du volume,

**Date de création**  : Indique la date et l'heure de création du volume,

**Actions**  : **Attacher**  : Cette action vous permet d'attacher le volume à une instance,

**Supprimer** : Cette action vous permet de supprimer le volume,

## 12.1 Créer un volume

A partir de la page **Volume** , cliquez sur le bouton **Créer un volume** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez le groupe de ressources depuis le menu déroulant **Groupe de ressources** ,
- Saisissez le nom du groupe,
- Indiquez la taille nécessaire si celle par défaut ne vous convient pas,
- Choisissez le type de volume, puis, cliquez sur le bouton **Créer** , la page des **Volumes**  apparaitra avec celui-ci.

## 12.2 Attacher un volume

Cliquez sur le bouton **Actions** du volume que vous souhaitez redimensionner, puis cliquez sur la commande **Attacher** , la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez l'instance d'attachement dans la liste **Instance** ,
- Sélectionnez le numéro d'unité logique que vous souhaitez attribuer au volume.
- Confirmez à l'aide du bouton **Attacher.**

## 12.3 Supprimer un volume

Cliquez sur le bouton **Actions** du volume que vous souhaitez supprimer, puis cliquez sur la commande **Supprimer** , la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Confirmez à l'aide du bouton supprimer. Le volume sera supprimé de la table des volumes.

# 13 Sauvegardes de volume

Pour accéder aux instantanés de volumes, sélectionnez le menu **Clouds**  **Microsoft Azure**  \< **Tenant\>**  **Sauvegardes de volume,** la page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

UIC affiche pour chaque instantané, les paramètres suivants :

**Nom** : Indique le nom de l'instantané,

**Taille** : Taille disque de l'instantané (en GB),

**Groupe de ressources**  : Nom du groupe de ressources d'appartenance,

**Date**  : Date et heure de création de l'instantané,

**Emplacement**  : Emplacement de l'instantané,

**Actions**  : Liste des opérations possibles sur l'instantané.

# 14 Réseaux

Sélectionnez le menu **Clouds**  ****  **Microsoft Azure**  ****  **\<Tenant\>** , onglet **Réseaux** , la page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Le tableau des réseaux configurés indique, pour chaque réseau, les attributs suivants :

**Nom**  : Nom du réseau,

**Emplacement**  : Emplacement géographique,

**Groupe de ressources**: Groupe de ressources auquel appartient le réseau,

**Espace d'adressage**  : Espace d'adressage du réseau,

**Sous-réseau**  : Identifiant et espace d'adressage du sous-réseau

**Action(s)** : Ce menu contient l'action **Supprimer** , applicable au réseau.

Le bouton **Créer un réseau** : Ce bouton permet de créer un réseau au sein de l'infrastructure Azure _Cloud_.

## 14.1 Créer un réseau

- Cliquez sur le bouton **Créer un réseau** , la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez le groupe de ressources, la région sera complétée en fonction de celui-ci,
- Saisissez dans la zone **Nom du réseau** , le nom du réseau,
- Indiquez le bloc CIDR dans la zone **Bloc CIDR (réseau)**,
- Saisissez dans la zone **Nom du sous-réseau** , le nom du sous-réseau,
- Indiquez le bloc CIDR dans la zone **Bloc CIDR** (sous-réseau),
- Cliquez sur le bouton **Créer** , le réseau apparaîtra dans la liste des réseaux disponible depuis la page **Réseaux**.

## 14.2 Ajouter un sous-réseau

Pour ajouter un sous-réseau à un réseau existant, cliquez sur le lien bleu de la colonne **ID** du réseau, la page contenant les détails sur le réseau apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Cliquez sur Créer un sous-réseau, la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Saisissez le nom du sous-réseau,
- Définissez le bloc CIDR du sous-réseau,
- Cliquez sur le bouton **Créer**. UIC affiche le résultat de la création (succès ou échec) et ajoute le sous-réseau créé à la table existante. En cas de succès, si cette nouvelle entrée n'est pas affichée automatiquement, appuyez sur le bouton de mise à jour forcée associé à la table des sous-réseaux.

## 14.3 Supprimer un sous-réseau

Pour supprimer un sous-réseau d'un réseau existant, cliquez sur le bouton **Actions**  ****  **Supprimer** associé au sous-réseau. UIC affichera une boite de dialogue vous demandant de confirmer la suppression. Cliquez sur le bouton **Supprimer** pour effectuer la suppression définitive du sous-réseau.

## 14.4 Supprimer un réseau

Cliquez sur le bouton **Actions** du réseau que vous souhaitez supprimer puis cliquez sur la commande **Supprimer** , la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Confirmez à l'aide du bouton **Supprimer**. Le réseau sera supprimé de la table des réseaux.

# 15 Interfaces réseau

Lorsque vous créez une machine virtuelle sur un Cloud Azure, ce dernier crée pour vous une interface réseau avec des paramètres par défaut. _Use IT Cloud_ (_UIC_) vous permet de créer des interfaces réseau personnalisées que vous pourrez attacher à des machines virtuelles _Azure_. La plateforme _UIC_ vous permet également de recenser toutes les interfaces réseau créées sur l'infrastructure Azure, qu'elles soient créées depuis le portail UIC ou par d'autres outils.

- Sélectionnez le menu **Clouds**  **Micrsoft**** Azure **** Tenant **, onglet** Interfaces ****Réseau** la page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

La page **Interfaces réseau** présente le tableau des interfaces existantes, avec pour chacune d'elles, ses caractéristiques :

**Nom**  : Indique le nom de l'interface réseau,

**Réseau**  : Indique le nom du réseau de rattachement de l'interface,

**IP Privée**  : Indique l'adresse IP privée,

**Groupe de sécurité**  : Indique l'identifiant du groupe de sécurité,

**Attaché à** : Indique le nom de l'instance qui utilise l'interface,

**Groupe de ressources**  : Indique le nom du groupe de ressources auquel l'interface est rattachée,

**Emplacement**  : Indique l'emplacement géographique de l'interface,

**ID de souscription**  : Indique l'identifiant de souscription,

**Adresse MAC**  : Adresse MAC attribuée à l'interface,

**Actions**  : **Supprimer**  : Cette action permet de supprimer l'interface réseau.

## 15.1 Créer une interface réseau

- Sélectionnez le menu **Clouds**  **Microsoft Azure**  **Tenant** , onglet **Interfaces**** Réseau **, cliquez sur le bouton** Créer une interface réseau** :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez le groupe de ressources désiré depuis le menu déroulant **Groupe de ressources** , les autres zones de saisie sont complétées automatiquement,
- Sélectionnez le réseau, le sous-réseau et le groupe de sécurité rattachés à cette interface,
- Saisissez le nom de l'interface, puis cliquez sur le bouton **Créer** , la page Interface réseau apparaitra avec celle nouvellement créée.

## 15.2 Supprimer une interface réseau

Cliquez sur le bouton **Actions** de l'interface que vous souhaitez supprimer puis cliquez sur la commande **Supprimer** , la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Confirmez à l'aide du bouton **Supprimer**. L'interface sera supprimée de la table des interfaces.

# 16 Adresses IP publiques

Vous pouvez attribuer une _adresse IP publique_ à une instance afin de permettre à celle-ci d'être accessible depuis le Web.

- Sélectionnez le menu **Clouds**  **Microsoft Azure**  \< **Tenant\>** , onglet **Adresses IP publiques** , la page suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

La page **Adresses IP publiques** présente un tableau avec les caractéristiques de celles-ci :

**Nom**  : Indique le nom de l'adresse IP publique,

**Adresse IP** : Indique la valeur de l'adresse IP publique,

**Affectation**  : Indique le type d'affectation souhaité (dynamique ou statique)

**Associé à** : Indique le nom de l'instance à laquelle l'adresse IP est allouée,

**Groupe de ressources**  : Indique le nom du groupe de ressources auquel l'adresse IP est rattachée,

**Emplacement**  : Indique l'emplacement géographique de l'adresse IP,

**ID de souscription**  : Indique l'identifiant de souscription propriétaire de l'adresse IP,

**Actions**  :

**Supprimer**  : Cette action permet de supprimer l'interface réseau,

**Assigner/Désassigner**  : Cette action permet d'assigner ou désassigner une adresse IP à une interface réseau.

## 16.1 Créer une adresse IP publique

- Sélectionnez le menu **Clouds**  **Azure**  \< **Tenant\>** , onglet **Adresses IP publiques** , cliquez sur le bouton **Créer une adresse publique** , la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez le groupe de ressources désiré depuis le menu déroulant **Groupe de ressources** , la zone région se met automatiquement à jour,
- Saisissez le nom de l'adresse IP publique puis cliquez sur le bouton **Créer** , la page **Adresses IP publique** apparaitra avec celle nouvellement créée.

## 16.2 Assigner une interface réseau

- Sélectionnez le menu **Actions**  **Assigner** de l'adresse IP que vous souhaitez associer à une interface, la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Sélectionnez l'interface réseau que vous souhaitez associer,
- Sélectionnez la méthode d'allocation de l'adresse IP (statique ou dynamique), puis confirmez à l'aide du bouton **Assigner**.

## 16.3 Désassigner une interface réseau

- Sélectionnez le menu **Actions**  **Désassigner** de l'adresse IP que vous souhaitez désassocier, la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

- Confirmez à l'aide du bouton **Désassigner**.

## 16.4 Supprimer une adresse IP publique

Cliquez sur le bouton **Actions** de l'adresse que vous souhaitez supprimer puis cliquez sur la commande **Supprimer** , la boite de dialogue suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Confirmez à l'aide du bouton **S**** upprimer**. L'adresse sera supprimée de la table des adresses IP publiques.

# 17Quotas

La plateforme _UIC_ peut collecter et afficher les données concernant les quotas d'utilisation de vos ressources Cloud _Microsoft Azure_. Pour accéder à ces données, sélectionnez le menu **Clouds** _ **Microsoft Azure** _  **\<Tenant\>,** sélectionnez l'item **Quotas** , vous obtenez la page ci-dessous :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

La page affiche un tableau avec les attributs suivants :

**Quota**  : Désignation de la ressource,

**Fournisseur**  : Indique le type de ressources,

**Emplacement**  : Indique l'emplacement géographique,

**Utilisation**  : Indique le quota d'utilisation.

# 18 Facturation

Les factures et la consommation sont consultables à tout moment depuis le menu **Facturation**.

Sélectionnez le menu **Clouds**  **Microsoft Azure**  \< **Tenant\>**  **Facturation**. _UiC_ affiche un sous-menu avec la liste des commandes implémentées, illustrée ci-dessous :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

  
## Aperçu des coûts

La commande **Aperçu des coûts** affiche la page suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Cette page affiche les données des coûts en fonction des critères sélectionnés. Vous pouvez choisir les critères parmi les catégories suivantes :

- **Souscriptions**  : Toutes les souscriptions ou bien une liste de souscriptions,
- **Période**  : sélectionnez la période qui vous intéresse,
- **Type de coûts**  : réels, amortis, consommation.

  
## Factures

Le menu **Factures** affiche une page contenant un onglet **Factures** et un onglet **Analyse de facture** , comme illustré sur la figure suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

L'onglet **Factures** présente les montants des factures mensuelles sur la période choisie. Les fichiers pdf de ces factures sont téléchargeables.

L'onglet Analyse de facture permet d'afficher les détails des factures mensuelles comme illustré sur la ficgure suivante ;

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Les détails des coûts sont fournis par service et par groupe de ressources.

  
## Prévision des coûts

Le menu **Prévision des coûts** affiche une page contenant la prévision des coûts pour le mois en cours :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

La page affiche le montant consommée depuis le début du mois et une projection de la consommation jusqu'à la fin du mois. Les prévisions peuvent être affichées par souscription.

D'autres périodes peuvent être sélectionnées pour cette estimation.

  
## Explorateur des coûts

Le menu **Explorateur des coûts** affiche une page contenant la répartition des coûts pour une période donnée :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Cette page affiche les données des coûts en fonction des critères sélectionnés. Vous pouvez choisir les critères parmi les catégories suivantes :

- **Périodicité d'affichage** : mensuelle, quotidienne,
- **Souscriptions**  : Toutes les souscriptions ou bien une liste de souscriptions,
- **Classification** : Par service, par région, par type de ressource, par groupe de ressources.
- **Période**  : Sélectionnez la période qui vous intéresse,
- **Type de coûts**  : réels, amortis, consommation,
- **Tags** : Permet de sélectionnez les tags qui vous intéressent.

  
## Agrégation des coûts

Le menu **Agrégation des coûts** affiche la page suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Cette page affiche les données des coûts en fonction des critères sélectionnés. Vous pouvez choisir les critères parmi les catégories suivantes :

- **Souscriptions**  : Toutes les souscriptions ou bien une liste de souscriptions,
- **Période**  : sélectionnez la période qui vous intéresse,
- **Type de coûts**  : Global, par service ou par catégorie.

Si vous sélectionnez l'agrégation par catégorie, UIC affiche les coûts agrégés par catégorie de service (IaaS, PaaS, etc.) comme illustré sur la figure suivante :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

  
## Budgets

Le menu **Budgets** affiche la liste des budgets définis :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Vous pouvez créer un budget à l'aide du bouton **Créer un budget** , la page suivante s'affiche :

![Image](/img_fr/img_UIC_Services/img_msazur/image002.png#bordered)

Une fois le budget défini, vous pouvez l'enregistrer à l'aide du bouton Créer de cette page, il sera rajouté à la table des budgets de la souscription sélectionnée.

Prologue – [www.useitcloud.com](http://www.useitcloud.com/) Tél : +33(0)1 41 47 70 00

Pour nous contacter au sujet de ce document :support.uic@prologue.fr