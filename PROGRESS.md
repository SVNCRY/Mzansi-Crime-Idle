# Project Conversion: GTA V -> South African Crime Theme

## Phase 1: Conceptual Design & Terminology
- [x] **Currency:** Change `$` to `R` (Rand).
- [ ] **Slang:** Incorporate SA slang (bra, china, tsotsi, gatas).
- [ ] **Narrative:** Rewrite tutorial for SA setting (Township/Joburg CBD to start).

## Phase 2: Data Overhaul (`js/data.js`)
- [x] **Missions:** Rename GTA V heists to SA equivalents (e.g., CIT Heist, Taxi Wars).
- [x] **Weapons:** Rename generic weapons to local variants (e.g., Okapi, R5 Rifle, Sjambok).
- [x] **Achievements:** Update names/descriptions to match new missions.
- [x] **Tutorial & UI Text:** Rewrite intro text.

## Phase 3: UI & Visual Updates (`js/ui.js`)
- [x] **Currency Symbols:** Replace icons and strings with `R`.
- [x] **Formatting:** Ensure currency formatting is correct.
- [ ] **Colors/Styling:** (Optional) Shift towards SA flag colors or Gold/Black aesthetic.

## Phase 4: System & Save Data (`js/utils.js` & `js/core.js`)
- [x] **Save Key:** Changed to `idleSA1` to prevent conflicts.
- [ ] **Logic Checks:** Verify no hardcoded string dependencies remain.

## Phase 5: Asset Replacement
- [ ] **Images:** Replace weapon images in `images/weapons/` and update paths in `data.js`.

---

### Current Status
- **Phase 1:** Partially Complete (Currency done).
- **Phase 2:** Complete.
- **Phase 3:** Partially Complete (Currency symbols done).
- **Phase 4:** Partially Complete (Save key done).
- **Phase 5:** Not Started.

### Next Steps
1. Rename Missions in `js/data.js`.
2. Rename Weapons in `js/data.js`.
3. Update Achievements and Text in `js/data.js`.