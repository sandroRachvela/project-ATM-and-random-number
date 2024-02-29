let userData = [
  { username: 'John', password: '123456', balance: 1000, transactions: [] },
  { username: 'Alice', password: 'abcdef', balance: 2000, transactions: [] },
  { username: 'Bob', password: 'password', balance: 1500, transactions: [] }
];

function findUser(username, password) {
  return userData.find(user => user.username.trim().toLowerCase() === username.trim().toLowerCase() && user.password === password);
}

function checkBalance(user) {
  return `Your balance is: $${user.balance}`;
}

function deposit(user, amount) {
  user.balance += amount;
  user.transactions.push(`Deposited $${amount}`);
  return 'Deposit successful';
}

function withdraw(user, amount) {
  if (user.balance >= amount) {
    user.balance -= amount;
    user.transactions.push(`Withdrawn $${amount}`);
    return 'Withdrawal successful';
  } else {
    return 'Insufficient funds';
  }
}

function changePassword(user, newPassword) {
  user.password = newPassword;
  return 'Password changed successfully';
}

function displayTransactions(user) {
  return user.transactions.join('\n');
}

function ATM() {
  let loggedInUser;

  while (true) {
    let username = prompt("Enter your username (type 'exit' to quit):");
    if (username.toLowerCase() === 'exit') break;

    let password = prompt("Enter your password:");
    let user = findUser(username, password);

    if (!user) {
      alert('Invalid credentials');
      continue;
    }

    loggedInUser = user;

    while (true) {
      let choice = prompt(`Welcome ${loggedInUser.username}!\nChoose an option:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Change Password\n5. View Transaction History\n6. Logout`);

      if (choice === '1') {
        alert(checkBalance(loggedInUser));
      } else if (choice === '2') {
        let amount = parseFloat(prompt("Enter the amount to deposit:"));
        alert(deposit(loggedInUser, amount));
      } else if (choice === '3') {
        let amount = parseFloat(prompt("Enter the amount to withdraw:"));
        alert(withdraw(loggedInUser, amount));
      } else if (choice === '4') {
        let newPassword = prompt("Enter your new password:");
        alert(changePassword(loggedInUser, newPassword));
      } else if (choice === '5') {
        alert(displayTransactions(loggedInUser));
      } else if (choice === '6') {
        loggedInUser = null;
        break;
      } else {
        alert("Invalid choice");
      }
    }
  }
}

ATM();

