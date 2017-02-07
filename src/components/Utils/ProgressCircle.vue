<template>
  <canvas ref="progressCanvas" :width="size" :height="size" style="border:1px solid #d3d3d3;">
</template>

<script>
  export default {
    name: 'progress-circle',
    props : {
      percentage : {
        type : Number,
        required : false,
        default: 0.0
      },
      shadow : {
        type : Boolean,
        required: false,
        default : false
      },
      size : {
        type : Number,
        required: false,
        default: 150
      }
    },
    methods : {
      draw : function(){

        var position = this.size/2;
        var radius = this.size/2 -10 ;

        var c = this.$refs.progressCanvas;
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);

        /*draws the shadow guide */
        if(this.shadow){
          ctx.beginPath();
          ctx.strokeStyle = "grey"
          ctx.lineWidth=4;
          ctx.arc(position, position, radius, 1.5 * Math.PI, 3.5 * Math.PI);
          ctx.stroke();
        }

        /*Draws the percentage line */
        ctx.beginPath();
        ctx.strokeStyle = "orange"
        ctx.arc(position, position, radius, 1.5 * Math.PI, (1.5 + (this.percentage * 2 / 100)) * Math.PI);
        ctx.lineWidth=5;
        ctx.stroke();

        /*Draws the percentage in text */
        ctx.textAlign="center";
        ctx.font="40px Arial";
        ctx.fillText(this.percentage + '%' , 75 , 90);

      },
    },
    mounted : function() {
      this.draw()
    },
    watch : {
      percentage : function(){
        this.draw();
      }
    }
  }
</script>

<style scoped>
</style>
