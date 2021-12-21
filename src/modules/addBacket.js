import cart from "./cart";
import getData from "./getData";

const addBacket = () => {
    const allBtn = document.querySelectorAll('#addBacketBtn');
    const counterItem = document.querySelector('.counter');
    let arrItems = [];

    allBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            let value = +e.target.offsetParent.id;

            getData().then(data => {
                data.forEach(item => {
                    if(item.id === value) {
                       if(arrItems.length === 0) {
                           arrItems.push(item)
                       } else {
                            arrItems.forEach((elem, index, arr)=> {
                                if(elem.id === item.id) {
                                    elem.count += 1;
                                } else if (elem.id === arr.length -1) {
                                    arrItems.push(item)
                                }
                            })
                        }
                    }
                });
                cart(arrItems); 
                counterItem.innerText = arrItems.length
            })
        })
    });
}

export default addBacket