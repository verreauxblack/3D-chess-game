const frontChild = document.querySelector('div.front').children;


export default function setStyle() {

    Object.keys(frontChild).forEach(element => {
        if (element <= 63) {
            frontChild[element].style.gridArea = `c${frontChild[element].id}`;
            // frontChild[element].style.backgroundColor = 'red';
        }
    })

}