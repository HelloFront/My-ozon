import cart from "./modules/cart";
import renderData from "./modules/renderData";
import {filterSum, filterCategory} from "./modules/fillter";
import catalog from "./modules/catalog";
import search from "./modules/search";

const form = document.forms[0]

form.addEventListener('input', filterSum)

cart()
renderData()
catalog()
filterCategory()
search()
