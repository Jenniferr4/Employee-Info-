import React from 'react';
import { Department, Phone} from '../models'
import { PhoneList } from './PhoneList';
import { PhoneEditor } from './PhoneEditor';
import { AccountsRepository } from '../api';



export class AccountEditor extends React.Component{

    accountsRepository = new AccountsRepository();


    departments = [
        new Department(1, 'HR'),
        new Department(2, 'Marketing'),
        new Department(3, 'Sales'),
        new Department(4, 'Accounting'),

    ]    


    state = {
        name: '',
        email: '', 
        isEmployee: false,
        departmentId: 0,
        phoneNumbers : [  ]
    };
   

    render(){
        return <>
            <form className="container">
                <h1>Account Editor</h1>
                <div className="form-group">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text"
                            id="name"
                            class="name"
                            className="form-control"
                            value={this.state.name}
                            onChange= {e => this.setState({name: e.target.value} ) } 
                            />
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="text"
                            id="email"
                            class="email"
                            className="form-control"
                            value={this.state.email}
                            onChange= {e => this.setState({email: e.target.value} ) } />

                </div>

                <div className="form-group">
                    <label htmlFor="isEmployee">
                        <input type="checkbox"
                            id="isEmployee"
                            name="isEmployee"
                            checked = {this.state.isEmployee}
                            onChange= {e => this.setState({isEmployee: e.target.checked} ) } />

                               Is Employee
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="departmentId">
                        Department
                    </label>
                    <select
                            id="departmentId"
                            class="departmentId"
                            className="form-control"
                            value={this.state.departmentId}
                            onChange= {e => this.setState({departmentId: e.target.value} ) } >
                             <option value="select">Select: </option>
                            {
                                this.departments.map(x => <option key={x.id} value={x.id}> {x.name} </option>)
                            }

                            
                    </select>
                </div>
                
               <PhoneList phoneNumbers={this.state.phoneNumbers} />
                <PhoneEditor onPhoneAdded ={x => this.onPhoneAdded(x)}/>

            </form>
        </>;
    }

    componentDidMount(){
        let accountId = this.props.match.params.accountId;
        this.accountsRepository.getAccountsById(accountId)
        .then(account => this.setState(account));
    }
    
}



