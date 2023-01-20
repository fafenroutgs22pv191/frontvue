<template>
  <div class="registrationPage">
            <LoginForm></LoginForm>
        </div>
        
</template>

<script>
import LoginForm from "@/components/Login/LoginForm";

export default {
  components: {LoginForm}
}
</script>

<style>
  .registrationPage {
	 display: flex;
	 flex-direction: column;
	 justify-content: space-around;
	 align-items: center;
	 box-sizing: border-box;
	 width: 100%;
	 height: 100%;
	 background-color: #e4984b;
}
 .registrationPage .mainPageView {
	 display: flex;
}
 .registrationPage .title {
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
}
 .registrationPage .title h1 {
	 text-align: center;
}
 .registrationPage .title button {
	 background-color: #364452;
	 text-decoration: none;
	 color: aliceblue;
	 padding: 9px 16px;
	 font-weight: 700;
	 font-size: 20px;
	 border-radius: 10px;
	 transition: background-color 0.3sa linear;
}
 .registrationPage .title button:hover {
	 background-color: #161d25;
}

.formHolder{
    display: flex;
    justify-content: center;
    margin-top: 10%;
}

.formMain {
    background-color:rgba(119, 90, 53, 0.708) ;
    width: 150%;
    border-radius: 10px;
    margin-top: -10%;
    font-size: 21px;
    font-weight: 600;
    padding: 5% 5%;
    color: aliceblue;
}

.formTextInfo {
    color: rgb(215, 218, 220);
    font-size: 17px;
    font-weight: 500;
}

.btnPrimary {
    font-size: 21px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    background-color: rgb(77, 38, 0);
    color: aliceblue;
    padding: 7px 12px;
}
    
.btnPrimary:hover {
    background-color:rgb(0, 0, 0);
}
</style>