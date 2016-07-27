  $( document ).ready(function() {


// define the points 
var healthPoints = [70, 40, 100, 90];
var attackPoints =[6, 10, 7, 3];
var yourChar;
var yourEnemy;
// show my contestants:

   // cat
      var imageCat = $('<img>');

      imageCat.attr('data-num', healthPoints[0]);

      imageCat.attr('src', 'http://emojipedia-us.s3.amazonaws.com/cache/57/74/5774a0971f030f268edca0d07cf56eea.png');

      imageCat.attr('alt', 'cat');

      $('#Cat').append(imageCat);
     

   // dog

      var imageDog = $('<img>');

      imageDog.attr('data-num', healthPoints[1]);

      imageDog.attr('src', 'http://emojipedia-us.s3.amazonaws.com/cache/c2/91/c2918417595a77f6e2257eb6ea996a2d.png');

      imageDog.attr('alt', 'dog');

      $('#Dog').append(imageDog);

   // bug

      var imageBug = $('<img>');

      imageBug.attr('data-num', healthPoints[2]);

      imageBug.attr('src', 'http://emojipedia-us.s3.amazonaws.com/cache/f4/51/f4518706eded9d79fd4ccaac1980a581.png');

      imageBug.attr('alt', 'bug');

      $('#Bug').append(imageBug);

   // dolphin

      var imageDolphin = $('<img>');

      imageDolphin.attr('data-num', healthPoints[3]);

      imageDolphin.attr('src', 'http://emojipedia-us.s3.amazonaws.com/cache/f7/69/f76908c6f18eb3aef296e68d8d377bb8.png');

      imageDolphin.attr('alt', 'dolphin');

      $('#Dolphin').append(imageDolphin);


// have user select their character

$('.image').on('click', function () {
	var yourChar = this.id;
	console.log(yourChar);	

   if (yourChar == "Cat" )	{
      // $(this).hide()
      $('#your-character').html(imageCat);
   }

   else if (yourChar == "Dog" ) {
      // $(this).hide()
      $('#your-character').html(imageDog);

   }

   else if (yourChar == "Bug" ) {
      // $(this).hide()
      $('#your-character').html(imageBug);
   }

   else if (yourChar == "Dolphin" ) {
      // $(this).hide()
      $('#your-character').html(imageDolphin);
   }


      });
console.log("character: " + yourChar);
console.log("enemy: " + yourEnemy);

 



 // have user select their enemy 
$('.image').on('click', function () {
   var yourEnemy = this.id;
   console.log(yourEnemy);  

   if (yourEnemy == "Cat" ) {
         // $(this).hide()
         $('#your-enemy').html(imageCat);
      }

      else if (yourEnemy == "Dog" ) {
         // $(this).hide()
         $('#your-enemy').html(imageDog);

      }

      else if (yourEnemy == "Bug" ) {
         // $(this).hide()
         $('#your-enemy').html(imageBug);
      }

      else if (yourEnemy == "Dolphin" ) {
         // $(this).hide()
         $('#your-enemy').html(imageDolphin);
      }

   });


 });

