import router from '../router'
import axios from 'axios'
export default {

    fetchShoes(context)
    {
        return axios.get("shoes/").then(res =>
            context.commit("setlistShoe", res.data)
        ).catch((error) => console.log(error));
    },
    fetchCart(context)
    {
        return axios.get("cart_details/").then(res =>
            context.commit("setCart", res.data)
        ).catch((error) => console.log(error));
    },
    fetchCategory(context)
    {
        return axios.get("categories/").then(res =>
            context.commit("setCategories", res.data)
        ).catch((error) => console.log(error));
    },
    fetchData(context)
    {
        context.dispatch("fetchCategory")
        context.dispatch("fetchShoes")
        context.dispatch("fetchCart")
    },
    login(context, user)
    {
        return axios
            .post("token/login/", user)
            .then(response =>
            {
                const token = response.data.auth_token
                context.commit('setToken', token)
                axios.defaults.headers.common["Authorization"] = "Token " + token
                const toPath = router.history.current.query.to || '/'
                router.push(toPath)
            })

    },
    signup(context, person)
    {
        return axios
            .post("signup/", person)
            .then(
                () => router.push('/login')
            )
    }
}