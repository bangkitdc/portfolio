var frm = $('#testform');

frm.submit(function (e) {
    
    e.preventDefault();

    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/c86b94af37fcb95bef812b2190ad4d5a',
        dataType: 'json',
        accepts: 'application/json',
        data: frm.serialize(),
        success: (data) => console.log(data),
        error: (err) => console.log(err)
    });
    return false;
});