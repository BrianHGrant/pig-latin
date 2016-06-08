$(document).ready(function(event) {
  $('#pigLatin').submit(function(event) {
    var toTranslate = $('input#originalText').val();
    // alert(toTranslate);
    var translateArray = toTranslate.split("");
    // alert(translateArray);
    if ((translateArray[0] === 'a') || (translateArray[0] === 'e') || (translateArray[0] === 'i') || (translateArray[0] === 'o') || (translateArray[0] === 'u')) {
      translateArray.push("ay");
  } else {
    translateArray.push(translateArray[0],"ay");
    translateArray.shift();
  }

  var translatedString = translateArray.join("");
  alert(translatedString);
  });
});
