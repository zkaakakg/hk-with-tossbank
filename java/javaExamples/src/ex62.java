public class ex62 {
    public static void main(String[] args) {
        //재귀함수로 팩토리얼을 구현해보자
        //5! = 5*4*3*2*!
        //형식 : int result = factorial(n);
        int n = 5;
        int result = factorial(n);
        System.out.println("factorial:" + result);

        //연습문제 1
        //1부터 N까지의 합계를 출력하시오.
        // int n = 5;
        // sum( n )을 호출하면, 5+4+3+2+1 까지의 합이 반환된다.
        System.out.println("sum:" + sum(n));

        //연습문제 2
        // 십진정수를 2진수로 변환하여 출력하시오.
        // printBin( int n )
        // printBin( 10 ) 호출시, 1010으로 출력됨.
        //   2 )  10
        //         5 - 0
        //         2 - 1
        //         1 - 0
        System.out.print("printBin:");
        printBin(10);
        System.out.println();

        //연습문제 3
        // 문자열을 역으로 출력하기
        // 예) "abcde" => "edcba"
        String str = "abcde";
        System.out.print("문자열 역으로 출력:");
        reverse(str, str.length()-1);


    }

    static int factorial(int n) {
        //탈출조건
        if (n == 1) {
            System.out.println("n:1");
            return 1;
        }
        System.out.println("n:" + n);
        System.out.println("n-1:" + (n - 1));
        return n * factorial(n - 1);
    }

    static int sum(int n) {
        if (n == 1) {
            return 1;
        }
        return n + sum(n - 1);
    }

    static void printBin(int n) {
        if (n == 0) {
            return;
        }
        printBin(n / 2); // 먼저 재귀 호출 (큰 자리수를 먼저 출력)
        System.out.print(n % 2); // 이후 현재 자리수를 출력
    }

    static void reverse(String str,int index){
        if(index < 0){
            return;
        }
        System.out.print(str.charAt(index));
        reverse(str, index-1);
    }
}
