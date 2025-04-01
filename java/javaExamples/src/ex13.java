public class ex13 {
    public static void main(String[] args) {
        //조건문 switch문
        //*자바스크립트와 거의 유사
        int a = 10;
        switch (a){
            case 10:
                System.out.println("10입니다");
                break;
            case 20:
                System.out.println("20입니다");
                break;
            default:
                System.out.println("그외의 경우");
                break;
        }

        //jdk 8(1.8) 주로 대세
        //jdk 11, 17, 21, 24
        //개발 환경과 배포환경이 다르다
        // -> 도커(docker) : 외부 환경변수에 따르지 않다.
        int month = 3;
        switch (month){
            case 3, 4, 5: //java 14버전부터 가능
                break;
            case 6, 7, 8:
                break;
            case 9, 10, 11:
                break;
            case 12, 1, 2:
                break;
        }
    }
}
