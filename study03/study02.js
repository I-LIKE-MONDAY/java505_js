// 문제 3) 숫자를 입력받은 후 1부터 그 숫자까지 3의 배수를 모두 화면에 출력합니다.
//         그리고 출력된 3의 배수가 총 몇 개인지 알려 주는 프로그램을 작성해 보세요.


/*
document.write("<h1>3의 배수 찾기</h1>")

let num = prompt("몇까지 3의 배수를 찾을까요?");
count1 = 0;

for(let i = 1; i <= num; i++) {
    if (i % 3 == 0) {
        document.write(`${i}, `)
        count1++;
    }
}
document.write(`<p>${num}까지 3의 배수의 개수 : ${count1}</p>`);
*/

// 문제 4) 커피 자판 프로그램을 작성하세요
// 1. 사용자가 가지고 있는 금액을 입력 받기
// 2. 커피 1잔의 금액은 300원
// 3. 자판기에 들어있는 커피의 양은 10개
// 4. 커피를 판매할 때마다 1개의 커피가 소비됨
// 5. 소지 금액이 부족 시 '돈이 부족합니다' 를 출력
// 6. 커피가 부족할 경우 '커피가 다 팔렸습니다' 를 출력
// 7. 커피 판매 시 '커피를 한잔 판매 합니다.' 와 커피 재고량을 출력
//      ex) 커피를 한잔 판매합니다.
//          남은 커피 00 잔
/*document.write("<h1>커피 자판 프로그램</h1>")
let all = 10;
let coffee = 300;
let money = prompt("지금 얼마를 가지고 있습니까?");
while (true) {

    all--;
    if(money < 300) {
        document.write("<p>돈이 부족합니다</p>");
        break;
    } else if (all == 0) {
        document.write("<p>커피가 다 팔렸습니다.</p>");
        break;
    } else if (money >= coffee) {
        money = money - coffee;
        document.write("<p>커피를 한잔 판매합니다.</p>");
        document.write(`<p>남은 커피 : ${all}잔 입니다.</p>`);
    }
}*/
//  for문의 무한반복
// for (;true;) {
//
// }


// 문제 5) 은행 프로그램을 작성하세요
// 1. 프로그램 시작 시 안내 메시지와 메뉴가 출력
//  ex) 안녕하세요 java505 은행입니다.
//  ex) 1: 입금, 2: 예금 확인, 3: 출금, 0: 종료

// 2. 메뉴를 선택하면 해당 기능을 실행
// 3. 메뉴는 기능을 실행 후 계속 출력
// 4. 0 실행 시 '프로그램을 종료합니다.' 출력 후 프로그램 종료
// 5. 1 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에 추가
// 6. 2 실행 시 기존에 저장된 금액을 출력
// 7. 3 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에서 차감
// 8. 기존 금액보다 큰 금액을 출금 시 기존 금액을 0으로 만들고 모든 금액을 출금
/*alert("안녕하세요. java505 은행입니다.");

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
