const PositiveMessage = () => <p>You can watch the movie. Welcome</p>

const NegativeMessage = () => <p>You cannot watch a movie if you are under 16 years old!</p>


class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmited: false,
  }

  handleChangeBoxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmited: false,
    })
  }

  handleFromSubmit = (e) => {
    e.preventDefault();
    if (!this.isFormSubmited) {
      this.setState({
        isFormSubmited: true,
      })
    }

  }

  displayMessage = () => {
    if (this.state.isFormSubmited) {

      if (this.state.isConfirmed) {
        return <PositiveMessage />
      } else {
        return <NegativeMessage />
      }
    } else {
      return null;
    }
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleFromSubmit}>
          <h1>Buy a ticket for the horror of the year!</h1>
          <input type="checkbox" id="age" onChange={this.handleChangeBoxChange} checked={this.state.isConfirmed} />
          <label htmlFor="age">I have at least 16 years</label>
          <br />
          <button>Buy Ticket</button>
        </form>
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));