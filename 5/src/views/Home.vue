<template>
  <div>
    <div class="head">
      <div class="head1">
        <img src="../assets/1.jpg" />
        <h4>资生堂美发沙龙美发</h4>
        <a href="">切换</a>
        <i class="iconfont icon-dian"></i>
      </div>
    </div>
    <div class="middle">
      <div class="navigation">
        <div class="slide">
          <ly-tab v-model="selectedId" :items="items"> </ly-tab>
        </div>
        <div class="nub">
          <ul>
            <li style="font-size: 24px; font-weight: bold">6963663</li>
            <li>.00</li>
          </ul>
          <ul>
            <li style="font-size: 24px; font-weight: bold">6963663</li>
            <li>.00</li>
          </ul>
        </div>
        <div class="nub">
          <ul>
            <li style="font-size: 14px; color: #eee; margin-left: -15px">
              实际收款金额(元)
            </li>
          </ul>
          <ul>
            <li style="font-size: 14px; color: #eee; margin-left: -15px">
              开卡充值金额(元)
            </li>
          </ul>
        </div>
      </div>
      <div class="content">
        <div class="content1">
          <div class="content2">
            <img src="../assets/1_07.gif" />
            <ul>
              <h3>店内收银</h3>
              <p>店内快捷收银</p>
            </ul>
          </div>
        </div>
        <div class="content1">
          <div class="content2">
            <img src="../assets/1_09.gif" />
            <ul>
              <h3>房台服务</h3>
              <p>快速为用户开台</p>
            </ul>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content1">
          <div class="content2">
            <img src="../assets/1_13.gif" />
            <ul>
              <h3>客户管理</h3>
              <p>店内快捷收银</p>
            </ul>
          </div>
        </div>
        <div class="content1">
          <div class="content2">
            <img src="../assets/1_14.gif" />
            <ul>
              <h3>添加客户</h3>
              <p>店内快捷收银</p>
            </ul>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content1">
          <div class="content2">
            <img src="../assets/1_17.gif" />
            <ul>
              <h3>记录支出</h3>
              <p>店内快捷收银</p>
            </ul>
          </div>
        </div>
        <div class="content1">
          <div class="content2">
            <img src="../assets/1_18.jpg" />
            <ul>
              <h3>店内活动</h3>
              <p>店内快捷收银</p>
            </ul>
          </div>
        </div>
      </div>
      <div class="circular"></div>
    </div>
    <footer>
      <section>
        <div
          v-for="(item, index) of items1"
          :class="[item.cls, { on: index === idx }]"
          @click="$router.push(item.push)"
          :key="index"
        >
          <img :src="index === idx ? item.iconSelect : item.icon" />
          <p :class="['colorChange', { on: index === idx }]">{{ item.name }}</p>
        </div>
      </section>
    </footer>
    <BNai :idx="0">
    </BNai>
  </div>
</template>

<script>
import logo from '@/assets/首页.png'
import logo1 from '@/assets/时钟.png'
import logo2 from '@/assets/旗帜.png'
import logo3 from '@/assets/我的.png'
// import BNAi from '../components/BNAi'
export default {
  components: {
    // BNAi
  },
  props: ['idx'],
  data () {
    return {
      selectedId: 0,
      items: [{ label: '今日营收' }, { label: '今日提成' }],
      items1: [
        {
          cls: 'home',
          name: '首页',
          push: '/Collection',
          icon: logo,
          iconSelect: logo
        },
        {
          cls: 'home',
          name: '股票',
          push: '/Collection',
          icon: logo1,
          iconSelect: logo1
        },
        {
          cls: 'home',
          name: '社区',
          push: '/Collection',
          icon: logo2,
          iconSelect: logo2
        },
        {
          cls: 'home',
          name: '我的',
          push: '/Collection',
          icon: logo3,
          iconSelect: logo3
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}

.head {
  height: 85px;
  background: #fff;
  display: flex;
  padding: 0px 15px;
  justify-content: space-between;
}

.head1 {
  display: flex;
  align-items: center;
  width: 100vh;
  justify-content: space-between;
  margin-top: 30px;
}

.head1 img {
  width: 30px;
  height: 25px;
}

.head1 h4 {
  margin-left: -30%;
}

.head1 a {
  text-decoration: none;
  color: #538699;
  font-size: 12px;
  margin-left: -30%;
}

.middle {
  height: calc(100vh - 195px);
  padding: 10px 15px;
  background: #f5f5f5;
  position: relative;
  overflow: scroll;
}

.navigation {
  height: 150px;
  background: #028efd;
  line-height: 30px;
  border-radius: 15px;
}

.slide {
  display: flex;
  margin-left: 3%;
}

.nub {
  display: flex;
  justify-content: space-around;
}

.nub ul {
  display: flex;
  list-style: none;
  color: #fff;
  align-items: flex-end;
}

.content {
  justify-content: space-between;
  display: flex;
  margin-top: 15px;
}

.content1 {
  width: 170px;
  height: 100px;
  background: #fff;
  border-radius: 15px;
}

.content2 {
  display: flex;
  padding: 25px 10px;
}

.content2 ul {
  line-height: 20px;
  margin-left: 10px;
}

.content2 ul p {
  font-size: 12px;
  line-height: 30px;
  color: #9d9d9d;
}

.content1 img {
  height: 30px;
  width: 30px;
}

.circular {
  width: 75px;
  height: 75px;
  background: #63b0f8;
  border-radius: 50%;
  float: right;
  margin: 50px 0px 40px 0px;
}

footer {
  height: 90px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

footer section {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
}

.home img {
  width: 30px;
  height: 30px;
}
.ly-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
}

.ly-tabbar {
  position: relative !important;
  width: 100% !important;
  overflow: hidden !important;
  display: flex !important;
  background-color: #028efd !important;
  border-bottom: 0px solid #eee !important;
  box-shadow: 0 0px 0px 0px #eee !important;
  border-radius: 15px !important;
}

.ly-tab-item-label {
  color: #fff;
}

.ly-tab-active-bar {
  background-color: #fff !important;
}
</style>
