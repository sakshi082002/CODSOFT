import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class gc {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Multi-Student Grade Calculator");

        System.out.print("Enter the number of students: ");
        int numberOfStudents = scanner.nextInt();

        for (int studentIndex = 1; studentIndex <= numberOfStudents; studentIndex++) {
            System.out.println("\nStudent " + studentIndex + ":");

            System.out.print("Enter the student's name: ");
            scanner.nextLine();  // Consume the newline character
            String studentName = scanner.nextLine();

            System.out.print("Enter the number of subjects for " + studentName + ": ");
            int numberOfSubjects = scanner.nextInt();

            // Input subject names and marks
            Map<String, Integer> subjectMarks = new HashMap<>();
            for (int subjectIndex = 1; subjectIndex <= numberOfSubjects; subjectIndex++) {
                System.out.print("Enter the name of Subject " + subjectIndex + ": ");
                scanner.nextLine();  // Consume the newline character
                String subjectName = scanner.nextLine();

                System.out.print("Enter marks for " + subjectName + " (out of 100): ");
                int marks = scanner.nextInt();
                subjectMarks.put(subjectName, marks);
            }

            // Calculate total marks and average percentage
            int totalMarks = subjectMarks.values().stream().mapToInt(Integer::intValue).sum();
            double averagePercentage = (double) totalMarks / numberOfSubjects;

            // Calculate grade
            String grade = calculateGrade(averagePercentage);

            // Display results
            System.out.println("\nResults for " + studentName + ":");
            System.out.println("Total Marks: " + totalMarks);
            System.out.println("Average Percentage: " + averagePercentage + "%");
            System.out.println("Grade: " + grade);
            System.out.println("Remarks: " + getRemarks(grade));
        }

        scanner.close();
    }

    // Grade calculation based on average percentage
    private static String calculateGrade(double averagePercentage) {
        if (averagePercentage >= 90) {
            return "A+";
        } else if (averagePercentage >= 80) {
            return "A";
        } else if (averagePercentage >= 70) {
            return "B";
        } else if (averagePercentage >= 60) {
            return "C";
        } else if (averagePercentage >= 50) {
            return "D";
        } else {
            return "F";
        }
    }

    // Provide remarks based on grade
    private static String getRemarks(String grade) {
        switch (grade) {
            case "A+":
                return "Excellent! Keep up the good work.";
            case "A":
                return "Well done! Your performance is impressive.";
            case "B":
                return "Good job! You are above average.";
            case "C":
                return "Satisfactory. There is room for improvement.";
            case "D":
                return "You passed, but consider working harder for better results.";
            default:
                return "Unfortunately, you failed. Seek help and try again.";
        }
    }
}
