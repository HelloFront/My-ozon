
const cart = (item = undefined) => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');
    const cartEmpty = document.querySelector('#cart-empty');
    

    const openCart = () => {
        cartModal.style.display = 'flex';
        if(item) {
            cartEmpty.innerHTML = '';

            item.forEach(item => {
                cartEmpty.insertAdjacentHTML('beforeend', `<div class="card">
                <div class="card-img-wrapper">
                    <span class="card-img-top"
                        style="background-image: url('${item.img}')"></span>
                </div>
                <div class="card-body justify-content-between">
                    <div class="card-price">${item.price} ₽</div>
                    <h5 class="card-title">${item.title}</h5>
                    <div class="counter">
                        <span><svg class="left-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg></span>
                        <p>${item.count}</p>
                        <span><svg class="right-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg></span>
                    </div>
                    <button class="btn btn-remove-item">Удалить</button>
                </div>
            </div>`)
            })
        }
    }

    const closeCart = () => {
        cartModal.style.display = '';
    }

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
}

export default cart