var ouser = document.getElementById("user");
var omima = document.getElementById("mima");
var obtn = document.getElementById("btn");

var inforMation = JSON.parse(getCookie("inforMation"));

// console.log(Information);
ouser.value = Information.user;
omima.value = Information.mima;

obtn.onclick = function(){
        var obj = {
            user:ouser.value,
            mima:omima.value
        }
        // console.log(obj);
        setCookie("inforMation",JSON.stringify(obj),{
            expires:7
        })
        // console.log(JSON.stringify(obj));
        // console.log(inforMation)
}



















