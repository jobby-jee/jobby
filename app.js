ocument.getElementById('donation-form').addEventListener('submit', function(e) {
    const amount = document.getElementById('amount').value;

    if (amount <= 0) {
        alert('Please enter a valid donation amount.');
        e.preventDefault();
    }
});
