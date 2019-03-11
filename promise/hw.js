const db = require('./order')

// Look at the Menu
/* *************************************************************** */
// 1. Promise Foods has a method called `.readMenu`.  
// Call this method and console.log the cheapest burger on the menu once the promise has been resolved.


//CODE FOR QUESTION 1 HERE

// db.readMenu()
// .then(menu =>{
//     let temp = menu[0].price;
//     menu.forEach(el => {
//       if(el.price < temp.price){
//         temp = el;
//       }
//     });
//     console.log(e);
//   })
// .catch(err => console.log(err))

// Order Some Food
/* *************************************************************** */
// 2. For this task, you will use the method .order to order the cheapest burger on the menu. 
// The order method has one argument, the name of the burger you would like to order. 
// Once the promise has been resolved, console.log "Man that burger sure was tasty!".

// CODE FOR QUESTION 2 HERE
// db.order("blue 'shroom")
// .then(suc => console.log(suc))
// .catch(err => console.log(err))

// 3. Try and use the same method to order a `quesadilla`.  
//  Since Promise Burger only serves burgers, this will throw an error.  
//  Make sure that your Promise can be dealt with when it is rejected.

// CODE FOR QUESTION 3 HERE


// Add A Burger To The Menu
/* *************************************************************** */

// 4. kitchen also has a method called `addToMenu`. 
//  This method has one argument, which expects an object with a name, price, and description.  
//  Use this method to add this burger to the menu. 
//  Add a method to console.log the response once the promise is resolved!
//  Also add a method to catch an error if something goes wrong

const newBurger = {
    "name": "TRIPLE CORONARY BYPASS",
    "price": 28.95,
    "description": ` It becomes difficult to even describe this, the most preposterous of our Bypass Burgers. All you really need to know is that we use three burger patties, three fried eggs, fourteen slices of American cheese, and ten slices of bacon, all packed between two grilled cheese sandwiches. Figuring out how to add condiments is completely up to you. It’s served in a big bowl of french fries and tater tots covered, in lots of our Cheesy-Cheese Goo. Enjoy!`
  }
  
  // CODE FOR QUESTION 4 HERE
  
  // 5. Validate that the new item has been added to the menu by calling `readMenu` again.  
  // We only want to call `readMenu` after we get a response that is successful. 
  // Remember that we can chain promises together the same way that we can chain jQuery methods.
  
  // REFACTOR QUESTION 4 TO ACCOUNT FOR THIS REQUIREMENT
  
// db.addToMenu(newBurger)
// .then(suc => db.readMenu().then(suc => console.log(suc))).catch(err => console.log(err));

db.addToMenu(newBurger)
db.readMenu()
.then(suc => console.log(suc))
.catch(err => console.log(err));


  // Stretch Goals
  /* *************************************************************** */
  // 6. Let's be honest, people only go to Promise Burger when they are showing out-of-towners around.  
  // You old college roommates are all visiting Atlanta and want to try out this place.  
  // They already know what they want to eat!
  // Loop through each customer and use the `.order` function on each object within the array.  
  // Then console.log `All Food Delivered` when ALL of the promises have been resolved.  
  // This will require you to use a method we haven't covered in class.
  
  const customers = [
    {
      name: "Josie",
      order: "Holy Guacamole"
    }, {
      name: "Chris",
      order: "Big Blue Buffalo"
    }, {
      name: "John",
      order: "Blue 'Shroom",
    }, {
      name: "Katelyn",
      order: "Fat Elvis"
    }
  ]
  
  // CODE FOR QUESTION 6 HERE