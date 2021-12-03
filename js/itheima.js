function itheima(options){
    // data:
    // id: 1
    // [[Prototype]]: Object
    // method: "GET"
    // success: ƒ (res)
    // url: "http://www.liulongbin.top:3006/api/delbook"
    // [[Prototype]]: Object

    // 先解出来data数据 http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=%E8%A5%BF%E6%B8%B8%E8%AE%B0
    var qs = resolveData(options.data)
    // qs =   id=1&bookname=西游记

    // 再发起 xhr GET 请求
     
    var xhr = new XMLHttpRequest()
    if(options.method.toUpperCase() === 'GET'){
        xhr.open(options.method, options.url + '?' +  qs)

        xhr.send()

        xhr.onreadystatechange = function(){
            // xhr 固定写法 
            if(xhr.readyState === 4 && xhr.status === 200){
               var  result =  JSON.parse(xhr.responseText)
               options.success(result)
            }
        }
    }else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url)

        // 固定写法
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

        xhr.send(qs)

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                var  result =  JSON.parse(xhr.responseText)
                options.success(result)
            }
        }
    }
    // console.log(options.method.toUpperCase());
}

function resolveData(data){
    var arr = []
    for (var k in data){
        var str = k + '=' + data[k]
        arr.push(str )
    }
    return arr.join('&')
}