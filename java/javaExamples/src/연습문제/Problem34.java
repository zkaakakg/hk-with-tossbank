package 연습문제;

import java.util.Scanner;

public class Problem34 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while(true){
            int n = sc.nextInt();

            if(n == 0){
                System.out.println(0);
                break;
            }
            System.out.println(n);
        }
    }
}
