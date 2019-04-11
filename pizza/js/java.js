// one___,____ pizza with ______, ______, and _____ that will be twenty dollars
// one___,____ pizza with ______, ______, and _____ that will be ten dollars
// one___,____ pizza with ______, ______, and _____ that will be five dollars
// var pizza ={
// type:[] parsint()
// toppings:["peparoni", "mushrooms", "black olives", "etra cheese"]
// size:[]parsint()
// }
//
// toppings.push(toppings)
// var newpizza = newpizza()
// var newpizza = newpizza(type, toppings, size)

$(document).ready(function(event) {

    $("#pizza-order").submit(function(event) {
      var type = $("input:radio[name=choice1]:checked").val();
      console.log(type);
      var size = $("input:radio[name=choice3]:checked").val();
      console.log(size);
      $("input:checkbox[name=toppings]:checked").each(function(){
        var toppingsMode = $(this).val();
        // $('#').append(toppingsMode + "<br>");
        // $("#story").show();
        event.preventDefault();
      });
  });
});


function pizza(type,toppings,size){
  this.type= type;
  this.toppings= toppings;
  this,size= size;
}


// var mypizza= new pizza(type,toppings,size)
