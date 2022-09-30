console.log("----- while 문 사용하기 -----");

let count = 1;

while (count < 11) {
    console.log(count);
    count++;
}

let dan = 5;
count = 1;
while (count < 10) {
    console.log(`${dan} * ${count} = ${dan * count}`);

    count++;
}
console.log();

//  문제 1) 구구단 전체 출력을 while문을 사용하여 출력하세요.
let i = 2;
while (i < 10) {
    console.log(`----- ${i}단 -----`);
    let j = 1;
    while (j < 10) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }i++;
}

console.log("----- for 문 사용하기 -----");
//  예제 : 1부터 5까지 더하라
let sum = 0;

for(let i = 1; i < 6; i++) {
    sum = i + sum;
    console.log(sum);
}

//  예제 : 배열의 값을 출력하라.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
console.log();

//  문제 2 : 배열 arr1를 이용하여 1 ~ 10 까지의 총합을 구하는 프로그램을 for 문을 사용하여 작성하세요.
sum = 0;
for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
    console.log(sum);
}

console.log();

// break와  continue의 차이점
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    else {
        console.log(`현재 i의 값 : ${i}`);
    }
}
console.log();

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    else {
        console.log("현재 i의 값 : " + i);
    }
}

// break 가장 가까운 반복문만 종료되는 것임.
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        if (j == 5) {
            break;
        }
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

