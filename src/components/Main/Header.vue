<template>
  <div class="header">
            <router-link :to="{name: 'home'}">
                <img  src='../../assets/logo.png' height="50px" />
            </router-link>

            <div class="navigation">
                <router-link class="navItem" :to="{name: 'home'}">ГЛАВНАЯ</router-link>
                <router-link class="navItem" :to="{name: 'Catalog'}">КАТАЛОГ</router-link>
                <router-link class="navItem" :to="{name: 'About'}">О НАС</router-link>
            </div>

            <router-link class="register" :to="{name: 'Login'}">РЕГИСТРАЦИЯ / ВОЙТИ</router-link>
        </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>
  .header {
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
	 background-color: lightslategray;
	 width: 100%;
	 padding: 20px 15vw;
  }

 .header .navItem {
	 color: aliceblue;
	 text-decoration: none;
	 font-weight: 700;
	 font-size: 20px;
	 margin-right: 30px;
	 transition: color 0.15s linear;
 }

 .header .navItem:hover {
	 color: #fc9b9b;
  }

 .header .register {
	 color: aliceblue;
	 text-decoration: none;
	 font-weight: 700;
	 background-color: #e4984b;
	 padding: 12px 16px;
	 padding-left: 20px;
	 border-radius: 10px;
	 transition: background-color 0.3s linear;
  }

 .header .register:hover {
	 background-color: #a85d13;
  }
</style>
