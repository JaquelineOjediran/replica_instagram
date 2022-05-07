function Stories(props){
    return(
        <td>
            <img src={props.Storie} />
            <p>{props.nomeUser}</p>
        </td>
    )
}

export default Stories;