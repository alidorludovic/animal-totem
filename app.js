// Animal totems database
const ANIMALS = [
    { name: 'Eagle', emoji: '🦅', traits: 'Clear vision, leadership, freedom' },
    { name: 'Wolf', emoji: '🐺', traits: 'Intuition, loyalty, strength' },
    { name: 'Bear', emoji: '🐻', traits: 'Inner strength, introspection, wisdom' },
    { name: 'Deer', emoji: '🦌', traits: 'Grace, sensitivity, regeneration' },
    { name: 'Fox', emoji: '🦊', traits: 'Cunning, adaptability, intelligence' },
    { name: 'Lion', emoji: '🦁', traits: 'Courage, confidence, nobility' },
    { name: 'Owl', emoji: '🦉', traits: 'Wisdom, mystery, illumination' },
    { name: 'Phoenix', emoji: '🦅🔥', traits: 'Renewal, transformation, resurrection' },
    { name: 'Serpent', emoji: '🐍', traits: 'Healing, deep wisdom, transformation' },
    { name: 'Cat', emoji: '🐱', traits: 'Independence, curiosity, mystery' },
    { name: 'Horse', emoji: '🐴', traits: 'Freedom, strength, passion' },
    { name: 'Raven', emoji: '🐦‍⬛', traits: 'Magic, mysteries, transformation' },
    { name: 'Butterfly', emoji: '🦋', traits: 'Transformation, beauty, lightness' },
    { name: 'Dragon', emoji: '🐉', traits: 'Power, protection, ancestral wisdom' },
    { name: 'Dolphin', emoji: '🐬', traits: 'Intelligence, joy, harmony' },
    { name: 'Tiger', emoji: '🐯', traits: 'Passion, courage, determination' },
    { name: 'Lynx', emoji: '🐆', traits: 'Mystery, deep vision, secrets' },
    { name: 'Moose', emoji: '🫎', traits: 'Nobility, graceful, speed' },
    { name: 'Bison', emoji: '🐂', traits: 'Strength, abundance, provider' },
    { name: 'Orca', emoji: '🐋', traits: 'Intelligence, family, power' },
    { name: 'Puma', emoji: '🐅', traits: 'Grace, hidden power, flexibility' },
    { name: 'Panda', emoji: '🐼', traits: 'Serenity, balance, gentleness' },
    { name: 'Frog', emoji: '🐸', traits: 'Transformation, growth, emotion' },
    { name: 'Shark', emoji: '🦈', traits: 'Instinct, adaptability, survival' },
    { name: 'Gecko', emoji: '🦎', traits: 'Intuition, adaptability, agility' },
    { name: 'Peacock', emoji: '🦚', traits: 'Beauty, confidence, self-expression' },
    { name: 'Rhino', emoji: '🦏', traits: 'Steady power, protection, grounded' },
    { name: 'Zebra', emoji: '🦓', traits: 'Uniqueness, collective protection, distinction' },
    { name: 'Giraffe', emoji: '🦒', traits: 'Perspective, grace, elevated vision' },
    { name: 'Bee', emoji: '🐝', traits: 'Harmony, hard work, community' },
];

const COLORS = [
    // Pinterest-style pastel colors only
    { bg: '#F5E6D3', text: '#4a4a4a' },  // Warm beige
    { bg: '#FFF8E7', text: '#4a4a4a' },  // Cream
    { bg: '#FFE4D6', text: '#4a4a4a' },  // Peach
    { bg: '#F0E6FF', text: '#4a4a4a' },  // Lavender
    { bg: '#E8F5E9', text: '#4a4a4a' },  // Mint
    { bg: '#FFF0F5', text: '#4a4a4a' },  // Soft pink
];

let currentTotem = null;
let selectedColorIndex = null;

// Sélectionner un élément aléatoire d'un tableau
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Générer un totem
function generateTotem() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const name = nameInput || 'You';
    const animal = getRandomElement(ANIMALS);
    
    // Use selected color or random
    const color = selectedColorIndex !== null ? COLORS[selectedColorIndex] : getRandomElement(COLORS);
    const number = Math.floor(Math.random() * 1000) + 1;

    currentTotem = {
        animal,
        color,
        number,
        name,
        timestamp: new Date().toLocaleDateString('en-US')
    };

    return currentTotem;
}

// Draw totem on canvas
function drawTotem(totem) {
    const canvas = document.getElementById('totemCanvas');
    const ctx = canvas.getContext('2d');

    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, totem.color.bg);
    gradient.addColorStop(1, lightenColor(totem.color.bg, 20));
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Decorative pattern
    ctx.strokeStyle = `${totem.color.text}22`;
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(
            canvas.width / 2,
            100 + i * 60,
            50 + i * 20,
            0,
            Math.PI * 2
        );
        ctx.stroke();
    }

    // Header "Animal Totem" at top
    ctx.font = 'bold 45px Arial';
    ctx.fillStyle = totem.color.text;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.fillText('Animal Totem', canvas.width / 2, 30);
    ctx.shadowColor = 'transparent';

    // Custom text with name
    ctx.font = 'bold 70px Arial';
    const nameText = `${totem.name}, your animal totem `;
    
    // Draw name text with shadow
    ctx.fillStyle = totem.color.text;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    wrapText(ctx, nameText, canvas.width / 2, canvas.height / 2 - 290, canvas.width - 100, 80);
    ctx.shadowColor = 'transparent';

    // Main emoji (large)
    ctx.font = 'bold 300px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(totem.animal.emoji, canvas.width / 2, canvas.height / 2 - 20);

    // Title
    ctx.font = 'bold 80px Arial';
    ctx.fillStyle = totem.color.text;
    ctx.textAlign = 'center';
    ctx.fillText(totem.animal.name, canvas.width / 2, canvas.height / 2 + 200);

    // Traits
    ctx.font = 'bold 50px Arial';
    
    // Draw traits text with shadow
    ctx.fillStyle = totem.color.text;
    const traits = totem.animal.traits;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    wrapText(ctx, traits, canvas.width / 2, canvas.height / 2 + 360, canvas.width - 100, 60);
    ctx.shadowColor = 'transparent';

    // Totem number (at bottom)
    ctx.font = '40px Arial';
    ctx.fillStyle = totem.color.text;
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.fillText(`#${totem.number}`, canvas.width / 2, canvas.height - 50);
    ctx.shadowColor = 'transparent';
}

// Text wrapper
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';

    for (let i = 0; i < words.length; i++) {
        const testLine = line + (line ? ' ' : '') + words[i];
        const metrics = ctx.measureText(testLine);

        if (metrics.width > maxWidth && i > 0) {
            ctx.fillText(line, x, y);
            line = words[i];
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

// Lighten color
function lightenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, (num >> 16) + amt);
    const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
    const B = Math.min(255, (num & 0x0000FF) + amt);
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

// Download image as PNG
function downloadTotem() {
    const canvas = document.getElementById('totemCanvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `animal-totem-${currentTotem.number}.png`;
    link.click();
}

// Show loading overlay
function showLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.id = 'loadingOverlay';
    overlay.innerHTML = `
        <div>
            <div class="hourglass">⏳</div>
            <div class="loading-text">✨ Generating your totem...</div>
        </div>
    `;
    document.body.appendChild(overlay);
}

// Hide loading overlay
function hideLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => overlay.remove(), 300);
    }
}

// Event listeners
document.getElementById('generateBtn').addEventListener('click', () => {
    const btn = document.getElementById('generateBtn');
    btn.disabled = true;

    // Show loading overlay
    showLoadingOverlay();

    // 3-second animation
    setTimeout(() => {
        const totem = generateTotem();
        
        // Hide intro section and show canvas
        const introSection = document.getElementById('intro-section');
        const canvasContainer = document.getElementById('canvas-container');
        if (introSection) introSection.style.display = 'none';
        if (canvasContainer) canvasContainer.classList.add('show');
        
        drawTotem(totem);

        document.getElementById('totemInfo').innerHTML = `
            <strong>${totem.animal.name}</strong><br>
            ${totem.animal.traits}<br>
            <small>Unique number: #${totem.number}</small>
        `;

        document.getElementById('downloadBtn').disabled = false;
        btn.disabled = false;
        
        // Hide loading
        hideLoadingOverlay();
    }, 3000);
});

document.getElementById('downloadBtn').addEventListener('click', downloadTotem);

// Color selector buttons
document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove selected class from all buttons
        document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
        
        // Add selected class to clicked button
        btn.classList.add('selected');
        
        // Set selected color
        const colorIndex = btn.getAttribute('data-color');
        if (colorIndex === null || btn.classList.contains('random-color')) {
            selectedColorIndex = null;
        } else {
            selectedColorIndex = parseInt(colorIndex);
        }
    });
});

// Auto-select random button on load
document.getElementById('randomColorBtn').classList.add('selected');

// Allow generation by pressing Enter in input
document.getElementById('nameInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('generateBtn').click();
    }
});
