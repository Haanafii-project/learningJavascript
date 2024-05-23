import { Component } from "react";
import { v4 as uuidv4 } from 'uuid'; 
import ListPengunjung from "./ListPengunjung";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    id: uuidv4(),
                    nama: 'Hanafi',
                    umur: 18,
                    jenisKelamin: 'Pria'
                },
                {
                    id: uuidv4(),
                    nama: 'Pita',
                    umur: 17,
                    jenisKelamin: 'Wanita'
                },
                {
                    id: uuidv4(),
                    nama: 'Nuri',
                    umur: 10,
                    jenisKelamin: 'Pria'
                },
            ]
        }
    }

    hapusPengunjung = (id) => {
        const newListPengunjung = this.state.data.filter((item) => item.id !== id)
        
        this.setState({data : newListPengunjung})
    }

    tambahPengunjung = (newUser) => {
        const newPengunjung = {id : uuidv4(), ...newUser}

        this.setState({data : [...this.setState.data, newPengunjung]})
    }

    render () {
        return (
            <div>
                <ListPengunjung data={this.state.data}/>
            </div>
        )
    }
}

export default Home