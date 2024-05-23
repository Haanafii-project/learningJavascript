import ListItem from "./ListItem"

const ListPengunjung = (props) => {
    const {data} = props

    return (
        <div>
            <table>
                <thead>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                </thead>
                <tbody>

                    {data.map((passenger) => <ListItem key={passenger}/>)}

{/*                     
                    {data.map((pasenger) => (
                        <tr key={pasenger}>
                            <td>{pasenger.nama}</td>
                            <td>{pasenger.umur}</td>
                            <td>{pasenger.jenisKelamin}</td>
                        </tr>
                    ))}
                     */}
                </tbody>
            </table>
        </div>
    )
}

export default ListPengunjung