let ul = document.querySelector('ul');
let house = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
},[]);

 let html = house.map((details) => {
    return (      `<li class = "Lists">
    <div class = "Box">
    <img
     src = ${details.image}
     alt = ${details.name}
    /> 
    <span>
    <h2>
    ${details.name}
    </h2>
     <span>
    </div>
    <p>
    ${details.description}
    </p>
    <button  class = "Learn"  > <a href = "${details.wikiLink}">Learn More! </a> </button>
    </li>`);
  
    

    
});
   ul.innerHTML = html.join('');