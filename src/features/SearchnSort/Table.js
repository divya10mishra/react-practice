import React from 'react'
import Search from './Search'

function Table({apiData, inputValue, searchData}) {
  return (
    <div> <table border="1">
    <thead>
        <tr>
        <th>Id <Search inputValue={inputValue.id} searchData={searchData} column={'id'} /></th>
        <th>First Name <Search inputValue={inputValue.first_name} searchData={searchData} column={'first_name'}/></th>
        <th>Last Name <Search inputValue={inputValue.last_name} searchData={searchData} column={'last_name'}/></th>
        <th>Email <Search inputValue={inputValue.email} searchData={searchData} column={'email'}/></th>
        </tr>
    </thead>
    <tbody>
        {apiData.map((item)=>(<tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
        </tr>

        ))}
    </tbody>
</table></div>
  )
}

export default Table