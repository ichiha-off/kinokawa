<template>
  <header class="header">
    <img src="@/assets/logo.png" alt="logo" class="header_logo">
    <div class="nav">
      <router-link to="/">トップページ</router-link>
      <router-link to="/about">園の概要</router-link>
      <router-link to="/life">園の生活</router-link>
      <router-link to="/">アクセス</router-link>
      <router-link to="/">求人・新着情報</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style lang="scss" scoped>
  .header {
    width: 100vw;
    height: 80px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    .header_logo{
    height: 64px;
    margin: 8px;
    margin-left: 48px;
    }
    .nav {
      margin-right: 48px;
      display: flex;
      align-items: center;
      z-index: 2;
      a {
        margin-right: 32px;
      }
      a:last-child {
        margin: 0;
      }
    }
  }

</style>