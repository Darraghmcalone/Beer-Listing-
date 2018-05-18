/*export default class beer.js
class Beer {
  constructor(name, tagline, description, boilVolume, hops, imageUrl, abv ) {
    this.name = name;
    this.hops = hops;
    this.imageUrl = imageUrl;
    this.abv = abv;
    this.description = description;
    this.tagline = tagline;
    this.boilVolume = boilVolume;
   
  }
  beerInfo() {
    return `${this.name} ${this.hops} ${this.imageUrl} ${this.abv} ${this.description} ${this.tagline} ${this.boilvolume} `; 
  }
  addTopage(){
    const container = document.getbyid('')
  }
}
*/
export default class Beer {
  constructor(name, description, tagline, imageUrl, abv, ibu, ph) {
    this.name = name;
    this.description = description;
    this.tagline = tagline;
    this.imageUrl = imageUrl;
    this.abv = abv;
    this.ibu = ibu;
    this.ph = ph;
  }
  addToPage() {
    //container is now a reference to our beerList container
    const container = document.querySelector('.beer-types');
    let box = document.querySelector('.beer-box');
    //this is our container for each beer
    let beer = document.createElement('div');
    beer.className = 'beer';
    //this will hold our actual image
    let img = document.createElement('img');
    img.setAttribute('src', this.imageUrl);
    //the beer title/beer name
    let nameElement = document.createElement('h1');
    nameElement.innerText = this.name;

    let descriptionElement = document.createElement('p');
    descriptionElement.innerText = this.description;

    let ABVlabel = document.createElement('h1');
    ABVlabel.innerText = "ABV";

    let abvElement = document.createElement('h1');
    abvElement.innerText = this.abv;

    let IBUlabel = document.createElement('h1');
    IBUlabel.innerText = "IBU";

    let ibuElement = document.createElement('h1');
    ibuElement.innerText = this.ibu;

    let phlabel = document.createElement('h1');
    phlabel.innerText = "pH";

    let phElement = document.createElement('h1');
    phElement.innerText = this.ph;




  
    //put our name, description and image into our div
    beer.appendChild(img);
    beer.appendChild(nameElement);
    beer.appendChild(descriptionElement);

    beer.appendChild(ABVlabel);
    beer.appendChild(abvElement);
    beer.appendChild(IBUlabel);
    beer.appendChild(ibuElement);
    beer.appendChild(phlabel);
    beer.appendChild(phElement);
    
    container.appendChild(beer);
  }

         appendRandomToPage() {
           const container = document.querySelector('.beer-types');
           let beerTempor = document.createElement('div');
              // beerTempor.setAttribute('class','beer');

           let imgElement = document.createElement('img');
               imgElement.setAttribute('src',this.imageUrl);

           let nameElement = document.createElement('h1');
               nameElement.innerText = this.name;

           let descriptionElement = document.createElement('p');
               descriptionElement.innerText = this.description;
           
           let abvElement = document.createElement('div');
        
               abvElement.innerText = this.abv;

           let ibuElement = document.createElement('div');
            
               ibuElement.innerText = this.ibu;
           
           let phElement = document.createElement('div');
             
               phElement.innerText = this.ph;

           console.log(beerTempor);
           beerTempor.appendChild(imgElement);
           beerTempor.appendChild(nameElement);
           beerTempor.appendChild(descriptionElement);
           beerTempor.appendChild(abvElement);
           beerTempor.appendChild(ibuElement);
           beerTempor.appendChild(phElement);
           console.log(phElement);

           container.appendChild(beerTempor);
           console.log(container);
       }
}