// Implements Subject
var ConcreteSubject = function () {
  this.subjectState;
  this.observers = [];
};

// implement Subject
ConcreteSubject.prototype = Object.create(Subject);

ConcreteSubject.prototype.getState = function() {
    return this.subjectState;
};

ConcreteSubject.prototype.setState = function(status) {
    this.subjectState = status;
    this.notifyObservers();
};

ConcreteSubject.prototype.attach = function(obj) {
    this.observers.push(obj);
};

ConcreteSubject.prototype.detach = function(obj) {
    this.observers.remove(obj);
};

ConcreteSubject.prototype.notifyObservers = function() {
    for (var i = 0; i < this.observers.length; i++) {
      var obj = this.observers[i];
      obj.update();
    }
};

ConcreteSubject.prototype.showState = function() {
  //this.getClass().getName()
    console.log( "Subject: " + "ConcreteSubject" + " = " + this.subjectState);
};