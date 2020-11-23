<template>
  <div id="about">
    <div class="main_visual">
      <img src="../assets/About_tree.svg" alt="木の画像" class="tree">
      <img src="../assets/About_main.png" alt="About_main画像" class="main_image">
    </div>

    <main>
      <div class="left_headline">
        <h1 class="inner_text">保育内容</h1>
      </div>

      <div class="about_section_text">
        各年令に応じたカリキュラムにより就学前までに必要な基礎内容を楽しみながら 身につける。
        <br>情操教育の一貫として鼓笛演奏、器楽合奏を通してリズム感や体力、 精神力、協調性を育てる。
        <br>創造性を養うために自然とのかかわりを大切にして、
        <br>動植物にふれたり、育てたりし、沢山の体験を通して絵画造形活動につなげる。
      </div>

      <h3 class="small_headline">保育実施時間について</h3>
        <table class="time_graph">
          <thead>
            <tr>
              <th></th>
              <th>月 〜 金</th>
              <th>土</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>保育時間</td>
              <td>8：00 〜 16：00</td>
              <td>8：00 〜 12：00</td>
            </tr>
            <tr>
              <td>延長保育</td>
              <td>7：00 〜 19：00</td>
              <td>7：00 〜 17：30</td>
            </tr>
          </tbody>
          <div class="remarks"><font-awesome-icon icon="star" class="star"/>金曜日は絵本の貸出を実施しています。</div>
        </table>

      <h3 class="small_headline">対象年齢</h3>
        <div class="about_section_text">
          0歳（産休明け）から就学前まで
        </div>
      
      <h3 class="small_headline">給食</h3>
        <div class="about_section_text">
          乳幼児に必要な栄養価値と、栄養バランスを満たす献立にし、 毎月献立表を作成しています。
          <br>日常生活の中で一番大切な水は電子水を使って調理し、主食の お米は自作の無農薬有機栽培で育てています。
        </div>
        <table class="lunch_graph">
          <tbody>
            <tr>
              <td>完全給食（月 〜 土）</td>
              <td>乳児はミルク・離乳食</td>
            </tr>
            <tr>
              <td>おやつ</td>
              <td>0 ･ 1 ･ 2歳児(10時と15時)、3歳以上児(15時)</td>
            </tr>
          </tbody>
        </table>

      <div class="right_headline">
        <h1 class="inner_text">保育目標</h1>
      </div>
      <div class="target_content">
        <p>豊かな情報教育を通して・・・</p>
        <div class="target_cards">
          <div class="target_card">
            <p>自然を愛し明るく
              <br>健康で力強い体を養う</p>
          </div>
          <div class="target_card">
            <p>思いやりの心と
              <br>協調の精神を培う</p>
          </div>
          <div class="target_card">
            <p>人の話をよく聴き、
              <br>物事に集中出来る心と
              <br>粘り強さを培う</p>
          </div>
          <div class="target_card">
            <p>素直な心と物事に
              <br>感謝する心を養う</p>
          </div>
        </div>
        <p>4つの目標をかかがています。</p>
      </div>

      <div class="left_headline">
        <h1 class="inner_text">事業内容</h1>
      </div>
      <div class="business_content">
        <p>みなさまにご協力できるように、6つの事業を行っております。</p>
        <div class="business_list">
          <ul>
            <li>乳児保育</li>
            <li>保育園地域活動</li>
            <li>時間延長保育</li>
            <li>障害児保育</li>
            <li>産休または育休明け保育</li>
            <li>地域子育て支援(ちびっこ楽園) <div class="remarks">※月に２～３回、無料体験入園できます。</div></li>
          </ul>
        </div>
      </div>

    </main>
  </div>
</template>

<style lang="scss" scoped>

  .about_section_text {
    text-align: center;
    line-height: 2.7;
  }

  .small_headline {
    color: #208719;
    text-align: center;
    margin-top: 104px;
    margin-bottom: 56px;
    font-size: 24px;
  }

  .time_graph {
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 104px;
    text-align: center;
    td {
      padding: 48px 80px;
    }
    th:nth-child(n+2) {
      background-color: #208719;
      color: #fff;
      padding: 8px 0;
    }
    th:nth-child(n+2), td:nth-child(n+2) {
      border-left: 3px solid #fff;
    }
    tbody tr {
      border-top: 3px solid #fff;
    }
    tbody tr td:nth-child(1) {
      background-color: #208719;
      color: #fff;
    }
    tbody tr td:nth-child(n+2) {
      background-color: #E8F3E7;
    }
    .remarks {
      color: #208719;
      margin-top: 8px;
      .star {
        margin-right: 8px;
      }
    }
  }
  
  .lunch_graph {
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 56px;
    text-align: center;
    td {
      padding: 48px 80px;
    }
    td:nth-child(n+2) {
      border-left: 3px solid #fff;
    }
    tbody tr {
      border-top: 3px solid #fff;
    }
    tbody tr td:nth-child(1) {
      background-color: #208719;
      color: #fff;
    }
    tbody tr td:nth-child(n+2) {
      background-color: #E8F3E7;
    }
  }

  .target_content {
    text-align: center;
    font-weight: 700;
    p {
      color: #208719;
      font-size: 24px;
    }
  }
  
  .target_cards {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 56px 0;
    .target_card {
      width: 200px;
      height: 185px;
      padding: 0 32px;
      border-radius: 30px;
      background-color:#E8F3E7;
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(n+2) {
        margin-left: 24px;
      }
      p {
        color: #208719;
        font-size: 16px;
        line-height: 2.4;
      }
    }
  }

  .business_content {
    margin: 0 auto 208px;
    .business_list {
      display: flex;
      justify-content: center;
      .remarks {
        display: inline-block;
        font-size: 12px;
        margin-left: 24px;
      }
      li:nth-child(n+2) {
        margin-top: 24px;
      }
    }
    p {
      text-align: center;
    }
  }
</style>