$(document).ready(function(event) {
  $('#pigLatin').submit(function(event) {
    var toTranslate = $('input#originalText').val();
    // alert(toTranslate);
    var translateArray = toTranslate.split("");
    // alert(translateArray);
    if ((translateArray[0] === 'a') || (translateArray[0] === 'e') || (translateArray[0] === 'i') || (translateArray[0] === 'o') || (translateArray[0] === 'u')) {
    alert('vowel');}
  });
});
