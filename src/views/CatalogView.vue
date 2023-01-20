<template>
  <div class="catalogPage">      
    <div class="container">
      <div class="row mt-2">
        <div class="col-md-2">
          <CatalogFilters></CatalogFilters>
        </div>
        <div class="col-md-10">
          <CatalogSorts></CatalogSorts>
          <section class="products-list row">
          <div class="col-md-6 col-lg-3 mb-5" v-for="product in products">
              <ProductCard :id="product.id" :name="product.name" :price="product.price"></ProductCard>
          </div>
        </section>
      </div>
    </div>        
                      
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Product/ProductCard";
import CatalogFilters from "@/components/Catalog/CatalogFilters";
import CatalogSorts from "@/components/Catalog/CatalogSorts";

export default {
  name : "CatalogView",
  components: {CatalogSorts, CatalogFilters, ProductCard},
  data(){
    return this.$store.state
    
  }
}
</script>

<style>
  .catalogPage {
	 display: flex;
	 justify-content: space-around;
	 align-items: center;
	 width: 100%;
	 height: 100%;
	 padding: 50px 0px;
	 background-color: #e4984b;
  }
 .catalogPage .title {
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
 }
 .catalogPage .title h1 {
	 text-align: center;
 }
 .catalogPage .title button {
	 background-color: #364452;
	 text-decoration: none;
	 color: aliceblue;
	 padding: 9px 16px;
	 font-weight: 700;
	 font-size: 20px;
	 border-radius: 10px;
	 transition: background-color 0.3sa linear;
  }


</style>