//default parameters, 기본 매개 변수
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters

{
    function paraFun(mess = 'default message'){
        console.log(mess);
    }

    paraFun('jaeeun');
    paraFun();
}

