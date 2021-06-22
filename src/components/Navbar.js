import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import { isLoggedIn } from '../apis/User';
import { UserContext } from '../context/UserContext'
export default class Navbar extends Component {
    static contextType = UserContext;
    render() {
        // console.log('API:',isLoggedIn());
        // console.log('Context:',this.context.isLoggedIn)
        return (
            <div className="container py-3">
                <div className="row">
                    <div className="col-6">
                    <Link to="/"><svg width="105" height="30" viewBox="0 0 105 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8022 0.171553C13.406 -0.0571843 12.9179 -0.0571843 12.5217 0.171553L0.640244 7.03131C0.24406 7.26005 0 7.68277 0 8.14024V21.8598C0 22.3172 0.24406 22.74 0.640244 22.9687L12.5217 29.8284C12.9179 30.0572 13.406 30.0572 13.8022 29.8284L25.6836 22.9687C26.0798 22.74 26.3239 22.3172 26.3239 21.8598V15.8184C26.3239 15.6181 26.109 15.4912 25.9336 15.5878L23.8991 16.7087C23.8151 16.755 23.7629 16.8433 23.7629 16.9392V20.9685C23.7629 21.0625 23.7127 21.1494 23.6313 21.1965L13.2936 27.1649C13.2121 27.212 13.1118 27.212 13.0303 27.1649L2.6926 21.1965C2.61115 21.1494 2.56098 21.0625 2.56098 20.9685V9.03152C2.56098 8.93747 2.61115 8.85057 2.6926 8.80354L13.0303 2.83506C13.1118 2.78804 13.2121 2.78804 13.2936 2.83506L23.6313 8.80354C23.7127 8.85057 23.7629 8.93747 23.7629 9.03152V14.1044C23.7629 14.2994 23.9676 14.4267 24.1425 14.3405L26.177 13.3376C26.2669 13.2933 26.3239 13.2018 26.3239 13.1015V8.14024C26.3239 7.68277 26.0798 7.26005 25.6836 7.03131L13.8022 0.171553Z" fill="#4A4A4A"/>
                        <path d="M10.4428 9.73791L13.0132 8.01148C13.103 7.95121 13.2204 7.95193 13.3094 8.01331L14.3426 8.72585C14.4306 8.78656 14.5466 8.78799 14.6361 8.72947L16.5012 7.51C16.667 7.40158 16.6582 7.15577 16.485 7.05956L13.295 5.28733C13.2127 5.2416 13.1122 5.24332 13.0315 5.29183L5.6169 9.74917C5.44882 9.85021 5.44628 10.093 5.6122 10.1975L13.0338 14.8736C13.1132 14.9235 13.213 14.9276 13.2961 14.8841L18.8133 12.0001C18.9886 11.9085 19.1985 12.0357 19.1985 12.2334V18.2757C19.1985 18.3709 19.1471 18.4587 19.064 18.5053L13.2892 21.7427C13.21 21.7871 13.1136 21.7875 13.034 21.7439L7.12487 18.5048C7.04057 18.4586 6.98816 18.3701 6.98816 18.274V14.104C6.98816 14.0079 6.93582 13.9194 6.85161 13.8732L5.04577 12.8818C4.87034 12.7854 4.65584 12.9124 4.65584 13.1125V20.0111C4.65584 20.1076 4.70865 20.1964 4.79347 20.2424L13.0317 24.7158C13.1125 24.7598 13.2105 24.7582 13.29 24.7118L21.4918 19.9238C21.5726 19.8766 21.6223 19.79 21.6223 19.6964V10.1216C21.6223 10.0275 21.5721 9.94056 21.4905 9.89356L19.0568 8.4911C18.9748 8.44383 18.8737 8.44425 18.7921 8.49219L13.2964 11.7198C13.2135 11.7685 13.1106 11.7682 13.0281 11.7189L10.4546 10.1825C10.2888 10.0835 10.2825 9.84557 10.4428 9.73791Z" fill="#4A4A4A"/>
                        <path d="M86.5466 11.125V8H72.8138L71.0972 9.875V14.875L72.8138 16.5417H83.5425V20.2917H71.0972V22.7917H84.4008L86.332 20.7083V15.9167L84.1862 13.8333H73.6721V11.125H86.5466Z" fill="#4A4A4A"/>
                        <path d="M89.5506 20.7083V9.66667L91.6964 8H105V10.9167H92.3401V13.8333H104.785V16.9583H92.5547V19.875H105V22.7917H91.6964L89.5506 20.7083Z" fill="#4A4A4A"/>
                        <path d="M52 20.9167V8H55.4332V19.875H64.6599V8H67.664V20.9167L65.3036 23H54.5749L52 20.9167Z" fill="#4A4A4A"/>
                    </svg></Link>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        {this.context.isLoggedIn?<button className="btn btn-light" onClick={this.context.logout}>Logout</button>:
                        <Link to="/login"><button className="btn btn-primary">Login Here</button></Link>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}