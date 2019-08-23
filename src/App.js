import React from "react"
import { connect } from "react-redux"
import { addModel } from "./actions/models"
import ListModel from "./components/ListModel"
import "./App.css"

// If duplicates should be allowed, change this to false.
const forbidDuplicates = true

// If a button is absolutely required, instead of
//    using a submit input, change this to false.
const useFormSubmit = true

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

    if (this.validateModel(this.state.model)) {
      const model = this.data.find(dataEntry =>
        this.state.model === dataEntry.name)

      this.props.addModel(model)

      this.setState({
        model: ""
      })
    }
  }

  validateModel = model => {
    if (!model) {
      alert("Please pick a model.")
      return false
    }

    if (forbidDuplicates &&
      this.props.selectedModels.find(selectedModel =>
        model === selectedModel.name)) {
      alert("This model has already been added.")
      return false
    }
    return true
  }

  render() {
    return (
      <div className="App">

        {this.props.selectedModels.map((model, key) =>
          <ListModel
            key={key}
            name={model.name}
            manufacturer={model.manufacturer}
            year={model.year}
            origin={model.origin}
          />
        )}

        <form onSubmit={this.handleSubmit}>
          <select name="model" value={this.state.model}
            onChange={this.updateSelection}>

            <option key={0} value="">-- pick a model --</option>
            {this.data.map((dataEntry, key) =>
              <option key={key + 1} value={dataEntry.name}>
                {dataEntry.name} ({dataEntry.year})
              </option>
            )}

          </select>
          {useFormSubmit
            ? <input type="submit" value="Add" />
            : <button onClick={this.handleSubmit}>Add</button>
          }
        </form>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedModels: state.models
})

const mapDispatchToProps = {
  addModel
}

export default connect(mapStateToProps, mapDispatchToProps)(App)