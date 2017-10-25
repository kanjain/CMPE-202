// Implement Handler
function ConcreteHandler2() {
  this.successor;
}

// implement Handler
ConcreteHandler2.prototype = Object.create(Handler);


ConcreteHandler2.prototype.handleRequest = function(request) {
  console.log( "R2 got the request...");
  if (request== "R2") {
    console.log( "ConcreteHandler2" + " => This one is mine!");
  }
  else {
    if ( this.successor != null )
      this.successor.handleRequest(request);
  }

};

ConcreteHandler2.prototype.setSuccessor = function(next) {
  this.successor = next ;
};