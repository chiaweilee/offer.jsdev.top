<script setup lang="ts">
if (!document.querySelector('.gh-count')) {
  fetch('https://api.github.com/repos/html-js/html-js.github.io')
    .then((response) => response.json())
    .then((response) => {
      if (typeof response?.stargazers_count === 'number') {
        const action = document.createElement('a');
        action.className = 'gh-count';
        action.rel = 'noreferrer';
        action.target = '_blank';
        action.href = 'https://github.com/html-js/html-js.github.io';
        action.textContent = response.stargazers_count.toLocaleString('en-US');
        const container = document.querySelector('.VPHome .VPHero.VPHomeHero .container .actions');
        container?.appendChild(action);
      }
    });
}
</script>
