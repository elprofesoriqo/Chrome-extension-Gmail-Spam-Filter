function classifyEmails() {
  const emails = document.querySelectorAll(".zA"); // Wszystkie maile w Gmailu

  emails.forEach(email => {
    const subject = email.querySelector(".bog").innerText;
    const snippet = email.querySelector(".y2").innerText;

    const emailContent = subject + " " + snippet;

    fetch('http://localhost:8000/classify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: emailContent })
    })
    .then(response => response.json())
    .then(data => {
      if (data.isSpam) {
        email.querySelector(".checkbox").click();
        document.querySelector("[data-tooltip='Zgłoś jako spam']").click();
      }
    })
    .catch(error => console.error('Błąd:', error));
  });
}

window.onload = classifyEmails;
