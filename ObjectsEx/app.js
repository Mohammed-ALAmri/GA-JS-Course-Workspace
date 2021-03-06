// for protiction use
var f = (function(){
  var name = "Mo";

  return {
    n: name
  }
}());

//console.log(f.n);
//create an obj
var Person = function(name, last){
  this.name = name;
  this.last = last;
}
///////////////////////////////////////////////////////////////////////////#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
class Monkey {
  constructor(name, species, foodsEaten){
    this.name = name;
    this.species = species;
    this.foodsEaten = foodsEaten;
  }

  getname(){
    return this.name;
  }

  setname(name){
     this.name = name;
  }

  getspecies(){
    return this.species;
  }

  setspecies(species){
     this.species = species;
  }

  getfoodsEaten(){
    return this.foodsEaten;
  }

  eatSomething(thingAsString){
    this.foodsEaten = thingAsString;
  }

  introduce(){
    return ("Name:" + this.getname() + "\n" + 
           "Species:" + this.getspecies() + "\n" + 
           "foodsEaten:" + this.getfoodsEaten() + "\n") ;
  }
}

var m = new Monkey("Monkey", "shampanse", "panana");
console.log(m.introduce());

/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. 
// In comments, list at least three reasonable abstractions that you might use to build this program; 
// for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have.
// Below is an example - please write your answer in the same format.

  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here
class Car {
  constructor(make, model, year, stats){
    this.make = make;
    this.model = model;
    this.year = year;
    this.stats = stats;
  }

  getmake(){
    return this.make;
  }

  setmake(make){
     this.make = make;
  }

  getmodel(){
    return this.model;
  }

  setmodel(model){
     this.model = model;
  }

  getyear(){
    return this.year;
  }

  setyear(year){
     this.year = year;
  }
  
  getstats(){
    return this.stats;
  }

  setstats(stats){
     this.stats = stats;
  }
}
// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. 
// Store it in the variable 'pet_owner', below. 
// Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

  var pet_owner;

  // Answer Starts Here
  class PetOwner {
    constructor(name, address){
      this.name = name;
      this.address = address;
    }
  
    getname(){
      return this.name;
    }
  
    setname(name){
       this.name = name;
    }
  
    getaddress(){
      return this.address;
    }
  
    setaddress(address){
       this.address = address;
    }
  }
  pet_owner = new PetOwner("Mo", "Riyadh");
  // Answer Ends Here
  
  // 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.
  
    // Pet
    // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
    // Every 'pet' has:
    // - a name
    // - a species
    // - a breed
    // - a noise that it can make (e.g. 'bark', 'meow', etc.)
    // Every pet can:
    // - make noise (each pet makes its own unique noise, as specified by `noise`.
  
  var some_pet;
  
  // Answer Starts Here
  class Pet {
    constructor(name, species, breed, noise){
      this.name = name;
      this.species = species;
      this.breed = breed;
      this.noise = noise;
    }
  
    getname(){
      return this.name;
    }
  
    setname(name){
       this.name = name;
    }
  
    getspecies(){
      return this.species;
    }
  
    setspecies(species){
       this.species = species;
    }
  
    getbreed(){
      return this.breed;
    }
  
    setbreed(breed){
      this.breed = breed;
    }

    getnoise(){
      return this.noise;
    }
  
    setnoise(noise){
      this.noise = noise;
    }
  }
  some_pet = new Pet("lo", "cat", "cat", "meaw");
  // Answer Ends Here
  
  // 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
  //    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
  //    which behaves as described in Q3.
  
  var Pet;
  // Answer Starts Here
  class NPet {
    constructor(name, species, breed, noise){
      this.name = name;
      this.species = species;
      this.breed = breed;
      this.noise = noise;
    }
  
    getname(){
      return this.name;
    }
  
    setname(name){
       this.name = name;
    }
  
    getspecies(){
      return this.species;
    }
  
    setspecies(species){
       this.species = species;
    }
  
    getbreed(){
      return this.breed;
    }
  
    setbreed(breed){
      this.breed = breed;
    }

    getnoise(){
      return this.noise;
    }
  
    makeNoise(noise){
      this.noise = noise;
    }
  }  
  pet = new NPet("lo", "cat", "cat", "meaw");
  // Answer Ends Here
  
  module.exports = {
    answerTwo: pet_owner,
    answerThree: some_pet,
    answerFour: Pet
  }
  
  /////////////////////////////////////////////////////////////
  
  // You're done! Refer back to README.md.
  
  /////////////////////////////////////////////////////////////