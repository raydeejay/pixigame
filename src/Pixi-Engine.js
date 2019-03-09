define(["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Pixi-Engine");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-pixigame"};

$core.addClass("Actor", $globals.Object, ["sprite", "vx", "vy"], "Pixi-Engine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Actor.comment="I am meant to be subclassed.\x0a\x0aI represent an entity on the game world capable of acting and interacting.\x0a\x0aI proxy most of the messages for my Sprite.\x0a\x0aOverride my registry method to use the registerAs: method.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addTo:",
protocol: "accessing",
fn: function (aContainer){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aContainer)._addChild_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTo:",{aContainer:aContainer},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContainer"],
source: "addTo: aContainer\x0a\x09aContainer addChild: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addChild:"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "alpha:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@sprite"])._alpha_(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alpha:",{aNumber:aNumber},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "alpha: aNumber\x0a\x09sprite alpha: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alpha:"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "centerX",
protocol: "calculating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self["@sprite"])._x()).__plus($self._halfWidth());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"centerX",{},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "centerX\x0a\x09^ sprite x + self halfWidth",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "x", "halfWidth"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "centerY",
protocol: "calculating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self["@sprite"])._y()).__plus($self._halfHeight());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"centerY",{},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "centerY\x0a\x09^ sprite y + self halfHeight",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "y", "halfHeight"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "game",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldBeImplemented();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"game",{},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "game\x0a\x09self shouldBeImplemented",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldBeImplemented"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "halfHeight",
protocol: "calculating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self["@sprite"])._height()).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"halfHeight",{},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "halfHeight\x0a\x09^ sprite height / 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["/", "height"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "halfWidth",
protocol: "calculating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self["@sprite"])._width()).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"halfWidth",{},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "halfWidth\x0a\x09^ sprite width / 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["/", "width"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "height",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@sprite"])._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09^ sprite height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "height:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@sprite"])._height_(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height:",{aNumber:aNumber},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "height: aNumber\x0a\x09sprite height: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height:"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "hits:",
protocol: "testing",
fn: function (aRect){
var self=this,$self=this;
var combinedHalfWidths,combinedHalfHeights,dx,dy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5;
$1=$self._centerX();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["centerX"]=1;
//>>excludeEnd("ctx");
dx=$recv($1).__minus($recv(aRect)._centerX());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$2=$self._centerY();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["centerY"]=1;
//>>excludeEnd("ctx");
dy=$recv($2).__minus($recv(aRect)._centerY());
$3=$self._halfWidth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["halfWidth"]=1;
//>>excludeEnd("ctx");
combinedHalfWidths=$recv($3).__plus($recv(aRect)._halfWidth());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$4=$self._halfHeight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["halfHeight"]=1;
//>>excludeEnd("ctx");
combinedHalfHeights=$recv($4).__plus($recv(aRect)._halfHeight());
$6=$recv(dx)._abs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["abs"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__lt(combinedHalfWidths);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
return $recv($5)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(dy)._abs()).__lt(combinedHalfHeights);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hits:",{aRect:aRect,combinedHalfWidths:combinedHalfWidths,combinedHalfHeights:combinedHalfHeights,dx:dx,dy:dy},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRect"],
source: "hits: aRect\x0a\x09| combinedHalfWidths combinedHalfHeights dx dy |\x0a\x09\x0a\x09dx := self centerX - aRect centerX.\x0a\x09dy := self centerY - aRect centerY.\x0a\x09combinedHalfWidths := self halfWidth + aRect halfWidth.\x0a\x09combinedHalfHeights := self halfHeight + aRect halfHeight.\x0a\x09\x0a\x09^ dx abs < combinedHalfWidths and: [ dy abs < combinedHalfHeights ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "centerX", "centerY", "+", "halfWidth", "halfHeight", "and:", "<", "abs"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "move",
protocol: "updating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"move",{},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "move\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "onContain:",
protocol: "game",
fn: function (aDirection){
var self=this,$self=this;
"do nothing";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDirection"],
source: "onContain: aDirection\x0a\x09'do nothing'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "registerAs:",
protocol: "registering",
fn: function (aSymbol){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._class())._at_put_(aSymbol,self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registerAs:",{aSymbol:aSymbol},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSymbol"],
source: "registerAs: aSymbol\x0a\x09\x22Registry at: aSymbol put: self\x22\x0a\x09self class at: aSymbol put: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "class"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "sprite",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@sprite"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sprite\x0a\x09^ sprite",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "sprite:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@sprite"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "sprite: anObject\x0a\x09sprite := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "update",
protocol: "updating",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09\x22Do nothing by default\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "vx",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@vx"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vx\x0a\x09^ vx",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "vx:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@vx"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "vx: aNumber\x0a\x09vx := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "vy",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@vy"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "vy\x0a\x09^ vy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "vy:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@vy"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "vy: aNumber\x0a\x09vy := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "width",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@sprite"])._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^ sprite width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "width:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@sprite"])._width_(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width:",{aNumber:aNumber},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "width: aNumber\x0a\x09sprite width: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "x",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@sprite"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"x",{},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "x\x0a\x09^ sprite x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "x:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@sprite"])._x_(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"x:",{aNumber:aNumber},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "x: aNumber\x0a\x09sprite x: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x:"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "y",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@sprite"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"y",{},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "y\x0a\x09^ sprite y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["y"]
}),
$globals.Actor);

$core.addMethod(
$core.method({
selector: "y:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@sprite"])._y_(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"y:",{aNumber:aNumber},$globals.Actor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "y: aNumber\x0a\x09sprite y: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["y:"]
}),
$globals.Actor);


$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._registry())._at_(aKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aKey:aKey},$globals.Actor.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "at: aKey\x0a\x09^ self registry at: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "registry"]
}),
$globals.Actor.a$cls);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
fn: function (aKey,aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._registry())._at_put_(aKey,aValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},$globals.Actor.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^ self registry at: aKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "registry"]
}),
$globals.Actor.a$cls);

$core.addMethod(
$core.method({
selector: "for:",
protocol: "instance creation",
fn: function (aTexture){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._sprite_($recv($recv($recv($globals.Libs)._pixi())._Sprite())._newValue_(aTexture));
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{aTexture:aTexture},$globals.Actor.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTexture"],
source: "for: aTexture\x0a\x09^ self new sprite: (Libs pixi Sprite newValue: aTexture); yourself\x0a\x09\x22for: aTexture\x0a\x09^ self new sprite: (Libs pixi TilingSprite newValue: aTexture); yourself\x22",
referencedClasses: ["Libs"],
//>>excludeEnd("ide");
messageSends: ["sprite:", "new", "newValue:", "Sprite", "pixi", "yourself"]
}),
$globals.Actor.a$cls);

$core.addMethod(
$core.method({
selector: "registry",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldBeImplemented();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registry",{},$globals.Actor.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registry\x0a\x09self shouldBeImplemented",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldBeImplemented"]
}),
$globals.Actor.a$cls);


$core.addClass("Board", $globals.Object, ["width", "height", "data"], "Pixi-Engine");
$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=$recv(aPoint)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._between_and_((1),$self["@width"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["between:and:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(aPoint)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv($4)._between_and_((1),$self["@height"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return $recv($self["@data"])._at_($recv($recv($recv(aPoint)._x()).__star($self["@width"])).__plus($recv(aPoint)._y()));
} else {
return "none";
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aPoint:aPoint},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "at: aPoint\x0a\x09^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])\x0a\x09\x09ifTrue: [ data at: aPoint x * width + aPoint y ]\x0a\x09\x09ifFalse: [ #none ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "between:and:", "x", "y", "at:", "+", "*"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "accessing",
fn: function (aPoint,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=$recv(aPoint)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._between_and_((1),$self["@width"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["between:and:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(aPoint)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv($4)._between_and_((1),$self["@height"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return $recv($self["@data"])._at_ifAbsent_($recv($recv($recv(aPoint)._x()).__star($self["@width"])).__plus($recv(aPoint)._y()),aBlock);
} else {
return "none";
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aPoint:aPoint,aBlock:aBlock},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aBlock"],
source: "at: aPoint ifAbsent: aBlock\x0a\x09^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])\x0a\x09\x09ifTrue: [ data at: aPoint x * width + aPoint y ifAbsent: aBlock ]\x0a\x09\x09ifFalse: [ #none ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "between:and:", "x", "y", "at:ifAbsent:", "+", "*"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
fn: function (aPoint,aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=$recv(aPoint)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._between_and_((1),$self["@width"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["between:and:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(aPoint)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv($4)._between_and_((1),$self["@height"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return $recv($self["@data"])._at_put_($recv($recv($recv(aPoint)._x()).__star($self["@width"])).__plus($recv(aPoint)._y()),aValue);
} else {
return "none";
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aPoint:aPoint,aValue:aValue},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aValue"],
source: "at: aPoint put: aValue\x0a\x09^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])\x0a\x09\x09ifTrue: [ data at: aPoint x * width + aPoint y put: aValue ]\x0a\x09\x09ifFalse: [ #none ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "between:and:", "x", "y", "at:put:", "+", "*"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "data:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@data"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "data: anObject\x0a\x09data := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "fillWith:",
protocol: "filling",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(1)._to_($self["@height"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((1)._to_($self["@width"]))._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._at_put_($recv(x).__at(y),anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillWith:",{anObject:anObject},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "fillWith: anObject\x0a\x09(1 to: height)\x0a\x09\x09do: [ :y |\x0a\x09\x09\x09(1 to: width)\x0a\x09\x09\x09\x09do: [ :x |\x0a\x09\x09\x09\x09\x09self at: x@y put: anObject ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "to:", "at:put:", "@"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "height",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@height"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09^ height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "height:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@height"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "height: anObject\x0a\x09height := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Board.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=$recv($self["@width"])._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isNil"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@height"])._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$3=$recv("Create instances of ".__comma($recv($self._class())._name())).__comma(" with #width:height: or #extent:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._error_($3);
}
$self["@data"]=$recv($globals.Array)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Board)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09(width isNil or: [ height isNil ]) ifTrue: [ self error: 'Create instances of ', self class name, ' with #width:height: or #extent:' ].\x0a\x09data := Array new",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifTrue:", "or:", "isNil", "error:", ",", "name", "class", "new"]
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "width",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@width"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^ width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Board);

$core.addMethod(
$core.method({
selector: "width:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@width"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "width: anObject\x0a\x09width := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Board);


$core.addMethod(
$core.method({
selector: "extent:",
protocol: "instance creation",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._basicNew();
$recv($1)._width_($recv(aPoint)._x());
$recv($1)._height_($recv(aPoint)._y());
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},$globals.Board.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "extent: aPoint\x0a\x09^ self basicNew\x0a\x09\x09width: aPoint x;\x0a\x09\x09height: aPoint y;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "basicNew", "x", "height:", "y", "initialize", "yourself"]
}),
$globals.Board.a$cls);

$core.addMethod(
$core.method({
selector: "width:height:",
protocol: "instance creation",
fn: function (aWidth,aHeight){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._basicNew();
$recv($1)._width_(aWidth);
$recv($1)._height_(aHeight);
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width:height:",{aWidth:aWidth,aHeight:aHeight},$globals.Board.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidth", "aHeight"],
source: "width: aWidth height: aHeight\x0a\x09^ self basicNew\x0a\x09\x09width: aWidth;\x0a\x09\x09height: aHeight;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "basicNew", "height:", "initialize", "yourself"]
}),
$globals.Board.a$cls);


$core.addClass("Game", $globals.Object, ["app", "state", "message", "scene"], "Pixi-Engine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Game.comment="I represent a game.\x0a\x0aI am meant to be subclassed to create your own game. That subclass should be the Amber entry point.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: "starting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@app"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@app"]=$recv($recv($recv($globals.Libs)._pixi())._Application())._newValue_($globals.HashedCollection._newFromPairs_(["width",(512),"height",(512),"antialiasing",true,"transparent",false,"resolution",(1)]));
$self["@app"];
} else {
$1;
}
$recv($recv(document)._body())._appendChild_($recv($self["@app"])._view());
$self._loadResources();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09app ifNil: [ app := Libs pixi Application\x0a\x09\x09newValue: #{\x0a\x09\x09\x09'width' -> 512.\x0a\x09\x09\x09'height' -> 512.\x0a\x09\x09\x09'antialiasing' -> true.\x0a\x09\x09\x09'transparent' -> false.\x0a\x09\x09\x09'resolution' -> 1 } ].\x0a\x09document body appendChild: app view.\x0a\x09self loadResources",
referencedClasses: ["Libs"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "newValue:", "Application", "pixi", "appendChild:", "body", "view", "loadResources"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "end",
protocol: "action",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "end\x0a\x09\x22Do nothing.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._class())._instance_(self);
$recv($globals.GameRegistry)._at_put_("rng",$recv($globals.Random)._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self class instance: self.\x0a\x09GameRegistry at: #rng put: Random new.",
referencedClasses: ["GameRegistry", "Random"],
//>>excludeEnd("ide");
messageSends: ["instance:", "class", "at:put:", "new"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "loadResources",
protocol: "setup",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$recv($self._resources())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($globals.Libs)._pixi();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["pixi"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._loader();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["loader"]=1;
//>>excludeEnd("ctx");
return $recv($1)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv($recv($globals.Libs)._pixi())._loader())._load_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._setup();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadResources",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadResources\x0a\x09self resources do: [ :each | Libs pixi loader add: each ].\x0a\x09Libs pixi loader load: [ self setup ]",
referencedClasses: ["Libs"],
//>>excludeEnd("ide");
messageSends: ["do:", "resources", "add:", "loader", "pixi", "load:", "setup"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "resources",
protocol: "setup",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldBeImplemented();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resources",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resources\x0a\x09\x22Override this method to return an Array of resources to be loaded\x22\x0a\x09self shouldBeImplemented",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldBeImplemented"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "setup",
protocol: "setup",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@state"]=(function(delta){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._update_(delta);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({delta:delta},$ctx1,1)});
//>>excludeEnd("ctx");
});
$recv($recv($self["@app"])._ticker())._add_((function(delta){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@state"])._value_(delta);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({delta:delta},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setup",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x09state := [ :delta | self update: delta ].\x0a\x09app ticker add: [ :delta | state value: delta ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["update:", "add:", "ticker", "value:"]
}),
$globals.Game);


$globals.Game.a$cls.iVarNames = ["instance"];
$core.addMethod(
$core.method({
selector: "instance",
protocol: "starting",
fn: function (){
var self=this,$self=this;
return $self["@instance"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09^ instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game.a$cls);

$core.addMethod(
$core.method({
selector: "instance:",
protocol: "starting",
fn: function (anInstance){
var self=this,$self=this;
var $1;
$self["@instance"]=anInstance;
$1=$self["@instance"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInstance"],
source: "instance: anInstance\x0a\x09^ instance := anInstance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game.a$cls);

$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Game.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.Game.a$cls);


$core.addClass("Key", $globals.Object, ["code"], "Pixi-Engine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Key.comment="I represent a keyboard key. I delegate all my methods to the Keyboard singleton.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "code",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@code"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "code\x0a\x09^ code",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "code:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@code"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "code: aNumber\x0a\x09code := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "isDown",
protocol: "testing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Keyboard)._pressed_($self._code());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDown",{},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDown\x0a\x09^ Keyboard pressed: self code",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["pressed:", "code"]
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "isUp",
protocol: "testing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Keyboard)._notPressed_($self._code());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isUp",{},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isUp\x0a\x09^ Keyboard notPressed: self code",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["notPressed:", "code"]
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "onPress:",
protocol: "binding",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Keyboard)._bind_to_($self._code(),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPress:",{aBlock:aBlock},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onPress: aBlock\x0a\x09Keyboard bind: self code to: aBlock",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["bind:to:", "code"]
}),
$globals.Key);

$core.addMethod(
$core.method({
selector: "onRelease:",
protocol: "binding",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.Keyboard)._bindRelease_to_($self._code(),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRelease:",{aBlock:aBlock},$globals.Key)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onRelease: aBlock\x0a\x09Keyboard bindRelease: self code to: aBlock",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["bindRelease:to:", "code"]
}),
$globals.Key);


$core.addMethod(
$core.method({
selector: "code:onPress:onRelease:",
protocol: "instance creation",
fn: function (aNumber,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Keyboard)._code_onPress_onRelease_(aNumber,aBlock,anotherBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"code:onPress:onRelease:",{aNumber:aNumber,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Key.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "aBlock", "anotherBlock"],
source: "code: aNumber onPress: aBlock onRelease: anotherBlock\x0a\x09\x22Returns a fully configured Key instance\x22\x0a\x09\x0a\x09^ Keyboard code: aNumber onPress: aBlock onRelease: anotherBlock",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["code:onPress:onRelease:"]
}),
$globals.Key.a$cls);


$core.addClass("Keyboard", $globals.Object, ["keys", "blocks", "releaseBlocks"], "Pixi-Engine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Keyboard.comment="I represent the keyboard and manage bindings and their handling.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "bind:to:",
protocol: "binding",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@blocks"])._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bind:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bind: aKey to: aBlock\x0a\x09blocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "bindRelease:to:",
protocol: "binding",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@releaseBlocks"])._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindRelease:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bindRelease: aKey to: aBlock\x0a\x09releaseBlocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "blocks",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@blocks"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blocks\x0a\x09^ blocks",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "blocks:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@blocks"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "blocks: anObject\x0a\x09blocks := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Keyboard.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@keys"]=$globals.HashedCollection._newFromPairs_([]);
$self["@blocks"]=$globals.HashedCollection._newFromPairs_([]);
$self["@releaseBlocks"]=$globals.HashedCollection._newFromPairs_([]);
$recv(window)._addEventListener_func_capture_("keydown",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._onPress_(event);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}),false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addEventListener:func:capture:"]=1;
//>>excludeEnd("ctx");
$recv(window)._addEventListener_func_capture_("keyup",(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._onRelease_(event);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,2)});
//>>excludeEnd("ctx");
}),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09keys := #{}.\x0a\x09blocks := #{}.\x0a\x09releaseBlocks := #{}.\x0a\x09window addEventListener: 'keydown' func: [ :event | self onPress: event ] capture: false.\x0a\x09window addEventListener: 'keyup' func: [ :event | self onRelease: event ] capture: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "addEventListener:func:capture:", "onPress:", "onRelease:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "keys",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@keys"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09^ keys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "keys:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@keys"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "keys: anObject\x0a\x09keys := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "notPressed:",
protocol: "testing",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._pressed_(aKeyCode))._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notPressed:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "notPressed: aKeyCode\x0a\x09^ (self pressed: aKeyCode) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "pressed:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "onPress:",
protocol: "event handling",
fn: function (anEvent){
var self=this,$self=this;
var code;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
code=$recv(anEvent)._keyCode();
$self._press_(code);
$recv($self["@blocks"])._at_ifPresent_ifAbsent_(code,(function(block){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(block)._value_(anEvent);
return $recv(anEvent)._preventDefault();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPress:",{anEvent:anEvent,code:code},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "onPress: anEvent\x0a\x09| code |\x0a\x09\x0a\x09code := anEvent keyCode.\x0a\x09self press: code.\x0a\x09blocks at: code ifPresent: [ :block | block value: anEvent. anEvent preventDefault ] ifAbsent: [].\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keyCode", "press:", "at:ifPresent:ifAbsent:", "value:", "preventDefault"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "onRelease:",
protocol: "event handling",
fn: function (anEvent){
var self=this,$self=this;
var code;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
code=$recv(anEvent)._keyCode();
$self._release_(code);
$recv($self["@releaseBlocks"])._at_ifPresent_ifAbsent_(code,(function(block){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(block)._value_(anEvent);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({block:block},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){

}));
$recv(anEvent)._preventDefault();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRelease:",{anEvent:anEvent,code:code},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "onRelease: anEvent\x0a\x09| code |\x0a\x09\x0a\x09code := anEvent keyCode.\x0a\x09self release: code.\x0a\x09releaseBlocks at: code ifPresent: [ :block | block value: anEvent ] ifAbsent: [].\x0a\x09anEvent preventDefault",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keyCode", "release:", "at:ifPresent:ifAbsent:", "value:", "preventDefault"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "press:",
protocol: "testing",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@keys"])._at_put_(aKeyCode,true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"press:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "press: aKeyCode\x0a\x09keys at: aKeyCode put: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "pressed:",
protocol: "testing",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@keys"])._at_ifAbsent_(aKeyCode,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@keys"])._at_put_(aKeyCode,false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pressed:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "pressed: aKeyCode\x0a\x09^ keys at: aKeyCode ifAbsent: [ keys at: aKeyCode put: false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "release:",
protocol: "testing",
fn: function (aKeyCode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@keys"])._at_put_(aKeyCode,false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"release:",{aKeyCode:aKeyCode},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode"],
source: "release: aKeyCode\x0a\x09keys at: aKeyCode put: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "releaseBlocks",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@releaseBlocks"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "releaseBlocks\x0a\x09^ releaseBlocks",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "releaseBlocks:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@releaseBlocks"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "releaseBlocks: anObject\x0a\x09releaseBlocks := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Keyboard);

$core.addMethod(
$core.method({
selector: "unbind:",
protocol: "binding",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@blocks"])._removeKey_ifAbsent_(aKey,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unbind:",{aKey:aKey},$globals.Keyboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "unbind: aKey\x0a\x09blocks removeKey: aKey ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeKey:ifAbsent:"]
}),
$globals.Keyboard);


$globals.Keyboard.a$cls.iVarNames = ["instance"];
$core.addMethod(
$core.method({
selector: "bind:to:",
protocol: "binding",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._instance())._blocks())._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bind:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bind: aKey to: aBlock\x0a\x09self instance blocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "blocks", "instance"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "bindRelease:to:",
protocol: "binding",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._instance())._releaseBlocks())._at_put_(aKey,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindRelease:to:",{aKey:aKey,aBlock:aBlock},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "bindRelease: aKey to: aBlock\x0a\x09self instance releaseBlocks at: aKey put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "releaseBlocks", "instance"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "code:onPress:onRelease:",
protocol: "factories",
fn: function (aNumber,aBlock,anotherBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Key)._new();
$recv($1)._code_(aNumber);
$recv($1)._onPress_(aBlock);
$recv($1)._onRelease_(anotherBlock);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"code:onPress:onRelease:",{aNumber:aNumber,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "aBlock", "anotherBlock"],
source: "code: aNumber onPress: aBlock onRelease: anotherBlock\x0a\x09\x22Returns a fully configured Key instance\x22\x0a\x09\x0a\x09^ Key new\x0a\x09\x09code: aNumber;\x0a\x09\x09onPress: aBlock;\x0a\x09\x09onRelease: anotherBlock;\x0a\x09\x09yourself",
referencedClasses: ["Key"],
//>>excludeEnd("ide");
messageSends: ["code:", "new", "onPress:", "onRelease:", "yourself"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "instance",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@instance"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@instance"]=$self._new();
return $self["@instance"];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instance",{},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09^ instance ifNil: [ instance := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Keyboard.a$cls);

$core.addMethod(
$core.method({
selector: "unbind:",
protocol: "binding",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._instance())._blocks())._removeKey_ifAbsent_(aKey,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unbind:",{aKey:aKey},$globals.Keyboard.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "unbind: aKey\x0a\x09self instance blocks removeKey: aKey ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeKey:ifAbsent:", "blocks", "instance"]
}),
$globals.Keyboard.a$cls);


$core.addClass("Level", $globals.Object, [], "Pixi-Engine");


$core.addClass("Libs", $globals.Object, [], "Pixi-Engine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Libs.comment="My only purpose is to provide access to JavaScript libraries.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "inspectClasses",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
var $early={};
try {
$2=$recv($recv($globals.Package)._named_ifAbsent_("Pixigame",(function(){
throw $early=[false];

})))._classes();
$3=$recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._inject_into_($3,(function(classDict,class_){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(classDict)._at_put_(class_,$recv($recv(class_)._methods())._inject_into_($recv($globals.Dictionary)._new(),(function(methodDict,method){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(methodDict)._at_put_($recv(method)._selector(),$recv(method)._referencedClasses());
return methodDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({methodDict:methodDict,method:method},$ctx2,3)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
return classDict;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({classDict:classDict,class_:class_},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["inject:into:"]=1;
//>>excludeEnd("ctx");
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectClasses",{},$globals.Libs.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspectClasses\x0a\x09^ (Package named: 'Pixigame' ifAbsent: [ ^ false ]) classes\x0a\x09\x09inject: Dictionary new into: [ :classDict :class |\x0a\x09\x09\x09classDict at: class put: (class methods\x0a\x09\x09\x09\x09inject: Dictionary new into: [ :methodDict :method |\x0a\x09\x09\x09\x09\x09methodDict at: method selector put: method referencedClasses.\x0a\x09\x09\x09\x09\x09methodDict ]).\x0a\x09\x09\x09classDict ]",
referencedClasses: ["Package", "Dictionary"],
//>>excludeEnd("ide");
messageSends: ["inject:into:", "classes", "named:ifAbsent:", "new", "at:put:", "methods", "selector", "referencedClasses"]
}),
$globals.Libs.a$cls);

$core.addMethod(
$core.method({
selector: "pixi",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $globals.PIXI;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pixi\x0a\x09^ PIXI",
referencedClasses: ["PIXI"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Libs.a$cls);


$core.addClass("MapCarver", $globals.Object, ["board", "region"], "Pixi-Engine");
$core.addMethod(
$core.method({
selector: "board:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@board"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "board: anObject\x0a\x09board := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "canCarveAt:",
protocol: "testing",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$6,$8,$7,$5,$4,$11,$13,$12,$10,$9,$16,$18,$17,$15,$14,$1;
$3=$recv($self["@board"])._at_(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$self["@board"];
$8=(0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$7=$recv(aPoint).__plus($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._at_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
return $recv($4)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$11=$self["@board"];
$13=(0).__at((-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$12=$recv(aPoint).__plus($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._at_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=3;
//>>excludeEnd("ctx");
return $recv($9)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$16=$self["@board"];
$18=(1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$17=$recv(aPoint).__plus($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$15=$recv($16)._at_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$14=$recv($15).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=4;
//>>excludeEnd("ctx");
return $recv($14)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv($recv($self["@board"])._at_($recv(aPoint).__plus((-1).__at((0))))).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["and:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["and:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canCarveAt:",{aPoint:aPoint},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "canCarveAt: aPoint\x0a\x09^ ((board at: aPoint) = #wall)\x0a\x09\x09and: [ ((board at: aPoint + (0 @ 1)) = #wall)\x0a\x09\x09\x09and: [ ((board at: aPoint + (0 @ -1)) = #wall)\x0a\x09\x09\x09\x09and: [ ((board at: aPoint + (1 @ 0)) = #wall)\x0a\x09\x09\x09\x09\x09and: [ ((board at: aPoint + (-1 @ 0)) = #wall) ] ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "at:", "+", "@"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "canCarveAt:towards:",
protocol: "testing",
fn: function (aPoint,aDirection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$1;
$3=$self["@board"];
$4=$recv(aPoint).__plus(aDirection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._at_ifAbsent_($4,(function(){
return "none";

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
return $recv($1)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($self["@board"])._at_ifAbsent_($recv(aPoint).__plus($recv(aDirection).__star((2))),(function(){
return "none";

}))).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canCarveAt:towards:",{aPoint:aPoint,aDirection:aDirection},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aDirection"],
source: "canCarveAt: aPoint towards: aDirection\x0a\x09^ ((board at: aPoint + aDirection ifAbsent: [ #none ]) = #wall)\x0a\x09\x09and: [ (board at: aPoint + (aDirection * 2) ifAbsent: [ #none ]) = #wall ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "at:ifAbsent:", "+", "*"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "carve:towards:at:",
protocol: "carving",
fn: function (aNumber,aDirection,aPoint){
var self=this,$self=this;
var newPosition;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newPosition=aPoint;
$recv(aNumber)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
newPosition=$recv(newPosition).__plus(aDirection);
return $recv($self["@board"])._at_put_(newPosition,"floor");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return newPosition;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"carve:towards:at:",{aNumber:aNumber,aDirection:aDirection,aPoint:aPoint,newPosition:newPosition},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber", "aDirection", "aPoint"],
source: "carve: aNumber towards: aDirection at: aPoint\x0a\x09| newPosition |\x0a\x09\x0a\x09newPosition := aPoint.\x0a\x09\x0a\x09aNumber timesRepeat: [\x0a\x09\x09newPosition := newPosition + aDirection.\x0a\x09\x09board at: newPosition put: #floor ].\x0a\x09\x0a\x09^ newPosition",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["timesRepeat:", "+", "at:put:"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "carveFromStack:",
protocol: "carving",
fn: function (aStack){
var self=this,$self=this;
var top,position,dir;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5;
top=$recv(aStack)._last();
position=$recv(top)._key();
$1=$recv(top)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$3=$recv(top)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._atRandom();
dir=$recv($1)._remove_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remove:"]=1;
//>>excludeEnd("ctx");
$recv($recv(top)._value())._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aStack)._removeLast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=$recv($recv($recv($self["@board"])._at_ifAbsent_($recv(position).__plus(dir),(function(){
return "none";

}))).__eq("wall"))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._canCarveAt_towards_(position,dir);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
if($core.assert($4)){
var newPosition,newDirs;
newPosition=$self._carve_towards_at_((2),dir,position);
$5=$self._directions();
$recv($5)._remove_($recv(dir).__star((-1)));
newDirs=$recv($5)._yourself();
$recv(aStack)._add_($recv(newPosition).__minus_gt(newDirs));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"carveFromStack:",{aStack:aStack,top:top,position:position,dir:dir},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStack"],
source: "carveFromStack: aStack\x0a\x09| top position dir |\x0a\x09\x09\x09\x0a\x09top := aStack last.\x0a\x09position := top key.\x0a\x09dir := top value remove: top value atRandom.\x0a\x0a\x09top value ifEmpty: [ aStack removeLast ].\x0a\x09(((board at: position + dir ifAbsent: [ #none ]) = #wall)\x0a\x09\x09and: [ self canCarveAt: position towards: dir ])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09| newPosition newDirs |\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09newPosition := self carve: 2 towards: dir at: position.\x0a\x09\x09\x09\x09newDirs := self directions remove: (dir * -1); yourself.\x0a\x09\x09\x09\x09aStack add: newPosition -> newDirs ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last", "key", "remove:", "value", "atRandom", "ifEmpty:", "removeLast", "ifTrue:", "and:", "=", "at:ifAbsent:", "+", "canCarveAt:towards:", "carve:towards:at:", "directions", "*", "yourself", "add:", "->"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "carveRoom:",
protocol: "carving",
fn: function (aRoom){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$5,$4,$1,$7,$6;
$3=$recv(aRoom)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$5=$recv(aRoom)._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["corner"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._y();
$1=$recv($2)._to_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv($recv(aRoom)._origin())._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._to_($recv($recv(aRoom)._corner())._x());
return $recv($6)._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($self["@board"])._at_put_($recv(x).__at(y),"floor");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"carveRoom:",{aRoom:aRoom},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRoom"],
source: "carveRoom: aRoom\x0a\x09(aRoom origin y to: aRoom corner y)\x0a\x09\x09do: [ :y |\x0a\x09\x09\x09(aRoom origin x to: aRoom corner x)\x0a\x09\x09\x09\x09do: [ :x |\x0a\x09\x09\x09\x09\x09board at: x@y put: #floor ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "to:", "y", "origin", "corner", "x", "at:put:", "@"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "directions",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$2=(-1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$3=(0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
return [$1,$2,$3,(0).__at((-1))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directions",{},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "directions\x0a\x09^ {1 @ 0. -1 @ 0. 0 @ 1. 0 @ -1}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.MapCarver.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$self["@board"];
if(($receiver = $1) == null || $receiver.a$nil){
$2=$recv("Create instances of ".__comma($recv($self._class())._name())).__comma(" with #on:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$self._error_($2);
} else {
$1;
}
$self["@region"]=(1);
$recv($self["@board"])._fillWith_("wall");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09board ifNil: [ self error: 'Create instances of ', self class name, ' with #on:' ].\x0a\x09region := 1.\x0a\x09board fillWith: #wall",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifNil:", "error:", ",", "name", "class", "fillWith:"]
}),
$globals.MapCarver);

$core.addMethod(
$core.method({
selector: "print",
protocol: "printing",
fn: function (){
var self=this,$self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
stream=$recv($globals.StringStream)._on_("");
$1=(1)._to_($recv($self["@board"])._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv((1)._to_($recv($self["@board"])._width()))._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=stream;
$4=$recv($recv($self["@board"])._at_($recv(x).__at(y))).__eq("wall");
if($core.assert($4)){
$3="█";
} else {
$3=" ";
}
return $recv($2)._nextPut_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(stream)._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$5=console;
$recv($5)._clear();
$recv($5)._log_($recv(stream)._contents());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"print",{stream:stream},$globals.MapCarver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "print\x0a\x09| stream |\x0a\x09\x0a\x09stream := StringStream on: ''.\x0a\x09\x0a\x09(1 to: board height) do: [ :y |\x0a\x09\x09(1 to: board width) do: [ :x |\x0a\x09\x09\x09stream\x0a\x09\x09\x09\x09nextPut: (((board at: x@y) = #wall)\x0a\x09\x09\x09\x09\x09ifTrue: [ '█']\x0a\x09\x09\x09\x09\x09ifFalse: [ ' ' ]) ].\x0a\x09\x09stream crlf ].\x0a\x09console\x0a\x09\x09clear;\x0a\x09\x09log: stream contents",
referencedClasses: ["StringStream"],
//>>excludeEnd("ide");
messageSends: ["on:", "do:", "to:", "height", "width", "nextPut:", "ifTrue:ifFalse:", "=", "at:", "@", "crlf", "clear", "log:", "contents"]
}),
$globals.MapCarver);


$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
fn: function (aBoard){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._basicNew();
$recv($1)._board_(aBoard);
$recv($1)._initialize();
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aBoard:aBoard},$globals.MapCarver.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoard"],
source: "on: aBoard\x0a\x09^ self basicNew\x0a\x09\x09board: aBoard;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["board:", "basicNew", "initialize", "yourself"]
}),
$globals.MapCarver.a$cls);


$core.addClass("MapGenerator", $globals.Object, ["board", "carver"], "Pixi-Engine");
$core.addMethod(
$core.method({
selector: "directions",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$2=(-1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$3=(0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
return [$1,$2,$3,(0).__at((-1))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directions",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "directions\x0a\x09^ {1 @ 0. -1 @ 0. 0 @ 1. 0 @ -1}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "generate",
protocol: "generating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._generateRooms())._generatePassages();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generate",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generate\x0a\x09self generateRooms generatePassages",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["generatePassages", "generateRooms"]
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "generatePassageAt:",
protocol: "generating",
fn: function (aPoint){
var self=this,$self=this;
var stack;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
stack=$recv($globals.Array)._with_($recv(aPoint).__minus_gt($self._directions()));
$recv($self["@board"])._at_put_(aPoint,"floor");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stack)._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@carver"])._carveFromStack_(stack);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generatePassageAt:",{aPoint:aPoint,stack:stack},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "generatePassageAt: aPoint\x0a\x09| stack |\x0a\x09\x0a\x09stack := Array with: aPoint -> self directions.\x0a\x09board at: aPoint put: #floor.\x0a\x0a\x09[ stack notEmpty ] whileTrue: [ carver carveFromStack: stack ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["with:", "->", "directions", "at:put:", "whileTrue:", "notEmpty", "carveFromStack:"]
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "generatePassages",
protocol: "generating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=(2)._to_by_($recv($self["@board"])._height(),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:by:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv((2)._to_by_($recv($self["@board"])._width(),(2)))._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$self["@carver"];
$4=$recv(x).__at(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._canCarveAt_($4);
if($core.assert($2)){
return $self._generatePassageAt_($recv(x).__at(y));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generatePassages",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generatePassages\x0a\x09(2 to: board height by: 2)\x0a\x09\x09do: [ : y |\x0a\x09\x09\x09(2 to: board width by: 2)\x0a\x09\x09\x09\x09do: [ :x |\x0a\x09\x09\x09\x09\x09(carver canCarveAt: x@y)\x0a\x09\x09\x09\x09\x09\x09ifTrue: [ self generatePassageAt: x@y ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "to:by:", "height", "width", "ifTrue:", "canCarveAt:", "@", "generatePassageAt:"]
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "generateRoom",
protocol: "generating",
fn: function (){
var self=this,$self=this;
var w,h;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$6,$5,$2,$10,$9,$8,$7;
$1=$recv($recv($self["@board"])._width()).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
w=$recv($1)._floor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["floor"]=1;
//>>excludeEnd("ctx");
h=$recv($recv($recv($self["@board"])._height()).__slash((2)))._floor();
$4=$recv(w)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$6=$recv(h)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__at($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$10=(3)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__plus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__at($recv($recv((3)._atRandom()).__star((2))).__plus((2)));
return $recv($2)._extent_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generateRoom",{w:w,h:h},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generateRoom\x0a\x09| w h |\x0a\x09\x0a\x09w := (board width / 2) floor.\x0a\x09h := (board height / 2) floor.\x0a\x0a\x09^ (w atRandom * 2) @ (h atRandom * 2)\x0a\x09\x09extent: (3 atRandom * 2 + 2) @ (3 atRandom * 2 + 2)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["floor", "/", "width", "height", "extent:", "@", "*", "atRandom", "+"]
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "generateRooms",
protocol: "generating",
fn: function (){
var self=this,$self=this;
var inside,rooms;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
$1=(2).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=$recv($recv($self["@board"])._width()).__at($recv($self["@board"])._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__minus((1).__at((1)));
inside=$recv($1)._corner_($2);
rooms=$recv($globals.Array)._new();
(200)._timesRepeat_((function(){
var room;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
room=$self._generateRoom();
return $recv(rooms)._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each)._overlapsBorders_(room);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4=$recv(inside)._containsRect_(room);
if($core.assert($4)){
$recv($self["@carver"])._carveRoom_(room);
return $recv(rooms)._add_(room);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({room:room},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generateRooms",{inside:inside,rooms:rooms},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generateRooms\x0a\x09| inside rooms |\x0a\x09\x0a\x09inside := 2@2 corner: (board width @ board height) - (1@1).\x0a\x09rooms := Array new.\x0a\x0a\x09200 timesRepeat: [\x0a\x09\x09| room |\x0a\x09\x09\x0a\x09\x09room := self generateRoom.\x0a\x09\x09rooms\x0a\x09\x09\x09detect: [ :each | each overlapsBorders: room ]\x0a\x09\x09\x09ifNone: [\x0a\x09\x09\x09\x09(inside containsRect: room)\x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09carver carveRoom: room.\x0a\x09\x09\x09\x09\x09\x09rooms add: room ] ] ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["corner:", "@", "-", "width", "height", "new", "timesRepeat:", "generateRoom", "detect:ifNone:", "overlapsBorders:", "ifTrue:", "containsRect:", "carveRoom:", "add:"]
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.MapGenerator.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($globals.Board)._width_height_((65),(65));
$recv($1)._fillWith_("wall");
$self["@board"]=$recv($1)._yourself();
$self["@carver"]=$recv($globals.MapCarver)._on_($self["@board"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09board := (Board width: 65 height: 65)\x0a\x09\x09fillWith: #wall;\x0a\x09\x09yourself.\x0a\x09carver := MapCarver on: board",
referencedClasses: ["Board", "MapCarver"],
//>>excludeEnd("ide");
messageSends: ["initialize", "fillWith:", "width:height:", "yourself", "on:"]
}),
$globals.MapGenerator);

$core.addMethod(
$core.method({
selector: "print",
protocol: "printing",
fn: function (){
var self=this,$self=this;
var stream;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
stream=$recv($globals.StringStream)._on_("");
$1=(1)._to_($recv($self["@board"])._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv((1)._to_($recv($self["@board"])._width()))._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=stream;
$4=$recv($recv($self["@board"])._at_($recv(x).__at(y))).__eq("wall");
if($core.assert($4)){
$3="█";
} else {
$3=" ";
}
return $recv($2)._nextPut_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(stream)._crlf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$5=console;
$recv($5)._clear();
$recv($5)._log_($recv(stream)._contents());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"print",{stream:stream},$globals.MapGenerator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "print\x0a\x09| stream |\x0a\x09\x0a\x09stream := StringStream on: ''.\x0a\x09\x0a\x09(1 to: board height) do: [ :y |\x0a\x09\x09(1 to: board width) do: [ :x |\x0a\x09\x09\x09stream\x0a\x09\x09\x09\x09nextPut: (((board at: x@y) = #wall)\x0a\x09\x09\x09\x09\x09ifTrue: [ '█']\x0a\x09\x09\x09\x09\x09ifFalse: [ ' ' ]) ].\x0a\x09\x09stream crlf ].\x0a\x09console\x0a\x09\x09clear;\x0a\x09\x09log: stream contents",
referencedClasses: ["StringStream"],
//>>excludeEnd("ide");
messageSends: ["on:", "do:", "to:", "height", "width", "nextPut:", "ifTrue:ifFalse:", "=", "at:", "@", "crlf", "clear", "log:", "contents"]
}),
$globals.MapGenerator);



$core.addClass("Registry", $globals.Object, ["dictionary"], "Pixi-Engine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Registry.comment="I am meant to be subclassed.\x0a\x0aI act as an easily accessible dictionary. Other classes can use my subclasses to store Associations, usually of Symbol -> Object.\x0a\x0aActor and Scene subclasses both have a registry method that should be overridden to return one of my subclasses.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "dictionary",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@dictionary"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@dictionary"]=$recv($globals.Dictionary)._new();
return $self["@dictionary"];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dictionary",{},$globals.Registry)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dictionary\x0a\x09^ dictionary ifNil: [ dictionary := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Registry);

$core.addMethod(
$core.method({
selector: "dictionary:",
protocol: "accessing",
fn: function (aDictionary){
var self=this,$self=this;
$self["@dictionary"]=aDictionary;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "dictionary: aDictionary\x0a\x09dictionary := aDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Registry);


$globals.Registry.a$cls.iVarNames = ["instance"];
$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._instance())._dictionary())._at_(aKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aKey:aKey},$globals.Registry.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "at: aKey\x0a\x09^ self instance dictionary at: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "dictionary", "instance"]
}),
$globals.Registry.a$cls);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: "accessing",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._instance())._dictionary())._at_ifAbsent_(aKey,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},$globals.Registry.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x09^ self instance dictionary at: aKey ifAbsent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "dictionary", "instance"]
}),
$globals.Registry.a$cls);

$core.addMethod(
$core.method({
selector: "at:ifAbsentPut:",
protocol: "accessing",
fn: function (aKey,anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._instance())._dictionary())._at_ifAbsentPut_(aKey,anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsentPut:",{aKey:aKey,anObject:anObject},$globals.Registry.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "anObject"],
source: "at: aKey ifAbsentPut: anObject\x0a\x09^ self instance dictionary at: aKey ifAbsentPut: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsentPut:", "dictionary", "instance"]
}),
$globals.Registry.a$cls);

$core.addMethod(
$core.method({
selector: "at:ifPresent:",
protocol: "accessing",
fn: function (aKey,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._instance())._dictionary())._at_ifPresent_(aKey,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{aKey:aKey,aBlock:aBlock},$globals.Registry.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "at: aKey ifPresent: aBlock\x0a\x09^ self instance dictionary at: aKey ifPresent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:", "dictionary", "instance"]
}),
$globals.Registry.a$cls);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: "accessing",
fn: function (aKey,presentBlock,absentBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._instance())._dictionary())._at_ifPresent_ifAbsent_(aKey,presentBlock,absentBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{aKey:aKey,presentBlock:presentBlock,absentBlock:absentBlock},$globals.Registry.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "presentBlock", "absentBlock"],
source: "at: aKey ifPresent: presentBlock ifAbsent: absentBlock\x0a\x09^ self instance dictionary at: aKey ifPresent: presentBlock ifAbsent: absentBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:ifAbsent:", "dictionary", "instance"]
}),
$globals.Registry.a$cls);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
fn: function (aKey,aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._instance())._dictionary())._at_put_(aKey,aValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},$globals.Registry.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^ self instance dictionary at: aKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "dictionary", "instance"]
}),
$globals.Registry.a$cls);

$core.addMethod(
$core.method({
selector: "dictionary",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._instance())._dictionary();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dictionary",{},$globals.Registry.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dictionary\x0a\x09^ self instance dictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dictionary", "instance"]
}),
$globals.Registry.a$cls);

$core.addMethod(
$core.method({
selector: "dictionary:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._instance())._dictionary_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dictionary:",{anObject:anObject},$globals.Registry.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "dictionary: anObject\x0a\x09^ self instance dictionary: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dictionary:", "instance"]
}),
$globals.Registry.a$cls);

$core.addMethod(
$core.method({
selector: "instance",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@instance"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@instance"]=$self._new();
return $self["@instance"];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instance",{},$globals.Registry.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instance\x0a\x09^ instance ifNil: [ instance := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Registry.a$cls);


$core.addClass("Scene", $globals.Object, ["stage", "screen", "actors"], "Pixi-Engine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Scene.comment="I represent a scene in the game (a level, menu, whatever).\x0a\x0aI must be subclassed, and my registry configured, if it is to be used.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "actors",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@actors"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@actors"]=$recv($globals.Array)._new();
return $self["@actors"];
} else {
return $1;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"actors",{},$globals.Scene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "actors\x0a\x09^ actors ifNil: [ actors := Array new ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "addChild:",
protocol: "game",
fn: function (anActor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._actors())._add_(anActor);
$recv($self["@screen"])._addChild_($recv(anActor)._sprite());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addChild:",{anActor:anActor},$globals.Scene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anActor"],
source: "addChild: anActor\x0a\x09self actors add: anActor.\x0a\x09screen addChild: anActor sprite",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "actors", "addChild:", "sprite"]
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "enter",
protocol: "updating",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enter\x0a\x09\x22please override\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "exit",
protocol: "updating",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exit\x0a\x09\x22please override\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "height",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@screen"])._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.Scene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09^ screen height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height"]
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Scene.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@screen"]=$recv($recv($recv($globals.Libs)._pixi())._Container())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Scene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09screen := Libs pixi Container new",
referencedClasses: ["Libs"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "Container", "pixi"]
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "screen",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@screen"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "screen\x0a\x09^ screen",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "screen:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@screen"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "screen: anObject\x0a\x09screen := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "setup",
protocol: "setup",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x09\x22please override\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "stage",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@stage"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stage\x0a\x09^ stage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "stage:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@stage"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "stage: anObject\x0a\x09stage := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "switchFrom:",
protocol: "switching",
fn: function (aScene){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aScene)._exit();
$self._enter();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"switchFrom:",{aScene:aScene},$globals.Scene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScene"],
source: "switchFrom: aScene\x0a\x09aScene exit.\x0a\x09self enter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["exit", "enter"]
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "switchTo:",
protocol: "switching",
fn: function (aScene){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aScene)._switchFrom_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"switchTo:",{aScene:aScene},$globals.Scene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScene"],
source: "switchTo: aScene\x0a\x09aScene switchFrom: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["switchFrom:"]
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "update",
protocol: "updating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@actors"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._update();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.Scene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09\x22please extend\x22\x0a\x09actors do: [ :each | each update ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "update"]
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "visible:",
protocol: "accessing",
fn: function (aBoolean){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@screen"])._visible_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visible:",{aBoolean:aBoolean},$globals.Scene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "visible: aBoolean\x0a\x09screen visible: aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visible:"]
}),
$globals.Scene);

$core.addMethod(
$core.method({
selector: "width",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@screen"])._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.Scene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^ screen width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width"]
}),
$globals.Scene);


$core.addMethod(
$core.method({
selector: "at:",
protocol: "accessing",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._registry())._at_(aKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aKey:aKey},$globals.Scene.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "at: aKey\x0a\x09^ self registry at: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "registry"]
}),
$globals.Scene.a$cls);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "accessing",
fn: function (aKey,aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._registry())._at_put_(aKey,aValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},$globals.Scene.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^ self registry at: aKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "registry"]
}),
$globals.Scene.a$cls);

$core.addMethod(
$core.method({
selector: "on:",
protocol: "instance creation",
fn: function (aStage){
var self=this,$self=this;
var inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._stage_(aStage);
inst=$recv($1)._yourself();
$recv(aStage)._addChild_($recv(inst)._screen());
return inst;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aStage:aStage,inst:inst},$globals.Scene.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStage"],
source: "on: aStage\x0a\x09| inst |\x0a\x09\x0a\x09inst := self new\x0a\x09\x09stage: aStage;\x0a\x09\x09yourself.\x0a\x09aStage addChild: inst screen.\x0a\x09^ inst",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stage:", "new", "yourself", "addChild:", "screen"]
}),
$globals.Scene.a$cls);

$core.addMethod(
$core.method({
selector: "registry",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldBeImplemented();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"registry",{},$globals.Scene.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registry\x0a\x09self shouldBeImplemented",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldBeImplemented"]
}),
$globals.Scene.a$cls);


$core.addClass("Stage", $globals.Object, ["tiles"], "Pixi-Engine");
$core.addMethod(
$core.method({
selector: "at:",
protocol: "as yet unclassified",
fn: function (aKey){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@tiles"])._at_(aKey);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aKey:aKey},$globals.Stage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "at: aKey\x0a\x09^ tiles at: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Stage);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: "as yet unclassified",
fn: function (aKey,aValue){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@tiles"])._at_put_(aKey,aValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,aValue:aValue},$globals.Stage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aValue"],
source: "at: aKey put: aValue\x0a\x09^ tiles at: aKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Stage);

$core.addMethod(
$core.method({
selector: "bounds",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
return $recv($1)._extent_((37).__at((37)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bounds",{},$globals.Stage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bounds\x0a\x09\x22for lack of a better implementation...\x22\x0a\x09\x0a\x09^ 0@0 extent: 37@37",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["extent:", "@"]
}),
$globals.Stage);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Stage.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@tiles"]=$recv($globals.Dictionary)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Stage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09tiles := Dictionary new",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.Stage);



$core.addClass("DungeonMap", $globals.Stage, ["currentRegion", "regions"], "Pixi-Engine");
$core.addMethod(
$core.method({
selector: "addJunction:",
protocol: "building",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._at_put_(aPoint,$self._generateJunction());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addJunction:",{aPoint:aPoint},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "addJunction: aPoint\x0a\x09self at: aPoint put: self generateJunction",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "generateJunction"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "canCarveFrom:going:",
protocol: "carving",
fn: function (aPoint,aDirection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$3,$1;
$2=$self._bounds();
$4=$recv(aDirection).__star((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__plus(aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._containsPoint_($3);
if($core.assert($1)){
return $recv($self._at_($recv($recv(aDirection).__star((2))).__plus(aPoint))).__eq("wall");
} else {
return false;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canCarveFrom:going:",{aPoint:aPoint,aDirection:aDirection},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aDirection"],
source: "canCarveFrom: aPoint going: aDirection\x0a\x09^ (self bounds containsPoint: aDirection * 3 + aPoint)\x0a\x09\x09ifTrue: [ (self at: aDirection * 2 + aPoint) = #wall ]\x0a\x09\x09ifFalse: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "containsPoint:", "bounds", "+", "*", "=", "at:"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "carve:",
protocol: "carving",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._carve_tile_(aPoint,"floor");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"carve:",{aPoint:aPoint},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "carve: aPoint\x0a\x09self carve: aPoint tile: #floor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["carve:tile:"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "carve:tile:",
protocol: "carving",
fn: function (aPoint,aTileType){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@tiles"])._at_put_(aPoint,aTileType);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($self["@regions"])._at_put_(aPoint,$self["@currentRegion"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"carve:tile:",{aPoint:aPoint,aTileType:aTileType},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint", "aTileType"],
source: "carve: aPoint tile: aTileType\x0a\x09tiles at: aPoint put: aTileType.\x0a\x09regions at: aPoint put: currentRegion",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "connectRegions",
protocol: "regions",
fn: function (){
var self=this,$self=this;
var connectorRegions,connectors,merged,openRegions;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
connectorRegions=$recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($self._bounds())._pointsDo_((function(point){
var regs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($self._hasWallAt_(point))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
regs=$self._regionsAt_(point);
return $recv($recv(regs)._size()).__gt((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return $recv(connectorRegions)._at_put_(point,regs);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({point:point,regs:regs},$ctx1,1)});
//>>excludeEnd("ctx");
}));
connectors=$recv(connectorRegions)._keys();
merged=$recv($globals.Dictionary)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
openRegions=$recv($globals.Set)._new();
$recv((1)._to_($self["@currentRegion"]))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(merged)._at_put_(each,each);
return $recv(openRegions)._add_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"connectRegions",{connectorRegions:connectorRegions,connectors:connectors,merged:merged,openRegions:openRegions},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "connectRegions\x0a\x09| connectorRegions connectors merged openRegions |\x0a\x09\x0a\x09connectorRegions := Dictionary new.\x0a\x09\x0a\x09self bounds\x0a\x09\x09pointsDo: [ :point |\x0a\x09\x09\x09| regs |\x0a\x09\x09\x09\x0a\x09\x09\x09( (self hasWallAt: point) and: [ regs := self regionsAt: point. regs size > 1 ] )\x0a\x09\x09\x09\x09ifTrue: [ connectorRegions at: point put: regs ] ].\x0a\x09connectors := connectorRegions keys.\x0a\x09\x0a\x09merged := Dictionary new.\x0a\x09openRegions := Set new.\x0a\x09(1 to: currentRegion)\x0a\x09\x09do: [ :each |\x0a\x09\x09merged at: each put: each.\x0a\x09\x09openRegions add: each ].\x0a\x09\x09",
referencedClasses: ["Dictionary", "Set"],
//>>excludeEnd("ide");
messageSends: ["new", "pointsDo:", "bounds", "ifTrue:", "and:", "hasWallAt:", "regionsAt:", ">", "size", "at:put:", "keys", "do:", "to:", "add:"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "countExitsAt:",
protocol: "building",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._directions())._select_((function(dir){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._at_($recv(aPoint).__plus(dir))).__tild_eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({dir:dir},$ctx1,1)});
//>>excludeEnd("ctx");
})))._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"countExitsAt:",{aPoint:aPoint},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "countExitsAt: aPoint\x0a\x09^ (self directions select: [ :dir | (self at: aPoint + dir) ~= #wall ]) size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "select:", "directions", "~=", "at:", "+"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "countRegionsAt:",
protocol: "regions",
fn: function (aPoint){
var self=this,$self=this;
var rs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
rs=$recv($globals.Set)._new();
$recv($self._directions())._do_((function(dir){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($self["@regions"])._at_($recv(aPoint).__plus(dir));
if(($receiver = $1) == null || $receiver.a$nil){
return $1;
} else {
var region;
region=$receiver;
return $recv(rs)._add_(region);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({dir:dir},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return rs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"countRegionsAt:",{aPoint:aPoint,rs:rs},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "countRegionsAt: aPoint\x0a\x09| rs |\x0a\x09\x0a\x09rs := Set new.\x0a\x09self directions do: [ :dir |\x0a\x09\x09(regions at: aPoint + dir)\x0a\x09\x09\x09ifNotNil: [ :region | rs add: region ] ].\x0a\x09^ rs",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "directions", "ifNotNil:", "at:", "+", "add:"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "directions",
protocol: "building",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(0).__at_minus((1));
$2=(0).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(-1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
return [$1,$2,$3,(1).__at((0))];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directions",{},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "directions\x0a\x09^ {0@-1. 0@1. -1@0. 1@0}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@-", "@"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "generateJunction",
protocol: "building",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=(4)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$4=$recv((3)._atRandom()).__eq((1));
if($core.assert($4)){
$1="openDoor";
} else {
$1="floor";
}
} else {
$1="closedDoor";
}
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"generateJunction",{},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "generateJunction\x0a\x09^ 4 atRandom = 1\x0a\x09\x09ifTrue: [ 3 atRandom = 1\x0a\x09\x09\x09ifTrue: [ #openDoor ]\x0a\x09\x09\x09ifFalse: [ #floor ] ]\x0a\x09\x09ifFalse: [ #closedDoor ] ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "atRandom"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "hasWallAt:",
protocol: "testing",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._at_(aPoint)).__eq("wall");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasWallAt:",{aPoint:aPoint},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "hasWallAt: aPoint\x0a\x09^ (self at: aPoint) = #wall",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "at:"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.DungeonMap.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@currentRegion"]=(-1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09currentRegion := -1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "isDeadEnd:",
protocol: "building",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._at_(aPoint)).__tild_eq("wall"))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._countExitsAt_(aPoint)).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDeadEnd:",{aPoint:aPoint},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "isDeadEnd: aPoint\x0a\x09^ (self at: aPoint) ~= #wall and: [ (self countExitsAt: aPoint) = 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "~=", "at:", "=", "countExitsAt:"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "regionsAt:",
protocol: "regions",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self._directions())._select_((function(dir){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($self["@regions"])._at_($recv(aPoint).__plus(dir)))._isNotNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({dir:dir},$ctx1,1)});
//>>excludeEnd("ctx");
})))._asSet();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"regionsAt:",{aPoint:aPoint},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "regionsAt: aPoint\x0a\x09^ (self directions\x0a\x09\x09select: [ :dir |\x0a\x09\x09\x09(regions at: aPoint + dir) isNotNil ] ) asSet",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asSet", "select:", "directions", "isNotNil", "at:", "+"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "removeDeadEnds",
protocol: "building",
fn: function (){
var self=this,$self=this;
var done;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($recv(done)._isNil())._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
done=true;
return $recv($self._bounds())._pointsDo_((function(point){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$self._isDeadEnd_(point);
if($core.assert($1)){
done=nil;
return $self._at_put_(point,"wall");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({point:point},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeDeadEnds",{done:done},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeDeadEnds\x0a\x09| done |\x0a\x09\x0a\x09done isNil\x0a\x09\x09whileTrue: [\x0a\x09\x09\x09done := true.\x0a\x09\x09\x09self bounds\x0a\x09\x09\x09\x09pointsDo: [ :point |\x0a\x09\x09\x09\x09\x09(self isDeadEnd: point)\x0a\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09done := nil.\x0a\x09\x09\x09\x09\x09\x09\x09self at: point put: #wall ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileTrue:", "isNil", "pointsDo:", "bounds", "ifTrue:", "isDeadEnd:", "at:put:"]
}),
$globals.DungeonMap);

$core.addMethod(
$core.method({
selector: "startRegion",
protocol: "regions",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@currentRegion"]=$recv($self["@currentRegion"]).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startRegion",{},$globals.DungeonMap)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startRegion\x0a\x09currentRegion := currentRegion + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+"]
}),
$globals.DungeonMap);


$core.addMethod(
$core.method({
selector: "contain:",
protocol: "*Pixi-Engine",
fn: function (aSprite){
var self=this,$self=this;
var collision;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$3,$1,$6,$5,$8,$10,$9,$7,$11,$14,$15,$13,$17,$16,$12,$20,$19,$18,$23,$24,$22,$26,$25,$21;
$2=$recv(aSprite)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$4=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__lt($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$6=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$recv(aSprite)._x_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:"]=1;
//>>excludeEnd("ctx");
collision="left";
collision;
}
$8=$recv(aSprite)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$10=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__lt($9);
if($core.assert($7)){
$11=$recv($self._origin())._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=3;
//>>excludeEnd("ctx");
$recv(aSprite)._y_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y:"]=1;
//>>excludeEnd("ctx");
collision="top";
collision;
}
$14=$recv(aSprite)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=4;
//>>excludeEnd("ctx");
$15=$recv(aSprite)._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$13=$recv($14).__plus($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$17=$self._extent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["extent"]=1;
//>>excludeEnd("ctx");
$16=$recv($17)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=5;
//>>excludeEnd("ctx");
$12=$recv($13).__gt($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($12)){
$20=$self._extent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["extent"]=2;
//>>excludeEnd("ctx");
$19=$recv($20)._x();
$18=$recv($19).__minus($recv(aSprite)._width());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$recv(aSprite)._x_($18);
collision="right";
collision;
}
$23=$recv(aSprite)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=4;
//>>excludeEnd("ctx");
$24=$recv(aSprite)._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$22=$recv($23).__plus($24);
$26=$self._extent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["extent"]=3;
//>>excludeEnd("ctx");
$25=$recv($26)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=5;
//>>excludeEnd("ctx");
$21=$recv($22).__gt($25);
if($core.assert($21)){
$recv(aSprite)._y_($recv($recv($self._extent())._y()).__minus($recv(aSprite)._height()));
collision="bottom";
collision;
}
return collision;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contain:",{aSprite:aSprite,collision:collision},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "contain: aSprite\x0a\x09| collision |\x0a\x09\x0a\x09aSprite x < self origin x ifTrue: [ aSprite x: self origin x. collision := #left ].\x0a\x09aSprite y < self origin y ifTrue: [ aSprite y: self origin y. collision := #top ].\x0a\x09aSprite x + aSprite width > self extent x\x0a\x09\x09ifTrue: [ aSprite x: self extent x - aSprite width. collision := #right ].\x0a\x09aSprite y + aSprite height > self extent y\x0a\x09\x09ifTrue: [ aSprite y: self extent y - aSprite height. collision := #bottom ].\x0a\x09^ collision",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "x", "origin", "x:", "y", "y:", ">", "+", "width", "extent", "-", "height"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "doesntOverlap:",
protocol: "*Pixi-Engine",
fn: function (aRectangle){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$6,$5,$2,$9,$8,$11,$10,$7,$14,$13,$16,$15,$12,$17,$1;
$4=$recv(aRectangle)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$6=$self._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["corner"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__gt($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$recv(aRectangle)._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["corner"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$11=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["origin"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._x();
$7=$recv($8).__lt($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<"]=1;
//>>excludeEnd("ctx");
return $recv($7)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$14=$recv(aRectangle)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["origin"]=3;
//>>excludeEnd("ctx");
$13=$recv($14)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$16=$self._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["corner"]=3;
//>>excludeEnd("ctx");
$15=$recv($16)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$12=$recv($13).__gt($15);
return $recv($12)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$17=$recv($recv(aRectangle)._corner())._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["y"]=3;
//>>excludeEnd("ctx");
return $recv($17).__lt($recv($self._origin())._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["or:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesntOverlap:",{aRectangle:aRectangle},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "doesntOverlap: aRectangle\x0a\x09^ aRectangle origin x > self corner x or: [\x0a\x09\x09aRectangle corner x < self origin x or: [\x0a\x09\x09\x09aRectangle origin y > self corner y or: [\x0a\x09\x09\x09\x09aRectangle corner y < self origin y ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", ">", "x", "origin", "corner", "<", "y"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "doesntOverlapBorders:",
protocol: "*Pixi-Engine",
fn: function (aRectangle){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$3,$7,$6,$2,$11,$10,$9,$13,$12,$8,$17,$16,$15,$19,$18,$14,$21,$20,$1;
$5=$recv(aRectangle)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$7=$self._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["corner"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__gt($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$11=$recv(aRectangle)._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["corner"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$9=$recv($10).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$13=$self._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["origin"]=2;
//>>excludeEnd("ctx");
$12=$recv($13)._x();
$8=$recv($9).__lt($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<"]=1;
//>>excludeEnd("ctx");
return $recv($8)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$17=$recv(aRectangle)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["origin"]=3;
//>>excludeEnd("ctx");
$16=$recv($17)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$15=$recv($16).__minus((1));
$19=$self._corner();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["corner"]=3;
//>>excludeEnd("ctx");
$18=$recv($19)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$14=$recv($15).__gt($18);
return $recv($14)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$21=$recv($recv(aRectangle)._corner())._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["y"]=3;
//>>excludeEnd("ctx");
$20=$recv($21).__plus((1));
return $recv($20).__lt($recv($self._origin())._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["or:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesntOverlapBorders:",{aRectangle:aRectangle},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "doesntOverlapBorders: aRectangle\x0a\x09^ (aRectangle origin x - 1) > self corner x or: [\x0a\x09\x09(aRectangle corner x + 1) < self origin x or: [\x0a\x09\x09\x09(aRectangle origin y - 1) > self corner y or: [\x0a\x09\x09\x09\x09(aRectangle corner y + 1 ) < self origin y ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", ">", "-", "x", "origin", "corner", "<", "+", "y"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "overlaps:",
protocol: "*Pixi-Engine",
fn: function (aRectangle){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._doesntOverlap_(aRectangle))._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overlaps:",{aRectangle:aRectangle},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "overlaps: aRectangle\x0a\x09^ (self doesntOverlap: aRectangle) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "doesntOverlap:"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "overlapsBorders:",
protocol: "*Pixi-Engine",
fn: function (aRectangle){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._doesntOverlapBorders_(aRectangle))._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overlapsBorders:",{aRectangle:aRectangle},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRectangle"],
source: "overlapsBorders: aRectangle\x0a\x09^ (self doesntOverlapBorders: aRectangle) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "doesntOverlapBorders:"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "pointsDo:",
protocol: "*Pixi-Engine",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=$recv($self["@origin"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._to_($recv($self["@corner"])._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["to:"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv($self["@origin"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._to_($recv($self["@corner"])._y());
return $recv($3)._do_((function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_($recv(x).__at(y));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({y:y},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pointsDo:",{aBlock:aBlock},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "pointsDo: aBlock\x0a\x09(origin x to: corner x)\x0a\x09\x09do: [ :x | (origin y to: corner y)\x0a\x09\x09\x09\x09do: [ :y | aBlock value: x@y ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "to:", "x", "y", "value:", "@"]
}),
$globals.Rectangle);

});
