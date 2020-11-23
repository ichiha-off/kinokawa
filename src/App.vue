<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
  import 'normalize.css'
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    components: {
      Header,
      Footer,
    }
  }
</script>

<style lang="scss">
  body {
    font-family: "M PLUS 1p";
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .left_headline {
    margin-top: 208px;
    margin-bottom: 104px;
    height: 100px;
    margin-right: 20%;
    text-align: center;
    background-color: #208719;
    border-radius: 0 50px 50px 0;
    .inner_text {
      line-height: 100px;
      font-size: 32px;
      color: #fff;
      width: 100vw;
    }
  }

  .right_headline {
    margin-top: 208px;
    margin-bottom: 104px;
    height: 100px;
    text-align: center;
    margin-left: 20%;
    background-color: #208719;
    border-radius: 50px 0 0 50px;
    .inner_text {
      position: absolute;
      margin: 0;
      left: 0;
      line-height: 100px;
      font-size: 32px;
      color: #fff;
      width: 100vw;
    }
  }

  .main_visual {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .main_image {
    height: calc(100vh - 80px);
    width: 60%;
  }

  .tree {
    width: 30%;
    margin: 0 5%;
  }
</style>
