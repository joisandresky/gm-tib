import React, {Component} from 'react'

class KelompokDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            kld: props.klmpk,
            no: props.no
        }
    }

    render(){
        return(
            <li className="collection-item black-text">
                {this.state.kld.nama}
            </li>
        )
    }
}

export default KelompokDetail