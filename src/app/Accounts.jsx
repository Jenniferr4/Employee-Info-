import React from 'react';
import { Link } from 'react-router-dom';

export const Accounts = props => <>
  <table className="table table-striped table-condensed">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">IsEmployee</th>
        <th scope="col">Department</th>
      </tr>
    </thead>
    <tbody>
      {
      props.accounts.map((x, i) =>
      <tr key={i}>
        <th scope="col"><Link to={'/edit/' + x.id}> {x.name} </Link></th>
        <th scope="col">{x.email}</th>
        <th scope="col">{x.isEmployee}</th>
        <th scope="col">
        <span className="badge badge-info">
          { x.departmentId }
        </span>
        </th>
      </tr>)
      }
    </tbody>
  </table>
</>;