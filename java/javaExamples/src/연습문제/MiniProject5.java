package 연습문제;

import java.util.ArrayList;
import java.util.Scanner;

class Student {
    String name;
    int koScore;
    int enScore;
    int mathScore;

    public Student(String name, int koScore, int enScore, int mathScore) {
        this.name = name;
        this.koScore = koScore;
        this.enScore = enScore;
        this.mathScore = mathScore;
    }
}

public class MiniProject5 {

    public static void main(String[] args) {
        ArrayList<Student> list = new ArrayList<>();
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println();
            System.out.println("-----------성적 관리 프로그램-------------");
            System.out.print("1.입력 2.전체출력 3.검색 4.수정 5.삭제 6.종료");
            int input = sc.nextInt();

            if (input == 1) {
                System.out.print("이름 입력 : ");
                String name = sc.next();
                System.out.print("국어점수 입력 : ");
                int koScore = sc.nextInt();
                System.out.print("영어점수 입력 : ");
                int enScore = sc.nextInt();
                System.out.print("수학점수 입력 : ");
                int mathScore = sc.nextInt();
                list.add(new Student(name, koScore, enScore, mathScore));
            } else if (input == 2) {
                for (Student student : list) {
                    System.out.print(" 이름: " + student.name);
                    System.out.print(" 국어: " + student.koScore);
                    System.out.print(" 영어: " + student.enScore);
                    System.out.print(" 수학: " + student.mathScore);
                    int sum = student.koScore + student.enScore + student.mathScore;
                    double avr = sum / 3.0;
                    System.out.print(" 총점: " + sum);
                    System.out.print(" 평균: " + avr);
                    System.out.println();
                }
            } else if (input == 3) {
                System.out.print("검색할 사람의 이름 : ");
                String name = sc.next();
                for (Student student : list) {
                    if (student.name.equals(name)) {
                        System.out.print(" 이름: " + student.name);
                        System.out.print(" 국어: " + student.koScore);
                        System.out.print(" 영어: " + student.enScore);
                        System.out.print(" 수학: " + student.mathScore);
                        int sum = student.koScore + student.enScore + student.mathScore;
                        double avr = sum / 3.0;
                        System.out.print(" 총점: " + sum);
                        System.out.print(" 평균: " + avr);
                    }
                }
            } else if (input == 4) {
                System.out.print("수정할 사람의 이름 : ");
                String name = sc.next();
                System.out.println();
                System.out.print("수정할 내용은? 1.국어 2.영어 3.수학");
                int select = sc.nextInt();
                for(Student student : list){
                    if(student.name.equals(name)){
                        if(select == 1){
                            System.out.print("국어점수 수정: ");
                            int updateScore = sc.nextInt();
                            student.koScore = updateScore;
                        }else if(select == 2){
                            System.out.print("영어점수 수정: ");
                            int updateScore = sc.nextInt();
                            student.enScore = updateScore;
                        } else if (select == 3) {
                            System.out.print("수학점수 수정: ");
                            int updateScore = sc.nextInt();
                            student.mathScore = updateScore;
                        }
                    }
                }
            }else if(input == 5){
                System.out.print("삭제할 사람의 이름 : ");
                String name = sc.next();
                int index = 0;
                for(Student student : list){
                    if(student.name.equals(name)){
                        list.remove(index);
                        break;
                    }
                    index++;
                }
            } else if (input == 6) {
                System.out.println("종료!!");
                break;
            }

        }
    }
}
