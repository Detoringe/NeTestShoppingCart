import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { mainRouter } from '@/routers/mainRouter'

import './assets/main.css'

import AppRoot from './AppRoot.vue'
import { i18nConfiguration } from './i18nConfiguration'

const mainApp = createApp(AppRoot)
const mainI18n = createI18n(i18nConfiguration)
const mainStore = createPinia()

// load internationalization, pinia store and router into the vue application
mainApp.use(mainI18n)
mainApp.use(mainStore)
mainApp.use(mainRouter)

// connect the vue application with the index.html element (see id)
mainApp.mount('#mainApp')
