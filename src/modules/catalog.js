const catalog = () => {
    let isOpen = false;

    document.querySelector('.catalog-button > button').addEventListener('click', () => {
        isOpen = !isOpen;

        if(isOpen) {
            document.querySelector('.catalog').style.display = 'block'
        } else document.querySelector('.catalog').style.display = 'none'
    })
}

export default catalog