# Test Project Shooping Cart Docs

This project was created with the following command (official recommended way to start a new vue project with vite and typescript support)

Short description of steps done to provide the test project:

```sh
# https://github.com/vuejs/create-vue
npm create vue@latest
```

- added `@tailwindcss/vite` and `tailwindcss` npm-packages for tailwind integration
- adjusted `.vscode/settings.json`-file for tailwind integration

```json
"files.associations": {
  "*.css": "tailwindcss"
},
"tailwindCSS.classAttributes": ["class", "className", "ngClass", "class:list", ".*Style.*"]
```

- added `vue-i18n` for internationalization (not using static string values in html files)

<!-- to see the difference what was created from the vue project creation and what was added new, using the same structuring from the vue project -->

- added `task`-directory to seperate the new created structure of the files for the task from the main project structure (form creating a vue project)

- adjusted path definitions in `tsconfig.app.json` and `vite.config.ts`-files to have simpler import paths

- added asset from the figma design ("imageCrossRoundBlack")

End of short description

<!-- The following lines are created from the vue project initialization -->

# vue-shopping-cart-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
