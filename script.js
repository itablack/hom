const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const products = [
  {
    id: 'jew-1',
    name: '24 karat Gold Necklace',
    price: 899
  },
  {
    id: 'jew-2',
    name: 'BJJ U Ice Necklace',
    price: 999
  },
  {
    id: 'jew-3',
    name: 'Maclaren wrist watch',
    price: 5399
  }
];

let sum = 0;
let cart = [];

function welcome() {
  console.log('**********');
  console.log('Welcome to ITA MERCY JEWERIES ');
  console.log('************');
  printMenu();
}

function printMenu() {
  console.log('1. View All Products');
  console.log('2. Add to Cart');
  console.log('3. View Cart');
  console.log('4. Checkout');
  console.log('5. Exit');
  console.log('Please choose an option to navigate the store: \n');
}

function viewProducts() {
  console.log("LIST OF PRODUCTS");
  products.forEach(product => {
    console.log(${product.id}. ${product.name}: $${product.price});
  });
  console.log("--------------------------------------------\n");
  printMenu();
}

function addToCart() {
  let id;

  rl.question('Enter the id of the product you want to add to your cart: ', answer => {
    id = answer;
    const product = products.find(p => p.id === id);
    if (product) {
      cart.push(product);
      sum += product.price;
      console.log(${product.name} was successfully added to your cart.);
      console.log("--------------------------------------------\n");
      printMenu();
    } else {
      console.log('This is not a valid product id.');
      addToCart();
    }
  });
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your cart is empty!');
  } else {
    cart.forEach(product => {
      console.log(${product.name}: $${product.price});
    });
    console.log(Total: $${sum});
  }
  console.log("--------------------------------------------\n");
  printMenu();
}

function checkout() {
  console.log(Thank you for your purchase! Your total was $${sum});
  sum = 0;
  cart = [];
  console.log("--------------------------------------------\n");
  printMenu();
}

welcome();

rl.on('line', function(line) {
  switch (line.trim()) {
    case '1':
      viewProducts();
      break;

    case '2':
      addToCart();
      break;

    case '3':
      viewCart();
      break;

    case '4':
      checkout();
      break;

    case '5':
      console.log('Thank you for Shopping with us!');
      process.exit(0);
      break;

    default:
      console.log("Invalid choice. Please try again.");
      printMenu();
      break;
  }
});
