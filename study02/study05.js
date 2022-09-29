console.log("----- 숫자 관련 함수 -----");

//  toString() : 숫자 데이터를 문자열 데이터로 변환
//               사용법 : 변수 = 숫자데이터.toString();
let num1 = 123;
console.log("원본 데이터 : ");
console.log(num1);
console.log("toString() 변환 : " + num1.toString());
console.log(`toString() 변환 : ${(100 + 200).toString()}`);
console.log();

//  toExponential() : 숫자 데이터를 지수표기법으로 변환, 반올림으로 동작함
//                    사용법 : 숫자데이터.toExponential(표시할 자리수);
let num2 = 9.654;
console.log(`원본 데이터 : ${num2}`);
console.log(`toExponential() 사용 후 : ${num2.toExponential()}`);
console.log(`toExponential(2) 사용 후 : ${num2.toExponential(2)}`);
console.log(`toExponential(4) 사용 후 : ${num2.toExponential(4)}`);
console.log();

// toFixed() : 소수점 자리를 지정한 크기만큼 표현, 반올림 효과
//             사용법 : 숫자.toFixed(소수점자리);
console.log(`원본 데이터 : ${num2}`);
console.log(`toFixed(0) 사용 : ${num2.toFixed(0)}`);
console.log(`toFixed(2) 사용 : ${num2.toFixed(2)}`);
console.log(`toFixed(4) 사용 : ${num2.toFixed(4)}`);
console.log();

//  NaN : Not a Number 의 줄임말로, 숫자가 아니라는 뜻임

//  isNaN() : 지정한 데이이터가 숫자인지 아닌지를 확인하는 명령어, 숫자가 아니라면 true( = 숫자가 아닌게 맞다), 숫자이면 false
//            사용법 : 변수 = isNaN(데이터);
const num3 = "1234";
const num4 = "12삼사";
console.log(`원본 데이터 num3 : ${num3}\tnum4 : ${num4}`);
console.log(`isNaN(num3) : ${isNaN(num3)}`);
console.log(`isNaN(num4) : ${isNaN(num4)}`);
console.log();

//  Number() : 문자열 데이터 타입 숫자를 숫자형 데이터타입으로변환, 변환이 불가능할 경우 NaN 이라는 데이터 타입을 반환
//             (일반적으로 Number()을 이용하여 문자->숫자 변환)
//             사용법 : 변수 = Number(데이터);
console.log(`Number(true) : ${Number(true)}`);  // true는 1로, false는 0으로  바꿔줌
console.log(`Number(false) : ${Number(false)}`);
console.log(`Number("10") : ${Number("10")}`);
console.log(`Number("   10") : ${Number("   10")}`);
console.log(`Number("10   ") : ${Number("10   ")}`);
console.log(`Number("   10   ") : ${Number("   10   ")}`);
console.log(`Number("10.33") : ${Number("10.33")}`);
console.log(`Number("10,33") : ${Number("10,33")}`);
console.log(`Number("10 33") : ${Number("10 33")}`);
console.log(`Number("javascript") : ${Number("javascript")}`);
console.log();

//  parseInt() : 문자열 데이터 타입의 숫자를 정수로 데이터로 변환
//               사용법 : 변수 = parseInt(데이터);
console.log(`parseInt("-10") : ${parseInt("-10")}`);
console.log(`parseInt("-10.33") : ${parseInt("-10.33")}`);
console.log(`parseInt("10") : ${parseInt("10")}`);
console.log(`parseInt("10.33") : ${parseInt("10.33")}`);
console.log(`parseInt("10 20 30") : ${parseInt("10 20 30")}`);
console.log(`parseInt("10 year") : ${parseInt("10 year")}`);
console.log(`parseInt("year 10") : ${parseInt("year 10")}`);
console.log();

//  parseFloat() : 문자열 데이터 타입의 숫자를 실수 데이터로 변환
//               사용법 : 변수 = parseFloat(데이터);
console.log(`parseFloat("10") : ${parseFloat("10")}`);
console.log(`parseFloat("10.33") : ${parseFloat("10.33")}`);
console.log(`parseFloat("10 20 30") : ${parseFloat("10 20 30")}`);
console.log(`parseFloat("10 year") : ${parseFloat("10 year")}`);
console.log(`parseFloat("year 10") : ${parseFloat("year 10")}`);
console.log();

//  MAX_VALUE : 최대값 출력
//              사용법 : Number.MAX_VALUE;
console.log(`숫자 데이터의 가장 큰 수 : ${Number.MAX_VALUE}`);
//  MIN_VALUE : 최소값 출력
//              사용법 : Number.MIN_VALUE;
console.log(`숫자 데이터의 가장 작은 수 : ${Number.MIN_VALUE}`);


