import React, {Component} from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { FaSave } from 'react-icons/fa'

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
    this.renderForm = this.renderForm.bind(this)
    this.renderDisplay = this.renderDisplay.bind(this)
    this.save = this.save.bind(this)
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
  }
  edit() {
    this.setState({
      editing: true
    })
  }
  remove() {
    alert('removing note')
  }
  save() {
    alert(this._new_text.value)
  }
  renderForm() {
    return (
      <div className='note'>
        <form>
          <textarea ref={input => this._new_text = input} />
          <button onClick={this.save}><FaSave/></button>
        </form>
      </div>
    )
  }
  renderDisplay() {
    return (
      <div className='note'>
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit} id='edit'><FaPencilAlt /></button>
          <button onClick={this.remove} id='remove'><FaTrashAlt /></button>
        </span>
      </div>
    )
  }
  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay()
  }
}

export default Note
