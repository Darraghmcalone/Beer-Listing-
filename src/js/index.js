// Import stylesheets

import axios from 'axios';
import Beer from './Beer';
import Pickabeer from './Pickabeer';


//Get Api
axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=6')
  .then(response => {
    //beers -> array with all the beer objects
    const beers = response.data;

    //singleBeer is how we can refer to each member of the array as we loop through it

    //for each beer in our array, collect specific data

    //function collectData()
    //input -> singleBeer
    //narrows down all that data, feeds it our class
    //output -> a beer object created by our Beer class
    for (let singleBeer of beers) {
      
      let beer = collectData(singleBeer);
      
      beer.addToPage();
    }
    const firstBeer = response.data;
    console.log(beer);
  });

  function collectData(singleBeer) {
    const name = singleBeer.name;
      const description = singleBeer.description;
      const tagline = singleBeer.tagline;
      const imageUrl = singleBeer.image_url;
      const abv = singleBeer.abv;
      const ibu = singleBeer.ibu;
      const ph = singleBeer.ph;

      let beer = new Beer(name, description, tagline, imageUrl, abv, ibu, ph);
      return beer
  }
//console.log(beer.collectData());

//$('button').on('click', handler)


document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function(event) {
    const page = event.target.id;
    console.log(page);
  })
});

/*document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(event) {
      
    	const page = event.listener.id;
axios.get('https://api.punkapi.com/v2/beers?page=' + page + '&per_page=6')

                .then(response => {
                //put response data in const variable
                const beers = response.data;
             document.getElementById('find').innerHTML = "";   

                
            for(let singleBeer of beers) {
                
                let beer = collectData(singleBeer);
              
                beer.addToPage();
            }
            const firstBeer = response.data;
        });
            console.log(page);
            //clear previous html div
            
            //get random beer from JSON
            

});
});
*/
 
/*import axios from 'axios'
import Beer from './Beer'

//$.ajax()
axios.get('https://api.punkapi.com/v2/beers')
  //done()
  .then(function (response) {
    const name = response.data[0].name;
    const description = response.data[0].description;
  
    const container = document.getElementById('beer');

    /*let beer = 
`<div class="beer">
   <h1>${name}</h1>
   <p>${description}</p>
</div>`;
  container.innerHTML = beer;
  */
/*
const beers = response.data
for(let singleBeer of beers){
	const name = singleBeer.name;
	const description = singleBeer.name;
	const name = singleBeer.name;
	const name = singleBeer.name;
	const name = singleBeer.name;

let beer = new beer(name, description);

}

beer.addToPage();




  let beer = document.createElement('div');
  beer.className = 'beer';
  beer.setAttribute("class", "beer");
  let img = document.createElement('img');
  img.setAttribute('src', "https://images.punkapi.com/v2/keg.png");
  let nameElement = document.createElement('h1');
  nameElement.innerText = name;
  
  let descriptionElement = document.createElement('p');
  descriptionElement.innerText = description
  
  beer.appendChild(nameElement);
  beer.appendChild(descriptionElement);
  beer.appendChild(img);
  
  container.appendChild(beer);
  console.log(beer);

  })
  //fail()
  .catch(function (error) {
    console.log(error);
  });
*/

