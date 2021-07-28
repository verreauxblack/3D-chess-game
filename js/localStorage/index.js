const myStorage = window.localStorage;

function setItem(key, value) {
    myStorage.setItem(key, JSON.stringify(value));
}

// Get item
function getItem(key) {
    return JSON.parse(myStorage.getItem(key)) || null;
}

// export the functions
export { setItem, getItem };