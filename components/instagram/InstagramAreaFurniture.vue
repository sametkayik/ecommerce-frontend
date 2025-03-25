<template>
      <!-- Instagram Arae -->
    <section id="instagram_area_one">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center_heading_two">
                        <h2>FOLLOW US INSTAGRAM</h2>
                        <span class="heading_border"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <swiper class="swiper" :options="swiperOptionInstagram">
                        <swiper-slide v-for="item in instagramItems" :key="item.id">
                            <InstagramSliderItem :instagramImg='item.instagramImg' />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'instagram-area-furniture',
    data() {
        return {
            // Instagram Swiper Slider Options
            swiperOptionInstagram: {
                slidesPerView: 5,
                spaceBetween: 0,
                slidesPerGroup: 1,
                loop: true,
                loopFillGroupWithBlank: true,
                autoplay: {
                    autoplay: true,
                    delay: 2500,
                    disableOnInteraction: true,
                },
                breakpoints: {
                    992: {
                        slidesPerView: 5
                    },
                    991: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 3
                    },
                    767: {
                        slidesPerView: 3
                    },
                    766: {
                        slidesPerView: 3
                    },
                    575: {
                        slidesPerView: 2
                    },
                    400: {
                        slidesPerView: 2
                    },
                    0: {
                        slidesPerView: 1
                    }
                },
            },

            // Instagram Slider Items Data 
            instagramItems: [
                {
                    id: 1,
                    instagramImg: require('@/assets/img/furniture/instagram/1.jpg')
                },
                {
                    id: 2,
                    instagramImg: require('@/assets/img/furniture/instagram/2.jpg')
                },
                {
                    id: 3,
                    instagramImg: require('@/assets/img/furniture/instagram/3.jpg')
                },
                {
                    id: 4,
                    instagramImg: require('@/assets/img/furniture/instagram/4.jpg')
                },
                {
                    id: 5,
                    instagramImg: require('@/assets/img/furniture/instagram/5.jpg')
                },
                {
                    id: 6,
                    instagramImg: require('@/assets/img/furniture/instagram/6.jpg')
                },
                {
                    id: 7,
                    instagramImg: require('@/assets/img/furniture/instagram/7.jpg')
                },
                {
                    id: 8,
                    instagramImg: require('@/assets/img/furniture/instagram/8.jpg')
                },
                {
                    id: 9,
                    instagramImg: require('@/assets/img/furniture/instagram/9.jpg')
                },
                {
                    id: 10,
                    instagramImg: require('@/assets/img/furniture/instagram/10.jpg')
                },
                {
                    id: 11,
                    instagramImg: require('@/assets/img/furniture/instagram/11.jpg')
                },
                {
                    id: 12,
                    instagramImg: require('@/assets/img/furniture/instagram/12.jpg')
                }
            ]
        }
    }
}
</script>

<style>

</style>