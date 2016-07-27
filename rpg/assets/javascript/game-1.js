$( document ).ready(function() {


// global variables:



// Define & display the contestants

	var kitty = {
		name: "Killer Kitty",
		hp: 150,
		image: "<img src='http://emojipedia-us.s3.amazonaws.com/cache/57/74/5774a0971f030f268edca0d07cf56eea.png'>",
		attack: function(yourEnemy) {
			yourEnemy.hp = yourEnemy.hp - 15
		}
	}

      $('#Cat').append(kitty.image);

	var doggie = {
		name: "Perilous Pup",
		hp: 130,
		image: "<img src='http://emojipedia-us.s3.amazonaws.com/cache/c2/91/c2918417595a77f6e2257eb6ea996a2d.png'>",
		attack: function(yourEnemy) {
			yourEnemy.hp = yourEnemy.hp - 20
		}
	}

      $('#Dog').append(doggie.image);

	var buggie = {
		name: "Beware Bug",
		hp: 90,
		image: "<img src='http://emojipedia-us.s3.amazonaws.com/cache/f4/51/f4518706eded9d79fd4ccaac1980a581.png'>",
		attack: function(yourEnemy) {
			yourEnemy.hp = yourEnemy.hp - 35
		}
	}

      $('#Bug').append(buggie.image);

	var dolphie = {
		name: "Danger Dolphin",
		hp: 150,
		image: "<img src='http://emojipedia-us.s3.amazonaws.com/cache/f7/69/f76908c6f18eb3aef296e68d8d377bb8.png'>",
		attack: function(yourEnemy) {
			yourEnemy.hp = yourEnemy.hp - 10
		}
	}

      $('#Dolphin').append(dolphie.image);

$('h3').html("<strong>Click</strong> on the character you would like to play as! Then, <strong>drag</strong> an enemy emoji to the arena!")

// Select the main character



	$('.image').on('click', function() {

		var yourCharacter = this.id;
		$('#your-character').addClass("Main")
		$('button').html("Attack!")
		console.log(yourCharacter);

		if (yourCharacter == "Cat") {
			$('#your-character').html(kitty.image);
			$('#your-character').append(kitty.hp + '&nbsp;' + kitty.name);
			$(this).hide();
			$(kitty.image).unbind("click");
			return yourCharacter;
			}

		else if (yourCharacter == "Dog") {
			$('#your-character').html(doggie.image);
			$('#your-character').append(doggie.hp + '&nbsp;' + doggie.name);

			$(this).hide();
			$(doggie.image).unbind("click");
					return yourCharacter;
		}

		else if (yourCharacter == "Dolphin") {
			$('#your-character').html(dolphie.image);
			$('#your-character').append(dolphie.hp + '&nbsp;' + dolphie.name);
			$(this).hide();
			$(dolphie.image).unbind("click");
					return yourCharacter;
		}

		else if (yourCharacter == "Bug") {
			$('#your-character').html(buggie.image);
			$('#your-character').append(buggie.hp + '&nbsp;' + buggie.name);
			$(this).hide();
			$(buggie.image).unbind("click");
					return yourCharacter;
		}
		console.log(yourCharacter);

	});

// Select the enemy to battle
	$('.image').on('drag', function() {
		
		var yourEnemy = this.id;
		$('#your-enemy').addClass("Enemy")


		console.log(yourEnemy);

		if (yourEnemy =="Bug") {
			$('#your-enemy').html(buggie.image);
			$('#your-enemy').append(buggie.hp + '&nbsp;' + buggie.name);
			$(this).hide();
			$(buggie.image).unbind("drag");
			return yourEnemy;
			};

		if (yourEnemy =="Cat") {
			$('#your-enemy').html(kitty.image);
			$('#your-enemy').append(kitty.hp + '&nbsp;' + kitty.name);
			$(this).hide();
			$(kitty.image).unbind("drag");
			return yourEnemy;
			};

		if (yourEnemy =="Dolphin") {
			$('#your-enemy').html(dolphie.image);
			$('#your-enemy').append(dolphie.hp + '&nbsp;' + dolphie.name);
			$(this).hide();
			$(dolphie.image).unbind("drag");
			return yourEnemy;
			};

		if (yourEnemy =="Dog") {
			$('#your-enemy').html(doggie.image);
			$('#your-enemy').append(dolphie.hp + '&nbsp;' + dolphie.name);
			$(this).hide();
			$(dolphie.image).unbind("drag");
			return yourEnemy;
			};
	});

    $("#main-character-btn").click(function() {

       function attack(kitty){
       console.log(doggie.hp);
       console.log(yourEnemy);
   		};
    });

    $("#enemy-character-btn").click(function() {

        alert("goodbye");

    });

});
			












	

	


	