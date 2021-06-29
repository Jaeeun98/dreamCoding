'use strict';

// Shorthand property names / 객체 초기자
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer


//object key와 value 값이 같으면 하나 생략 가능
const name = 'jaeeun';
const age = '20';

const jaeeun1 = {
    name : name,
    age : age,
};

const jaeeun2 = {
    name,
    age,
}

console.log(jaeeun1, jaeeun2);


//object key의 중복
const jaeeun3 = {
    name,
    name : 'jaeeun3',
}

console.log(jaeeun3);