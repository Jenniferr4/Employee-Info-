import React from 'react';
import { AccountsRepository } from '../api';
import {Accounts} from './Accounts';
export class AccountsDashboard extends React.Component {
    accountsRepository = new AccountsRepository();

  state = {
    accounts: []
  }

  render() {
    return <>
      <h1>Accounts Dashboard</h1>
      <Accounts List accounts={this.state.accounts}/>
    </>;
  }

  componentDidMount() {
    this.accountsRepository.getAccounts()
      .then(account => this.setState({accounts: account }));
  }

}