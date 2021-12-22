import addBacket from "./addBacket";
import getData from "./getData";
import saleFilter from "./saleFilter";

const renderData = (arr) => {
    const goods = document.querySelector('.goods')
    goods.innerHTML = '';

    if(!arr) {
        getData().then(data => {
            showContent(data)
        })
    } else showContent(arr);

    function showContent (arr) {
        arr.forEach(item => {
            goods.insertAdjacentHTML('beforeend' , `
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div class="card" id="${item.id}">
                    ${item.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                        <div class="card-img-wrapper">
                            <span class="card-img-top"
                                style="background-image: url('${item.img}')"></span>
                        </div>
                        <div class="card-body justify-content-between">
                            <div class="card-price">${item.price} ₽</div>
                            <h5 class="card-title">${item.title}</h5>
                            <button class="btn btn-primary" id="addBacketBtn">В корзину</button>
                        </div>
                    </div>
                </div>`)
        });
        addBacket();
        saleFilter()
    }
}
export default renderData