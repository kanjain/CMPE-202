
// implements SortingStrategy
function QuickSort() {
}

// implement SortingStrategy
QuickSort.prototype = Object.create(SortingStrategy);

QuickSort.prototype.toString = function() {
  return "QuickSort";
};

QuickSort.prototype.sort = function(a) {
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