<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="common_banner_text">
                        <h2>{{this.title}}</h2>
                        <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Faq-Area -->
    <section id="faqs_arae" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="faqs_area_wrapper">

                        <div class="accordion" role="tablist">
                            
                            <!-- Accordion card -->
                            <div class="card_items_area">
                                <b-card-header role="tab">
                                    <a block v-b-toggle.accordion-1>
                                        <h5 class="mb-0">This Designer Bronzer Has Even Buyers Splurging!<i class="fas fa-angle-down rotate-icon"></i></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                                    </b-card-body>
                                </b-collapse>
                            </div>

                            <!-- Accordion card -->
                            <div class="card_items_area">
                                <b-card-header role="tab">
                                    <a block v-b-toggle.accordion-2>
                                        <h5 class="mb-0">4 Tips for A Colorful Easter Tablescape<i class="fas fa-angle-down rotate-icon"></i></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                                    </b-card-body>
                                </b-collapse>
                            </div>

                            <!-- Accordion card -->
                            <div class="card_items_area">
                                <b-card-header role="tab">
                                    <a block v-b-toggle.accordion-3>
                                        <h5 class="mb-0">Hawaii Couples Trip Guide and Spring Break Faves<i class="fas fa-angle-down rotate-icon"></i></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    Assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic.
                                    </b-card-body>
                                </b-collapse>
                            </div>

                            <!-- Accordion card -->
                            <div class="card_items_area">
                                <b-card-header role="tab">
                                    <a block v-b-toggle.accordion-4>
                                        <h5 class="mb-0">If You Struggle To Hit Your Goals, Try This Instead<i class="fas fa-angle-down rotate-icon"></i></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </b-card-body>
                                </b-collapse>
                            </div>

                            <!-- Accordion card -->
                            <div class="card_items_area">
                                <b-card-header role="tab">
                                    <a block v-b-toggle.accordion-5>
                                        <h5 class="mb-0">4 Tips for A Colorful Easter Tablescape<i class="fas fa-angle-down rotate-icon"></i></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </b-card-body>
                                </b-collapse>
                            </div>

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
    name: 'FAQ',

    data() {
        return {

            title: 'FAQ',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'FAQ'
                }
            ],

        }
    },
    mounted() {             
        // For scroll page top for every Route 
        window.scrollTo(0, 0)
    },

    // Page head() Title, description for SEO 
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'FAQ page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>