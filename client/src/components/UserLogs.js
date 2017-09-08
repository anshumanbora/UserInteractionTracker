import React,{Component} from 'react';
import axios from 'axios';
import Explainations from "./Explainations";

class UserLogs extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data : [],
            currentUser :'',

        };
    }

    componentDidMount() {

        axios.get("/api/getsomething",)
            .then((response) => {

                //console.log('romeo',response.data);
                //this.setState({events:response.data});
                this.setState({data: response.data})
            }).catch(error => {
            console.log(error);
        });

        axios.get("/api/getcurrentuser",)
            .then((response) => {

                console.log('User',response.data);
                //this.setState({events:response.data});
                this.setState({currentUser: response.data})
            }).catch(error => {
            console.log(error);
        });

    }

    renderContent()
    {   return(
        <div>
            <ul>
                {this.state.data.map(function(listValue){



                    return <li>{listValue}</li>;
                })}
            </ul>
        </div>
    );

    }
    render() {
        console.log('Render');
        console.log(this.state.data);
        return (
            <div>
                <div className="row">
                    <div className="col-lg-2 ">
                        <h4><span className="metrics-header">Current user</span><div className="username" > {this.state.currentUser}</div></h4>
                    </div>

                    <div className="col-lg-3">
                        <div  >
                            <h4><span className="metrics-header">History</span>
                            <span className="time-legend">date hrs:min:sec mili</span>
                        </h4>
                        </div>
                        <span className="timestamp">{this.renderContent()}</span>

                    </div>
                    <div className="col-lg-7">

                        <Explainations/>

                    </div>

                </div>




            </div>
        );
    }
}


export default UserLogs;
