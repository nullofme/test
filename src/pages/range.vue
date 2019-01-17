<template>

  <div class="main">
    <input ref='input' type="range" min="1" max="100" v-model="value" step='20' @change='change'>

  </div>
  </div>
</template>
<!-- <script type="text/javascript"src="./common.js"></script> -->
<script>
  import $ from 'jquery'
  import com from './common.js'
  export default {
    data() {
      return {
        value:20, //当前助力次数
        flag: false, //有效助力
        n: 20, //中间存值变量
        step: false,

      }
    },


    methods: {
      change(){
        $('input').RangeSlider({callback: this.change1 });
      },
      change1($input) {
       // this.n=this.value
        if (!this.flag) {
          if ($input.value > 20) {
            this.value = this.n+10;
            this.flag = true;
            
          }else{
            this.value=this.n
          }
        }else{
this.value=this.n
        }
      },
      input(e) {


        $('input').RangeSlider({callback: this.change1 });


      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input[type=range] {
    -webkit-appearance: none;
    width: 300px;
    border-radius: 10px;
    background: -webkit-linear-gradient(#059CFA, #059CFA) no-repeat;
background-size: 0% 100%;
    /*这个属性设置使填充进度条时的图形为圆角*/
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    height: 15px;
    border-radius: 10px;
  
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 25px;
    width: 25px;
    margin-top: -5px;
    /*使滑块超出轨道部分的偏移量相等*/
    background: #ffffff;
    border-radius: 50%;
    /*外观设置为圆形*/
    border: solid 0.125em rgba(205, 224, 230, 0.5);
    /*设置边框*/

  }
</style>