<template>
    <div class="blog_list_item img-zoom-hover">
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="blog_one_img">
                    <nuxt-link :to="'/blog/'+blogTitle">
                        <img :src="blogThumb" alt="img">
                    </nuxt-link>
                    </div>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="blog_text">
                    <h5 class="date_area"><nuxt-link :to="'/blog/'+blogTitle">{{blogPublishDate}}</nuxt-link></h5>
                    <h4 class="heading"><nuxt-link :to="'/blog/'+blogTitle">{{blogTitle}}</nuxt-link></h4>
                    <p class="para">{{blogDescription}}</p>
                    <nuxt-link :to="'/blog/'+blogTitle" class="button">Read More<i class="fas fa-arrow-right"></i></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogItem2',
    props: {
        blogThumb: String,
        blogPublishDate: String,
        blogTitle: String,
        blogDescription: String
    }
}
</script>

<style>

</style>