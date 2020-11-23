<template>
  <div id="life">
    <div class="main_visual">
      <img src="../assets/Life_tree.svg" alt="木の画像" class="tree">
      <img src="../assets/Life_main.png" alt="Life_main画像" class="main_image">
    </div>
  </div>

  <TimeLine/>

  <div class="right_headline">
    <h1 class="inner_text">年間行事</h1>
  </div>
  <ul class="year_list">
    <YearList
      v-for = 'YearList in YearLists'
      v-bind:key="YearList.id"
      v-bind:month="YearList.month"
      v-bind:image="YearList.image"
      v-bind:Event-name="YearList.EventName"
      v-bind:comment="YearList.comment"/>
  </ul>

</template>

<script>
  import YearList from '../components/YearList'
  import TimeLine from '../components/TimeLine'
  export default {
    name: 'Life',
    components: {
      TimeLine,
      YearList,
    },
    data() {
      return {
        YearLists: [
          {
            id: 1,
            month: '4月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
          {
            id: 2,
            month: '5月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
          {
            id: 3,
            month: '6月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
          {
            id: 4,
            month: '7月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
          {
            id: 5,
            month: '8月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
          {
            id: 6,
            month: '9月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
          {
            id: 7,
            month: '10月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
          {
            id: 8,
            month: '11月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
          {
            id: 9,
            month: '12月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
          {
            id: 10,
            month: '1月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
          {
            id: 11,
            month: '2月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
          {
            id: 12,
            month: '3月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">入園式</li>',
            comment: 'ご入園おめでとう！'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>