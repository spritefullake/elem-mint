/*global QUnit*/
/*global $E*/
QUnit.test("Basic Output Type Test",function(assert){
    assert.strictEqual($E("div").constructor,Array,"Checks if $E returns an array");
    
    $E.render("div",document.querySelector("#qunit-fixture"));
    assert.strictEqual(document.querySelector("#qunit-fixture").children[0].tagName,"DIV","Checks if $E.render adds a div to the fixture");
});
QUnit.test("Element Numbers Test",function(assert){
    assert.equal($E("div,img,a").length,3,"Three comma separated tags \
    give 3 elements");
    
    assert.equal($E("div>p,ul>li>p,div>h3").length,7,"Seven tags separated\
    by special characters give 7 elements");
    
    assert.equal($E("div#pie.test[name=test].now>p#mold[label=laugh],h1>h2.money>h3.power>h4,p,p").length,
    8,"Complex string with multiple nested elements + classes,ids, and attributes");
    
});
QUnit.test("Whitespace and Newlines",function(assert){
   assert.equal($E("p,\
   div\
   ,h2\
   ,h5").length,4,"Commas after newlines retain ability. Newlines are removed.");
   
   assert.equal($E("p      ,div,      h1#something.nine    ,  h3").length,4,"Whitespaces should be ignored.");
});