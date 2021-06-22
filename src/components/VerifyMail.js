import React, { Component } from 'react'

export default class VerifyMail extends Component {
    render() {
        return (
            <div className="h-100">
                <div className="h-100 row d-flex justify-content-center align-items-center me-0">
                    <div className="col-12 col-md-4 col-xl-3 pe-0">
                        <div className="card mx-2">
                            <div className="card-body p-5">
                                <h4 style={{color:'grey'}}>IMPORTANT</h4>
                                <p>You Need to verify your mail first. Can't find a mail from us? Try checking your spam folder.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
