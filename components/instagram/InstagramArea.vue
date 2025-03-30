<template>
      <!-- Instagram Arae -->
    <section id="instagram_area_one">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center_heading">
                        <h2>Follow Us Instagram</h2>
                        <p>Why not?</p>
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
    name: 'instagram-area',
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
                    instagramImg: require('@/assets/img/instagram/post2.png')
                },
                {
                    id: 2,
                    instagramImg: require('@/assets/img/instagram/post3.png')
                },
                {
                    id: 3,
                    instagramImg: require('@/assets/img/instagram/post4.png')
                },
                {
                    id: 4,
                    instagramImg: require('@/assets/img/instagram/post5.png')
                },
                {
                    id: 5,
                    instagramImg: require('@/assets/img/instagram/post6.png')
                }
            ]
        }
    }
}
</script>

<style>

</style>