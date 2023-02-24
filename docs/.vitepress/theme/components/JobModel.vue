<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme';
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import VPIconArrowRight from 'vitepress/dist/client/theme-default/components/icons/VPIconArrowRight.vue';

defineProps<{
  icon?: DefaultTheme.FeatureIcon;
  title: string;
  subtitle: string;
  details: string;
  link?: string;
  linkText?: string;
}>();
</script>

<template>
  <VPLink class="VPFeature" :href="link" :no-icon="true">
    <article class="box">
      <VPImage
        v-if="typeof icon === 'object'"
        :image="icon"
        :alt="icon.alt"
        :height="icon.height"
        :width="icon.width"
      />
      <div v-else-if="icon" class="icon">{{ icon }}</div>
      <div>
        <h2 class="title" v-html="title"></h2>
        <h2 class="subtitle" v-html="subtitle"></h2>
      </div>

      <p class="details" v-html="details"></p>

      <div v-if="linkText" class="link-text">
        <p class="link-text-value">{{ linkText }} <VPIconArrowRight class="link-text-icon" /></p>
      </div>
    </article>
  </VPLink>
</template>

<style scoped>
.VPFeature {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.VPFeature.link:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft-up);
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.VPFeature:deep(.VPImage) {
  width: fit-content;
  margin-bottom: 20px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft-down);
  width: 48px;
  height: 48px;
  font-size: 24px;
  transition: background-color 0.25s;
}

.title {
  float: left;
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.subtitle {
  float: right;
  line-height: 24px;
  font-size: 14px;
  font-weight: 400;
}


.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.link-text {
  padding-top: 8px;
}

.link-text-value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
}

.link-text-icon {
  display: inline-block;
  margin-left: 6px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}
</style>
