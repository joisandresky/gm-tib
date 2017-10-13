import React, {Component} from 'react'

class Mahasiswa extends Component {
    constructor(props){
        super()
        this.state = {
            mhs: props.mahasiswa
        }
    }

    render(){
        return(
            <li className="collection-item">
                Nama: {this.state.mhs.nama} | NPM: {this.state.mhs.npm}
            </li>
        )
    }
}

export default Mahasiswa