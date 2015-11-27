# elem-mint
## Elem-mint is an easy to use javascript micro library for DOM elements. 

### Basics
The main function used in Elem-mint is the $E() function.
Pass a string to $E() to create an array of element(s).
The string can include: **#  .  ,  [  ]**

##### Basically, you can create an element using a css selector.
````javascript
$E("div");//returns [div]
$E("div#mydiv.itsmine.notyours[name=mine]");//returns [div#mydiv.itsmine.notyours] with a name attribute equal to "mine"
````

Use commas to create multiple elements at once.
````javascript
$E("div,p,h1");//returns [div,p,h1]
````
Use '>' to indicate a parent-child relationship.
````javascript
$E("div#parent>div#child");//returns [div#parent,div#child] with div#child being inside of div#parent
````

Use the render method to add elements to your document.
Render takes two arguments, a string and a target. The string argument works the same as the argument for $E(), and target argument defaults to document.body if you don't supply a target.
````javascript
$E.render("div");//renders a div in document.body
$E.render("div",document.querySelector("#mydiv"));//renders a div in #mydiv
````
***
## Version
The latest version is 0.9.2, minor addons may be added, but the core functions aren't expected to change.
