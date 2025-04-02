let a = 12;

const b = 13;

function c() {
  var e = 14;
  function d() {
    console.log(e);
  }
  return d;
}
console.log((c())());
