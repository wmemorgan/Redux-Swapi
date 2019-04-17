import React from "react"
import { connect } from "react-redux"
import { fetchData } from '../actions'
import { CharacterList } from "../components"

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    console.log(`CharacterListView props: ` , this.props)
    if (this.props.loading) {
      return <h2>Loading Data...</h2>
    }
    
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}

const mstp = state => {
  return {
    characters: state.charsReducer.characters,
    loading: state.charsReducer.loading
  }
}

export default connect(mstp,{ fetchData })(CharacterListView);
