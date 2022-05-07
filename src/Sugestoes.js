function Sugestoes(props){
    return(
        <div className="linha">
                <div className="f3-esq">
                    <img src={props.users} />
                </div>
                <div className="f3-cen">
                    <p className="txtNegrito">{props.userLogado}</p>
                    <p className="txtCinza">{props.biografia}</p>
                </div>
                <div className="f3-dir">
                    <p className="txtAzul">Seguir</p>
                </div>  
        </div>
    )
}

export default Sugestoes;