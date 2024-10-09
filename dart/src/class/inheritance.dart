void main(List<String> args) {
  var sa = SavingsAccount();
  sa.deposit(1000);
  sa.interestRate = .5;
  sa.addInterest();
  // sa.withdraw(100);
  print('Balance: ${sa.balance}');
}
// Inheritance is a mechanism in which one class acquires the properties and
//behavior of another class. The class that inherits the properties and behavior is known as the subclass or derived class,
// and the class whose properties and behavior are inherited is known as the superclass or base class.

class BankAccount {
  double _balance = 0;
  double get balance => _balance;
  BankAccount({double balance = 0.0}) : _balance = balance;
  void withdraw(double amount) {
    if (_balance >= amount) {
      _balance -= amount;
      print('Withdrawn $amount');
    } else {
      print('Insufficient balance');
    }
  }

  void deposit(double amount) {
    _balance += amount;
    print('Deposited $amount');
  }
}

class SavingsAccount extends BankAccount {
  double _interestRate = 0.0;
  double get interestRate => _interestRate;
  SavingsAccount({double interestRate = 0.0, double balance = 0.0})
      : _interestRate = interestRate,
        super(balance: balance);

  set interestRate(double rate) {
    if (rate >= 0) {
      _interestRate = rate;
    } else {
      throw Exception('Interest rate cannot be negative');
    }
  }

  void addInterest() {
    double interest = balance * _interestRate / 100;
    deposit(interest);
    print('Added interest of $interest');
  }
}
