import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        
        const fentityCategory = this.props.match.params.fentities
        const fentities = this.props.state[fentityCategory]
        const link = "/directory/" + fentityCategory + "/" 

        return (
            <div>
                <h1 id="fentities-title">{fentityCategory}</h1>
                <div id="fentities-container">
                    {fentities.map((f, i) => {
                        return (
                            <Link to={link + f.name} key={i}>
                                <div className="mini">
                                    <img className="directory-img" src={f.imgUrl} alt="" />
                                    <span>{f.name}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>)
    }
}

export default Fentities