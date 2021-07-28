//Add event listeners to capture form data and override a form's default behavior    
//Fetch data based on what the user types into that form
//Display that data on the page
const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');

        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => {
                //display retrieved data on page from server
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');
                //Changing the name of title/summary based of the retrieved data
                title.innerText = data.title;
                summary.innerText = data.summary;
            });
    });
}

document.addEventListener('DOMContentLoaded', init);