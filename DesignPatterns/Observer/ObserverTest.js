function ObserverTest() {
  this.runTest = function() {
    var s = new TheEconomy();
    var p = new Pessimist(s);
    var o = new Optimist(s);
    s.attach(p);
    s.attach(o);
    s.setState("The New iPad is out today");
    p.showState();
    o.showState();
    s.setState("Hey, Its Friday!");
    p.showState();
    o.showState();
  };

  this.runTest();
}