// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 //RESCUE MISSION
this.moveDown(); 
this.moveDown(); //move down x2
this.moveRight(); //move right 1x
 
this.moveUp(); 
this.moveUp(); //move up 1x
this.moveRight();
this.moveRight(); //move right x2
this.moveDown();
this.moveDown(); //move down x2
this.attackNearbyEnemy(); //ATTACK!

//GRAB THE MUSHROOM
this.moveUp(); //move up x1
this.moveRight(); //move right x1
this.moveLeft(); 
this.moveLeft(); //move left x2
this.moveUp(); //move up x1
this.attackNearbyEnemy(); //ATTACK!

//DRINK ME
this.moveRight(); //move right x1
this.attackNearbyEnemy(); //ATTACK!
this.moveRight(); //move right x1
this.moveDown();//move down x1
this.moveUp(); //move up x1
this.moveRight(); //move right x1
this.attackNearbyEnemy(); //ATTACK!

//TAUNT THE GUARDS
this.moveRight(); //move right x1
this.bustDownDoor(); //bust door
this.moveRight(); //move right x1
this.say("Hey there!"); //bother guard
this.moveLeft(); 
this.moveLeft();//move left x2
this.say("Attack!"); //make other guy shoot enemy
this.moveRight(); //move right x1
this.say("Follow me."); //make the ogre follow me
this.moveRight();
this.moveRight(); //move right x 2
this.moveUp(); //move up x1
this.moveRight(); //move right x1
this.say("Attack!") //have ogre shoot enemy
this.attackNearbyEnemy();
this.attackNearbyEnemy();
this.attackNearbyEnemy(); //attack enemy x3
this.say("Follow me."); //make friend follow me
this.moveRight();
this.moveRight();
this.moveRight();
this.moveRight();
this.moveRight(); //escape to the right x5

//IT'S A TRAP
this.moveDown(); 
this.moveDown(); //move down x2
this.say("You smell") //taunt the ogre
this.moveUp(); //move up x1
this.moveRight(); //move right x1

//BREAK THE PRISON

//TAUNT
this.say("Hey!"); //bother ogre
this.moveUp(); //move upx1
this.say("YO!");
this.say("YOU'RE HEINOUS!");
this.say("UR MOM'S CHEST HAIR"); //bother ogre 3x
this.moveDown(); //move down x1

//COWARDLY TAUNT
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // ^^^walk to safe spot
this.say("I can lure them in here."); //decision to lure ogres
{x: 50, y: 42}
this.moveXY(64, 34); //^^walk closer to ogres
this.say("PING!!!") //lure ogres to danger spot
moveXY(71, 14){x: 59, y: 32}{x: 57, y: 33}{x: 49, y: 20}{x: 60, y: 35}{x: 61, y: 35}{x: 55, y: 35}{x: 52, y: 29}{x: 64, y: 34} //walk back to safety

//COMMANDING FOLLOWERS
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63); //^^^walk over to troops
this.say("Hail, friends!"); //get troops' attentions
this.say("Follow me!"); //lure troops to help me attack
this.moveXY(59, 40) //lead troops into battle
this.say("Attack!");//command troops to attack enemies

this.moveXY(17, 43); //lead myself into safety as troops attack



//MOBILE ARTILLERY
this.moveXY(30, 26);  // Move into range to shoot ogres
this.attackXY(46, 5);  // In range, so attack them now
this.moveXY(52, 40); //Move in range to get the other 2 groups of ogres
this.attackXY(70, 58); //attack ogres on the right
this.attackXY(57, 49); //fire once more to get large orge
this.attackXY(49, 60); //attack orgrs on the left
this.attackXY(50, 53); //fire once more to get large orge
this.moveXY(30, 26); //place cannon back in starting position

// end hiding script from old browsers -->
 
 
 
 
 
 
 
// Reflection:
// This was a pretty awesome exercise! I loved seeing real code in action. I 
// enjoyed the game layout. I feel I better understand how code works and the
// order that it executes in.