$(document).ready(function () {

//this is the list
var list = ['NYC', 'SF', 'LA', 'ATX', 'SYD']

  //in the list, for each one of them perform function called item
list.forEach(function (item) {
  // function item is insert an option, the value in the option, is the text of the item.
  var option = $('<option>').attr('value', item).text(item)
  //put the option in select html
  $('select').append(option)
})

//when select changes do this function
$('select').change(function (){
  //text is the value now selected
  var text = $(this).val()
  //if the tect is nyc change the body class id to nyc (which in css id nyc means change background).

switch (text) {
  case 'NYC':
  $('body').attr('id', 'nyc');

  break;

  case 'SF':
  $('body').attr('class', 'sf')

  break;

  case 'LA':
  $('body').attr('class', 'la')

  break;

  case 'ATX':
  $('body').attr('class', 'au')

  break;

  case 'SYD':
  $('body').attr('class', 'sy')

  break;
  default:
}

});
})

//
// //when select changes do this function
// $('select').change(function (){
//   //text is the value now selected
//   var text = $(this).val()
//   //if the tect is nyc change the body class id to nyc (which in css id nyc means change background).
//   if (text == 'NYC') {
//       $('body').attr('id', 'nyc')
//     }
//
//   else if (text == 'SF') {
//       $('body').attr('class', 'sf')
//     }
//
//   else if (text == 'LA') {
//       $('body').attr('class', 'la')
//     }
//
//   else if (text == 'ATX') {
//       $('body').attr('class', 'au')
//     }
//
//   else if (text == 'SYD') {
//       $('body').attr('class', 'sy')
//     }
//
// });
