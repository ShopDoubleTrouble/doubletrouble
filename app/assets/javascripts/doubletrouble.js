jQuery(function($){

  // Adds or substracts from the quantity input in the cart_form
  var $quantity_input = $("#quantity");
  if ($quantity_input.length > 0){
    $("#btn_plus").click(function(event){
      var current_value = parseInt($quantity_input.val());
      $quantity_input.val(current_value+1);
    });
    $("#btn_minus").click(function(event){
      var current_value = parseInt($quantity_input.val());
      var new_value = Math.max(current_value-1, 1); // Make sure 1 is the minimum!!
      $quantity_input.val(new_value);
    });
  }

  // Datepicker
  var $datepicker = $(".datepicker").datepicker({
    monthNames:[
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ],
    yearRange:"1900:c",
    changeYear:true,
    dateFormat: "yy-mm-dd"
  })

});
