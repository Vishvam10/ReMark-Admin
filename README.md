# Remark Website

## Overview :

<br>

- This website is made using `Vue-CLI` and `Bootstrap` 
- It provides a guide and the flow of the app for first time users *
- It also has separate admin related pages from where admins can create an account, login, register new websites and view their dashboard
- The dashboard consists of :
    - General Settings
    - Password Reset
    - Preferences *
    - Website Registration
    - Usage Statistics *

\* Under Development

<br>

## Todo 

<br>

- [] Proper validation in `login` and `passwordReset` page 
- [] Show error bubble when any error occurs

<br>

## Project setup

<br>

1. Install the dependencies :

    ```
    yarn install
    ```

2. Change the `BASE_API_URL` global variable in `main.js` file :

    ```
    app.config.globalProperties.BASE_API_URL = "your_server";
    ```


3. Compiles and hot-reloads for development

    ```
    yarn serve
    ```

4. Compiles and minifies for production

    ```
    yarn build
    ```

5. (Optional) Lints and fixes files
    ```
    yarn lint
    ```

