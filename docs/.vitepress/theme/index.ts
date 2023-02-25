import { h } from 'vue'
import defaultTheme from 'vitepress/theme';
import LayoutBottom from './components/LayoutBottom.vue';
import JobModels from './components/JobModels.vue';
import './styles/index.css';

export default {
  ...defaultTheme,
  Layout() {
    return h(defaultTheme.Layout, null, {
      'layout-bottom': () => h(LayoutBottom),
      'home-features-before': () => h(JobModels),
    });
  },
};
