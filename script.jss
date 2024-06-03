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

function openPaymentLink(amount) {
  const baseUrl = "upi://pay?pa=9510074375@UPI&pn=ANKIT&cu=INR&am=";
  const paymentLink = baseUrl + amount;
  window.open(paymentLink, '_self');
}

const paymentAmount = getPaymentAmount();
displayPaymentAmount(paymentAmount);

const payLinkElement = document.getElementById('pay-link');
payLinkElement.addEventListener('click', () => {
  if (paymentAmount) {
    openPaymentLink(paymentAmount);
  } else {
    alert('No payment amount specified.');
  }
});
