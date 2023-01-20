<template>
  <div class="productSolo">
                <div class="imageSolo">
                    <img src="../assets/nophoto-solo1.png" alt=""/>
                    <img src="../assets/nophoto-solo2.png" alt=""/>
                    <img src="../assets/nophoto-solo3.png" alt=""/>
                </div>

                <div class="infoProduct">
                    
                        <h1>{{ product.name }}</h1>
                    
                    <ul class="rating">
                        <li><ion-icon name="star-outline"></ion-icon></li>
                        <li><ion-icon name="star-outline"></ion-icon></li>
                        <li><ion-icon name="star-outline"></ion-icon></li>
                        <li><ion-icon name="star-outline"></ion-icon></li>
                        <li><ion-icon name="star-outline"></ion-icon></li>
                    </ul>   

                    <div class="infoPriceSolo">
                        <span class="price">{{ product.price }}₽</span>
                        <button class="addToCard"><ion-icon name="add-circle-outline"></ion-icon></button>
                    </div>

                    <div class="soloDiscr">
                        Хороший товар, качество италия, без синтетики.
                    </div>

                </div>
            </div>
</template>

<script>

export default {
  name: "ProductView",
  props: ['id'],
  computed: {
    product () {
        const id = this.id
        return this.$store.getters.productById(id)
    }
  }
}
</script>

<style>
  .productSolo {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px; 
    margin-top: 30px;
    align-items: center;
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

.infoPriceSolo {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;    
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

.soloDiscr {
    margin-top: 45px;
    font-size: 20px;
    font-weight: 600;
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
</style>
