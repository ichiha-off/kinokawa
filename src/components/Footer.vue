<template>
  <footer class="footer">

    <nav class="footer_nav">
      <router-link to="/">トップページ</router-link>
      <router-link to="/">園の概要</router-link>
      <router-link to="/">園の生活</router-link>
      <router-link to="/">アクセス</router-link>
      <router-link to="/">求人・新着情報</router-link>
    </nav>

    <div class="footer_contact_area">

      <div class="footer_contact_left">
        <img src="@/assets/logo.png" alt="logo">
        <div class="address">
          <div>社会福祉法人</div>
          <div>紀之川保育園</div>
          <div>〒640-8304</div>
          <div>和歌山県和歌山市松島121-1</div>
        </div>
      </div>

      <div class="footer_contact_right">
        <h3>お問い合わせ<font-awesome-icon icon="phone"/></h3>

        <div class="contact_tell">
          <div>お電話での問い合わせ</div>
          <div class="number">073-473-2003</div>
          <div class="contact_time">
            月曜日から金曜日（年末年始、祝日は除く）
            <br>受付時間 8：00 〜 16：00
          </div>
        </div>

        <div class="contact_mail">
          <div>メールでの問い合わせ</div>
          <div class="mail">kinokawa@apricot.ocn.ne.jp</div>
        </div>
      </div>

    </div>

  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
  .footer {
    text-align: center;
  }

  .footer_nav {
    color: #208719;
    a {
      display: inline-block;
      margin-right: 164px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }

  .footer_contact_area {
    width: 100%;
    height: 320px;
    margin-top: 48px;
    background-color: #208719;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer_contact_left {
    img {
      background-color: #fff;
    }
    .address {
      text-align: left;
      color: #fff;
      line-height: 1.7;
      margin-top: 24px;
      div:first-child {
        font-size: 8px;
      }
    }
  }

  .footer_contact_right {
    text-align: left;
    color: #fff;
    margin-left: 160px;
    h3 {
      font-size: 24px;
      svg {
        margin-left: 8px;
        font-size: 32px;
      }
    }
  }

  .contact_tell, .contact_mail {
    .number, .mail {
      margin-top: 8px;
      font-size: 32px;
      font-weight: 700;
    }
  }

  .number {
    display: inline-block;
  }

  .contact_mail {
    margin-top: 32px;
  }

  .contact_time {
    display: inline-block;
    margin-left: 80px;
  }
</style>