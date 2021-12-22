import getData from "./getData";
import renderData from "./renderData";

const saleFilter = () => {
    let active = false;

    const allItems = document.querySelectorAll('.card');

    document.querySelector('.filter-check_checkmark').addEventListener('click', (e) => {
        e.target.classList.toggle('checked');

        active = !active;
        if(active) {
            let array = []
            getData().then(json => {
                allItems.forEach(item => {
                    json.forEach(elem => {
                        if(+item.id === elem.id && elem.sale) array.push(elem);
                    })
                })
                renderData(array)
            })
        } 
    })
}

export default saleFilter