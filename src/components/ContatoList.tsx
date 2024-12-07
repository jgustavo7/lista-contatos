import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import ContatoItem from './ContatoItem'

interface ContatoListProps {
  onEdit: (contato: {
    id: string
    name: string
    email: string
    phone: string
  }) => void
}

const ContatoList: React.FC<ContatoListProps> = ({ onEdit }) => {
  const contatos = useSelector((state: RootState) => state.contatos.contatos)

  return (
    <div>
      {contatos.map((contato) => (
        <ContatoItem key={contato.id} {...contato} onEdit={onEdit} />
      ))}
    </div>
  )
}

export default ContatoList
