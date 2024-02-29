const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
    ];
    
    // 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
        const cheap = items.filter((item) => item.price < 200);
        console.log('the cheapest products are:',cheap);

    // 2. Filter and show the product that will be expensive in the array

    const exp = items.filter((item) => item.price > 500);
    console.log('the most expensive product is :',exp)

    // 3. Calculate the full price of all products combined
    const fullPrice = items.reduce((sum, item) => sum + item.price, 0);
    console.log("The total value of  all products is " + fullPrice);
    // 4. Calculate the full price of all products combined and remove products that are under $10
    const lessTen = items
    .filter(item  => item.price >= 10)
    .reduce((acc, item) => acc + item.price, 0)

    
    console.log('the full price of all products combined and remove products that are under $10', lessTen); 
  

    // 5. Filter and show the product that will be start with letter b at first postion

    const filteredItems = items.filter(item => item.name.startsWith('B'));
    console.log(filteredItems)