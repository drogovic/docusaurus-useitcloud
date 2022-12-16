---
id: 40040
title: OVH
description: UseITcloud documentation 3.2.0
sidebar_position: 4
---

## **Les commandes communes aux pages de l’IHM**
Les pages et formulaires affichés par UIC présentent certaines commandes dont la signification est la même quelle que soit la page qui les présente. Par conséquent, ces commandes seront décrites dans ce chapitre et cette description est applicable à toutes les ressources et tous les formulaires gérés par UIC et présentés dans ce document.

Voici la liste et la description de ces commandes :

![Image](/img_fr/img_UIC_Services/img_ovh/image002.png)

- La commande **Afficher X éléments** : Cette commande s’applique aux tableaux affichés par UIC. Elle permet de limiter le nombre d’éléments visualisés par page. 
- La commande **Rechercher** : Cette commande s’applique aux tableaux affichés par UIC. Elle permet de rechercher et présenter les éléments contenant la chaîne de caractères spécifiée dans le champ de recherche. 
- La commande **Change columns** : Cette commande s’applique aux tableaux affichés par UIC. Elle permet à l’utilisateur de sélectionner les colonnes qu’il souhaite visualiser. 
- La commande **CSV** : Cette commande s’applique aux tableaux affichés par UIC. Elle permet à l’utilisateur d’exporter le tableau affiché dans un fichier au format CSV. 
- Le bouton d’actualisation  ![Image](/img_fr/img_UIC_Services/img_ovh/image003.png) : Ce bouton permet de forcer l’actualisation des données affichées.

## **Identifiants Cloud OVH**
Pour configurer un identifiant Cloud de connexion UIC à une infrastructure Cloud Public OVH, vous avez besoin des paramètres OVH suivants :

- L’adresse du hôte des services API,
- Le point de terminaison (End point)
- La clé d’application,
- La clé secrète,
- La clé du consommateur,
- Un ou plusieurs projets Cloud public OVH.

Si vous disposez déjà de tous les éléments cités ci-dessus, vous pouvez passer directement à l’étape de configuration de ces paramètres dans UIC, décrite à la fin de ce chapitre.

Dans le cas contraire, si vous êtes familier de l’environnement OVH, vous pouvez créer ou obtenir ces informations en vous connectant sur le portail de gestion : https://www.ovh.com/manager/web en tant qu’administrateur de votre compte.

Si vous n’êtes pas familier avec l’environnement OVH, vous pouvez consulter les paragraphes suivants pour découvrir comment créer ou obtenir les identifiants OVH cités ci-dessus.

### ***Création des clés d'application***
L'authentification sur les services API du Cloud OVH nécessite de disposer de deux clés, la clé d'application et la clé secrète. Toute application souhaitant communiquer avec l'API OVH doit être déclarée à l'avance.

- Cliquez sur le lien suivant : https://eu.api.ovh.com/createApp/

![Image](/img_fr/img_UIC_Services/img_ovh/image004.png)

- Entrez votre ID client, votre mot de passe et le nom de votre application, et une description. Ce nom vous sera utile ultérieurement si vous souhaitez autoriser d'autres personnes à l'utiliser. 
- Cliquez sur **Create Keys,** vous obtenez vos deux premières clés :
- la clé d'application, nommée AK, exemple : 7kbG7Bk7S9Nt7ZSV
- La clé d'application secrète, nommée AS, (ex : EgWIz07P0HYwtQDs7cNIqCiQaWSuHF)

![Image](/img_fr/img_UIC_Services/img_ovh/image005.jpeg)

### ***Demande de jeton d'authentification au Cloud OVH***
Maintenant que nous avons les clés (AK, AS), nous allons demander un jeton (consumer key) à OVH afin de nous permettre de faire des demandes à l'API. Pour ce faire, vous devez vous rendre sur https://eu.api.ovh.com/1.0/auth/credential pour spécifier l'accès requis. Pour les besoins de la plateforme UIC, nous demanderons un jeton OVH pour l'intégralité de l'API.

**Exemple cURL**
```bash
curl -XPOST -H "X-Ovh-Application: 7kbG7Bk7S9Nt7ZSV " -H "Content-type: application/json" https://eu.api.ovh.com/1.0/auth/credential  -d 
'{
	"accessRules": [
		{"method": "GET", "path": "/*"},
		{"method": "POST", "path": "/*"}, 
		{"method": "PUT", "path": "/*"},
		{"method": "DELETE","path": "/*"}
	]
}'
```
**Exemple de réponse** 
```json
{"state":"pendingValidation","validationUrl":"https://eu.api.ovh.com/auth/?credentialToken=7AGohYAWSd9es9uec4HIdrZWvPhsgFOVviJ08OgtlWhpwmmd0URnMDQpcutiZTHh","consumerKey":" MtSwSrPpNjqfVSmJhLbPyr2i45lSwPU1"} 
```

### ***Connexion du jeton d'authentification au compte client OVH***
Dans la réponse àa la demande de création du jeton d’authentification, vous recevrez une URL de validation et une clé de consommation (le jeton, nommé CK). Ce jeton n'est initialement associé à aucun client. Vous (ou un autre client) connecterez votre compte OVH à ce jeton en vous connectant à l'URL rendue par le service d’API dans le paramètre ‘’validationUrl’’, par exemple  :

```html
<https://eu.api.ovh.com/auth/?credentialToken=7AGohYAWSd9es9uec4HIdrZWvPhsgFOVviJ08OgtlWhpwmmd0URnMDQpcutiZTHh>
```
Cette étape vous permettra d'identifier tout client d'OVH et d'obtenir des droits sur son compte. Choisir une durée de vie illimitée pour ce jeton.

![Image](/img_fr/img_UIC_Services/img_ovh/image006.png)

### ***Configuration des Identifiants Cloud OVH dans UIC***
Depuis la plateforme, menu **Compte:Utilisateur -> Identifiants Cloud -> OVH**, 

- Cliquez sur le bouton **Ajouter un identifiant**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image007.png)

- Complétez les zones de saisie de cet écran : 
	- **Nom de l’identifiant** : Indiquez le nom de l’identifiant, il ne pourra pas être modifié par la suite (unique, contenant jusqu’à 20 caractères, lettres sans accent, chiffres, tirets).
	- **Les noms de hôte et le point de terminaison :** Ces deux paramètres sont pré-remplis.
	- **Clé d’application, Clé secrète, Clé du consommateur** : Entrez les valeurs respectives obtenues auprès des services OVH.

Le Cloud public OVH géré par UIC est basé sur OpenStack. Dans le contexte de cette technologie, l’approvisionnement en ressources Cloud s’effectue dans le cadre de projets au sens Openstack, sous les comptes d’utilisateurs bien identifiés. Les paragraphes suivants décrivent comment créer des utilisateurs et des projets au sein de ce Cloud et également comment utiliser ces ressources au sein de UIC.

### ***Création d’un utilisateur***
Lorsque vous êtes connecté sur le compte *OVH* et que vous avez sélectionné un projet en utilisant par exemple le menu **Cloud -> Serveurs -> Nom du projet**, vous pouvez ajouter un utilisateur à ce projet, pour cela, sélectionnez le menu **Gestion technique -> OpenStack users**.

![Image](/img_fr/img_UIC_Services/img_ovh/image008.png)

- Cliquez sur le bouton **Ajouter un utilisateur** 
- Entrez une **Description** de l’utilisateur. 

Vous obtenez alors l’écran listant tous les utilisateurs du projet :

![Image](/img_fr/img_UIC_Services/img_ovh/image009.png)

Le mot de passe est visible dans l’espace client jusqu’à l’actualisation de la page, conservez-le afin de l’utiliser lors d’une connexion ultérieure. L’identifiant et le mot de passe sont automatiquement générés par la suite. Une fois l’opération terminée, le message de confirmation de création du compte s’affichera.

Il est également possible de générer un nouveau mot de passe en cliquant sur le pictogramme d’actualisation (refresh), à droite de la valeur du mot de passe.

Pour récupérer les autres champs, il faut télécharger le fichier de configuration *OpenStack* (cliquez sur le pictogramme à droite de l’identifiant).

![Image](/img_fr/img_UIC_Services/img_ovh/image010.png)

Veillez à cocher la case **Utiliser le fichier de configuration OpenRC v3** avant de confirmer le téléchargement du fichier. En effet UIC est compatible avec cette version. 

Ce fichier contient les paramètres qui vous seront demandés lors de la configuration du projet au niveau de la plateforme UIC. Voici un exemple de contenu de ce fichier :
```bash
#!/bin/bash
# To use an Openstack cloud you need to authenticate against keystone, which
# returns a *Token* and \*Service Catalog\*. The catalog contains the
# endpoint for all services the user/tenant has access to - including nova,
# glance, keystone, swift.
#

export OS\_AUTH\_URL=https://auth.cloud.ovh.net/v3/
export OS\_IDENTITY\_API\_VERSION=3
export OS\_USER\_DOMAIN\_NAME=${OS\_USER\_DOMAIN\_NAME:-"Default"}
export OS\_PROJECT\_DOMAIN\_NAME=${OS\_PROJECT\_DOMAIN\_NAME:-"Default"}
# With the addition of Keystone we have standardized on the term \*\*tenant\*\*
# as the entity that owns the resources.
export OS\_TENANT\_ID=cf35e498cd704827989e695d0e657c17
export OS\_TENANT\_NAME="2673511130383729"
# In addition to the owning entity (tenant), openstack stores the entity
# performing the action as the \*\*user\*\*.
export OS\_USERNAME="emuNcuJ46rkR"
# With Keystone you pass the keystone password.
echo "Please enter your OpenStack Password: "
read -sr OS\_PASSWORD\_INPUT
export OS\_PASSWORD=$OS\_PASSWORD\_INPUT
# If your configuration has multiple regions, we set that information here.
# OS\_REGION\_NAME is optional and only valid in certain environments.
export OS\_REGION\_NAME="BHS1"
# Don't leave a blank variable, unset it if it was empty
if -> -z "$OS\_REGION\_NAME" ]; then unset OS\_REGION\_NAME; fi
```

### ***Configuration d’un projet OVH au niveau UIC***
Depuis la plateforme, menu **Compte:Utilisateur -> Identifiants Cloud -> OVH**, vous pouvez ajouter la configuration d’un projet OVH à la plateforme *UIC.* Vous aurez besoin pour cela des paramètres du projet que vous avez créé sur la plateforme OVH et dont vous avez téléchargé le fichier de configuration.

![Image](/img_fr/img_UIC_Services/img_ovh/image011.png)

- Sélectionnez le menu **Actions -> Projets**, l’écran suivant apparaît : 

![Image](/img_fr/img_UIC_Services/img_ovh/image012.png)

- Renseignez les champs du formulaire, en vous référant au fichier de configuration du projet que vous avez téléchargé depuis le Cloud OVH : 
	- **ID du projet** :  Il correspond à la variable du fichier OS\_TENANT\_ID= xxxx…(32 caractères)
	- **Etiquette :**  label pour différencier les projets sur la plateforme UIC 
	- **Nom du projet :** correspond à la variable du fichier OS\_TENANT\_NAME= xxxx… (16 caractères) 
	- **Utilisateur** : correspond à la variable du fichier OS\_USERNAME qui correspond aussi à l’ID de l’utilisateur de la figure précédente
	- **Mot de passe :** mot de passe de l’utilisateur, que vous avez obtenu lors de la création de l’utilisateur sur le portail OVH.** 
	- **Remarque : Il est nécessaire d’avoir créé un projet Public Cloud, c’est un prérequis indispensable. Si vous ne disposez pas de projet veuillez suivre ce guide (lien ci-dessous). Il est indiqué comment créer votre premier projet Public Cloud.**
	- 
	```bash
	https://docs.ovh.com/fr/public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project/
	```
	- **Version :** Ce champ correspond à la valeur de la variable OS\_IDENTITY\_API\_VERSION du fichier OpenStack téléchargé.** 
	- **Région par défaut :** Région par défaut à attacher à ce projet** 

## **Tableau de bord du Cloud OVH** 
Une fois que les prérequis sont validés, vous pourrez alors gérer les ressources  de vos tenants *OVH* depuis le menu UIC **Clouds -> OVH -> Identifiant Cloud**, le tableau de bord ci-dessous apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image013.png)

La page **Tableau de bord** vous affiche des indicateurs sur l’utilisattion des ressources IaaS rattachées au tenant sélectionné et au compte authentifié.

La page est divisée en deux parties, le volet de gauche permet de :

- Sélectionner un tenant. La valeur ‘’Global’’ permet d’afficher les informations pour tous les tenants de l’identitifiant Cloud choisi. 
- Choisir la région (liste déroulante) pour laquelle vous souhaitez obtenir les indicateurs. 
- Les items **Instances**, **Volumes**, **Paires de clés**, **Réseau, Groupe de sécurité**, **IP Flottantes**, **Images**, **quotas**, sont mis à disposition pour permettre d’obtenir les indicateurs d’utilisation, par type de ressource, pour la région sélectionnée.  

Le contenu de la partie centrale est variable, il dépend des items sélectionnés sur le volet de gauche. Les chapitres suivants décrivent en détail ces contenus.

## **Les indicateurs globaux**
Lorsque vous cliquez sur le menu UIC **Clouds -> OVH -> Identifiant Cloud**, UIC affiche les indicateurs globaux des ressources associées à cet identifiant, comme illustré dans l’écran ci-dessous :

![Image](/img_fr/img_UIC_Services/img_ovh/image014.png)

Cet écran affiche les indicateurs globaux suivants :

- Le temps écoulé depuis la dernière mise à jour (en haut à droite) suivi du bouton permettant de forcer l’actualisation des données (bouton ![Image](/img_fr/img_UIC_Services/img_ovh/image003.png)),
- Le nombre total d’instances de VMs, le nombre d’instances arrêtés et le nombre d’instances démarrées,
- Le nombre total de volumes configurés, le nombre de volumes attachés et le nombre de volumes disponibles,
- Le nombre total de groupes de sécurité configurés, 
- Le nombre total de paires de clé configurées,
- Le nombre total de réseaux configurés,
- Le coût total d’utilisation des ressources, le graphique représentant la répartition de ce coût par type de ressource. Le survol du graphique par le pointeur de la souris permet d’afficher les valeurs en coût absolu et en pourcentage,
- Un graphique représentant les instances démarrées et les instances arrêtées. Cet indicateur fournit la répartition en nombres et en pourcentages,
- Un graphique représentant les volumes attachés et les volumes disponibles. Cet indicateur fournit la répartition en nombres et en pourcentages,
- Un graphique représentant la répartition des instances par région OVH
- Un graphique représentant la répartition des volumes par région OVH

## **Les instances de VMs**
L’item **Instances** du panneau gauche du tableau de bord vous permet d’afficher les informations et les actions exposées sur les instances des VMs associées à chaque projet de l’identifiant Cloud sélectionné. Voici un exemple d’écran affiché :**  

![Image](/img_fr/img_UIC_Services/img_ovh/image015.png)

Dans cet exemple, le projet choisi est UIC\_PROD, la région choisie a pour valeur ‘’Global’’ ce qui signifie que toutes les instances de toutes les régions OVH doivent être collectées. Vous pouvez sélectionner une seule région OVH si vous le souhaitez. 

Le menu déroulant **Afficher 10 éléments** : Permet de spécifier le nombre d’entrées souhaitées par page (10, 25, 50 ou 100). 

La zone de saisie **Rechercher :** Permet d’effectuer un filtre par un libellé.

La fonction **Change columns** : Elle permet d’afficher ou non dans le tableau l’ensemble des paramètres liés à l’instance et listés dans la figure suivante :

La fonction **CSV** : Vous avez la possibilité d’exporter le tableau web affiché dans un format CSV,

Le bouton ![Image](/img_fr/img_UIC_Services/img_ovh/image003.png) permet d’actualiser les données affichées.

Le tableau présente la liste et les paramètres des instances créés : 

|**Nom**	|Nom attribué à l’instance (machine virtuelle)|
| - | - |
|**ID**	|Identifiant attribué à l’instance (machine virtuelle)|
|**Statut** |Statut de l’instance, activée ou désactivée|
|**Image**|Identificateur de l’image de la VM,|
|**Adresse IP**|Adresse IP de la machine virtuelle|
|**Région**|Localisation géographique de l’instance,|
|**Gabarit**	|Indique le type d’instance (taille, CPU, Disque) |
|**Date de création**	|Indique la date de la création de l’instance |
|**Actions** | **Redémarrer/Démarrer** : Permet de démarrer ou redémarrer l’instance arrêtée,| 
||**Redimensionner :** Permet de redimensionner le gabarit l’instance, |
||**Prendre un instantané :** Permet d’ajouter une image (snapshot) à l’instance,|
||**Suspendre** : Permet de mettre en veille l’instance,|
||**Reprendre** : Permet de reprendre l’instance après sa suspension,|
||**Pause :** Permet de couper la communication vers l’instance,|
||**Arrêter :** Permet d’arrêter l’instance,|
||**Arrêter (extinction) :** Permet la mise hors tension de l’instance,|
||**Console :** Accéder à la console de la VM |
||**Supprimer :** Permet de supprimer l’instance,|

**Démarrer une instance**

La commande *Démarrer une instance* n’est disponible que si l’instance est arrêtée.

- Cliquez sur le bouton **Actions concernant l’instance que vous souhaitez démarrer**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image016.png)

- Cliquez sur le bouton **Démarrer**, puis confirmez l’action, un message vous avertit que l’instance est en cours de démarrage,
- Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_ovh/image017.png), le tableau des instances apparaît avec l’instance démarrée, le champ **Statut** passe à l’état **Active**.

**Redimensionner une instance**

Pour redimensionner une instance de VM, cette instance doit être à l’état arrêté.

- Sélectionnez la commande **Redimensionner** depuis le menu **Actions** attaché à l’instance, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image018.png)

- Cliquez sur le menu **Gabarit**, sélectionnez celui qui vous convient puis cliquez sur le bouton **Redimensionner**,

Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_ovh/image017.png), le tableau des instances montre bien que le gabarit de l’instance a été pris en compte,

**Prendre un instantané**  

Pour faire une image de l’instance, sélectionnez la commande **Prendre un instantané** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image019.png)

- Saisissez le nom de l’instantané dans la zone prévue à cet effet,
- Cliquez sur le bouton **Valider**, 

**Suspendre une instance (Mise en hibernation)**

- Sélectionnez la commande **Suspendre** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image020.png)

- Cliquez sur le bouton **Suspendre**, un message vous avertit que l’instance est en cours de suspension,

Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_ovh/image017.png), le tableau des instances apparaît avec l’instance dans l’état suspendue.

La commande **Actions -> Reprendre** vous permet de réactiver l’instance. 

**Mettre en pause une instance (Mise en veille, communication suspendue)**

- Sélectionnez la commande **pause** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image021.png)

- Cliquez sur le bouton **Pause**, un message vous avertit que l’instance est en cours de pause,

Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_ovh/image017.png), le tableau des instances apparaît avec l’instance en pause.

La commande **Actions -> Reprendre** vous permet de réactiver l’instance.

**Arrêter une instance**

Cette opération mettra l’instance sélectionnée dans un état ‘’shutoff’’. La VM est arrêtée mais reste associée à l’hyperviseur qui la gère. Au prochain démarrage, elle sera gérée par ce même hyperviseur. 

- Sélectionnez la commande **Arrêter** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image022.png)

- Cliquez sur le bouton **Arrêter**, un message vous avertit que l’instance est en cours d’arrêt,
- Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_ovh/image017.png), le tableau des instances apparaît, le statut de l’instance passe à l’état ‘’shutoff’’.

**Arrêter (extinction) une instance**

Cette opération arrêtera l’instance sélectionnée et la mettra dans un état ‘’shelved\_offloaded’’. L’image de l’instance sera préservée, mais la VM ne sera plus associée à aucun hyperviseur particulier. Lors d’un prochain démarrage elle pourra être associée à un nouveau hyperviseur.  

- Sélectionnez la commande **Arrêter (extinction)** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image023.png)

- Cliquez sur le bouton **Arrêter**, un message vous avertit que l’instance est en cours d’arrêt,
- Patientez, puis rafraichissez à l’aide du bouton suivant ![Image](/img_fr/img_UIC_Services/img_ovh/image017.png), le tableau des instances apparaît, le statut de l’instance passe à l’état ‘’shelved\_offloaded’’.

**Accès à la Console**

UIC offre les moyens pour les accès aux instances de VMs déployées :

- Un accès dit ‘**’console’’**, cet accès se fait à l’aide de l’item **Console** du menu **Actions** de chaque instance,
- Un accès de type **ssh** pour les instances Linux, cet accès se fait à l’aide de l’item **SSH** du menu **Actions** de chaque instance,
- Un accès de type **RDP** pour les instances Windows, cet accès se fait à l’aide de l’item **RDP** du menu **Actions** de chaque instance,

Si vous avez configuré la VM avec un accès direct à l’instance, vous pouvez vous connecter une fois que la VM est déployée.

- Sélectionnez la commande **Console** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image024.png)

UIC vous affiche le lien de connexion, valable pendant 30 secondes. Il suffit de cliquer sur ce lient pour vous connecter à la console de l’instance.

Dans le cas d’une instance Linux Ubuntu, vous obtenez une console analogue à celle affichée dans l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_ovh/image025.png)

Dans le cas d’une instance Windows, à la première connexion, vous pourriez être amenés à configurer quelques paramètres du système comme illustré dans les écrans suivants : 

![Image](/img_fr/img_UIC_Services/img_ovh/image026.png)

Précisez les paramètres demandés, puis passez à l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_ovh/image027.png)

Entrez le mot de passe de l’administrateur, confirmer le puis appuyer sur le bouton de fin de processus de configuration. Vous obtiendrez alors l’écran d’authentification de Windows suivant :

![Image](/img_fr/img_UIC_Services/img_ovh/image028.png)

**Passer une instance au forfait mensuel**

Lorsque vous déployez une instance en mode de facturation horaire, UIC vous propose une commande si vous souhaitez passer cette instance au mode forfait mensuel, avec paiement à l’avance. 

- Sélectionnez la commande **Passer au forfait mensuel** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image029.png)

**Supprimer une instance**

- Sélectionnez la commande **Supprimer** depuis la colonne **Actions**, la boite de dialogue suivante apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image030.png)

Cliquez sur le bouton **Supprimer**, l’instance n’apparaitra plus dans la liste.

## **Les sauvegardes des instances**
La rubrique **Sauvegarde d’instance** liste tous les instantanés (Images) créés. Lorsque vous cliquez sur ce menu, UIC vous affiche cette liste avec les caractéristiques de chaque instantané ainsi que les actions que vous pouvez leur appliquer. Un exemple de liste est affiché ci-dessous :

![Image](/img_fr/img_UIC_Services/img_ovh/image031.png)

UIC affiche pour chaque instantané, les paramètres suivants :  

- **Nom** : Indique le nom de l’instantané,
- **Type** : Type d’instantané,
- **Taille** : Taille disque de l’instantané (en GB),
- **Statut** : Statut de l’instantané,
- **Visibilité** : Visibilité de l’instantané,
- **Date de création** : Date de création de l’instantané,
- **Actions** : Liste des opérations possibles sur l’instantané.

### ***Supprimer une sauvegarde d’instance***
Vous pouvez supprimer les sauvegardes d’instances individuellement ou bien par lots. 

![Image](/img_fr/img_UIC_Services/img_ovh/image032.png)

- Si vous souhaitez supprimer une sauvegarde individuelle, Cliquez sur le menu **Actions -> Supprimer** associé à la sauvegarde que vous souhaitez supprimer.
-  Si vous souhaitez supprimer plusieurs sauvegardes en une seule opération, pour chaque sauvegarde à supprimer, cochez le bouton situé à gauche de la colonne ‘’Nom’’, puis cliquez sur le bouton **Supprimer les sauvegardes d’instance**. 

## **Les volumes**
La rubrique **Volumes** liste les volumes déclarés dans la zone géographique sélectionnée. Depuis le menu **Clouds -> OVH -> Identifiant Cloud -> Identifiant Projet**, sélectionnez l’item **Volumes** la page suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_ovh/image033.png)

Toutes les informations et les actions possibles sur les volumes sont affichées dans ce tableau :

La fonction **Change columns** : Elle permet d’afficher ou non dans le tableau l’ensemble des paramètres liés au volume, 

La fonction **CSV** : Vous avez la possibilité d’exporter le tableau web affiché dans un format CSV,

Le bouton ![Image](/img_fr/img_UIC_Services/img_ovh/image003.png) permet d’actualiser les données affichées.

Le tableau liste tous les volumes créés, leurs paramètres sont également listés :  

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
- **Mis à jour** : Indique la date de mise à jour du volume,
- **Métadonnées** : Indique le mode d’attachement du volume (métadonnées possibles, readonly et attached\_mode). 
- **Actions** : 
	- **Attacher :**  Permet d’attacher un volume à une instance,
	- **Redimensionner :** Permet de redimensionner le volume,
	- **Détacher :**  Permet de détacher un volume d’une instance,
	- **Supprimer :** Permet de supprimer un volume,

### ***Créer un volume***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> OVH -> Identifiant Cloud -> Identifiant Projet -> Volumes**, la page **Volumes** apparaît, cliquez sur le bouton **Créer un** **Volume**, la boite de dialogue suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_ovh/image034.png)

- Saisissez dans la zone **Nom** le nom du volume,
- Entrez une description du volume,
- Choisissez le type de technologie souhaitée « classic ou high speed » depuis le menu déroulant **Type**,
- Précisez la taille du volume (en GB), 
- Cliquez sur le bouton **Créer**, 

Le volume créé est maintenant visible depuis le tableau de la page des volumes.

## **Les réseaux**
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> OVH -> Identifiant Cloud -> Identifiant Projet -> Réseaux**, la page **Réseaux** apparaît : 

![Image](/img_fr/img_UIC_Services/img_ovh/image035.png)

Cette page affiche les réseaux virtuels configurés pour le projet sélectionné.

La fonction **Change columns** : Elle permet d’afficher ou non dans le tableau l’ensemble des paramètres liés au réseau, 

La fonction **CSV** : Vous avez la possibilité d’exporter le tableau web affiché dans un format CSV,

Le bouton ![Image](/img_fr/img_UIC_Services/img_ovh/image003.png)** permet d’actualiser les données affichées.

Le tableau liste les réseaux virtuels déclarés chez *OVH,*

- **ID** : Indique l’identifiant du réseau,
- **Nom** : Indique le nom du réseau,
- **Statut** : Indique l’état du réseau (actif ou non),
- **Type :** Indique si le réseau est privé ou public,
- ***Actions*** : 	
	- **Supprimer** : Cette action supprime le réseau,

### ***Création d’un réseau***
Depuis la plateforme *UiC*, sélectionnez le menu **Clouds -> OVH -> Identifiant Cloud -> Identifiant Projet -> Réseaux**, la page **Réseaux** apparaît, cliquez sur le bouton **Créer un** **Réseau**, le formulaire **Créer un réseau** apparaît : 

![Image](/img_fr/img_UIC_Services/img_ovh/image036.png)

**Réseau :** 

- Saisissez le nom du réseau dans la zone **Nom**, 
- Saisissez un identifiant de vlan (nombre entier entre 1 et 4000),
- Saisissez le **Bloc CIDR du sous réseau** (exemple : 192.168.0.0/24),
- Sélectionnez menu déroulant **Régions** et cochez une ou plusieurs région(s),
- Cliquez sur le bouton **Générer les plages** (si nécessaire), un sous-menu avec les caractéristiques ci-dessous apparaît : 

![Image](/img_fr/img_UIC_Services/img_ovh/image037.png)

**Nouveau sous-réseau :** 

**Région** : La ou les région(s) sélectionnée(s) précédemment apparaît, 

**Plage** : Les plages apparaissent préremplies,

- Cliquez sur le bouton **Créer**, le réseau s’ajoute à la liste des réseaux.

Chaque réseau créé contient un ou plusieurs sous réseau(x), visualisable(s) depuis la page **Réseaux**.

- Cliquez sur le lien (ID) du réseau concerné, la page des **Sous-réseaux** apparaît :

![Image](/img_fr/img_UIC_Services/img_ovh/image038.png)

Le tableau affiche l’ensemble des paramètres liés au sous-réseau:

- **ID :** Identifiant du sous-réseau,
- **Région** : Indique la région dans laquelle il est rattaché,
- **Bloc CIDR :** Indique le bloc CIDR du sous-réseau,
- **Première** : Indique la première adresse IP,
- **Dernière** : Indique la dernière adresse IP, 
- **Passerelle :** Indique l’adresse IP de la passerelle du sous-réseau,

Le Bouton ***Action* : Supprimer** le sous-réseau référencé,


## **Les paires de clés de sécurité**
Les paires de clé de sécurité OVH sont des ressources associées aux projets et aux régions du Cloud OVH. Chaque clé n’est valide que pour la région à laquelle elle est attachée.

Pour accéder aux commandes concernant la gestion des paires de clé de sécurité OVH, sélectionnez le menu **Clouds -> OVH -> Identifiant Cloud -> Identifiant Projet -> Paires de clés**, la page **Paires de clés** apparaît, contenant la liste des clés déjà créées :   

![Image](/img_fr/img_UIC_Services/img_ovh/image039.png)

Cette page propose des fonctionnalités et liste les clés fournies par *OVH*.

Le bouton **Créer une paire de clés** : Cette action permet de créer une paire de clés,

La fonction **Change columns** : Elle permet d’afficher ou non dans le tableau l’ensemble des paramètres liés aux paires de clés, 

La fonction **CSV** : Vous avez la possibilité d’exporter le tableau web affiché dans un format CSV,

Le bouton ![Image](/img_fr/img_UIC_Services/img_ovh/image003.png) permet d’actualiser les données affichées.

Le tableau affiche les paramètres des paires de clés existantes : 

- **Nom** : Indique l’identifiant de la paire de clés,
- **Empreinte** : Permet de vérifier la validité de la clé de sécurité,
- **Actions** : 	
	- **Supprimer** : Cette action supprime la paire de clés,

Le bouton **Supprimer les paires de clés** : Cette action supprime l’ensemble des clés sélectionnées dans le tableau, Pour sélectionner les clés, cochez les cases situées sur la colonne à gauche de la colonne **Nom** du tableau.

### ***Création d’une paire de clés***
Cliquez sur le bouton **Créer une paire de clés**, la fenêtre suivante apparaît :  

![Image](/img_fr/img_UIC_Services/img_ovh/image040.png)

- Complétez la zone de saisie puis cliquez sur le bouton **Créer**. Lorsque la clé est créée, elle apparaît dans le tableau des clés associées à la région sélectionnée.

## **Groupes de sécurité**
Les groupes de sécurité OVH sont des ressources associées aux projets et aux régions du Cloud OVH. Chaque groupe de sécurité n’est valide que pour la région à laquelle il est attaché.

Pour accéder aux commandes concernant la gestion des groupes de sécurité OVH, sélectionnez le menu **Clouds -> OVH -> Identifiant Cloud -> Identifiant Projet -> Groupes de sécurité**, la page **Groupes de sécurité** apparaît, contenant la liste des groupes déjà créés :   

![Image](/img_fr/img_UIC_Services/img_ovh/image041.png)

Cette page propose des fonctionnalités :

Le bouton **Créer un groupe de sécurité** : Cette action permet de créer un groupe de sécurité,

Le bouton **Supprimer les groupes de sécurité** : Cette action supprime l’ensemble des groupes de sécurité sélectionnés,

La fonction **Change columns** : Elle permet de sélectionner les colonnes à afficher, 

La fonction **CSV** : Vous avez la possibilité d’exporter le tableau affiché dans un format CSV,

Le bouton ![Image](/img_fr/img_UIC_Services/img_ovh/image003.png) permet d’actualiser les données affichées.

La liste des Groupes de sécurité déclarés chez *OVH* est présentée sous forme de tableau : 

- **Nom / ID** : Indique le nom et l’identifiant du groupe de sécurité,
- **Règle** : Indique si une règle est rattachée au groupe de sécurité,
- **Description** : Indique la description du groupe de sécurité,
- **Actions** : 	
	- **Supprimer** : Cette action supprime le réseau,

### ***Création d’un groupe de sécurité*** 
- Cliquez sur le bouton **Créer un groupe de sécurité**, le formulaire **Créer un groupe de sécurité** apparaît : 

![Image](/img_fr/img_UIC_Services/img_ovh/image042.png)

- Saisissez le nom du groupe, il doit être unique dans la base des groupes de sécurité. 
- Saisissez une description textuelle succincte de ce groupe.

UIC affiche une notification indiquant que le groupe de sécurité est en cours de création. En cas de succès, UIC affiche automatiquement le formulaire qui permet de configurer les règles de pare-feu pour ce groupe de sécurité. Ce formulaire est décrit dans le paragraphe *Ajout d’une règle à un groupe de sécurité*.

**Rmarque** : si la création du groupe de sécurité est réussie et que le formulaire de configuration des règles de sécurité n’est pas affiché automatiquement, réactualisez l’affichage du tableau à l’aide du bouton ![Image](/img_fr/img_UIC_Services/img_ovh/image003.png) . Cliquez sur le nom du groupe pour configurer les règles de sécurité. La section *Ajout d’une règle à un groupe* de sécurité* fournit les détails sur cette configuration.

###  ***Ajout d’une règle à un groupe de sécurité*** 
L’ajout d’une règle à un groupe de sécurité existant s’effectue à partir de la page **Groupes de sécurité**. 

- Cliquez sur le **Nom/ID** du groupe de sécurité (lien) concerné, vous obtenez la page suivante :

![Image](/img_fr/img_UIC_Services/img_ovh/image043.png)

- Cliquez sur le bouton **Ajouter une règle,** la boite de dialogue identique à celle ci-dessous s’affiche :

![Image](/img_fr/img_UIC_Services/img_ovh/image044.jpeg)

- Complétez les zones de saisie : 
	- **De** : Indiquez le premier numéro de port auquel la règle s’appliquera,
	- **Jusqu’à** : Indiquez la borne maximale des ports auxquels la règle s’appliquera,
	- **Protocole** : Indiquez le protocole réseau concerné (TCP, UDP, ICMP),
	- **Source** : Indiquez la source concernée (adresse IP unique ou segment d’adresses IP),
	- **Direction** : Indiquez le sens du flux réseau concerné (ingress, egress).

- Valider la règle ajoutée par action sur le bouton **Créer** 

Vous pouvez créer autant de règles de sécurité que nécessaires pour votre cas d’usage.

## **Les images des VMs**
Les images des machines virtuelles OVH sont des ressources associées aux régions du Cloud OVH. Chaque région possède son offre propre de machines virtuelles, qui peut être différente de celles des autres régions, notamment  en matière de gabarits et de tarification.

Pour accéder aux commandes concernant la gestion des images de VMs, sélectionnez le menu **Clouds -> OVH -> Identifiant Cloud -> Identifiant Projet -> Images**, la page **Images** apparaît, contenant la liste des images disponibles dans la région sélectionnée :   

 ![Image](/img_fr/img_UIC_Services/img_ovh/image045.png)

La fonction **Change columns** : Elle permet d’afficher ou non dans le tableau l’ensemble des paramètres liés aux images, 

La fonction **CSV** : Vous avez la possibilité d’exporter le tableau affiché dans un format CSV,

Le bouton ![Image](/img_fr/img_UIC_Services/img_ovh/image003.png) permet d’actualiser les données affichées.

- **Nom/ID** : Nom ou identifiant de l’image
- **Type** : Indique le type de système d’exploitation, exemple Linux,
- **Statut** : Indique si elle est active ou non,
- **Visibilité** : Domaine de visibilité de l’image (privé ou public),
- **Minimum RAM** : RAM minimale requise,
- **Minimum Disque** : Disque minimal requis,
- **Création** : Indique la date de création de l’image,
- **Actions** : **Déployer** : Permet de déployer l’image.

###  ***Déploiement d’une image de machine virtuelle***
Pour déployer une image de machine virtuelle, sélectionnez le bouton **Actions ð Déployer** de l’image que vous souhaitez, la boite de dialogue suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_ovh/image046.png)

- Indiquez le nom de l’application,
- Saisissez le nom du nœud,
- Utilisez le menu déroulant **Plateforme de l’image** et sélectionnez le système d’exploitation de base correspondant à l’image OVH sélectionné, la page de préparation des déploiements s’affiche : 

![Image](/img_fr/img_UIC_Services/img_ovh/image047.png)

- Poursuivez l’étape de préparation du déploiement, si vous avez besoin de détails, référez-vous au guide *UIC Utilisateur et Administrateur*. 

## **Les quotas**
UIC peut collecter et afficher les données concernant les quotas d’utilisation de vos ressources Cloud OVH. Pour accéder à ces données, sélectionnez le menu **Clouds -> OVH -> Identifiant Cloud -> Identifiant Projet -> Quotas**, vous obtenez la page illustrée ci-dessous : 

![Image](/img_fr/img_UIC_Services/img_ovh/image048.png)

La plateforme *UiC* affiche les quotas des ressources Cloud sous deux formes :

- Une représentation graphique indiquant les quotas globaux, pour toutes les régions, classés par type de ressource,
- Une représentation sous forme de tableau récapitulatif indiquant les quotas par région Cloud, de chaque type de ressource. Ce tableau contient les colonnes suivantes :
	- **Région** : Indique le nom de la région Cloud OVH, 
	- **Instances** : Indique le quota d’instances de machines virtuelles, 
	- **vCPU :** Indique le quota de processeurs virtuels,
	- **RAM** : Indique le quota da mémoire virtuelle,
	- **Disque supplémentaire** : Indique le quota de disque de stockage.

## **Facturation**
UIC collecte et affiche les données de consommation et de facturation OVH. Il permet également d’estimer les prévisions de consommation et d’établir des budgets.

###  ***Consommation, factures et prévisions*** 
Pour accéder à ces données, sélectionnez le menu **Clouds -> OVH -> Identifiant Cloud -> Identifiant Projet -> Facturation**, *UiC* affiche la page illustrée ci-dessous : 

![Image](/img_fr/img_UIC_Services/img_ovh/image049.png)

Cette page propose de suivre la consommation et les factures liées à celle-ci. 

**L’onglet Ma consommation** 

Il affiche la consommation des ressources cloud à venir ou déjà facturée. 

![Image](/img_fr/img_UIC_Services/img_ovh/image050.png)

La consommation est affichée de différentes manières, graphiquement et sous la forme d’un tableau (détaillée). 

**Service** : Indique le type de service consommé,

**Montant** : Indique le montant consommé du service,

**Détail** : Indique les détails de la consommation par région, ces détails précisent la région, l’identifiant du service, le temps d’utilisation et le montant de la consommation.  

**L’onglet Estimation de ma prochaine facture** 

Cet onglet permet d’obtenir les estimations des prochaines factures. Vous pouvez paramétrer une alerte par projet en indiquant un seuil qui déclencherait un avertissement.

![Image](/img_fr/img_UIC_Services/img_ovh/image051.png)

###  ***Création d’une alerte de consommation*** 
Depuis l’onglet **Estimation de ma prochaine facture**, cliquez sur le bouton **Créer une alerte**, la boite de dialogue suivante apparaît : 

![Image](/img_fr/img_UIC_Services/img_ovh/image052.png)

- Complétez les zones de saisie obligatoires :

	- **Email** : Indiquez l’adresse messagerie qui recevra les alertes,
	- **Seuil de déclenchement** : Indiquez le montant seuil qui déclenchera l’alerte,
	- **Rappel** : Sélectionnez la fréquence de rappel de l’alerte, 

- Cliquez sur le bouton **Créer**, la page initiale apparaîtra avec ce paramètre, comme illustré dans l’écran suivant :

![Image](/img_fr/img_UIC_Services/img_ovh/image053.png)

Une fois l’alerte créée, UIC affiche un graphique récapitulant les données associées à l’alerte, notamment le seuil de déclenchement de l’alerte et la projection de la consommation à la fin du mois en cours.

UIC vous permet également de :

- Modifier la configuration de l’alerte, à l’aide du bouton **Modifier l’alerte**
- Supprimer l’alerte, à l’aide du bouton **Supprimer l’alerte**

**L’onglet Historique des factures** 

Cet onglet vous permet de consulter l’historique des factures sur une période donnée. Comme l’illustre la figure ci-dessous, UIC propose deux types de représentation :

- Une représentation graphique indiquant les mois en abscisse et les montants des factures en ordonnée,
- Une représentation sous forme de tableau récapitulatif indiquant certaines données et permettant de télécharger les fichiers contenant les données complètes de chaque facture. Les fichiers téléchargeables sont aux formats PDF et HTML. 

![Image](/img_fr/img_UIC_Services/img_ovh/image054.png)

Vous pouvez préciser les périodes de facturation qui vous intéressent à l’aide des deux champs prévus à cet effet. Vous pouvez choisir de saisir les dates ou bien d’utiliser la fonction calendrier proposée par UIC, comme illustré dans la section suivante. 

###  ***Sélection d’une période de facturation***
Dans l’onglet Historique des factures, placez votre curseur dans la zone **Entre**, le calendrier apparaitra : 

 ![Image](/img_fr/img_UIC_Services/img_ovh/image055.png)

- Sélectionnez la période à l’aide du calendrier ou en saisissant la date au format indiqué, faites la même chose dans la zone de saisie **Et**, puis cliquez sur le bouton **Résumé des factures**, celles-ci seront listées dans le tableau en bas de la page. Elles sont téléchargeables en mode PDF et HTML.

###  ***Explorateur des coûts***
Le menu **Explorateur des coûts** affiche une page contenant la répartition des coûts pour une période donnée :

![Image](/img_fr/img_UIC_Services/img_ovh/image056.png) 

Cette page affiche les données des coûts en fonction des critères sélectionnés. Vous pouvez choisir les critères parmi les catégories suivantes :

- **Projet** : Tous les projets ou bien une liste de projets,
- **Période** : Sélectionnez la période qui vous intéresse,
- **Service** : Global, vps, dedicated server, etc.

L’onglet **Paiements** affiche la liste des paiements avec les indicateurs de date de paiement et des montants, comme illustré sur la figure suivante : 

![Image](/img_fr/img_UIC_Services/img_ovh/image057.png)

Vous pouvez télécharger les fichiers des factures au format PDF ou au format HTML en cliquant sur les liens de la colonne **Téléchargement**.

Pour accéder aux détails d’un paiement, cliquez sur le lien correspondant dans la colonne **ID**, vous obtiendrez une fenêtre comme celle affichée ci-dessous :

![Image](/img_fr/img_UIC_Services/img_ovh/image058.png)

###  ***Budgets***
Le menu **Budgets** affiche la liste des budgets définis :

![Image](/img_fr/img_UIC_Services/img_ovh/image059.png)

Vous pouvez créer un budget à l’aide du bouton Créer un budget, la page suivante s’affiche :

![Image](/img_fr/img_UIC_Services/img_ovh/image060.png)

Une fois le budget défini, vous pouvez confirmer à l’aide du bouton **Créer.** Le budget sera rajouté à la table des budgets.
