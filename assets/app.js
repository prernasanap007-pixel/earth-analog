// Shared Interactive Utilities for ORBITAL EDITORIAL
// Earth & Moon Comparative Telemetry — User-Friendly Edition

// ==========================================================================
// COLOR THEME SWITCHER
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
        btn.innerHTML = `<span>${themeObj.icon}</span> <span>Theme: ${themeObj.name.split(' ')[1]}</span>`;
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

// Auto-initialize theme on DOM load or script run
(function initTheme() {
    const saved = getCurrentTheme();
    if (saved !== 'cosmic') {
        document.documentElement.setAttribute('data-theme', saved);
    }
    document.addEventListener('DOMContentLoaded', () => {
        updateThemeButtons(saved);
    });
})();

// ==========================================================================
// ASTROPHYSICS & TELEMETRY CALCULATORS
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
    return Math.sqrt((2 * G * massKg) / radiusMeters) / 1000; // in km/s
}

// ==========================================================================
// USER-FRIENDLY COMPARISON MODAL
// ==========================================================================
function openDifferentialModal(pairId) {
    const pair = ANALOG_PAIRS.find(p => p.id === pairId);
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
                <!-- Beginner Plain-English Explanation -->
                <div class="thematic-callout">
                    <b>💡 WHY THEY ARE LOOKALIKES:</b> ${pair.thematicParallels}
                </div>

                <div class="modal-comparison-grid">
                    <!-- Terrestrial (Earth) Card -->
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

                    <!-- Selenological (Moon) Card -->
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
                                <span>🏔️ Elevation Datum</span>
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

                <!-- Comparative Deltas Summary -->
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
                <a href="compare.html" class="btn btn-primary btn-sm">Explore All 7 Analog Pairs &rarr;</a>
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

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('orbital-modal');
    if (modal && e.target === modal) {
        closeDifferentialModal();
    }
});

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDifferentialModal();
    }
});
