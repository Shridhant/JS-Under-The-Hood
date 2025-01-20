var x = 1;
try {
  function a() {
    console.log(x);
  }
  console.log(this);
  a();
} catch (error) {
  console.log(error);
}
