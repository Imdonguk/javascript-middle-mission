var readline = require("./config/readline")();

function VendingMachine() {
	//음료수 생성 drinks = new Drinks
	//enum 상태 목록: 처음 켬, 동전 대기, 음료 대기, 구매/반환 대기, 종료
	//돈
	//함수: 머신 제어(키보드 입력)
	//함수: 돈 넣기
	//함수: 음료수 구매
	//함수: 구매 가능한 음료 배열 반환
	function command(command) {
		//상태 따라서 switch
		//처음 켬, 동전 대기, 음료 대기, 구매/반환 대기
	}
}

function Drinks() {
	//음료 배열: 객체 - (상수)이름, 수량, (상수)가격
	//생성: 콜라(1000), 사이다(1000), 포도쥬스(700), 딸기우유(500), 미에로화이바(900), 물(500), 파워에이드(재고없음)
	//함수: 음료수 제거
}

function showDrinks(drinks) {
}

//머신 생성
//머신 입력 대기(머신)

//입력대기 함수로 만들기
readline.on("line", function (line) {
	if (line == "exit") {
		readline.close();
	}

	controlVendingMachine(line);
	//종료 여부 확인하여 종료, 아니면 재개
	readline.prompt();
});

//처음 켰을 때
//동전 넣으세요
//동전 대기로 상태 변환.

//동전 대기
//숫자 아닌가? - 동전을 넣으세요
//돈 넣기 함수
//구매 가능한 음료 배열 반환
//구매 가능한 음료 목록 출력
//가능음료.isEmpty? - 아무것도 못 삽니다. 동전을 넣으세요. 
//음료 대기로 상태 변환. 선택하세요.

//음료 대기
//음료수 이름 아님? - 그런 건 없습니다. 구매 가능한 음료 목록 출력. 선택하세요.
//재고 없나? - 그거 다 떨어졌어요. 구매 가능한 음료 목록 출력. 선택하세요.
//음료수 나왔습니다.
//음료수 구매
//구매/반환 대기로 상태 변화
//다른 걸 구매? 반환?

//구매/반환 대기
//숫자인가? - 동전 대기로 상태 변환. 46으로
//반환인가? - 잔액은 얼마입니다. 끝으로 상태 변환
//다른 걸 구매? 반환?
