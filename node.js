function getNumbers(){
    var input = document.getElementById("input").value;
    var pattern = /\d+/g;
    var result = input.match(pattern);
    return result;
}

function main() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var pattern_array = [/[+]/,/[-]/,/[*]/,/[/]/];
    var result = getNumbers();
    if (input.match(pattern_array[0])) {
        // suma 
        var sum = Number(result["0"]) + Number(result["1"]);
        var exit = "[System][out] :: " + result["0"] + " + " + result["1"] + " = " + String(sum);
        output.innerHTML = exit;
    }else if (input.match(pattern_array[1])) {
        // resta
        var rest = Number(result["0"]) - Number(result["1"]);
        var exit = "[System][out] :: " + result["0"] + " - " + result["1"] + " = " + String(rest);
        output.innerHTML = exit;
    }else if (input.match(pattern_array[2])) {
        // multiplicación
        var mult = Number(result["0"]) * Number(result["1"]);
        var exit = "[System][out] :: " + result["0"] + " * " + result["1"] + " = " + String(mult);
        output.innerHTML = exit;
    }else if (input.match(pattern_array[3])) {
        // división
        var div = Number(result["0"]) / Number(result["1"]);
        var exit = "[System][out] :: " + result["0"] + " / " + result["1"] + " = " + String(div);
        output.innerHTML = exit;
    }
}

/*
Nota: Para la próxima actualización, implementar un historial basado en un archivo de texto.
*/