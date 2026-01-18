# Mzansi Crime Idle: Development Roadmap

This document outlines the planned update schedule, transitioning the game from a simple clicker to a feature-rich strategy management game with multiplayer elements.

> **Visual Overview:** See [VISUAL_ROADMAP.md](VISUAL_ROADMAP.md) for a flowchart of these updates.

## Phase 1: Core Mechanics & World Building

### v1.1: The Economy Update
**Goal:** Solidify the base game loop and fix pacing issues before expanding the world.
- **Economy Rebalance:**
  - [ ] Implement milestone multipliers (e.g., x2 speed/profit at 25, 50, 100 owned).
  - [ ] Update `js/core.js` to calculate and apply these multipliers.
  - [ ] Add visual indicators in the UI for the next milestone.
- **Cost Scaling:**
  - [ ] Analyze `BigNumber` growth curves.
  - [ ] Adjust `cost_scale` in `js/data.js` to smooth the Mid-game to Late-game transition.
- **UI Polish:**
  - [ ] Refactor CSS for better mobile responsiveness.
  - [x] **Framework Decision:** Selected **Tailwind CSS**.
  - [x] **Component Library:** Selected **DaisyUI**.
  - [x] **Build Setup:** Configured Tailwind + DaisyUI build pipeline.
  - [ ] **Implementation:** Convert Mission/Weapon lists from Tables to Cards (Option 1).
  - [ ] Prepare the interface (tabs/layout) for the upcoming Map tab.

### v1.2: The Provincial Tour (World Expansion Part 1)
**Goal:** Implement the geographic progression system defined in `MAP.md`.
- **Map Interface:**
  - [ ] Create interactive Map UI (SVG or HTML Canvas).
  - [ ] Implement logic to replace the simple mission list with the Map view.
  - [ ] Add region selection handlers.
- **Regional Unlocks (The Interior):**
  - [ ] **Gauteng:** Setup as the starting hub (High risk, high reward).
  - [ ] **Mpumalanga:** Implement "Load Shedding" mechanic (Global income fluctuation timer).
  - [ ] **Limpopo:** Implement "Border Control" mechanic (RNG risk on specific missions).
  - [ ] **North West:** Implement "Zama Zama" mechanic (Collapse risk vs massive payout).
- **Visual Progression:**
  - [ ] Implement dynamic background changing based on the highest unlocked region.

### v1.3: The Coast & The Law (World Expansion Part 2)
**Goal:** Complete the South African journey and introduce risk management.
- **Regional Unlocks (The Coast):**
  - [ ] **Free State:** Implement "Harvest Season" (Seasonal income boosts).
  - [ ] **KwaZulu-Natal:** Implement "Shipping Routes" (Bulk periodic cash delivery).
  - [ ] **Western Cape:** Implement "Turf Control" passive income scaling.
- **Heat System:**
  - [ ] Add `Heat` variable to game state.
  - [ ] Assign Heat generation to high-value crimes (CIT Heists, etc.).
  - [ ] Implement consequences: High heat reduces global income efficiency.
  - [ ] Implement mitigation: Add "Legal Fronts" (Car Washes, Shisanyamas) to launder money/reduce heat.
  - [ ] Add UI for Wanted Level.

## Phase 2: Deep Progression

### v1.4: State Capture (Prestige 2.0)
**Goal:** Add meaningful long-term play beyond simple multipliers.
- **Influence System:**
  - [ ] Add **Influence** currency to save data.
  - [ ] Implement Prestige reset logic to award Influence based on progress.
- **Cabinet Ministers:**
  - [ ] Create "Cabinet" UI.
  - [ ] **Minister of Police:** Implement upgrade to reduce Heat generation.
  - [ ] **Minister of Energy:** Implement upgrade to reduce industrial mission costs.
  - [ ] **Minister of Transport:** Implement upgrade to boost Taxi and Smuggling income.

### v1.5: Continental Kingpin
**Goal:** End-game content for Rank 3000+ players.
- **SADC Expansion:**
  - [ ] Add UI support for missions outside SA borders.
  - [ ] Implement unlocking logic for Zimbabwe, Mozambique, Dubai.
- **New Content:**
  - [ ] Add Cross-border Cigarettes missions.
  - [ ] Add Gold Mafia Operations.

## Phase 3: Mzansi Online (Multiplayer)

### v2.0: The Syndicate Update
**Goal:** Introduce social cooperation and seasonal play.
- **Infrastructure:**
  - [ ] Set up Node.js backend with Socket.io.
  - [ ] Implement Auth system (Google/Simple ID).
  - [ ] Design Database schema.
- **Syndicates (Co-op):**
  - [ ] Implement "Stokvels" (Guilds) creation and joining.
  - [ ] Implement "The Pot" (Communal pool) contribution logic.
  - [ ] Implement Syndicate Upgrades (Leader spending).
- **Seasons:**
  - [ ] Implement server-wide wipe logic (e.g., 3-month cycle).
  - [ ] Ensure Influence and Cosmetic Badges persist across wipes.

### v2.1: Streets on Lock (Events)
**Goal:** Dynamic competitive events within the season.
- **Event A: Taxi Wars (Faction PvP):**
  - [ ] Implement Faction selection (Red Route vs Blue Route).
  - [ ] Implement asynchronous territory control logic.
  - [ ] Implement reward distribution (Premium currency).
- **Event B: The Heist (1v1 Raids):**
  - [ ] Implement "Unlaundered Cash" mechanic (Stash).
  - [ ] Implement Defense upgrades (Dogs, Electric Fences).
  - [ ] Implement Raiding logic (Steal % of Unlaundered Cash).
  - [ ] Implement Revenge tagging system.

---

## Technical Roadmap
### v1.x: Client-Side & PWA
- **Core:**
  - [ ] Maintain `localStorage` save system.
- **PWA:**
  - [ ] Create `manifest.json`.
  - [ ] Implement Service Workers for offline play.
  - [ ] Verify "Add to Home Screen" functionality.

### v2.0: Online Infrastructure
- **Backend:**
  - [ ] Develop Node.js + Socket.io/Firebase backend.
  - [ ] Implement Auth system to link saves.
- **Security:**
  - [ ] Implement server-side validation for leaderboards.

### v2.x: Cross-Platform Wrappers
- **Mobile (Android/iOS):**
  - [ ] Integrate Capacitor.
  - [ ] Implement native Haptics plugin.
  - [ ] Implement native Storage plugin.
- **Desktop (Windows/Linux/macOS):**
  - [ ] Integrate Electron.
  - [ ] Configure build pipeline for standalone executables.

## Future Updates & Sustainability (Live Ops)
**Goal:** Maintain player retention through dynamic content and community engagement.

### Seasonal Rotations
- [ ] **Global Modifiers:** Design unique twists for future seasons (e.g., "The Gold Rush").
- [ ] **Limited Time Events:** Schedule weekend events with boosted rates.

### Community Engagement
- [ ] **The Ballot Box:** Implement voting system using Influence.
- [ ] **Creator Program:** Create submission forms for community designs.
