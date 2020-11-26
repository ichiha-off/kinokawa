<template>
  <div id="info">

    <div class="main_visual">
      <img src="../assets/Info_tree.svg" alt="木の画像" class="tree">
      <img src="../assets/Info_main.png" alt="Life_main画像" class="main_image">
    </div>

    <section class="info_sec">

      <div class="left_headline">
        <h1 class="inner_text">情報一覧</h1>
      </div>
  
      <div class="info_area">

        <div class="side_month">
          <div class="side_title">月別一覧</div>
          <ul>
            <li>2020年11月 （3件）</li>
            <li>2020年10月 （1件）</li>
            <li>2020年06月 （2件）</li>
            <li>2020年04月 （5件）</li>
            <li>2020年01月 （1件）</li>
            <li>2019年12月 （1件）</li>
          </ul>
        </div>

        <div class="info_list">

          <ul>
            <InfoList
              v-for = "InfoList in InfoLists"
              v-bind:key="InfoList.id"
              v-bind:Info-date="InfoList.InfoDate"
              v-bind:Info-title="InfoList.InfoTitle"
              v-bind:Info-image="InfoList.InfoImage"
              />
          </ul>

          <div class="page_nav">
            <a href="#" class="page_link active">1</a>
            <a href="#" class="page_link ">2</a>
            <a href="#" class="next_page"></a>
          </div>

        </div>

      </div>

    </section>

  </div>
</template>

<script>
  import InfoList from '@/components/InfoList.vue';
  export default {
    name: 'Info',
    components: {
      InfoList,
    },
    data() {
      return {
        InfoLists: [
          {
            id: 1,
            InfoDate: '2020年 11月 09日',
            InfoTitle: '冬休み、年末年始について',
            InfoImage: require('@/assets/access_map.png')
          },
          {
            id: 2,
            InfoDate: '2020年 11月 09日',
            InfoTitle: '冬休み、年末年始について',
            InfoImage: require('@/assets/access_map.png')
          },
          {
            id: 3,
            InfoDate: '2020年 11月 09日',
            InfoTitle: '冬休み、年末年始について',
            InfoImage: require('@/assets/access_map.png')
          },
          {
            id: 4,
            InfoDate: '2020年 11月 09日',
            InfoTitle: '冬休み、年末年始について',
            InfoImage: require('@/assets/access_map.png')
          },
          {
            id: 5,
            InfoDate: '2020年 11月 09日',
            InfoTitle: '冬休み、年末年始について',
            InfoImage: require('@/assets/access_map.png')
          },
          {
            id: 6,
            InfoDate: '2020年 11月 09日',
            InfoTitle: '冬休み、年末年始について',
            InfoImage: require('@/assets/access_map.png')
          },
          {
            id: 7,
            InfoDate: '2020年 11月 09日',
            InfoTitle: '冬休み、年末年始について',
            InfoImage: require('@/assets/access_map.png')
          },
          {
            id: 8,
            InfoDate: '2020年 11月 09日',
            InfoTitle: '冬休み、年末年始について',
            InfoImage: require('@/assets/access_map.png')
          },
          {
            id: 9,
            InfoDate: '2020年 11月 09日',
            InfoTitle: '冬休み、年末年始について',
            InfoImage: require('@/assets/access_map.png')
          },
          {
            id: 10,
            InfoDate: '2020年 11月 09日',
            InfoTitle: '冬休み、年末年始について',
            InfoImage: require('@/assets/access_map.png')
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info_area {
    margin: 0 auto 200px;
    max-width: 1080px;
    padding: 0 24px;
    display: flex;
    justify-content: center;
  }

  .side_month {
    width: 20%;
    margin-right: 48px;
    text-align: center;
    ul {
      margin-top: 32px;
      li {
        margin-bottom: 16px;
      }
    }
  }

  .info_list {
    width: 80%;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      border-top: 0.8px solid #c3c3c3;
    }
  }

  .page_nav {
    margin-top: 48px;
    text-align: center;
    a {
      display: inline-block;
      width: 32px;
      height: 32px;
      margin: 0 16px;
      border-radius: 50%;
      vertical-align: middle;
      line-height: 32px;
    }
    .page_link {
      background-color: #E8F3E7;
      color: #208719;
        &.active {
        background-color: #208719;
        color: #fff;
      }
    }
    .next_page {
      background-image: url('../assets/page_nav_arrow.svg');
    }
  }
</style>