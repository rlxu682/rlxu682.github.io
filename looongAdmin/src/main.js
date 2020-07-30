import Vue from 'vue';
// import VueMarkdownEditor from '@kangc/v-md-editor';
import App from './App.vue';
import Routers from './router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// import '@kangc/v-md-editor/lib/style/base-editor.css';
// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

// import VMdPreview from '@kangc/v-md-editor/lib/preview';
// import '@kangc/v-md-editor/lib/style/preview.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

Vue.config.productionTip = false

Vue.use(ViewUI);

// VueMarkdownEditor.use(vuepressTheme);
// Vue.use(VueMarkdownEditor);

// VMdPreview.use(createLineNumbertPlugin());
// VMdPreview.use(githubTheme);
// Vue.use(VMdPreview);

new Vue({
  router: Routers,
  render: h => h(App),
}).$mount('#app')