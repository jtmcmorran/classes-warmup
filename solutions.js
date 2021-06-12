class Cat {
  constructor(name){
    this.groomed = false;
  }
  meow(){
    console.log('meow');
  }
}
function clean(cat){
  cat.groomed = true;
}

const conrad = new Cat()
const loki = new Cat()

clean(loki);

console.log(conrad, loki);

conrad.meow();
loki.meow();
