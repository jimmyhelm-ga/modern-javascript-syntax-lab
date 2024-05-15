//Exercise 1

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const doubledNumbers = nums.map((num) => {
  return num * 2;
});

console.log(doubledNumbers); 

//Exercise 2

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping); 

//Exercise 3

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  const { make, model } = car;
  
  console.log(make); 
  console.log(model); 

  //Exercise 4

  const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings); 

//Exercise 5

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  const myCar = { ...car };
  myCar.model = 'q7';
  
  console.log('Original:', car); 
  console.log('My Car:', myCar); 

//Exercise 6

const userProfile = {};

const propertyName = 'username';
userProfile[propertyName] = 'jimmyatthehelm';

console.log(userProfile); 

//Exercise 7

//Exercise 8

function describeAnimal(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
  }

//Exercise 9

let pizza = 'tasty';
console.log(pizza === 'tasty' ? 'yum' : 'yuck');

//Exercise 10.1

const localLangConfig = null; 

const LANG = localLangConfig || 'en';

console.log('Language setting:', LANG);

//Exercise 10.2

const userSavedTheme = null; 

const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);

//Exercise 11

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.age;
  
  console.log(cat);

  