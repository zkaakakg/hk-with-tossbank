package 연습문제;

import java.util.Scanner;

public class Problem29 {
    public static void solution(int x){
        if(x % 2 == 0){
            System.out.println("even");
        }else{
            System.out.println("odd");
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        solution(a);
        solution(b);
        solution(c);
    }
}
