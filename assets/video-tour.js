// ==========================================================================
// ORBITAL EDITORIAL — INTERACTIVE INTRODUCTORY VIDEO TOUR & MISSION BRIEFING
// Apple + Google Experience Edition: Canvas 60fps Animation, Synchronized
// Voice Narration (Web Speech API), Live Subtitles, Audio Visualizer & NASA Reel
// ==========================================================================

const VIDEO_CHAPTERS = [
    {
        id: 'mission-concept',
        chNumber: '01',
        title: 'The Mission: What is an Earth Analog?',
        shortTitle: '1. What is an Analog?',
        timeStart: 0,
        timeEnd: 12,
        hudTag: 'CH 01 • MISSION BRIEFING',
        hudTelemetry: 'LEO → LLO • DISTANCE: 384,400 KM • PROTOCOL: ANALOG TESTING',
        audioText: "Welcome to the Earth and Moon Atlas. Before NASA and European Space Agency astronauts and multi-million dollar rovers travel into deep space, scientists train in extreme locations right here on Earth. Known as Earth Analogs, these extreme volcanic caves, frozen valleys, and bone-dry deserts mirror the harsh geology and vacuum environment of the Moon.",
        captionHtml: 'Welcome to the <b>Earth &amp; Moon Atlas</b>. Before space missions launch, scientists test equipment in <b>Earth Analogs</b>—extreme terrestrial places that mirror the geology and harshness of the Moon.',
        sceneType: 'concept',
        actionBtnText: 'Explore 7 Lookalike Pairs →',
        actionBtnUrl: 'compare.html',
        actionHint: 'Learn why extreme earthly landscapes simulate lunar missions.'
    },
    {
        id: 'two-worlds',
        chNumber: '02',
        title: 'Two Celestial Spheres: 1g vs 1/6th Gravity',
        shortTitle: '2. 1g vs 1/6th Gravity',
        timeStart: 12,
        timeEnd: 24,
        hudTag: 'CH 02 • CELESTIAL TELEMETRY',
        hudTelemetry: 'GRAVITY: 9.81 m/s² (1.0g) vs 1.62 m/s² (0.165g) • MASS DELTA: 81:1',
        audioText: "Earth and the Moon are celestial neighbors, but fundamentally different worlds. Earth has a protective atmosphere, liquid oceans, and standard one-g gravity. The Moon has near-total vacuum, intense solar radiation, and just one-sixth of Earth's gravity. On the Moon, you weigh eighty-three percent less and can jump six times higher!",
        captionHtml: 'Earth has a thick protective atmosphere and <b>1.00g gravity</b>. The Moon is an airless vacuum with <b>1/6th gravity (0.165g)</b>—you weigh <b>83% less</b> and can jump 6× higher!',
        sceneType: 'gravity',
        actionBtnText: 'Try Live Gravity Calculator →',
        actionBtnUrl: 'methodology.html',
        actionHint: 'Calculate your exact weight and jump height across celestial bodies.'
    },
    {
        id: 'lookalike-twins',
        chNumber: '03',
        title: '7 Lookalike Pairs: Earth’s Lunar Twins',
        shortTitle: '3. 7 Lookalike Pairs',
        timeStart: 24,
        timeEnd: 36,
        hudTag: 'CH 03 • TERRESTRIAL TWINS',
        hudTelemetry: 'VERIFIED PAIRS: 7 • NASA PDS & USGS ARCHIVES • BASALT MATCH',
        audioText: "Our atlas maps seven verified Earth and Moon twins. Chile's bone-dry Atacama Desert matches the volcanic basalt plains of the Ocean of Storms. Spain's Lanzarote lava tubes mirror the deep underground caves of Marius Hills, where future lunar bases will shelter from solar radiation and micrometeorites.",
        captionHtml: 'Our atlas maps <b>7 verified twin pairs</b>. In Chile’s <b>Atacama Desert</b>, rover wheels test traction. Inside Spain’s <b>Lanzarote Lava Tubes</b>, astronauts practice underground habitat shelter.',
        sceneType: 'lookalikes',
        actionBtnText: 'View All 7 Pairs in Detail →',
        actionBtnUrl: 'compare.html',
        actionHint: 'See side-by-side satellite imagery, elevation deltas, and test suitability.'
    },
    {
        id: 'apollo-selenology',
        chNumber: '04',
        title: 'Apollo Historic Sites & Moon Landmarks',
        shortTitle: '4. Apollo & Moon Sites',
        timeStart: 36,
        timeEnd: 48,
        hudTag: 'CH 04 • APOLLO & SELENOLOGY',
        hudTelemetry: 'CREWED MISSIONS: 6 • SAMPLES RETURNED: 382 KG • LROC ASU DATA',
        audioText: "Journey across the lunar surface. Trace all six historic Apollo crewed landing sites, from Apollo 11 at Tranquility Base to Apollo 17 in Taurus-Littrow. Inspect gigantic lunar massifs taller than Mount Everest, basaltic maria lava lakes, and nearby asteroids, all mapped with verified NASA and USGS orbital coordinates.",
        captionHtml: 'Trace all <b>6 historic Apollo landings</b> from Tranquility Base to Taurus-Littrow, towering <b>lunar massifs</b> taller than Mt. Everest, and real rock sample coordinates.',
        sceneType: 'apollo',
        actionBtnText: 'Explore Moon Landmarks →',
        actionBtnUrl: 'explore.html',
        actionHint: 'Inspect Apollo 11–17 coordinates, robotic landers, and lunar maria.'
    },
    {
        id: 'simulators-tools',
        chNumber: '05',
        title: 'Interactive Simulators & Field Stations',
        shortTitle: '5. Live Simulators',
        timeStart: 48,
        timeEnd: 60,
        hudTag: 'CH 05 • INTERACTIVE ATLAS',
        hudTelemetry: 'STATUS: MISSION READY • SENSORS ONLINE • SIMULATOR ARMED',
        audioText: "Ready to explore? Test your jump height and calculate your weight on different worlds. Watch the real-time Moon orbit and lunar phases, and inspect global rover testing stations. Welcome to the Earth and Moon Atlas—your portal to planetary exploration.",
        captionHtml: 'Simulate <b>real-time lunar orbit</b>, calculate escape velocity, test your <b>jump height</b>, and search with our <b>Atlas AI Space Guide</b>. Start exploring now!',
        sceneType: 'simulators',
        actionBtnText: 'Launch Full Interactive Atlas 🚀',
        actionBtnUrl: 'compare.html',
        actionHint: 'Begin exploring the 7 lookalike pairs, jump simulator, and moon maps.'
    }
];

// Video State Management
const VideoTour = {
    isPlaying: false,
    currentTime: 0,
    totalDuration: 60,
    currentChapterIdx: 0,
    playbackSpeed: 1.0,
    voiceEnabled: true,
    captionsEnabled: true,
    isTheaterMode: false,
    audioCtx: null,
    speechUtterance: null,
    animationFrameId: null,
    lastFrameTimestamp: 0,
    activeMode: 'interactive', // 'interactive', 'nasa', 'guide'
    
    // Canvas & Stars
    canvas: null,
    ctx: null,
    stars: [],
    particles: [],

    init() {
        this.canvas = document.getElementById('video-canvas');
        if (this.canvas) {
            this.ctx = this.canvas.getContext('2d');
            this.initStars();
            this.resizeCanvas();
            window.addEventListener('resize', () => this.resizeCanvas());
        }

        this.renderChapterUI();
        this.updateHUD();
        this.renderSceneOverlay();
        this.setupKeyboardShortcuts();
        
        // Render initial static frame on canvas
        this.drawCanvasFrame(0);
    },

    initStars() {
        this.stars = [];
        for (let i = 0; i < 90; i++) {
            this.stars.push({
                x: Math.random(),
                y: Math.random(),
                size: Math.random() * 2 + 0.6,
                speed: Math.random() * 0.0003 + 0.0001,
                opacity: Math.random() * 0.7 + 0.3,
                twinkleSpeed: Math.random() * 0.05 + 0.01
            });
        }
    },

    resizeCanvas() {
        if (!this.canvas) return;
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    },

    // Web Audio API Sound Effects (Zero external audio file requirements)
    playTone(freq = 440, type = 'sine', duration = 0.08, vol = 0.08) {
        if (!this.voiceEnabled) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            if (!this.audioCtx) this.audioCtx = new AudioContext();
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
            gain.gain.setValueAtTime(vol, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start();
            osc.stop(this.audioCtx.currentTime + duration);
        } catch (e) {
            // Non-critical audio failure fallback
        }
    },

    playTelemetryBeep() {
        this.playTone(880, 'sine', 0.06, 0.05);
        setTimeout(() => this.playTone(1320, 'sine', 0.08, 0.05), 60);
    },

    // Speech Synthesis Narration Engine
    speakCurrentChapter() {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();

        if (!this.voiceEnabled || !this.isPlaying) {
            this.setWaveVisualizer(false);
            return;
        }

        const chapter = VIDEO_CHAPTERS[this.currentChapterIdx];
        if (!chapter) return;

        const utterance = new SpeechSynthesisUtterance(chapter.audioText);
        utterance.rate = this.playbackSpeed * 0.98;
        utterance.pitch = 1.0;

        // Try selecting a natural English voice if available
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('David') || v.name.includes('Alex'))));
        if (preferredVoice) utterance.voice = preferredVoice;

        utterance.onstart = () => {
            this.setWaveVisualizer(true);
        };

        utterance.onend = () => {
            this.setWaveVisualizer(false);
        };

        utterance.onerror = () => {
            this.setWaveVisualizer(false);
        };

        this.speechUtterance = utterance;
        window.speechSynthesis.speak(utterance);
    },

    stopSpeech() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        this.setWaveVisualizer(false);
    },

    setWaveVisualizer(active) {
        const wave = document.getElementById('audio-wave');
        if (wave) {
            wave.classList.toggle('wave-active', active);
        }
    },

    // Playback loop
    play() {
        if (this.currentTime >= this.totalDuration) {
            this.currentTime = 0;
            this.currentChapterIdx = 0;
        }
        this.isPlaying = true;
        this.lastFrameTimestamp = performance.now();
        this.updatePlayButtonUI();
        this.playTone(520, 'triangle', 0.12, 0.06);
        this.speakCurrentChapter();

        const centerPlay = document.getElementById('video-center-play');
        if (centerPlay) centerPlay.style.display = 'none';

        this.loop();
    },

    pause() {
        this.isPlaying = false;
        this.updatePlayButtonUI();
        this.stopSpeech();

        const centerPlay = document.getElementById('video-center-play');
        if (centerPlay) centerPlay.style.display = 'flex';

        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    },

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },

    replay() {
        this.currentTime = 0;
        this.currentChapterIdx = 0;
        this.renderChapterUI();
        this.renderSceneOverlay();
        this.updateHUD();
        this.play();
    },

    loop(timestamp = performance.now()) {
        if (!this.isPlaying) return;

        const deltaSeconds = (timestamp - this.lastFrameTimestamp) / 1000;
        this.lastFrameTimestamp = timestamp;

        this.currentTime += deltaSeconds * this.playbackSpeed;

        if (this.currentTime >= this.totalDuration) {
            this.currentTime = this.totalDuration;
            this.pause();
            this.currentTime = 0;
            this.currentChapterIdx = 0;
            this.updateTimelineUI();
            this.renderChapterUI();
            this.renderSceneOverlay();
            return;
        }

        // Check if chapter changed
        const newChapterIdx = VIDEO_CHAPTERS.findIndex(ch => this.currentTime >= ch.timeStart && this.currentTime < ch.timeEnd);
        if (newChapterIdx !== -1 && newChapterIdx !== this.currentChapterIdx) {
            this.currentChapterIdx = newChapterIdx;
            this.renderChapterUI();
            this.renderSceneOverlay();
            this.updateHUD();
            this.playTelemetryBeep();
            this.speakCurrentChapter();
        }

        this.updateTimelineUI();
        this.drawCanvasFrame(timestamp);

        this.animationFrameId = requestAnimationFrame((ts) => this.loop(ts));
    },

    seek(seconds) {
        this.currentTime = Math.max(0, Math.min(seconds, this.totalDuration));
        const newChapterIdx = VIDEO_CHAPTERS.findIndex(ch => this.currentTime >= ch.timeStart && this.currentTime < ch.timeEnd);
        if (newChapterIdx !== -1 && newChapterIdx !== this.currentChapterIdx) {
            this.currentChapterIdx = newChapterIdx;
            this.playTelemetryBeep();
            if (this.isPlaying) this.speakCurrentChapter();
        }
        this.renderChapterUI();
        this.renderSceneOverlay();
        this.updateHUD();
        this.updateTimelineUI();
        this.drawCanvasFrame(performance.now());
    },

    jumpToChapter(idx) {
        if (idx < 0 || idx >= VIDEO_CHAPTERS.length) return;
        const target = VIDEO_CHAPTERS[idx];
        this.seek(target.timeStart);
        if (!this.isPlaying) {
            this.play();
        }
    },

    // UI Renderers
    updatePlayButtonUI() {
        const icon = document.getElementById('ctrl-play-icon');
        const playBtn = document.getElementById('video-play-btn');
        if (icon) {
            icon.textContent = this.isPlaying ? '❚❚' : '▶';
        }
        if (playBtn) {
            playBtn.title = this.isPlaying ? 'Pause (Space)' : 'Play (Space)';
            playBtn.classList.toggle('active', this.isPlaying);
        }
    },

    updateTimelineUI() {
        const progressEl = document.getElementById('video-progress');
        const timeCurEl = document.getElementById('video-current-time');
        
        if (progressEl) {
            const percent = (this.currentTime / this.totalDuration) * 100;
            progressEl.style.width = `${percent}%`;
        }
        if (timeCurEl) {
            const mins = Math.floor(this.currentTime / 60);
            const secs = Math.floor(this.currentTime % 60);
            timeCurEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }
    },

    updateHUD() {
        const chapter = VIDEO_CHAPTERS[this.currentChapterIdx];
        if (!chapter) return;

        const hudCh = document.getElementById('video-hud-chapter');
        const hudTelem = document.getElementById('video-hud-telemetry');
        const captionText = document.getElementById('video-caption-text');
        const jumpTitle = document.getElementById('jump-title');
        const jumpDesc = document.getElementById('jump-desc');
        const jumpBtn = document.getElementById('jump-action-btn');

        if (hudCh) hudCh.textContent = chapter.hudTag;
        if (hudTelem) {
            hudTelem.innerHTML = `<span>${chapter.hudTelemetry}</span>`;
        }
        if (captionText) {
            captionText.innerHTML = chapter.captionHtml;
        }

        // Action bar below player
        if (jumpTitle) jumpTitle.textContent = chapter.title;
        if (jumpDesc) jumpDesc.textContent = chapter.actionHint;
        if (jumpBtn) {
            jumpBtn.textContent = chapter.actionBtnText;
            jumpBtn.setAttribute('href', chapter.actionBtnUrl);
        }
    },

    renderChapterUI() {
        const pillGroup = document.querySelector('.chapter-pill-group');
        if (pillGroup) {
            const pills = pillGroup.querySelectorAll('.ch-pill');
            pills.forEach((p, idx) => {
                p.classList.toggle('active', idx === this.currentChapterIdx);
            });
        }
    },

    renderSceneOverlay() {
        const overlay = document.getElementById('video-scene-overlay');
        if (!overlay) return;

        const chapter = VIDEO_CHAPTERS[this.currentChapterIdx];
        if (!chapter) return;

        // Dynamic HTML scene based on chapter type
        let html = '';

        if (chapter.sceneType === 'concept') {
            html = `
                <div class="scene-card scene-fade-in">
                    <div class="scene-badge">
                        <span>🌍 TERRESTRIAL FIELD TESTING • MISSION OVERVIEW</span>
                    </div>
                    <h2 class="scene-title">Why Do Scientists Study Earth Analogs?</h2>
                    <p class="scene-desc">
                        Before testing multi-million-dollar rovers or risking astronaut crews in space, space agencies run missions in extreme earthly locations that mimic the Moon's hostile conditions.
                    </p>
                    <div class="scene-mini-grid">
                        <div class="scene-mini-item">
                            <span class="icon">🏜️</span>
                            <b>Dry Volcanic Deserts</b>
                            <small>Rover wheel traction &amp; soil abrasion</small>
                        </div>
                        <div class="scene-mini-item">
                            <span class="icon">🌋</span>
                            <b>Subsurface Lava Tubes</b>
                            <small>Natural radiation &amp; micrometeorite shielding</small>
                        </div>
                        <div class="scene-mini-item">
                            <span class="icon">💥</span>
                            <b>Meteorite Craters</b>
                            <small>Shock impact physics &amp; sample drilling</small>
                        </div>
                    </div>
                    <div class="scene-action-row">
                        <a href="compare.html" class="btn btn-primary btn-sm">Explore 7 Lookalike Pairs &rarr;</a>
                        <button class="btn btn-ghost btn-sm" onclick="VideoTour.jumpToChapter(1)">Next: 1/6th Gravity &rarr;</button>
                    </div>
                </div>
            `;
        } else if (chapter.sceneType === 'gravity') {
            html = `
                <div class="scene-card scene-fade-in">
                    <div class="scene-badge" style="background: rgba(251, 191, 36, 0.15); border-color: var(--amber); color: var(--amber);">
                        <span>⚖️ PLANETARY MECHANICS • 1g vs 1/6th GRAVITY</span>
                    </div>
                    <h2 class="scene-title">Feel the Weight Difference: Earth vs Moon</h2>
                    <p class="scene-desc">
                        Earth is protected by a breathable atmosphere and 1g gravity. The Moon is an airless vacuum where you weigh 83% less and can leap 6 times higher!
                    </p>
                    <div class="scene-compare-grid">
                        <div class="compare-col earth-col">
                            <span class="col-title">🌍 PLANET EARTH</span>
                            <div class="compare-stat">
                                <b>9.81 m/s²</b>
                                <small>Surface Gravity (1.00g)</small>
                            </div>
                            <div class="compare-stat">
                                <b>101.3 kPa</b>
                                <small>Full Atmospheric Pressure</small>
                            </div>
                            <div class="jump-pill">Standard Jump: ~0.5 m</div>
                        </div>
                        <div class="compare-col moon-col">
                            <span class="col-title">🌕 THE MOON</span>
                            <div class="compare-stat">
                                <b style="color: var(--amber);">1.62 m/s²</b>
                                <small>Surface Gravity (0.165g)</small>
                            </div>
                            <div class="compare-stat">
                                <b style="color: var(--amber);">~0 kPa (Vacuum)</b>
                                <small>Spacesuit strictly required</small>
                            </div>
                            <div class="jump-pill highlight">Moon Jump: ~3.0 m (6× Higher!)</div>
                        </div>
                    </div>
                    <div class="scene-action-row">
                        <a href="methodology.html" class="btn btn-primary btn-sm">Open Jump Simulator &rarr;</a>
                        <button class="btn btn-ghost btn-sm" onclick="VideoTour.jumpToChapter(2)">Next: Lookalike Pairs &rarr;</button>
                    </div>
                </div>
            `;
        } else if (chapter.sceneType === 'lookalikes') {
            html = `
                <div class="scene-card scene-fade-in">
                    <div class="scene-badge" style="background: rgba(56, 189, 248, 0.15); border-color: var(--blue); color: var(--blue);">
                        <span>🔍 7 VERIFIED ANALOG MATCHES</span>
                    </div>
                    <h2 class="scene-title">Lookalike Twins: Earth’s Lunar Counterparts</h2>
                    <p class="scene-desc">
                        Grounded in NASA PDS telemetry, our atlas pairs 7 extreme terrestrial environments directly with their selenological twins.
                    </p>
                    <div class="scene-triplet-grid">
                        <div class="triplet-card" onclick="openDifferentialModal('pair-hyper-arid-plains')">
                            <span class="tag">01 • ARID BASALT PLAIN</span>
                            <b>Atacama Desert ↔ Ocean of Storms</b>
                            <small>5,050m altitude, near-zero humidity</small>
                        </div>
                        <div class="triplet-card" onclick="openDifferentialModal('pair-volcanic-lava-tubes')">
                            <span class="tag">02 • LAVA TUBE CAVE</span>
                            <b>Lanzarote Tubes ↔ Marius Hills Pit</b>
                            <small>Subterranean radiation &amp; thermal buffer</small>
                        </div>
                        <div class="triplet-card" onclick="openDifferentialModal('pair-polar-cryo-traps')">
                            <span class="tag">03 • FROZEN ICE TRAP</span>
                            <b>McMurdo Valleys ↔ Shackleton Crater</b>
                            <small>Cold-trap physics &amp; permanently shadowed ice</small>
                        </div>
                    </div>
                    <div class="scene-action-row">
                        <a href="compare.html" class="btn btn-primary btn-sm">Inspect All 7 Pairs &rarr;</a>
                        <button class="btn btn-ghost btn-sm" onclick="VideoTour.jumpToChapter(3)">Next: Apollo Sites &rarr;</button>
                    </div>
                </div>
            `;
        } else if (chapter.sceneType === 'apollo') {
            html = `
                <div class="scene-card scene-fade-in">
                    <div class="scene-badge" style="background: rgba(129, 140, 248, 0.18); border-color: var(--accent); color: var(--accent-light);">
                        <span>🚀 HISTORIC EXPLORATION BEACONS</span>
                    </div>
                    <h2 class="scene-title">Apollo Moonwalks &amp; Giant Lunar Landmarks</h2>
                    <p class="scene-desc">
                        Trace humanity's greatest adventures. Explore all 6 Apollo crewed landing sites, towering lunar massifs, robotic landers, and pristine rock sample data.
                    </p>
                    <div class="scene-apollo-strip">
                        <div class="apollo-chip">
                            <b>Apollo 11</b>
                            <small>Tranquility Base • 21.5 kg samples</small>
                        </div>
                        <div class="apollo-chip">
                            <b>Apollo 15</b>
                            <small>Hadley Rille • Lunar Rover Debut</small>
                        </div>
                        <div class="apollo-chip">
                            <b>Apollo 17</b>
                            <small>Taurus-Littrow • 110.5 kg rocks</small>
                        </div>
                        <div class="apollo-chip">
                            <b>Mons Huygens</b>
                            <small>5.5 km tall lunar massif</small>
                        </div>
                    </div>
                    <div class="scene-action-row">
                        <a href="explore.html" class="btn btn-primary btn-sm">Explore Lunar Beacons &rarr;</a>
                        <button class="btn btn-ghost btn-sm" onclick="VideoTour.jumpToChapter(4)">Next: Live Simulators &rarr;</button>
                    </div>
                </div>
            `;
        } else if (chapter.sceneType === 'simulators') {
            html = `
                <div class="scene-card scene-fade-in">
                    <div class="scene-badge" style="background: rgba(52, 211, 153, 0.18); border-color: var(--green); color: var(--green);">
                        <span>⚡ INTERACTIVE SCIENCE SUITE</span>
                    </div>
                    <h2 class="scene-title">You Are Ready to Explore the Atlas!</h2>
                    <p class="scene-desc">
                        Everything is designed to be hands-on, educational, and fun. Choose your next adventure below or try our AI Space Guide.
                    </p>
                    <div class="scene-module-pills">
                        <a href="compare.html" class="module-pill">
                            <span class="pill-icon">🔍</span>
                            <div>
                                <b>7 Lookalike Pairs</b>
                                <small>Side-by-side terrain matches</small>
                            </div>
                        </a>
                        <a href="methodology.html" class="module-pill">
                            <span class="pill-icon">⚖️</span>
                            <div>
                                <b>Gravity &amp; Jump Calculator</b>
                                <small>Interactive physics engine</small>
                            </div>
                        </a>
                        <a href="results.html" class="module-pill">
                            <span class="pill-icon">🗺️</span>
                            <div>
                                <b>Field Stations Radar</b>
                                <small>Global rover testing map</small>
                            </div>
                        </a>
                    </div>
                    <div class="scene-action-row">
                        <a href="compare.html" class="btn btn-primary">Launch Full Interactive Atlas 🚀</a>
                        <button class="btn btn-ghost btn-sm" onclick="VideoTour.replay()">Replay Tour ↺</button>
                    </div>
                </div>
            `;
        }

        overlay.innerHTML = html;
    },

    // Canvas Background Animation
    drawCanvasFrame(timestamp) {
        if (!this.ctx || !this.canvas) return;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const ctx = this.ctx;

        ctx.clearRect(0, 0, w, h);

        // Deep space cosmic gradient
        const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, Math.max(w, h) * 0.75);
        bgGrad.addColorStop(0, '#0e1834');
        bgGrad.addColorStop(0.6, '#080d1d');
        bgGrad.addColorStop(1, '#050813');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);

        // Starfield rendering
        const timeVal = timestamp * 0.001;
        ctx.fillStyle = '#ffffff';
        this.stars.forEach(star => {
            const alpha = Math.sin(timeVal * star.twinkleSpeed * 10 + star.x * 10) * 0.3 + star.opacity;
            ctx.globalAlpha = Math.max(0.15, Math.min(1, alpha));
            const sx = (star.x * w + timeVal * star.speed * w * 2) % w;
            const sy = star.y * h;
            ctx.beginPath();
            ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1.0;

        // Dynamic Celestial Graphics based on current chapter
        const chapter = VIDEO_CHAPTERS[this.currentChapterIdx];
        const progressInChapter = (this.currentTime - chapter.timeStart) / (chapter.timeEnd - chapter.timeStart);

        if (chapter.sceneType === 'concept' || chapter.sceneType === 'gravity') {
            // Earth on left, Moon on right
            const earthX = w * 0.18;
            const earthY = h * 0.5;
            const earthRadius = Math.min(w, h) * 0.18;

            // Earth Atmosphere Glow
            const earthGlow = ctx.createRadialGradient(earthX, earthY, earthRadius * 0.8, earthX, earthY, earthRadius * 1.35);
            earthGlow.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
            earthGlow.addColorStop(1, 'transparent');
            ctx.fillStyle = earthGlow;
            ctx.beginPath();
            ctx.arc(earthX, earthY, earthRadius * 1.35, 0, Math.PI * 2);
            ctx.fill();

            // Earth Sphere
            const earthGrad = ctx.createRadialGradient(earthX - earthRadius * 0.3, earthY - earthRadius * 0.3, earthRadius * 0.1, earthX, earthY, earthRadius);
            earthGrad.addColorStop(0, '#38bdf8');
            earthGrad.addColorStop(0.7, '#0284c7');
            earthGrad.addColorStop(1, '#0c4a6e');
            ctx.fillStyle = earthGrad;
            ctx.beginPath();
            ctx.arc(earthX, earthY, earthRadius, 0, Math.PI * 2);
            ctx.fill();

            // Moon on right
            const moonX = w * 0.82;
            const moonY = h * 0.5;
            const moonRadius = earthRadius * 0.38;

            const moonGlow = ctx.createRadialGradient(moonX, moonY, moonRadius * 0.8, moonX, moonY, moonRadius * 1.5);
            moonGlow.addColorStop(0, 'rgba(251, 191, 36, 0.35)');
            moonGlow.addColorStop(1, 'transparent');
            ctx.fillStyle = moonGlow;
            ctx.beginPath();
            ctx.arc(moonX, moonY, moonRadius * 1.5, 0, Math.PI * 2);
            ctx.fill();

            const moonGrad = ctx.createRadialGradient(moonX - moonRadius * 0.25, moonY - moonRadius * 0.25, moonRadius * 0.1, moonX, moonY, moonRadius);
            moonGrad.addColorStop(0, '#fef08a');
            moonGrad.addColorStop(0.65, '#fbbf24');
            moonGrad.addColorStop(1, '#78350f');
            ctx.fillStyle = moonGrad;
            ctx.beginPath();
            ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
            ctx.fill();

            // Trajectory beam connecting Earth & Moon
            ctx.strokeStyle = 'rgba(129, 140, 248, 0.35)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(earthX + earthRadius, earthY);
            ctx.bezierCurveTo(w * 0.45, h * 0.25, w * 0.6, h * 0.3, moonX - moonRadius, moonY);
            ctx.stroke();
            ctx.setLineDash([]);

            // Pulsing communication packet moving along the beam
            const t = (timeVal * 0.5) % 1;
            const packetX = (earthX + earthRadius) * (1 - t) + (moonX - moonRadius) * t;
            const packetY = earthY + Math.sin(t * Math.PI) * -60;
            ctx.fillStyle = '#fbbf24';
            ctx.shadowColor = '#fbbf24';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(packetX, packetY, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        } else if (chapter.sceneType === 'lookalikes' || chapter.sceneType === 'apollo') {
            // High-tech scanning radar grid
            const centerX = w * 0.5;
            const centerY = h * 0.5;
            const maxR = Math.min(w, h) * 0.45;

            ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
            ctx.lineWidth = 1;
            for (let r = 40; r < maxR; r += 45) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Radar sweep line
            const sweepAngle = (timeVal * 1.2) % (Math.PI * 2);
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX + Math.cos(sweepAngle) * maxR, centerY + Math.sin(sweepAngle) * maxR);
            ctx.stroke();

            // Pulsing target beacons
            const beacons = [
                { x: centerX - 120, y: centerY - 60, label: 'Apollo 11' },
                { x: centerX + 110, y: centerY + 50, label: 'Apollo 15' },
                { x: centerX + 60, y: centerY - 90, label: 'Apollo 17' },
                { x: centerX - 160, y: centerY + 70, label: 'Atacama' }
            ];

            beacons.forEach((b, i) => {
                const pulse = Math.sin(timeVal * 3 + i) * 3 + 6;
                ctx.fillStyle = 'rgba(251, 191, 36, 0.9)';
                ctx.shadowColor = 'rgba(251, 191, 36, 0.8)';
                ctx.shadowBlur = 8;
                ctx.beginPath();
                ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
                ctx.beginPath();
                ctx.arc(b.x, b.y, pulse + 6, 0, Math.PI * 2);
                ctx.stroke();
                ctx.shadowBlur = 0;
            });
        }
    },

    // Controls & Settings
    toggleVoice() {
        this.voiceEnabled = !this.voiceEnabled;
        const icon = document.getElementById('voice-icon');
        const btn = document.getElementById('voice-toggle-btn');
        if (icon) icon.textContent = this.voiceEnabled ? '🔊' : '🔇';
        if (btn) {
            btn.title = this.voiceEnabled ? 'Mute Voice Narration' : 'Enable Voice Narration';
            btn.classList.toggle('muted', !this.voiceEnabled);
        }
        if (!this.voiceEnabled) {
            this.stopSpeech();
        } else if (this.isPlaying) {
            this.speakCurrentChapter();
        }
        this.playTone(660, 'sine', 0.05, 0.04);
    },

    toggleCaptions() {
        this.captionsEnabled = !this.captionsEnabled;
        const bar = document.getElementById('video-caption-bar');
        const btn = document.getElementById('captions-toggle-btn');
        if (bar) bar.style.display = this.captionsEnabled ? 'flex' : 'none';
        if (btn) btn.classList.toggle('active', this.captionsEnabled);
        this.playTone(740, 'sine', 0.05, 0.04);
    },

    cycleSpeed() {
        const speeds = [1.0, 1.25, 1.5];
        const curIdx = speeds.indexOf(this.playbackSpeed);
        this.playbackSpeed = speeds[(curIdx + 1) % speeds.length];

        const btn = document.getElementById('speed-btn');
        if (btn) btn.textContent = `${this.playbackSpeed.toFixed(1)}×`;

        if (this.speechUtterance && this.isPlaying) {
            this.speakCurrentChapter();
        }
        this.playTone(880, 'sine', 0.05, 0.04);
    },

    toggleTheaterMode() {
        this.isTheaterMode = !this.isTheaterMode;
        const frame = document.getElementById('video-player-frame');
        const icon = document.getElementById('theater-icon');
        const text = document.getElementById('theater-text');

        if (frame) {
            frame.classList.toggle('theater-mode', this.isTheaterMode);
            document.body.classList.toggle('theater-active', this.isTheaterMode);
        }
        if (icon) icon.textContent = this.isTheaterMode ? '✕' : '⛶';
        if (text) text.textContent = this.isTheaterMode ? 'Exit Theater' : 'Theater Mode';

        setTimeout(() => this.resizeCanvas(), 100);
        this.playTone(550, 'sine', 0.08, 0.05);
    },

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Avoid capturing input in chat or search boxes
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            if (e.code === 'Space') {
                e.preventDefault();
                this.togglePlay();
            } else if (e.key === 'm' || e.key === 'M') {
                this.toggleVoice();
            } else if (e.key === 'c' || e.key === 'C') {
                this.toggleCaptions();
            } else if (e.key === 'Escape' && this.isTheaterMode) {
                this.toggleTheaterMode();
            }
        });
    }
};

// Global helper triggers
function toggleVideoPlay() {
    VideoTour.togglePlay();
}

function replayVideo() {
    VideoTour.replay();
}

function seekVideoTimeline(event) {
    const timeline = document.getElementById('video-timeline');
    if (!timeline) return;
    const rect = timeline.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const ratio = Math.max(0, Math.min(clickX / rect.width, 1));
    VideoTour.seek(ratio * VideoTour.totalDuration);
}

function jumpToChapter(idx) {
    VideoTour.jumpToChapter(idx);
}

function toggleVoiceNarration() {
    VideoTour.toggleVoice();
}

function toggleCaptions() {
    VideoTour.toggleCaptions();
}

function cycleVideoSpeed() {
    VideoTour.cycleSpeed();
}

function toggleTheaterMode() {
    VideoTour.toggleTheaterMode();
}

function playVideoTour(autoScroll = false) {
    switchVideoMode('interactive');
    if (autoScroll) {
        const sec = document.getElementById('intro-video-section');
        if (sec) {
            sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    setTimeout(() => {
        VideoTour.play();
    }, 400);
}

function scrollToVideo(autoPlay = false) {
    const sec = document.getElementById('intro-video-section');
    if (sec) {
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (autoPlay) {
        setTimeout(() => VideoTour.play(), 600);
    }
}

// Mode Switching (Interactive Tour vs NASA Space Reel vs 3-Step Guide)
function switchVideoMode(mode) {
    VideoTour.activeMode = mode;

    document.querySelectorAll('.video-tab-btn').forEach(b => b.classList.remove('active'));
    const activeTab = document.getElementById(`tab-${mode}`);
    if (activeTab) activeTab.classList.add('active');

    const stageInteractive = document.getElementById('stage-interactive');
    const stageNasa = document.getElementById('stage-nasa');
    const stageGuide = document.getElementById('stage-guide');
    const jumpBar = document.getElementById('video-jump-bar');

    if (stageInteractive) stageInteractive.style.display = mode === 'interactive' ? 'block' : 'none';
    if (stageNasa) stageNasa.style.display = mode === 'nasa' ? 'block' : 'none';
    if (stageGuide) stageGuide.style.display = mode === 'guide' ? 'block' : 'none';
    if (jumpBar) jumpBar.style.display = mode === 'interactive' ? 'flex' : 'none';

    if (mode === 'interactive') {
        VideoTour.resizeCanvas();
    } else {
        if (VideoTour.isPlaying) {
            VideoTour.pause();
        }
    }
}

// 10-Second Concept Demo Switcher
const CONCEPT_DEMOS = {
    'atacama': {
        title: 'Arid Volcanic Plains: Atacama Desert ↔ Ocean of Storms',
        earthName: 'Atacama Desert (Chile)',
        earthImg: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
        earthReason: 'At 5,050m altitude with 0% humidity and extreme UV, it simulates bone-dry lunar regolith friction for rover wheels.',
        moonName: 'Ocean of Storms (Moon)',
        moonImg: 'assets/images/lunarorb_copernicus_000b6074.jpg',
        moonReason: 'Giant basaltic lava plain covering 4 million km². Perfect match for rover long-distance navigation trials.',
        pairId: 'pair-hyper-arid-plains'
    },
    'lanzarote': {
        title: 'Subterranean Shelters: Lanzarote Lava Tubes ↔ Marius Hills Pit',
        earthName: 'Lanzarote Lava Tube (Canary Islands)',
        earthImg: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        earthReason: 'Massive underground volcanic tunnels protect from sun and wind—identical to lunar subterranean hollows.',
        moonName: 'Marius Hills Lava Skylight (Moon)',
        moonImg: 'assets/images/art002e009287_large_68a78c5e.jpg',
        moonReason: 'A 65-meter-deep vertical skylight into a pristine underground tunnel shielding future human habitats from deadly solar radiation.',
        pairId: 'pair-volcanic-lava-tubes'
    },
    'polar': {
        title: 'Frozen Dark Traps: McMurdo Dry Valleys ↔ Shackleton Crater',
        earthName: 'McMurdo Dry Valleys (Antarctica)',
        earthImg: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80',
        earthReason: 'Coldest, driest desert on Earth with hyper-saline subglacial lakes mimicking frozen lunar ice traps.',
        moonName: 'Shackleton Crater (Lunar South Pole)',
        moonImg: 'assets/images/MalapertMassif-1_63d94d37.png',
        moonReason: 'Permanently shadowed lunar crater at 40 Kelvin (-233°C) harboring billions of tons of water ice for future bases.',
        pairId: 'pair-polar-cryo-traps'
    }
};

function selectConceptDemo(key) {
    const data = CONCEPT_DEMOS[key];
    if (!data) return;

    document.querySelectorAll('.concept-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.key === key);
    });

    const display = document.getElementById('concept-demo-display');
    if (!display) return;

    display.innerHTML = `
        <div class="demo-cards-wrapper">
            <div class="demo-card earth-card">
                <div class="demo-card-img" style="background-image: url('${data.earthImg}');">
                    <span class="demo-card-badge earth">🌍 TERRESTRIAL TESTBED</span>
                </div>
                <div class="demo-card-body">
                    <h4>${data.earthName}</h4>
                    <p>${data.earthReason}</p>
                </div>
            </div>

            <div class="demo-connector">
                <div class="demo-connector-icon">⇄</div>
                <span>NASA ANALOG MATCH</span>
            </div>

            <div class="demo-card moon-card">
                <div class="demo-card-img" style="background-image: url('${data.moonImg}');">
                    <span class="demo-card-badge moon">🌕 LUNAR TARGET</span>
                </div>
                <div class="demo-card-body">
                    <h4>${data.moonName}</h4>
                    <p>${data.moonReason}</p>
                </div>
            </div>
        </div>
        <div style="text-align: center; margin-top: 18px;">
            <button class="btn btn-primary btn-sm" onclick="openDifferentialModal('${data.pairId}')">
                Open Full Scientific Telemetry &amp; Comparison &rarr;
            </button>
        </div>
    `;
}

// 30-Second Quick Audio Briefing
let isAudioTourRunning = false;
function toggleAudioTour() {
    if (!('speechSynthesis' in window)) {
        alert("Audio narration is not supported in this browser. Please enjoy the interactive visual video player!");
        return;
    }

    if (isAudioTourRunning) {
        window.speechSynthesis.cancel();
        isAudioTourRunning = false;
        updateAudioTourBtn(false);
    } else {
        window.speechSynthesis.cancel();
        const briefScript = "Welcome to the Earth and Moon Atlas. Before astronauts journey to the Moon, NASA and space agencies test equipment in extreme places on Earth—from bone-dry Chilean deserts to underground lava caves. In this interactive atlas, you can compare seven verified lookalike pairs, test how high you can jump in the Moon's one-sixth gravity, and explore authentic Apollo moon landing sites. Scroll down or click Watch Intro Video to begin!";
        const utterance = new SpeechSynthesisUtterance(briefScript);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const voice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('David')));
        if (voice) utterance.voice = voice;

        utterance.onstart = () => {
            isAudioTourRunning = true;
            updateAudioTourBtn(true);
        };
        utterance.onend = () => {
            isAudioTourRunning = false;
            updateAudioTourBtn(false);
        };
        utterance.onerror = () => {
            isAudioTourRunning = false;
            updateAudioTourBtn(false);
        };

        window.speechSynthesis.speak(utterance);
    }
}

function updateAudioTourBtn(active) {
    const icon = document.getElementById('hero-audio-icon');
    const text = document.getElementById('hero-audio-text');
    const btn = document.getElementById('hero-audio-tour-btn');

    if (icon) icon.textContent = active ? '⏸' : '🎧';
    if (text) text.textContent = active ? 'Pause Audio Briefing' : '30s Audio Briefing';
    if (btn) btn.classList.toggle('active', active);
}

// Mount and initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    VideoTour.init();
    selectConceptDemo('atacama');
});
