Smalltalk createPackage: 'Pixi-Engine'!
Object subclass: #Actor
	instanceVariableNames: 'sprite vx vy'
	package: 'Pixi-Engine'!
!Actor commentStamp!
I represent an entity on the game world capable of acting and interacting.

I proxy most of the messages for my Sprite.

I must be subclassed, and my registry configured, if it is to be used.!

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

Object subclass: #Registry
	instanceVariableNames: 'dictionary'
	package: 'Pixi-Engine'!
!Registry commentStamp!
I proxy my singleton, which itself proxies a dictionary to provide easy access to game elements.

I am meant to be subclassed, and my singletons usually configured to be used by subclasses of other classes providing registry facilities, like Actor or Scene.!

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

