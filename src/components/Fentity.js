import React, { Component } from 'react';
import '../styles/fentity.css'
import { Link, Redirect } from 'react-router-dom';

class Fentity extends Component {
    render() {
        const backLink = "/directory/" + this.props.match.params.fentities
        const fentityName = this.props.match.params.name
        const fentity = this.props.state[this.props.match.params.fentities].find(f => f.name.toLowerCase() === fentityName.toLowerCase())

        return (
            <div>
                {fentity?
                <div id="creature-container">

                    <Link to={backLink}>Back</Link>

                    <h1>{fentity.name}</h1>
                    <img src={fentity.imgUrl} alt="" />
                    <div className="title">Power:</div>
                    <div className="power text"> {fentity.power}</div>
                    <div className="other text">{fentity.other}</div>
                </div> :
                
                <Redirect to="/notfound"/>
                }
            </div>
            
        )
}
}

export default Fentity;