<div align="center">
# 🇷🇪 Monitor DAC Réunion

**Dashboard Culture & Direction des Affaires Culturelles — La Réunion**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visiter-success?style=for-the-badge)](https://gunout.github.io/monitor-dac-reunion/)
[![GitHub](https://img.shields.io/badge/GitHub-gunout%2Fmonitor--dac--reunion-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gunout/monitor-dac-reunion)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)
[![Made in](https://img.shields.io/badge/Made_in-La_Réunion-🇷🇪-blue?style=for-the-badge)](#)

[![Bash](https://img.shields.io/badge/Bash-4.0+-4EAA25?style=flat-square&logo=gnu-bash&logoColor=white)](#)
[![jq](https://img.shields.io/badge/jq-1.6+-blue?style=flat-square&logo=json&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?style=flat-square&logo=leaflet&logoColor=white)](#)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4.0-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)](#)
[![Python](https://img.shields.io/badge/Python-3.7+-3776AB?style=flat-square&logo=python&logoColor=white)](#)

[![Status](https://img.shields.io/badge/Status-Production-success?style=flat-square)](#)
[![Port](https://img.shields.io/badge/Port-9090-informational?style=flat-square)](#)
[![API Key](https://img.shields.io/badge/API_Key-Aucune_requise-brightgreen?style=flat-square)](#)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-blueviolet?style=flat-square)](#)
</div>
---

## 📖 Présentation

**Monitor DAC Réunion** est un tableau de bord **tout-en-un**, **100 % local** et **sans API key**, qui permet de visualiser, analyser et suivre en temps réel :

- 🏛️ Les **lieux culturels remarquables** de La Réunion
- 🎭 Les **établissements de sortie** (théâtres, cinémas, salles de spectacle)
- 📚 Les **bibliothèques et médiathèques**
- 🍽️ La **restauration** (restaurants, tables d'hôtes, auberges)
- 🏗️ Les **équipements BPE** (Base Permanente des Équipements — INSEE)
- 💶 Le **budget de la Région Réunion 2026**
- 🎯 Les **subventions DAC** et leurs évolutions
- 🏛️ Les **subventions Région** (musique, théâtre, audiovisuel, patrimoine)
- 📢 Les **appels à projets** (Culture & Santé, PACTE Culturel)
- 🤝 Les **partenaires institutionnels**
- 💸 Les **avances 2026** de la Région

Technologies : **Leaflet** (cartes) · **Chart.js** (graphiques) · **Bash + jq** (génération) · **Python** (serveur HTTP).

---

## ✨ Fonctionnalités

### 🏛️ Culture — Données

| Module | Icône | Description |
|--------|:-----:|-------------|
| Vue d'ensemble | 📊 | KPIs et volumétrie globale |
| Lieux remarquables | 🏛️ | Patrimoine culturel, naturel, agricole |
| Sortir | 🎭 | Théâtres, cinémas, salles de spectacle |
| Bibliothèques | 📚 | Bibliothèques et médiathèques |
| Restauration | 🍽️ | Restaurants, tables d'hôtes, auberges |
| BPE équipements | 🏗️ | Base Permanente des Équipements |
| Communes | 🗺️ | Agrégation multi-sources |
| Alertes | 🚨 | Anomalies et complétude |

### 💶 DAC — Budget & Subventions

| Module | Icône | Description |
|--------|:-----:|-------------|
| Budget Région 2026 | 💶 | Fonctionnement / Investissement — 36,7 M€ AE |
| Subventions DAC 2026 | 🎯 | Dispositifs, Fonpeps, FEAC |
| Subventions Région | 🏛️ | Musique, théâtre, audiovisuel, patrimoine |
| Appels à projets | 📢 | Culture & Santé, PACTE Culturel 2024-2028 |
| Partenaires | 🤝 | État, Région, Département, ARS |
| Avances 2026 | 💸 | Modalités et échéances (11,4 M€) |

### ⚙️ Technique

- 🗺️ **4 fonds de carte gratuits** : OSM, Esri Satellite, OpenTopo, CartoDB
- 🎯 **Clustering intelligent** des marqueurs
- 📈 **Graphiques dynamiques** : Doughnut, Barres, Courbes
- 🔍 **Recherche instantanée** dans les modules
- 🔄 **Monitoring automatique** des fichiers sources
- 💻 **Interface responsive** (mobile / tablette / desktop)
- 🎨 **Thème gouvernemental** bleu / blanc / rouge
- 🔒 **100 % local** — aucune donnée envoyée à l'extérieur

---

## 🚀 Installation

### Prérequis

| Outil | Version | Statut |
|-------|---------|:------:|
| `bash` | ≥ 4.0 | ✅ Requis |
| `jq` | ≥ 1.6 | ✅ Requis |
| `python3` | ≥ 3.6 | ✅ Requis (ou `busybox`) |
| `node` | ≥ 14 | ⬜ Optionnel |

### Démarrage rapide

```bash
git clone https://github.com/gunout/monitor-dac-reunion.git
cd monitor-dac-reunion
chmod +x monitor.sh
./monitor.sh start
```

### Dépendances par OS

```bash
# macOS
brew install jq python3 node

# Debian / Ubuntu
sudo apt update && sudo apt install -y jq python3 nodejs

# Fedora / RHEL
sudo dnf install -y jq python3 nodejs
```

---

## 💻 Utilisation

### Commandes principales

```bash
./monitor.sh start      # Démarre tout
./monitor.sh stop       # Arrête tout
./monitor.sh restart    # Redémarre tout
./monitor.sh status     # Affiche l'état courant
./monitor.sh stats      # Statistiques des fichiers source
./monitor.sh logs       # Suit le log en temps réel
```

### Commandes granulaires

```bash
./monitor.sh init       # Génère uniquement les fichiers
./monitor.sh gen        # Régénère tout
./monitor.sh serve      # Démarre uniquement le serveur HTTP
./monitor.sh watch      # Démarre uniquement le monitoring
```

### Accès au dashboard

| Environnement | URL |
|---------------|-----|
| 🌐 En ligne (GitHub Pages) | https://gunout.github.io/monitor-dac-reunion/ |
| 💻 Local | http://localhost:9090/ |

### Variables d'environnement

| Variable | Défaut | Description |
|----------|--------|-------------|
| `HTTP_PORT` | `9090` | Port du serveur HTTP |
| `WATCH_INTERVAL` | `10` | Intervalle de surveillance (s) |
| `DATA_FILE` | `auto` | Chemin du JSON culture |
| `DAC_FILE` | `auto` | Chemin du fichier DAC |
| `LOG_DIR` | `./logs` | Répertoire des logs |
| `PID_DIR` | `./run` | Répertoire des PID |
| `PUBLIC_DIR` | `./public` | Répertoire public |

**Exemple :**

```bash
HTTP_PORT=8080 WATCH_INTERVAL=5 ./monitor.sh start
```

---

## 📁 Arborescence

```text
monitor-dac-reunion/
├── monitor.sh                    # Script principal tout-en-un
├── data.js                       # Données culture
├── data-dac.js                   # Données DAC
├── index.html                    # Dashboard HTML
├── README.md                     # Ce fichier
├── LICENSE                       # Licence MIT
│
├── data-culture/                 # Source culture
│   └── reunion_culture_raw.json  # JSON brut (api_v2.1)
│
├── public/                       # Généré automatiquement
│   ├── data.js
│   ├── data-dac.js
│   └── index.html
│
├── logs/
│   ├── monitor.log
│   └── http_server.log
│
└── run/
    ├── http_server.pid
    └── monitor.pid
```

---

## 🗺️ Fonds de carte (sans API key)

| Fond | Fournisseur | Zoom max | Style |
|------|-------------|:--------:|-------|
| 🗺️ Plan (OSM) | OpenStreetMap | 19 | Standard |
| 🌍 Satellite (Esri) | Esri / Maxar | 19 | Vue satellite |
| ⛰️ Relief (OpenTopo) | OpenTopoMap | 17 | Topographique |
| 🎨 Clair (CartoDB) | CARTO | 19 | Minimaliste |

Le sélecteur est accessible en haut à droite de la carte.

---

## 🐛 Dépannage

### Le port 9090 est déjà utilisé

```bash
lsof -i :9090
HTTP_PORT=9091 ./monitor.sh start
```

### jq : command not found

```bash
brew install jq          # macOS
sudo apt install jq      # Debian / Ubuntu
```

### JSON invalide

```bash
jq . data-culture/reunion_culture_raw.json > /dev/null
python3 -m json.tool data-culture/reunion_culture_raw.json
```

### Le dashboard affiche « Données indisponibles »

Ouvrir la console du navigateur (F12) et vérifier :

- `window.MONITOR_DATA` est défini
- `window.DAC_DATA` est défini (ou `null` est acceptable)

```bash
curl -I https://gunout.github.io/monitor-dac-reunion/data.js
curl -I https://gunout.github.io/monitor-dac-reunion/data-dac.js
```

### Erreurs Leaflet (mozPressure, behavior…)

Ces avertissements proviennent des fichiers `leaflet.css` et `leaflet.js` chargés depuis unpkg.com. Ils sont inoffensifs.

---

## 🗺️ Roadmap

- [x] Dashboard v3 avec cartographie interactive
- [x] 6 modules DAC (budget, subventions, AAP, partenaires…)
- [x] Déploiement GitHub Pages
- [x] README professionnel avec badges
- [ ] Favicon personnalisé
- [ ] Mode sombre
- [ ] Export CSV / PDF
- [ ] PWA (Progressive Web App)
- [ ] Recherche globale cross-modules
- [ ] Multilingue (français / créole / anglais)
- [ ] Notifications push sur changement budget

---

## 🤝 Contribution

Les contributions sont bienvenues !

1. Fork le projet
2. Créer une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Commit (`git commit -m "feat: add ma fonctionnalité"`)
4. Push (`git push origin feature/ma-fonctionnalite`)
5. Ouvrir une Pull Request

---

## 📜 Licence

Ce projet est distribué sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.

```text
MIT License

Copyright (c) 2026 gunout

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

🌟 Si ce projet t'est utile, mets-lui une étoile !

[![GitHub stars](https://img.shields.io/github/stars/gunout/monitor-dac-reunion?style=social)](https://github.com/gunout/monitor-dac-reunion/stargazers)

🇷🇪 Fait avec ❤️ à La Réunion

[⬆ Retour en haut](#-monitor-dac-réunion)

</div>
