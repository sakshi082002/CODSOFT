import java.util.Scanner;

class BankAccount {
    private double balance;
    private final double MIN_BALANCE = 500;

    public BankAccount(double balance) {
        if (balance >= MIN_BALANCE) {
            this.balance = balance;
        } else {
            System.out.println("Initial balance must be at least $500. Setting balance to $500.");
            this.balance = MIN_BALANCE;
        }
    }

    public boolean deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        } else {
            System.out.println("Invalid deposit amount.");
            return false;
        }
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && (this.balance - amount) >= MIN_BALANCE) {
            this.balance -= amount;
            return true;
        } else {
            System.out.println("Invalid withdrawal amount or maintaining minimum balance.");
            return false;
        }
    }

    public double checkBalance() {
        return this.balance;
    }
}

public class ATM {
    private BankAccount userAccount;
    private Scanner scanner;

    public ATM(BankAccount userAccount) {
        this.userAccount = userAccount;
        this.scanner = new Scanner(System.in);
    }

    public void displayMenu() {
        System.out.println("ATM Menu:");
        System.out.println("1. Withdraw");
        System.out.println("2. Deposit");
        System.out.println("3. Check Balance");
        System.out.println("4. Exit");
    }

    public void run() {
        while (true) {
            displayMenu();
            System.out.print("Enter your choice (1-4): ");
            String choice = scanner.nextLine();

            switch (choice) {
                case "1":
                    performWithdrawal();
                    break;
                case "2":
                    performDeposit();
                    break;
                case "3":
                    displayBalance();
                    break;
                case "4":
                    exitATM();
                    return;
                default:
                    System.out.println("Invalid choice. Please enter a number between 1 and 4.");
            }
        }
    }

    private void performWithdrawal() {
        System.out.print("Enter the amount to withdraw: ");
        double amount = getValidAmountInput();
        if (userAccount.withdraw(amount)) {
            System.out.println("Withdrawal successful. Remaining balance: " + userAccount.checkBalance());
        } else {
            System.out.println("Withdrawal failed.");
        }
    }

    private void performDeposit() {
        System.out.print("Enter the amount to deposit: ");
        double amount = getValidAmountInput();
        if (userAccount.deposit(amount)) {
            System.out.println("Deposit successful. New balance: " + userAccount.checkBalance());
        } else {
            System.out.println("Deposit failed.");
        }
    }

    private void displayBalance() {
        System.out.println("Current balance: " + userAccount.checkBalance());
    }

    private double getValidAmountInput() {
        while (true) {
            try {
                double amount = Double.parseDouble(scanner.nextLine());
                if (amount > 0) {
                    return amount;
                } else {
                    System.out.println("Invalid amount. Please enter a positive value.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid number.");
            }
        }
    }

    private void exitATM() {
        System.out.println("Exiting ATM. Thank you!");
    }

    public static void main(String[] args) {
        BankAccount userAccount = new BankAccount(1000);  // Initial balance of $1000
        ATM atm = new ATM(userAccount);
        atm.run();
    }
}
