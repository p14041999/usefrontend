import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Template from '../components/Template'
import { UserContext } from '../context/UserContext'

export default class AirDropScreen extends Component {
    static contextType = UserContext;
    render() {
        if(this.context.user.participated){
           return <Redirect to="/" />
        }
        return (
            <Template>
                <div className="container my-5">
                    <h5 className="mb-3">Complete Airdrop</h5>
                    <div className="card mb-5">
                        <div className="card-body p-5">
                            <div className="d-flex justify-content-between mb-3">
                                <p>1. Join Telegram Group</p>
                                <a href="https://t.me/pralayM" rel="noreferrer" target="_blank"><button className="btn btn-primary">Join Now</button></a>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <p>2. Follow us on twitter</p>
                                <a href="https://t.me/pralayM" rel="noreferrer" target="_blank"><button className="btn btn-primary">Follow Now</button></a>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <p>3. Retweet this post</p>
                                <a href="https://t.me/pralayM" rel="noreferrer" target="_blank"><button className="btn btn-primary">Retweet Now</button></a>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <p>4. Subscribe to our youtube channel</p>
                                <a href="https://t.me/pralayM" rel="noreferrer" target="_blank"><button className="btn btn-primary">Subscribe Now</button></a>
                            </div>
                            <div className="mb-3">
                                <p>5. Your telegram handle</p>
                                <input type="text" class="form-control" placeholder="@example" />
                            </div>
                            <div className="mb-3">
                                <p>6. Your twitter handle</p>
                                <input type="text" class="form-control" placeholder="@example" />
                            </div>
                            <div className="mb-3">
                                <p>7. Link to retweeted post</p>
                                <input type="text" class="form-control" placeholder="https://twitter.com/xyzz/status/1234560943" />
                            </div>
                            <div className="mb-3">
                                <p>8. You youtube email</p>
                                <input type="email" class="form-control" placeholder="you@gmail.com" />
                            </div>
                            <div>
                                <Link to="/"><button className="btn btn-lg btn-primary">Submit Info</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        )
    }
}
