

menu_list_array = ["Veg Margherita Pizza",
"Chicken Cheese Pizza",
"Mexican Cheese Pizza",
"Cheese Corn Pizza",
"Magic Pizza",
"Paneer & Capsicum Pizza"]; 


function Menu() {
    var htmldata="";
    menu_list_array.sort();
    for(var l=0;l<menu_list_array.length;l++){
     htmldata=htmldata+ menu_list_array[l] + '<br>'
    }
    document.getElementById("display_menu").innerHTML=htmldata;
    
    }
    

    


function Suggestion() {
var htmldata;
var Suggest_1=document.getElementById("Suggest_for_the_Topping_1").value;
menu_list_array.push();
htmldata=""
for(var i=0; i<menu_list_array.length;i++)
{
    htmldata=htmldata+Suggest_1 + '<br>';}
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}

