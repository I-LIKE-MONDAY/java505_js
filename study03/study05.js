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