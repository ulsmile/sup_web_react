import React from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../actions'

let AddPlayerContainer = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addPlayer(input.value)),
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          $B2q0wEPO?(B
        </button>
      </form>
    </div>
  )
}
AddPlayerContainer = connect()(AddPlayerContainer)

export default AddPlayerContainer
