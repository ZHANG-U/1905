var ouser = document.getElementById("user");
var omima = document.getElementById("mima");
var  obtn = document.getElementById("btn");
var op = document.querySelector(".yanzheng p");
var oi = document.querySelector(".yanzheng p i");
var obox = document.querySelector(".yanzheng");

var user=mima=yanzheng=0; //成功
// 用户名
ouser.onfocus = function(){
    this.value = "";
    this.innerHTML = this.value;
}
ouser.onblur = function(){
     var reg = /^1[3-9]\d{9}$/;
     if(reg.test(this.value) == 0){
        alert("用户名错误，请重新输入")
     }
}
// 密码
omima.onfocus = function(){
    this.value = "";
    this.innerHTML = this.value;
}
omima.onblur = function(){
     var reg = /^[0-9a-zA-Z]{8,20}$/;
     if(reg.test(this.value) == 0){
        alert("密码输入错误，请重新输入")
     }
}

oi.onmousedown = function(eve){
    var e = eve || window.event;
    var x = e.offsetX;
    // console.log(x)
    document.onmousemove = function(eve){
        var e = eve || window.event;
        var l = e.clientX-x-obox.offsetLeft;
        // console.log(l)
        if(l <= 0){ l = 0}
        if(l > obox.offsetWidth - oi.offsetWidth){
            l = obox.offsetWidth - oi.offsetWidth
        }
        oi.style.left = l + "px";
        op.style.width = l + oi.offsetWidth + "px"; 
    }
    document.onmouseup = function(){
        op.innerHTML = "验证信息成功!";
        document.onmousemove = null;
        document.onmouseup = null;

    }
}
// 登录时的判断
// obtn.onclick = function(){
//     console.log(1)
//     if(user && mima){
//         alert("欢迎光临顺电")
//      }else{
//         if(user == 0){
//             alert("用户名错误")
//         }
//         if(mima == 0){
//             alert("密码错误")
//         }
       
//     }
// }

