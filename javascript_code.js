
alert("Just a glimpse of the red and white Target logo rains euphoria over you. Pulling into the parking lot of the holy land and you're certain you can see angels singing. Because you have an addiction you've decided to limit yourself to only spending $20 during this trip to Target. It seems impossible but you are strong and have been practicing self control. You start with $20 and 10 life points. Everytime you purchase something you lose money but can either gain or lose life points. The goal is to have earned the most life points with your $20. Poor shopping decisions will cost you life points and good shopping decisions will give you life points. If you run out of life points before you've spent your $20 you immediately lose.");


var dollars = 5;
var lifePoints = 10;



//Loop through array

// alert("$1 section bonanza because 'Muerica! You can't loose any lifepoints during this bonanza but choose wisely because good shopping decisions will give you more life points. Every item will cost you $1");

// var oneDollarItems = ["Glass Jar", "Gel Pens", "Thank You Cards", "Burlap Table Runner", "Felt Animal Mask", "Children's Puzzle"];

// for(i = 0; i < oneDollarItems.length; i++) {
//   var bonanzaAnswer = prompt("Would you like to buy the " + oneDollarItems[i]).toLowerCase();
//     if (bonanzaAnswer === "yes") {
//       lifePoints += 2;
//     }else if (bonanzaAnswer === "no"){
//       lifePoints += 0;
//     }else{
//       alert("You did not reply with a \"Yes\" or \"No\". You don't deserve the amazing $1 item. Try again.")
//     }
// }

// alert("You have " + lifePoints + " lifepoints after that bonanza!");













var shoppingDecision = function(prompt3, alert1, alert2, lifePointsDelta, dollarsDelta, lifePointsNo){
    do {
      var answer3 = prompt(prompt3);
      answer3.toLowerCase();
        if(answer3 === "yes") {
        alert(alert1);
        (lifePoints) + (lifePointsDelta);
        (dollars) + (dollarsDelta);
      } else if (answer3 === "no") {
        alert(alert2);
        (lifePointsNo) + (lifePoints); 
       }else{
        alert("Please answer Yes or No");
       } 
    } while (answer3 !== "yes" && answer3 !== "no");

  if(lifePoints <= 0 || dollars <= 0){
    alert("You're all out of money or lifepoints");
    exit();
    //stops running loop now and game ends.
  }else{
    alert("You have " + lifePoints + " lifepoints and $" + dollars + " left");
  };
}









shoppingDecision(
  "You see the most adorable Halloween themed handtowels on sale for $4. Do you buy? Yes or No?",
  "You loose 3 life points because themed handtowels...ain\'t nobdy got time for dat!",
  "Gain 1 life point because you're not distracted by pointless things",
  -3,
  -4,
  1
  );






shoppingDecision(
  "You've been looking for the perfect grey cable knit sweater but they were all out of your size. As you approach the checkout you see that the exact sweater you're dying to have is sitting in the cart of a woman who is distracted and has her back turned. Do you grab the sweater? Yes or No?",
  "You gain 5 life points because your a bamf but lose $5 because it still costs to be cute",
  "Lose 1 lifepoint because you're probably never going to get anywhere in life",
  5,
  -5,
  -1
  );






shoppingDecision(
  "Starbucks! Can you say Pumpkin Spice? Do you identify as a \" basic bitch\"? If so grab yourself a tasty treat for $6. Yes or No.",
  "You gain 3 life points, it would be more but I'm trying not to condone your \"basic bitch\" behavior.",
  "Lose 4 lifepoints because caffine is pretty much a neccessity up in her'",
  3,
  -6,
  -4
);





shoppingDecision(
  "Love me some cosmetics section. And you're feeling super ballsy and would like to buy a bright red shade of lipstick. You wonder if red would even look good on you, you should probably try it on real quick. Do you go ahead and try it on or freak just buy it. Do you just go ahead and buy it? Yes or No?",
  "You are a Target pro and know that they don't have testers. You lose $2 but you also gain 4 life points because you also know that red lipstick is directly related to the quality of your sex life.",
  "Ewww girl, you know Target doesn't have testers. That's unsanitary you lose 4 life points you ghetto white trash you.",
  4,
  -2,
  -4
  );






shoppingDecision(
  "You see the most adorable Halloween themed handtowels on sale for $4. Do you buy? Yes or No?",
  "You loose 3 life points because themed handtowels...ain\'t nobdy got time for dat!",
  "Gain 1 life point because you're not distracted by pointless things",
  -3,
  -4,
  1
  );






shoppingDecision(
  "You've been looking for the perfect grey cable knit sweater but they were all out of your size. As you approach the checkout you see that the exact sweater you're dying to have is sitting in the cart of a woman who is distracted and has her back turned. Do you grab the sweater? Yes or No?",
  "You gain 5 life points because your a bamf but lose $5 because it still costs to be cute",
  "Lose 1 lifepoint because you're probably never going to get anywhere in life",
  5,
  -5,
  -1
  );






shoppingDecision(
  "Starbucks! Can you say Pumpkin Spice? Do you identify as a \" basic bitch\"? If so grab yourself a tasty treat for $6. Yes or No.",
  "You gain 3 life points, it would be more but I'm trying not to condone your \"basic bitch\" behavior.",
  "Lose 4 lifepoints because caffine is pretty much a neccessity up in her'",
  3,
  -6,
  -4
);





shoppingDecision(
  "Love me some cosmetics section. And you're feeling super ballsy and would like to buy a bright red shade of lipstick. You wonder if red would even look good on you, you should probably try it on real quick. Do you go ahead and try it on or freak just buy it. Do you just go ahead and buy it? Yes or No?",
  "You are a Target pro and know that they don't have testers. You lose $2 but you also gain 4 life points because you also know that red lipstick is directly related to the quality of your sex life.",
  "Ewww girl, you know Target doesn't have testers. That's unsanitary you lose 4 life points you ghetto white trash you.",
  4,
  -2,
  -4
  );


