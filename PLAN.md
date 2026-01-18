# Project Expansion Plan: Mzansi Crime Idle

## 1. Game Extension & Balancing
**Goal:** Increase the longevity of the game loop and introduce deeper progression mechanics beyond the current "Guptas Compound Raid" end-game.

### A. Rebalancing Economy (`js/data.js`)
- **Milestone Multipliers:** Implement a system where owning specific quantities of a mission (e.g., 25, 50, 100, 200) doubles its speed or profit. This encourages "back-filling" early game missions like *Smash and Grab*.
- **Cost Scaling:** Review the `BigNumber` growth curves. Ensure the jump from "Late-game" to "End-game" requires significant engagement with the Prestige system.

### B. New Progression Tier: "Continental Kingpin"
Extend the game beyond South African borders into the SADC region.
- **New Missions (Rank 3000+):**
  - *Cross-Border Cigarettes (Zimbabwe)*
  - *Luxury Car Smuggling (Mozambique)*
  - *Oil Bunkering (Angola)*
  - *Gold Mafia Operations (Dubai Connection)*

### C. Prestige 2.0: "State Capture"
Currently, prestige resets progress for multipliers. We will add a secondary currency: **Influence**.
- **Mechanic:** Spending "Chips" allows you to buy "Ministers".
- **Minister of Police:** Reduces "Heat" (see World Expansion).
- **Minister of Energy:** Reduces costs of industrial missions (factories/mines).
- **Minister of Transport:** Boosts Taxi and Smuggling income.

## 2. World Expansion
**Goal:** Move from a static list of missions to a geographic sense of progression, utilizing the diverse regions of South Africa.

### A. Regional Unlocks
Instead of a flat list, missions will be grouped by Province. Unlocking a province requires a specific Rank or License.

#### **Gauteng (The Concrete Jungle)**
*Focus: Violent Crime & White Collar Fraud*
- **Missions:** Smash and Grab, CIT Heist, Tender Fraud, Emperors Palace Heist.
- **Unique Mechanic:** High risk, high reward.

#### **Mpumalanga (The Powerhouse)**
*Focus: Energy & Coal*
- **Missions:** Coal Truck Hijacking, Eskom Sabotage, Kruger Park Raids.
- **Unique Mechanic:** "Load Shedding" - Global income fluctuates based on grid stability.

#### **Limpopo (The Gateway)**
*Focus: Smuggling & Wildlife*
- **Missions:** Cigarette Smuggling (Beitbridge), Rhino Horn Poaching, Game Farm Laundering.
- **Unique Mechanic:** "Border Control" - RNG chance to lose shipment vs high reward.

#### **North West (The Platinum Belt)**
*Focus: Mining & Gambling*
- **Missions:** Illegal Platinum Mining, Sun City Casino Rigging.
- **Unique Mechanic:** "Zama Zama Tunnels" - High risk of collapse vs massive payout.

#### **Free State (The Breadbasket)**
*Focus: Agriculture & Gold*
- **Missions:** Grain Silo Theft, Illegal Gold Processing, Lesotho Border Contraband.
- **Unique Mechanic:** "Harvest Season" - Seasonal income boosts.

#### **Northern Cape (The Desert)**
*Focus: Diamonds & Solar*
- **Missions:** Diamond Smuggling (Kimberley), Solar Farm Cable Theft.
- **Unique Mechanic:** "Isolation" - Lower police heat but higher mission unlock costs.

#### **KwaZulu-Natal (The Harbor)**
*Focus: Logistics & Import/Export*
- **Missions:** Sugar Cane Arson, Container Theft, Cross-Border Car Syndicate.
- **Unique Mechanic:** Shipping routes that deliver bulk cash periodically rather than per second.

#### **Eastern Cape (The Windy City)**
*Focus: Automotive & Livestock*
- **Missions:** Cattle Rustling, VW Plant Heist, University Tender Scams.
- **Unique Mechanic:** "Strike Action" - Temporarily halts production but increases future payouts.

#### **Western Cape (The Ganglands)**
*Focus: Organized Crime & Export*
- **Missions:** Perlemoen Smuggling, Tik Labs, Tourist Extortion, Parliament Takeover.
- **Unique Mechanic:** "Turf" control increases passive income.

### B. The "Heat" System (Wanted Level)
Reintroduce a mechanic inspired by the original GTA theme but adapted for Idle.
- **Mechanic:** High-value crimes (CIT Heists, ATM Bombings) generate **Heat**.
- **Consequence:** High Heat reduces global income efficiency (representing money lost to bribes and hiding).
- **Mitigation:**
  - Active: Pay "Bribes" (Cash sink).
  - Passive: Buy "Legal Fronts" (Car Washes, Shisanyamas) to launder money and lower Heat.

## 3. Asset & UI Updates
- **Map Interface:** Replace the simple list tab with a stylized map of SA. Clicking a province opens the mission list for that area.
- **UI Redesign:** Move from data tables to a Card-based interface
- **Visual Progression:** The background image (`images/bg.webp`) should change based on the highest unlocked region (e.g., Table Mountain for WC, Ponte Tower for Gauteng).

## 4. Platform Strategy
**Goal:** Make the game accessible on all devices via Progressive Web App (PWA) standards and native wrappers.

### A. Progressive Web App (PWA)
- **Offline Play:** Service Workers to cache assets.
- **Installable:** Web App Manifest to allow "Add to Home Screen".

### B. Native Wrappers
- **Mobile:** Use **Capacitor** to publish to Play Store/App Store.
- **Desktop:** Use **Electron** to publish to Steam/Itch.io.
- **UI Adaptation:** Ensure touch targets are accessible (44x44px) and remove hover-dependent logic.

---
*This plan aims to transition the game from a simple clicker to a strategy-lite management game.*