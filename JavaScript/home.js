// console.log("Hello FIRST LOVE");

        //Add Money
        document.getElementById("add-money-btn").addEventListener("click", function (e) {
            e.preventDefault();
            const bank = document.getElementById("bank").value;
            const acountnumber = document.getElementById("account-number").value;
            const amount = parseInt(document.getElementById("add-amount").value);
            const pin = parseInt(document.getElementById("add-pin-number").value);

            if (acountnumber.length !== 11) {
                alert("Sothik number de");
                return;
            }
            if (pin !== 143) {
                alert("Ki re, pin vhule geli!")
                return;
            }
            const availablebalance = parseInt(document.getElementById("available-balance").innerText);
            const totalbalance = amount + availablebalance;
            document.getElementById("available-balance").innerText = totalbalance;
            addTransaction("Add Money", amount, totalbalance);
        });


        //cash out
        document.getElementById("withdraw-btn").addEventListener("click",function(e){
            e.preventDefault();
            const amount = parseInt(document.getElementById("withdraw-amount").value);

            const acountnumber = document.getElementById("cash-out-number").value;
            const pin = parseInt(document.getElementById("cash-out-pin-number").value);

            if (acountnumber.length !== 11) {
                alert("Sothik number de");
                return;
            }
            if (pin !== 143) {
                alert("Ki re, pin vhule geli!")
                return;
            }

            const availablebalance = parseInt(document.getElementById("available-balance").innerText);
            const totalbalance = availablebalance - amount;
            document.getElementById("available-balance").innerText = totalbalance;
            addTransaction("Cash Out", amount, totalbalance);
        });

        // Transfer Money 
        document.getElementById("transfer-money-btn").addEventListener("click",function(e){
            e.preventDefault();
            const amount = parseInt(document.getElementById("send-money").value);

            const acountnumber = document.getElementById("transfer-id-number").value;
            const pin = parseInt(document.getElementById("transfer-money-pin").value);

            if (acountnumber.length !== 11) {
                alert("Sothik number de");
                return;
            }
            if (pin !== 143) {
                alert("Ki re, pin vhule geli!")
                return;
            }

            const availablebalance = parseInt(document.getElementById("available-balance").innerText);
            const totalbalance = availablebalance - amount;
            document.getElementById("available-balance").innerText = totalbalance;
            addTransaction("Transfer Money", amount, totalbalance);
            alert("Transfer Money Successfully");
        });

        // Get Bonus
        document.getElementById("bonus-money-btn").addEventListener("click", function (e) {
            e.preventDefault();
            const coupon = document.getElementById("coupon-number").value.trim();

             if (coupon !== 'iloveyou') {
                alert("iloveyou bolo");
                return;
            }

            const availablebalance = parseInt(document.getElementById("available-balance").innerText);
            const totalbalance = availablebalance + 1;
            document.getElementById("available-balance").innerText = totalbalance;
            addTransaction("Bonus Added", 1, totalbalance);
            alert("Bonus added successfully 🎉");
        });

        // Pay bills
        document.getElementById("bill-money-btn").addEventListener("click", function (e) {
            e.preventDefault();
            const bank = document.getElementById("place").value;
            const acountnumber = document.getElementById("bill-account-number").value;
            const amount = parseInt(document.getElementById("bill-amount").value);
            const pin = parseInt(document.getElementById("bill-pin").value);

            if (acountnumber.length !== 11) {
                alert("Sothik number de");
                return;
            }
            if (pin !== 143) {
                alert("Ki re, pin vhule geli!")
                return;
            }
            const availablebalance = parseInt(document.getElementById("available-balance").innerText);
            const totalbalance = availablebalance - amount;
            document.getElementById("available-balance").innerText = totalbalance;
            addTransaction("Bill Payment", amount, totalbalance);
        });

        // Transaction Part
        // Store all transactions
        let transactions = [];

        // Helper to add transaction
        function addTransaction(type, amount, balance) {
            const date = new Date().toLocaleString();
            transactions.push({ type, amount, balance, date });

        }

        document.getElementById("transaction-money-button").addEventListener("click", function () {
        document.getElementById("transaction-money-parent").style.display = "block";
        document.getElementById("transfer-money-parent").style.display = "none";
        document.getElementById("cash-out-parent").style.display = "none";
        document.getElementById("add-money-parent").style.display = "none";
        document.getElementById("bonus-money-parent").style.display = "none";
        document.getElementById("pay-money-parent").style.display = "none";

        // Show transaction history
        const list = document.getElementById("transaction-list");
        list.innerHTML = ""; // clear old
        if (transactions.length === 0) {
            list.innerHTML = "<li>No transactions yet</li>";
            } else {
            transactions.forEach(t => {
                    const li = document.createElement("li");
                    li.textContent = `${t.date} - ${t.type}: $${t.amount} | Balance: $${t.balance}`;
                    list.appendChild(li);
                });
            }
        });


        // Logout button
        document.getElementById("logout-btn").addEventListener("click", function () {
        // Clear local/session storage if you store login data
        localStorage.clear();
        sessionStorage.clear();

        // Redirect to login page (change 'login.html' to your actual file)
        window.location.href = "index.html";
});


        //Toggle Section
        document.getElementById("add-money-button").addEventListener("click", function () {
            document.getElementById("cash-out-parent").style.display = "none";
            document.getElementById("add-money-parent").style.display = "block";
            document.getElementById("transfer-money-parent").style.display = "none";
            document.getElementById("bonus-money-parent").style.display = "none";
            document.getElementById("pay-money-parent").style.display = "none";
            document.getElementById("transaction-money-parent").style.display = "none";
        });
        document.getElementById("cash-out-button").addEventListener("click", function () {
            document.getElementById("add-money-parent").style.display = "none";
            document.getElementById("cash-out-parent").style.display = "block";
            document.getElementById("transfer-money-parent").style.display = "none";
            document.getElementById("bonus-money-parent").style.display = "none";
            document.getElementById("pay-money-parent").style.display = "none";
            document.getElementById("transaction-money-parent").style.display = "none";
        });
        document.getElementById("transfer-money-button").addEventListener("click", function () {
            document.getElementById("transfer-money-parent").style.display = "block";
            document.getElementById("cash-out-parent").style.display = "none";
            document.getElementById("add-money-parent").style.display = "none";
            document.getElementById("bonus-money-parent").style.display = "none";
            document.getElementById("pay-money-parent").style.display = "none";
            document.getElementById("transaction-money-parent").style.display = "none";
        });
        document.getElementById("bonus-money-button").addEventListener("click", function () {
            document.getElementById("transfer-money-parent").style.display = "none";
            document.getElementById("cash-out-parent").style.display = "none";
            document.getElementById("add-money-parent").style.display = "none";
            document.getElementById("bonus-money-parent").style.display = "block";
            document.getElementById("pay-money-parent").style.display = "none";
            document.getElementById("transaction-money-parent").style.display = "none";
        });
        document.getElementById("pay-money-button").addEventListener("click", function () {
            document.getElementById("transfer-money-parent").style.display = "none";
            document.getElementById("cash-out-parent").style.display = "none";
            document.getElementById("add-money-parent").style.display = "none";
            document.getElementById("bonus-money-parent").style.display = "none";
            document.getElementById("pay-money-parent").style.display = "block";
            document.getElementById("transaction-money-parent").style.display = "none";
        });
