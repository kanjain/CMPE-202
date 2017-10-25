function Pessimist(sub) {
  var ret = new ConcreteObserver(sub);

  ret.update = function() {
    if (this.subject.getState() == "The Price of gas is at $5.00/gal")  {
      this.observerState = "This is the beginning of the end of the world!" ;
    }
    else if (this.subject.getState() ==  "The New iPad is out today")  {
      this.observerState = "Not another iPad!"  ;
    }
    else {
      this.observerState = ":(" ;
    }
  };

  return ret;
}