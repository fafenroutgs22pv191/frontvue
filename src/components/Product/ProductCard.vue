<template>
  <div class="product">
      <div class="image">
          <img src="../../assets/nophoto.png" alt="nophoto"/>
      </div>

      <div class="infoProduct">
          <router-link class="prdouctUrl" :to="`/product/${ id }`">
            <h3>{{ name }}</h3>
          </router-link>
          <ul class="rating">
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
          </ul>   
          <div class="infoPrice">
            <span class="price">{{price}}₽</span>
            <button class="addToCard"><ion-icon name="add-circle-outline"></ion-icon></button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
      id : Number,
      name: String,
      price: Number
    }
}
</script>

<style>
  .product {
    margin-bottom: 30px; 
    margin-top: 30px;
  }

.productSolo {
    margin-bottom: 30px; 
    margin-top: 30px;
    align-items: center;
  }

.prdouctUrl {
    text-decoration: none;
    color: black;
    transition: color 0.2s linear;
  }

.prdouctUrl:hover {
    color: rgb(136, 135, 135);
  }

.image {
    margin-bottom: 10px;
  }

.image img {
    height:190px;
    width: 100%;
    object-fit: cover;
    border-radius: 7px;
  }

.imageSolo {
    margin-bottom: 10px;
  }

.imageSolo img {
    height: 30%;
    width: 30%;
    
    border-radius: 7px;
  }

.infoProduct h3 {
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 0;
  }

.rating {
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;    
  }
.rating li {
    display: inline-block;
    color: #ffffff;
  }

.infoPrice {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

.infoPriceSolo {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;    
  }

.soloDiscr {
    margin-top: 45px;
    font-size: 20px;
    font-weight: 600;
  }

.addToCard {
    border: none;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #14af4f;
    color: aliceblue;
    border-radius: 10px;
  }

.price {
    font-weight: 700;
    font-size: 18px;
  }
</style>
