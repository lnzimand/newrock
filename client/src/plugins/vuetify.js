// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#42A5F6',
        secondary: '#050B1F',
        accent: '#e3b34c',
      },
      dark: {
        primary: '#50778D',
        secondary: '#0B1C6D',
        accent: '#e3b34c',
      },
    },
  },
})
// import {
//   VCol,
//   VRow,
// } from 'vuetify/lib'

// Vue.use(Vuetify, {
//   components: {
//     VCol,
//     VRow,
//   },
// })

// export default new Vuetify({
//   theme: {
//     dark: false,
//     themes: {
//       light: {
//         primary: '#42a5f6',
//         secondary: '#050b1f',
//         accent: '#e3b34c',
//       },
//       dark: {},
//     },
//   },
// })
