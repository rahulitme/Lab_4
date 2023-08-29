document.addEventListener("DOMContentLoaded", function() {
    const appleQuantity = document.getElementById("appleQuantity");
    const orangeQuantity = document.getElementById("orangeQuantity");
    const bananaQuantity = document.getElementById("bananaQuantity");
    const submitButton = document.getElementById("submit");
    let totalCost = 0;
    appleQuantity.addEventListener("input", function() {
    updateTotalCost();
    });
    orangeQuantity.addEventListener("input", function() {
    updateTotalCost();
    });
    bananaQuantity.addEventListener("input", function() {
    updateTotalCost();
    });
    submitButton.addEventListener("click", function() {
    if (totalCost > 0) {
    const salesTax = 0.05;
    const totalWithTax = totalCost * (1 + salesTax);
    alert(`Your total cost is $${totalWithTax.toFixed(2)}`);
    } else {
    alert("Please select at least one fruit and enter its quantity.");
    }
    return false; // To prevent form submission
    });
   function updateTotalCost() {
    totalCost = 0;
    if (appleQuantity.value !== "") {
    totalCost += parseFloat(appleQuantity.value) * 0.59;
    }
    if (orangeQuantity.value !== "") {
    totalCost += parseFloat(orangeQuantity.value) * 0.49;
    }
    if (bananaQuantity.value !== "") {
    totalCost += parseFloat(bananaQuantity.value) * 0.39;
    }
    updateSubmitButtonState();
    }
}

