<template>
  <div id="life">

    <div class="main_visual">
      <img src="../assets/Life_tree.svg" alt="木の画像" class="tree">
      <img src="../assets/Life_main.png" alt="Life_main画像" class="main_image">
    </div>

    <section class="timeline_sec">
      <TimeLine/>
    </section>

    <section class="year_list_sec">

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

    </section>

  </div>

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
            EventName: '<li class="event_name">春季遠足</li><li class="event_name">歯科検診</li><li class="event_name">よもぎ餅付き</li>',
            comment: 'はじめての遠足だね！'
          },
          {
            id: 3,
            month: '6月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">内科検診</li> <li class="event_name">保育参観</li> <li class="event_name">田植え</li>',
            comment: '田植えをやってみよう！'
          },
          {
            id: 4,
            month: '7月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">七夕祭り</li> <li class="event_name">プール開き</li>',
            comment: 'みんなでプールを楽しもう！'
          },
          {
            id: 5,
            month: '8月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">お盆</li> <li class="event_name">水遊び</li> <li class="event_name">お泊まり保育</li>',
            comment: 'お家以外で寝れるかな？'
          },
          {
            id: 6,
            month: '9月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">お月見</li> <li class="event_name">稲刈り</li>',
            comment: 'みんなで植えた稲を収穫しよう！'
          },
          {
            id: 7,
            month: '10月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">運動会</li> <li class="event_name">歯科検診</li> <li class="event_name">秋季園外保育</li> <li class="event_name">創立記念日</li>',
            comment: '運動会でママ、パパに頑張りをみてもらおう！'
          },
          {
            id: 8,
            month: '11月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">七五三</li> <li class="event_name">祖父母参観</li> <li class="event_name">内科検診</li> <li class="event_name">歯科検診</li>',
            comment: 'おじいちゃん、おばあちゃんが保育園であえる！？'
          },
          {
            id: 9,
            month: '12月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">たき火（おいも焼き）</li> <li class="event_name">クリスマス会</li> <li class="event_name">音楽会</li> <li class="event_name">お餅つき</li>',
            comment: 'たき火で暖ままっておいもを食べちゃおう！'
          },
          {
            id: 10,
            month: '1月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">お正月</li> <li class="event_name">年長のみ個人懇談</li> <li class="event_name">どんど焼</li>',
            comment: 'あけましておめでとう！今年もよろしくね'
          },
          {
            id: 11,
            month: '2月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">節分</li> <li class="event_name">お別れお遊戯会</li>',
            comment: 'ママとパパに、演技をみてもらおう！'
          },
          {
            id: 12,
            month: '3月',
            image: require('../assets/year_list_image.jpeg'),
            EventName: '<li class="event_name">ひな祭り</li> <li class="event_name">お別れ会食</li> <li class="event_name">お別れ遠足（年長のみ）</li> <li class="event_name">卒園式</li>',
            comment: 'ご卒園おめでとう！小学校がたのしみだね'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>