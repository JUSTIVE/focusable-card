<template>
  <!-- <div> -->
    <div class="blurcard"
      v-bind:style="`filter:blur(${blurValue}px);
      transform:translateY(${translateYValue}px)translateX(${translateXValue}px);
      opacity:${opacityValue};
      transition:all ${tempo} cubic-bezier(.25,.8,.25,.1);`">{{this.msg}}</div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    depth:Number,
    globalscroll2:Number,
    xSpread:Number,
    ySpread:Number,
    tempo:String
  },
  computed: {
    getWidth: function () { return window.innerWidth; },
    getHeight: function () { return window.innerHeight; },
    blurValue(){
      return Math.abs(this.globalscroll2-(this.depth))*2;
    },
    translateYValue(){
      return (this.depth-this.offset)*this.getHeight*this.ySpread;
    },
    translateXValue(){
      return (this.depth-this.offset)*this.getWidth*this.xSpread
    },
    opacityValue(){
      return 1//-Math.abs(((this.globalscroll2-this.depth)*0.2))
    }
  },
  data(){
    return{
      offset:1,
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blurcard{
  font-family: 'Source Code Pro', monospace;
  font-weight: bold;
  font-size: 32px;
  background:white;
  position:absolute;
  padding:16px;
  text-align: left;
  width:80vw;
  height:80vh;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 12px;
}
</style>
