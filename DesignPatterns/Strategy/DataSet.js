function DataSet() {
  this.data = [];
  this.strategy;
  this.sortedList = [];

  // default
  strategy = new BubbleSort();
  //data.clear();
  this.data.push(198);
  this.data.push(56);
  this.data.push(12);
  this.data.push(34);
  this.data.push(62);
  this.data.push(99);
  this.data.push(145);
  this.data.push(87);
  this.data.push(26);
  this.data.push(37);
  this.data.push(13);
  this.data.push(16);

  for (var i = 0; i < this.data.length; i++) {
    this.sortedList[i] = this.data[i];
  }
}


DataSet.prototype.doSort = function() {
  strategy.sort(this.sortedList);
  console.log( "List sorted with " + strategy.toString() );
};

DataSet.prototype.display = function() {
  for (var i = 0; i < 12; i++)
  console.log(this.sortedList[i]);
};

DataSet.prototype.resetData = function() {
  for ( var i = 0; i < this.data.length; i++ )
  this.sortedList[i] = this.data[i];
  console.log( "Data Reset Done!");
};

DataSet.prototype.changeStrategy= function(s) {
  strategy = s ;
};