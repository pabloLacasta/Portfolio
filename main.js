document.querySelector('.dropdown').addEventListener('click', event => {
    event.target.style.display = 'block';
    document.querySelector('.dropdownMenu').style.display = 'block';
    // document.querySelector('.enlace').style.display ="block";
    })
    document.querySelector('.dropdownMenu').addEventListener('click', event =>{
        // document.querySelector('.enlace').style.display = "none";

        event.target.parentNode.style.display = "none";
        // event.target.parentNode.parentNode.style.display = "none";
        document.querySelector('.dropdown').style.display ="block";

    })

    document.querySelector('.enlace').addEventListener('click', event =>{
        // document.querySelector('.enlace').style.display = "none";

        event.target.parentNode.parentNode.style.display = "none";
        // event.target.parentNode.parentNode.style.display = "none";
        document.querySelector('.dropdown').style.display ="block";

    })