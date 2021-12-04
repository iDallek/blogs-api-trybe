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

Blogs API is a simple tool for blogging. Allowing users to login to create their posts as well as returning details to post to a blog, or to update a post.

![screenshot](https://user-images.githubusercontent.com/16707738/92399059-5716eb00-f132-11ea-8b14-bcacdc8ec97b.png)

Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

- Where can I see your demo?
- What was your experience?
- What have you learned/improved?
- Your wisdom? :)

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [Node.Js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

<style>
  @font-face {
    font-family: 'JetBrains Mono';
    src: url('./public/fonts/JetBrainsMono-Medium.woff2')
  }

  .endpoint {
    display: inline-block;
    font-family: 'JetBrains Mono';
    background-color: #2D333B;
    border-radius: 2px;
    width: 66px;
    text-align: center;
  }

  .endpoint:hover {
    animation: 1s shake linear alternate;
  }

  @keyframes shake {
  0% { transform: skewX(-15deg); }
  5% { transform: skewX(15deg); }
  10% { transform: skewX(-15deg); }
  15% { transform: skewX(15deg); }
  20% { transform: skewX(0deg); }
  100% { transform: skewX(0deg); }  
}

  .get {
    color: #94D7BE;
  }

  .post {
    color: #59ABFD;
  }

  .put {
    color: #A8AEBC;
  }

  .delete {
    color: #FD8883;
  }

  .url {
    display: inline-block;
    font-family: 'JetBrains Mono';
    border-radius: 2px;
    background-color: #2D333B;
    color: #F0F1F4;
    font-size: 0.7em;
    padding: 1.7px 3px;
    width: 101px;
  }

</style>

API was created as the REST pattern. This is a short summary, for more details go to the [documentation]().

* Endpoints `login`

  - <span class="endpoint post">POST</span> <span class="url">/login</span> Login user

* Endpoints `user`

  - <span class="endpoint get">GET</span> <span class="url">/user</span> Return list with registered users 
  - <span class="endpoint get">GET</span> <span class="url">/user/:id</span> Returns a user with the specified id 
  - <span class="endpoint post">POST</span> <span class="url">/user</span> Register user
  - <span class="endpoint delete">DELETE</span> <span class="url">/user/me</span> Allows user to delete their account 

* Endpoints `categories`
  - <span class="endpoint get">GET</span> <span class="url">/categories</span> Return all categories registered 
  - <span class="endpoint post">POST</span> <span class="url">/categories</span> Create a new category 


* Endpoints `post`

  - <span class="endpoint get">GET</span> <span class="url">/post</span> Return all posts 
  - <span class="endpoint get">GET</span> <span class="url">/post/:id</span> Returns specific post
  - <span class="endpoint get">GET</span> <span class="url">/post/search?q=</span> Returns post according to search term
  - <span class="endpoint post">POST</span> <span class="url">/post</span> Create a new post
  - <span class="endpoint put">PUT</span> <span class="url">/post/:id</span> Update a post 
  - <span class="endpoint delete">DELETE</span> <span class="url">/post/:id</span> Delete a post 

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