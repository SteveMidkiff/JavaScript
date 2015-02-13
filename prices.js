var canoe=350;
var sailboat=4675;
var speedboat=8745;
var tax=0.08;
var shipping=0.10;

function newDeal(boat) {
    var total = boat + (boat*tax) + (boat*shipping);
    document.write("Your low price: " + boat.toFixed(2) + "<br />");
    document.write("Your taxes: " + (tax*boat).toFixed(2) + "<br />");
    document.write("<u>");
    document.write("Your shipping: " + (boat*shipping).toFixed(2));
    document.write("</u><br />");
    document.write("Total cost for your new boat: " + total.toFixed(2) + "<br />");
}