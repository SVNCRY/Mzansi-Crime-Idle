# Tailwind CSS Component Libraries

Since we have decided to use **Tailwind CSS** for the UI redesign, we need a component library to speed up development and ensure consistency without writing every utility class from scratch.

Here are 12 options that work well with Tailwind, focusing on those compatible with our current Vanilla JS/HTML structure.

## 1. DaisyUI (Highly Recommended)
**Type:** Tailwind CSS Plugin (Component Classes)
**Website:** daisyui.com

*   **Concept:** Adds component classes like `btn`, `card`, `modal` to Tailwind. It keeps HTML clean.
*   **Pros:**
    *   **Clean HTML:** Writes like Bootstrap (`class="btn btn-primary"`) but compiles to Tailwind utilities.
    *   **Theming:** 29+ built-in themes (Cyberpunk, Dark, Luxury) perfect for a game.
    *   **No JS:** Pure CSS for most things (uses checkboxes for toggle state), easy to integrate with existing logic.
*   **Cons:** Requires a build step (PostCSS/Tailwind CLI) to use the plugin effectively.

## 2. Konsta UI (Best for Mobile/PWA)
**Type:** Mobile UI components
**Website:** konstavar.com

*   **Concept:** Pixel-perfect iOS and Material Design components built with Tailwind.
*   **Pros:**
    *   **Native Feel:** Looks exactly like a mobile app.
    *   **PWA Aligned:** Perfect for the roadmap goals (Mobile Wrapper).
*   **Cons:** Primarily designed for React/Vue/Svelte, but has a Core version for Vanilla JS.

## 3. Flowbite
**Type:** Components + JS
**Website:** flowbite.com

*   **Pros:** Huge library, interactive components (modals, dropdowns) come with a vanilla JS script tag.
*   **Cons:** Can look a bit "Corporate/SaaS" out of the box.

## 4. HyperUI
**Type:** Copy-paste HTML
**Website:** hyperui.dev

*   **Pros:** Free, open source, just copy the HTML snippet and paste it. No installation required.
*   **Cons:** You have to manage the code yourself; updating means re-copying.

## 5. Mamba UI
**Type:** Modular Components
**Website:** mambaui.com

*   **Pros:** Extensive collection of UI blocks and components.
*   **Cons:** Styling is very neutral, might need heavy customization for a "Crime Game" vibe.

## 6. Preline UI
**Type:** Pre-designed components
**Website:** preline.co

*   **Pros:** Good dark mode support, extensive documentation.
*   **Cons:** Heavy reliance on their specific JS for interactivity.

## 7. Ripple UI
**Type:** Tailwind Plugin
**Website:** ripple-ui.com

*   **Pros:** Similar to DaisyUI, provides semantic classes.
*   **Cons:** Smaller community than DaisyUI.

## 8. Meraki UI
**Type:** Hand-crafted components
**Website:** merakiui.com

*   **Pros:** Beautiful, modern designs. RTL support.
*   **Cons:** Smaller selection compared to Flowbite.

## 9. Tailwind Elements
**Type:** Material Design for Tailwind
**Website:** tailwind-elements.com

*   **Pros:** If you want the Google Material Design look but with Tailwind utility classes.
*   **Cons:** Might feel too "Android" and less "Game".

## 10. Sailboat UI
**Type:** Modern UI components
**Website:** sailboatui.com

*   **Pros:** 150+ open source components.
*   **Cons:** Basic set.

## 11. FlyonUI
**Type:** Semantic component library
**Website:** flyonui.com

*   **Pros:** Headless, accessible, semantic class names.
*   **Cons:** Newer, less battle-tested.

## 12. Wicked Blocks
**Type:** Layout Blocks
**Website:** wickedblocks.dev

*   **Pros:** Great for layout structures (grids, headers, footers).
*   **Cons:** Not a full component system (buttons/inputs might be missing).

---

## Recommendation for Mzansi Crime Idle

1.  **DaisyUI:** If you want to keep the "Game" vibe with themes like "Luxury" or "Dark" and want easy-to-read HTML classes.
2.  **Konsta UI:** If the priority is strictly the **Mobile App** feel for the PWA release.