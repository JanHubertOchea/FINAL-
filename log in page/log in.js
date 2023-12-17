document.addEventListener('DOMContentLoaded',function(){
    const logAcctpage = document.querySelector(".box");
    const createAcctpage = document.querySelector(".box1");

    document.getElementById('logAcct').addEventListener('click',function (){
        logAcctpage.style.display = 'block';
        createAcctpage.style.display = 'none';
    });

    document.getElementById('createAcct').addEventListener('click',function (){
        logAcctpage.style.display = 'none';
        createAcctpage.style.display = 'block';
    });
});




document.getElementById('SignIn').addEventListener('click', function () {
    const payr = parseInt(document.getElementsByClassName('inputBXx').value);

    if (pay) {
        alert('PLEASE FILL OUT THE FORM  :(')
    } else {
        alert('Account Created!')
    }
});

