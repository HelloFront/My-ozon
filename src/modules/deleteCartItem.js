import {cart} from "./cart";
import countSum from "./countSum";

const deleteItem = (arr) => {
    const delBtn = document.querySelectorAll('.btn-remove-item');

    delBtn.forEach(item => item.addEventListener('click', (e) => {
        arr.splice(arr.indexOf(+e.target.offsetParent.id), 1);
        e.target.offsetParent.remove();

        cart(arr);
        countSum(arr);
    }))
}

export default deleteItem