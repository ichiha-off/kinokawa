<template>
  <div id="access">

    <div class="main_visual">
      <img src="../assets/Access_tree.svg" alt="木の画像" class="tree">
      <img src="../assets/Access_main.png" alt="Access_main画像" class="main_image">
    </div>

    <section class="accsess_sec">

      <div class="left_headline">
        <h1 class="inner_text">アクセスマップ</h1>
      </div>

      <div class="access_area">
  
        <div class="map_image">
          <img src="../assets/access_map.png" alt="アクセスマップ" class="access_map">
        </div>

        <div class="access_info">
          <table>
            <tbody>
              <tr>
                <th>園名</th>
                <td>社会福祉法人 きのかわ保育園</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>〒111-111 和歌山県和歌山市XXX町1-12</td>
              </tr>
              <tr>
                <th>TEL</th>
                <td>012-345-6789</td>
              </tr>
              <tr>
                <th>FAX</th>
                <td>012-345-9876</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>example@co.jp</td>
              </tr>
            </tbody>
          </table>
        </div>
  
      </div>

    </section>

    <section class="park_sec">

      <div class="right_headline">
        <h1 class="inner_text">園舎案内</h1>
      </div>
  
      <img src="../assets/park_map.png" alt="園内図" class="park_map">

    </section>
  
  </div>
</template>

<script>
  export default {
    name: 'Access',
  }
</script>

<style lang="scss" scoped>
  .access_area {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map_image {
    width: 50%;
    .access_map {
      width: 100%;
    }
  }

  .access_info {
    margin-left: 48px;
    table {
      border-top: 1px solid #c3c3c3;
      border-collapse: collapse;
      tr {
        border-bottom: 1px solid #c3c3c3;
      }
      th {
        color: #208719;
        text-align: left;
        padding: 16px 0px 16px 24px;
      }
      td {
        padding: 16px 24px 16px 32px;
      }
    }
  }

  .park_map {
    display: block;
    max-width: 960px;
    margin: 0 auto 200px;
    border-radius: 20px;
  }
</style>