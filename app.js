const countryEl = document.querySelector('.country');
const searchEl = document.querySelector('.search');



async function loadData (){
    const url = 'https://restcountries.eu/rest/v2/all';
    const response = await fetch(url);
    const data = await response.json();
    
    data.forEach(element => {
        const {name, capital, flag, callingCodes,
            region, population} = element;
        const card = `
        
        <div class="col-4">   
         <div class="card py-2 hover">
                    <img src=${flag} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title country-name">${name}</h4>

                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Capital:</strong> ${capital}</li>
                        <li class="list-group-item"><strong>Call codes:</strong> + ${callingCodes}</li>
                        <li class="list-group-item"><strong>Region:</strong> ${region}</li>
                        
                        <li class="list-group-item"><strong>Population:</strong> ${population}</li>
                        
                    </ul>
                    
                </div
                </div> 
        
        `
        countryEl.innerHTML += card;



        searchEl.addEventListener('keyup', findCountry)
        
//search 
function findCountry(e){
    
    e.preventDefault();
    const textInput = e.target.value.toLowerCase();
    
    document.querySelectorAll('.country-name').forEach(
        function(items){
            const item = items.firstChild.textContent;
            if(item.toLowerCase().indexOf(textInput) != -1){
                items.style.display = 'block';
            }
            
             else {
                items.parentElement.parentElement.parentElement.style.display = 'none';
            }
        }
    )
}
        
    });
    
}

loadData();

