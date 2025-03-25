<template>
   <div class="instgram_post">
        <a href="#!">
            <i class="fab fa-instagram"></i>
            <img :src="instagramImg" alt="img" />
        </a>
    </div>
</template>

<script>
export default {
    name: 'instagram-slider-item',
    props: {
        instagramImg: String
    }
}
</script>

<style>

</style>