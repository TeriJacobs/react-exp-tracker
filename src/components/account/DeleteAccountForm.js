import React from 'react'

function DeleteAccountForm() {
  return (
        <div className="container withdrawals operations-display pt-3 mt-3 card-widget card-widget-close">
            <div className="h-50 pb-4 pb-lg-2">
                <div className="card-body">
                    <div className="row text-left">
                        <h4 className="text-muted text-uppercase small">Close Account</h4>
                    </div>
                    <div className="row">
                    <form >
                        <div className="form-row align-items-center input-group input-group-sm">
                                <div className="col">
                                <input 
                                    type="string" 
                                    className=" form-control input-account-username input-account-border"  
                                    placeholder='username'
                                    />
                                </div>
                                <div className="col mx-2">
                                    <input 
                                        type="password" 
                                        className=" form-control input-account-username input-account-border" 
                                        placeholder='password'
                                        />
                                </div>
                                <div className="col">
                                    <button type="submit" className="btn btn-outline-dark submit-expense" value="Submit">Submit</button>
                                </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DeleteAccountForm