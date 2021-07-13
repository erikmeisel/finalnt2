import Vue from 'vue'
import App from './App.vue'

function cambioLetra(letra) {
  switch (letra) {
    case 'a': return 'u'
    case 'e': return 'o'
    case 'o': return 'e'
    case 'u': return 'a'
    default: return letra
  }
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.filter('lcase', function(value) {
  return value.toLowerCase()
})
Vue.filter('ucase', function(value) {
  return value.toUpperCase()
})
Vue.filter('lcasemix', function(value) {
  let r = value.split("").map(function(letra,idx) {
    if (idx%2==0) { 
      letra = letra.toLowerCase()
    } else {
      letra = letra.toUpperCase()
    }
    return letra
  }).join("")
  return r
})
Vue.filter('ucasemix', function(value) {
  let r = value.split("").map(function(letra,idx) {
    if (idx%2!=0) { 
      letra = letra.toLowerCase()
    } else {
      letra = letra.toUpperCase()
    }
    return letra
  }).join("")
  return r
})
Vue.filter('coded', function(value) {
  let r = value.toLowerCase();
  let m = r.split("").map(letra => cambioLetra(letra)).join("")
  return m
})
