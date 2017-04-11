var options = $('button').text().split('');
options.splice(3,2);

function check(input){
  var inputarr = input.split('');
  
  for (var i = 0; i < inputarr.length; i++){
    var found = false;
    for(var j = 0; j < options.length; j++){
      if(inputarr[i] === options[j]){
        found = true;
      }
    }
    if(found === false){
      return false;
    }
  }
  return true;
}

function calculate(input){
  if(check(input)===true){
    var output = eval(input).toString();
    $('p').fadeOut(700, function(){
      $('p').text(input + "=" + output);
      $('p').fadeIn(700);
    });
    $('input:text').val(output);
  }
  else{
    $('p').text("Error");
    $('input:text').val("");
  }
}

$(document).ready(function(){
//console.log(options);
  var input = '';
  var newinput = '';
  
  $('input').on('keyup', function(event) {

    var key = event.which || event.keyCode;    
    newinput = $('input:text').val().slice(-1);
    
    if(key === 13){      
      calculate(input);
      input = "(" + input + ")";  
    }
    else if(key === 8 || key === 46){
      input = $('input:text').val(); 
    }
    else if(key !== 16) {
      input = input + newinput;
    }
  });
  
  $('button').on('click', function() {
    newinput = $(this).text();
    
    if(newinput === '='){
      //consoleOutput = 
      calculate(input);
      input = "(" + input + ")";
    }
    else if(newinput === 'AC'){
      $('input:text').val('');
      input = '';
    }
    else {  
      input = input + newinput;
      $('input:text').val(input);
    }
  });
});