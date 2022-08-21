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

# Usage

1. Setup and run the site

2. Create an account by clicking on the `signup` button

3. Login to your account. This is an **admin** account where you can manage you registered websites. 

4. Go to `Register Website` and enter you website URL

5. After doing so, `download` the script by going to `Developer Settings` and clicking on `Download Script`

6. Create a `remark_config.js` file and include your `API_KEY` and `website_id` in it. For example :
    ```
    const remark_config = JSON.stringify({
        REMARK_API_KEY: "yout_api_key",
        REMARK_WEBSITE_ID: "your_registered_website_id"  
    })
    ```

7. Add the `remark_config.js` file along with the downloaded script right before the `<head>` 

8. Add an `id=remark_annotation_script` to the downloaded script

9. The final HTML file should have a `<head>` similiar to this :
```
  <head>
    .
    .
    <script src="remark_config.js"></script>
    <script src="/dist/main.js" type="module" id="remark_annotation_script"></script>
    .
    .
  </head>

```

10. This should be good to go. For configuring the backend, please refer this [documentation](https://github.com/Vishvam10/ReMark-Backend)

**NOTE :** Though an admin can have many websites (implemented in the backend), for the time being, we have simplified to one-admin-one-website. This will be changed in the near future

---

1. If the setup was done properly (including the backend), in your website, a small modal would appear. 

2. Click on `Login`, enter your credentials (use the string "admin" for admins, and "user" for public users - without the quotes, of course ) and then click on `Start Annotation` to start the annotation process

3. **Signup via your website is for public users and not admin**  

4. **Hover over an element (this would give a dotted highlight of the element) in your website and Right-Click on it**, a custom context menu should be created. Click on `Create Annotation` to create the annotation. 

5. If an annotation is already present, it would be
highlighted already. Right-clicking on such elements brings up Open, Edit and Delete annotation options

6. Once the annotation is opened, comments can be created by entering valid strings in the provided text are. (Multi-line text are supported)

7. The comments can be up/downvoted, edited or deleted. These options are quite intuitive as there are icons for it on the comment.

8. Annotation or Comment deletion requires confirmation (a modal would pop up asking you to type in some string)


## Todo 

<br>

- [x] Proper validation in `login` and `passwordReset` page 
- [x] Show error bubble when any error occurs