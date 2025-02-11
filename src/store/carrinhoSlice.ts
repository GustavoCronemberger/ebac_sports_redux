import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

interface CarrinhoState {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const produtoExistente = state.itens.find(
        (item) => item.id === action.payload.id
      )
      if (!produtoExistente) {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
