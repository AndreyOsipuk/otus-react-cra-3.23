import { Component } from "react";

type Props = {
  message: string
}

type State = {
  count: number
  name: string
}

export class Form extends Component<Props, State> {
  state = {
    count: 1,
    name: 'my value'
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1})
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value })
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <p>{this.props.message}</p>
      <button onClick={this.handleClick}>{this.state.count}</button>
      <p>{this.state.name}</p>
      <input onChange={this.handleChange} value={this.state.name}/>
    </form>
  }
}