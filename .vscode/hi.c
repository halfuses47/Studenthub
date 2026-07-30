/*
Name: Jihan Patel
ID: 25ce079
Date: 30/08/2025
*/
#include <stdio.h>

int main() {
    int i, j;
    int rows = 6, cols = 7;  // Adjust size for "J"

    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            if (i == 0) {
                // Top row full stars
                printf("* ");
            }
            else if (i < rows - 2 && j == cols / 2) {
                // Vertical line in the middle
                printf("* ");
            }
            else if (i == rows - 2 && (j == 0 || j == cols / 2)) {
                // Second last row (left + middle)
                printf("* ");
            }
            else if (i == rows - 1 && (j == 0 || j == 1 || j == cols / 2 - 1 || j == cols / 2)) {
                // Bottom row (left curve + middle base)
                printf("* ");
            }
            else {
                printf("  ");
            }
        }
        printf("\n");
    }

    return 0;
}
