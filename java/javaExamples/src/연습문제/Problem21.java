package 연습문제;

import java.util.Scanner;

public class Problem21 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int pow = (int) Math.pow(2,b);
        int k  = a * pow;

        System.out.print(k);
    }
}
