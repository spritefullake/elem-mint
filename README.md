# elem-mint
## Elem-mint is an easy to use javascript micro library for DOM elements. 

### [npm](https://www.npmjs.com/package/elem-mint)

### [github](https://github.com/spritefullake/elem-mint)

### [bower]()

### About
Elem-mint is a micro library that makes DOM elements out of strings. Read more [here](http://spritefullake.github.io/elem-mint/)

### License
Elem-mint uses the MIT license. Find out more in the LICENSE file of this repo.

### Installation
To install, run in a terminal of your choice:
````sh
npm install elem-mint
````
OR
````sh
bower install elem-mint
````

From there, you can either load the index.js in a script tag in an HTML document OR

````javascript
var $E = require('elem-mint');
````
in a js file.

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
### Version
The latest version is 0.9.6, minor addons may be added, but the core functions aren't expected to change.
