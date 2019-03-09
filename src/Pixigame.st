Smalltalk createPackage: 'Pixigame'!
(Smalltalk packageAt: 'Pixigame' ifAbsent: [ self error: 'Package not created: Pixigame' ]) imports: {'PIXI' -> 'pixi'. './Pixi-Engine'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Actor subclass: #GameActor
	instanceVariableNames: ''
	package: 'Pixigame'!

!GameActor methodsFor: 'accessing'!

game
	^ Pixigame
! !

!GameActor class methodsFor: 'accessing'!

registry
	^ GameRegistry
! !

GameActor subclass: #Door
	instanceVariableNames: ''
	package: 'Pixigame'!

!Door methodsFor: 'initialization'!

initialize
	super initialize.
	self
		sprite: (Libs pixi Sprite newValue: (Assets at: 'door.png'));
		x: 32
! !

GameActor subclass: #Dungeon
	instanceVariableNames: ''
	package: 'Pixigame'!

!Dungeon methodsFor: 'game'!

contain: aSprite
	| collision field |
	
	field := #{#x -> 28. #y -> 10. #width -> 488. #height -> 480}.
	
	aSprite x < (field at: #x) ifTrue: [ aSprite x: (field at: #x). collision := #left ].
	aSprite y < (field at: #y) ifTrue: [ aSprite y: (field at: #y). collision := #top ].
	aSprite x + aSprite width > (field at: #width)
		ifTrue: [ aSprite x: (field at: #width) - aSprite width. collision := #right ].
	aSprite y + aSprite height > (field at: #height)
		ifTrue: [ aSprite y: (field at: #height) - aSprite height. collision := #bottom ].
	collision ifNotNil: [ :dir | aSprite onContain: dir ].
	^ collision
! !

!Dungeon methodsFor: 'initialization'!

initialize
	super initialize.
	self sprite: (Libs pixi Sprite newValue: (Assets at: 'dungeon.png'))
! !

GameActor subclass: #Explorer
	instanceVariableNames: 'health'
	package: 'Pixigame'!

!Explorer methodsFor: 'accessing'!

health
	^ health
!

health: anObject
	health := anObject
! !

!Explorer methodsFor: 'initialization'!

initialize
	super initialize.
	self
		sprite: (Libs pixi Sprite newValue: (Assets at: 'explorer.png'));
		health: 128;
		x: 68;
		y: ((self class at: #scene) height / 2) - (self height / 2);
		vx: 0;
		vy: 0;
		setupKeyboard
!

setupKeyboard
	Keyboard code: 37
		onPress: [ self vx: -5; vy: 0 ]
		onRelease: [ self vy isZero ifTrue: [ self vx: 0 ] ].

	Keyboard code: 39
		onPress: [ self vx: 5; vy: 0 ]
		onRelease: [ self vy isZero ifTrue: [ self vx: 0 ] ].
		
	Keyboard code: 38
		onPress: [ self vy: -5; vx: 0 ]
		onRelease: [ self vx isZero ifTrue: [ self vy: 0 ] ].
		
	Keyboard code: 40
		onPress: [ self vy: 5; vx: 0 ]
		onRelease: [ self vx isZero ifTrue: [ self vy: 0 ] ]
! !

!Explorer methodsFor: 'updating'!

blink
	self alpha: 0.5.
	"healthBar outer width: healthBar outer width - 1"
!

dontBlink
	self alpha: 1
!

move
	self
		x: self x + self vx;
		y: self y + self vy.
!

takeDamage
	health := health - 1.
	self blink.
	(self class at: #healthBar) health: health
!

update
	self move.
	(self class at: #dungeon) contain: self.
	(self health < 0) ifTrue: [ self game instance lose ]
! !

GameActor subclass: #HealthBar
	instanceVariableNames: ''
	package: 'Pixigame'!

!HealthBar methodsFor: 'initialization'!

initialize
	| bar inner outer |
	
	sprite := Libs pixi Container new.
	sprite position x: 338; y: 4.
	
	inner := Libs pixi Graphics new.
	inner beginFill: 16r0;
		  drawRect: 0 y: 0 width: 128 height: 8;
		  endFill.
	sprite addChild: inner.
	
	outer := Libs pixi Graphics new.
	outer beginFill: 16rFF3300;
		  drawRect: 0 y: 0 width: 128 height: 8;
		  endFill.
	sprite addChild: outer.
	
	sprite at: #outer put: outer
! !

!HealthBar methodsFor: 'updating'!

health: aNumber
	self sprite outer width: aNumber
! !

GameActor subclass: #Slime
	instanceVariableNames: ''
	package: 'Pixigame'!

!Slime methodsFor: 'game'!

move
	self x: self x + self vx.
	self y: self y + self vy
!

onContain: aDirection
	({#top. #bottom} includes: aDirection)
		ifTrue: [ self vy: self vy negated ].
	({#left. #right} includes: aDirection)
		ifTrue: [ self vx: self vx negated ]
!

update
	self move.
	(self class at: #dungeon) contain: self
! !

GameActor subclass: #Treasure
	instanceVariableNames: ''
	package: 'Pixigame'!

!Treasure methodsFor: 'game'!

follow: anActor
	self
		x: anActor x + 8;
		y: anActor y + 8
!

update
	| explorer |
	
	explorer := self class at: #explorer.
	(explorer hits: self) ifTrue: [ self follow: explorer ].
	(self hits: (self class at: #door)) ifTrue: [ self game instance win ]
! !

!Treasure methodsFor: 'initialization'!

initialize
	| scene |
	
	super initialize.
	scene := self class at: #scene.
	self
		sprite: (Libs pixi Sprite newValue: (Assets at: 'treasure.png'));
		x: scene width - self width - 48;
		y: (scene height / 2) - (self height / 2);
		vx: 0;
		vy: 0
! !

Registry subclass: #GameRegistry
	instanceVariableNames: ''
	package: 'Pixigame'!
!GameRegistry commentStamp!
I am the central Registry for the game.

GameActor and the GameScenes all use me as a registry.!

GameRegistry subclass: #Assets
	instanceVariableNames: ''
	package: 'Pixigame'!
!Assets commentStamp!
I provide easy access to the textures.!

Assets class instanceVariableNames: 'instance'!

Scene subclass: #GameScene
	instanceVariableNames: ''
	package: 'Pixigame'!

!GameScene class methodsFor: 'accessing'!

registry
	^ GameRegistry
! !

GameScene subclass: #GameOverScene
	instanceVariableNames: ''
	package: 'Pixigame'!

!GameOverScene methodsFor: 'as yet unclassified'!

enter
	| style message |
	
	style := Libs pixi TextStyle newValue: #{
		'fontFamily' -> 'Futura'.
		'fontSize' -> 64.
		'fill' -> 'white' }.
	
	self visible: true.
	
	message := Libs pixi Text newValue: (self class at:#endMessage) value: style.
	message x: 120; y: 120.
	"message x: 120; y: self screen height / 2 - 32."
		
	self screen addChild: message.
!

setup
	"	message x: 120; y: self stage height / 2 - 32."
! !

GameScene subclass: #PlayScene
	instanceVariableNames: ''
	package: 'Pixigame'!

!PlayScene methodsFor: 'setup'!

exit
	self visible: false
!

setup
	self
		addChild: (Dungeon new registerAs: #dungeon; yourself);
		addChild: (Door new registerAs: #door; yourself);
		addChild: (Explorer new registerAs: #explorer; yourself);
		addChild: (Treasure new registerAs: #treasure; yourself);
		addChild: (HealthBar new registerAs: #healthBar; yourself);
		setupBlobs
!

setupBlobs
	| spacing xOffset speed direction vertical blobTexture blobs |
	
	spacing := 24.
	xOffset := 128.
	speed := 2.
	direction := 1. "down"
	vertical := true.
	blobTexture := (Assets at: 'blob.png').
	
	blobs := (1 to: 12)
		collect: [ :i |
			vertical := vertical not.
			direction := direction negated.
			(Slime for: blobTexture)
				x: spacing * i + xOffset;
				y: (self class at: #rng) next * ((GameActor at: #dungeon) height - blobTexture height);
				vx: (vertical ifTrue: [ 0 ] ifFalse:[ speed * direction ]);
				vy: (vertical ifTrue: [ speed * direction ] ifFalse:[ 0 ]);
				addTo: self;
				yourself ].
	GameActor at: #blobs put: blobs
! !

!PlayScene methodsFor: 'updating'!

update
	| explorerHit explorer |
	
	explorer := GameActor at: #explorer.
	explorer update.
	
	explorerHit := false.
	(GameActor at: #blobs) do: [ :each |
		each update.
		explorerHit or: [ explorerHit := explorer hits: each ] ].
		
	explorerHit
		ifTrue: [ explorer takeDamage ]
		ifFalse: [ explorer dontBlink ].
	
	(GameActor at: #treasure) update
! !

Game subclass: #Pixigame
	instanceVariableNames: ''
	package: 'Pixigame'!
!Pixigame commentStamp!
I am the Amber application.

I also happen to subclass Game.!

!Pixigame methodsFor: 'action'!

lose
	GameRegistry at: #endMessage put: 'You lost!!'.
	(GameActor at: #scene) switchTo: (GameActor at: #endScene).
	state := [ self end ]
!

update: aDelta
	(GameRegistry at: #scene) update
!

win
	GameRegistry at: #endMessage put: 'You won!!'.
	(GameActor at: #scene) switchTo: (GameActor at: #endScene).
	state := [ self end ]
! !

!Pixigame methodsFor: 'initialization'!

initialize
	super initialize.
	app := Libs pixi Application newValue: #{
		'width' -> 512.
		'height' -> 512.
		'antialiasing' -> true.
		'transparent' -> false.
		'resolution' -> 1 }
! !

!Pixigame methodsFor: 'setup'!

resources
	^ {'images/treasureHunter.json'. 'images/cat.png'}
!

setup
	super setup.
	Assets instance dictionary: (Libs pixi loader resources at: 'images/treasureHunter.json') textures.
	self setupScenes
!

setupScenes
	| sc endScene style |
	
	sc := PlayScene on: app stage.
	GameActor at: #scene put: sc.
	sc setup.

	endScene := GameOverScene on: app stage.
	GameActor at: #endScene put: endScene.
	endScene setup
! !

!Pixigame class methodsFor: 'starting'!

unusedProtection
	"this method is here in case the compilation breaks and destroys the source code of the last class-side method"
	self shouldNotImplement
! !

