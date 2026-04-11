# 🛠️ Contributing to Animal Totem

Thanks for your interest in contributing to Animal Totem! This guide will help you customize, extend, and improve the project.

## 📋 Table of Contents

- [How to Set Up](#how-to-set-up)
- [Customization](#customization)
- [Code Structure](#code-structure)
- [Adding Features](#adding-features)
- [Roadmap](#roadmap)
- [Tech Stack](#tech-stack)
- [Best Practices](#best-practices)

---

## How to Set Up

### Prerequisites

- Basic knowledge of HTML, CSS, JavaScript
- A text editor (VS Code recommended)
- A modern browser

### Local Development

```bash
# Clone the repo
git clone <your-repo>
cd animal-totem

# Start local server
python3 -m http.server 8000
# or
npx http-server

# Open http://localhost:8000
```

### Making Changes

1. Edit files directly (no build step needed)
2. Refresh browser to see changes
3. All logic is in `app.js`, styling in `style.css`

---

## Customization

### Add New Animals

Edit `app.js`, add to `ANIMALS` array:

```javascript
{ name: 'Your Animal', emoji: '🔥', traits: 'Trait 1, Trait 2, Trait 3' },
```

Example:
```javascript
{ name: 'Hawk', emoji: '🦅', traits: 'Precision, focus, perspective' },
```

### Add New Colors

Edit `COLORS` array in `app.js`:

```javascript
{ bg: '#FF6B6B', text: '#ffffff' },
```

**Tips:**
- Use contrasting text colors for readability
- Test on both light and dark backgrounds
- Aim for vibrant, shareable aesthetics

### Modify Canvas Design

The `drawTotem()` function in `app.js` controls the image:

```javascript
function drawTotem(totem) {
    const canvas = document.getElementById('totemCanvas');
    const ctx = canvas.getContext('2d');
    
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, totem.color.bg);
    gradient.addColorStop(1, lightenColor(totem.color.bg, 20));
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // ... rest of drawing code
}
```

**Adjustable elements:**
- Y positions: Change numbers in `ctx.fillText()` calls
- Font sizes: Modify the `ctx.font` values
- Colors/shadows: Edit `ctx.fillStyle` and `ctx.shadowColor`

### Add New Pages

1. Create new HTML file in `pages/` folder
2. Copy navbar + footer structure from existing pages:

```html
<!-- Navigation -->
<nav class="navbar">
    <!-- Copy from existing pages -->
</nav>

<!-- Content -->
<div class="container">
    <div class="content-page">
        <!-- Your content -->
    </div>
</div>

<!-- Footer -->
<footer class="footer">
    <!-- Copy from existing -->
</footer>
```

3. Update navbar links on all pages to include new page

### Modify Styling

All styles are in `style.css`. Key sections:

- `.navbar` - Navigation bar
- `.hero` - Hero section
- `.features` - Feature cards
- `.intro-section` - Generator intro
- `.canvas-container` - Canvas styling
- `.adspace*` - AdSense ad spaces
- `.btn*` - Button styles

---

## Code Structure

### app.js

**Key variables:**
- `ANIMALS` - Array of 30 animal totems
- `COLORS` - Array of 6 color themes
- `currentTotem` - Stores generated totem data

**Key functions:**
- `generateTotem()` - Picks random animal + color + number
- `drawTotem(totem)` - Renders image on canvas using Canvas API
- `downloadTotem()` - Exports canvas as PNG
- `showLoadingOverlay()` / `hideLoadingOverlay()` - Animation control

**Event listeners:**
- "Generate" button → triggers generation + loading animation
- "Download" button → exports PNG
- Enter key in name input → triggers generation

### style.css

**Responsive design:**
- Mobile-first approach
- Flexbox/Grid for layout
- Media queries for different screen sizes

**AdSense integration:**
- `.adspace` - Main ad container
- `.adspace-inline` - Inline ads (300x250)
- `.adspace-sidebar` - Sidebar ads (336x280)

### HTML pages

**Consistent structure:**
1. Navigation navbar
2. Unique page content
3. Ad spaces (on info pages)
4. Footer with credit

---

## Adding Features

### Add Quiz/Personalization

Modify `generateTotem()` to accept parameters:

```javascript
function generateTotem(quizAnswers) {
    // Use quiz answers to filter animals
    let applicableAnimals = ANIMALS.filter(animal => {
        // Filter based on quiz results
    });
    
    const animal = getRandomElement(applicableAnimals);
    // ... rest of generation
}
```

### Add Direct Sharing

Use Web Share API:

```javascript
async function shareToInstagram() {
    // Instagram doesn't support direct sharing from web
    // Instead: Generate canvas → Download PNG → User manually uploads
    
    // Or use share dialog for other platforms:
    if (navigator.share) {
        await navigator.share({
            title: 'My Animal Totem',
            text: `I'm a ${currentTotem.animal.name}!`,
            url: window.location.href
        });
    }
}
```

### Add Analytics

Use Google Analytics:

```html
<!-- Add to all HTML files before </body> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Track events:

```javascript
function trackEvent(eventName, eventData) {
    gtag('event', eventName, eventData);
}

// Usage:
trackEvent('totem_generated', {
    animal: currentTotem.animal.name,
    color: currentTotem.color.bg
});
```

---

## Roadmap

### Phase 1 ✅ (DONE)
- [x] Frontend HTML/CSS/JS
- [x] 30 animal totems
- [x] Canvas generation + PNG download
- [x] Mobile responsive
- [x] Multi-page website
- [x] Hourglass loading animation
- [x] Engaging intro section
- [x] AdSense-ready layout

### Phase 2 (Next Priorities)
- [ ] Optional personality quiz (3-5 questions)
- [ ] Enhanced transitions/animations
- [ ] Instagram Direct DM sharing (if API available)
- [ ] Google Analytics integration
- [ ] User feedback form

### Phase 3 (Monetization)
- [ ] Google AdSense code integration
- [ ] Optimize ad placement for CPM
- [ ] A/B test different CTAs
- [ ] Social media campaigns

### Phase 4+ (Advanced)
- [ ] Serverless backend (Vercel Functions / Netlify Functions)
- [ ] User database (Firebase/Supabase)
- [ ] AI image generation (Stable Diffusion / OpenAI)
- [ ] Authentication (optional)
- [ ] User history/favorites

---

## Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Gradients, Animations
- **Vanilla JavaScript** - No frameworks/dependencies
- **Canvas API** - Dynamic image generation

### Canvas Features Used
- `createLinearGradient()` - Background gradients
- `fillText()` - Text rendering with styling
- `drawImage()` - Emoji rendering
- `measureText()` - Text width for centering
- `toDataURL()` - PNG export

### Deployment
- **Vercel** - Recommended (serverless)
- **Netlify** - Alternative (serverless)
- **GitHub Pages** - Free (static)

### External Services (Optional)
- **Google AdSense** - Monetization
- **Google Analytics** - Traffic tracking
- **Firebase** - User data (Phase 4+)

---

## Best Practices

### Code Style
- Use `const` by default, `let` if needed
- Meaningful variable names
- Comment complex logic
- Keep functions small and focused

### Performance
- Minimize bundle size (no dependencies!)
- Optimize images/assets
- Cache static files
- Lazy load ads

### Accessibility
- Add `alt` text to images
- Use semantic HTML
- Ensure keyboard navigation
- Sufficient color contrast

### Testing
- Test on different browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices (iOS, Android)
- Check canvas rendering on various screen sizes
- Verify download functionality

### Security
- No sensitive data in client-side code
- Validate file exports
- Use HTTPS for production
- Content Security Policy headers

### Documentation
- Comment your code
- Update README when adding major features
- Document breaking changes
- Keep this CONTRIBUTING.md updated

---

## Submitting Changes

### For Your Own Fork

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make changes and test thoroughly
3. Commit with clear messages: `git commit -m "Add new feature: description"`
4. Push to your fork: `git push origin feature/my-feature`
5. Deploy to test: Use Vercel/Netlify preview links

### Code Review Checklist

Before submitting/committing, verify:
- [ ] Works on mobile (1080x1920)
- [ ] Works on desktop
- [ ] No console errors
- [ ] Canvas renders correctly
- [ ] Download functionality works
- [ ] Styling is responsive
- [ ] Comments are clear
- [ ] No security issues

---

## Questions or Issues?

- Check existing documentation first
- Look at the code comments - it's well-documented
- Test locally before deploying
- Keep the code simple and maintainable

---

## License

MIT - You can modify and distribute freely

---

**Happy coding!** 🚀✨
