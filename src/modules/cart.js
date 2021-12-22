import deleteItem from "./deleteCartItem";
import countSum from "./countSum";

export const cart = (item = undefined) => {
    const cartBtn = document.getElementById('cart');
    const cartCloseBtn = document.querySelector('.cart-close');
    const cartEmpty = document.querySelector('#cart-empty');
    const counterItem = document.querySelector('.counter');

    if(Array.isArray(item)) counterItem.innerText = item.length;
    if(counterItem.innerText === '0') cartEmpty.innerHTML = '<p>Вы еще не добавили товаров</p>';

    cartBtn.addEventListener('click', () => openCart(item));
    cartCloseBtn.addEventListener('click', closeCart);
}
export const openCart = (item) => {
    const cartModal = document.querySelector('.cart');
    const cartEmpty = document.querySelector('#cart-empty');

    cartModal.style.display = 'flex';

    if(item) {
        if(item.length !== 0) cartEmpty.innerHTML = '';

        item.forEach(item => {
            cartEmpty.insertAdjacentHTML('beforeend', `<div class="card" id="${item.id}">
            <div class="card-img-wrapper">
                <span class="card-img-top"
                    style="background-image: url('${item.img}')"></span>
            </div>
            <div class="card-body justify-content-between">
                <div class="card-price">${item.price} ₽</div>
                <h5 class="card-title">${item.title}</h5>
                <button class="btn btn-remove-item">Удалить</button>
            </div>
        </div>`)
        })

        countSum(item);
        deleteItem(item);
    }
}
export const closeCart = () => {
    const cartModal = document.querySelector('.cart');
    cartModal.style.display = '';
}
