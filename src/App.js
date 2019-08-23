import React from "react"
import "./App.css"

class App extends React.Component {
  state = {
    model: ""
  }

  updateSelection = event =>
    this.setState({ [event.target.name]: event.target.value })

  render() {
    const data = [
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
    return (
      <div className="App">
        <select name="model" value={this.state.value}
          onChange={this.updateSelection}>

          <option value="">-- pick a model --</option>
          {data.map(dataEntry =>
            <option key={dataEntry.name} value={dataEntry.name}>
              {dataEntry.name} ({dataEntry.year})
            </option>
          )}

        </select>
      </div>
    )
  }
}

export default App
