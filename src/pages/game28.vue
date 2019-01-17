<template>
  <div class="slider" ref="slider">
    <div class="process" :style="{width}"></div>
    <div class="thunk" :style="{left}">
      <div class="block" ref="trunk" id='thunkDom' @click="down"></div>
      <!-- <div class="tips">
        <span>{{scale*100}}</span>
        <i class="fas fa-caret-down"></i>
      </div> -->
    </div>
  </div>
</template>
<script>
  /*
  * min 进度条最小值
  * max 进度条最大值
  * v-model 对当前值进行双向绑定实时显示拖拽进度
  * */
  export default {
    props: ['min', 'max', 'value'],
    data() {
      return {
        slider: null,        //滚动条DOM元素
        thunk: null,         //拖拽DOM元素
        per: this.value,     //当前值
        newWidth: ''
      }
    },
    methods: {
      down(e) {
        var scale,newWidth;
        if(this.newWidth){
          newWidth=this.newWidth
        }else{
          newWidth = parseInt(this.width)*100 ; 
        }
        if(newWidth>=this.slider.offsetWidth){
          return false
        }     
        var timer= setInterval(() => {
          this.newWidth=newWidth ++;
          if(this.newWidth>0&&(this.newWidth)%(this.slider.offsetWidth/5)==0){      
            this.newWidth=newWidth ++;      
            clearInterval(timer)
          }
          scale = this.newWidth / this.slider.offsetWidth;
          this.per =(this.max-this.min) * scale + this.min;
          console.log(scale,this.per)
        }, 1)
      },
    },
    //渲染到页面的时候
    mounted()  {
      this.slider = this.$refs.slider;
      this.thunk = this.$refs.trunk;

    },
    computed: {
      scale() {
        return (this.per - this.min) / (this.max - this.min);
      },
      width() {
        if(this.slider){
          var width = this.slider.offsetWidth * this.scale 
          if (width >= this.slider.offsetWidth) {
            width = this.slider.offsetWidth
          }
          width=width*2/100+'rem'
          return width;
        }else{
          return 0+'rem'
        }
      },
      left() {
        if(this.slider){
          var newWidth = (this.slider.offsetWidth * this.scale - this.thunk.offsetWidth / 2) 
          if (newWidth >= this.slider.offsetWidth) {
            newWidth = this.slider.offsetWidth
          } else if (newWidth < 0) {
            newWidth = 0
          }
          newWidth =newWidth*2/100+ 'rem'
          return newWidth;
        }else{
          return 0+'rem'
        }
      }
    },
  }
</script>
<style>
  .box {
    margin: 100px auto 0;
    width: 80%
  }

  .clear:after {
    content: '';
    display: block;
    clear: both
  }

  .slider {
    position: relative;
    margin: .2rem 0;
    width: 6rem;
    height: .5rem;
    background: #e4e7ed;
    border-radius: 5px;

  }

  .slider .process {
    position: absolute;
    left: 0;
    top: 0;
    width: 1.12rem;
    height: .1rem;
    border-radius: 5px;
    background: #409eff
  }

  .slider .thunk {
    position: absolute;
    left: 1rem;
    top: -.07rem;
    width: .5rem;
    height: .5rem
  }

  .slider .block {
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    border: 2px solid #409eff;
    background: rgba(255, 255, 255, 1);
    /* transition: .5s all */
  }

  .slider .tips {
    position: absolute;
    left: -.07px;
    bottom: .3rem;
    min-width: 15px;
    text-align: center;
    padding: 4px 8px;
    background: #000;
    border-radius: 5px;
    height: .24rem;
    color: #fff
  }

  .slider .tips i {
    position: absolute;
    margin-left: -.1rem;
    left: 50%;
    bottom: .1rem;
    font-size: .16rem;
    color: #000
  }

  .slider .block:hover {
    /* transform: scale(1.2);
    opacity: .6 */
  }
</style>