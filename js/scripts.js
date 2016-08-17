

$(document).ready(function(){
  $(".form-group").submit(function(event){
    var pigLInput = $("input#plInput").val();
    // var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var pigLOutput = ("");
    var array = pigLInput.split("");
    var array2 = [""];
    pigLOutput = array;


    for(j=0; j<=array.length; j+=1)
      if (array[j] === "a" || array[j] === "e" || array[j] === "i" || array[j] === "o" || array[j] === "u") {
        var newArray = array.push("ay");
        console.log(array);
        alert(array);
        break;

      }else {
        alert("else");
        array.push(array[j]);
        console.log(array);
      };

      $(".pigLatinOutput").text(pigLOutput);

  event.preventDefault();
  });
});
