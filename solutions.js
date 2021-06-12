class Cat {
  constructor(name){
    this.name = name;
    this.groomed = false;
  }
  meow(){
    console.log('meow');
  }
}
function clean(cat){
  cat.groomed = true;
}

const conrad = new Cat("Conrad")
const loki = new Cat("Loki")

clean(loki);

console.log(conrad, loki);

conrad.meow();
loki.meow();

const catArr = [];

for(let i = 0; i < 6; i++){
    let cat = new Cat(`cat ${i+1}`);
    catArr.push(cat);
}

console.log(catArr[3]);

const catPerson = {
  cats: catArr
}

class Pirate {
  constructor(name, weapon, beard){
    this.name = name;
    this.weapon = weapon;
    this.beard = beard;
  }
  plunder(){
    console.log("gimme your dubloons")
  }
  drink(){
    console.log("pass the rum")
  }
  sail(){
    console.log("hoist the mainsail!")
  }
}
const blackPearl = [];
const jollyRoger = [];
let jack = new Pirate("Jack Sparrow", "Pistol", "Clean Shaven");
let will = new Pirate("Will Turner", "Sword", "Goatee");
let barbossa = new Pirate("Barbossa", "Monkey", "Scraggly");
blackPearl.push(jack);
blackPearl.push(will);
blackPearl.push(barbossa);
let blackbeard = new Pirate("Blackbeard", "Fear", "Gunpowder Laden");
let rakham = new Pirate("Jack Rakham", "Schemes", "Shaved");
let anne = new Pirate("Anne Bonny", "Intense Violence", "Fake");
jollyRoger.push(blackbeard);
jollyRoger.push(rakham);
jollyRoger.push(anne);
function crew(ship){
  for(let i = 0; i < ship.length; i++){
    console.log(ship[i]);
  }
}
crew(blackPearl)
crew(jollyRoger)
