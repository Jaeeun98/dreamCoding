//destructuring assignment / 구조 분해 할당
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const jaeeun = {
    name : 'jaeeun',
    age : '24',
}

{
    const name = jaeeun.name;
    const age = jaeeun.age;
    console.log(name, age);
}

{
    const { name, age } = jaeeun;
    console.log(name, age);
}

{
    const { name : 이름, age : 나이 } = jaeeun;
    console.log(이름, 나이);
}

const jaeeun2 = ['jaeeun', '24'];

{
    const [name, age] = jaeeun2;
    console.log(name, age);
}

[a, ...b] = [1, 2, 3, 4]
console.log(a);
console.log(b);



