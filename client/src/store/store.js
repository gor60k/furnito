import Vuex from 'vuex'
import { createType, fetchTypes, createBrand, fetchBrands, createProduct, fetchProducts, filterProducts, fetchOneProduct } from '../http/productApi'

export const store = new Vuex.Store({
    state: {
        types: [],
        brands: [],
        products: [],
        filteredProducts: [],
        product: {},
        productsLimit: 16,
        productsOffset: 4,
        page: 1,
        totalCount: 0,

    },
    mutations: {
        SET_TYPES(state, types) {
            state.types = types
        },
        SET_BRANDS(state, brands) {
            state.brands = brands
        },
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_FILTERED_PRODUCTS(state, products) {
            state.filteredProducts = products
        },
        SET_PRODUCT(state, product) {
            state.product = product
        },
        SET_PRODUCTS_LIMIT(state, limit) {
            state.productsLimit = limit;
        },
        SET_PAGE(state, page) {
            state.page = page
        },
        SET_TOTAL_COUNT(state, count) {
            state.totalCount = count
        }
    },
    actions: {
        async fetchTypes({ commit }) {
            const types = await fetchTypes()
            commit('SET_TYPES', types)
        },
        async fetchBrands({ commit }) {
            const brands = await fetchBrands()
            commit('SET_BRANDS', brands)
        },
        async fetchProducts({ commit }, {limit, page} = {}) {
            const products = await fetchProducts(limit, page);
            commit('SET_PRODUCTS', products);
        },
        async filterProducts({ commit }, { type, brand }) {
            const products = await filterProducts({ type, brand })
            commit('SET_FILTERED_PRODUCTS', products)
        },
        async fetchOneProduct({ commit }, id) {
            const product = await fetchOneProduct(id)
            commit('SET_PRODUCT', product)
        },
        async createType({ commit }, type) {
            const newType = await createType(type)
            commit('SET_TYPES', [...this.state.types, newType])
        },
        async createBrand({ commit }, brand) {
            const newBrand = await createBrand(brand)
            commit('SET_BRANDS', [...this.state.brands, newBrand])
        },
        async createProduct({ commit }, product) {
            const newProduct = await createProduct(product)
            commit('SET_PRODUCTS', [...this.state.products, newProduct])
        },
    },
    getters: {
        getTypes(state) {
            return state.types
        },
        getBrands(state) {
            return state.brands
        },
        getProducts(state) {
            return state.products
        },
        getFilteredProducts(state) {
            return state.filteredProducts
        },
        getProduct(state) {
            return state.product
        },
        getPage(state) {
            return state.page
        }
    },
})