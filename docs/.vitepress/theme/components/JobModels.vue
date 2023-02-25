<script setup lang="ts">
import { useData } from 'vitepress';
import JobModel from './JobModel.vue';

const { frontmatter } = useData();

const models = frontmatter.value['job-models'];
const skillnames = frontmatter.value['skill-name'];

</script>

<template>
  <div v-if="models" class="JobModels">
    <div class="container">
      <div class="items">
        <div v-for="model in models" :key="model.title" class="item" :class="['grid-4']">
          <JobModel
            :icon="model.icon"
            :title="model.title"
            :subtitle="model.subtitle"
            :details="model.details"
            :skill="model.skill"
            :skillnames="skillnames"
            :link="model.link"
            :link-text="model.linkText"
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
