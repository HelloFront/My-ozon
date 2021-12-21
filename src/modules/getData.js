const getData = () => {
    return fetch('https://new-project-2cccd-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
        .then(res => res.json())
}
export default getData