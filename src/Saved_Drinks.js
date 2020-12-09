/* Spara drinkar som favoriter i en array beroende på om hjärtat är ifyllt eller ej */


function saveStorage(data){
    // Saving to storage
    //console.log('Saving data');
    //console.log(data);
    window.localStorage.setItem('data', JSON.stringify(data));
    
}

function getStorage() {
    
    if (!window.localStorage.hasOwnProperty('data')){
        const initialState = [];
        saveStorage(initialState);
    }
    const retreivedObject = JSON.parse(window.localStorage.getItem('data'));

    return retreivedObject;
}

export function saveDrink(id){

    //Array med sparade drinkar
    const savedDrinks = getStorage();

    //filtrera listan, spara endast exakta matchningar
    //console.log(savedDrinks);
    //console.log(savedDrinks.filter(currentId=>currentId === id).length);
    const alreadySaved = savedDrinks.filter(currentId=>currentId === id).length ? true : false;

    if(alreadySaved){
        //console.log("removing");
        const newState = savedDrinks.filter(currentId=> currentId !== id);
        //console.log(newState);
        saveStorage(newState);
    }

    else{
        //console.log("adding");
        const newState = savedDrinks;
        newState.push(id);
        saveStorage(newState);
    }

    //console.log(getStorage())
    
}

export function getDrinks(){
    return getStorage();
}