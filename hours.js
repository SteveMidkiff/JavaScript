var wayContact = ["email", "phone", "webcam"];
var dayWeek = ["Any Day", "M-F", "Sat & Sun"];
var hours = ["any time", "9a - 6p", "6p - 9p"];

document.write('<table class="table1" ><caption>Hours Available</caption>');
document.write('<thead><tr><th>Days of the Week</th><th>Hours of the Day</th><th>Method of Contact</th></tr></thead>');
for (i = 0; i < hours.length; i++){
    
    document.write('<tbody><tr><td>' + dayWeek[i] + '</td><td>' + hours[i] + '</td><td>' + wayContact[i] + '</td></tr>');
    
    }
document.write('</tbody></table>');