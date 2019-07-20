document.querySelector('.dropdown').addEventListener('click', event => {
    event.target.style.visibility= 'hidden';
    document.querySelector('.dropdownMenu').style.visibility= 'visible';
    })
    document.querySelector('.dropdownMenu').addEventListener('click', event =>{
        document.querySelector('.dropdownMenu').style.visibility = 'hidden';
        document.querySelector('.dropdown').style.visibility ="visible";

    })
    
    document.querySelector('.enlaceContainer').addEventListener('click', event => {
        event.target.childNodes.click();
    })