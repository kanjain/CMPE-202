
// implements SortingStrategy
function BubbleSort() {
}

// implement SortingStrategy
BubbleSort.prototype = Object.create(SortingStrategy);

BubbleSort.prototype.toString = function() {
  return "BubbleSort";
};

BubbleSort.prototype.sort = function(a) {
  for (var i = a.length; --i>=0; ) {
    var flipped = false;
    for (var j = 0; j<i; j++) {
      if (a[j] > a[j+1]) {
        var T = a[j];
        a[j] = a[j+1];
        a[j+1] = T;
        flipped = true;
      }
    }
    if (!flipped) {
      return;
    }
  }
};