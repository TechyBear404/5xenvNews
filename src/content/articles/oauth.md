---
author: Winga
categories: ["career advice"]
date: 15/10/2023
featured: false
image: ./images/sso1.png
title: Comprendre OAuth
sub-title: Une Autorisation Sans Mot de Passe
---

**Qu'est-ce qu'OAuth ?**

OAuth est un peu comme une autorisation spéciale que vous donnez à une application pour qu'elle puisse accéder à certaines de vos informations sur Internet. C'est comme si vous permettiez à un ami d'accéder à votre boîte aux lettres, mais sans lui donner votre clé.

**Pourquoi utilisons-nous OAuth ?**

Le but principal d'OAuth est de vous permettre de partager uniquement les informations que vous choisissez avec une application, sans avoir à lui donner votre nom d'utilisateur et votre mot de passe. C'est très utile quand vous voulez autoriser des applications à accéder à vos comptes sur les réseaux sociaux, votre email, votre stockage en ligne, ou même vos comptes bancaires, sans partager vos informations de connexion.

**Comment fonctionne OAuth en général ?**

1. Vous décidez d'autoriser une application à accéder à vos informations sur un site web ou un service en ligne.

2. Cette application vous envoie sur le site web où vos informations sont stockées. Vous vous connectez si ce n'est pas déjà fait.

3. Une fois connecté, le site web vous demande si vous êtes d'accord pour que l'application ait accès à certaines de vos informations. Il vous dit quelles informations sont demandées.

4. Si vous acceptez, le site web génère ce qu'on appelle un "jeton d'accès" et un "jeton de rafraîchissement". Le jeton d'accès permet à l'application d'accéder à vos informations. Le jeton de rafraîchissement permet d'obtenir un nouveau jeton d'accès lorsque l'ancien expire.

5. L'application utilise le jeton d'accès pour accéder à vos informations sur le site web.

6. Les jetons d'accès ont une durée de vie limitée, donc ils expirent après un certain temps. L'application peut utiliser le jeton de rafraîchissement pour obtenir un nouveau jeton d'accès sans vous demander de vous connecter à nouveau.

En utilisant OAuth, vous gardez vos informations de connexion en sécurité et vous contrôlez quelles informations vous partagez avec les applications. OAuth est un peu comme une serrure intelligente qui vous permet de partager des informations en ligne en toute sécurité. Une version populaire de ce protocole est l'OAuth 2.0, qui est utilisée partout sur le Web.

*Copyright © [2023], [Nom de votre Journal] - Tous droits réservés.*

*Ce document ne peut être reproduit ou distribué sans autorisation.*

*Sources : Chat GPT, Wikipédia, https://auth0.com/fr/intro-to-iam/what-is-oauth-2, https://www.proofpoint.com/fr/threat-reference/oauth *