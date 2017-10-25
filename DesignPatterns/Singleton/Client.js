function Client() {
  var theSingleton,
      theSingleton1;

  this.runTest = function() {
    // error - can not instantiate directly
    //theSingleton = new Singleton() ;

    // access the singleton instance
    theSingleton = Singleton.getInstance() ;
    console.log(theSingleton) ;

    // access the singleton instance 2nd time
    theSingleton1 = Singleton.getInstance() ;
    console.log(theSingleton1) ;


    console.log("Are these the same instance?");
    console.log(theSingleton === theSingleton1);
  };


}