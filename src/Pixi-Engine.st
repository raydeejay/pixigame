Smalltalk createPackage: 'Pixi-Engine'!
Object subclass: #Actor
	instanceVariableNames: 'sprite vx vy'
	package: 'Pixi-Engine'!
!Actor commentStamp!
I am meant to be subclassed.

I represent an entity on the game world capable of acting and interacting.

I proxy most of the messages for my Sprite.

Override my registry method to use the registerAs: method.!

!Actor methodsFor: 'accessing'!

addTo: aContainer
	aContainer addChild: self
!

alpha: aNumber
	sprite alpha: aNumber
!

game
	self shouldBeImplemented
!

height
	^ sprite height
!

height: aNumber
	sprite height: aNumber
!

sprite
	^ sprite
!

sprite: anObject
	sprite := anObject
!

vx
	^ vx
!

vx: aNumber
	vx := aNumber
!

vy
	^ vy
!

vy: aNumber
	vy := aNumber
!

width
	^ sprite width
!

width: aNumber
	sprite width: aNumber
!

x
	^ sprite x
!

x: aNumber
	sprite x: aNumber
!

y
	^ sprite y
!

y: aNumber
	sprite y: aNumber
! !

!Actor methodsFor: 'calculating'!

centerX
	^ sprite x + self halfWidth
!

centerY
	^ sprite y + self halfHeight
!

halfHeight
	^ sprite height / 2
!

halfWidth
	^ sprite width / 2
! !

!Actor methodsFor: 'game'!

onContain: aDirection
	'do nothing'
! !

!Actor methodsFor: 'registering'!

registerAs: aSymbol
	"Registry at: aSymbol put: self"
	self class at: aSymbol put: self
! !

!Actor methodsFor: 'testing'!

hits: aRect
	| combinedHalfWidths combinedHalfHeights dx dy |
	
	dx := self centerX - aRect centerX.
	dy := self centerY - aRect centerY.
	combinedHalfWidths := self halfWidth + aRect halfWidth.
	combinedHalfHeights := self halfHeight + aRect halfHeight.
	
	^ dx abs < combinedHalfWidths and: [ dy abs < combinedHalfHeights ]
! !

!Actor methodsFor: 'updating'!

move
	self subclassResponsibility
!

update
	"Do nothing by default"
! !

!Actor class methodsFor: 'accessing'!

at: aKey
	^ self registry at: aKey
!

at: aKey put: aValue
	^ self registry at: aKey put: aValue
!

registry
	self shouldBeImplemented
! !

!Actor class methodsFor: 'instance creation'!

for: aTexture
	^ self new sprite: (Libs pixi Sprite newValue: aTexture); yourself
	"for: aTexture
	^ self new sprite: (Libs pixi TilingSprite newValue: aTexture); yourself"
! !

Object subclass: #Board
	instanceVariableNames: 'width height data'
	package: 'Pixi-Engine'!

!Board methodsFor: 'accessing'!

at: aPoint
	^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])
		ifTrue: [ data at: aPoint x * width + aPoint y ]
		ifFalse: [ #none ]
!

at: aPoint ifAbsent: aBlock
	^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])
		ifTrue: [ data at: aPoint x * width + aPoint y ifAbsent: aBlock ]
		ifFalse: [ #none ]
!

at: aPoint put: aValue
	^ ((aPoint x between: 1 and: width) and: [ aPoint y between: 1 and: height ])
		ifTrue: [ data at: aPoint x * width + aPoint y put: aValue ]
		ifFalse: [ #none ]
!

data: anObject
	data := anObject
!

height
	^ height
!

height: anObject
	height := anObject
!

width
	^ width
!

width: anObject
	width := anObject
! !

!Board methodsFor: 'filling'!

fillWith: anObject
	(1 to: height)
		do: [ :y |
			(1 to: width)
				do: [ :x |
					self at: x@y put: anObject ] ]
! !

!Board methodsFor: 'initialization'!

initialize
	super initialize.
	(width isNil or: [ height isNil ]) ifTrue: [ self error: 'Create instances of ', self class name, ' with #width:height: or #extent:' ].
	data := Array new
! !

!Board class methodsFor: 'instance creation'!

extent: aPoint
	^ self basicNew
		width: aPoint x;
		height: aPoint y;
		initialize;
		yourself
!

width: aWidth height: aHeight
	^ self basicNew
		width: aWidth;
		height: aHeight;
		initialize;
		yourself
! !

Object subclass: #Game
	instanceVariableNames: 'app state message scene'
	package: 'Pixi-Engine'!
!Game commentStamp!
I represent a game.

I am meant to be subclassed to create your own game. That subclass should be the Amber entry point.!

!Game methodsFor: 'action'!

end
	"Do nothing."
! !

!Game methodsFor: 'initialization'!

initialize
	self class instance: self.
	GameRegistry at: #rng put: Random new.
! !

!Game methodsFor: 'setup'!

loadResources
	self resources do: [ :each | Libs pixi loader add: each ].
	Libs pixi loader load: [ self setup ]
!

resources
	"Override this method to return an Array of resources to be loaded"
	self shouldBeImplemented
!

setup
	state := [ :delta | self update: delta ].
	app ticker add: [ :delta | state value: delta ]
! !

!Game methodsFor: 'starting'!

augmentPage
	app ifNil: [ app := Libs pixi Application
		newValue: #{
			'width' -> 512.
			'height' -> 512.
			'antialiasing' -> true.
			'transparent' -> false.
			'resolution' -> 1 } ].
	document body appendChild: app view.
	self loadResources
! !

Game class instanceVariableNames: 'instance'!

!Game class methodsFor: 'starting'!

instance
	^ instance
!

instance: anInstance
	^ instance := anInstance
!

start
	self new augmentPage
! !

Object subclass: #Key
	instanceVariableNames: 'code'
	package: 'Pixi-Engine'!
!Key commentStamp!
I represent a keyboard key. I delegate all my methods to the Keyboard singleton.!

!Key methodsFor: 'accessing'!

code
	^ code
!

code: aNumber
	code := aNumber
! !

!Key methodsFor: 'binding'!

onPress: aBlock
	Keyboard bind: self code to: aBlock
!

onRelease: aBlock
	Keyboard bindRelease: self code to: aBlock
! !

!Key methodsFor: 'testing'!

isDown
	^ Keyboard pressed: self code
!

isUp
	^ Keyboard notPressed: self code
! !

!Key class methodsFor: 'instance creation'!

code: aNumber onPress: aBlock onRelease: anotherBlock
	"Returns a fully configured Key instance"
	
	^ Keyboard code: aNumber onPress: aBlock onRelease: anotherBlock
! !

Object subclass: #Keyboard
	instanceVariableNames: 'keys blocks releaseBlocks'
	package: 'Pixi-Engine'!
!Keyboard commentStamp!
I represent the keyboard and manage bindings and their handling.!

!Keyboard methodsFor: 'accessing'!

blocks
	^ blocks
!

blocks: anObject
	blocks := anObject
!

keys
	^ keys
!

keys: anObject
	keys := anObject
!

releaseBlocks
	^ releaseBlocks
!

releaseBlocks: anObject
	releaseBlocks := anObject
! !

!Keyboard methodsFor: 'binding'!

bind: aKey to: aBlock
	blocks at: aKey put: aBlock
!

bindRelease: aKey to: aBlock
	releaseBlocks at: aKey put: aBlock
!

unbind: aKey
	blocks removeKey: aKey ifAbsent: []
! !

!Keyboard methodsFor: 'event handling'!

onPress: anEvent
	| code |
	
	code := anEvent keyCode.
	self press: code.
	blocks at: code ifPresent: [ :block | block value: anEvent. anEvent preventDefault ] ifAbsent: [].
!

onRelease: anEvent
	| code |
	
	code := anEvent keyCode.
	self release: code.
	releaseBlocks at: code ifPresent: [ :block | block value: anEvent ] ifAbsent: [].
	anEvent preventDefault
! !

!Keyboard methodsFor: 'initialization'!

initialize
	super initialize.
	keys := #{}.
	blocks := #{}.
	releaseBlocks := #{}.
	window addEventListener: 'keydown' func: [ :event | self onPress: event ] capture: false.
	window addEventListener: 'keyup' func: [ :event | self onRelease: event ] capture: false
! !

!Keyboard methodsFor: 'testing'!

notPressed: aKeyCode
	^ (self pressed: aKeyCode) not
!

press: aKeyCode
	keys at: aKeyCode put: true
!

pressed: aKeyCode
	^ keys at: aKeyCode ifAbsent: [ keys at: aKeyCode put: false ]
!

release: aKeyCode
	keys at: aKeyCode put: false
! !

Keyboard class instanceVariableNames: 'instance'!

!Keyboard class methodsFor: 'accessing'!

instance
	^ instance ifNil: [ instance := self new ]
! !

!Keyboard class methodsFor: 'binding'!

bind: aKey to: aBlock
	self instance blocks at: aKey put: aBlock
!

bindRelease: aKey to: aBlock
	self instance releaseBlocks at: aKey put: aBlock
!

unbind: aKey
	self instance blocks removeKey: aKey ifAbsent: []
! !

!Keyboard class methodsFor: 'factories'!

code: aNumber onPress: aBlock onRelease: anotherBlock
	"Returns a fully configured Key instance"
	
	^ Key new
		code: aNumber;
		onPress: aBlock;
		onRelease: anotherBlock;
		yourself
! !

Object subclass: #Level
	instanceVariableNames: ''
	package: 'Pixi-Engine'!

Object subclass: #Libs
	instanceVariableNames: ''
	package: 'Pixi-Engine'!
!Libs commentStamp!
My only purpose is to provide access to JavaScript libraries.!

!Libs class methodsFor: 'accessing'!

inspectClasses
	^ (Package named: 'Pixigame' ifAbsent: [ ^ false ]) classes
		inject: Dictionary new into: [ :classDict :class |
			classDict at: class put: (class methods
				inject: Dictionary new into: [ :methodDict :method |
					methodDict at: method selector put: method referencedClasses.
					methodDict ]).
			classDict ]
!

pixi
	^ PIXI
! !

Object subclass: #MapCarver
	instanceVariableNames: 'board region'
	package: 'Pixi-Engine'!

!MapCarver methodsFor: 'accessing'!

board: anObject
	board := anObject
!

directions
	^ {1 @ 0. -1 @ 0. 0 @ 1. 0 @ -1}
! !

!MapCarver methodsFor: 'carving'!

carve: aNumber towards: aDirection at: aPoint
	| newPosition |
	
	newPosition := aPoint.
	
	aNumber timesRepeat: [
		newPosition := newPosition + aDirection.
		board at: newPosition put: #floor ].
	
	^ newPosition
!

carveFromStack: aStack
	| top position dir |
			
	top := aStack last.
	position := top key.
	dir := top value remove: top value atRandom.

	top value ifEmpty: [ aStack removeLast ].
	(((board at: position + dir ifAbsent: [ #none ]) = #wall)
		and: [ self canCarveAt: position towards: dir ])
			ifTrue: [
				| newPosition newDirs |
				
				newPosition := self carve: 2 towards: dir at: position.
				newDirs := self directions remove: (dir * -1); yourself.
				aStack add: newPosition -> newDirs ]
!

carveRoom: aRoom
	(aRoom origin y to: aRoom corner y)
		do: [ :y |
			(aRoom origin x to: aRoom corner x)
				do: [ :x |
					board at: x@y put: #floor ] ]
! !

!MapCarver methodsFor: 'initialization'!

initialize
	super initialize.
	board ifNil: [ self error: 'Create instances of ', self class name, ' with #on:' ].
	region := 1.
	board fillWith: #wall
! !

!MapCarver methodsFor: 'printing'!

print
	| stream |
	
	stream := StringStream on: ''.
	
	(1 to: board height) do: [ :y |
		(1 to: board width) do: [ :x |
			stream
				nextPut: (((board at: x@y) = #wall)
					ifTrue: [ '█']
					ifFalse: [ ' ' ]) ].
		stream crlf ].
	console
		clear;
		log: stream contents
! !

!MapCarver methodsFor: 'testing'!

canCarveAt: aPoint
	^ ((board at: aPoint) = #wall)
		and: [ ((board at: aPoint + (0 @ 1)) = #wall)
			and: [ ((board at: aPoint + (0 @ -1)) = #wall)
				and: [ ((board at: aPoint + (1 @ 0)) = #wall)
					and: [ ((board at: aPoint + (-1 @ 0)) = #wall) ] ] ] ]
!

canCarveAt: aPoint towards: aDirection
	^ ((board at: aPoint + aDirection ifAbsent: [ #none ]) = #wall)
		and: [ (board at: aPoint + (aDirection * 2) ifAbsent: [ #none ]) = #wall ]
! !

!MapCarver class methodsFor: 'instance creation'!

on: aBoard
	^ self basicNew
		board: aBoard;
		initialize;
		yourself
! !

Object subclass: #MapGenerator
	instanceVariableNames: 'board carver'
	package: 'Pixi-Engine'!

!MapGenerator methodsFor: 'accessing'!

directions
	^ {1 @ 0. -1 @ 0. 0 @ 1. 0 @ -1}
! !

!MapGenerator methodsFor: 'generating'!

generate
	self generateRooms generatePassages
!

generatePassageAt: aPoint
	| stack |
	
	stack := Array with: aPoint -> self directions.
	board at: aPoint put: #floor.

	[ stack notEmpty ] whileTrue: [ carver carveFromStack: stack ]
!

generatePassages
	(2 to: board height by: 2)
		do: [ : y |
			(2 to: board width by: 2)
				do: [ :x |
					(carver canCarveAt: x@y)
						ifTrue: [ self generatePassageAt: x@y ] ] ]
!

generateRoom
	| w h |
	
	w := (board width / 2) floor.
	h := (board height / 2) floor.

	^ (w atRandom * 2) @ (h atRandom * 2)
		extent: (3 atRandom * 2 + 2) @ (3 atRandom * 2 + 2)
!

generateRooms
	| inside rooms |
	
	inside := 2@2 corner: (board width @ board height) - (1@1).
	rooms := Array new.

	200 timesRepeat: [
		| room |
		
		room := self generateRoom.
		rooms
			detect: [ :each | each overlapsBorders: room ]
			ifNone: [
				(inside containsRect: room)
					ifTrue: [
						carver carveRoom: room.
						rooms add: room ] ] ]
! !

!MapGenerator methodsFor: 'initialization'!

initialize
	super initialize.
	board := (Board width: 65 height: 65)
		fillWith: #wall;
		yourself.
	carver := MapCarver on: board
! !

!MapGenerator methodsFor: 'printing'!

print
	| stream |
	
	stream := StringStream on: ''.
	
	(1 to: board height) do: [ :y |
		(1 to: board width) do: [ :x |
			stream
				nextPut: (((board at: x@y) = #wall)
					ifTrue: [ '█']
					ifFalse: [ ' ' ]) ].
		stream crlf ].
	console
		clear;
		log: stream contents
! !

Object subclass: #Registry
	instanceVariableNames: 'dictionary'
	package: 'Pixi-Engine'!
!Registry commentStamp!
I am meant to be subclassed.

I act as an easily accessible dictionary. Other classes can use my subclasses to store Associations, usually of Symbol -> Object.

Actor and Scene subclasses both have a registry method that should be overridden to return one of my subclasses.!

!Registry methodsFor: 'accessing'!

dictionary
	^ dictionary ifNil: [ dictionary := Dictionary new ]
!

dictionary: aDictionary
	dictionary := aDictionary
! !

Registry class instanceVariableNames: 'instance'!

!Registry class methodsFor: 'accessing'!

at: aKey
	^ self instance dictionary at: aKey
!

at: aKey ifAbsent: aBlock
	^ self instance dictionary at: aKey ifAbsent: aBlock
!

at: aKey ifAbsentPut: anObject
	^ self instance dictionary at: aKey ifAbsentPut: anObject
!

at: aKey ifPresent: aBlock
	^ self instance dictionary at: aKey ifPresent: aBlock
!

at: aKey ifPresent: presentBlock ifAbsent: absentBlock
	^ self instance dictionary at: aKey ifPresent: presentBlock ifAbsent: absentBlock
!

at: aKey put: aValue
	^ self instance dictionary at: aKey put: aValue
!

dictionary
	^ self instance dictionary
!

dictionary: anObject
	^ self instance dictionary: anObject
!

instance
	^ instance ifNil: [ instance := self new ]
! !

Object subclass: #Scene
	instanceVariableNames: 'stage screen actors'
	package: 'Pixi-Engine'!
!Scene commentStamp!
I represent a scene in the game (a level, menu, whatever).

I must be subclassed, and my registry configured, if it is to be used.!

!Scene methodsFor: 'accessing'!

actors
	^ actors ifNil: [ actors := Array new ]
!

height
	^ screen height
!

screen
	^ screen
!

screen: anObject
	screen := anObject
!

stage
	^ stage
!

stage: anObject
	stage := anObject
!

visible: aBoolean
	screen visible: aBoolean
!

width
	^ screen width
! !

!Scene methodsFor: 'game'!

addChild: anActor
	self actors add: anActor.
	screen addChild: anActor sprite
! !

!Scene methodsFor: 'initialization'!

initialize
	super initialize.
	screen := Libs pixi Container new
! !

!Scene methodsFor: 'setup'!

setup
	"please override"
! !

!Scene methodsFor: 'switching'!

switchFrom: aScene
	aScene exit.
	self enter
!

switchTo: aScene
	aScene switchFrom: self
! !

!Scene methodsFor: 'updating'!

enter
	"please override"
!

exit
	"please override"
!

update
	"please extend"
	actors do: [ :each | each update ]
! !

!Scene class methodsFor: 'accessing'!

at: aKey
	^ self registry at: aKey
!

at: aKey put: aValue
	^ self registry at: aKey put: aValue
!

registry
	self shouldBeImplemented
! !

!Scene class methodsFor: 'instance creation'!

on: aStage
	| inst |
	
	inst := self new
		stage: aStage;
		yourself.
	aStage addChild: inst screen.
	^ inst
! !

Object subclass: #Stage
	instanceVariableNames: 'tiles'
	package: 'Pixi-Engine'!

!Stage methodsFor: 'as yet unclassified'!

at: aKey
	^ tiles at: aKey
!

at: aKey put: aValue
	^ tiles at: aKey put: aValue
!

bounds
	"for lack of a better implementation..."
	
	^ 0@0 extent: 37@37
!

initialize
	super initialize.
	tiles := Dictionary new
! !

Stage subclass: #DungeonMap
	instanceVariableNames: 'currentRegion regions'
	package: 'Pixi-Engine'!

!DungeonMap methodsFor: 'building'!

addJunction: aPoint
	self at: aPoint put: self generateJunction
!

countExitsAt: aPoint
	^ (self directions select: [ :dir | (self at: aPoint + dir) ~= #wall ]) size
!

directions
	^ {0@-1. 0@1. -1@0. 1@0}
!

generateJunction
	^ 4 atRandom = 1
		ifTrue: [ 3 atRandom = 1
			ifTrue: [ #openDoor ]
			ifFalse: [ #floor ] ]
		ifFalse: [ #closedDoor ]
!

isDeadEnd: aPoint
	^ (self at: aPoint) ~= #wall and: [ (self countExitsAt: aPoint) = 1 ]
!

removeDeadEnds
	| done |
	
	done isNil
		whileTrue: [
			done := true.
			self bounds
				pointsDo: [ :point |
					(self isDeadEnd: point)
						ifTrue: [
							done := nil.
							self at: point put: #wall ] ] ]
! !

!DungeonMap methodsFor: 'carving'!

canCarveFrom: aPoint going: aDirection
	^ (self bounds containsPoint: aDirection * 3 + aPoint)
		ifTrue: [ (self at: aDirection * 2 + aPoint) = #wall ]
		ifFalse: [ false ]
!

carve: aPoint
	self carve: aPoint tile: #floor
!

carve: aPoint tile: aTileType
	tiles at: aPoint put: aTileType.
	regions at: aPoint put: currentRegion
! !

!DungeonMap methodsFor: 'initialization'!

initialize
	super initialize.
	currentRegion := -1
! !

!DungeonMap methodsFor: 'regions'!

connectRegions
	| connectorRegions connectors merged openRegions |
	
	connectorRegions := Dictionary new.
	
	self bounds
		pointsDo: [ :point |
			| regs |
			
			( (self hasWallAt: point) and: [ regs := self regionsAt: point. regs size > 1 ] )
				ifTrue: [ connectorRegions at: point put: regs ] ].
	connectors := connectorRegions keys.
	
	merged := Dictionary new.
	openRegions := Set new.
	(1 to: currentRegion)
		do: [ :each |
		merged at: each put: each.
		openRegions add: each ].
!

countRegionsAt: aPoint
	| rs |
	
	rs := Set new.
	self directions do: [ :dir |
		(regions at: aPoint + dir)
			ifNotNil: [ :region | rs add: region ] ].
	^ rs
!

regionsAt: aPoint
	^ (self directions
		select: [ :dir |
			(regions at: aPoint + dir) isNotNil ] ) asSet
!

startRegion
	currentRegion := currentRegion + 1
! !

!DungeonMap methodsFor: 'testing'!

hasWallAt: aPoint
	^ (self at: aPoint) = #wall
! !

!Rectangle methodsFor: '*Pixi-Engine'!

contain: aSprite
	| collision |
	
	aSprite x < self origin x ifTrue: [ aSprite x: self origin x. collision := #left ].
	aSprite y < self origin y ifTrue: [ aSprite y: self origin y. collision := #top ].
	aSprite x + aSprite width > self extent x
		ifTrue: [ aSprite x: self extent x - aSprite width. collision := #right ].
	aSprite y + aSprite height > self extent y
		ifTrue: [ aSprite y: self extent y - aSprite height. collision := #bottom ].
	^ collision
!

doesntOverlap: aRectangle
	^ aRectangle origin x > self corner x or: [
		aRectangle corner x < self origin x or: [
			aRectangle origin y > self corner y or: [
				aRectangle corner y < self origin y ] ] ]
!

doesntOverlapBorders: aRectangle
	^ (aRectangle origin x - 1) > self corner x or: [
		(aRectangle corner x + 1) < self origin x or: [
			(aRectangle origin y - 1) > self corner y or: [
				(aRectangle corner y + 1 ) < self origin y ] ] ]
!

overlaps: aRectangle
	^ (self doesntOverlap: aRectangle) not
!

overlapsBorders: aRectangle
	^ (self doesntOverlapBorders: aRectangle) not
!

pointsDo: aBlock
	(origin x to: corner x)
		do: [ :x | (origin y to: corner y)
				do: [ :y | aBlock value: x@y ] ]
! !

