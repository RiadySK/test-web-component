var elems = document.body.getElementsByTagName("*");
var arr = Array.from(elems);
var test = arr.map((elem) => elem.tagName.toLowerCase());
var uniqueTest = test.filter(function(item, pos) {
  return test.indexOf(item) == pos;
})

if (uniqueTest.includes('button-kaskus')) {
  import('./components/ButtonKaskus.js');
}
if (uniqueTest.includes('header-kaskus')) {
  import('./components/HeaderKaskus.js');
}
