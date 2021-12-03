function template(id, data){
    console.log(id);
    console.log(data);
    var str = document.getElementById(id).innerHTML
    console.log(str);
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/
    var patternResult = null

    while(patternResult = pattern.exec(str)){
        var str = str.replace(patternResult[0], data[patternResult[1]] )
    }

    console.log(str);
    return str
}