export default {
    initializeStore(state)
    {
        if (localStorage.getItem('token')) {
            state.isAuthenticated = true
            state.token = localStorage.getItem('token')
        } else {
            localStorage.setItem('token', '')
        }
    },
    setlistShoe(state, shoes)
    {
        state.listShoe = shoes;
    },
    setCategories(state, categories)
    {
        state.categories = categories;
    },
    setSearchString(state, text)
    {
        state.searchString = text
    },
    setToken(state, token)
    {
        state.token = token
        state.isAuthenticated = true
        localStorage.setItem("token", token)
    },
    setCart(state, items)
    {
        state.cart.items = items
    },
    setUser(state, user)
    {
        state.user = user
    },
    logout(state)
    {
        state.user = null
        state.token = ''
        localStorage.setItem('token', '')
        state.isAuthenticated = false
    }
}