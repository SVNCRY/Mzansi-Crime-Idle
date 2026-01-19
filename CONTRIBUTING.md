# Contributing to Mzansi Crime Idle

First off, thank you for considering contributing to Mzansi Crime Idle! It's people like you that make the open-source community such an amazing place to learn, inspire, and create.

## ⚖️ Legal: The Contributor License Agreement (CLA)

This project uses a **Dual-License** model to ensure the game remains open-source while allowing the developers to publish on commercial platforms (like Steam, App Store, Google Play) to support the project's costs.

**By submitting a Pull Request (PR) to this repository, you agree to the following:**

1.  **Copyright Grant:** You grant the project maintainers (`Mzansi Crime Idle Developers`) a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, sublicense, and distribute your contributions and such derivative works.
2.  **Relicensing:** You explicitly grant the project maintainers the right to relicense your contributions under different terms (including proprietary/commercial licenses) for the purpose of distributing the game on closed platforms (e.g., Steam, Mobile Stores).
3.  **Originality:** You represent that your contributions are your original work and/or that you have the right to grant the rights contained in this agreement.

*If you do not agree to these terms, please do not submit a Pull Request.*

## 🛠️ Tech Stack

- **Core:** HTML5, CSS3, JavaScript (ES6+)
- **UI Framework:** Tailwind CSS + DaisyUI
- **Libraries:** jQuery, BigNumber.js, Lodash
- **Build Tool:** Currently static HTML/JS.

## 📏 Coding Standards

To keep the codebase clean and maintainable, please adhere to the following guidelines:

### JavaScript
- **Variables:** Use `const` and `let`. Avoid `var`.
- **Formatting:** Use Tabs for indentation.
- **Documentation:** Use JSDoc comments for all new functions.
    ```javascript
    /**
     * Calculates the total income based on multipliers.
     * @param {number} baseAmount - The base cash value.    
     * @returns {number} The final calculated amount.
     */
    function calculateIncome(baseAmount) { ... }
    ```
- **Naming:** Use `camelCase` for variables and functions. Use `UPPER_SNAKE_CASE` for constants.

### CSS / UI
- **Utility-First:** Use Tailwind CSS utility classes whenever possible. Avoid writing custom CSS in `style.css` unless absolutely necessary.
- **Components:** Use DaisyUI component classes (e.g., `btn`, `card`) to maintain visual consistency.

## 🚀 How to Contribute

1.  **Fork** the repository on GitHub.
2.  **Clone** your fork locally.
3.  **Create a Branch** for your feature or fix (`git checkout -b feature/amazing-feature`).
4.  **Commit** your changes with clear messages.
5.  **Push** to your branch (`git push origin feature/amazing-feature`).
6.  **Open a Pull Request** targeting the `main` branch.

## 🐞 Reporting Bugs

If you find a bug, please open an issue on GitHub. Include:
- Steps to reproduce.
- Expected behavior.
- Screenshots (if applicable).

Thank you for helping make Mzansi Crime Idle better! 🇿🇦