import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { restoreAccount, updateAccount } from '../../actions/account'
import { bindActionCreators } from 'redux'


export class DashboardContainer extends Component {
  constructor(){
    super()
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.restoreAccount = restoreAccount.bind(this)
    // this.updateAccount = updateAccount.bind(this)
  }

  componentWillMount() {

  }

  render() {
    return (
        <Row>
          ConnectedDashboardContainer
          {this.props.children}
        </Row>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    restoreAccount: restoreAccount
  }, dispatch)
}

const mapStateToProps = (state) =>{
  return{
    blog: state.blog
  }
}


export const ConnectedDashboardContainer = connect(null,mapDispatchToProps)(DashboardContainer)
