#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const { addProduct, findProduct, updateProduct, removeProduct, listProducts } = require('./index');

// Product Questions
const questions = [
  {
    type: 'input',
    name: 'productName',
    message: 'Product Name'
  },
  {
    type: 'input',
    name: 'productID',
    message: 'Product ID'
  },
  {
    type: 'input',
    name: 'manufacturer',
    message: 'Name of Manufacturer'
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'Quantity'
  }
]

program 
  .version('1.0.0')
  .description('Project Management System')

// WITHOUT INQUIRER
// program
//   .command('add <productName> <ProductID> <manufacturer> <quantity>')
//   .alias('a')
//   .description('Add a Product')
//   .action((productName, productID, manufacturer, quantity) => {
//     addProduct({ productName, productID, manufacturer, quantity })
// })

// Add Command
program
  .command('add')
  .alias('a')
  .description('Add a Product')
  .action(() => {
    prompt(questions).then(answers => addProduct(answers))
  })

// Find Command
program
  .command('find <productName>')
  .alias('f')
  .description('Find a Product')
  .action(productName => findProduct(productName))

// Update Command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a Product')
  .action(_id => {
    prompt(questions).then(answers => updateProduct(_id, answers))
})

// Remove Command
program
  .command('remove <_id>')
  .alias('r')
  .description('Delete a Product')
  .action(_id => removeProduct(_id))

// List Command
program
    .command('list')
    .alias('l')
    .description('List all Products')
    .action(() => listProducts())

program.parse(process.argv)