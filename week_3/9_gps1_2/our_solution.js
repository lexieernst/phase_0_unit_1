var Client = function(name, age, quote) {
	return console.log('name: '+ name + ' age: ' + age + ' quote: ' + quote)
};

Client("Adam Sandler", 50, "Hi I'm Adam!")

		funtction Client(){
    		this.name = name;
    		this.age = age;
    		this.quote = quote;
		};

// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Alexis Ernst
//  2.Matthieu Gavaudan


// 0. "YOU SIGNED... WHO?!"

var alexisActor = {
    name:"Britney Spears",
    age:33,
    quote:"Oops I did it again"
}
var matthieuActor = {
    name:"Bruce Willis",
    age:59,
    quote:"Yipikay Motherfuckers"
}

// 1. "Here they Come!"
var firstActor = 
{
name: "Adam Sandler",
age: 47,
quote: "That's your home! Are you too good for your home?!"
}
var secondActor = 
{
    
name: "Kristen Bell",
age: 33,
quote: "Do you wanna build a snowman?"
}
var thirdActor = {
name: "Jim Carrey",
age: 52,
quote: "...So you're telling me there's a chance? YEAH!"

}

// 2. "TIME IS MONEY!"

function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
};

   

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"

client_array = [alexisActor, matthieuActor, firstActor, secondActor, thirdActor]

for (x in client_array) {
    alert(client_array[x].name)
    alert(client_array[x].age)
    alert(client_array[x].quote)
}

// for (i = 0; i < client_array.length; i++)



// 4. "But wait, there's more!"



// 5.  ** BONUS **


//  6.  Your Reflection: