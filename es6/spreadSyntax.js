//spread syntax / 전개 구문
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax

{
    const jaeeun = ['jaeeun', '24'];
    const jaeeunCopy = [...jaeeun];
    console.log(jaeeunCopy);
}

{
    const jaeeun = ['jaeeun', '24'];
    const jaeeunCopy = [...jaeeun, '167'];
    console.log(jaeeunCopy);
}

{
    const objName = { name : 'jaeeun' }
    const objAge = { age : '24' }
    
    const jaeeun = [ objName, objAge ];
    const jaeeunCopy = [ ...jaeeun, { tall : '167' } ]

    objAge.age = '25';

    console.log(jaeeunCopy);
}

{
    const jaeeun = { name : 'jaeeun', age : '24' }
    const copy = { ...jaeeun };
    console.log(copy);
}

{
    const jaeeun = [ 'jaeeun', '24' ];
    const jineun = [ 'jineun', '21' ];
    const copy = [ ...jaeeun, ...jineun];
    console.log(copy);
}
{
    const jaeeun = { name : 'jaeeun', age : '24' }
    const jineun = { name2 : 'jineun', age2 : '21' }
    const copy = { ...jaeeun, ...jineun }
    console.log(copy)
}