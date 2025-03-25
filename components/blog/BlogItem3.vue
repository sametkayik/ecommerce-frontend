<template>
    <div class="blog_post_wrapper">
        <div class="blog_post_img">
            <nuxt-link :to="'/blog/'+blogTitle">
                <img :src="blogThumb" alt="img">
            </nuxt-link>
        <div class="blog_post_date">
            <i class="far fa-calendar-alt"></i>
            <span>{{blogPublishDate}}</span>
        </div>
        </div>
        <div class="right_block">
            <div class="right_side_content">
            <h5>{{blogTitle}}</h5>
            <p>{{blogDescription}}</p>
            <nuxt-link :to="'/blog/'+blogTitle">Read More...</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogItem3',
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