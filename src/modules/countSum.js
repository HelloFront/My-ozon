const countSum = (arr) => {
    const total = document.querySelector('.cart-total span');
    
    let sum = arr.reduce((acc, item) => {
        return acc + +item.price;
    }, 0)

    total.innerText = sum;
}

export default countSum