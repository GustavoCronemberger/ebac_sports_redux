import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinhoSlice'
import favoritosReducer from './reducers/favoritosSlice'
import { produtosApi } from './apiSlice'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store
