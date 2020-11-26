<template>
  <li class="info_item">
    <div class="info_title">
      <div class="date">{{ InfoDate }}</div>
      <div class="title">{{ InfoTitle }}</div>
    </div>
    <div class="info_image">
      <img v-bind:src="InfoImage" alt="infoの画像">
    </div>
  </li>
</template>

<script>
  export default {
    name: 'InfoList',
    props: [
      'InfoDate',
      'InfoTitle',
      'InfoImage'
    ],
  }
</script>

<style lang="scss" scoped>
  .info_item {
    display: flex;
    padding: 16px 8px;
    border-bottom: 0.8px solid #c3c3c3;
    .info_title {
      width: calc(100% - 240px);
      padding: 16px 16px 0 0;
      .date {
        color: #208719;
      }
      .title {
        font-size: 24px;
        margin-top: 24px;
      }
    }
    .info_image {
      width: 240px;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }
</style>