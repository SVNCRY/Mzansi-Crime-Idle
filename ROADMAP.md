# Mzansi Crime Idle: Development Roadmap

This document outlines the planned update schedule, transitioning the game from a simple clicker to a feature-rich strategy management game with multiplayer elements.

> **Visual Overview:** See [VISUAL_ROADMAP.md](VISUAL_ROADMAP.md) for a flowchart of these updates.

## Phase 1: Core Mechanics & World Building

### v1.1: The Economy Update
**Goal:** Solidify the base game loop and fix pacing issues before expanding the world.
- **Economy Rebalance:** Implement milestone multipliers (e.g., x2 speed/profit at 25, 50, 100 owned) to encourage back-filling early missions.
- **Cost Scaling:** Adjust `BigNumber` growth curves to smooth the transition from Mid-game to Late-game.
- **UI Polish:** Prepare the interface for the upcoming Map tab.

### v1.2: The Provincial Tour (World Expansion Part 1)
**Goal:** Implement the geographic progression system defined in `MAP.md`.
- **Map Interface:** Replace the simple mission list with an interactive map of South Africa.
- **Regional Unlocks (The Interior):**
  - **Gauteng:** The starting hub. High risk, high reward.
  - **Mpumalanga:** Introduces "Load Shedding" mechanic (fluctuating global income).
  - **Limpopo:** Introduces "Border Control" mechanic (RNG risk on shipments).
  - **North West:** Introduces "Zama Zama" mechanic (High collapse risk vs massive payout).
- **Visual Progression:** Background changes based on the highest unlocked region.

### v1.3: The Coast & The Law (World Expansion Part 2)
**Goal:** Complete the South African journey and introduce risk management.
- **Regional Unlocks (The Coast):**
  - **Free State:** Seasonal income boosts ("Harvest Season").
  - **KwaZulu-Natal:** Bulk cash shipping routes (periodic vs per-second income).
  - **Western Cape:** Turf control passive income.
- **Heat System:**
  - High-value crimes (CIT Heists, etc.) generate **Heat**.
  - **Consequences:** High heat reduces income efficiency.
  - **Mitigation:** Buy "Legal Fronts" (Car Washes, Shisanyamas) to launder money.

## Phase 2: Deep Progression

### v1.4: State Capture (Prestige 2.0)
**Goal:** Add meaningful long-term play beyond simple multipliers.
- **New Currency:** **Influence** (gained via Prestige resets).
- **Cabinet Ministers:** Spend Influence to buy permanent upgrades.
  - *Minister of Police:* Reduces Heat generation.
  - *Minister of Energy:* Reduces costs of industrial missions.
  - *Minister of Transport:* Boosts Taxi and Smuggling income.

### v1.5: Continental Kingpin
**Goal:** End-game content for Rank 3000+ players.
- **SADC Expansion:** Unlock missions outside SA borders (Zimbabwe, Mozambique, Dubai).
- **New Missions:** Cross-border Cigarettes, Gold Mafia Operations.

## Phase 3: Mzansi Online (Multiplayer)

### v2.0: The Syndicate Update
**Goal:** Introduce social cooperation and seasonal play.
- **Syndicates (Co-op):** Players can form "Stokvels" (Guilds).
- **The Pot:** Members contribute a % of income to a communal pool.
- **Syndicate Upgrades:** Leaders spend The Pot to buy buffs for all members (e.g., "Better Lawyers").
- **Seasons:**
  - Introduction of server-wide wipes (e.g., every 3 months).
  - Influence and Cosmetic Badges persist across seasons.

### v2.1: Streets on Lock (Events)
**Goal:** Dynamic competitive events within the season.

#### Event A: Taxi Wars (Faction PvP)
*Asynchronous territory control.*
- **Factions:** Players align with a Taxi Association (Red Route vs Blue Route).
- **Conflict:** Assign crews to attack/defend specific routes.
- **Reward:** Winning faction gets premium currency generation for that week.

#### Event B: The Heist (1v1 Raids)
*High-stakes PvP.*
- **The Stash:** Players have an "Unlaundered Cash" pile (cash earned since last login).
- **Defense:** Buy security (Dogs, Electric Fences) to increase Defense Score.
- **Attack:** Raid other players to steal 1-5% of their Unlaundered Cash.
- **Revenge:** Victims get a "Revenge" tag for a counter-attack bonus.

---

## Technical Roadmap
### v1.x: Client-Side & PWA
- **Core:** Client-side only. Save data stored in `localStorage`.
- **PWA:** Implement `manifest.json` and Service Workers for offline play and installability.

### v2.0: Online Infrastructure
- **Backend:** Node.js + Socket.io/Firebase.
- **Auth:** Google/Simple ID to link saves across devices.
- **Security:** Server-side validation for leaderboards.

### v2.x: Cross-Platform Wrappers
- **Mobile (Android/iOS):** Use Capacitor to wrap the web app. Implement native plugins for Haptics and Storage.
- **Desktop (Windows/Linux/macOS):** Use Electron for standalone executables (Steam/Itch.io).

## Future Updates & Sustainability (Live Ops)
**Goal:** Maintain player retention through dynamic content and community engagement.

### Seasonal Rotations
- **Global Modifiers:** Each season introduces a unique twist (e.g., "The Gold Rush" boosts mining income but increases Heat generation).
- **Limited Time Events:** Weekend events with boosted rates for specific factions or mission types.

### Community Engagement
- **The Ballot Box:** Players use Influence to vote on the next feature or region to be developed.
- **Creator Program:** Allow community members to submit designs for new Weapons or Hustles.
