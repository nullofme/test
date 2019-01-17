<template>
  <div id="webId">
    
    <!-- 如果碰到滑动问题，1.1 请检查这里是否属于同一点。 -->
    <!-- 悬浮的HTML -->
    <div class="progress"  v-if="!isShow">
        <div class="xuanfu" id="moveDiv" @touchstart="down"  @touchmove="move"
         @touchend="end">
      </div>
      <div class="bar"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isShow: false,//显示进度条
        flags: false,
        position: { x: 0, y: 0 },//滑块的初始值
        nx: '', 
        dx: '', 
        xPum: '',
      }
    },

    methods: {
      // 实现移动端拖拽
      down() {
        this.flags = true;
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.position.x = touch.clientX;
        
        this.dx = moveDiv.offsetLeft;
        
      },
      move() {
        if (this.flags) {
          var touch;
          if (event.touches) {
            touch = event.touches[0];
          } else {
            touch = event;
          }
          this.nx = touch.clientX - this.position.x;
          
          this.xPum = this.dx + this.nx;
          
          moveDiv.style.left = this.xPum + "px";
         
          //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
          moveDiv.addEventListener("touchmove", function () {
            event.preventDefault();
          }, false);
        }
      },
      //鼠标释放时候的函数
      end() {
        this.flags = false;
      }
    }

  }
</script>
<style>
  *{
    font-size: .28rem;
  }
  .progress{
    position: relative;
  }
  .xuanfu {
    height: .45rem;
    width: .25rem;
    /* 如果碰到滑动问题，1.3 请检查 z-index。z-index需比web大一级*/
    z-index: 999;
    position: absolute;
    top:0;
    left:1rem;
    border-radius: 0.8rem;
    background:pink;
  }
.bar{
  width: 3rem;
  height: .3rem;
  background: green
}

</style>