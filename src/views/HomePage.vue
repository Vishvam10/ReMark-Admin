<template>
     <div class="home">
        <!-- <nav>
            <router-link to="/login" style="color: black; position: absolute; right: 24rem;">Login</router-link>
            <router-link to="/signup" style="color: black; position: absolute; right: 8rem;">Sign Up</router-link>
        </nav> -->
        <div class="row">
            <section class="p-header">
                <h4 class="header-text">Annotate any website with</h4>
                <span class="remark_text">REMARK</span>
                <div class="row" style="margin: 8rem 0rem 2rem 0rem">
                    <div class="col-6">
                        <router-link to="/login" style="color: black;">
                            <div class="customButton loginButton">
                                Login
                            </div>
                        </router-link>
                    </div>
                    <div class="col-6">
                        <router-link to="/signup" style="color: white;">
                            <div class="customButton signUpButton">
                                Sign Up
                            </div>
                        </router-link>
                    </div>
                </div>
                <p class="header-details">
                    Scroll down to know more
                </p>
            </section>
        </div>
        <div class="row">
            <section class="remark_section" style="margin: 8rem 0rem 12rem 0rem">
                <div class="container">
                    <div class="row">
                        <h1 style="font-weight: bold; font-size: 8rem; margin: 8rem 0rem 4rem 0rem;">What is it ?</h1>
                        <div class="col-6">
                            <p class="text" style="width: 40%">Remark is a lightweight, easy-to-use and hihgly customizable JavaScript library for annotating websites. The logic is implemented in pure JS and markup and styling is taken care by HTML5 and CSS3.</p>
                        </div>
                        <div class="col-6">
                            <img src="./../static/images/remark(3).png" alt="CreateAnnotationImage" class="remark_img" style="margin: -13rem 0rem 0rem -6rem;">
                        </div>
                    </div>

                </div>
            </section>
        </div>
        <div class="row">
            <section class="remark_section" style="margin: 8rem 0rem 12rem 0rem">
                <div class="container">
                    <div class="row">
                        <h1 style="font-weight: bold; font-size: 8rem; margin: 0rem 0rem 4rem 0rem">Installation</h1>
                        <div class="col-3">
                            <div class="card">
                                <h4 class="card_header">1</h4>
                                <p class="card_text">Create an admin account.</p>
                            </div>
                        </div>
                        <div class="col-3 gx-5">
                            <div class="card">
                                <h4 class="card_header">2</h4>
                                <p class="card_text">Register your website.</p>
                            </div>
                        </div>
                        <div class="col-3 gx-5">
                            <div class="card">
                                <h4 class="card_header">3</h4>
                                <p class="card_text">Download the script file along with the credentials.</p>
                            </div>
                        </div>
                        <div class="col-3 gx-5">
                            <div class="card">
                                <h4 class="card_header">4</h4>
                                <p class="card_text">Include the script file in your HTML file</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="row">
            <section class="remark_section" style="margin: 0rem 0rem 12rem 0rem;">
                <div class="container">
                    <div class="row">
                        <h1 style="font-weight: bold; font-size: 8rem; margin: 0rem 0rem 4rem 0rem;">Usage</h1>
                        <div class="col-4">
                            <div class="card usage_card">
                                <h4 class="card_header">1</h4>
                                <p class="card_text">Create a remark_config.js file and place the credentials in the following format :
                                    <br><br>
                                    <code>
                                        const remark_config = JSON.stringify({
                                            REMARK_API_KEY: "yourkey",
                                            REMARK_WEBSITE_ID: "yourwebsiteid"  
                                        })
                                    </code>
                                </p>
                            </div>
                        </div>
                        <div class="col-4 gx-5">
                            <div class="card usage_card">
                                <h4 class="card_header">2</h4>
                                <p class="card_text">
                                    That's basically it. Click on login and login as an admin to start the annotation process. To create an annotation for an element, hover over the element, <b>Right Click</b> on it and select <b>Create Annotation</b> option from the custom contextmenu.
                                </p>
                            </div>
                        </div>
                        <div class="col-4 gx-5">
                            <div class="card usage_card">
                                <h4 class="card_header">3</h4>
                                <p class="card_text">To create a comment, open the annotation by choosing the <b>Open Annotation</b> option from the contextmenu, then just start typing on the text input. Everything else would be pretty intuitive but if you want to know more, please visit the <a href="https://github.com/Vishvam10/ReMark-Client" class="doc_link">documentation</a></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
          <div class="row">
            <section class="remark_section" style="margin: 8rem 0rem 12rem 0rem">
                <div class="container">
                    <div class="row">
                        <h1 style="font-weight: bold; font-size: 8rem; margin: 0rem 0rem 6rem 0rem">UI Components</h1>
                        <div class="col-4">
                             <img src="./../static/images/remark(2).png" alt="galleryImage9" class="remark_img">
                        </div>
                        <div class="col-4">
                             <img src="./../static/images/remark(6).png" alt="galleryImage2" class="remark_img">
                        </div>
                        <div class="col-4">
                             <img src="./../static/images/remark(7).png" alt="galleryImage3" class="remark_img">
                        </div>
                    </div>
                    <div class="row" style="margin: 8rem 0rem 0rem 0rem;">
                        <div class="col-4">
                             <img src="./../static/images/remark(11).png" alt="galleryImage4" class="remark_img">
                        </div>
                        <div class="col-4">
                             <img src="./../static/images/remark(10).png" alt="galleryImage7" class="remark_img">
                        </div>
                        <div class="col-4">
                             <img src="./../static/images/remark(12).png" alt="galleryImage6" class="remark_img">
                        </div>
                    </div>
                    <div class="row" style="margin: 8rem 0rem 0rem 0rem;">
                        <div class="col-3">
                             <img src="./../static/images/remark(13).png" alt="galleryImage8" class="remark_img">
                        </div>
                        <div class="col-3">
                             <img src="./../static/images/remark(14).png" alt="galleryImage9" class="remark_img">
                        </div>
                        <div class="col-3">
                             <img src="./../static/images/remark(16).png" alt="galleryImage10" class="remark_img">
                        </div>
                        <div class="col-3">
                             <img src="./../static/images/remark(18).png" alt="galleryImage11" class="remark_img">
                        </div>
                    </div>
                    <div class="row" style="margin: 8rem 0rem 0rem 0rem;">
                        <div class="col-4">
                             <img src="./../static/images/remark(23).png" alt="galleryImage12" class="remark_img">
                        </div>
                        <div class="col-4">
                             <img src="./../static/images/remark(17).png" alt="galleryImage13" class="remark_img">
                        </div>
                        <div class="col-4">
                             <img src="./../static/images/remark(27).png" alt="galleryImage14" class="remark_img">
                        </div>
                    </div>
                    <div class="row" style="margin: 8rem 0rem 0rem 0rem;">
                        <div class="col-4">
                             <img src="./../static/images/remark(15).png" alt="galleryImage15" class="remark_img">
                        </div>
                        <div class="col-4">
                             <img src="./../static/images/remark(25).png" alt="galleryImage16" class="remark_img">
                        </div>
                        <div class="col-4">
                             <img src="./../static/images/remark(26).png" alt="galleryImage17" class="remark_img">
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="row">
            <section class="try-now">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h1 class="heading create">Try Now !</h1>
                    <h2 class="heading dim">It is free after all</h2>
                    <h4 class="heading dim2">Yep, you read it right. It is free. Hop In !</h4>
                    <router-link to="/signup" style="color: white;">
                        <div class="customButton signUpButton" style="margin: 1rem;">
                            Sign Up
                        </div>
                    </router-link>
                </div>
            </section>
        </div>
        <div id="home-footer">
            Developed with ❤ by <span class="fw-bold" style="margin: 1rem 0rem 1rem 0.6rem;">
                <a href="https://github.com/Vishvam10" style="color: white; font-size: 2rem;" class="link">Vishvam S</a>
            </span>
        </div>
    </div>
</template>

<style scoped>
    a {
        color: black;
        transition: all 0.2s ease-in-out;
    } 
    a:hover {
        transform: scale(1.05);
    }
    a:active {
        transform: scale(1.0);
    }
    h1,h2,h3,h4,h5,h6 {
        color: black;
    }
    ion-icon {
        font-size: 4rem;
        color: rgb(128, 128, 128);
    }
    .remark_img {
        height: auto;
        width: 100%;
        border-radius: 1rem;
    }
    .link {
        background: linear-gradient(to right, rgb(148, 0, 250), rgb(255, 2, 26));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.1s ease-in-out; 
    }
    .doc_link {
        background: linear-gradient(to right, rgb(148, 0, 250), rgb(255, 2, 26));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;   
    }
    .card {
        width: auto;
        height: 16rem;
        background: white;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        border-radius: 2rem;
        padding: 3rem;
        transition: all 0.2s ease-in-out;
    }
    .card:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 24px 0px, rgba(0, 0, 0, 0.02) 0px 0px 30px 1px;
    }
    .card:active {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
    .card_header {
        font-size: 2.4rem;
        font-weight: 700;
        margin: 0rem 0rem 2rem 0rem;
        /* background: linear-gradient(rgb(148, 0, 250), rgb(255, 2, 26));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
        color: black;
        
    }
    .card_text {
        font-size: 1.6rem;
        color: #8f8f8f;
    }
    .usage_card {
        height: 28rem;
    }
    .remark_text {
        font-size: 7rem;
        font-weight: 700;
        background: linear-gradient(to right, rgb(148, 0, 250), rgb(255, 2, 26));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .logo {
        width: 10rem; 
        height: 2rem;
        box-shadow: none;
    }
    .home {
        padding: 4rem;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
    .p-header {
        position: relative;
        top: 12rem;
        width: 60rem;
        height: 51rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .remark_section {
        padding: 4rem;
    }
    .header-text {
        font-size: 4rem;
        font-weight: bold;
        color: black;
        margin: 1rem 1rem -1rem 0rem;
    }
    .heading {
        font-size: 10rem;
        font-weight: bold;
    }
  
    .header-details {
        margin: 4rem 0rem 0rem 0rem;
        font-size: 1.6rem;
        width: 72rem;
        color: gray;
        text-align: center;
    }
    .customButton {
        width: 18rem;
        height: 6rem;
        border-radius: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        margin: 0rem 6rem 0rem 0rem;
        cursor: pointer;
    }
    .customButton:hover {
        transform: scale(1.05);
    }
    .customButton:active {
        transform: scale(1.0);
    }
    .signUpButton {
        background-color: black;
    }
    .loginButton {
        border: 0.5px solid black;
        color: black;
    }
    .text {
        font-size: 1.6rem;
        color: #7d7d7d;
    }
    .try-now {
        position: relative;
        top: 12rem;
        width: 50rem;
        margin: 2rem 6rem 20rem 2rem;
    }
    .dim {
        font-size: 2rem;
        color: gray;
        margin: 2rem 0rem 1rem 0rem;
    }
    .dim2 {
        margin: 0rem 0rem 4rem 0rem;
        color: gray;
        font-size: 2rem;
        font-weight: normal;
    }
    #home-footer {
        width: 100%;
        height: 16rem;
        position: absolute;
        bottom: -16rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: #101010;
        font-size: 2rem;
    }
    #footer {
        position: absolute;
        bottom: 1.5rem;
        left: 43%;
        font-size: 1.6rem;
        color: black;
    }
</style>

<script>

export default {
  name: 'HomePage',
}
</script>
