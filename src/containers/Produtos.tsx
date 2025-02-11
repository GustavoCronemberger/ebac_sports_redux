import React from 'react'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../store/apiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarAoCarrinho } from '../store/carrinhoSlice'
import { favoritar } from '../store/reducers/favoritosSlice'
import { RootState } from '../store/store'
import { Produto as ProdutoType } from '../types'
import * as S from './styles'

const Produtos = () => {
  const dispatch = useDispatch()
  const { data: produtos = [], isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const adicionarAoCarrinhoHandler = (produto: ProdutoType) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const favoritarHandler = (produto: ProdutoType) => {
    dispatch(favoritar(produto))
  }

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((favorito) => favorito.id === produto.id)
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          aoComprar={adicionarAoCarrinhoHandler}
          favoritar={favoritarHandler}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
