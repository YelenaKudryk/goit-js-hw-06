const refs = {
    amountCategories: document.querySelectorAll('.item'),
    }
    
console.log(`Number of categories: `, refs.amountCategories.length);

refs.amountCategories.forEach(element => {
    console.log(`Category: `, element.firstElementChild.textContent);
    console.log(`Elements: `, element.querySelectorAll('li').length)
});
