import {cart} from "./cart";
import getData from "./getData";

const addBacket = () => {
    const allBtn = document.querySelectorAll('#addBacketBtn');
    let arrItems = [];

    allBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            let value = +e.target.offsetParent.id;

            getData().then(data => {
                data.forEach(item => {
                    if(item.id === value) {
                       arrItems.push(item)
                    }
                });
                cart(arrItems); 
            })
        })
    });
}

export default addBacket