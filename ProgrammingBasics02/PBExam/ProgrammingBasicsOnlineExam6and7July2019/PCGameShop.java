package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class PCGameShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int hearthstone = 0;
        int fornite = 0;
        int overwatch = 0;
        int others = 0;

        for (int i = 1; i <= n; i++) {
            String gameName = scanner.nextLine().toLowerCase();
            switch (gameName) {
                case "hearthstone":
                    hearthstone++;
                    break;
                case "fornite":
                    fornite++;
                    break;
                case "overwatch":
                    overwatch++;
                    break;
                default:
                    others++;
                    break;
            }
        }
        System.out.printf("Hearthstone - %.2f%%%n", hearthstone * 1.0 / n * 100.0);
        System.out.printf("Fornite - %.2f%%%n", fornite * 1.0 / n * 100.0);
        System.out.printf("Overwatch - %.2f%%%n", overwatch * 1.0 / n * 100.0);
        System.out.printf("Others - %.2f%%%n", others * 1.0 / n * 100.0);
    }
}
