//nullish Coalescing Operator, 통합연산자
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator


//false : null, undefined, 0, false, ''
{
    const name = 'jaeeun';
    const userName = name || 'Guest';
    //or 연산자 = 둘 중 하나만 true여도 true 출력
    //둘 중 앞의 값이 true이면, 처음 값 출력
    // = 앞의 값이 false여야 두 번째 값 출력
    //위 식은 name에 값이 있음 = true = name의 값이 출력
    console.log(userName);
}

{
    const name = null;
    const userName = name || 'Guest';
    console.log(userName);
}

{
    const name = null;
    const userName = name ?? 'Guest';
    console.log(userName);
}

{
    const name = 0;
    const userName = name ?? 'Guest';
    console.log(userName);
}
