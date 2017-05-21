import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { SourceManagerContainer } from '../Source/SourceManagerContainer'
import { Row, Clearfix, FormControl, Button } from 'react-bootstrap';
import { accountRegister } from '../../actions/account'
import { gatherCommonSources, gatherAllSources, updateDisplaySettingsSources } from '../../actions/source'


export class Settings extends Component {

  constructor(){
    super()
    this.gatherAllSources = gatherAllSources.bind(this)
    this.gatherCommonSources = gatherCommonSources.bind(this)
  }

  componentDidMount() {
    this.gatherCommonSources()
  }

  handleClick(event) {
    this.gatherAllSources()
  }

  sourceDisplay() {
    if (this.props.displaySources.length !== 0) {
      return (
        <div>
          <h2>common sources</h2>
          <SourceManagerContainer sources={this.props.displaySources}/>
        </div>
      )
    } else {
      return (<h1>'fetching....'</h1>)
    }
  }

  render() {
    return(
      <div>
        <h2>your sources</h2>
        <SourceManagerContainer sources={this.props.sources}/>
        {this.sourceDisplay()}
      </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateDisplaySettingsSources: updateDisplaySettingsSources,
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
