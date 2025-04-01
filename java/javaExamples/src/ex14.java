public class ex14 {
    public static void main(String[] args) {
        //반복문 for while do-while
        //*js 문법과 거의 유사

        //패턴
        //for(초기화; 조건; 증감){
        // 실행문;
        //}

        for (int i = 0; i < 5; i++) {
            System.out.println("i = " + i);
        }

        //무한반복문 만드는 법
        //for(;;){}
        //while(true){}

        //1부터 100까지의 3의 배수만 출력
        for (int i = 1; i < 100; i++) {
            if (i % 3 == 0) {
                System.out.println("i = " + i);
            }
        }

        //런타임 디버깅 사용법
        //*반복문에서 코드의 흐름을 파악하거나, 변수의 값을
        //확인하는 용도로 사용.
        //*print문만으로 전체 맥락을 파악하기 어려울때 사용.
        //실행 > 디버그 (Shift + F9) 기능 이용
        //Break Point(중단점)을 설정한다. CTRL + F8
        //스텝오버(F8) : 다음 줄로 이동
        //스텝인투(F7) : 함수 안으로 이동
        //다시시작(F9) : 계속해서 진행(Resume)
        //스텝아웃(SHIFT+F8) : 함수 밖으로 이동

    }
}
