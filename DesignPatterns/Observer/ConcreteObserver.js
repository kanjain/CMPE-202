// Implement Observer
function ConcreteObserver(theSubject) {
   this.observerState;
   this.subject = theSubject;

}

// implement Observer
ConcreteObserver.prototype = Object.create(Observer);

ConcreteObserver.prototype.update = function() {
    // do nothing
};

ConcreteObserver.prototype.showState = function() {
    // hard-coded class name
    // this.getClass().getName()
    console.log("Observer:" + "ConcreteObserver" + " = " + this.observerState);
};
