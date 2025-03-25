<template>
    <div class="col-lg-3">
        <div class="shop_sidebar_wrapper">
            <div class="shop_Search">
                <form @submit.prevent="randomProduct">
                    <input @keyup="randomProduct" type="text" class="form-control" placeholder="Search...">
                    <button @click="randomProduct"><img :src="require('@/assets/img/svg/search.svg')" alt="img"></button>
                </form>
            </div>
            <div class="shop_sidebar_boxed">
                <h4>Product Categories</h4>
                <form>
                    <label class="custom_boxed">T-shirts
                        <input type="radio" name="radio" checked  @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Fashion
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Bags
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Jackets
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Shoes
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Jeans
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                </form>
            </div>

            <div class="shop_sidebar_boxed">
                <h4>Price</h4>
                <div class="price_filter">
                    <vue-slider
                        v-model="value"
                        :min="0"
                        :max="5000"
                        ref="slider"
                        @change="randomProduct($refs.slider.getValue())">
                    </vue-slider>
                    <div class="price-slider-amount mt-3 text-capitalize">Price: ${{value[0]}} - ${{value[1]}}</div>
                </div>
            </div>

            <div class="shop_sidebar_boxed">
                <h4>Color</h4>
                <div class="product-variable-color">
                    <label for="modal-product-color-red6">
                        <input name="modal-product-color" id="modal-product-color-red6" class="color-select"
                            type="radio" checked @change="randomProduct">
                        <span class="product-color-red"></span>
                    </label>
                    <label for="modal-product-color-tomato1">
                        <input name="modal-product-color" id="modal-product-color-tomato1"
                            class="color-select" type="radio" @change="randomProduct">
                        <span class="product-color-tomato"></span>
                    </label>
                    <label for="modal-product-color-green2">
                        <input name="modal-product-color" id="modal-product-color-green2"
                            class="color-select" type="radio" @change="randomProduct">
                        <span class="product-color-green"></span>
                    </label>
                    <label for="modal-product-color-light-green3">
                        <input name="modal-product-color" id="modal-product-color-light-green3"
                            class="color-select" type="radio" @change="randomProduct">
                        <span class="product-color-light-green"></span>
                    </label>
                    <label for="modal-product-color-blue4">
                        <input name="modal-product-color" id="modal-product-color-blue4" class="color-select"
                            type="radio" @change="randomProduct">
                        <span class="product-color-blue"></span>
                    </label>
                    <label for="modal-product-color-light-blue5">
                        <input name="modal-product-color" id="modal-product-color-light-blue5"
                            class="color-select" type="radio" @change="randomProduct">
                        <span class="product-color-light-blue"></span>
                    </label>
                </div>
            </div>
            <div class="shop_sidebar_boxed">
                <h4>Size</h4>
                <form id="sizes_input">
                    <label class="custom_boxed">XS
                        <input type="radio" checked="checked" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">S
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">M
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">L
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">XL
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                </form>
            </div>
            <div class="shop_sidebar_boxed">
                <h4>Brand</h4>
                    <label class="custom_boxed">Next
                        <input type="radio" checked="checked" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Adidas
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Calvin Klein
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Nike
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">Geox
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom_boxed">River Island
                        <input type="radio" name="radio" @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                    
                    <div class="clear_button">
                        <button @click="getallProduct" class="theme-btn-one btn_sm btn-black-overlay mt-1">Clear Filter</button>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ShopSidebar',

    data() {
        return {
            // For Range Slider Value 
            value: [50, 1000],
        }
    },
    computed: {
        ...mapState({
            shuffleproducts: state => state.products.shuffleproducts,
        }),

    },
    methods: {
        getImageUrl(path) {
            return require('@/assets/img/product-image/' + path);
        },
        // Discount Price 
        discountedPrice(product) {
            const price = product.price - ( product.price * product.discount / 100)
            return price
        },
        // For Shop Left Shorting and Up Shorting 
        randomProduct(){
            let array = this.shuffleproducts;
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            this.$store.dispatch('products/shuffleProduct', array.slice(0, 30))
            
        },
        getallProduct(){
            this.$store.dispatch('products/getallProduct')  
        }
    }
}
</script>