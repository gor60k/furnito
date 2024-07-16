import { $authHost, $host } from "./index";
// import { jwtDecode } from 'jwt-decode';

export const createType = async (type) => {
    const { data } = await $authHost.post('/type/', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('/type/')
    return data
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('/brand/', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('/brand/')
    return data
}

export const createProduct = async (product) => {
    const { data } = await $authHost.post('/product/', product)
    return data
}

export const fetchProducts = async (limit, page) => {
    const { data } = await $host.get(`/product`, {
        params: {limit, page}
    })
    return data
}

export const filterProducts = async ({ type, brand }) => {
    const { data } = await $host.get(`/filter?brand=${brand?.id}&type=${type?.id}`)
    return data
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('/product/' + id)
    return data
}