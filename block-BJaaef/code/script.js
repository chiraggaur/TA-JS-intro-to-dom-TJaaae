let ul = document.querySelector('ul');
got.houses.forEach((house) => {
    let li = document.createElement('li');
    let h2 = document.createElement('h2');
       house.people.forEach((elm) => 
         h2.innertext =  elm.name
         console.log(h2));
    let p = document.createElement('p');
    let img = document.createElement('img');
    ul.append(h2);
})