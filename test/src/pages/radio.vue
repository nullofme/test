<template>
  <div >
    111
    <div class="music " id="musicMenu">
        <audio muted src="/src/assets/music.mp3" id="musicAudio"  loop autoplay="true"></audio>
        <!--autoplay 自动播放  preload 音频是否进行预加载  play音频播放  pause 音频停止-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
,
mounted() {
  var oMusic = document.getElementById("musicMenu");
    var audioMusic = document.getElementById("musicAudio");
    setTimeout(function () {
        oMusic.className = "music musicMove"
    }, 1000);



    document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
        var musicEle0 = document.getElementById('musicAudio');
        musicEle0.play();
    }
    audioAutoPlay();
});
document.addEventListener('touchstart', function () {
    function audioAutoPlay() {
        var musicEle0 = document.getElementById('musicAudio');
            musicEle0.play();
    }
    audioAutoPlay();
});
    /*定时器，音乐跟动画同步*/
    oMusic.addEventListener('touchstart',function () {
        if (audioMusic.paused) {
            audioMusic.play();
            oMusic.className = "music musicMove"
        }
        else {
            audioMusic.pause();
            oMusic.className = "music"
        }
    });
}}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

html,body,.main,.swiper-container,.swiper-slide{
    height: 100%;
    width: 100%;
}
html{
    font-size: 100px;
}
/*音乐*/
.music{
    position: fixed;
    display: block;
    top:.2rem;
    right:.2rem;
    z-index: 10;
    width:.8rem;
    height:.8rem;
    background: red ;
    background-size: cover;
}
.musicMove{
    -webkit-animation: musicMove linear 1s  infinite;
    animation: musicMove linear 1s  infinite;
}
@keyframes musicMove {
    0%{
       transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.arrow{
    position: absolute;
    left:50%;
    bottom:.2rem;
    z-index: 1633;
    width: .48rem;
    height: .68rem;
    margin-left:-.24rem;
    opacity: .6;
    background: red;
    background-size: 100% 100%;
    -webkit-animation: myBounce 1.3s ease-in-out infinite;
}
@keyframes myBounce {
    from{
       bottom:.04rem;
        opacity: .1;
    }
    to{
        bottom: .7rem;
        opacity: 1;
    }
}

/*page1*/
.page1{
    position: relative;
    background: -webkit-linear-gradient(top, gold  ,white 40% ,white 85% ,lightyellow )
}
.page1 .img2{
    position: absolute;
    display: block;
    width: 100%;
    top:40%;
}

.page1 .img1{
    opacity: 0;
    z-index: 11;
    width: 4rem;
    position: absolute;
    top: 2.3rem;
    margin: 0 auto;
    left: 0;
    right: 0;
}
#page01 .img1{
    -webkit-animation:bounceIn  2s;
    animation: bounceIn  2s;
    opacity: 1;
}

.page2, .page3,.page4,.page5{
    position: relative;
    background:-webkit-linear-gradient(top, gold,white ,gold );
}

/*page2*/
.page2 .bor{
    position: absolute;
    border-radius: 20px;
    right:.5rem;
    left: .5rem;
    top:2rem;
    bottom: 1rem;
    background: white;
    padding: 1rem .4rem 0 .5rem;
}
.page2 .bor h3{
    opacity: 0;
    font-size: 32px;
    font-family: 'YouYuan';
    color:  blue;
    text-align: right;
    border-bottom: 1px solid blue;
    font-style:  oblique;
}
.page2 .bor p{
    opacity: 0;
    margin: .3rem 0;
    font-family: "monospace";
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    color: #0b0b0b;
}
.page2 .img21{
    opacity: 0;
    position: absolute;
    top: 1.3rem;
    left: 1rem;
}

#page02 .img21{
    -webkit-animation: rotateInDownLeft  1s ;
    animation: rotateInDownLeft  1s ;
    opacity: 1;
}
#page02 .bor h3{
    -webkit-animation: lightSpeedIn 1s;
    animation: lightSpeedIn 1s;
    opacity: 1;
}
#page02 .bor p{
    -webkit-animation: bounceInUp linear 2s;
    animation: bounceInUp linear 2s;
    opacity: 1;
}
.job,.page4 .p1{
    display: block;
    font-family: "Arial Black";
    font-size: .5rem;
    margin: 1rem;
    text-align: center;
    color: transparent;
    -webkit-text-stroke: .02rem white;
}

/*page3*/
.page3 .green,.page3 .red,.page3 .blue{
    position: absolute;
    left: .5rem;
}
.page3 .green{
    top:3rem;
}
.page3 .blue{
    top:5rem;
}
.page3 .red{
    top:7rem;
}
.page3  img{
    width: 5.3rem;
    position: absolute;
    top:0;
    left: 0;
}
.page3 .p1{
    z-index: 10;
    font-size: .3rem;
    position: absolute;
    left: .1rem;
    top: .6rem;
    width: 1.5rem;
    text-align: center;
}
.page3 .p2{
    position: absolute;
    width: 3rem;
    z-index: 10;
    font-size: .26rem;
    left: 1.7rem;
    top:.3rem;
}
.page3 .p3{
    position: absolute;
    width: 3rem;
    z-index: 10;
    font-size: .3rem;
    left: 1.7rem;
    top:.4rem;
}
.green,.red,.blue{
    opacity: 0;
}
#page03 .green {
    z-index: 1000;
    -webkit-animation:fadeInLeftBig 1s;
    animation: fadeInLeftBig 1s;
    opacity: 1;
}
#page03 .blue{
    z-index: 1000;
    -webkit-animation:fadeInRightBig 1.5s ;
    animation:fadeInRightBig 1.5s;
    opacity: 1;
}
#page03 .red{
    -webkit-animation:fadeInUpBig 2s ;
    animation: fadeInUpBig 2s ;
    opacity: 1;
}

/*page4*/
#box{
    z-index: 1111;
    position: absolute;
    left: .7rem;
    bottom: 1.5rem;
    width: 5rem;
    height: 3.8rem;
}
#box .img41{
    z-index: 1111;
    position: absolute;
    left: 0.65rem;
    bottom: 1.9rem;
    width: 4rem;
    animation: Ro 1s infinite alternate;
}
@keyframes Ro {
    from{
        transform: translate(0,.1rem) rotate(6deg);
    }
    to{
        transform:translate(0,0) rotate(6deg);
    }
}
#page04 #box .img41{
    z-index: 1111;
    position: absolute;
    left: 0.65rem;
    bottom: 1.9rem;
    width: 4rem;
    animation: rotateOutUpLeft  2.5s ;
    opacity: 0;
}
.page4 .img42{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 5rem;
}
.page4 span{
    opacity: 0;
    z-index: 1112222;
    position: absolute;
    left: 2.9rem;
    bottom: 3.6rem;
    color: green;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    font-size: .3rem;
    line-height: 1rem;
    text-align: center;
    background:-webkit-radial-gradient( white ,white, #e69dff);

}
#page04 span{
    opacity: 1;
    animation: oo 1s ease-out infinite ;
}
#page04 .o1{
   transform: translate(-2.2rem,-4rem);
    transition: all  linear 3s 1.4s;
}
#page04 .o2{
    transform: translate(-.8rem,-4.2rem);
    transition: all ease 3s 1.1s;
}
#page04 .o3{
    transform: translate(1.8rem,-4rem);
    transition: all ease-out 3s 1s;
}
#page04 .o4{
    transform: translate(-2.4rem,-2.2rem);
    transition: all ease-in 2s 1.8s;
}
#page04 .o5{
    transform: translate(.3rem,-2.2rem) ;
    transition: all 2s ease-in-out 1.6s;
}
#page04 .o6{
    transform: translate(1.6rem,-2.1rem) ;
    transition: all 2s 2s;
}
#page04 .o7{
    transform: translate(-1.1rem,-2.6rem) ;
    transition: all ease 3s 1.2s;
}
#page04 .o8{
    transform: translate(.4rem,-3.7rem) ;
    transition: all ease-in 2s 1.6s;
}
@keyframes oo {
    from{
        box-shadow: 0 0 0 0 rgba(61, 72, 250, 0.5);
    }
    to{
        box-shadow: 0 0 0 .15rem transparent;
 }
}
#page04 .img42{
    animation: move linear 1s infinite alternate;
}
@keyframes move {
    from{
        transform: rotate(-6deg);
    }
    to{
        transform: rotate(6deg);
    }
}

/*page5*/
.page5 .p1{
    color: cornflowerblue;
    font-size: .6rem;
    margin-top: 2rem ;
    text-align: center;
}
.page5 {
    background: gold;
}
.page5 .img51{
    opacity: 0;
    display: block;
    width: 5rem;
    margin: 1rem auto;
}
.page5 .p2{
    opacity: 0;
    font-size: .5rem;
    color: white;
    font-family: "STXinwei";
    width: 5.5rem;
    margin: 1rem auto;
}
#page05 .img51{
    animation: bounceIn 2s;
    opacity: 1;
}
#page05 .p2{
    animation: fadeInUpBig 1s;
    opacity: 1;
}
</style>
