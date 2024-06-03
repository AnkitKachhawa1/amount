const paymentInput = document.getElementById('payment-input');
const processBtn = document.getElementById('process-btn');

processBtn.addEventListener('click', () => {
  const paymentAmount = paymentInput.value;
  if (paymentAmount) {
    window.location.href = `amount.html?amount=${paymentAmount}`;
  } else {
    alert('Please enter a payment amount.');
  }
});
