import React, {Component} from 'react'

import KelompokDetail from './KelompokDetail'

class Kelompok extends Component {
    constructor(props){
        super()
        this.state = {
            kelompok: props.kelompok,
            no: props.no
        }
    }

    render(){
        const data_kelompok = this.state.kelompok.map((dt, k) => {
            return(
                <KelompokDetail key={k} klmpk={dt} no={k}/>
            )
        })
        console.log(this.state.kelompok)
        return(
            <div className="col s6 m4">
                <div className="card grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Kelompok {this.state.no+1}</span>
                    <ul className="collection">
                        {data_kelompok}
                    </ul>
                </div>
                <div className="card-action">
                </div>
            </div>
            </div>
        )
    }
}

export default Kelompok