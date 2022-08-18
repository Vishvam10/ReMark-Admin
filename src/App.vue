<template>
  <router-view/>
</template>

<style>

html {
/* Now, 1rem = 10px */
  font-size: 63.5%;
}
body {
  font-family: 'Inter', sans-serif !important;
  overflow-x: hidden;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

a {
  text-decoration: none !important;
  list-style: none;
  font-size: 1.6rem;
}
input {
  height: 4rem;
}
input[type=radio] {
  width: 2rem;
  height: 2rem;
  margin: 1rem 0rem 1rem 0rem;
}
label {
  transform: translate(-2rem);
}
option {
  color: black;
  font-size: 1.6rem;
  border-radius: 1.2rem;
}
ion-icon {
  color: #0d6efd;
  font-size: 2rem;
  transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  cursor: pointer;
}
ion-icon:hover {
  transform: scale(1.1);
}
ion-icon:active {
  transform: scale(1.0);
}
img {
  box-shadow: rgba(75, 77, 80, .4) 0px 8px 24px;
}
.btn {
  transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95) !important;
}
.btn:hover {
  transform: scale(1.05);
}
.btn:active {
  transform: scale(1.0);
}
.bg {    
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #00e1ff;
  background-image: linear-gradient(90deg, #00e1ff 0%, #001aff 100%);
} 
.dashboard {
  width: 120rem;
  height: 60rem;
  overflow-y: scroll;
  padding: 4rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}
#head {
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
  width: auto;
  height: 8rem;
  padding: 2rem;
  border-radius: 1rem;
}
.login {
  width: 40rem;
  min-height: auto;
  padding: 4rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}
.error-container {
  width: 40rem;
  min-height: auto;
  padding: 4rem;
  font-size: 2rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}
#inputContainer {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 16rem;
}
.icons {
  display: flex;
  flex-direction: row;
  width: 10rem;
  justify-content: space-evenly;
  margin: -0.4rem 0rem 4rem -2rem;
}
.submit_ctrl {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 6%;
}
.edit {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.hide {
  display: none;
}

#error_message {
  margin: 5rem 0rem 0rem -1rem;
  font-size: 1.2rem;
  background: #ff2f2f;
  border-radius: 0.9rem;
  padding: 2rem;
  color: white;
  line-height: 1.7rem;
}

.error_message_text {
  font-size: inherit;
  line-height: inherit;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #b8b8b8  #ffffff;
  scrollbar-gutter: 2rem;
}   
/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 16px;
}
*::-webkit-scrollbar-track {
  background: #ffffff;
}
*::-webkit-scrollbar-thumb {
  background-color: #808080;
  border-radius: 16px;
  border: 6px solid #ffffff;
}
</style>