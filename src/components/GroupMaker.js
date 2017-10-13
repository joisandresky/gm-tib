import React, {Component} from 'react'

import Mahasiswa from './Mahasiswa'
import Kelompok from './Kelompok'

class GroupMaker extends Component {
    constructor(){
        super()
        this.state = {
            mahasiswa: [],
            kelompok: []
        }
    }

    componentWillMount(){
        this.loadMahasiswa()
    }

    loadMahasiswa(){
        let mhs = [
            { nama: 'Jois Andresky', npm: '43A87006150581'},
            { nama: 'Saepul Anwar', npm: '43A87006150249'},
            { nama: 'Ines', npm: '43A87006150100'},
            { nama: 'Dzikra Rifat Akmal', npm: '43A87006150224'},
            { nama: 'Luffy M.S.', npm: '43A87006150250'},
            { nama: 'Rivaldi A.M.', npm: '43A87006150075'},
            { nama: 'Anita', npm: '43A87006150076'},
            { nama: 'Fenny E.L.', npm: '43A87006150078'},
            { nama: 'Dessy Rachmawati', npm: '43A87006150096'},
            { nama: 'Siti Mayasyaroh', npm: '43A87006150104'},
            { nama: 'Vivianti Rivai', npm: '43A87006150105'},
            { nama: 'Sintia Apriliani', npm: '43A87006150112'},
            { nama: 'Rohana', npm: '43A87006150102'},
            { nama: 'Choirul Iqbal', npm: '43A87006150127'},
            { nama: 'M. Tasrifuddin', npm: '43A87006150133'},
            { nama: 'Tulus', npm: '43A87006150161'},
            { nama: 'Tunik D.L.', npm: '43A87006150176'},
            { nama: 'M. Hendri', npm: '43A87006150225'},
            { nama: 'P. Nadia', npm: '43A87006150226'},
            { nama: 'R. Gilang', npm: '43A87006150227'},
            { nama: 'Ahmad Kurnianto', npm: '43A87006150231'},
            { nama: 'M. Iqbal R.', npm: '43A87006150233'},
            { nama: 'Roky A.D.', npm: '43A87006150234'},
            { nama: 'Ahmad Nabrih', npm: '43A87006150236'},
            { nama: 'Deny I.G.', npm: '43A87006150243'},
            { nama: 'Yudhi J.', npm: '43A87006150245'},
            { nama: 'Ahmad Fadloli', npm: '43A87006150254'},
            { nama: 'Rizal Firmansyah', npm: '43A87006150272'},
            { nama: 'Ferra Fernanda', npm: '43A87006150593'},
            { nama: 'Jaka Kelana', npm: '43A87006150600'},
            { nama: 'Qori I.', npm: '43A87006150085'},
            { nama: 'Firda W.', npm: '43A87006150071'},
            { nama: 'Hari A.', npm: '43A87006150229'},
            { nama: 'Fahmi F', npm: '43A87006150081'},
            { nama: 'Nanang K', npm: '43A8706150246'},
            { nama: 'Nur Huda', npm: '43A87006150120'}
        ]

        this.setState({mahasiswa: mhs}, () => {
            console.log('total state mhs: ' + this.state.mahasiswa.length)
            console.log(this.state.kelompok.length)
        })
    }

    getAngkaRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    cekMhs(mhs){
        let m = mhs
        console.log(m)
        if(this.state.kelompok.length > 0){
            for(let i = 0; i < this.state.kelompok.length;i++){
                for(let j = 0; j < i; j++){
                    if(m.npm === this.state.kelompok[i][j].npm){
                        return false
                    } else {
                        return true
                    }
                }
            }
        } else {
            return true
        }
    }

    onProses(e){
        e.preventDefault()
        let mhs = this.state.mahasiswa
        let urut = 0
        let max = this.refs.max_org.value
        const total_kelompok = this.hitungTotalKelompok(mhs.length, max)
        let isKoma = total_kelompok % 1 !== 0 ? true : false;
        let tk = isKoma ? Math.floor(total_kelompok) : Math.floor(total_kelompok)
        let kelompok = new Array(tk)
        let temp = new Array(parseInt(max))
        let orang = null
        let index = 0
        if(max <= mhs.length && max > 0){
            for(let i = 0; i < tk;i++){
                for(let j = 0;j < parseInt(max);j++){
                    if(temp.length <= parseInt(max)){
                        if(mhs.length >= parseInt(max)){
                            orang = mhs[Math.floor(Math.random() * mhs.length)]
                            temp[j] = orang
                            console.log(orang)
                            index = mhs.findIndex(org => org.npm === orang.npm)
                            mhs.splice(index, 1)
                            if((j+1) === parseInt(max)){
                                kelompok[i] = temp
                                temp = new Array(parseInt(max))
                            }
                        } else {
                            // temp = mhs
                            // kelompok[i] = temp
                            orang = mhs[Math.floor(Math.random() * mhs.length)]
                            temp[j] = orang
                            index = mhs.findIndex(org => org.npm === orang.npm)
                            mhs.splice(index, 1)
                            if(mhs.length % 1 === 0){
                                kelompok[i] = temp
                                temp = new Array(parseInt(max))
                            } else {
                                kelompok[i] = temp
                                temp = new Array(parseInt(max))
                            }
                            console.log('Sisa: ' +mhs.length)
                        }
                    } else {
                        temp = new Array(parseInt(max))
                    }
                }
                if((i + 1 ) === tk){
                    mhs = []
                    this.setState({kelompok: kelompok}, () => {
                        
                        console.log(total_kelompok)
                    })
                }
            }
        } else {
            alert('Pembagi Lebih Besar dari pada Nilai atau mungkin Kamu membagi nya dengan 0 ya jelas gak bisa bang gimana sih inget lah bagi-bagian kan udah di ajarin pas sd kan bang :(')
        }
    }

    hitungTotalKelompok(total_mhs, max_org){
        return total_mhs / parseInt(max_org)
    }

    acakPeserta(mhs, maksimal, tk){
        return 1
    }

    getSatuPeserta(urutan, mhs){
        for(let i = 0; i <= mhs.length;i++){
            if(urutan === i){
                return mhs[i]
            }
        }
    }

    render(){
        const mhs = this.state.mahasiswa.map((mhsnya, i) => {
            return(
                <Mahasiswa key={mhsnya.npm} mahasiswa={mhsnya} />
            )
        })
        const klmpk = this.state.kelompok.map((kl, key) => {
            console.log(kl)
            return (
                <Kelompok key={key} kelompok={kl} no={key}/>
            )
        })
        return (
            <div>
                <div className="row">
                    <div className="col s8">
                        <h3>Buat Kelompok</h3>
                        <div className="row">
                            <div className="input-field col s6">
                                <input type="text" name="max_org" ref="max_org" />
                                <label htmlFor="max_org">Maksimal Anggota</label>
                            </div>
                            <div className="input-field col s4">
                                <button onClick={this.onProses.bind(this)} className="btn">Proses</button>
                            </div>
                        </div>
                        <div className="row">
                        {klmpk}
                        </div>
                    </div>
                    <div className="col s4">
                        <p>Total Mahasiswa: {this.state.mahasiswa.length}</p>
                        <h3>List Mahasiswa</h3>
                        <ul className="collection">
                            {mhs}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupMaker