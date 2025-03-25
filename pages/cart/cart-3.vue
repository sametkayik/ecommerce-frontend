<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>{{ this.title }}</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cart-Area -->
    <section id="cart_area_three" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12 col-12">
            <div class="table_desc">
              <div class="table_page table-responsive">
                <table>
                  <!-- Start Cart Table Head -->
                  <thead>
                    <tr>
                      <th class="product_remove">Remove</th>
                      <th class="product_thumb">Image</th>
                      <th class="product_name">Product</th>
                      <th class="product-price">Price</th>
                      <th class="product_quantity">Quantity</th>
                      <th class="product_total">Total</th>
                    </tr>
                  </thead>
                  <!-- End Cart Table Head -->
                  <tbody>
                    <!-- Start Cart Single Item-->
                    <tr>
                      <td class="product_remove">
                        <a href="#"><i class="far fa-trash-alt"></i></a>
                      </td>
                      <td class="product_thumb">
                        <nuxt-link to="/product/product-single-2">
                          <img
                            :src="require('@/assets/img/product-image/1.png')"
                            alt="img"
                          />
                        </nuxt-link>
                      </td>
                      <td class="product_name">
                        <nuxt-link to="/product/product-single-2"
                          >Handbag fringilla</nuxt-link
                        >
                      </td>
                      <td class="product-price">$65.00</td>
                      <td class="product_quantity">
                        <label>Quantity</label>
                        <input min="1" max="100" value="1" type="number" />
                      </td>
                      <td class="product_total">$130.00</td>
                    </tr>
                    <!-- End Cart Single Item-->
                    <!-- Start Cart Single Item-->
                    <tr>
                      <td class="product_remove">
                        <a href="#"><i class="far fa-trash-alt"></i></a>
                      </td>
                      <td class="product_thumb">
                        <nuxt-link to="/product/product-single-2">
                          <img
                            :src="require('@/assets/img/product-image/2.png')"
                            alt="img"
                          />
                        </nuxt-link>
                      </td>
                      <td class="product_name">
                        <nuxt-link to="/product/product-single-2"
                          >Handbags justo</nuxt-link
                        >
                      </td>
                      <td class="product-price">$90.00</td>
                      <td class="product_quantity">
                        <label>Quantity</label>
                        <input min="1" max="100" value="1" type="number" />
                      </td>
                      <td class="product_total">$180.00</td>
                    </tr>
                    <!-- End Cart Single Item-->
                    <!-- Start Cart Single Item-->
                    <tr>
                      <td class="product_remove">
                        <a href="#"><i class="far fa-trash-alt"></i></a>
                      </td>
                      <td class="product_thumb">
                        <nuxt-link to="/product/product-single-2">
                          <img
                            :src="require('@/assets/img/product-image/3.png')"
                            alt="img"
                          />
                        </nuxt-link>
                      </td>
                      <td class="product_name">
                        <nuxt-link to="/product/product-single-2"
                          >Handbag elit</nuxt-link
                        >
                      </td>
                      <td class="product-price">$80.00</td>
                      <td class="product_quantity">
                        <label>Quantity</label>
                        <input min="1" max="100" value="1" type="number" />
                      </td>
                      <td class="product_total">$160.00</td>
                    </tr>
                    <!-- End Cart Single Item-->
                  </tbody>
                </table>
              </div>
            </div>
            <div class="cart_submit">
              <button
                class="theme-btn-one btn-black-overlay btn_sm"
                type="submit"
              >
                update cart
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="coupon_code left">
              <h3>Cart Total</h3>
              <div class="total_cart_inner">
                <h5>Shipping:</h5>
                <form action="#!" id="total_cart_form_three">
                  <label class="custom_boxed"
                    >Free Shipping <span class="rigth_cart">$0.00</span>
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="custom_boxed"
                    >Standard <span class="rigth_cart">$30.00</span>
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="custom_boxed"
                    >Express <span class="rigth_cart">$20.00</span>
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                  <h6 class="estimate_for_country">
                    Estimate For Your Country
                  </h6>
                </form>
                <div class="total_catr_three_bottom">
                  <h5>Total Cart <span class="rigth_cart">$50.00</span></h5>
                </div>
                <div class="cart_submit">
                  <a
                    href="checkout.html"
                    class="theme-btn-one btn-black-overlay btn_sm"
                    >Checkout</a
                  >
                </div>
              </div>
            </div>
            <div class="coupon_code left bottom_code">
              <h3>Coupon</h3>
              <div class="coupon_inner">
                <p>Enter your coupon code if you have one.</p>
                <input class="mb-2" placeholder="Coupon code" type="text" />
                <button
                  type="submit"
                  class="theme-btn-one btn-black-overlay btn_sm"
                >
                  Apply coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "cart-2",

  data() {
    return {
      title: "Cart",

      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Cart",
          to: "/cart",
        },
      ],

      // Product Quanity Increment/ Decrement Data
      quantity: 1,
    };
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Cart page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script>