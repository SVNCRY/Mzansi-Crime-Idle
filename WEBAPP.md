# Mzansi Crime Idle: Cross-Platform Web App Strategy

This document outlines the technical steps required to convert the static web game into an installable application across Mobile (Android/iOS) and Desktop (Windows/Linux/macOS).

## 1. Progressive Web App (PWA)
**Goal:** Allow the game to be installed directly from the browser and play offline.

### Requirements
- **Web App Manifest (`manifest.json`):**
  - Define name, short_name, theme_color, background_color.
  - Display mode: `standalone` or `fullscreen`.
  - Icons: 192x192, 512x512 (Maskable).
- **Service Worker (`sw.js`):**
  - Cache core assets (HTML, CSS, JS, Images) for offline play.
  - Handle updates when new versions are deployed.
- **HTTPS:** Required for Service Workers.

## 2. Mobile Native Wrapper (Android & iOS)
**Goal:** Publish to Google Play Store and Apple App Store.

### Recommended Tool: Capacitor (by Ionic)
Capacitor drops into any existing web project and wraps it in a native container.

### Steps
1.  **Initialize Capacitor:**
    ```bash
    npm install @capacitor/core @capacitor/cli
    npx cap init
    ```
2.  **Android:**
    - Add Android platform: `npx cap add android`
    - Sync assets: `npx cap sync`
    - Open in Android Studio to build APK/AAB.
3.  **iOS:**
    - Add iOS platform: `npx cap add ios`
    - Requires macOS and Xcode.
4.  **Plugins:**
    - Use `Storage` plugin for persistent saves (more reliable than localStorage on iOS which can be wiped by the OS).
    - Use `Haptics` plugin for vibration feedback on clicks.

## 3. Desktop Native Wrapper (Windows, macOS, Linux)
**Goal:** Publish to Steam or Itch.io as a standalone executable.

### Recommended Tool: Electron
Electron wraps the web app in a Chromium container.

### Steps
1.  **Install Electron:**
    ```bash
    npm install --save-dev electron
    ```
2.  **Main Process (`main.js`):**
    - Create a browser window loading `index.html`.
    - Remove default menu bars for game immersion.
3.  **Build/Package:**
    - Use `electron-builder` or `electron-forge` to generate `.exe`, `.dmg`, and `.deb` files.

## 4. UI/UX Adaptations
**Goal:** Ensure the interface works for both Mouse and Touch.

### Responsive Design
- **Viewport:** Ensure `<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">` is set to prevent zooming.
- **Touch Targets:** Buttons must be at least 44x44px for mobile.
- **Hover States:** Remove critical logic from `:hover` as mobile users cannot hover.
- **Context Menu:** Disable right-click context menu on the game canvas.