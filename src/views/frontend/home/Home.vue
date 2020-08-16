<template>
  <div class="home">
      <!-- normal product area -->
	<section>
		<div class="container">
			<div class="row">
				<div class="col-12"><h3>Latest Product</h3></div>
			</div>
			<div class="row">
				<div v-for="(product,index) in products.data" :key="index" class="col-md-3">
				      <!--Single product start-->
                      
                    <div class="product-wrapper">
                        <div class="product-img">
                           <router-link :to="{ name: 'Product-Details', params:{product_id: product.id}}"> <a href="#"> <img :src="'http://localhost/laravel-vue/api-ecommerce/public/uploads/images/product/'+product.product_image" alt=""></a> </router-link>
                            <router-link :to="{ name: 'Product-Details', params:{product_id: product.id}}"> <img class="secondary-img" :src="'http://localhost/laravel-vue/api-ecommerce/public/uploads/images/product/'+product.product_image"
                                    alt=""> </router-link>
                            <span>hot</span>
                            <div class="product-action">
                                <a href="#"><i class="far fa-eye"></i></a>
                                <a href="#"><i class="fas fa-balance-scale"></i></a>
                                <a href="#"><i class="fas fa-heart"></i></a>
                            </div>
                        </div>
                        <div class="product-content text-center">
                            <h3><router-link :to="{ name: 'Product-Details', params:{product_id: product.id}}">{{product.product_name}}</router-link></h3>
                            <div class="rating">
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                                <i class="fas far fa-star"></i>
                            </div>
                            <div class="price">
                                <span>TK {{product.product_price}} </span>
                            </div>
                            <div class="cart-btn">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                                <!--Single product End-->
				</div>
                
		    </div>
            <div class="text-center">
                <pagination :data="products" @pagination-change-page="getResults"></pagination>
            </div>
		</div>
	</section>
	<!--Product Area-->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
    data() {
        return {
            products:{},
        }
    },
    methods: {
        getResults(page = 1) {
			axios.get('/admin/product?page=' + page)
				.then(response => {
					this.products = response.data;
                    
				});
		},
        get_all_product(){
           axios.get('/admin/product')
            .then(response =>{
                // handle success
                this.products = response.data;
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            }); 
        }
    },
    created() {
        this.get_all_product();
        this.getResults();
    },
}
</script>
