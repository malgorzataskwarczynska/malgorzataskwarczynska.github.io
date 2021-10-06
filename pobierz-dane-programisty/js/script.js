let httpReq = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'

$('#download').on('click', function()
{
  if($('#programmers-data').length===0)
  {
  $("<div id='programmers-data'>").appendTo('body') 
  }
  

$.getJSON(httpReq, function(data)
{
$('<p>').text(data.imie).appendTo('#programmers-data');
$('<p>').text(data.nazwisko).appendTo('#programmers-data');
$('<p>').text(data.zawod).appendTo('#programmers-data');
$('<p>').text(data.firma).appendTo('#programmers-data');
});
})