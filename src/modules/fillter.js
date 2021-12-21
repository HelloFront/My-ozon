import getData from "./getData";
import renderData from "./renderData";

export const filterSum = () => {
    const form = document.forms[0]

    let min = form.min.value;
    let max = form.max.value;
    let arr = [];

    if(!max) max = 100000;

    getData().then(data => {
        data.forEach(item => {
            if(item.price > min && item.price < max) arr.push(item)
        });
        renderData(arr)
    })
}

export const filterCategory = () => {
    const allItem = document.querySelectorAll('.catalog-list li');


    allItem.forEach(item => item.addEventListener('click', (e) => {
        let arr = [];
        let value = e.target.innerText;

        getData().then(data => {
            data.forEach(item => {
                if(value === item.category) arr.push(item)
            });

            renderData(arr);
        })
    }));
}