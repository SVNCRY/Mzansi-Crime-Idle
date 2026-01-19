// Map Logic for Mzansi Crime Idle
// Handles region unlocking and progression based on MAP.md

const regions = {
    0: { id: 0, name: "Gauteng", subtitle: "The Concrete Jungle", focus: "Violent Crime & Fraud", reqRank: 0, phase: 1, img: "images/bg/gauteng.webp" },
    1: { id: 1, name: "Mpumalanga", subtitle: "The Powerhouse", focus: "Energy & Coal", reqRank: 50, phase: 1, img: "images/bg/mpumalanga.webp" },
    2: { id: 2, name: "Limpopo", subtitle: "The Gateway", focus: "Smuggling & Wildlife", reqRank: 150, phase: 1, img: "images/bg/limpopo.webp" },
    3: { id: 3, name: "North West", subtitle: "The Platinum Belt", focus: "Mining & Gambling", reqRank: 300, phase: 1, img: "images/bg/northwest.webp" },
    4: { id: 4, name: "Free State", subtitle: "The Breadbasket", focus: "Agriculture & Gold", reqRank: 500, phase: 2, img: "images/bg/freestate.webp" },
    5: { id: 5, name: "Northern Cape", subtitle: "The Desert", focus: "Diamonds & Solar", reqRank: 800, phase: 2, img: "images/bg/northerncape.webp" },
    6: { id: 6, name: "KwaZulu-Natal", subtitle: "The Harbor", focus: "Logistics & Import/Export", reqRank: 1200, phase: 3, img: "images/bg/kzn.webp" },
    7: { id: 7, name: "Eastern Cape", subtitle: "The Windy City", focus: "Automotive & Livestock", reqRank: 1800, phase: 3, img: "images/bg/easterncape.webp" },
    8: { id: 8, name: "Western Cape", subtitle: "The Ganglands", focus: "Organized Crime & Parliament", reqRank: 2500, phase: 3, img: "images/bg/westerncape.webp" },
    9: { id: 9, name: "Continental Kingpin", subtitle: "Africa is yours", focus: "International Smuggling", reqRank: 5000, phase: 4, img: "images/bg/africa.webp" }
};

/**
 * Checks if a specific region is unlocked based on player rank.
 * @param {number} regionId 
 * @returns {boolean}
 */
function isRegionUnlocked(regionId) {
    if (regions[regionId] === undefined) return false;
    // Ensure p (player object) is available from core.js
    if (typeof p === 'undefined') return false;
    
    return p.rank >= regions[regionId].reqRank;
}

/**
 * Returns a list of all currently unlocked regions.
 * @returns {Array}
 */
function getUnlockedRegions() {
    const unlocked = [];
    for (const key in regions) {
        if (isRegionUnlocked(key)) {
            unlocked.push(regions[key]);
        }
    }
    return unlocked;
}

/**
 * Returns the next region object that needs to be unlocked.
 * @returns {Object|null}
 */
function getNextRegionToUnlock() {
    for (const key in regions) {
        if (!isRegionUnlocked(key)) {
            return regions[key];
        }
    }
    return null; // All regions unlocked
}

/**
 * Calculates the percentage progress towards the next region unlock.
 * @param {number} regionId - The ID of the region we are trying to unlock
 * @returns {number} Percentage (0-100)
 */
function getRegionUnlockProgress(regionId) {
    if (isRegionUnlocked(regionId)) return 100;
    if (typeof p === 'undefined') return 0;

    const currentReq = regions[regionId].reqRank;
    let prevReq = 0;
    
    // Find the requirement of the previous region to calculate relative progress
    if (regionId > 0) {
        prevReq = regions[regionId - 1].reqRank;
    }

    if (currentReq <= prevReq) return 100; // Avoid division by zero

    const progress = ((p.rank - prevReq) / (currentReq - prevReq)) * 100;
    return Math.max(0, Math.min(100, progress));
}

/**
 * Returns the highest rank region currently unlocked.
 * @returns {Object|null}
 */
function getHighestUnlockedRegion() {
    let highest = null;
    for (const key in regions) {
        if (isRegionUnlocked(key)) {
            if (!highest || regions[key].reqRank > highest.reqRank) {
                highest = regions[key];
            }
        }
    }
    return highest;
}