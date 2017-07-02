// a = [].a;

/*////////////UNTESTED  METHODS/////////////////////////
string = string.spli(/(?=\W)+(\s)$/);; //I intend to get "p" from "<p onclick='React()' id='tester' class='group'>I simply wanted to try you</p>"
isTag(strung)
*/
pt.ready(function(obj, sapi, body, head, $, w){



//////////////////////////////////////////////////////////

function check(){
return pt.Slice(arguments/*, 0, (arguments.length - 1)*/);
}
var all = check("Men", "Women", "Children", "Babies",  "Youth", "Adults");
all.unshift("Todlers","Teenager","Young", "Old", "Octagenarian");
////////////////////////////////////////////
var element = pt.element;
var e = new pt.element("span");
var ed = "<h2 id=point>Much as I see . . . </h2><p>My concerns are not really for the fears of workability</p><h2>I simply am exited about the chance of functionality gotchas.</h2><h1><small>Feel free to contact us.</small></h1>";
var d = sapi.createElement("div");
d.innerHTML = ed;
var test = pt("header")[0];
//test.parentNode.insertBefore(d, test)
element.prependChild(test, d);
var another = pt.createFrag("<h4>Here is the point.</h4>");
try{    //a(body.parentNode)
	//create function childPos(element){} to help you
var header = pt("header")[0];
//a(header.previousSibling)
var e = sapi.createElement("h1"); e.innerHTML = another;
//pt.element.prepend(e, header)
var point = pt("#point")[0];
point.appendChild(sapi.createElement("div")).innerHTML = "I,d Like to explore the more";
element.appendChild(point, another)
}catch(err){a(err)}
});



