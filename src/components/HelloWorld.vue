<template>
 <swiper :options="swiperOption">
        <swiper-slide class="slide"> 
           <img src="../assets/Background2.jpg">      
          </swiper-slide>
        <swiper-slide class="slide">
             <img src="../assets/Background4.jpg">  
          </swiper-slide>
        <swiper-slide class="slide">
              <img src="../assets/Background2.jpg">  
        </swiper-slide>
        <swiper-slide class="slide">Slide 4</swiper-slide>
        <swiper-slide class="slide">Slide 5</swiper-slide>
        <swiper-slide class="slide">Slide 6</swiper-slide>
        <swiper-slide class="slide">Slide 7</swiper-slide>
        <swiper-slide class="slide">Slide 8</swiper-slide>
        <swiper-slide class="slide">Slide 9</swiper-slide>
        <swiper-slide class="slide">Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
</swiper>
</template>
  

<script>
export default {
   data () {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 5500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        img:'../assets/Background2.jpg'
      }
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.slide{
  font-size: 8em;

}
</style>



