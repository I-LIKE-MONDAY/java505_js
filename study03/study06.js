// 입금부분 함수
function quiz8InputMoney() {
    money = prompt(`얼마를 입금하시겠습니까?`);
    if (isNaN(money)) {
        console.log("잘못된 입력입니다. 메뉴로 돌아갑니다.")
        return bankMoney = 0;
    }
    else{
        sum = sum + Number(money);
        console.log(`${money}원을 입금하셨네요. 남은 금액은 ${sum}원 입니다.`)
        return bankMoney;
    }

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
        return 0;
        // 예금금액 0원 처리
        // sum = 0;
    }else {
        sum = sum - minus;
        console.log(`출금 금액은 ${minus}이며, 현재 잔액은 ${sum}원 입니다.`);
        return bankMoney;
    }
}

alert("안녕하세요. java505 은행입니다.");
let money = 0;

let sum = 0;
while (true) {
    let session1 = prompt("1 : 입금, 2 : 예금 확인, 3 : 출금, 0 : 종료");

    if ( session1 == 1) {
        quiz8InputMoney();
    }
    else if (session1 == 2) {
        quiz8CheckMoney()
    }
    else if (session1 == 3) {
        bankmoney = quiz8OutputMoney(bankmoney);    // 전역변수 사용 케이스
    }
    else if (session1 == 0) {
        console.log(`프로그램을 종료합니다.`);
        break;
    }}