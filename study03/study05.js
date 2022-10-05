// 문제 7 함수 생성

// 함수의 반환값을 1개만 반환이 가능함. 데이터를 2개 이상 동시에 반환하는것은 불가능함.
// 여러개를 반환하고싶다면 배열에 넣거나 오브젝트형으로 만들어야 함.
function quiz7Setup() {
    // 커피 재고량
    let coffee = prompt("커피의 재고량을 입력하세요: ");
    // 커피 가격 설정
    let price = prompt("커피의 가격을 설정하세요 : ");
    // 소지금액 설정
    let money = prompt("지금 얼마를 가지고 있습니까? : ");

    // 1. 배열로 넣는 법
    //return [money, coffee, price];
    // 2. 오브젝트 타입으로 넣는 법
    return {'money': money, 'coffee': coffee, 'price': price};
}

// 3. quiz7Setup() 함수를 바꾸는 방법
let obj = {};
obj = quiz7Sale();

console.log(`현재 소지금액은 ${obj.money}원 입니다.`);
console.log(`현재 커피의 재고량은 ${obj.coffee}원 입니다.`);
console.log(`현재 커피 1잔의 가격은 ${obj.price}원 입니다.`);

function quiz7CoffeeSale(obj.money, obj.coffee, obj.price);


function quiz7Sale(money, coffee, price) {
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
quiz7Sale(quiz7Setup());


////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 문제 7) 문제 4의 소스코드를 함수를 사용하는 방식으로 수정하세요
// 1. money, coffee, price 의 초기값을 설정하는 함수 생성, quiz7Setup
// 2. 커피 판매 부분을 함수로 생성, quiz7CoffeeSale

// 함수의 반환값은 1개의 데이터만 반환이 가능함
function quiz7Setup() {
    let money = prompt("소지하고 있는 금액을 입력하세요 : ");
    let coffee = prompt("커피의 재고량을 입력하세요 : ");
    let price = prompt("커피의 가격을 설정하세요 : ");

    // return [money, coffee, price];
    return {'money': money, 'coffee': coffee, 'price': price};
}

function quiz7CoffeeSale(money, coffee, price) {
    while (true) {
        console.log('커피를 주문합니다.');

        if (money >= price) {
            if (coffee > 0) {
                coffee--; // 커피 재고량 감소
                money -= price; // 소지 금액 차감
                console.log('커피를 한잔 판매합니다.');
                console.log(`현재 남은 커피량 : ${coffee}`);
            }
            else {
                console.log('커피가 다 팔렸습니다.');
                console.log('영업을 종료합니다.');
                break;
            }
        }
        else {
            console.log('돈이 부족합니다.');
            break;
        }
    }
}

let obj = {};
obj = quiz7Setup();

console.log(`현재 소지금액은 ${obj.money}원 입니다.`);
console.log(`현재 커피의 재고량은 ${obj.coffee}개 입니다.`);
console.log(`현재 커피 1잔의 가격은 ${obj.price}원 입니다.`);

quiz7CoffeeSale(obj.money, obj.coffee, obj.price);

// 문제 8) 문제 5의 소스코드를 함수를 사용하는 방식으로 수정하세요
// 1. 입금 부분을 함수로 생성, quiz8InputMoney
// 2. 예금 확인 부분을 함수로 생성, quiz8CheckMoney
// 3. 출금 부분을 함수로 생성, quiz8OutputMoney

function quiz8InputMoney(bankMoney) {
    let inMoney = prompt('입력할 금액을 입력해 주세요 : ');
    if (isNaN(inMoney)) {
        console.log('잘못된 입력입니다.\n메뉴로 돌아갑니다.');
        return 0;
    }
    else {
        inMoney = Number(inMoney);
        bankMoney += inMoney;
        console.log(`입금한 금액은 ${inMoney}원 이고, 예금 금액은 ${bankMoney}원 입니다.`);
        return bankMoney;
    }
}

function quiz8CheckMoney(bankMoney) {
    console.log(`현재 예금 금액은 ${bankMoney}원 입니다.`);
}

function quiz8OutputMoney(bankMoney) {
    while (true) {
        let outMoney = prompt('출금할 금액을 입력하세요 : ');

        if (isNaN(outMoney)) {
            console.log('잘못된 입력입니다.\n숫자로만 입력해주세요');
        }
        else {
            outMoney = Number(outMoney);

            if (outMoney > bankMoney) {
                console.log('출금 금액이 예금 금액보다 많습니다.\n모든 예금 금액을 출금 합니다.');
                console.log(`출금 금액은 ${bankMoney}원 입니다.`);
                return 0;
            }
            else {
                bankMoney -= outMoney;
                console.log(`출금 금액은 ${outMoney}원 이고, 남은 예금 금액은 ${bankMoney}원 입니다.`);
                return bankMoney;
            }
        }
    }
}

let bankMoney = 0; // 은행에 저금한 액수
console.log('안녕하세요 java505 은행입니다.');

while (true) {
    console.log('메뉴를 입력해주세요');
    console.log('1 : 입금, 2 : 예금 확인, 3 : 출금, 0 : 종료');

    let menu = prompt('메뉴 선택 : (1 : 입금, 2 : 예금 확인, 3 : 출금, 0 : 종료)');

    if (menu == 1) {
        let inMoney = quiz8InputMoney(bankMoney);
        if (inMoney != 0) {
            bankMoney = inMoney;
        }
    }
    else if (menu == 2) {
        quiz8CheckMoney(bankMoney);
    }
    else if (menu == 3) {
        bankMoney = quiz8OutputMoney(bankMoney);
    }
    else if (menu == 0) {
        console.log('저희 java505 은행을 이용해 주셔서 감사합니다.');
        break;
    }
    else {
        console.log('잘못된 입력입니다.')
    }
}