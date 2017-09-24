module.exports = function zeros(e) {
  var two = 0;
  var five = 0;

  function zero(expression){
    expression.split('*').forEach(count);
    return  Math.min(two ,five);
  }

  function count(n) {
    var m = (n[n.length-2] == '!') ? 2 : 1;
    var num = Number.parseInt(n);
    var start = (num % 2 == 0) ? 2 : 1;

    for (i = start; i <= num; i += m) {
      five += search(5, i);
      two += search(2, i);
    }
  }

  function search(n, inN) {
    var count = 0;
    while(inN % n == 0 ){
      inN /= n;
      count++;
    }
    return count;
  }

  return zero(e);
}
