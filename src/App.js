import React from "react"
import { connect } from "react-redux"
import { addModel } from "./actions/models"
import "./App.css"

class App extends React.Component {
  state = {
    model: ""
  }

  data = [
    {
      name: "Ivel Z3",
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    {
      name: "Bally Astrocade",
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    {
      name: "Sord M200 Smart Home Computer",
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    {
      name: "Commodore 64",
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    },
    {
      name: "MSX",
      manufacturer: "ASCII Corporation",
      year: 1983,
      origin: "Japan"
    },
  ]

  updateSelection = event =>
    this.setState({ [event.target.name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.model) {
      alert("Please pick a model!")
      return
    }

    const model = this.data.find(dataEntry =>
      this.state.model === dataEntry.name)

    this.props.addModel(model)
    this.setState({
      model: ""
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>

          <select name="model" value={this.state.model}
            onChange={this.updateSelection}>

            <option key="0" value="">-- pick a model --</option>
            {this.data.map(dataEntry =>
              <option key={dataEntry.name} value={dataEntry.name}>
                {dataEntry.name} ({dataEntry.year})
              </option>
            )}

          </select>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = { addModel }

export default connect(null, mapDispatchToProps)(App)