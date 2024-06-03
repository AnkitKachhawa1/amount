<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Amount</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="payment-container">
    <h1>Payment Amount</h1>
    <p id="payment-amount"></p>
    <a href="#" id="pay-link" target="_blank">Pay Here</a>
  </div>
  <script>
    function getPaymentAmount() {
      const urlParams = new URLSearchParams(window.location.search);
      const paymentAmount = urlParams.get('amount');
      return paymentAmount;
    }

    function displayPaymentAmount(amount) {
      const paymentAmountElement = document.getElementById('payment-amount');
      if (amount) {
        paymentAmountElement.textContent = `Your payment amount is $${amount}`;
      } else {
        paymentAmountElement.textContent = 'No payment amount specified.';
      }
    }

    function generatePaymentLink(amount) {
      const baseUrl = "upi://pay?pa=9510074375@UPI&pn=ANKIT&cu=INR&am=";
      const paymentLink = baseUrl + amount;
      const payLinkElement = document.getElementById('pay-link');
      payLinkElement.href = paymentLink;
    }

    const paymentAmount = getPaymentAmount();
    displayPaymentAmount(paymentAmount);
    generatePaymentLink(paymentAmount);
  </script>
</body>
</html>
