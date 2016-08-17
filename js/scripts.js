

$(document).ready(function(){
  $(".form-group").submit(function(event){
    var pigLInput = $("input#plInput").val().toLowerCase();
    // var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var pigLOutput = ("");
    var array = pigLInput.split(" ");

    for(i=0; i<=array.length; i+=1)
      var stringArray = array[i].toString();
      var splitArray = stringArray.split("");
      var arrayCopy= splitArray.slice()
      console.log(arrayCopy);

        for(j=0; j<=splitArray.length; j+=1)
            if (splitArray[j] === "a" || splitArray[j] === "e" || splitArray[j] === "i" || splitArray[j] === "o" || splitArray[j] === "u") {
            arrayCopy.push("ay");
            console.log(splitArray);
            alert(splitArray);
            break;
          }else if(splitArray[j]=== "q"){
              arrayCopy.push("qu")
            arrayCopy.shift();
            arrayCopy.shift();
            }else if (splitArray[j]=== "y") {
            arrayCopy.push(splitArray[j]);
            arrayCopy.shift();
            }else{
              alert("else");
            arrayCopy.push(splitArray[j]);
            console.log(arrayCopy);
            arrayCopy.shift();
          };
          pigLOuput +=arrayCopy;
    pigLOutput = arrayCopy.join("");
    $(".pigLatinOutput").text(pigLOutput);

  event.preventDefault();
  });
});
