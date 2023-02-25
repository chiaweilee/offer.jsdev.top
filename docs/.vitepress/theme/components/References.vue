<script setup lang="ts">
import { useData } from 'vitepress';

const { frontmatter } = useData();

const reference = frontmatter.value['reference'];
</script>

<template>
  <dl class="reference" v-if="reference">
    <dt class="reference-title">参考资料</dt>
    <dd class="reference-list-wrap">
      <ul class="reference-list">
        <li v-for="ref in reference" class="reference-item">
          <span class="index">-</span>
          <a :href="ref.href" rel="noreferrer" target="_blank" class="text"
            >{{ ref.title }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              class="icon"
              data-v-a3a1daca=""
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
            </svg>
          </a>
          <span class="site">{{ ref.site }}</span>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<style scoped>
.reference {
  margin: 48px 0 16px;
}
.reference-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 8px;
  transition: color 0.25s;
}
.reference-list-wrap {
  margin: 4px 8px;
}
.index {
  font-size: 12px;
  padding-right: 8px;
}
.site {
  margin: 0 8px;
  font-size: 12px;
}
.text {
  font-size: 12px;
}
.icon {
  display: inline-block;
  margin-top: -1px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  fill: var(--vp-c-text-3);
  transition: fill 0.25s;
}
</style>
