

$(document).ready(function(){
  $(".form-group").submit(function(event){
    var pigLInput = $("input#plInput").val().toLowerCase();
    // var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var pigLOutput = ("");
    var array = pigLInput.split("");
    var arrayCopy = array.slice();

    for(j=0; j<=array.length; j+=1)
      if (array[j] === "a" || array[j] === "e" || array[j] === "i" || array[j] === "o" || array[j] === "u") {
        arrayCopy.push("ay");
        console.log(array);
        alert(array);
        break;

      }else if(array[j]=== "q"){
        arrayCopy.push("qu")
        arrayCopy.shift();
        arrayCopy.shift();
      }else if (array[j]=== "y") {
        arrayCopy.push(array[j]);
        arrayCopy.shift();
      }else{
        alert("else");
        arrayCopy.push(array[j]);
        console.log(arrayCopy);
        arrayCopy.shift();
      };

    pigLOutput = arrayCopy.join("");
    $(".pigLatinOutput").text(pigLOutput);

  event.preventDefault();
  });
});
