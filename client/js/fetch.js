fetch("https://formsubmit.co/ajax/c86b94af37fcb95bef812b2190ad4d5a", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: "FormSubmit",
        email: 'John@johndoe.com',
        message: "I'm from Devro LABS"
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));