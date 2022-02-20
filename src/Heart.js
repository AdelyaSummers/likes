import { Component } from "react";
import heart1 from './heart1.jpg';
import heart2 from './heart2.jpg';

export class Heart extends Component {

    state = {
        CTA: "LIKE US!",
        image:heart1
    }
    heartClicked =() => {
        this.setState({
            CTA: "Thank you! We love you, too!",
            image: heart2
        })
    }


    render(){
        return <div>
            <div className="container">
            <h1>{this.state.CTA}</h1>
            </div>
            <div className="container">
            <img onClick={this.heartClicked} src={this.state.image} width="120px" alt="heart1"/>
            </div>
        </div>
    }
}