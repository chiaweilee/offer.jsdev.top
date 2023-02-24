<script setup lang="ts">
import { useData } from 'vitepress';
import JobModel from './JobModel.vue';

const { frontmatter } = useData();

const features = frontmatter.value['job-models'];
</script>

<template>
  <div v-if="features" class="JobModels">
    <div class="container">
      <div class="items">
        <div v-for="feature in features" :key="feature.title" class="item" :class="['grid-4']">
          <JobModel
            :icon="feature.icon"
            :title="feature.title"
            :subtitle="feature.subtitle"
            :details="feature.details"
            :link="feature.link"
            :link-text="feature.linkText"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.JobModels {
  position: relative;
  padding: 0 24px;
}
.JobModelsTypes .icon {
  width: 30px;
  height: 30px;
}
@media (min-width: 640px) {
  .JobModels {
    padding: 0 48px;
  }
}
@media (min-width: 960px) {
  .JobModels {
    padding: 0 64px;
  }
}
.container {
  margin: 0 auto;
  max-width: 1152px;
}
.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}
.item {
  padding: 8px;
  width: 100%;
}
@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}
@media (min-width: 768px) {
  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }
  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}
@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>
