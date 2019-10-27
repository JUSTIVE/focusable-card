<template>
  <div id="app" @mousewheel="MouseScroll" :style="`background:${titles[this.globalScroll].background};transition:all ${tempo} cubic-bezier(.25,.8,.25,1);`" v-touch:tap="TapAction">
    {{globalScroll}}
    <div :style="`transform:translateX(${getTranslateXValue}px) translateY(${getTranslateYValue}px); transition:all ${tempo} cubic-bezier(.25,.8,.25,1);`">
    <HelloWorld
      v-for="(item,index) in titles"
      :key="index"
      :globalscroll2="globalScroll"
      :depth="index"
      :msg="item.title"
      :xSpread="xSpread"
      :ySpread="ySpread"
      :tempo="tempo"
    />
    </div>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  created(){
    window.addEventListener('resize',this.updateSize());
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.updateSize())
  },
  computed: {
    getWidth: function () { return window.innerWidth; },
    getHeight: function () { return window.innerHeight; },
    getTranslateXValue(){return -this.globalScroll*this.width*this.xSpread-this.width*0.35},
    getTranslateYValue(){return -this.globalScroll*this.height*this.ySpread+this.height*this.yOffset}
  },
  
  data() {
    return {
      width:0,
      height:0,
      globalScroll: 0,
      xSpread:0.1,
      ySpread:0.2,
      yOffset:-0.2,
      tempo:'0.5s',
      isZoomed:false,
      titles: [
        { title: "Profile", background:'#F23D4C' },
        {
          title: "Projects",
          background:'#735571'
        },
        {
          title: "Skills",
          background:'#04BFBF'
        },
        {
          title: "Publications",
          background:'#C6D93B'
        },
        {
          title: "Activities",
          background:'#F2B705'
        },
        {
          title:"Awards",
          background:'#FF8051'
        }
      ]
    };
  },
  methods: {
    MouseScroll(event) {
      this.isZoomed=false;
      this.ZoomUpdater();
      this.globalScroll += event.deltaY > 0 ? 1 : -1;
      this.globalScroll = this.$_.clamp(this.globalScroll,0,this.titles.length-1)
      console.log(this.globalScroll);
    },
    TapAction(){
      this.isZoomed=!this.isZoomed
      this.ZoomUpdater();
    },
    updateSize(){
      this.width= window.innerWidth
      this.height= window.innerHeight
    },
    ZoomUpdater(){
      this.ySpread = this.isZoomed?0.8:0.2
      this.yOffset = this.isZoomed?0.4:-0.2
      console.log(this.isZoomed)
    }
  }
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:600&display=swap');
body{
  margin:0px;
}
#app {
  overflow: hidden;
  display:flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
