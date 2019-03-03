define(["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Pixi-Engine");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.transport = {"type":"amd","amdNamespace":"amber-pixigame"};

$core.addClass("Actor", $globals.Object, ["sprite", "vx", "vy"], "Pixi-Engine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Actor.comment="I represent an entity on the game world capable of acting and interacting.\x0a\x0aI proxy most of the messages for my Sprite.\x0a\x0aI must be subclassed, and my registry configured, if it is to be used.";
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
source: "update",
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


$core.addClass("Registry", $globals.Object, ["dictionary"], "Pixi-Engine");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Registry.comment="I proxy my singleton, which itself proxies a dictionary to provide easy access to game elements.\x0a\x0aI am meant to be subclassed, and my singletons usually configured to be used by subclasses of other classes providing registry facilities, like Actor or Scene.";
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

});
