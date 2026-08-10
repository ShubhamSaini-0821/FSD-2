  function showBill() {

            const rows = document.querySelectorAll("table tr");
            let total = 0;

            let output = "<h2>Your Bill</h2>";

            for (let i = 1; i < rows.length; i++) {

                let checkbox = rows[i].querySelector(".purchase");
                let quantity = rows[i].querySelector(".qty").value;

                if (checkbox.checked) {

                    if (quantity === "" || quantity <= 0) {
                        alert("Please enter quantity.");
                        return;
                    }

                    let name = rows[i].cells[1].innerText;
                    let price = Number(rows[i].cells[2].innerText);

                    let amount = price * quantity;

                    total += amount;

                    output += `
                    <p>
                        ${name}
                        (${quantity}) × ₹${price}
                        = ₹${amount}
                    </p>`;
                }
            }

            output += `<hr><h3>Total Bill = ₹${total}</h3>`;

            const bill = document.getElementById("bill");
            bill.innerHTML = output;
            bill.style.display = "block";
        }