[comment]: <> (This readme was created by Nodinq Readme Generator)
![alt text](https://img.shields.io/badge/License-MIT-brightgreen)
![alt text](https://img.shields.io/badge/Ver.-1.0.0-blue)

# ORM eCommerce Bkend


## Description

Core back-end of e-commerce application developed in Node ExpressJS, Sequelize and MySQL. The purpose of the project was modeling the database using Sequelize, combining four table where one of then is a through between Products and Tags. Also each route query use Promise to improve the user experience in the front-end. The use of ORM allowed to write almost everything in JavaScript for complex SQL queries. One of the challenges to work with servers and API is the process of back-and-forth testing. But is could be overcome this problem using Insomnia and to have implemented testing seeds.

## Screenshot

![alt screenshot](https://github.com/brberis/orm-ecommerce-bkend/raw/main/assets/images/web.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Datanase Models](#database-models)
- [Credits](#credits)
- [Questions](#questions)

## Installation

Clone this project and run `npm install`. On MySQL CLI create the database with the following command in the root of the project. `source ./db/schema.sql`.T hen seed the tables using `npm run seed`. Finally start the server running this command `npm start`.


## Database Models

* `Category`

  - `id`
    - *Integer*
    - *Not null*
    - *Primary key*
    - *Auto increment*

  - `category_name`
    - *String*
    - *Not null*

* `Product`
  - `id`
    - *Integer*
    - *Not null*
    - *Primary key*
    - *Auto increment*

  - `product_name`
    - *String*
    - *Not null*

  - `price`
    - *Decimal*
    - *Not null* 

  - `stock`
    - *Integer*
    - *Not null* 
    - *default 10*

  - `category_id`
    - *Integer*

* `Tag`
  - `id`
    - *Integer*
    - *Not null*
    - *Primary key*
    - *Auto increment*

  - `tag_name`
    - *String*
    - *Not null*

* `ProductTag`
  - `id`
    - *Integer*
    - *Not null*
    - *Primary key*
    - *Auto increment*

  - `product_id`
    - *Integer*

  - `tag_id`
    - *Integer*


## Usage

Use Insomnia to try the Restful API implementation with the http methods POST, GET, GET by id, PUT and DELETE by id.

### End Points

* /api/categories
* /api/products
* /api/tags


### Watch this video.

[![Watch the video](https://github.com/brberis/orm-ecommerce-bkend/blob/main/assets/images/video.png?raw=true)](https://youtu.be/-PFLMLkFNaY)


## Questions

Please send your questions [here](mailto:cristobal@barberis.com?subject=[GitHub]%20ORM%20eCommerce%20Bkend) or visit [github/brberis](https://github.com/brberis).

## Credits

* Cristobal A Barberis%      