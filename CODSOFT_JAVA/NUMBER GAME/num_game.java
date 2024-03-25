import java.util.Random;
import java.util.Scanner;

public class num_game {
    public static void main(String[] args) {
        Random random = new Random();
        String userName = "";
        System.out.println("Welcome to the Enhanced Guess the Number game!");
        boolean playAgain = true;
        int totalAttempts = 0;
        int totalRounds = 0;
        int totalRoundsWon = 0;
        
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Enter your name: ");
            userName = scanner.nextLine();
            
            while (playAgain) {
                // Step 1: Generate a random number within the specified range
                int targetNumber = random.nextInt(100) + 1;
                int attempts = 0;
                boolean correctGuess = false;

                // Step 5: Limit the number of attempts
                System.out.print("Enter the maximum number of attempts for this round: ");
                int maxAttempts = scanner.nextInt();

                System.out.println("\nHello, " + userName + "! Round " + (totalRounds + 1) +
                        " - Try to guess the number between 1 and 100!");

                while (attempts < maxAttempts && !correctGuess) {
                    // Step 2: Prompt the user to enter their guess
                    System.out.print("Enter your guess: ");
                    int userGuess = scanner.nextInt();

                    // Step 3: Compare the user's guess and provide feedback
                    if (userGuess == targetNumber) {
                        System.out.println("Congratulations, " + userName + "! You guessed the correct number " +
                                targetNumber + " in " + (attempts + 1) + " attempts!");
                        correctGuess = true;
                        totalRoundsWon++;
                    } else if (userGuess < targetNumber) {
                        System.out.println("Too low! Try again.");
                    } else {
                        System.out.println("Too high! Try again.");
                    }

                    attempts++;
                }

                // Display the actual number at the end of the round
                System.out.println("The actual number was: " + targetNumber);

                // Update the total attempts and rounds
                totalAttempts += attempts;
                totalRounds++;

                // Compute the score based on user preference
                System.out.println("Select scoring option:");
                System.out.println("1. Based on the number of attempts taken");
                System.out.println("2. Based on rounds won");
                System.out.print("Enter your choice (1 or 2): ");
                int scoringOption = scanner.nextInt();

                // Display the user's score
                if (scoringOption == 1) {
                    int roundScore = Math.max(0, maxAttempts - attempts); // Ensure score is not negative
                    System.out.println("Score for " + userName + " in round " + totalRounds +
                            ": " + roundScore);
                } else if (scoringOption == 2) {
                    System.out.println("Score for " + userName + " in round " + totalRounds +
                            ": Rounds won - " + totalRoundsWon);
                }

                // Step 6: Ask the user if they want to play again
                System.out.print("Do you want to play again, " + userName + "? (yes/no): ");
                String playAgainInput = scanner.next().toLowerCase();
                playAgain = playAgainInput.equals("yes");
            }
        }

        // Display the final score after the game ends
        double averageAttemptsPerRound = totalRounds > 0 ? (double) totalAttempts / totalRounds : 0;
        int finalScore = (int) Math.max(0, totalRoundsWon * 100 - averageAttemptsPerRound * 10);
        System.out.println("\nGame Over, " + userName + "! You played " + totalRounds + " rounds with " +
                totalRoundsWon + " rounds won. Your final score is: " + finalScore);
    }
}
