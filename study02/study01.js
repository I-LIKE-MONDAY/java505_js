//   연산자
console.log("----- 연산자 -----");

a = 10;
b = 3;

console.log("원본 변수 a = " + a + ",\tb : " + b);

console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("a % b = " + (a % b));
//   ES6 에서 추가
console.log("a ** b = " + (a ** b));    //  지수 연산자 이용
console.log("a * a * a = " + (a * a * a));  // 지수 연산자를 사용하지 않을때 a의 b제곱 표시하는 법

//   증감 연산자
a++;
console.log("a++ = " + a);
++a;
console.log("++a = " + a);
--a;
console.log("--a = " + a);
a--;
console.log("a-- = " + a);

console.log("a = 100 : " + (a = 100));
console.log("a += 10 : " + (a += 10));
console.log("a -= 10 : " + (a -= 10));
console.log("a *= 2 : " + (a *= 2));
console.log("a /= 2 : " + (a /= 2));
console.log("a %= 3 : " + (a %= 3));
console.log("b **= 2 : " + (b **= 2));

c = "문자열" + "연결" + "연산자";
console.log("문자열" + "연결" + "연산자 : " + c);

a = 10;
b = 3;

console.log("10 == 5 : " + (10 == 5));
console.log("10 > 5 : " + (10 > 5));
console.log("10 >= 5 : " + (10 >= 5));
console.log("10 < 5 : " + (10 < 5));
console.log("10 <= 5 : " + (10 <= 5));
console.log("10 != 5 : " + (10 != 5));

//   자바스크립트에서는 간소화된 문법을 사용하기 때문에 문자열로 데이터 타입의 숫자와 숫자 데이터 타입의 숫자의 비교 연산이 가능함.
//   ==, !=, ===, !== 의 차이점은 ==, != 은 데이터 타입을 확인하지 않고 비교 연산만 진행.
//   ===, !==은 값과 데이터 타입을 모두 확인하여 비교 연산을 진행
console.log("'5' == 5 : " + ('5' == 5));
console.log("'5' === 5 : " + ('5' === 5));
console.log("'5' != 5 : " + ('5' != 5));
console.log("'5' !== 5 : " + ('5' !== 5));

//   논리 연산자
console.log("10 > 5 && '5' === 5 : " + (10 > 5 && '5' === 5));
console.log("10 > 5 || '5' === 5 : " + (10 > 5 || '5' === 5));
console.log("!('5' != 5) : " + (!('5' != 5)) )

//   typeof : 지정한 변수의 데이터 타입을 확인(타입을 반환)
console.log("typeof a : " + (typeof a));    // number
a = "자바스크립트";
console.log("typeof a : " + (typeof a));    // String

//   instanceof : 지정한 변수가 지정한 클래스의 객체인지 확인(true/false 반환)
let time = new Date();
console.log("instanceof : " + (time instanceof Date));

//   연산자의 우선순위
//  1. ()
//  2.  . : 멤버, [] : 멤버, () : 함수호출
//  3. new
//  4. ++, --, !, typeof, delete
//  5. **, *, /, %
//  6. +, -
//  7. <<, >>, >>> : 비트연산
//  8. in, instanceof, <, <=, >, >=, ==, ===, !=, !==
//  9. &, ^, |
//  10. &&, ||, ? :
//  11. =, +=, -=, *=, /=, %=, **=