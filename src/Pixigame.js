define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "pixi", "./Pixi-Engine", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber-pixigame/Pixi-Engine", "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);
,PIXI
//>>excludeEnd("imports");
){"use strict";
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Pixigame");
$pkg.innerEval = function (expr) { return eval(expr); };
$pkg.imports = ["PIXI=pixi", "./Pixi-Engine", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$pkg.transport = {"type":"amd","amdNamespace":"amber-pixigame"};

$core.addClass("GameActor", $globals.Actor, [], "Pixigame");

$core.addMethod(
$core.method({
selector: "registry",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $globals.GameRegistry;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registry\x0a\x09^ GameRegistry",
referencedClasses: ["GameRegistry"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GameActor.a$cls);


$core.addClass("Door", $globals.GameActor, [], "Pixigame");
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
($globals.Door.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self._sprite_($recv($recv($recv($globals.Libs)._pixi())._Sprite())._newValue_($recv($globals.Assets)._at_("door.png")));
$self._x_((32));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Door)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self\x0a\x09\x09sprite: (Libs pixi Sprite newValue: (Assets at: 'door.png'));\x0a\x09\x09x: 32",
referencedClasses: ["Libs", "Assets"],
//>>excludeEnd("ide");
messageSends: ["initialize", "sprite:", "newValue:", "Sprite", "pixi", "at:", "x:"]
}),
$globals.Door);



$core.addClass("Dungeon", $globals.GameActor, [], "Pixigame");
$core.addMethod(
$core.method({
selector: "contain:",
protocol: "game",
fn: function (aSprite){
var self=this,$self=this;
var collision,field;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$6,$7,$5,$8,$11,$12,$10,$13,$9,$15,$14,$18,$19,$17,$20,$16,$21,$receiver;
field=$globals.HashedCollection._newFromPairs_(["x",(28),"y",(10),"width",(488),"height",(480)]);
$2=$recv(aSprite)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$3=$recv(field)._at_("x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__lt($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$4=$recv(field)._at_("x");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$recv(aSprite)._x_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:"]=1;
//>>excludeEnd("ctx");
collision="left";
collision;
}
$6=$recv(aSprite)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$7=$recv(field)._at_("y");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__lt($7);
if($core.assert($5)){
$8=$recv(field)._at_("y");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$recv(aSprite)._y_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y:"]=1;
//>>excludeEnd("ctx");
collision="top";
collision;
}
$11=$recv(aSprite)._x();
$12=$recv(aSprite)._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$10=$recv($11).__plus($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$13=$recv(field)._at_("width");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=5;
//>>excludeEnd("ctx");
$9=$recv($10).__gt($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($9)){
$15=$recv(field)._at_("width");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=6;
//>>excludeEnd("ctx");
$14=$recv($15).__minus($recv(aSprite)._width());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$recv(aSprite)._x_($14);
collision="right";
collision;
}
$18=$recv(aSprite)._y();
$19=$recv(aSprite)._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$17=$recv($18).__plus($19);
$20=$recv(field)._at_("height");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=7;
//>>excludeEnd("ctx");
$16=$recv($17).__gt($20);
if($core.assert($16)){
$recv(aSprite)._y_($recv($recv(field)._at_("height")).__minus($recv(aSprite)._height()));
collision="bottom";
collision;
}
$21=collision;
if(($receiver = $21) == null || $receiver.a$nil){
$21;
} else {
var dir;
dir=$receiver;
$recv(aSprite)._onContain_(dir);
}
return collision;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contain:",{aSprite:aSprite,collision:collision,field:field},$globals.Dungeon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "contain: aSprite\x0a\x09| collision field |\x0a\x09\x0a\x09field := #{#x -> 28. #y -> 10. #width -> 488. #height -> 480}.\x0a\x09\x0a\x09aSprite x < (field at: #x) ifTrue: [ aSprite x: (field at: #x). collision := #left ].\x0a\x09aSprite y < (field at: #y) ifTrue: [ aSprite y: (field at: #y). collision := #top ].\x0a\x09aSprite x + aSprite width > (field at: #width)\x0a\x09\x09ifTrue: [ aSprite x: (field at: #width) - aSprite width. collision := #right ].\x0a\x09aSprite y + aSprite height > (field at: #height)\x0a\x09\x09ifTrue: [ aSprite y: (field at: #height) - aSprite height. collision := #bottom ].\x0a\x09collision ifNotNil: [ :dir | aSprite onContain: dir ].\x0a\x09^ collision",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "x", "at:", "x:", "y", "y:", ">", "+", "width", "-", "height", "ifNotNil:", "onContain:"]
}),
$globals.Dungeon);

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
($globals.Dungeon.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self._sprite_($recv($recv($recv($globals.Libs)._pixi())._Sprite())._newValue_($recv($globals.Assets)._at_("dungeon.png")));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Dungeon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self sprite: (Libs pixi Sprite newValue: (Assets at: 'dungeon.png'))",
referencedClasses: ["Libs", "Assets"],
//>>excludeEnd("ide");
messageSends: ["initialize", "sprite:", "newValue:", "Sprite", "pixi", "at:"]
}),
$globals.Dungeon);



$core.addClass("Explorer", $globals.GameActor, ["health"], "Pixigame");
$core.addMethod(
$core.method({
selector: "blink",
protocol: "updating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._alpha_((0.5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blink",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blink\x0a\x09self alpha: 0.5.\x0a\x09\x22healthBar outer width: healthBar outer width - 1\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alpha:"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "dontBlink",
protocol: "updating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._alpha_((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dontBlink",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dontBlink\x0a\x09self alpha: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alpha:"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "health",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@health"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "health\x0a\x09^ health",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "health:",
protocol: "accessing",
fn: function (anObject){
var self=this,$self=this;
$self["@health"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "health: anObject\x0a\x09health := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$6,$5,$4;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Explorer.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=$recv($recv($globals.Libs)._pixi())._Sprite();
$3=$recv($globals.Assets)._at_("explorer.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._newValue_($3);
$self._sprite_($1);
$self._health_((128));
$self._x_((68));
$6=$recv($recv($self._class())._at_("scene"))._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__minus($recv($self._height()).__slash((2)));
$self._y_($4);
$self._vx_((0));
$self._vy_((0));
$self._setupKeyboard();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self\x0a\x09\x09sprite: (Libs pixi Sprite newValue: (Assets at: 'explorer.png'));\x0a\x09\x09health: 128;\x0a\x09\x09x: 68;\x0a\x09\x09y: ((self class at: #scene) height / 2) - (self height / 2);\x0a\x09\x09vx: 0;\x0a\x09\x09vy: 0;\x0a\x09\x09setupKeyboard",
referencedClasses: ["Libs", "Assets"],
//>>excludeEnd("ide");
messageSends: ["initialize", "sprite:", "newValue:", "Sprite", "pixi", "at:", "health:", "x:", "y:", "-", "/", "height", "class", "vx:", "vy:", "setupKeyboard"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "move",
protocol: "updating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._x()).__plus($self._vx());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$self._x_($1);
$self._y_($recv($self._y()).__plus($self._vy()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"move",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "move\x0a\x09self\x0a\x09\x09x: self x + self vx;\x0a\x09\x09y: self y + self vy.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x:", "+", "x", "vx", "y:", "y", "vy"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "setupKeyboard",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5,$6,$8,$7,$9;
$recv($globals.Keyboard)._code_onPress_onRelease_((37),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._vx_((-5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vx:"]=1;
//>>excludeEnd("ctx");
$1=$self._vy_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vy:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$self._vy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vy"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._isZero();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isZero"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
return $self._vx_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vx:"]=2;
//>>excludeEnd("ctx");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["code:onPress:onRelease:"]=1;
//>>excludeEnd("ctx");
$recv($globals.Keyboard)._code_onPress_onRelease_((39),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._vx_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vx:"]=3;
//>>excludeEnd("ctx");
$4=$self._vy_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vy:"]=2;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv($self._vy())._isZero();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isZero"]=2;
//>>excludeEnd("ctx");
if($core.assert($5)){
return $self._vx_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vx:"]=4;
//>>excludeEnd("ctx");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["code:onPress:onRelease:"]=2;
//>>excludeEnd("ctx");
$recv($globals.Keyboard)._code_onPress_onRelease_((38),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._vy_((-5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vy:"]=3;
//>>excludeEnd("ctx");
$6=$self._vx_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vx:"]=5;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$8=$self._vx();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vx"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._isZero();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isZero"]=3;
//>>excludeEnd("ctx");
if($core.assert($7)){
return $self._vy_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vy:"]=4;
//>>excludeEnd("ctx");
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["code:onPress:onRelease:"]=3;
//>>excludeEnd("ctx");
$recv($globals.Keyboard)._code_onPress_onRelease_((40),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._vy_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["vy:"]=5;
//>>excludeEnd("ctx");
return $self._vx_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,10)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$recv($self._vx())._isZero();
if($core.assert($9)){
return $self._vy_((0));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,11)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupKeyboard",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupKeyboard\x0a\x09Keyboard code: 37\x0a\x09\x09onPress: [ self vx: -5; vy: 0 ]\x0a\x09\x09onRelease: [ self vy isZero ifTrue: [ self vx: 0 ] ].\x0a\x0a\x09Keyboard code: 39\x0a\x09\x09onPress: [ self vx: 5; vy: 0 ]\x0a\x09\x09onRelease: [ self vy isZero ifTrue: [ self vx: 0 ] ].\x0a\x09\x09\x0a\x09Keyboard code: 38\x0a\x09\x09onPress: [ self vy: -5; vx: 0 ]\x0a\x09\x09onRelease: [ self vx isZero ifTrue: [ self vy: 0 ] ].\x0a\x09\x09\x0a\x09Keyboard code: 40\x0a\x09\x09onPress: [ self vy: 5; vx: 0 ]\x0a\x09\x09onRelease: [ self vx isZero ifTrue: [ self vy: 0 ] ]",
referencedClasses: ["Keyboard"],
//>>excludeEnd("ide");
messageSends: ["code:onPress:onRelease:", "vx:", "vy:", "ifTrue:", "isZero", "vy", "vx"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "takeDamage",
protocol: "updating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@health"]=$recv($self["@health"]).__minus((1));
$self._blink();
$recv($recv($self._class())._at_("healthBar"))._health_($self["@health"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"takeDamage",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "takeDamage\x0a\x09health := health - 1.\x0a\x09self blink.\x0a\x09(self class at: #healthBar) health: health",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "blink", "health:", "at:", "class"]
}),
$globals.Explorer);

$core.addMethod(
$core.method({
selector: "update",
protocol: "updating",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self._move();
$recv($recv($self._class())._at_("dungeon"))._contain_(self);
$1=$recv($self._health()).__lt((0));
if($core.assert($1)){
$recv($recv($globals.Pixigame)._instance())._lose();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.Explorer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09self move.\x0a\x09(self class at: #dungeon) contain: self.\x0a\x09(self health < 0) ifTrue: [ Pixigame instance lose ]",
referencedClasses: ["Pixigame"],
//>>excludeEnd("ide");
messageSends: ["move", "contain:", "at:", "class", "ifTrue:", "<", "health", "lose", "instance"]
}),
$globals.Explorer);



$core.addClass("HealthBar", $globals.GameActor, [], "Pixigame");
$core.addMethod(
$core.method({
selector: "health:",
protocol: "updating",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($self._sprite())._outer())._width_(aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"health:",{aNumber:aNumber},$globals.HealthBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "health: aNumber\x0a\x09self sprite outer width: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "outer", "sprite"]
}),
$globals.HealthBar);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
var bar,inner,outer;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4,$6,$7,$8;
$2=$recv($globals.Libs)._pixi();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pixi"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._Container();
$self["@sprite"]=$recv($1)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$3=$recv($self["@sprite"])._position();
$recv($3)._x_((338));
$recv($3)._y_((4));
$5=$recv($globals.Libs)._pixi();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pixi"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._Graphics();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["Graphics"]=1;
//>>excludeEnd("ctx");
inner=$recv($4)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$6=inner;
$recv($6)._beginFill_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["beginFill:"]=1;
//>>excludeEnd("ctx");
$recv($6)._drawRect_y_width_height_((0),(0),(128),(8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawRect:y:width:height:"]=1;
//>>excludeEnd("ctx");
$7=$recv($6)._endFill();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["endFill"]=1;
//>>excludeEnd("ctx");
$recv($self["@sprite"])._addChild_(inner);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addChild:"]=1;
//>>excludeEnd("ctx");
outer=$recv($recv($recv($globals.Libs)._pixi())._Graphics())._new();
$8=outer;
$recv($8)._beginFill_((16724736));
$recv($8)._drawRect_y_width_height_((0),(0),(128),(8));
$recv($8)._endFill();
$recv($self["@sprite"])._addChild_(outer);
$recv($self["@sprite"])._at_put_("outer",outer);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{bar:bar,inner:inner,outer:outer},$globals.HealthBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09| bar inner outer |\x0a\x09\x0a\x09sprite := Libs pixi Container new.\x0a\x09sprite position x: 338; y: 4.\x0a\x09\x0a\x09inner := Libs pixi Graphics new.\x0a\x09inner beginFill: 16r0;\x0a\x09\x09  drawRect: 0 y: 0 width: 128 height: 8;\x0a\x09\x09  endFill.\x0a\x09sprite addChild: inner.\x0a\x09\x0a\x09outer := Libs pixi Graphics new.\x0a\x09outer beginFill: 16rFF3300;\x0a\x09\x09  drawRect: 0 y: 0 width: 128 height: 8;\x0a\x09\x09  endFill.\x0a\x09sprite addChild: outer.\x0a\x09\x0a\x09sprite at: #outer put: outer",
referencedClasses: ["Libs"],
//>>excludeEnd("ide");
messageSends: ["new", "Container", "pixi", "x:", "position", "y:", "Graphics", "beginFill:", "drawRect:y:width:height:", "endFill", "addChild:", "at:put:"]
}),
$globals.HealthBar);



$core.addClass("Slime", $globals.GameActor, [], "Pixigame");
$core.addMethod(
$core.method({
selector: "move",
protocol: "game",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._x()).__plus($self._vx());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$self._x_($1);
$self._y_($recv($self._y()).__plus($self._vy()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"move",{},$globals.Slime)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "move\x0a\x09self x: self x + self vx.\x0a\x09self y: self y + self vy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x:", "+", "x", "vx", "y:", "y", "vy"]
}),
$globals.Slime);

$core.addMethod(
$core.method({
selector: "onContain:",
protocol: "game",
fn: function (aDirection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(["top","bottom"])._includes_(aDirection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$2=$recv($self._vy())._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
$self._vy_($2);
}
$3=$recv(["left","right"])._includes_(aDirection);
if($core.assert($3)){
$self._vx_($recv($self._vx())._negated());
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onContain:",{aDirection:aDirection},$globals.Slime)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDirection"],
source: "onContain: aDirection\x0a\x09({#top. #bottom} includes: aDirection)\x0a\x09\x09ifTrue: [ self vy: self vy negated ].\x0a\x09({#left. #right} includes: aDirection)\x0a\x09\x09ifTrue: [ self vx: self vx negated ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "includes:", "vy:", "negated", "vy", "vx:", "vx"]
}),
$globals.Slime);

$core.addMethod(
$core.method({
selector: "update",
protocol: "game",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._move();
$recv($recv($self._class())._at_("dungeon"))._contain_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.Slime)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09self move.\x0a\x09(self class at: #dungeon) contain: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["move", "contain:", "at:", "class"]
}),
$globals.Slime);



$core.addClass("Treasure", $globals.GameActor, [], "Pixigame");
$core.addMethod(
$core.method({
selector: "follow:",
protocol: "game",
fn: function (anActor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(anActor)._x()).__plus((8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$self._x_($1);
$self._y_($recv($recv(anActor)._y()).__plus((8)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"follow:",{anActor:anActor},$globals.Treasure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anActor"],
source: "follow: anActor\x0a\x09self\x0a\x09\x09x: anActor x + 8;\x0a\x09\x09y: anActor y + 8",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x:", "+", "x", "y:", "y"]
}),
$globals.Treasure);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
var scene;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$6,$5,$4;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Treasure.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
scene=$recv($self._class())._at_("scene");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$self._sprite_($recv($recv($recv($globals.Libs)._pixi())._Sprite())._newValue_($recv($globals.Assets)._at_("treasure.png")));
$3=$recv(scene)._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__minus($self._width());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__minus((48));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$self._x_($1);
$6=$recv(scene)._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__minus($recv($self._height()).__slash((2)));
$self._y_($4);
$self._vx_((0));
$self._vy_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{scene:scene},$globals.Treasure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09| scene |\x0a\x09\x0a\x09super initialize.\x0a\x09scene := self class at: #scene.\x0a\x09self\x0a\x09\x09sprite: (Libs pixi Sprite newValue: (Assets at: 'treasure.png'));\x0a\x09\x09x: scene width - self width - 48;\x0a\x09\x09y: (scene height / 2) - (self height / 2);\x0a\x09\x09vx: 0;\x0a\x09\x09vy: 0",
referencedClasses: ["Libs", "Assets"],
//>>excludeEnd("ide");
messageSends: ["initialize", "at:", "class", "sprite:", "newValue:", "Sprite", "pixi", "x:", "-", "width", "y:", "/", "height", "vx:", "vy:"]
}),
$globals.Treasure);

$core.addMethod(
$core.method({
selector: "update",
protocol: "game",
fn: function (){
var self=this,$self=this;
var explorer;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
explorer=$recv($1)._at_("explorer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv(explorer)._hits_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hits:"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$self._follow_(explorer);
}
$3=$self._hits_($recv($self._class())._at_("door"));
if($core.assert($3)){
$recv($recv($globals.Pixigame)._instance())._win();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{explorer:explorer},$globals.Treasure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09| explorer |\x0a\x09\x0a\x09explorer := self class at: #explorer.\x0a\x09(explorer hits: self) ifTrue: [ self follow: explorer ].\x0a\x09(self hits: (self class at: #door)) ifTrue: [ Pixigame instance win ]",
referencedClasses: ["Pixigame"],
//>>excludeEnd("ide");
messageSends: ["at:", "class", "ifTrue:", "hits:", "follow:", "win", "instance"]
}),
$globals.Treasure);



$core.addClass("GameRegistry", $globals.Registry, [], "Pixigame");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.GameRegistry.comment="I am the central Registry for the game.\x0a\x0aGameActor and the Scenes all use me as a registry.";
//>>excludeEnd("ide");


$core.addClass("Assets", $globals.GameRegistry, [], "Pixigame");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Assets.comment="I provide easy access to the textures.";
//>>excludeEnd("ide");

$globals.Assets.a$cls.iVarNames = ["instance"];

$core.addClass("GameScene", $globals.Scene, [], "Pixigame");

$core.addMethod(
$core.method({
selector: "registry",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $globals.GameRegistry;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "registry\x0a\x09^ GameRegistry",
referencedClasses: ["GameRegistry"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GameScene.a$cls);


$core.addClass("GameOverScene", $globals.GameScene, [], "Pixigame");
$core.addMethod(
$core.method({
selector: "enter",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
var style,message;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=$recv($globals.Libs)._pixi();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pixi"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._TextStyle();
style=$recv($1)._newValue_($globals.HashedCollection._newFromPairs_(["fontFamily","Futura","fontSize",(64),"fill","white"]));
$self._visible_(true);
message=$recv($recv($recv($globals.Libs)._pixi())._Text())._newValue_value_($recv($self._class())._at_("endMessage"),style);
$3=message;
$recv($3)._x_((120));
$recv($3)._y_((120));
$recv($self._screen())._addChild_(message);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"enter",{style:style,message:message},$globals.GameOverScene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enter\x0a\x09| style message |\x0a\x09\x0a\x09style := Libs pixi TextStyle newValue: #{\x0a\x09\x09'fontFamily' -> 'Futura'.\x0a\x09\x09'fontSize' -> 64.\x0a\x09\x09'fill' -> 'white' }.\x0a\x09\x0a\x09self visible: true.\x0a\x09\x0a\x09message := Libs pixi Text newValue: (self class at:#endMessage) value: style.\x0a\x09message x: 120; y: 120.\x0a\x09\x22message x: 120; y: self screen height / 2 - 32.\x22\x0a\x09\x09\x0a\x09self screen addChild: message.",
referencedClasses: ["Libs"],
//>>excludeEnd("ide");
messageSends: ["newValue:", "TextStyle", "pixi", "visible:", "newValue:value:", "Text", "at:", "class", "x:", "y:", "addChild:", "screen"]
}),
$globals.GameOverScene);

$core.addMethod(
$core.method({
selector: "setup",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x09\x22\x09message x: 120; y: self stage height / 2 - 32.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GameOverScene);



$core.addClass("PlayScene", $globals.GameScene, [], "Pixigame");
$core.addMethod(
$core.method({
selector: "exit",
protocol: "setup",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._visible_(false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exit",{},$globals.PlayScene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exit\x0a\x09self visible: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visible:"]
}),
$globals.PlayScene);

$core.addMethod(
$core.method({
selector: "setup",
protocol: "setup",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$6,$4,$8,$9,$7,$11,$12,$10,$14,$13;
$2=$recv($globals.Dungeon)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($2)._registerAs_("dungeon");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["registerAs:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$1=$3;
$self._addChild_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addChild:"]=1;
//>>excludeEnd("ctx");
$5=$recv($globals.Door)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($5)._registerAs_("door");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["registerAs:"]=2;
//>>excludeEnd("ctx");
$6=$recv($5)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$4=$6;
$self._addChild_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addChild:"]=2;
//>>excludeEnd("ctx");
$8=$recv($globals.Explorer)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$recv($8)._registerAs_("explorer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["registerAs:"]=3;
//>>excludeEnd("ctx");
$9=$recv($8)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=3;
//>>excludeEnd("ctx");
$7=$9;
$self._addChild_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addChild:"]=3;
//>>excludeEnd("ctx");
$11=$recv($globals.Treasure)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$recv($11)._registerAs_("treasure");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["registerAs:"]=4;
//>>excludeEnd("ctx");
$12=$recv($11)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=4;
//>>excludeEnd("ctx");
$10=$12;
$self._addChild_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addChild:"]=4;
//>>excludeEnd("ctx");
$14=$recv($globals.HealthBar)._new();
$recv($14)._registerAs_("healthBar");
$13=$recv($14)._yourself();
$self._addChild_($13);
$self._setupBlobs();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setup",{},$globals.PlayScene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x09self\x0a\x09\x09addChild: (Dungeon new registerAs: #dungeon; yourself);\x0a\x09\x09addChild: (Door new registerAs: #door; yourself);\x0a\x09\x09addChild: (Explorer new registerAs: #explorer; yourself);\x0a\x09\x09addChild: (Treasure new registerAs: #treasure; yourself);\x0a\x09\x09addChild: (HealthBar new registerAs: #healthBar; yourself);\x0a\x09\x09setupBlobs\x0a\x09",
referencedClasses: ["Dungeon", "Door", "Explorer", "Treasure", "HealthBar"],
//>>excludeEnd("ide");
messageSends: ["addChild:", "registerAs:", "new", "yourself", "setupBlobs"]
}),
$globals.PlayScene);

$core.addMethod(
$core.method({
selector: "setupBlobs",
protocol: "setup",
fn: function (){
var self=this,$self=this;
var spacing,xOffset,speed,direction,vertical,blobTexture,blobs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$6,$5,$8,$7,$4,$10,$9,$12,$11;
spacing=(24);
xOffset=(128);
speed=(2);
direction=(1);
vertical=true;
blobTexture=$recv($globals.Assets)._at_("blob.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
blobs=$recv((1)._to_((12)))._collect_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
vertical=$recv(vertical)._not();
direction=$recv(direction)._negated();
$1=$recv($globals.Slime)._for_(blobTexture);
$3=$recv(spacing).__star(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__plus(xOffset);
$recv($1)._x_($2);
$6=$recv($self._class())._at_("rng");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._next();
$8=$recv($recv($globals.GameActor)._at_("dungeon"))._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__minus($recv(blobTexture)._height());
$4=$recv($5).__star($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$recv($1)._y_($4);
$10=vertical;
if($core.assert($10)){
$9=(0);
} else {
$9=$recv(speed).__star(direction);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=3;
//>>excludeEnd("ctx");
}
$recv($1)._vx_($9);
$12=vertical;
if($core.assert($12)){
$11=$recv(speed).__star(direction);
} else {
$11=(0);
}
$recv($1)._vy_($11);
$recv($1)._addTo_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($globals.GameActor)._at_put_("blobs",blobs);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupBlobs",{spacing:spacing,xOffset:xOffset,speed:speed,direction:direction,vertical:vertical,blobTexture:blobTexture,blobs:blobs},$globals.PlayScene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupBlobs\x0a\x09| spacing xOffset speed direction vertical blobTexture blobs |\x0a\x09\x0a\x09spacing := 24.\x0a\x09xOffset := 128.\x0a\x09speed := 2.\x0a\x09direction := 1. \x22down\x22\x0a\x09vertical := true.\x0a\x09blobTexture := (Assets at: 'blob.png').\x0a\x09\x0a\x09blobs := (1 to: 12)\x0a\x09\x09collect: [ :i |\x0a\x09\x09\x09vertical := vertical not.\x0a\x09\x09\x09direction := direction negated.\x0a\x09\x09\x09(Slime for: blobTexture)\x0a\x09\x09\x09\x09x: spacing * i + xOffset;\x0a\x09\x09\x09\x09y: (self class at: #rng) next * ((GameActor at: #dungeon) height - blobTexture height);\x0a\x09\x09\x09\x09vx: (vertical ifTrue: [ 0 ] ifFalse:[ speed * direction ]);\x0a\x09\x09\x09\x09vy: (vertical ifTrue: [ speed * direction ] ifFalse:[ 0 ]);\x0a\x09\x09\x09\x09addTo: self;\x0a\x09\x09\x09\x09yourself ].\x0a\x09GameActor at: #blobs put: blobs",
referencedClasses: ["Assets", "Slime", "GameActor"],
//>>excludeEnd("ide");
messageSends: ["at:", "collect:", "to:", "not", "negated", "x:", "for:", "+", "*", "y:", "next", "class", "-", "height", "vx:", "ifTrue:ifFalse:", "vy:", "addTo:", "yourself", "at:put:"]
}),
$globals.PlayScene);

$core.addMethod(
$core.method({
selector: "update",
protocol: "updating",
fn: function (){
var self=this,$self=this;
var explorerHit,explorer;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
explorer=$recv($globals.GameActor)._at_("explorer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv(explorer)._update();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["update"]=1;
//>>excludeEnd("ctx");
explorerHit=false;
$1=$recv($globals.GameActor)._at_("blobs");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$recv($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(each)._update();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["update"]=2;
//>>excludeEnd("ctx");
return $recv(explorerHit)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
explorerHit=$recv(explorer)._hits_(each);
return explorerHit;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=explorerHit;
if($core.assert($2)){
$recv(explorer)._takeDamage();
} else {
$recv(explorer)._dontBlink();
}
$recv($recv($globals.GameActor)._at_("treasure"))._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{explorerHit:explorerHit,explorer:explorer},$globals.PlayScene)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09| explorerHit explorer |\x0a\x09\x0a\x09explorer := GameActor at: #explorer.\x0a\x09explorer update.\x0a\x09\x0a\x09explorerHit := false.\x0a\x09(GameActor at: #blobs) do: [ :each |\x0a\x09\x09each update.\x0a\x09\x09explorerHit or: [ explorerHit := explorer hits: each ] ].\x0a\x09\x09\x0a\x09explorerHit\x0a\x09\x09ifTrue: [ explorer takeDamage ]\x0a\x09\x09ifFalse: [ explorer dontBlink ].\x0a\x09\x0a\x09(GameActor at: #treasure) update\x0a\x09",
referencedClasses: ["GameActor"],
//>>excludeEnd("ide");
messageSends: ["at:", "update", "do:", "or:", "hits:", "ifTrue:ifFalse:", "takeDamage", "dontBlink"]
}),
$globals.PlayScene);



$core.addClass("Pixigame", $globals.Object, ["app", "loader", "state", "message", "gameOverScene"], "Pixigame");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Pixigame.comment="I am the Amber application.";
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
var $1;
$recv($recv(document)._body())._appendChild_($recv($self["@app"])._view());
$1=$recv($recv($globals.Libs)._pixi())._loader();
$recv($1)._add_("images/treasureHunter.json");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_("images/cat.png");
$recv($1)._load_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._setup();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.Pixigame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09document body appendChild: app view.\x0a\x09Libs pixi loader\x0a\x09\x09add: 'images/treasureHunter.json';\x0a\x09\x09add: 'images/cat.png';\x0a\x09\x09load: [ self setup ]",
referencedClasses: ["Libs"],
//>>excludeEnd("ide");
messageSends: ["appendChild:", "body", "view", "add:", "loader", "pixi", "load:", "setup"]
}),
$globals.Pixigame);

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
source: "end\x0a\x09\x22(Registry at: #scene) visible: false.\x0a\x09gameOverScene visible: true\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Pixigame);

$core.addMethod(
$core.method({
selector: "gameLoop:",
protocol: "action",
fn: function (aDelta){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@state"])._value_(aDelta);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gameLoop:",{aDelta:aDelta},$globals.Pixigame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDelta"],
source: "gameLoop: aDelta\x0a\x09state value: aDelta",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.Pixigame);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Pixigame.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($self._class())._instance_(self);
$recv($globals.GameRegistry)._at_put_("rng",$recv($globals.Random)._new());
$2=$recv($globals.Libs)._pixi();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pixi"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._Application();
$self["@app"]=$recv($1)._newValue_($globals.HashedCollection._newFromPairs_(["width",(512),"height",(512),"antialiasing",true,"transparent",false,"resolution",(1)]));
$self["@loader"]=$recv($recv($globals.Libs)._pixi())._loader();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Pixigame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self class instance: self.\x0a\x09GameRegistry at: #rng put: Random new.\x0a\x09app := Libs pixi Application newValue: #{\x0a\x09\x09'width' -> 512.\x0a\x09\x09'height' -> 512.\x0a\x09\x09'antialiasing' -> true.\x0a\x09\x09'transparent' -> false.\x0a\x09\x09'resolution' -> 1 }.\x0a\x09loader := Libs pixi loader",
referencedClasses: ["GameRegistry", "Random", "Libs"],
//>>excludeEnd("ide");
messageSends: ["initialize", "instance:", "class", "at:put:", "new", "newValue:", "Application", "pixi", "loader"]
}),
$globals.Pixigame);

$core.addMethod(
$core.method({
selector: "lose",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($globals.GameRegistry)._at_put_("endMessage","You lost!");
$1=$recv($globals.GameActor)._at_("scene");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._switchTo_($recv($globals.GameActor)._at_("endScene"));
$self["@state"]=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._end();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lose",{},$globals.Pixigame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lose\x0a\x09GameRegistry at: #endMessage put: 'You lost!'.\x0a\x09(GameActor at: #scene) switchTo: (GameActor at: #endScene).\x0a\x09state := [ self end ]",
referencedClasses: ["GameRegistry", "GameActor"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "switchTo:", "at:", "end"]
}),
$globals.Pixigame);

$core.addMethod(
$core.method({
selector: "setup",
protocol: "setup",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Assets)._instance())._dictionary_($recv($recv($recv($self["@loader"])._resources())._at_("images/treasureHunter.json"))._textures());
$self._setupScenes();
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
return $self._gameLoop_(delta);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({delta:delta},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setup",{},$globals.Pixigame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x09Assets instance dictionary: (loader resources at: 'images/treasureHunter.json') textures.\x0a\x09self setupScenes.\x0a\x09state := [ :delta | self update: delta ].\x0a\x09app ticker add: [ :delta | self gameLoop: delta ]",
referencedClasses: ["Assets"],
//>>excludeEnd("ide");
messageSends: ["dictionary:", "instance", "textures", "at:", "resources", "setupScenes", "update:", "add:", "ticker", "gameLoop:"]
}),
$globals.Pixigame);

$core.addMethod(
$core.method({
selector: "setupScenes",
protocol: "setup",
fn: function (){
var self=this,$self=this;
var scene,endScene,style;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self["@app"])._stage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stage"]=1;
//>>excludeEnd("ctx");
scene=$recv($globals.PlayScene)._on_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:"]=1;
//>>excludeEnd("ctx");
$recv($globals.GameActor)._at_put_("scene",scene);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(scene)._setup();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["setup"]=1;
//>>excludeEnd("ctx");
endScene=$recv($globals.GameOverScene)._on_($recv($self["@app"])._stage());
$recv($globals.GameActor)._at_put_("endScene",endScene);
$recv(endScene)._setup();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupScenes",{scene:scene,endScene:endScene,style:style},$globals.Pixigame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupScenes\x0a\x09| scene endScene style |\x0a\x09\x0a\x09scene := PlayScene on: app stage.\x0a\x09GameActor at: #scene put: scene.\x0a\x09scene setup.\x0a\x0a\x09endScene := GameOverScene on: app stage.\x0a\x09GameActor at: #endScene put: endScene.\x0a\x09endScene setup",
referencedClasses: ["PlayScene", "GameActor", "GameOverScene"],
//>>excludeEnd("ide");
messageSends: ["on:", "stage", "at:put:", "setup"]
}),
$globals.Pixigame);

$core.addMethod(
$core.method({
selector: "update:",
protocol: "action",
fn: function (aDelta){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.GameActor)._at_("scene"))._update();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update:",{aDelta:aDelta},$globals.Pixigame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDelta"],
source: "update: aDelta\x0a\x09(GameActor at: #scene) update",
referencedClasses: ["GameActor"],
//>>excludeEnd("ide");
messageSends: ["update", "at:"]
}),
$globals.Pixigame);

$core.addMethod(
$core.method({
selector: "win",
protocol: "action",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($globals.GameRegistry)._at_put_("endMessage","You won!");
$1=$recv($globals.GameActor)._at_("scene");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._switchTo_($recv($globals.GameActor)._at_("endScene"));
$self["@state"]=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._end();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"win",{},$globals.Pixigame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "win\x0a\x09GameRegistry at: #endMessage put: 'You won!'.\x0a\x09(GameActor at: #scene) switchTo: (GameActor at: #endScene).\x0a\x09state := [ self end ]",
referencedClasses: ["GameRegistry", "GameActor"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "switchTo:", "at:", "end"]
}),
$globals.Pixigame);


$globals.Pixigame.a$cls.iVarNames = ["instance"];
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
$globals.Pixigame.a$cls);

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
$globals.Pixigame.a$cls);

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
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Pixigame.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.Pixigame.a$cls);

$core.addMethod(
$core.method({
selector: "unusedProtection",
protocol: "starting",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unusedProtection",{},$globals.Pixigame.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unusedProtection\x0a\x09\x22this method is here in case the compilation breaks and destroys the source code of the last class-side method\x22\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.Pixigame.a$cls);

$core.addMethod(
$core.method({
selector: "contain:",
protocol: "*Pixigame",
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

});
