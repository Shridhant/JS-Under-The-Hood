function a() {
  (function c() {
    console.log(b);
  })();
}
var b = 10;
a();
//This is because b is being hoisted up
