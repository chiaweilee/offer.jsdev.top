import { h } from 'vue'
import defaultTheme from 'vitepress/theme';
import JobModels from './components/JobModels.vue';
import './styles/index.css';

export default {
  ...defaultTheme,
  Layout() {
    return h(defaultTheme.Layout, null, {
      'home-features-before': () => h(JobModels),
    });
  },
};
