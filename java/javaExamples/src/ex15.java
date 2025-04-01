public class ex15 {
    public static void main(String[] args) {
        // 이중반복문
        // 일차반복문 = 일차배열
        // 이중반복문 = 이차배열
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.println(i + "," + j);
            }
        }
        int[][] nums = {{1, 2}, {3, 4}};
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.println(nums[i][j]);
            }
        }

        //별찍기
        //*****
        //*****
        //*****
        //*****
        //*****
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        //출력예)
        //     *
        //    **
        //   ***
        //  ****
        // *****

        for (int i = 1; i < 6 ; i++) {
            for (int j = 5; j > i ; j--) {
                System.out.print(" ");
            }
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        //출력 예)
        //******* 7
        //*    ** 별1 공백4 별1 공백0 별1
        //*   * * 별1 공백3 별1 공백1 별1
        //*  *  * 별1 공백2 별1 공백2 별1
        //* *   * 별1 공백1 별1 공백3 별1
        //**    * 별1 공백0 별1 공백4 별1
        //******* 별7
        System.out.println("*******");
        for (int i = 1; i < 6; i++) {
            String star = "*";
            for (int j = 1; j < 6; j++) {
                if ((6-i) == j){
                    star += "*";
                }
                else {
                    star += " ";
                }
            }
            star += "*";
            System.out.println(star);
        }
        System.out.println("*******");
    }
}
