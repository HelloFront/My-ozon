import getData from "./getData";
import renderData from "./renderData";


const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input');

    searchInput.addEventListener('input', (e) => {
        let value = e.target.value;
        let arr = [];
        getData().then(data => {
            data.forEach(item => {
               if(item.title.toLowerCase().includes(value.toLowerCase())) arr.push(item);
            });
            renderData(arr);
        })
    })
}

export default search