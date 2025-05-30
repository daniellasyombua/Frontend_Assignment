// // You are building a system that sends email reminders to users 5 seconds after they register. 
// // Create an async function sendReminder(email) that waits 5 seconds using setTimeout and 
// // then logs "Reminder sent to [email]". Simulate sending a reminder to 3 users.

// Pseudocode
// 1. Create an async funtion sendReminder that takes in an email as a parameter.
// 1. Write a promise that only resolves and takes in the interval in milliseconds.
// 3. Initialize a variable that holds a dictionary of users.
// 4. Loop over the dictionary sending the reminder to each of the emils one by one.
// 5. After the reminders have been sent to all three users, terminate the loop by sending a messsage of completion.
// 6. Call the function





async function sendReminder(email){
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(`Reminder sent to ${email}`);
    
};

    async function sendAllReminders(){
        const users = {
            user1:"syombuadaniela@gmail.com",
            user2:"wandiahellen@gmail.com",
            user3:"shoogeremy@gmail.com"
        };

    for(const key in users){
        await sendReminder(users[key])
    }
    console.log("All reminders sent");


};
sendAllReminders();


// // You want to simulate a login system that tries to log in a user. The first two attempts fail, but the third succeeds. 
// // Write a function tryLogin() that uses a counter and Promises. Use setTimeout to simulate a 1-second delay between attempts. 
// // Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.

// Pseudocode
// 1. Create a function tryLogin() that uses a counter and Promises in an attemptLogin function.
// 2. Initialize a variable counter that begins at 0.
// 3. Simulate a 1-second delay between each of the 3 attempts.
// 4. Create a function runAttempts() that allows for the message to be displayed if the promise is resolved after three attempts then terminates and displays the error.
// 5. Call the function


function tryLogin() {
    let attempt = 0;
  
    function attemptLogin() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          attempt++;
          console.log(`Attempt ${attempt}: Logging in...`);
  
          if (attempt === 3) {
            resolve("Login successful");
          } else if (attempt < 3) {
            reject("Login failed");
          }
        }, 1000);
      });
    }
  
    function runAttempts() {
      attemptLogin()
        .then((message) => console.log(message))
        .catch(() => {
          if (attempt < 3) {
            runAttempts(); 
          } else {
            console.log("Login failed after 3 attempts");
          }
        });
    }
  
    runAttempts();
  }
  
  tryLogin();
  


// // Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval. 
// // When the countdown reaches 0, stop the interval and log "Time's up!".

// Pseudocode
// 1. Create a function startCountdown()
// 2. Initialize a counter variable that begins at 5.
// 3. Create a setInterval that diplays one number per second and when the counter reaches 0, stops and logs "Time's up"
// 4. Call the function

function startCountdown() {
    let count = 5;
  
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval);
        console.log("Time's up!");
      } else {
        console.log(count);
        count--;
      }
    }, 1000);
  }
  
  startCountdown();


// // You are simulating a page that loads data in stages. 
// // Create an async function called loadPage() that: logs "Loading header...", waits 1 second; 
// // logs "Loading content...", waits 2 seconds; logs "Loading footer...", waits 1 second; and finally logs "Page fully loaded". 
// // Use setTimeout inside Promises and await them in sequence.

// Pseudocode
// 1. Create an async function called loadPage() that takes in the intervals as parameters,
//  logs "Loading header...", waits 1 second;  logs "Loading content...", waits 2 seconds; 
// logs "Loading footer...", waits 1 second; and finally logs "Page fully loaded".
// 2. Call the function

function wait(seconds) {
    return new Promise(resolve => setTimeout(resolve,seconds));
  }
  
  async function loadPage() {
    console.log("Loading header...");
    
  
    console.log("Loading content...");
    await wait(1000); 
  
    console.log("Loading footer...");
    await wait(2000); 
  
    console.log("Page fully loaded");
    await wait(1000); 
  }
  
  loadPage();


// // You are simulating fetching stock prices with delays. 
// // Write a function fetchPrice(symbol) that returns a Promise 
// // which resolves after 2 seconds with the message "Price for [symbol] retrieved". 
// // Use async/await to call it for two different stocks ("AAPL" and "GOOG") 
// // and log the messages in order.

// Pseudocode

// 1. Create a function fetchPrice() that takes in a symbol as parameter and returns a Promise which resolves after 2 seconds with the message "Price for [symbol] retrieved".
// 2. Create an async function fetchStockPrices that logs the messages
// 3. Initialize two variables in the function that hold the fetchPrice function await 
// 4. Call the function

function fetchPrice(symbol) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Price for ${symbol} retrieved`);
      }, 2000);
    });
  }
  
  async function fetchStockPrices() {
    const aaplPrice = await fetchPrice("AAPL");
    console.log(aaplPrice);
  
    const googPrice = await fetchPrice("GOOG");
    console.log(googPrice);
  }
  
  fetchStockPrices();


