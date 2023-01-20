<template>
    <div class="mainPage">
            <div class="mainPageView">
                <div class="title">
                    <h1>Добро пожаловать в<br/> магазин Маная</h1>
                    <h2>Лучшая одежда</h2>
                    <router-link class="btn" :to="{name: 'Catalog'}">Каталог</router-link>
                </div>
                <img src="../assets/tolstovka.png" alt="tolstovka"  height="700px"/>
            </div>

            <div class="cards">
                <div class="container">
                    <div class="cardsHolder">

                        <div class="card">
                            <div class="cardImage">
                                <img class="cardImg" src="../assets/money-bag.png" alt="money-bag" />
                            </div>

                            <div class="cardTitle">
                                Дёшево
                            </div>

                            <div class="cardText">
                                Класно мы сделали всё по низкой стоимости
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="cardImage">
                                <img class="cardImg" src="../assets/fast-delivery.png" alt="fast-delivery"/>
                            </div>

                            <div class="cardTitle">
                                Быстро
                            </div>

                            <div class="cardText">
                                Мы доставляем за 12 секунд
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardImage">
                                <img class="cardImg" src="../assets/cool.png" alt="cool"/>
                            </div>

                            <div class="cardTitle">
                                Модно
                            </div>

                            <div class="cardText">
                                 молодёжной теме мы сечём ёу
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
</template>

<script>


export default {
    name: 'HomeView'
}
</script>

<style>
    .mainPage {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 30px 0px;
        background-color: #e4984b;
    }
    .mainPage .mainPageView {
	    display: flex;
    }
    .mainPage .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .mainPage .title h1 {
	    text-align: center;
    }

    .mainPage .title .btn {
        background-color: #364452;
        text-decoration: none;
        color: aliceblue;
        padding: 9px 16px;
        font-weight: 700;
        font-size: 20px;
        border-radius: 10px;
        transition: background-color 0.3sa linear;
    }
    .mainPage .title .btn:hover {
	    background-color: #161d25;
    }


    
    
    .container {
        margin: 0px 100px;
    }

    .cardsHolder {
        display: flex;
        justify-content: center;
    }

    .card {
        z-index: 5;
        box-shadow: 10px 10px 40px 20px #0000001A;
        width: 25%;
        margin-right: 3%;
        margin-top: -10%;
        padding: 2% 3%;
        background-color: aliceblue;
    }

    .cardImage{
        display: flex;
        justify-content: center;
        padding-top: 3%;
    }

    .cardImg {
        width: 30%;
    }

    .cardTitle {
        font-weight: 700;
        font-size: 30px;
        display: flex;
        justify-content: center;
        margin-bottom: 3%;
    }


    .cardText {
        font-weight: 600;
        font-size: 20px;
        text-align: center;
        justify-content: center;
    }
</style>

