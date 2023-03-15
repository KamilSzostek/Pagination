import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './components/layout/TheHeader.vue'
import BaseButton from './components/ui/BaseButton.vue'


const app = createApp(App)

app.component('TheHeader', TheHeader)
app.component('BaseButton', BaseButton)

app.mount('#app')
