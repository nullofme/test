<template>
  <div class="main">
    <!--    
    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3068738955,2910589477&fm=26&gp=0.jpg" alt=""> -->
    <input type="range" min="1" max="6" v-model="value"  step='1' @change='change' @input='input'>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 2,//当前助力次数
        flag: false,//有效助力
        n:""//中间存值变量
      }
    },
    mounted() {
      this.n=this.value;
    },
    methods: {
      input(e){
console.log(e,1)
      },
      change(e) {
        if (!this.flag) {
          console.log(e.target.value,this.value)
          if (e.target.value > 2) {
            this.value = this.n+1;
            this.flag = true;
            this.n=this.value
          }else{
            this.value=this.n
          }
        }else{
this.value=this.n
        }
      }
    },
  }
</script>
<style scope>
  .main {
    position: absolute;
    left: 0;
    top: 0;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 300px;
    height: 20px;
  }

  input[type=range] {
    position: absolute;
    left: 0;
    top: 0;
    background: red; background-size: 20% 100%;
    width: 200px;
    height: 10px;
    -webkit-appearance: none;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    height: 15px;
    border-radius: 10px;
    /*将轨道设为圆角的*/

  }

  input[type=range]::-webkit-slider-thumb {
    z-index: 9;
    -webkit-appearance: none;
    height: 25px;
    width: 25px;
    margin-top: -5px;
    /*使滑块超出轨道部分的偏移量相等*/
    background: yellow;
    border-radius: 50%;
    /*外观设置为圆形*/

  }
</style>