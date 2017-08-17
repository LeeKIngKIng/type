var type = function(selector,time_interval,input) {
    // $(document.body).append('<style>p{display:inline}</style>')
    var text = input
    var splitArr=text.split('<br>')
    var lengthArr=[0]
    for(var i=0; i<splitArr.length-1; i++){
        if(i>0){
            lengthArr[i]=lengthArr[i-1]+splitArr[i].length
        }else{
            lengthArr[i]=splitArr[i].length-1
        }
    }
    var arr=[]
    for(var h=0; h<splitArr.length; h++){
        var l = splitArr[h].length;　　
        var s = splitArr[h];　　
        for (var i = 0; i < l; i++) {
            arr.push(s.substr(i, 1))
        }
    }    　　
    var t = 0;　　
    var interval = setInterval(function() {
        if (t === arr.length) {
            clearInterval(interval)
            return
        }
        for(var i=0; i< lengthArr.length; i++){
            if (t ===  lengthArr[i]) {
                $(selector+" i").before('<span>' + arr[t] + '</span><br />');
                t++;
                return
            }
        }
        
        $(selector+" i").before('<span>' + arr[t] + '</span>');

        t++;
    }, time_interval)
    setInterval(function(){
        setTimeout(function(){
            $(selector+" i").hide()
        },100)
        setTimeout(function(){
            $(selector+" i").show()
        },700)
    },800)
}
