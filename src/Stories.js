function Stories(props){
    return(
        <td>
            <a href=""><img src={props.Storie} /></a>
            <p>{props.nomeUser}</p>
        </td>
    )
}

export default Stories;