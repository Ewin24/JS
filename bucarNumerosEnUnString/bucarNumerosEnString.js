//----------------------------Primera manera----------------------------
var name_1 = "i_txt_7_14";
var name_2 = "i_txt_27_14";
var name_3 = "i_txt_136_140";

function getNumbersInString(string) {
  var tmp = string.split("");
  var map = tmp.map(function(current) {
    if (!isNaN(parseInt(current))) {
      return current;
    }
  });

  var numbers = map.filter(function(value) {
    return value != undefined;
  });

  return numbers.join("");
}

console.log(getNumbersInString(name_1)); // Nos devolverá 714
console.log(getNumbersInString(name_2)); // Nos devolverá 2714
console.log(getNumbersInString(name_3)); // Nos devolverá 136140



//----------------------------segunda manera----------------------------
var regex = /(\d+)/g;

var name="i_txt_7_14";
console.log(name.match(regex)); 

var name2="i_txt__________7_14";
console.log(name2.match(regex)); 

var name3="i_t10xt_7_14";
console.log(name3.match(regex)); 


//--explicacion del regex
//  \d indica que quieres que coja números
//  /g indica que quieres buscar de manera global en todo el string.