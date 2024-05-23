const ListItem = ({item}) => {

    return(
        <tr>
            <td>{item.nama}</td>
            <td>{item.umur}</td>
            <td>{item.jenisKelamin}</td>
        </tr>
    )
}

export default ListItem