<template>
     <div id='container'>
        <div class='img-box'>
            <transition-group name='fade' >
                
                 <img v-show='index==nowIndex' v-for='(img,index) in imgs' :key="index" :src="img" alt="">
            </transition-group>
           
        </div>
       <ul class='btn-box'>
           <li v-for="(x,index) in imgs.length" :class='{selected:index==nowIndex}' @click="change(index)" :key="index">{{x}}</li>
       </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "https://img3.doubanio.com/lpic/s24468373.jpg",
        "https://img3.doubanio.com/lpic/s27102925.jpg",
        "https://img3.doubanio.com/lpic/s6989253.jpg",
        "https://img3.doubanio.com/lpic/s6989277.jpg"
      ],
      nowIndex: 0
    };
  },
  methods: {
    change(index) {
      this.nowIndex = index;
    }
  },
  created() {
    setInterval(() => {
      this.nowIndex++;
      if (this.nowIndex == this.imgs.length) {
        this.nowIndex = 0;
      }
    }, 1000);
  }
};
</script>

<style scoped>

.img-box img {
  width: 100%;
  height: 300px;
  position: absolute;
}

#container {
  position: relative;
  height: 300px;
}
.btn-box {
  position: absolute;
  right: 30px;
  bottom: 20px;
  list-style: none;
}
.btn-box li {
  float: left;
  width: 20px;
  height: 20px;
  background: #cccccc;
  text-align: center;
  line-height: 20px;
  margin-right: 5px;
}
.btn-box li.selected {
  background: orange;
}
.fade-enter {
  transform: translatex(100%);
}
.fade-enter-active {
  transition: transform 1s;
}
.fade-enter-to {
  transform: translatex(0);
}
.fade-leave {
  transform: translatex(0);
}
.fade-leave-active {
  transition: transform 1s;
}
.fade-leave-to {
  transform: translatex(-100%);
}
</style>