<template>
  <div class="home-page">
    <!-- Banner Area -->
    <div id="pharmacy_banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="pharmacy_banner_img">
              <nuxt-link to="/product/product-single-2">
                <img
                  :src="require('@/assets/img/pharmacy/banner/banner1.png')"
                  alt="img"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-lg-12 col-md-6 col-sm-6 col-12">
                <div class="pharmacy_banner_img banner_last_img">
                  <nuxt-link to="/product/product-single-2">
                    <img
                      :src="require('@/assets/img/pharmacy/banner/banner2.png')"
                      alt="img"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-lg-12 col-md-6 col-sm-6 col-12">
                <div class="pharmacy_banner_img banner_last_img">
                  <nuxt-link to="/product/product-single-2">
                    <img
                      :src="require('@/assets/img/pharmacy/banner/banner3.png')"
                      alt="img"
                    />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Categories Area -->
    <section id="pharmacy_categorie" class="ptb-100 slider_button_left_right">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="pharmacy_heading_wrapper">
              <div class="grocery_heading">
                <h2>Top Categories</h2>
              </div>
              <div class="view_all_arae">
                <a href="#!">View all</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row position-relative">
          <div class="col-lg-12">
            <div class="pharmacy_top_cate">
              <carousel
                class="catigori_slider_box"
                :autoplay="true"
                :loop="true"
                :nav="false"
                :dots="false"
                :smartSpeed="1000"
                :margin="30"
                :responsive="{
                  0: { items: 2 },
                  600: { items: 3 },
                  992: { items: 4 },
                  1200: { items: 7 },
                }"
              >
                <div
                  v-for="categorie in categories"
                  :key="categorie.id"
                  class="pharmacy_top_card"
                >
                  <nuxt-link to="/product/product-single-2">
                    <img :src="categorie.imagepath" alt="img" />
                    <h4>{{ categorie.productName }}</h4>
                  </nuxt-link>
                </div>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Offer_area -->
    <div id="pharmacy_promo">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="pharmacy_promo_img">
              <nuxt-link to="/product/product-single-2">
                <img
                  :src="require('@/assets/img/pharmacy/banner/sm-banner1.png')"
                  alt="img"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="pharmacy_promo_img">
              <nuxt-link to="/product/product-single-2">
                <img
                  :src="require('@/assets/img/pharmacy/banner/sm-banner2.png')"
                  alt="img"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="pharmacy_promo_img">
              <nuxt-link to="/product/product-single-2">
                <img
                  :src="require('@/assets/img/pharmacy/banner/sm-banner3.png')"
                  alt="img"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Product -->
    <section id="pharmacy_featured_product" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="grocery_heading">
              <h2>Featured Product</h2>
            </div>
          </div>
        </div>
        <div class="row position-relative">
          <div class="col-lg-12">
            <div class="tabs_left_button">
              <ul class="nav nav-tabs">
                <li>
                  <a
                    data-toggle="tab"
                    data-target="#rated"
                    href="#!"
                    class="active"
                    >Top rated</a
                  >
                </li>
                <li>
                  <a data-toggle="tab" data-target="#popular" href="#!"
                    >Popular</a
                  >
                </li>
                <li>
                  <a data-toggle="tab" data-target="#best_sellers" href="#!"
                    >Best Sellers</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="tabs_el_wrapper">
              <div class="tab-content">
                <div id="rated" class="tab-pane fade show in active">
                  <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                      <div class="pharmacy_product_card">
                        <div class="pharmacy_product_img">
                          <nuxt-link to="/product/product-single-2">
                            <img
                              :src="
                                require('@/assets/img/pharmacy/product/pro-1.png')
                              "
                              alt="img"
                            />
                          </nuxt-link>
                          <span class="batch">Hot</span>
                          <div class="pharmacy_product_icon">
                            <ul>
                              <li>
                                <a
                                  href="#!"
                                  data-link-action="quickview"
                                  title="Quick view"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                  ><i class="fas fa-eye"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingCartModal"
                                  ><i class="fas fa-shopping-cart"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingWishlistModal"
                                  ><i class="fas fa-heart"></i
                                ></a>
                              </li>
                              <li>
                                <a href="compare.html"
                                  ><i class="fas fa-sync-alt"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="pharmacy_product_text">
                          <h3>Antiseptic gel</h3>
                          <p>$100.00 <del>$120.00</del></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                      <div class="pharmacy_product_card">
                        <div class="pharmacy_product_img">
                          <nuxt-link to="/product/product-single-2">
                            <img
                              :src="
                                require('@/assets/img/pharmacy/product/pro-2.png')
                              "
                              alt="img"
                            />
                          </nuxt-link>
                          <span class="batch">Hot</span>
                          <div class="pharmacy_product_icon">
                            <ul>
                              <li>
                                <a
                                  href="#!"
                                  data-link-action="quickview"
                                  title="Quick view"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                  ><i class="fas fa-eye"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingCartModal"
                                  ><i class="fas fa-shopping-cart"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingWishlistModal"
                                  ><i class="fas fa-heart"></i
                                ></a>
                              </li>
                              <li>
                                <a href="compare.html"
                                  ><i class="fas fa-sync-alt"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="pharmacy_product_text">
                          <h3>Antiseptic gel</h3>
                          <p>$100.00 <del>$120.00</del></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                      <div class="pharmacy_product_card">
                        <div class="pharmacy_product_img">
                          <nuxt-link to="/product/product-single-2">
                            <img
                              :src="
                                require('@/assets/img/pharmacy/product/pro-3.png')
                              "
                              alt="img"
                            />
                          </nuxt-link>
                          <span class="batch">Hot</span>
                          <div class="pharmacy_product_icon">
                            <ul>
                              <li>
                                <a
                                  href="#!"
                                  data-link-action="quickview"
                                  title="Quick view"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                  ><i class="fas fa-eye"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingCartModal"
                                  ><i class="fas fa-shopping-cart"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingWishlistModal"
                                  ><i class="fas fa-heart"></i
                                ></a>
                              </li>
                              <li>
                                <a href="compare.html"
                                  ><i class="fas fa-sync-alt"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="pharmacy_product_text">
                          <h3>Antiseptic gel</h3>
                          <p>$100.00 <del>$120.00</del></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                      <div class="pharmacy_product_card">
                        <div class="pharmacy_product_img">
                          <nuxt-link to="/product/product-single-2">
                            <img
                              :src="
                                require('@/assets/img/pharmacy/product/pro-4.png')
                              "
                              alt="img"
                            />
                          </nuxt-link>
                          <span class="batch">Hot</span>
                          <div class="pharmacy_product_icon">
                            <ul>
                              <li>
                                <a
                                  href="#!"
                                  data-link-action="quickview"
                                  title="Quick view"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                  ><i class="fas fa-eye"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingCartModal"
                                  ><i class="fas fa-shopping-cart"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingWishlistModal"
                                  ><i class="fas fa-heart"></i
                                ></a>
                              </li>
                              <li>
                                <a href="compare.html"
                                  ><i class="fas fa-sync-alt"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="pharmacy_product_text">
                          <h3>Antiseptic gel</h3>
                          <p>$100.00 <del>$120.00</del></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                      <div class="pharmacy_product_card">
                        <div class="pharmacy_product_img">
                          <nuxt-link to="/product/product-single-2">
                            <img
                              :src="
                                require('@/assets/img/pharmacy/product/pro-5.png')
                              "
                              alt="img"
                            />
                          </nuxt-link>
                          <span class="batch">Hot</span>
                          <div class="pharmacy_product_icon">
                            <ul>
                              <li>
                                <a
                                  href="#!"
                                  data-link-action="quickview"
                                  title="Quick view"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                  ><i class="fas fa-eye"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingCartModal"
                                  ><i class="fas fa-shopping-cart"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingWishlistModal"
                                  ><i class="fas fa-heart"></i
                                ></a>
                              </li>
                              <li>
                                <a href="compare.html"
                                  ><i class="fas fa-sync-alt"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="pharmacy_product_text">
                          <h3>Antiseptic gel</h3>
                          <p>$100.00 <del>$120.00</del></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                      <div class="pharmacy_product_card">
                        <div class="pharmacy_product_img">
                          <nuxt-link to="/product/product-single-2">
                            <img
                              :src="
                                require('@/assets/img/pharmacy/product/pro-2.png')
                              "
                              alt="img"
                            />
                          </nuxt-link>
                          <span class="batch">Hot</span>
                          <div class="pharmacy_product_icon">
                            <ul>
                              <li>
                                <a
                                  href="#!"
                                  data-link-action="quickview"
                                  title="Quick view"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                  ><i class="fas fa-eye"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingCartModal"
                                  ><i class="fas fa-shopping-cart"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingWishlistModal"
                                  ><i class="fas fa-heart"></i
                                ></a>
                              </li>
                              <li>
                                <a href="compare.html"
                                  ><i class="fas fa-sync-alt"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="pharmacy_product_text">
                          <h3>Antiseptic gel</h3>
                          <p>$100.00 <del>$120.00</del></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                      <div class="pharmacy_product_card">
                        <div class="pharmacy_product_img">
                          <nuxt-link to="/product/product-single-2">
                            <img
                              :src="
                                require('@/assets/img/pharmacy/product/pro-1.png')
                              "
                              alt="img"
                            />
                          </nuxt-link>
                          <span class="batch">Hot</span>
                          <div class="pharmacy_product_icon">
                            <ul>
                              <li>
                                <a
                                  href="#!"
                                  data-link-action="quickview"
                                  title="Quick view"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                  ><i class="fas fa-eye"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingCartModal"
                                  ><i class="fas fa-shopping-cart"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingWishlistModal"
                                  ><i class="fas fa-heart"></i
                                ></a>
                              </li>
                              <li>
                                <a href="compare.html"
                                  ><i class="fas fa-sync-alt"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="pharmacy_product_text">
                          <h3>Antiseptic gel</h3>
                          <p>$100.00 <del>$120.00</del></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                      <div class="pharmacy_product_card">
                        <div class="pharmacy_product_img">
                          <nuxt-link to="/product/product-single-2">
                            <img
                              :src="
                                require('@/assets/img/pharmacy/product/pro-3.png')
                              "
                              alt="img"
                            />
                          </nuxt-link>
                          <span class="batch">Hot</span>
                          <div class="pharmacy_product_icon">
                            <ul>
                              <li>
                                <a
                                  href="#!"
                                  data-link-action="quickview"
                                  title="Quick view"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                  ><i class="fas fa-eye"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingCartModal"
                                  ><i class="fas fa-shopping-cart"></i
                                ></a>
                              </li>
                              <li>
                                <a
                                  href="#!"
                                  data-bs-toggle="modal"
                                  data-bs-target="#shoppingWishlistModal"
                                  ><i class="fas fa-heart"></i
                                ></a>
                              </li>
                              <li>
                                <a href="compare.html"
                                  ><i class="fas fa-sync-alt"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="pharmacy_product_text">
                          <h3>Antiseptic gel</h3>
                          <p>$100.00 <del>$120.00</del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Date Of month -->
    <section id="pharmacy_date_month" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="pharmacy_time_area">
              <h2>Deal of the month</h2>
              <p>
                Cur tantas regiones barbarorum obiit, tot maria transmist summo
                bono
              </p>
              <div class="pharmacy_todays_count">
                <div id="pharmacy_grocery">
                  <ul>
                    <Timer date="September 30, 2023" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12">
                <div class="pharmacy_date_img">
                  <nuxt-link to="/product/product-single-2">
                    <img
                      :src="require('@/assets/img/pharmacy/banner/mid-1.png')"
                      alt="img"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="pharmacy_date_img">
                  <nuxt-link to="/product/product-single-2">
                    <img
                      :src="require('@/assets/img/pharmacy/banner/mid-2.png')"
                      alt="img"
                    />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12">
                <div class="pharmacy_date_img">
                  <nuxt-link to="/product/product-single-2">
                    <img
                      :src="require('@/assets/img/pharmacy/banner/mid-3.png')"
                      alt="img"
                    />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-6">
                <div class="pharmacy_date_img">
                  <nuxt-link to="/product/product-single-2">
                    <img
                      :src="require('@/assets/img/pharmacy/banner/mid-4.png')"
                      alt="img"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-lg-12 col-md-6">
                <div class="pharmacy_date_img">
                  <nuxt-link to="/product/product-single-2">
                    <img
                      :src="require('@/assets/img/pharmacy/banner/mid-5.png')"
                      alt="img"
                    />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hot Item Area -->
    <section id="pharmacy_hot_item" class="pt-100 slider_button_left_right">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="pharmacy_heading_wrapper">
              <div class="grocery_heading">
                <h2>Hot items</h2>
              </div>
              <div class="view_all_arae">
                <a href="#!">View all</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="pharmacy_hot_item_slider">
              <carousel
                class="catigori_slider_box"
                :autoplay="true"
                :loop="true"
                :nav="true"
                :dots="false"
                :smartSpeed="1000"
                :margin="30"
                :responsive="{
                  0: { items: 1 },
                  600: { items: 2 },
                  992: { items: 3 },
                  1200: { items: 4 },
                }"
              >
                <!-- Hot Item -->
                <div class="pharmacy_product_card">
                  <div class="pharmacy_product_img">
                    <nuxt-link to="/product/product-single-2">
                      <img
                        :src="
                          require('@/assets/img/pharmacy/product/pro-1.png')
                        "
                        alt="img"
                      />
                    </nuxt-link>
                    <span class="batch">Hot</span>
                    <div class="pharmacy_product_icon">
                      <ul>
                        <li>
                          <a
                            href="#!"
                            data-link-action="quickview"
                            title="Quick view"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                            ><i class="fas fa-eye"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-bs-toggle="modal"
                            data-bs-target="#shoppingCartModal"
                            ><i class="fas fa-shopping-cart"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-bs-toggle="modal"
                            data-bs-target="#shoppingWishlistModal"
                            ><i class="fas fa-heart"></i
                          ></a>
                        </li>
                        <li>
                          <a href="compare.html"
                            ><i class="fas fa-sync-alt"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="pharmacy_product_text">
                    <h3>Antiseptic gel</h3>
                    <p>$100.00 <del>$120.00</del></p>
                  </div>
                </div>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Brand Area -->
    <section id="pharmacy_top_brand" class="ptb-100 slider_button_left_right">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="pharmacy_heading_wrapper">
              <div class="grocery_heading">
                <h2>Top Brand</h2>
              </div>
              <div class="view_all_arae">
                <a href="#!">View all</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="pharmacy_top_brand_slider">
              <carousel
                class="catigori_slider_box"
                :autoplay="true"
                :loop="true"
                :nav="false"
                :dots="false"
                :smartSpeed="1000"
                :margin="30"
                :responsive="{
                  0: { items: 1 },
                  600: { items: 2 },
                  992: { items: 3 },
                  1200: { items: 5 },
                }"
              >
                <div
                  v-for="brands in brand"
                  :key="brands.id"
                  class="partner_logo_pharmacy"
                >
                  <nuxt-link to="#!">
                    <img :src="brands.imagepath" alt="img" />
                  </nuxt-link>
                </div>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Banner -->
    <div id="pharmacy_banner_bottom" class="pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 col-12">
            <div class="pharmacy_banner_bottom_img">
              <nuxt-link to="/product/product-single-2">
                <img
                  :src="require('@/assets/img/pharmacy/banner/add-1.png')"
                  alt="img"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-12">
            <div class="pharmacy_banner_bottom_img">
              <nuxt-link to="/product/product-single-2">
                <img
                  :src="require('@/assets/img/pharmacy/banner/add-2.png')"
                  alt="img"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Top Area -->
    <section id="pharmacy_footer_top">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 co-12">
            <div class="pharmacy_footer_text">
              <h4>Store location</h4>
              <p>219 Amara Fort Apt. 934</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 co-12">
            <div class="pharmacy_footer_text">
              <h4>Work unquiries</h4>
              <p>hello@andshop.com</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 co-12">
            <div class="pharmacy_footer_text">
              <h4>Call us</h4>
              <p>222 345 89 63</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 co-12">
            <div class="pharmacy_footer_text">
              <h4>Opning hours</h4>
              <p>Mon - Sat: 08.00 - 18.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
import carousel from "vue-owl-carousel";
import ProductBox5 from "~/components/product-box/ProductBox5";
import Timer from "../components/widgets/Timer";
export default {
  name: "Home",
  components: {
    Timer,
    ProductBox5,
    carousel,
  },

  data() {
    return {
      // categories slider items
      categories: [
        {
          id: 1,
          imagepath: require("@/assets/img/pharmacy/product/prod1.png"),
          productName: "Health care",
        },
        {
          id: 2,
          imagepath: require("@/assets/img/pharmacy/product/prod2.png"),
          productName: "Antiseptic",
        },
        {
          id: 3,
          imagepath: require("@/assets/img/pharmacy/product/prod3.png"),
          productName: "Medicine",
        },
        {
          id: 4,
          imagepath: require("@/assets/img/pharmacy/product/prod4.png"),
          productName: "Medical kit",
        },
      ],

      brand: [
        {
          id: 1,
          imagepath: require("@/assets/img/pharmacy/partner/partner_1.png"),
        },
        {
          id: 2,
          imagepath: require("@/assets/img/pharmacy/partner/partner_2.png"),
        },
        {
          id: 3,
          imagepath: require("@/assets/img/pharmacy/partner/partner_3.png"),
        },
        {
          id: 4,
          imagepath: require("@/assets/img/pharmacy/partner/partner_4.png"),
        },
        {
          id: 5,
          imagepath: require("@/assets/img/pharmacy/partner/partner_5.png"),
        },
      ],

      products: [],
      category: [],
      cartproduct: {},
    };
  },
  computed: {
    ...mapState({
      productslist: (state) => state.products.productslist,
    }),
  },
  mounted() {
    // For scroll page top for every Route
    window.scrollTo(0, 0);

    this.productsArray();
  },
  methods: {
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === "grocery") {
          this.products.push(item);
          item.collection.map((i) => {
            const index = this.category.indexOf(i);
            if (index === -1) this.category.push(i);
          });
        }
      });
    },

    // For Product Tab
    getCategoryProduct(collection) {
      return this.products.filter((item) => {
        if (item.collection.find((i) => i === collection)) {
          return item;
        }
      });
    },

    // Product added Alert / notificaion
    alert(item) {
      this.dismissCountDown = item;
    },
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "Pharmacy",
          name: "Pharmacy",
          content: "Pharmacy - AndShop Ecommerce Vue js, Nuxt js Template ",
        },
      ],
    };
  },
};
</script>