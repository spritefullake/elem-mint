
var $E = function(str){
    return $E.mint(str);
};
$E.removeSection = function(str,from,to){
    var toRemove = str.slice(from,to);
    str = str.replace(toRemove,"");
    return str;
};
$E.findAttrs = function(portion){
    var attrNVals = portion.slice(portion.indexOf("["),portion.indexOf("]")+1).replace("[","").replace("]","").split("=");
    return attrNVals;//attributes and their associated values
};
$E.mint = function(selectors){//creates elements from css selectors, supports classes, ids, attributes, and descendents
    selectors = selectors.replace(/\s+/g, '');//remove any whitespace in string
    selectors = selectors.split(",");
    var elems = [];
    for(var i = 0,len = selectors.length;i<len;i++){
        var portion = selectors[i];
        var classNames;
        var classes = "";
        var id;
        var idEnd;
        var attrvals = [];
        var tag;
        var elem;
        
        if(portion.indexOf(">") >= 0){
            var nested = portion.replace(">",",");
            var arr = $E.mint(nested);
            arr = [].concat.apply([],arr);
            arr.reduce(function(prev,cur,ind,ar){
                prev.appendChild(cur);
                return cur;
            });
            for(var l = 0,lenl = arr.length;l<lenl;l++){
                elems.push(arr[l]);//add elements linked by > inside of each other
            }
            continue;
        }
        
        //getting attributes and values
        while(portion.indexOf("[") >= 0){//while any '[attribute=value]' exists, remove them and add them to attrvals
            attrvals.push($E.findAttrs(portion));
            portion = $E.removeSection(portion,portion.indexOf("["),portion.indexOf("]")+1);//remove '[attribute=value]' from portion
        }
        
        //getting id
        if(portion.indexOf("#") >= 0){
            idEnd = portion.slice(portion.indexOf("#")+1).search(/([:.[])/);//the id ends where the dot/bracket begins
            var extra = portion.split("#")[0].length;
            if(idEnd == -1){
                idEnd = portion.length-1;
            }
            idEnd = extra + idEnd + 1;//it is IMPORTANT that this comes after the if statement
            
            id = portion.slice(portion.indexOf("#")+1,idEnd);
            portion = $E.removeSection(portion,portion.indexOf("#"),idEnd);
        }
        else{
            id = "";
        }
        //getting classes
        classNames = portion.split(".");//get an array of the classes with the first item being the tag
        tag = classNames.shift();
        for(var m = 0,lenm = classNames.length;m<lenm;m++){
            classes += classNames[m];
            classes += " ";
        }
        
        attrvals = [].concat.apply([], attrvals);//flatten attrvals
        
        classes = classes.trim();//remove leading and trailing whitespace
        //finally assembling our element
        elem = document.createElement(tag);
        elem.id = id;
        elem.className = classes;
        for(var q = 0,lenq = attrvals.length;q<lenq;q++){
            if(q % 2 == 0){
                elem.setAttribute(attrvals[q],attrvals[(q+1)]);
            }
        }
        elems.push(elem);
    }
    return elems;
};
$E.render = function(str,target){
  target = target || document.body;
  var minted = $E.mint(str);
  var frag = document.createDocumentFragment();//we use a fragment to speed up the appending process
  for(var i = 0,len = minted.length;i<len;i++){
      frag.appendChild(minted[i]);
  }
  target.appendChild(frag);
};

module.exports = $E;

