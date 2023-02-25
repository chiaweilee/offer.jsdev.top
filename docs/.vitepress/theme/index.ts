import { h } from 'vue'
import defaultTheme from 'vitepress/theme';
import JobModelLabel from './components/JobModelLabel.vue';
import JobModels from './components/JobModels.vue';
import References from './components/References.vue';
import './styles/index.css';

export default {
  ...defaultTheme,
  Layout() {
    return h(defaultTheme.Layout, null, {
      'home-features-before': () => h(JobModelLabel),
      'home-features-after': () => h(JobModels),
      'doc-footer-before': () => h(References),
    });
  },
};
