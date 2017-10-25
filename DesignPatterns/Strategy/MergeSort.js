// implements SortingStrategy
function MergeSort() {
  this.arr;
}

// implement SortingStrategy
MergeSort.prototype = Object.create(SortingStrategy);

MergeSort.prototype.toString = function() {
  return "MergeSort";
};

MergeSort.prototype.sort = function(a) {
  this.sortedMerge(a, 0, a.length - 1);
};

MergeSort.prototype.sortedMerge = function(a,lo0,hi0) {
  var lo = lo0;
  var hi = hi0;

  if (lo >= hi) {
    return;
  }
  var mid = Math.floor((lo + hi) / 2);

  /*
   *  Partition the list into two lists and sort them recursively
   */
  this.sortedMerge(a, lo, mid);
  this.sortedMerge(a, mid + 1, hi);

  /*
   *  Merge the two sorted lists
   */
  var end_lo = mid;
  var start_hi = mid + 1;
  while ((lo <= end_lo) && (start_hi <= hi)) {
    if (a[lo] < a[start_hi]) {
      lo++;
    } else {
      /*
       *  a[lo] >= a[start_hi]
       *  The next element comes from the second list,
       *  move the a[start_hi] element into the next
       *  position and shuffle all the other elements up.
       */
      var T = a[start_hi];
      for (var k = start_hi - 1; k >= lo; k--) {
        a[k+1] = a[k];
      }
      a[lo] = T;
      lo++;
      end_lo++;
      start_hi++;
    }
  }
};