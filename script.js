let itemsArray = [];
let listItems = ''

onload = function () {

    if (localStorage.getItem('itemsArray') == null) {
        
    } else {
        itemsArray = localStorage.getItem('itemsArray').split(',');
    
        for (let i = 0; i < itemsArray.length; i++) {
            let e = itemsArray[i];
            listItems = listItems + `<li class="item">${e}</li>`;
        }
    
        document.getElementById('items').innerHTML = listItems;
    }

}

function add() {
    listItems = '';

    let item = document.getElementById('inputItem').value;
    itemsArray.push(item);
    
    for (let i = 0; i < itemsArray.length; i++) {
        let e = itemsArray[i];
        listItems = listItems + `<li class="item">${e}</li>`;
    }

    document.getElementById('items').innerHTML = listItems;
    localStorage.setItem('itemsArray', itemsArray)


    console.log('itemsArray ', itemsArray);
    console.log('localStorage.getItem ', localStorage.getItem('itemsArray'));
    console.log('listItems ', listItems);
};

function remove() {
    listItems = '';

    let item = document.getElementById('inputItem').value;

    for (let i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i] === item) {
            itemsArray.splice(i, 1);
            break;
        }
    }
    
    for (let i = 0; i < itemsArray.length; i++) {
        let e = itemsArray[i];
        listItems = listItems + `<li class="item">${e}</li>`;
    }

    document.getElementById('items').innerHTML = listItems;
    localStorage.setItem('itemsArray', itemsArray)

    console.log('itemsArray ', itemsArray);
    console.log('localStorage.getItem ', localStorage.getItem('itemsArray'));
    console.log('listItems ', listItems);
}

function removeAll() {
    listItems = '';

    let item = document.getElementById('inputItem').value;

    for (let i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i] === item) {
            itemsArray.splice(i, 1);
            i--
        }
    }
    
    for (let i = 0; i < itemsArray.length; i++) {
        let e = itemsArray[i];
        listItems = listItems + `<li class="item">${e}</li>`;
    }

    document.getElementById('items').innerHTML = listItems;
    localStorage.setItem('itemsArray', itemsArray);

    console.log('itemsArray ', itemsArray);
    console.log('localStorage.getItem ', localStorage.getItem('itemsArray'));
    console.log('listItems ', listItems);
}

function clearAll() {
    document.getElementById('items').innerHTML = '';
    localStorage.clear();
    itemsArray = [];
    listItems = ''
}