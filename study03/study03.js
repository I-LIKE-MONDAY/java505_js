/*
console.log("----- 함수 사용하기 -----");


function sum(a, b) {    //  함수의 사용 설명서
    const result = a + b;
    console.log(`두 수의 덧셈은 ${result}`);
}

sum(4, 4);
*/

//  함수의 4가지 형태
//  1. 매개변수 X, 반환값 X
//  2. 매개변수 O, 반환값 X
//  3. 매개변수 X, 반환값 O
//  4. 매개변수 O, 반환값 O


//  1. 매개변수 X, 반환값 X
/*function add() {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`)
}*/

//  2. 매개변수 O, 반환값 X
/*function add2(a, b) {
    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`)
}*/

//  3. 매개변수 X, 반환값 O
/*function add3() {
    const a = 10;
    const b = 20;
    const c = a + b;
    return c;
}*/

//  4. 매개변수 O, 반환값 O
/*function add4(a, b) {
    const c = a + b;
    return c;
}*/

/*console.log("-----------------------");*/




//  익명함수 : 이름이 없어서 호출(실행) 불가한 함수, 매개변수로 함수를 사용시 사용
//  변수에 익명 함수를 대입하여 변수명으로 익명 함수를 호출할 수 있음.
/*const noname = function () {
    const a = 10;
    const b = 20;
    console.log(`두 수의 합은 ${a + b}`);
};*/
/*noname();*/
//  즉시 실행 함수(일회용 함수) : 프로그램 실행 시 단 한번만 실행해야되는 부분을 실행하기 위해서 사용함
/*(function () {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(c);
}());*/

//  익명함수 활용 : 매개변수로 함수를 사용
/*
var btn = document.getElementById("aaa");
btn.addEventListener("click", function () {
    alert("aaaaa");
});*/

//  문제 6) 문제 3의 소스코드를 함수를 사용하는 방식으로 수정하세요.
//  1. 사용자 입력 부분을 함수로 생성, quiz6Input()
//  2. 3의 배수를 계산하는 부분을 (for문) 함수로 생성, quiz6Cal()
/*document.write("<h1>3의 배수 찾기</h1>")

let num = prompt("몇까지 3의 배수를 찾을까요?");
count1 = 0;

for(let i = 1; i <= num; i++) {
    if (i % 3 == 0) {
        document.write(`${i}, `)
        count1++;
    }
}
document.write(`<p>${num}까지 3의 배수의 개수 : ${count1}</p>`);*/
//  문제 6 함수 생성
// function quiz6Input() {
//     let num = prompt("몇까지 3의 배수를 찾을까요?");
//     return num;
// }
//
// function quiz6Cal(num) {
//     let count1 = 0;
//
//     for(let i = 1; i <= num; i++) {
//         if (i % 3 == 0) {
//             document.write(`${i}, `)
//             count1++;
//         }
//     }
//     document.write(`<p>${num}까지 3의 배수의 개수 : ${count1}</p>`);
// }
// quiz6Cal(quiz6Input());

//  문제 7) 문제 4의 소스코드를 함수를 사용하는 방식으로 수정하세요.
//  1. money, coffee, price 에 초기값을 설정하는 함수 생성, quiz7Setup()
//  2. 커피 판매 부분을 함수로 생성, quiz7Sale()
/*document.write("<h1>커피 자판 프로그램</h1>")
let coffee = 10;
let price = 300;
let money = prompt("지금 얼마를 가지고 있습니까?");
while (true) {
    coffee--;
    if(money < 300) {
        document.write("<p>돈이 부족합니다</p>");
        break;
    } else if (all == 0) {
        document.write("<p>커피가 다 팔렸습니다.</p>");
        break;
    } else if (money >= price) {
        money = money - price;
        document.write("<p>커피를 한잔 판매합니다.</p>");
        document.write(`<p>남은 커피 : ${coffee}잔 입니다.</p>`);
    }
}*/



// 문제 7 함수 생성
/*function quiz7Setup() {
    let coffee = 10;
    let price = 300;
    let money = prompt("지금 얼마를 가지고 있습니까?");
    return coffee, price, money;
}

function quiz7Sale(coffee, price, money) {
    while (true) {
        coffee--;
        if(money < 300) {
            document.write("<p>돈이 부족합니다</p>");
            break;
        } else if (money == 0) {
            document.write("<p>커피가 다 팔렸습니다.</p>");
            break;
        } else if (money >= price) {
            money = money - price;
            document.write("<p>커피를 한잔 판매합니다.</p>");
            document.write(`<p>남은 커피 : ${coffee}잔 입니다.</p>`);
        }
    }
}
quiz7Sale(quiz7Setup());*/


//  문제 8) 문제 5의 소스코드를 함수를 사용하는 방식으로 수정하세요.
//  1. 입금 부분을 함수로 생성, quiz8InputMoney()
//  2. 예금 확인 부분을 함수로 생성, quiz8CheckMoney()
//  3. 출금 부분을 함수로 생성, quiz8OutputMoney()
/*
alert("안녕하세요. java505 은행입니다.");

let sum = 0;
while (true) {
    let session1 = prompt("1 : 입금, 2 : 예금 확인, 3 : 출금, 0 : 종료");

    if ( session1 == 1) {
        let money = prompt(`얼마를 입금하시겠습니까?`);
        if (isNaN(money)) {
            console.log("잘못된 입력입니다. 메뉴로 돌아갑니다.")
        }
        sum = sum + Number(money);
        console.log(`${money}원을 입금하셨네요. 남은 금액은 ${sum}원 입니다.`)
    } else if (session1 == 2) {
        console.log(`현재 잔액은 ${sum}원 입니다.`);
    } else if (session1 == 3) {
        let minus = prompt("얼마를 출금하시겠습니까? ")
        if(minus > sum) {
            console.log(`잔액보다 큰 금액을 입력하셨습니다. 현재 잔액은 ${sum}이며, 모두 출금하겠습니다.`);
            sum = 0;
        }else {
            sum = sum - minus;
            console.log(`출금 금액은 ${minus}이며, 현재 잔액은 ${sum}원 입니다.`);
        }
    } else if (session1 == 0) {
        console.log(`프로그램을 종료합니다.`);
        break;
    }
}*/

/*// 입금부분 함수
function quiz8InputMoney() {
    money = prompt(`얼마를 입금하시겠습니까?`);
    if (isNaN(money)) {
        console.log("잘못된 입력입니다. 메뉴로 돌아갑니다.")
    }
    sum = sum + Number(money);
    console.log(`${money}원을 입금하셨네요. 남은 금액은 ${sum}원 입니다.`)
}
// 예금부분 함수
function quiz8CheckMoney() {
    console.log(`현재 잔액은 ${sum}원 입니다.`);
}

// 출금부분 함수
function quiz8OutputMoney() {
    let minus = prompt("얼마를 출금하시겠습니까? ")
    if(minus > sum) {
        console.log(`잔액보다 큰 금액을 입력하셨습니다. 현재 잔액은 ${sum}이며, 모두 출금하겠습니다.`);
        sum = 0;
    }else {
        sum = sum - minus;
        console.log(`출금 금액은 ${minus}이며, 현재 잔액은 ${sum}원 입니다.`);
    }
}*/

///////////////////////////////////////////////////////////////////////////////////////////

// 1. money, coffee, price 의 초기값을 설정하는 함수 생성, quiz7Setup
// 2. 커피 판매 부분을 함수로 생성, quiz7CoffeeSale

// 사용자의 소지금액 입력 받기
let money = prompt("소지하고 있는 금액을 입력하세요 : ");
console.log(`현재 소지금액은 ${money}원 입니다.`);
// 커피 재고량
let coffee = 10;

// 커피 혹은 돈이 없을때까지 무한 반복
while (true) {
    console.log('커피를 주문합니다.');

    // 소지 금액이 커피 가격보다 많은지 확인
    if (money >= 300) {
        // 커피 재고량이 충분한지 확인
        if (coffee > 0) {
            coffee--; // 커피 재고량 감소
            money -= 300; // 소지 금액 차감
            console.log('커피를 한잔 판매합니다.');
            console.log(`현재 남은 커피량 : ${coffee}`);
        }
        // 커피 재고량 부족 시
        else {
            console.log('커피가 다 팔렸습니다.');
            console.log('영업을 종료합니다.');
            break;
        }
    }
    // 소지 금액 부족 시
    else {
        console.log('돈이 부족합니다.');
        break;
    }
}

// 문제 8) 문제 5의 소스코드를 함수를 사용하는 방식으로 수정하세요
// 1. 입금 부분을 함수로 생성, quiz8InputMoney
// 2. 예금 확인 부분을 함수로 생성, quiz8CheckMoney
// 3. 출금 부분을 함수로 생성, quiz8OutputMoney