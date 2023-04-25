// 1. Change the title of the page to `Hello AltCampus!`
 //document.children[0].children[0].children[2].innerHTML = "Practicing DOM and Methods";

// 2. Select the element using the children property:

//    - Select the `h1` element and change the value to `Learning DOM`
   // document.children[0].children[1].children[0].innerHTML = "Learning DOM";

//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
   //  document.children[0].children[1].children[5].children[0].innerHTML = "all about document";

//    - Select the input element with name `email`
   // document.bosy.children[6].children[2].name;

// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`

    //   let ul = document.body.children[5];
    //   console.log(`The length of li elements is ${ul.children.length}`);
// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
     // doubt
    //  let emailInput = document.querySelector('input');
    //   console.log(emailInput);
// 5. Select the ul element using class selector and store in `topics`
      let topics = document.querySelector('.topics');
    //   console.log(topics);

// 6. Select the first label element and store in `label`
     // let label = document.querySelector('label');

// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
    // let inputCheckbox = document.querySelector('#remember');

// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
    // let password = document.querySelector(input[type="password"]);
// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`
    // doubt
//   let attribute = document.querySelector('input[placeholder="password"]');

// 10. Select all the `li` element and store in `allTopics`
    // document.querySelectorAll('li');

// 11. Select all the input element of any type and store in `allInput`
    //document.querySelectorAll('input');
// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
    // let allLi = document.querySelectorAll('li');
    // console.log(allLi.forEach((val) => console.log(val.innerHTML)));

// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
    //    let listOfSelectedTopics = document.querySelectorAll('.list');

// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
        // doubt
        // let firstLi = document.querySelector('ul>li'); 

// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
    //   let element = document.querySelectorAll('img').length;
    //   console.log(`The total number of img element is ${element}`); 

// 16. Select all the `p` element and store in `allPElement`
    //    let allPElement = document.querySelectorAll('p');

// 17. Select all the buttons and log the count of buttons.
    //    let buttonsCount = document.querySelectorAll('input[type="submit"]').length;
    //    console.log(buttonsCount);
// 18. Select all the `label` element and log the count.
    //  console.log(document.querySelectorAll('label').length);
// 19. Select all the elements with `id` of `test`
    //console.log(document.querySelectorAll('#test'));

// 20. Select the first element with id `test` using `getElementById`
     //document.getElementById('test');

// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
      //doubt
    //   console.log(topics.parentElement);

// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
    // console.log(topics.nextElementSibling);

// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.
    //   console.log(topics.previousElementSibling);

// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.
    //   console.log(topics.firstElementChild);
// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.
    //   console.log(topics.lastElementChild);
// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.
        let fieldsetElm = document.querySelector('fieldset');
// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
       console.log(typeof fieldsetElm.parentElement) ;