<template>
  <li class="list_area">

    <div class="image_area">
      <div class="month_circle">
        {{ month }}
      </div>
      <img v-bind:src="image" alt="行事画像">
    </div>

    <div class="text_area">
      <div class="inner_text">
        <ul class="event_list" v-html="EventName">
        </ul>
        <p>{{ comment }}</p>
      </div>
    </div>

  </li>
</template>

<script>
  export default {
    name: 'YearList',
    props: [
      'month',
      'image',
      'EventName',
      'comment',
    ],
  }
</script>

<style lang="scss">
  .year_list {
    max-width: 1080px;
    margin: 0 auto 200px;
    padding: 0 24px;
    list-style-type: none;
    > li {
      display: flex;
      justify-content: space-between;
      &:nth-child(2n) {
        flex-direction: row-reverse;
      }
      &:nth-child(n+2) {
        margin-top: 104px;
      }
    }
    .image_area {
      width: 52%;
      position: relative;
      .month_circle {
        position: absolute;
        width: 104px;
        height: 104px;
        text-align: center;
        line-height: 104px;
        font-size: 32px;
        font-weight: 700;
        color: #208719;
        background-color: #E8F3E7;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        top: 5%;
        left: 5%;
      }
      img {
        width: 100%;
        border-radius: 30px;
      }

    }
    .text_area {
      width: 40%;
      display: flex;
      align-items: center;
      .event_list {
        padding: 0;
      }
      .event_name {
        font-size: 24px;
        font-weight: 700;
        position: relative;
        padding-left: 32px;
        list-style-type: none;
        line-height: 2.4;
        &::before {
          content: "";
          display: block;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          position: absolute;
          top: 20px;
          left: 0;
          background-color: #208719;
        }
      }
    }
  }

</style>