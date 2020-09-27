import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      newItem : {
        text : '',
        date : Date()
      },
      items :  []
    }
  }

  render() {
    console.log(this.state.items)
    return (
      <div>
        <h1>TODO LIST</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.newItem.text}/>
          <button>submit</button>
        </form>
        <ul>
          {this.state.items.map(item =>(
            <li key={item.date}>{item.text}</li>
          ))}
        </ul>
      </div>
    )
  }
  handleChange = e =>{
    this.setState({
      newItem : {
        text : e.target.value,
        date : Date.now()
      }
    })
  }
  handleSubmit = e =>{
    e.preventDefault()
    if(this.state.newItem === ""){
      alert('whats need to be done')
      return
    }
    const newItem = this.state.newItem
    let items = this.state.items
    items.push(newItem)
    this.setState({items})
    this.setState({newItem: {
      text : '',
      date : Date()
    }})
  }
}

export default App
