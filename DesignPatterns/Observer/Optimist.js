function Optimist(sub) {
  var ret = new ConcreteObserver(sub);

  ret.update = function() {
    if (this.subject.getState() == "The Price of gas is at $5.00/gal")  {
      this.observerState = "Great! It's time to go green." ;
    }
    else if (this.subject.getState() == "The New iPad is out today" )  {
      this.observerState = "Apple, take my money!" ;
    }
    else {
      this.observerState = ":)" ;
    }
  };

  return ret;
}

