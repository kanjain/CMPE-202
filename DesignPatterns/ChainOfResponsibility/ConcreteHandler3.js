// Implement Handler
function ConcreteHandler3() {
  this.successor;
}

// implement Handler
ConcreteHandler3.prototype = Object.create(Handler);


ConcreteHandler3.prototype.handleRequest = function(request) {
  console.log( "R3 got the request...");
  if (request== "R3") {
    console.log( "ConcreteHandler3" + " => This one is mine!");
  }
  else {
    if ( this.successor != null )
      this.successor.handleRequest(request);
  }

};

ConcreteHandler3.prototype.setSuccessor = function(next) {
  this.successor = next ;
};