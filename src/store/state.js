const user = JSON.parse(localStorage.getItem('user'));
export default {
    listShoe: [],
    categories: [],
    searchString: "",
    cart: { items: [] },
    user,
    token: '',
    isAuthenticated: false
}