# Remark Website
- This website is made using `Vue-CLI` and `Bootstrap` 
- It provides a guide and the flow of the app for first time users
- It also has **separate admin related pages** from where admins can create an account, login, register new websites and view their dashboard
- The **admin dashboard** consists of :
    - General Settings
    - Password Reset
    - Preferences *
    - Website Registration
    - Usage Statistics *

\* Under Development



<br>

## Project setup

<br>


# Basic Setup


Clone the project
```bash
  git clone ...
```

Go to the project directory
```bash
  cd my-project
```

Install the required dependencies using either `npm` or `yarn`
```
  npm install 
  OR
  yarn install
```

<br>


Change the `BASE_API_URL` global variable in `main.js` file : (Without the trailing slash)

```
    FOR EXAMPLE :
    app.config.globalProperties.BASE_API_URL = "127.0.0.1:5000";
```


Compiles and hot-reloads for development

```
    yarn serve
```

Compiles and minifies for production

```
    yarn build
```


<br>

## Todo 

<br>

- [x] Proper validation in `login` and `passwordReset` page 
- [x] Show error bubble when any error occurs