import React from 'react';

const TableDisplay = (props) => {
return (
    <div className="container card-widget card-widget-transactions card-widget-header-included">
            <div className="row mb-2 ml-2">
                <h4 className="text-muted text-uppercase small text-left">All Transactions</h4>
            </div>
            <div className="container">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" col="true">Type</th>
                            <th scope="col" col="true">Category</th>
                            <th scope="col" col="true">Date</th>
                            <th scope="col" col="true">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="tbody  container movements container-movements card-body pt-0">
                        {props.items.map((objDataList) => (
                            <tr className="table-row-height align-middle" key={objDataList.id}>
                                <th scope="row">{(objDataList.amount > 0) 
                                    ? <i className="bi bi-cash-stack"></i>
                                    : <i className="bi bi-coin"></i>
                                }</th>
                                <td className="col movements-type movements-type-deposit">{objDataList.category}</td>
                                <td className="col movements-date">{objDataList.date}</td>
                            <td className="col movements-value">{objDataList.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
)
}

export default TableDisplay