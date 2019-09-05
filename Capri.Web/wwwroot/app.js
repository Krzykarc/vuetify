import App from '@src/app.vue';
import { Vue } from 'vue-property-decorator';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.scss';
import 'material-design-icons-iconfont/dist/material-design-icons.scss';
Vue.use(Vuetify);
if (module['hot']) {
    module['hot'].accept();
}
new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    render: function (h) { return h(App); },
});
//# sourceMappingURL=app.js.map