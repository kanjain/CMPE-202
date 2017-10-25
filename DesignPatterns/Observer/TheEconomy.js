

// extends ConcreteSubject
var TheEconomy = function() {
  this.setState("The Price of gas is at $5.00/gal");
};

TheEconomy.prototype = new ConcreteSubject();

/*
The Price of gas is at $5.00/gal
The New iPad is out today
*/