import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { SourceManagerContainer } from '../Source/SourceManagerContainer'
import { Row, Clearfix, FormControl, Button } from 'react-bootstrap';
import { accountRegister } from '../../actions/account'
import { gatherCommonSources, gatherAllSources, updateDisplaySettingsSources, updateSourcesServer } from '../../actions/source'
import { updateSources } from '../../actions/actions'


export class Settings extends Component {

  constructor(){
    super()
    this.state={
      addedSources: [],
      removedSources: []
    }
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleRemoveClick = this.handleRemoveClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.gatherAllSources = gatherAllSources.bind(this)
    this.gatherCommonSources = gatherCommonSources.bind(this)
    this.updateSourcesServer = updateSourcesServer.bind(this)
  }

  componentDidMount() {
    this.gatherCommonSources()
  }

  handleAddClick(event) {
    let sourceNumber = parseInt(event.target.closest('div').dataset.id, 10)
    this.setState({
      addedSources: [...this.state.addedSources, sourceNumber]
    })
  }
  handleRemoveClick(event) {
    let sourceNumber = parseInt(event.target.closest('div').dataset.id, 10)
    this.setState({
      removedSources: [...this.state.removedSources, sourceNumber]
    })
  }

  handleSubmit(){
    this.updateSourcesServer()
    this.setState({
      addedSources: []
    })
  }

  toChooseSources(){
    let sources = this.props.displaySources.filter((source) => !this.state.addedSources.includes(source.id))
    let userSources = this.props.sources.map((source) => source.id)
    return sources.filter((source) => !userSources.includes(source.id))
  }

  chosenSources(){
    return this.props.displaySources.filter((source) => this.state.addedSources.includes(source.id))
  }

  existingSources(){
    return this.props.sources.filter((source) => !this.state.removedSources.includes(source.id))
  }

  removedSources(){
    return this.props.sources.filter((source) => this.state.removedSources.includes(source.id))
  }

  render() {
    return(
      <div className="Settings">
        {this.state.removedSources}
        <h2>
          Current sources
        </h2>
        <div onClick={(event) => this.handleRemoveClick(event)}>
          <SourceManagerContainer sources={this.existingSources()}/>
        </div>
        <h2>
          Removed sources
        </h2>
        <div onClick={(event) => this.handleRemoveClick(event)}>
          <SourceManagerContainer sources={this.removedSources()}/>
        </div>
        <button onClick={this.handleSubmit}>update</button>
        <h1>+++++++++++++++++++++++++++</h1>
        <h2>
          Added Sources
        </h2>
        {this.props.displaySources.length !== 0 ?
          <SourceManagerContainer sources={this.chosenSources()}/>
          :
          <h1>'fetching....'</h1>
        }
        <h1>
          Sources to Choose
        </h1>
        <div onClick={(event) => this.handleAddClick(event)}>
          {this.props.displaySources.length !== 0 ?
            <SourceManagerContainer sources={this.toChooseSources()}/>
            :
            <h1>'fetching....'</h1>
          }
        </div>
      </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateDisplaySettingsSources: updateDisplaySettingsSources,
    updateSources: updateSources
  }, dispatch)
}

const mapStateToProps = (state) =>{
  return{
    account: state.account,
    sources: state.source,
    displaySources: state.settings.sources
  }
}

export const ConnectedSettings = connect(mapStateToProps,mapDispatchToProps)(Settings)
