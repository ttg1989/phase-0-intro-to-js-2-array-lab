const cats = ["Milo", "Otis", "Garfield"];
cats();
destructivelyAppendCat("Ralph");
cats();
destructivelyPrependCat("Bob");
cats();
appendCat("Broom");
cats();
removeLastCat();
cats();
removeFirstCat();

function destructivelyAppendCat(name) // Add a cat to the end of the cats array (destructive)
{
    cats.push(name);
}

function destructivelyPrependCat(name) // Add a cat to the beginning of the cats array (destructive)
{
    cats.unshift(name);
}

function destructivelyRemoveLastCat() // Remove last cat from the cats array (destructive)
{
    cats.pop();
}

function destructivelyRemoveFirstCat() // Remove first cat from the cats array (destructive)
{
    cats.shift();
}

function appendCat(name) // Return cats array with a new cat added to the end.
{
    const newCat = [...cats, name];
    return newCat;
}

function prependCat(name) // Return cats array with a new cat added to the beginning.
{
    const newCat = [name, ...cats];
    return newCat;
}


function removeLastCat() // Return cats array with last element removed.
{
    const newCat = cats.slice(0,2)
    return newCat;
}

function removeFirstCat() // Return cats array with first element removed.
{
    const newCat = cats.slice(-2,cats.length)
    return newCat;
}



