// Implement Handler
function ConcreteHandler1() {
  this.successor;
}

// implement Handler
ConcreteHandler1.prototype = Object.create(Handler);


ConcreteHandler1.prototype.handleRequest = function(request) {
  console.log( "R1 got the request...");
  if (request== "R1") {
    console.log( "ConcreteHandler1" + " => This one is mine!");
  }
  else {
    if ( this.successor != null )
      this.successor.handleRequest(request);
  }

};

ConcreteHandler1.prototype.setSuccessor = function(next) {
  this.successor = next ;
};
