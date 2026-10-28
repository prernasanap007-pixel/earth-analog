// Shared Interactive Utilities for ORBITAL EDITORIAL
// Earth & Moon Comparative Telemetry — Apple + Google Experience Edition

// ==========================================================================
// COLOR THEME SWITCHER (Dark, Light, Warm)
// ==========================================================================
const THEMES = [
    { id: 'cosmic', name: '🌌 Cosmic Navy', icon: '🌌' },
    { id: 'light',  name: '☀️ Crisp Daylight', icon: '☀️' },
    { id: 'warm',   name: '✨ Warm Starlight', icon: '✨' }
];

function getCurrentTheme() {
    return localStorage.getItem('orbital-theme') || 'cosmic';
}

function applyTheme(themeId) {
    if (themeId === 'cosmic') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', themeId);
    }
    localStorage.setItem('orbital-theme', themeId);
    updateThemeButtons(themeId);
}

function updateThemeButtons(currentId) {
    const themeObj = THEMES.find(t => t.id === currentId) || THEMES[0];
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.innerHTML = `<span>${themeObj.icon}</span> <span>${themeObj.name.split(' ')[1]}</span>`;
        btn.setAttribute('title', `Current Theme: ${themeObj.name}. Click to switch.`);
    });
}

function cycleTheme() {
    const current = getCurrentTheme();
    const currentIndex = THEMES.findIndex(t => t.id === current);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextIndex].id;
    applyTheme(nextTheme);
}

// ==========================================================================
// PERSONALIZATION & BOOKMARKS / SAVED ITEMS
// ==========================================================================
function getBookmarks() {
    try {
        return JSON.parse(localStorage.getItem('atlas_bookmarks') || '[]');
    } catch(e) {
        return [];
    }
}

function isBookmarked(id) {
    return getBookmarks().some(b => b.id === id);
}

function toggleBookmark(id, title, subtitle, url, icon = '🌍') {
    let list = getBookmarks();
    const idx = list.findIndex(b => b.id === id);
    if (idx >= 0) {
        list.splice(idx, 1);
    } else {
        list.push({ id, title, subtitle, url, icon, savedAt: new Date().toLocaleDateString() });
    }
    localStorage.setItem('atlas_bookmarks', JSON.stringify(list));
    updateBookmarkUI();
    renderBookmarksDrawer();
}

function updateBookmarkUI() {
    const list = getBookmarks();
    document.querySelectorAll('.badge-count').forEach(badge => {
        badge.textContent = list.length;
        badge.style.display = list.length > 0 ? 'inline-flex' : 'none';
    });

    document.querySelectorAll('.card-bookmark-btn').forEach(btn => {
        const id = btn.dataset.id;
        const active = isBookmarked(id);
        btn.classList.toggle('active', active);
        btn.innerHTML = active ? '★' : '☆';
        btn.setAttribute('title', active ? 'Remove from saved places' : 'Save to favorites');
    });
}

function openBookmarksDrawer() {
    const drawer = document.getElementById('bookmarks-drawer-backdrop');
    if (drawer) {
        renderBookmarksDrawer();
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeBookmarksDrawer() {
    const drawer = document.getElementById('bookmarks-drawer-backdrop');
    if (drawer) {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function renderBookmarksDrawer() {
    const listContainer = document.getElementById('bookmarks-list');
    if (!listContainer) return;

    const list = getBookmarks();
    if (list.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align: center; padding: 50px 20px; color: var(--muted);">
                <div style="font-size: 32px; margin-bottom: 12px;">⭐️</div>
                <h4 style="color: var(--text); margin-bottom: 6px;">No Saved Places Yet</h4>
                <p style="font-size: 13px; line-height: 1.5;">Click the star (☆) button on any Earth or Moon card to save it for quick reference!</p>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = list.map(item => `
        <div class="bookmark-item-card">
            <div>
                <span style="font-size: 11px; color: var(--accent); font-weight: 700;">${item.icon} ${item.subtitle || 'Saved Place'}</span>
                <h4>${item.title}</h4>
                <a href="${item.url}" style="font-size: 12px; color: var(--blue); font-weight: 600;" onclick="closeBookmarksDrawer()">Open Place &rarr;</a>
            </div>
            <button class="bookmark-remove-btn" onclick="toggleBookmark('${item.id}', '', '', '')" title="Remove">&times;</button>
        </div>
    `).join('');
}

// ==========================================================================
// APPLE SPOTLIGHT + GOOGLE OMNISEARCH MODAL
// ==========================================================================
let omnisearchFilter = 'all';
let omnisearchHighlightedIndex = 0;
let currentSearchResults = [];

function openOmnisearch() {
    const modal = document.getElementById('omnisearch-backdrop');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const input = document.getElementById('omnisearch-input');
        if (input) {
            input.value = '';
            input.focus();
            renderOmnisearchResults('');
        }
    }
}

function closeOmnisearch() {
    const modal = document.getElementById('omnisearch-backdrop');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function setOmnisearchFilter(filter, el) {
    omnisearchFilter = filter;
    document.querySelectorAll('.omnisearch-filter-pill').forEach(p => p.classList.remove('active'));
    if (el) el.classList.add('active');
    const input = document.getElementById('omnisearch-input');
    renderOmnisearchResults(input ? input.value : '');
}

function getOmnisearchItems() {
    let items = [
        // Navigation Pages
        { title: 'Overview & Hero Comparison', desc: 'Earth vs Moon size, gravity & atmospheric basics', category: 'pages', url: 'index.html', icon: '🌍' },
        { title: '7 Side-by-Side Lookalike Pairs', desc: 'Compare Earth testing stations with Moon twins', category: 'lookalikes', url: 'compare.html', icon: '🔍' },
        { title: 'Moon Landmarks & Apollo Sites', desc: 'Apollo landings, craters, robotic probes & asteroids', category: 'moon', url: 'explore.html', icon: '🌕' },
        { title: 'Global Testing Stations World Map', desc: 'Interactive world map of candidate field stations', category: 'map', url: 'results.html', icon: '🗺️' },
        { title: 'Field Station Testing Details', desc: 'Rover wheels, spacesuits & lava cave evaluations', category: 'lookalikes', url: 'location.html', icon: '🔬' },
        { title: 'Astrophysics & Live Gravity Engine', desc: 'Gravity calculator, escape velocity & formulas', category: 'physics', url: 'methodology.html', icon: '⚖️' },
        { title: 'About the Atlas & NASA Data', desc: 'Scientific citations, PDS, USGS & LROC archives', category: 'about', url: 'about.html', icon: '📖' }
    ];

    // Analog Pairs
    if (typeof ANALOG_PAIRS !== 'undefined') {
        ANALOG_PAIRS.forEach(p => {
            items.push({
                title: `${p.title}: ${p.earth.name} &harr; ${p.moon.name}`,
                desc: `${p.earth.region} paired with ${p.moon.region}. ${p.thematicParallels}`,
                category: 'lookalikes',
                url: `compare.html#${p.id}`,
                icon: '🏔️',
                action: () => openDifferentialModal(p.id)
            });
        });
    }

    // Apollo Missions
    if (typeof APOLLO_MISSIONS !== 'undefined') {
        APOLLO_MISSIONS.forEach(m => {
            items.push({
                title: `${m.name} (${m.date}): ${m.region}`,
                desc: `Astronauts: ${m.landedAstronauts.join(', ')} • ${m.samplesReturnedKg} kg samples returned`,
                category: 'moon',
                url: 'explore.html',
                icon: '👨‍🚀'
            });
        });
    }

    // Craters & Massifs
    if (typeof CRATERS_MASSIFS !== 'undefined') {
        CRATERS_MASSIFS.forEach(c => {
            items.push({
                title: `${c.name} (${c.categoryLabel})`,
                desc: `${c.region} • ${c.description || c.featureDescription}`,
                category: 'moon',
                url: 'explore.html',
                icon: '🌋'
            });
        });
    }

    // Physics formulas
    if (typeof ASTROPHYSICS_FORMULAS !== 'undefined') {
        ASTROPHYSICS_FORMULAS.forEach(f => {
            items.push({
                title: `${f.title}: ${f.formula}`,
                desc: f.explanation,
                category: 'physics',
                url: 'methodology.html',
                icon: '📐'
            });
        });
    }

    return items;
}

function renderOmnisearchResults(query) {
    const container = document.getElementById('omnisearch-results-list');
    if (!container) return;

    const q = query.toLowerCase().trim();
    let allItems = getOmnisearchItems();

    if (omnisearchFilter !== 'all') {
        allItems = allItems.filter(item => item.category === omnisearchFilter);
    }

    if (q) {
        currentSearchResults = allItems.filter(item => 
            item.title.toLowerCase().includes(q) || 
            item.desc.toLowerCase().includes(q)
        );
    } else {
        currentSearchResults = allItems.slice(0, 8); // Top suggested items
    }

    omnisearchHighlightedIndex = 0;

    if (currentSearchResults.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--muted);">
                <div style="font-size: 28px; margin-bottom: 8px;">🔍</div>
                <h4 style="color: var(--text); margin-bottom: 4px;">No Results Found</h4>
                <p style="font-size: 13px;">No matching space stations, craters, or missions found for "${query}".</p>
            </div>
        `;
        return;
    }

    container.innerHTML = currentSearchResults.map((item, index) => `
        <a class="omnisearch-result-item ${index === 0 ? 'highlighted' : ''}" 
           href="${item.url}" 
           data-index="${index}"
           onclick="handleOmnisearchSelect(${index}, event)">
            <div class="omnisearch-result-left">
                <div class="omnisearch-result-icon">${item.icon}</div>
                <div class="omnisearch-result-info">
                    <h5>${item.title}</h5>
                    <p>${item.desc.substring(0, 95)}...</p>
                </div>
            </div>
            <span class="omnisearch-result-tag">${item.category.toUpperCase()}</span>
        </a>
    `).join('');
}

function handleOmnisearchSelect(index, event) {
    const item = currentSearchResults[index];
    if (!item) return;

    if (item.action && window.location.pathname.includes('compare.html')) {
        event.preventDefault();
        closeOmnisearch();
        item.action();
    } else {
        closeOmnisearch();
    }
}

// Keyboard shortcuts for Omnisearch
window.addEventListener('keydown', (e) => {
    // Open on Ctrl+K, Cmd+K, or slash /
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openOmnisearch();
        return;
    }

    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        openOmnisearch();
        return;
    }

    const modal = document.getElementById('omnisearch-backdrop');
    if (modal && modal.classList.contains('active')) {
        const items = document.querySelectorAll('.omnisearch-result-item');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            omnisearchHighlightedIndex = (omnisearchHighlightedIndex + 1) % items.length;
            items.forEach((it, i) => it.classList.toggle('highlighted', i === omnisearchHighlightedIndex));
            items[omnisearchHighlightedIndex]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            omnisearchHighlightedIndex = (omnisearchHighlightedIndex - 1 + items.length) % items.length;
            items.forEach((it, i) => it.classList.toggle('highlighted', i === omnisearchHighlightedIndex));
            items[omnisearchHighlightedIndex]?.scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currentSearchResults[omnisearchHighlightedIndex]) {
                handleOmnisearchSelect(omnisearchHighlightedIndex, e);
                window.location.href = currentSearchResults[omnisearchHighlightedIndex].url;
            }
        } else if (e.key === 'Escape') {
            closeOmnisearch();
        }
    }
});

// ==========================================================================
// AI SPACE GUIDE (Intelligent Assistant)
// ==========================================================================
function toggleAiAssistant() {
    const chat = document.getElementById('ai-chat-modal');
    if (chat) {
        chat.classList.toggle('active');
        if (chat.classList.contains('active')) {
            const input = document.getElementById('ai-chat-input');
            if (input) input.focus();
        }
    }
}

function askAiPrompt(question) {
    const input = document.getElementById('ai-chat-input');
    if (input) {
        input.value = question;
        submitAiChat();
    }
}

function submitAiChat() {
    const input = document.getElementById('ai-chat-input');
    const messages = document.getElementById('ai-chat-messages');
    if (!input || !messages) return;

    const userText = input.value.trim();
    if (!userText) return;

    // Append User Message
    const userBubble = document.createElement('div');
    userBubble.className = 'ai-bubble ai-bubble-user';
    userBubble.textContent = userText;
    messages.appendChild(userBubble);
    input.value = '';

    messages.scrollTop = messages.scrollHeight;

    // Generate Intelligent Answer
    setTimeout(() => {
        const answer = generateAiAnswer(userText);
        const botBubble = document.createElement('div');
        botBubble.className = 'ai-bubble ai-bubble-bot';
        botBubble.innerHTML = answer;
        messages.appendChild(botBubble);
        messages.scrollTop = messages.scrollHeight;
    }, 400);
}

function generateAiAnswer(text) {
    const q = text.toLowerCase();

    if (q.includes('gravity') || q.includes('weigh') || q.includes('jump')) {
        return `⚖️ <b>Lunar Gravity Fact:</b> The Moon's surface gravity is <b>1.62 m/s²</b> (about 1/6th of Earth's 9.81 m/s²). If you weigh 70 kg on Earth, you only weigh <b>11.6 kg on the Moon</b>! You could easily jump <b>2.7 meters (9 feet) high</b> — right over a car! You can test your weight right now in our <a href="compare.html" style="color:var(--blue);font-weight:700;">Lookalike Pairs Simulator</a>.`;
    }

    if (q.includes('hawaii') || q.includes('mauna kea') || q.includes('telescope') || q.includes('summit')) {
        return `🏔️ <b>Mauna Kea & Mons Huygens:</b> Hawaii's Mauna Kea rises 4,207 meters above sea level where the air is ultra-dry and clean. Scientists test deep-space telescopes here because its clear summit matches the undisturbed, vacuum view from the Moon's tallest mountain, <b>Mons Huygens (5,500 m)</b>!`;
    }

    if (q.includes('atacama') || q.includes('chile') || q.includes('dry') || q.includes('desert') || q.includes('rover')) {
        return `☀️ <b>Atacama Desert (Chile):</b> The Atacama Plateau is the driest non-polar desert on Earth, with almost zero humidity and intense UV radiation. NASA and ESA test autonomous Mars and Moon rover wheels and navigation here because its barren plains mirror the vast basalt plains of <b>Oceanus Procellarum</b>!`;
    }

    if (q.includes('apollo 11') || q.includes('neil armstrong') || q.includes('first moonwalk')) {
        return `👨‍🚀 <b>Apollo 11 (July 20, 1969):</b> Neil Armstrong and Buzz Aldrin spent 2 hours and 31 minutes moonwalking at Mare Tranquillitatis (Sea of Tranquility), returning 21.6 kg of lunar basalt samples. Check out full details on the <a href="explore.html" style="color:var(--blue);font-weight:700;">Moon Landmarks page</a>!`;
    }

    if (q.includes('rock') || q.includes('sample') || q.includes('most rocks')) {
        return `🪨 <b>Lunar Samples:</b> Across all 6 Apollo crewed landings, astronauts brought home <b>382 kg (842 lbs)</b> of pristine moon rocks! Apollo 17 returned the highest amount: an incredible <b>110.5 kg</b> of ancient breccias and basalt.`;
    }

    if (q.includes('temperature') || q.includes('cold') || q.includes('hot') || q.includes('swing')) {
        return `🌡️ <b>Thermal Extremes:</b> Without an atmosphere to distribute heat, temperatures on the Moon swing violently: from boiling <b>+120°C (+248°F)</b> in direct sunlight down to freezing <b>-173°C (-280°F)</b> at night, and down to <b>-246°C</b> in permanently shadowed polar craters!`;
    }

    if (q.includes('escape') || q.includes('speed') || q.includes('rocket')) {
        return `🚀 <b>Escape Velocity:</b> To break free from Earth's gravity into space, a rocket must reach <b>11.2 km/s (40,300 km/h)</b>. On the Moon, because mass is much lower, you only need <b>2.38 km/s (8,570 km/h)</b>! Try adjusting planet masses in our <a href="methodology.html" style="color:var(--blue);font-weight:700;">Astrophysics Calculator</a>.`;
    }

    // Default intelligent search matching
    const items = getOmnisearchItems().filter(it => it.title.toLowerCase().includes(q) || it.desc.toLowerCase().includes(q));
    if (items.length > 0) {
        return `✨ Found <b>${items.length} related space records</b> for "<i>${text}</i>":<br>• <b><a href="${items[0].url}" style="color:var(--blue);">${items[0].title}</a></b><br><span style="font-size:11.5px;color:var(--text-dim);">${items[0].desc}</span>`;
    }

    return `👋 I'm the Atlas AI Space Guide! You can ask me about <b>lunar gravity, jump heights, Apollo astronaut moonwalks, rover testing in the Atacama desert, or rocket speeds</b>. Try clicking one of the suggested prompts below!`;
}

// ==========================================================================
// MODAL DIALOGS & SHARED TELEMETRY UTILITIES
// ==========================================================================
function formatTemp(celsius, unit = 'C') {
    if (unit === 'F') {
        return (celsius * 9 / 5 + 32).toFixed(1) + '°F';
    }
    return celsius.toFixed(1) + '°C';
}

function calculateGravity(massKg, radiusMeters) {
    const G = 6.67430e-11;
    if (radiusMeters <= 0) return 0;
    return (G * massKg) / (radiusMeters * radiusMeters);
}

function calculateEscapeVelocity(massKg, radiusMeters) {
    const G = 6.67430e-11;
    if (radiusMeters <= 0) return 0;
    return Math.sqrt((2 * G * massKg) / radiusMeters) / 1000;
}

function openDifferentialModal(pairId) {
    if (typeof ANALOG_PAIRS === 'undefined' || !ANALOG_PAIRS.length) return;
    let pair = ANALOG_PAIRS.find(p => p.id === pairId);
    if (!pair) {
        // Fallback fuzzy match for legacy or partial IDs
        const cleanId = (pairId || '').toLowerCase().replace(/^(pair-|earth-|moon-)/, '');
        pair = ANALOG_PAIRS.find(p => p.id.toLowerCase().includes(cleanId) || cleanId.includes(p.id.toLowerCase().replace('pair-', '')));
    }
    if (!pair) pair = ANALOG_PAIRS[0];
    if (!pair) return;

    let modal = document.getElementById('orbital-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'orbital-modal';
        modal.className = 'modal-backdrop';
        document.body.appendChild(modal);
    }

    const elevDelta = Math.abs(pair.earth.metrics.elevationMeters - pair.moon.metrics.elevationMeters);
    const earthSwing = Math.abs(pair.earth.metrics.tempMaxCelsius - pair.earth.metrics.tempMinCelsius);
    const moonSwing = Math.abs(pair.moon.metrics.tempMaxCelsius - pair.moon.metrics.tempMinCelsius);
    const thermalVariance = Math.abs(earthSwing - moonSwing);

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-header">
                <div>
                    <span class="eyebrow-accent">🔍 SIDE-BY-SIDE ANALOG COMPARISON • ${pair.categoryLabel.toUpperCase()}</span>
                    <h2>${pair.title}</h2>
                </div>
                <button class="modal-close" onclick="closeDifferentialModal()" title="Close">&times;</button>
            </div>
            
            <div class="modal-body">
                <div class="thematic-callout">
                    <b>💡 WHY THEY ARE LOOKALIKES:</b> ${pair.thematicParallels}
                </div>

                <div class="modal-comparison-grid">
                    <!-- Earth Station Card -->
                    <div class="station-detail-card earth-card">
                        <div class="station-meta">
                            <span class="station-badge">🌍 EARTH • ${pair.earth.designation}</span>
                            <span class="station-coords">${pair.earth.coordinatesFormatted}</span>
                        </div>
                        <h3>${pair.earth.name}</h3>
                        <p class="station-region">📍 ${pair.earth.region}</p>
                        <p class="station-summary">${pair.earth.summary}</p>
                        
                        <div class="science-box">
                            <span class="science-label">🚀 Why Astronauts & Scientists Test Here:</span>
                            <p>${pair.earth.scientificSignificance}</p>
                        </div>

                        <div class="metrics-subgrid">
                            <div class="metric-pill">
                                <span>🏔️ Elevation / Depth</span>
                                <b>${pair.earth.metrics.elevationMeters > 0 ? '+' : ''}${pair.earth.metrics.elevationMeters.toLocaleString()} m</b>
                            </div>
                            <div class="metric-pill">
                                <span>🌡️ Temp Range</span>
                                <b>${pair.earth.metrics.tempMinCelsius}°C to ${pair.earth.metrics.tempMaxCelsius}°C</b>
                            </div>
                            <div class="metric-pill">
                                <span>⚖️ Surface Gravity</span>
                                <b>${pair.earth.metrics.gravityMps2.toFixed(2)} m/s² (1.00g Normal)</b>
                            </div>
                            <div class="metric-pill">
                                <span>💨 Atmosphere</span>
                                <b>${pair.earth.metrics.atmosphereKpa.toLocaleString()} kPa (Full Air)</b>
                            </div>
                        </div>
                    </div>

                    <!-- Moon Station Card -->
                    <div class="station-detail-card moon-card">
                        <div class="station-meta">
                            <span class="station-badge moon-badge">🌕 MOON • ${pair.moon.designation}</span>
                            <span class="station-coords">${pair.moon.coordinatesFormatted}</span>
                        </div>
                        <h3>${pair.moon.name}</h3>
                        <p class="station-region">📍 ${pair.moon.region}</p>
                        <p class="station-summary">${pair.moon.summary}</p>

                        <div class="science-box">
                            <span class="science-label">🔬 Scientific Importance on the Moon:</span>
                            <p>${pair.moon.scientificSignificance}</p>
                        </div>

                        <div class="metrics-subgrid">
                            <div class="metric-pill">
                                <span>🏔️ Lunar Elevation</span>
                                <b>${pair.moon.metrics.elevationMeters > 0 ? '+' : ''}${pair.moon.metrics.elevationMeters.toLocaleString()} m</b>
                            </div>
                            <div class="metric-pill">
                                <span>🌡️ Temp Range</span>
                                <b style="color: var(--amber);">${pair.moon.metrics.tempMinCelsius}°C to ${pair.moon.metrics.tempMaxCelsius}°C</b>
                            </div>
                            <div class="metric-pill">
                                <span>⚖️ Surface Gravity</span>
                                <b>${pair.moon.metrics.gravityMps2.toFixed(2)} m/s² (1/6th Gravity!)</b>
                            </div>
                            <div class="metric-pill">
                                <span>📡 Radio Signal Delay</span>
                                <b>${pair.moon.metrics.commDelaySeconds}s to Earth</b>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="delta-summary-bar">
                    <div class="delta-stat">
                        <span>🏔️ Height Difference</span>
                        <b>Δ ${elevDelta.toLocaleString()} meters</b>
                    </div>
                    <div class="delta-stat">
                        <span>🌡️ Temperature Extreme Swing</span>
                        <b style="color: var(--amber);">Δ ${thermalVariance.toFixed(0)}°C variance</b>
                    </div>
                    <div class="delta-stat">
                        <span>⚖️ Gravity Comparison</span>
                        <b>6× lighter on the Moon!</b>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button class="btn btn-ghost btn-sm" onclick="toggleBookmark('${pair.id}', '${pair.title}', 'Lookalike Pair', 'compare.html#${pair.id}', '🏔️')">
                    ⭐️ Save Place
                </button>
                <a href="compare.html#${pair.id}" class="btn btn-primary btn-sm">Explore in Compare</a>
                <button class="btn btn-ghost btn-sm" onclick="closeDifferentialModal()">Close</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDifferentialModal() {
    const modal = document.getElementById('orbital-modal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = '';
}

// Global outside click handler
window.addEventListener('click', (e) => {
    const modal = document.getElementById('orbital-modal');
    if (modal && e.target === modal) closeDifferentialModal();

    const search = document.getElementById('omnisearch-backdrop');
    if (search && e.target === search) closeOmnisearch();

    const bookmarks = document.getElementById('bookmarks-drawer-backdrop');
    if (bookmarks && e.target === bookmarks) closeBookmarksDrawer();
});

// ==========================================================================
// AUTO-MOUNT GLOBAL APPLE + GOOGLE UI COMPONENTS
// ==========================================================================
function mountGlobalUiComponents() {
    // 1. Omnisearch Overlay
    if (!document.getElementById('omnisearch-backdrop')) {
        const searchDiv = document.createElement('div');
        searchDiv.id = 'omnisearch-backdrop';
        searchDiv.className = 'omnisearch-backdrop';
        searchDiv.innerHTML = `
            <div class="omnisearch-modal" onclick="event.stopPropagation()">
                <div class="omnisearch-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--muted);">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    <input type="text" id="omnisearch-input" class="omnisearch-input" placeholder="Type to search places, Apollo sites, craters, gravity..." oninput="renderOmnisearchResults(this.value)">
                    <button onclick="closeOmnisearch()" style="background:transparent;border:none;color:var(--muted);font-size:18px;cursor:pointer;">&times;</button>
                </div>
                <div class="omnisearch-filters">
                    <button class="omnisearch-filter-pill active" onclick="setOmnisearchFilter('all', this)">All</button>
                    <button class="omnisearch-filter-pill" onclick="setOmnisearchFilter('lookalikes', this)">🏔️ Lookalike Pairs</button>
                    <button class="omnisearch-filter-pill" onclick="setOmnisearchFilter('moon', this)">🌕 Moon Missions &amp; Craters</button>
                    <button class="omnisearch-filter-pill" onclick="setOmnisearchFilter('physics', this)">⚖️ Physics &amp; Gravity</button>
                    <button class="omnisearch-filter-pill" onclick="setOmnisearchFilter('pages', this)">📄 Pages</button>
                </div>
                <div class="omnisearch-results-list" id="omnisearch-results-list"></div>
                <div class="omnisearch-footer">
                    <div class="omnisearch-hints">
                        <span>Navigate: <b>&uarr; &darr;</b></span>
                        <span>Open: <b>Enter</b></span>
                        <span>Close: <b>Esc</b></span>
                    </div>
                    <span>⚡ Instant Search Powered by NASA PDS</span>
                </div>
            </div>
        `;
        document.body.appendChild(searchDiv);
    }

    // 2. Bookmarks / Saved Places Drawer
    if (!document.getElementById('bookmarks-drawer-backdrop')) {
        const drawerDiv = document.createElement('div');
        drawerDiv.id = 'bookmarks-drawer-backdrop';
        drawerDiv.className = 'bookmarks-backdrop';
        drawerDiv.innerHTML = `
            <div class="bookmarks-drawer" onclick="event.stopPropagation()">
                <div class="bookmarks-header">
                    <h3>⭐️ Saved Places &amp; Landmarks</h3>
                    <button onclick="closeBookmarksDrawer()" style="background:transparent;border:none;color:var(--muted);font-size:22px;cursor:pointer;">&times;</button>
                </div>
                <div class="bookmarks-body" id="bookmarks-list"></div>
                <div style="padding: 16px; border-top: 1px solid var(--line); background: var(--card-surface); text-align: center;">
                    <a href="compare.html" class="btn btn-primary btn-sm" onclick="closeBookmarksDrawer()">Explore All Pairs &rarr;</a>
                </div>
            </div>
        `;
        document.body.appendChild(drawerDiv);
    }

    // 3. Floating AI Assistant Widget
    if (!document.getElementById('ai-float-trigger')) {
        const floatBtn = document.createElement('button');
        floatBtn.id = 'ai-float-trigger';
        floatBtn.className = 'ai-float-trigger';
        floatBtn.onclick = toggleAiAssistant;
        floatBtn.innerHTML = `<span>✨</span> <span>Ask Atlas AI</span>`;
        floatBtn.title = "Ask any question about Earth & Moon geology, Apollo, or gravity!";
        document.body.appendChild(floatBtn);

        const chatModal = document.createElement('div');
        chatModal.id = 'ai-chat-modal';
        chatModal.className = 'ai-chat-modal';
        chatModal.innerHTML = `
            <div class="ai-chat-header">
                <div class="ai-chat-header-title">
                    <span>✨</span>
                    <span>Atlas AI Space Guide</span>
                </div>
                <button onclick="toggleAiAssistant()" style="background:transparent;border:none;color:var(--muted);font-size:20px;cursor:pointer;">&times;</button>
            </div>
            <div class="ai-chat-body" id="ai-chat-messages">
                <div class="ai-bubble ai-bubble-bot">
                    👋 <b>Welcome!</b> I'm your interactive Space Guide. Ask me anything about how Earth locations compare to the Moon, Apollo missions, or lunar gravity!
                    <div class="ai-suggested-chips">
                        <button class="ai-chip-btn" onclick="askAiPrompt('Why do rovers test in the Atacama desert?')">☀️ Why do rovers test in Atacama?</button>
                        <button class="ai-chip-btn" onclick="askAiPrompt('How much lighter would I be on the Moon?')">⚖️ How high can I jump on the Moon?</button>
                        <button class="ai-chip-btn" onclick="askAiPrompt('Which Apollo mission brought back the most moon rocks?')">🪨 Which mission brought back the most rocks?</button>
                        <button class="ai-chip-btn" onclick="askAiPrompt('What is escape velocity?')">🚀 What is escape velocity?</button>
                    </div>
                </div>
            </div>
            <div class="ai-chat-footer">
                <input type="text" id="ai-chat-input" class="ai-chat-input" placeholder="Ask a space question..." onkeydown="if(event.key==='Enter') submitAiChat()">
                <button class="ai-chat-send" onclick="submitAiChat()" title="Send">&rarr;</button>
            </div>
        `;
        document.body.appendChild(chatModal);
    }

    // 4. Enhance Topbar Actions with Search & Bookmark Trigger Buttons
    const topbarActions = document.querySelector('.topbar-actions');
    if (topbarActions) {
        if (!topbarActions.querySelector('.search-trigger-btn')) {
            const searchBtn = document.createElement('button');
            searchBtn.className = 'search-trigger-btn';
            searchBtn.onclick = openOmnisearch;
            searchBtn.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                </svg>
                <span>Search</span>
                <kbd>⌘K</kbd>
            `;
            searchBtn.title = "Search Atlas (Ctrl+K or /)";
            topbarActions.insertBefore(searchBtn, topbarActions.firstChild);
        }

        if (!topbarActions.querySelector('.bookmarks-trigger-btn')) {
            const bmBtn = document.createElement('button');
            bmBtn.className = 'bookmarks-trigger-btn';
            bmBtn.onclick = openBookmarksDrawer;
            bmBtn.innerHTML = `
                <span>⭐️</span>
                <span>Saved</span>
                <span class="badge-count" style="display:none;">0</span>
            `;
            bmBtn.title = "View saved favorite places";
            topbarActions.insertBefore(bmBtn, topbarActions.children[1] || null);
        }
    }

    updateBookmarkUI();
}

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    mountGlobalUiComponents();
    applyTheme(getCurrentTheme());
});
