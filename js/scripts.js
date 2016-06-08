function findVowel(inputArray) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelPosition = [];
  for (index = 0; index < vowels.length; index ++) {
  	var vowelFound = inputArray.indexOf(vowels[index]);
    if (vowelFound != -1) {
      vowelPosition.push(vowelFound);
    }
  };
  // for (index2 = 0; index2 < vowelPosition.length; index2 ++){
  //   vowelPosition.slice('-1');
  // };
  vowelPosition.sort();
  return vowelPosition[0];
  };

function toPigLatin(phrase) {
	var translateArray = phrase.split("");
	var indexFound = findVowel(translateArray);
	if (translateArray[0]==='q' && translateArray[1]==='u'){
		translateArray.push(translateArray[0],translateArray[1],"ay");
		translateArray= translateArray.slice(2,translateArray.length);
	} else if (translateArray.indexOf('q') < indexFound){
		translateArray.push(translateArray[0],"quay");
		translateArray = translateArray.slice(3,translateArray.length);
	} else if ((translateArray[0] === 'a') || (translateArray[0] === 'e') || (translateArray[0] === 'i') || (translateArray[0] === 'o') || (translateArray[0] === 'u')) {
		translateArray.push("ay");
	} else if (indexFound > 1) {
		for(index=0; index < indexFound; index ++) {
			translateArray.push(translateArray[index]);

		}
		alert(index);
		translateArray = translateArray.slice(indexFound, translateArray.length);
		translateArray.push("ay");
	}


	else {
		translateArray.push(translateArray[0],"ay");
		translateArray.shift();
	}

	var translatedString = translateArray.join("");
	return translatedString;
};

$(document).ready(function(event) {
  $('#pigLatin').submit(function(event) {

	var toTranslate = $('input#originalText').val();
	alert(toPigLatin(toTranslate));

  });
});
