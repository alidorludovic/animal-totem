# 🔮 Animal Totem

Une web app virale pour découvrir son animal totem et le partager sur Instagram.

## 🚀 Démarrage rapide

### Phase 1 (MVP actuel)

```bash
# Cloner le repo (optionnel, c'est du front-only)
git clone <ton-repo>
cd animal-totem

# Lancer un serveur local (Python)
python3 -m http.server 8000

# Ou avec Node.js
npx http-server
```

Ouvrir : `http://localhost:8000`

### Déployer facilement (gratuit)

#### **Vercel** (recommandé)
```bash
npm i -g vercel
vercel
```

#### **Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir .
```

#### **GitHub Pages**
1. Push le code sur GitHub
2. Settings → Pages → Deploy from branch
3. Voilà ! 🎉

---

## 📦 Structure

```
animal-totem/
├── index.html      # Interface principale
├── style.css       # Design mobile-first (1080x1920)
├── app.js          # Logique + génération canvas
└── README.md       # Ce fichier
```

---

## ✨ Fonctionnalités (MVP)

✅ **Génération aléatoire** : 15 animaux totems + traits  
✅ **Image stylée** : Canvas responsive, prêt pour Instagram  
✅ **Download PNG** : Bouton direct, pas de serveur  
✅ **100% frontend** : Pas de base de données, ultra-rapide  
✅ **Mobile-first** : Parfait pour partager en story  

---

## 🎨 Design

- Format : 1080x1920 (optimal story Instagram)
- Gradients colorés (8 thèmes)
- Emojis + texte stylé
- Animations fluides

---

## 🧬 Les totems

| Animal | Emoji | Traits |
|--------|-------|--------|
| Aigle | 🦅 | Vision claire, leadership, liberté |
| Loup | 🐺 | Intuition, loyauté, force |
| Ours | 🐻 | Force intérieure, introspection, sagesse |
| Cerf | 🦌 | Grâce, sensibilité, régénération |
| ... | ... | (15 animaux total) |

---

## 💡 Roadmap

### Phase 1 ✅ (FAIT)
- [x] Frontend HTML/CSS/JS simple
- [x] Génération aléatoire + canvas
- [x] Download PNG
- [x] Mobile responsive

### Phase 2 (Prochaine)
- [ ] Quiz optionnel (personnalisation)
- [ ] Animations entrée/sortie
- [ ] Partage direct Instagram (si possible)
- [ ] Analytics basique

### Phase 3 (Monétisation)
- [ ] Google AdSense
- [ ] Pages : Privacy Policy, About
- [ ] Optimisation viralité

### Phase 4+ (Optionnel)
- [ ] Backend serverless (Vercel Functions)
- [ ] Vraie IA image (OpenAI / Hugging Face)
- [ ] Base de données (résultats utilisateurs)
- [ ] Authentification optionnelle

---

## 🔧 Customisation

### Ajouter des animaux

Éditer `app.js`, array `ANIMALS` :

```javascript
{ name: 'Ton Animal', emoji: '🔥', traits: 'Traits' },
```

### Ajouter des couleurs

Éditer `COLORS` :

```javascript
{ bg: '#hexcolor', text: '#ffffff' },
```

### Modifier le design canvas

Fonction `drawTotem()` dans `app.js` - adapter les positions/tailles.

---

## 📊 Metrics (à tracker après déploiement)

- Visitors/jour
- Download rate (%)
- CTR (partages Instagram)
- Mobile vs Desktop
- Browser stats

→ À ajouter avec Google Analytics ou Plausible

---

## 🎯 Conseils pour la viralité

1. **UX ultra-fluide** : Générer + télécharger < 2 secondes
2. **Image shareable** : Format story parfait, jolie à regarder
3. **Pas de friction** : Zéro formulaires, zéro login obligatoire
4. **Bouton Download visible** : Facile à trouver
5. **Hashtags TikTok/Instagram** : #AnimalTotem #MonTotem

---

## 🛠 Tech Stack

- **Frontend** : Vanilla JS (pas de dépendances)
- **Canvas** : API HTML5 native
- **Styling** : CSS Grid/Flexbox
- **Deployment** : Vercel / Netlify (gratuit)

---

## 📄 License

MIT - Tu peux faire ce que tu veux avec

---

## 🚀 Prochaines étapes

1. **Local testing** : `npm run dev` ou serveur local
2. **Push GitHub** : Créer un repo public
3. **Deploy** : 1 clic sur Vercel
4. **Marketing** : Partage sur TikTok / Instagram / Discord
5. **Iterate** : Feedback users → Amélioration continue

---

**Besoin d'aide ?** Tous les fichiers sont commentés et simples à modifier ! 🎉
