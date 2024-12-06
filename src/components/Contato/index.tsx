import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remover, editar, cadastrar } from '../../store/reducers/contatos'

import ContatoClass from '../../containers/Modelo/contato'

import * as S from './contato'

import { Botao } from '../../styles'

type Props = ContatoClass

const Contato = ({ nome: nomeOriginal, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
  }

  return (
    <S.Card>
        <label htmlFor={nome}
    </S.Card>
  )