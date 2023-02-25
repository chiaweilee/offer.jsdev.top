<template>
  <div class="label">Job Model</div>
</template>

<style scoped>
.label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 24px;
  margin-bottom: 36px;
}
.label::before,
.label::after {
  content: '';
  display: block;
  width: 100px;
  height: 1px;
  flex: 0 1 100px;
  margin: 0 8px;
  background: linear-gradient(270deg, var(--vp-c-gray) 50%, transparent);
}
.label::after {
  background: linear-gradient(90deg, var(--vp-c-gray) 50%, transparent);
}
</style>
