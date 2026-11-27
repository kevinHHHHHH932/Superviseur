# Superviseur

Assistant du superviseur PC Sécurité TCL : déclaration et fiche incident (familles ISIS, lieu, marche à suivre, commentaire main courante, message TCL), annuaire interne et externe, PC Événementiel / PC Crise, mémo (réflexes, radio, codes MC, classeur), journal de vacation.

## Sécurité

- **Contenu chiffré** : le contenu du classeur (annuaire, fiches, pages) est chiffré en AES-256-GCM dans le dossier `vault/`. Sans code d'accès, il est illisible, même si le dépôt est public.
- **Codes d'accès** : chaque code est transformé en clé par PBKDF2-SHA256 (310 000 itérations). Les codes ne sont stockés nulle part en clair.
- **Rien ne sort de l'appareil**, sauf la synchronisation vers ton propre dépôt GitHub privé si tu l'actives (données chiffrées). Pas de statistiques, pas d'IA en ligne.
- **Hors ligne** : après la première ouverture, l'appli fonctionne sans réseau.
- **Ce qui reste visible publiquement** : le code de l'appli et les **noms des codes** (pas les codes) dans `vault/vault.json`. Utilise des initiales ou des pseudos.

## Mise en ligne (une seule fois, de préférence sur un ordinateur)

1. Sur github.com : **New repository** → nom `superviseur` → **Public** → **Create repository**. Les pages GitHub d'un dépôt privé sont payantes ; ici le contenu est chiffré.
2. **uploading an existing file** → glisse **tout le contenu** du dossier `superviseur` (y compris le dossier `vault`) → **Commit changes**.
3. **Settings → Pages** → *Source* : **Deploy from a branch** → branche `main`, dossier `/ (root)` → **Save**.
4. Après 1 à 2 minutes, l'appli est en ligne sur `https://TON-PSEUDO.github.io/superviseur/`.

## Installer sur l'iPhone

1. Ouvre l'adresse dans **Safari**.
2. **Partager** → **Sur l'écran d'accueil** → **Ajouter**.
3. Ouvre l'icône **Superviseur** et saisis ton code d'accès. Il n'est demandé qu'une fois par appareil.

Sur ordinateur : ouvre l'adresse dans Chrome ou Edge, puis l'icône d'installation dans la barre d'adresse.

## Donner ou retirer un accès

Ouvre `https://TON-PSEUDO.github.io/superviseur/admin.html` avec ton code.

- **Donner un accès** : saisis le nom de la personne → **Créer un code** → note le code (affiché une seule fois) → **Télécharger vault.json** → sur GitHub, dossier `vault` → **Add file › Upload files** → dépose `vault.json` → **Commit changes**.
- **Retirer un accès** : **Retirer** → **Télécharger vault.json** → même dépôt sur GitHub. La personne ne peut plus ouvrir l'appli sur un nouvel appareil.
- **Révocation forte**, si un appareil déjà déverrouillé doit perdre l'accès : **Changer la clé et tous les codes** → dépose le contenu du zip dans `vault/` → transmets les nouveaux codes.

## Mettre à jour

- **Le contenu** (annuaire, fiches) : page admin → **Exporter le contenu** → modifie le fichier JSON → **Importer le contenu** → **Télécharger vault.json** → dépose-le sur GitHub.
- **L'appli** (écrans, fonctions) : remplace `index.html` sur GitHub (**Add file › Upload files**). Sur l'iPhone : **Mémo → Réglages → Rechercher une mise à jour**.

## Limites

- **Synchronisation iPhone ↔ ordinateur** : bouton **Synchro** en haut, à configurer une fois dans **Mémo → Réglages** (dépôt privé `superviseur-data` + jeton GitHub). Données chiffrées. Sans ça : **Exporter / Importer**.
- **Raconter un incident** : sur l'accueil, écris ou dicte (micro 🎙 du clavier) ce qui se passe, comme ça vient. L'appli en tire le fait ISIS, la victime, le lieu, l'heure, les intervenants et l'issue, puis rédige la main courante et le message TCL. « Ajouter la suite » complète la fiche au fil de l'incident. Tout est analysé sur l'appareil, rien n'est envoyé : relis toujours avant de copier.
- **Effacement des données** : supprimer l'appli de l'écran d'accueil ou effacer les données de Safari efface les incidents et le journal de l'appareil. Exporte régulièrement.
- **Aide-mémoire** : la référence reste le Référentiel unique. Contenu en **diffusion restreinte** : partage soumis à l'accord de ta hiérarchie.
