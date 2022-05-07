function Sugestoes(props){
    return(
        <div className="linha">
                <div className="f3-esq">
                    <img src={props.users} />
                </div>
                <div className="f3-cen">
                    <a href=""><p className="txtNegrito">{props.userLogado}</p></a>
                    <p className="txtCinza">{props.biografia}</p>
                </div>
                <div className="f3-dir">
                    <a href=""><p className="txtAzul">Seguir</p></a>
                </div>  
        </div>
    )
}

export default Sugestoes;