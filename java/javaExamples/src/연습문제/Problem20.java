package 연습문제;

import java.util.Scanner;

public class Problem20 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int sum = a + b + c;
        float avg = sum / 3;
        System.out.println(sum);
        System.out.println(avg);
    }
}
