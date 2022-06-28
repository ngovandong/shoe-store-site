import router from '../router'
import axios from 'axios'
import { privateAxios } from '@/interceptors/axios';

export default {

    fetchShoes(context)
    {
        return axios.get("shoes/").then(res =>
            context.commit("setlistShoe", res.data)
        ).catch((error) => console.log(error));
    },
    fetchCart(context)
    {
        return privateAxios.get("cart_details/").then(res =>
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
        if (context.state.isAuthenticated) {
            context.dispatch("fetchCart")
        }
    },
    login(context, user)
    {
        return axios
            .post("api/token/", user)
            .then(response =>
            {
                const token = response.data
                context.commit('setToken', token)
                axios.defaults.headers.common["Authorization"] = "Bearer " + token.access
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
    },
    refreshToken(context)
    {
        return axios.post('api/token/refresh/', { refresh: context.state.token.refresh })
            .then(res =>
                context.commit("setToken", res.data)
            ).catch(
                error => console.log(error)
            )
    }
}