<h1 align="center">
  Blogs API <span style="color:#2FC18C" >Trybe</span>
</h1>

<div align="center">
   Project made on <a href="https://www.betrybe.com/" target="_blank">Trybe</a>.
</div>

<div align="center">
  <h3>
    <a href="https://{your-demo-link.your-domain}">
      Documentation
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How To Use](#how-to-use)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

Blogs API is a simple tool for posting to blogs, along with the feature of registering users, thus allowing them to post to a blog, being able to search, create, edit or remove posts. 

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [Node.Js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

API was created as the REST pattern. This is a short summary, for more details go to the [documentation]().

* #### Endpoints LOGIN
  - **POST** `/login` Login user
  
* #### Endpoints USER

  - **GET** `/user` Return list with registered users 
  - **GET** `/user/:id` Returns a user with the specified id 
  - **POST** `/user` Register user
  - **DELETE** `/user/me` Allows user to delete their account 

* #### Endpoints CATEGORIES
  - **GET** `/categories` Return all categories registered 
  - **POST** `/categories` Create a new category 


* #### Endpoints POST

  - **GET** `/post` Return all posts 
  - **GET** `/post/:id` Returns specific post
  - **GET** `/post/search?q=` Returns post according to search term
  - **POST** `/post` Create a new post
  - **PUT** `/post/:id` Update a post 
  - **DELETE** `/post/:id` Delete a post 

## How To Use

<!-- Example: -->

To clone and run this API, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/iDallek/blogs-api-trybe
```

```bash
# Install dependencies
npm install
```

```bash
# Run the app
npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [Conventinal Commit Messages](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)
- [Node.js](https://nodejs.org/)
- [Sequelize](https://sequelize.org/master/)
- [JWT](https://jwt.io/)
- [JOI - Schema validator for javascript](https://joi.dev/)

## Contact

- GitHub [@iDallek](https://github.com/iDallek)
- LinkedIn [Gabriel Carvalho](https://www.linkedin.com/in/gabriel-carvalho-84933457/)
