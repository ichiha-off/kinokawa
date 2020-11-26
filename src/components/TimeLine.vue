<template>
  <div class="left_headline">
    <h1 class="inner_text">1日の流れ</h1>
  </div>

  <div class="timeline_area">

    <div class="timeline">
      <p>7 : 00 ~</p>
      <div class="line"></div>
      <p>8 : 00 ~</p>
      <div class="line"></div>
      <p>9 : 30 ~</p>
      <div class="line"></div>
      <p>10 : 00 ~</p>
      <div class="line"></div>
      <p>11 : 00 ~</p>
      <div class="line"></div>
      <p>12 : 30 ~</p>
      <div class="line"></div>
      <p>15 : 00 ~</p>
      <div class="line"></div>
      <p>16 : 00 ~</p>
      <div class="line"></div>
      <p>
        17 : 00 ~
        <br>19 : 00
      </p>
    </div>

    <div class="timeline_content1">
      <div class="timeline_image" img1></div>
      <div class="timeline_plan">
        <p>早朝体育</p>
        <p>登園・自由遊び</p>
      </div>
    </div>
    
    <div class="timeline_content2">
      <div class="timeline_plan">
        <p>
          3〜5歳 一斉保育 (体操・集団遊び)
          <br>0〜2歳 クラス別保育
        </p>
        <p>
          クラス別保育
          <br>0〜2歳 おやつ
        </p>
      </div>
      <div class="timeline_image" img2></div>
    </div>

    <div class="timeline_content1">
      <div class="timeline_image" img3></div>
      <div class="timeline_plan">
        <p>クラス別保育・給食</p>
        <p>
          クラス別保育・自由遊び
          <br>0〜2歳 おひるね</p>
      </div>
    </div>

    <div class="timeline_content3">
      <div class="timeline_plan">
        <p>おやつ・クラス別保育</p>
        <p>自由遊び・降園</p>
      </div>
      <div class="timeline_image" img4></div>
    </div>

    <div class="timeline_content4">
      <div class="timeline_box"></div>
      <div class="timeline_plan">
        <p>以後延長保育</p>
      </div>
    </div>

    <div class="timeline_content5">
      <div class="timeline_text">
        また明日、みんなと遊ぼう！
      </div>
      <div class="timeline_image" img5></div>
    </div>

    <div class="remarks"><font-awesome-icon icon="star" class="star"/>土曜日のみ 全児縦割保育 7 ： 00 〜 17 ： 30まで開所</div>
    <div class="remarks"><font-awesome-icon icon="star" class="star"/>ちびっこ楽園（未入園児の体験入園 月2 〜 3回</div>

  </div>
</template>

<script>
export default {
  name: 'TimeLine',
}
</script>

<style lang="scss" scoped>
  .timeline_area {
    width: 80vw;
    margin: 0 auto;
    position: relative;
    .remarks {
      width: 420px;
      margin: 0 auto;
      color: #208719;
    }
  }
  
  .timeline {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    width: 120px;
    p {
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      color: #208719;
      margin: 0;
    }
    .line {
      border-right: dotted #208719 3px;
      width: 0;
      height: 120px;
      margin: 16px auto;
    }
  }

  .timeline_image {
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    height: 240px;
    width: 400px;
    &[img1] {
      background-image: url('../assets/timeline_image1.jpeg');
    }
    &[img2] {
      background-image: url('../assets/timeline_image2.jpeg');
    }
    &[img3] {
      background-image: url('../assets/timeline_image3.jpeg');
    }
    &[img4] {
      background-image: url('../assets/timeline_image4.jpeg');
    }
    &[img5] {
      background-image: url('../assets/timeline_image5.jpeg');
      margin-bottom: 32px;
    }
  }

  .timeline_content1 {
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(n+2) {
        margin-top: 116px;
      }
    .timeline_plan {
      margin-left: 184px;
      height: 240px;
      width: 400px;
      p {
        margin: 0;
        font-size: 24px;
        font-weight: 700;
        &:nth-child(n+2) {
          margin-top: 152px;
        }
      }
    }
  }

  .timeline_content2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 118px;
    .timeline_plan {
      margin-right: 184px;
      height: 240px;
      width: 400px;
      text-align: right;
      p {
        display: inline-block;
        text-align: left;
        margin: 0;
        font-size: 24px;
        font-weight: 700;
        &:nth-child(n+2) {
          margin-top: 124px;
        }
      }
    }
  }

    .timeline_content3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    .timeline_plan {
      margin-right: 184px;
      height: 240px;
      width: 400px;
      text-align: right;
      p {
        display: inline-block;
        text-align: left;
        margin: 0;
        font-size: 24px;
        font-weight: 700;
        &:nth-child(n+2) {
          margin-top: 152px;
        }
      }
    }
  }

  .timeline_content4 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 116px;
    .timeline_box {
      width: 400px;
      height: 0;
    }
    .timeline_plan {
      margin-left: 184px;
      width: 400px;
      p {
        margin: 0;
        font-size: 24px;
        font-weight: 700;
      }
    }
  }

  .timeline_content5 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 56px;
    .timeline_text {
      margin-bottom: 16px;
      padding: 32px 43px;
      font-size: 24px;
      border-radius: 50px;
      background-color: #208719;
      color: #fff;
    }
  }
</style>