package 연습문제;

import java.util.Scanner;

public class Problem31 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int score  = sc.nextInt();

        if(score >= 90 && score <= 100){
            System.out.print('A');
        }else if(score >= 70 && score < 89){
            System.out.print('B');
        }else if(score >= 40 && score < 69){
            System.out.print('C');
        }else if(score >= 0 && score < 39){
            System.out.print('D');
        }
    }
}
