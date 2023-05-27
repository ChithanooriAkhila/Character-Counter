import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {inputsList: [], inputValue: ''}

  renderListView = () => {
    const {inputsList} = this.state

    return (
      <ul className="list">
        {inputsList.map(inputItem => (
          <li key={inputItem.id}>
            <p>
              {inputItem.value}:{inputItem.value.length}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  changeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  addCharacterCount = () => {
    const {inputValue} = this.state

    this.setState(prev => ({
      inputsList: [...prev.inputsList, {id: uuid(), value: inputValue}],
      inputValue: '',
    }))
  }

  render() {
    const {inputsList, inputValue} = this.state
    return (
      <div className="total-container">
        <div className="main-container">
          <div className="left-container">
            <h1 className="heading">Count the characters like a Boss...</h1>
            <div className="character-list-count-container">
              {inputsList.length === 0 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="inputs-image"
                />
              ) : (
                this.renderListView()
              )}
            </div>
          </div>
          <div className="right-container">
            <h1 className="right-heading">Character Counter</h1>
            <form className="input-container">
              <input
                type="text"
                value={inputValue}
                placeholder="Enter the characters here"
                onChange={this.changeInputValue}
                className="input-field"
              />
              <button
                type="button"
                onClick={this.addCharacterCount}
                className="add-button"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
