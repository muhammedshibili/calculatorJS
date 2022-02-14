function calculate(){
    var one = parseInt(document.getElementById("value1").value);
    var two = parseInt(document.getElementById("value2").value);
    var operator = document.getElementById("operator").value;
    var result;

    if(operator=="+"){
        result= one + two;
        document.getElementById("result").innerHTML = "Result is"+result;
    }
    else if(operator=="-"){
        result = one - two;
        document.getElementById("result").innerHTML = "Result is"+result;
    }
    else if(operator=="*"){
        result = one * two;
        document.getElementById("result").innerHTML = "Result is"+result;
    }
    else if(operator=="/"){
        result = one / two;
        document.getElementById("result").innerHTML = "Result is"+result;
    }
    else{
        document.getElementById("result").innerHTML = "invalid operator";
    }
}