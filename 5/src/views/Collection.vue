<template style="background: #ddd">
    <div>
        <div class="head">
            <a href="./Home.vue"><img src="../assets/左箭头.png"></a>
            <h3>快速收款</h3>
            <i class="iconfont icon-dian"></i>
        </div>
        <div class="middle">
            <div class="navigation">
                <span>服务客户</span>
                <div class="written"><span style="color:#a1e1ff;">选择服务客户</span></div>
                <span>散客</span>
            </div>
            <div class="content">
                <div class="nub">
                    <span>美甲收款</span>
                    <div>
                        <ul>
                            <li style="font-size: 22px; font-weight: bold;">¥36322</li>
                            <li>.00</li>
                        </ul>
                    </div>
                    <a style="text-decoration: none;color: red;">删除</a>
                </div>
                <hr>
                <div class="nub">
                    <span>技师/销售</span>
                    <span style="position: relative;left: 10%;">张淑芳(高级技师)</span>
                    <a style="text-decoration: none;color: #a1e1ff;">修改</a>
                </div>
                <hr>
                <button class="button">
                    <ul>
                        <li>点击使用</li>
                        <li style="position: relative;width: 10px;height: 20px;">
                          <div style="font-size: 18px;color:#2a7db3; position: absolute;top: 2px;">1</div>
                         </li>
                        <li>张次卡抵扣</li>
                        <li style="position: relative;width: 40px;height: 20px;">
                            <div style="font-size: 18px;color:#2a7db3; position: absolute;top: 2px;">¥120</div>
                        </li>
                        <li>.00</li>
                    </ul>
                </button>
            </div>
            <div class="content">
                <div class="nub">
                    <span>美甲收款</span>
                    <div>
                        <ul>
                            <li style="font-size: 22px; font-weight: bold;">¥36322</li>
                            <li>.00</li>
                        </ul>
                    </div>
                    <a style="text-decoration: none;color: red;">删除</a>
                </div>
                <hr>
                <div class="nub">
                    <span>技师/销售</span>
                    <span style="position: relative;left: 10%;">张淑芳(高级技师)</span>
                    <a style="text-decoration: none;color: #a1e1ff;">修改</a>
                </div>
                <hr>
                <button class="button">
                    <ul>
                        <li>点击使用</li>
                        <li style="position: relative;width: 10px;height: 20px;">
                          <div style="font-size: 18px;color:#2a7db3; position: absolute;top: 2px;">1</div>
                         </li>
                        <li>张次卡抵扣</li>
                        <li style="position: relative;width: 40px;height: 20px;">
                            <div style="font-size: 18px;color:#2a7db3; position: absolute;top: 2px;">¥120</div>
                        </li>
                        <li>.00</li>
                    </ul>
                </button>
            </div>
            <div class="keyboard-wrapper">
                <input type="text" placeholder="收款" v-model="NUM" @focus="show = true" onfocus="this.blur()"/>
                <div class="keyboard" v-if="show">
                <div class="num">
                    <table>
                    <tr>
                        <td @click="change(1)" :class="[active === 1 ? 'active' : '']" @touchstart="msDown(1)" @touchend="msUp(1)">1</td>
                        <td @click="change(2)" :class="[active === 2 ? 'active' : '']" @touchstart="msDown(2)" @touchend="msUp(2)">2</td>
                        <td @click="change(3)" :class="[active === 3 ? 'active' : '']" @touchstart="msDown(3)" @touchend="msUp(3)">3</td>
                        <td rowspan="2" class="del" @click="del">×</td>
                    </tr>
                    <tr>
                        <td @click="change(4)" :class="[active === 4 ? 'active' : '']" @touchstart="msDown(4)" @touchend="msUp(4)">4</td>
                        <td @click="change(5)" :class="[active === 5 ? 'active' : '']" @touchstart="msDown(5)" @touchend="msUp(5)">5</td>
                        <td @click="change(6)" :class="[active === 6 ? 'active' : '']" @touchstart="msDown(6)" @touchend="msUp(6)">6</td>
                    </tr>
                    <tr>
                        <td @click="change(7)" :class="[active === 7 ? 'active' : '']" @touchstart="msDown(7)" @touchend="msUp(7)">7</td>
                        <td @click="change(8)" :class="[active === 8 ? 'active' : '']" @touchstart="msDown(8)" @touchend="msUp(8)">8</td>
                        <td @click="change(9)" :class="[active === 9 ? 'active' : '']" @touchstart="msDown(9)" @touchend="msUp(9)">9</td>
                        <td rowspan="2" class="comfirm" @click="comfirm">确定</td>
                    </tr>
                    <tr>
                        <td colspan="2" @click="change(0)" :class="[active === 0 ? 'active' : '']" @touchstart="msDown(0)" @touchend="msUp(0)">0</td>
                        <td colspan="1" @click="change('.')" :class="[active === '.' ? 'active' : '']" @touchstart="msDown('.')" @touchend="msUp('.')">.</td>
                    </tr>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: null,
      show: false,
      NUM: '',
      result: []
    };
  },
  computed: {
    num: function () {
      return this.result.join('');
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    msDown (v) {
      this.active = v;
    },
    msUp (v) {
      this.active = '';
    },
    stopInput () {
      return false;
    },
    change (val, $event) {
      if (this.result.length === 0 && val === '.') {
        return false;
      } else {
        this.result.push(val);
        this.NUM = this.result.join('');
      }
    },
    del () {
      this.result.pop();
      this.NUM = this.result.join('');
      this.$emit('del', this.NUM);
    },
    comfirm () {
      this.$emit('comfirm', this.NUM);
      this.show = false;
    }
  }
}
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

.head {
  height: 55px;
  background: #fff;
  display: flex;
  padding: 0px 15px;
  justify-content: space-between;
  align-items: center;
}

.head img {
    height: 30px;
}

.middle {
  height: calc(100vh - 75px);
  padding: 10px 15px;
  background: #f5f5f5;
  position: relative;
  overflow: scroll;
}

.navigation {
  height: 60px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.written {
    width: 40%;
    height: 70%;
    background-color: #ebf9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

.content {
    background: #fff;
    border-radius: 5px;
    padding: 10px 15px;
    display: block;
    margin: 10px 0px 10px 0px;
}

.nub {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 20%;
    align-items: center;
}

.nub span {
    font-size: 14px;
}

.nub ul {
  display: flex;
  list-style: none;
  align-items: flex-end;
  color: black;
}

hr {
    flex-direction: row;
    margin: 10px 0px;
}
.button {
    height: 40px;
    width: 210px;
    background-color: #ebf9fa;
    border:none;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button ul {
  display: flex;
  list-style: none;
  align-items: flex-end;
  color: #a8d8ee;
}

.button ul li {
    font-size: 12px;
}

.keyboard-wrapper {
    user-select: none;
    display: flex;
    justify-content: center;
}

.keyboard-wrapper input {
    width: 25%;
    text-align: center;
}

.keyboard {
    position: absolute;
    left: 0px;
    bottom: 0;
    width: 100%;
}

.num table{
    width: 100%;
    border: 1px solid #ccc;
    border-collapse: collapse;
    background: #fff;
}

.num table td{
    height: 50px;
    vertical-align: middle;
    color: #333;
    font-size: 20px;
    border: 1px solid #ccc;
    text-align: center;
}

td.active{
    background:#ccc;
}
.del {
    background: #eee;
}
.comfirm {
    font-size: 16px;
    width: 80px;
    background: #118eeb;
    color: #fff;
}
</style>
