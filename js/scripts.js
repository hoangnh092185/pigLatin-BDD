$(document).ready(function(){
  $(".form-group").submit(function(event){
    var pigLInput = $("input#plInput").val();
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var pigLOutput = ("");
    for(i=0; i<=vowels.length; i+=1)
      if (pigLInput === vowels[i]){
        pigLOutput = pigLInput + "ay"
        alert(pigLOutput);
      };

    event.preventDefault();
  });
});
