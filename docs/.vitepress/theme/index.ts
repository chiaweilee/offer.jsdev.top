import { h } from 'vue'
import defaultTheme from 'vitepress/theme';
import GithubStar from './components/GithubStar.vue';
import JobModelLabel from './components/JobModelLabel.vue';
import JobModels from './components/JobModels.vue';
import References from './components/References.vue';
import './styles/index.css';

export default {
  ...defaultTheme,
  Layout() {
    return h(defaultTheme.Layout, null, {
      'home-hero-after': () => h(GithubStar),
      'home-features-before': () => h(JobModelLabel),
      'home-features-after': () => h(JobModels),
      'doc-footer-before': () => h(References),
    });
  },
};
