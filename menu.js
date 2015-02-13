var itemImage = new Array(5);
itemImage[0] = "<img src='seafood.jpg'>"
itemImage[1] = "<img src='chicken.jpg'>"
itemImage[2] = "<img src='pork.jpg'>"
itemImage[3] = "<img src='veggie.jpg'>"
itemImage[4] = "<img src='fruit.jpg'>"


var itemName = new Array(5);
itemName[0] = "Salty Seafood Fritters";
itemName[1] = "Chicken Fritters";
itemName[2] = "Pork Fritters";
itemName[3] = "Vegetarian Fritters";
itemName[4] = "Fancy Fried Apple Fritters";


var itemDesc = new Array(5);
itemDesc[0] = "The finest gulf shrimp and blue crab battered in a special Fedora family secret batter and deep-fried to perfection. These are our secret weapon, cause once you've had these you will keep coming back!";
itemDesc[1] = "The finest free-range chickens plucked at their plumpest, chopped up into bite-sized pieces, battered and deep-fried to perfection. Try them with our special bar-b-que sauce.";
itemDesc[2] = "Better than any pork dumpling you've ever had, we take the finest cuts of pork, grind them up, batter and deep-fry them. Goes amazingly well with our spicy marinara sauce. Who knew!";
itemDesc[3] = "One for our veggie-loving friends. This is without a doubt the best way to eat your veggies! Corn, okra and red bell peppers are battered and fried to golden perfection. Comes with our special spicy veggie dipping sauce.";
itemDesc[4] = "The choicest selection of tart and tasty granny smith apples, battered a deep fried to perfection, then glazed with a creamy caramel sauce (and a little on the side for dipping).";

var itemPrice = new Array(5);
itemPrice[0] = 12.95;
itemPrice[1] = 8.95;
itemPrice[2] = 9.95;
itemPrice[3] = 5.95;
itemPrice[4] = 7.95;

document.write('<table class="table1" ><caption>Menu Items</caption>');
// document.write('<thead><tr><th>Days of the Week</th><th>Hours of the Day</th><th>Method of Contact</th></tr></thead>');
for (i = 0; i < itemName.length; i++){
    
    document.write('<tbody><tr><td>' + itemImage[i] + '</td><td>' + itemName[i] + '</td><td>' + itemDesc[i] + '</td><td>' + '$' + itemPrice[i] + '</td></tr>');
    
    }
document.write('</tbody></table>');
























