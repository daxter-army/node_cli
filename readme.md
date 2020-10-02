# Lister
* A Node.js & MongoDB based cli product management system, build with commander, inquirer and mongoose

* CRUD operations for **Creating**, **reading**, **updating** & **deleting** products

## Commands
* base command : **procli <args_>**

### args
* **add** or **a**
* **find** *<product_name>* or **f** *<product_name>*
* **update** *<_id>* or **u** *<_id>*
* **remove** *<_id>* or *<_id>*

## Installation
**NOTE : MongoDB should be installed locally or change the url in db/mongoose.js to use MongoDB cloud**

* hit **npm install**
* hit **npm link**
* check version with **procli** *--version*