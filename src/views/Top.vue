<template>
  <div id="top">
    <div class="top_image">
      <div class="top_image_text">
        おおらかに、
        <br>のびやかに。
      </div>
      <div class="top_image_news"></div>
    </div>

    <section class="top_news">
      <h1 class="top_news_headline">求人・新着情報</h1>
      <p>information</p>
      <div class="top_news_cards">

        <div class="top_news_card_item">
          <div class="top_news_card_image"></div>
          <div class="top_news_card_content">
            <div class="days">
              2020年11月11日
            </div>
            <div class="title">
              冬休み、年末年始の園について
            </div>
          </div>
        </div>

        <div class="top_news_card_item">
          <div class="top_news_card_image"></div>
          <div class="top_news_card_content">
            <div class="days">
              2020年11月11日
            </div>
            <div class="title">
              冬休み、年末年始の園について
            </div>
          </div>
        </div>

        <div class="top_news_card_item">
          <div class="top_news_card_image"></div>
          <div class="top_news_card_content">
            <div class="days">
              2020年11月11日
            </div>
            <div class="title">
              冬休み、年末年始の園について
            </div>
          </div>
        </div>

      </div>

      <div class="top_news_button">
        <a href="/">もっと見る</a>
      </div>
    </section>

  </div>
</template>

<script>

export default {
  name: 'Home',
}

</script>

<style lang="scss" scoped>
  .top_image {
    min-height: 100vh;
    background-image: url('../assets/Top_main.jpeg');
    background-size: cover;
    position: relative;
    overflow: hidden;
  }

  .top_image:before {
    content: "";
    position: absolute;
    height: 800px;
    width: 800px;
    right: -400px;
    transform: translateY(-50%);
    background-color: #fff;
    border-radius: 50%;
  }

  .top_image_text {
    position: absolute;
    font-size: 48px;
    line-height: 1.7;
    right: 0;
    top: 200px;
    transform: translateY(-50%);
  }

  .top_image_news {
    position: absolute;
    bottom: 64px;
    left: 32px;
    width: 60%;
    height: 64px;
    background-color: #fff;
    border-radius: 50px;
  }

  .top_news {
    margin: 208px auto;
    max-width: 1080px;
    .top_news_headline {
      color: #208719;
      margin-bottom: 8px;
      text-align: center;
    }
    p {
      text-align: center;
    }
  }

  .top_news_cards {
    margin: 64px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .top_news_card_item {
    width: 240px;
    height: 376px;
    border-radius: 20px;
    box-shadow: 5px 5px 6px #cccccc;
    .top_news_card_image {
      background-color: #3c3c3c;
      width: 100%;
      height: 148px;
      border-radius: 20px 20px 0 0;
    }
    .top_news_card_content {
      margin: 32px 24px 0 24px;
      .days {
        font-size: 12px;
        margin-bottom: 16px;
      }
      .title {
        font-size: 16px;
        color: #208719;
      }
    }
  }

  .top_news_button {
    width: 300px;
    height: 48px;
    background-color: #E8F3E7;
    border-radius: 50px;
    margin-left: auto;
    a {
      display: block;
      height: 48px;
      width: 100%;
      text-align: center;
      line-height: 48px;
      color: #208719;
    }
  }

</style>
