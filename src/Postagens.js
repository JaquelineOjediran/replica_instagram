function Postagens(props){
    return(
        <div className="area-posts">
              <div className="faixa1">
                <div className="f-esq">
                <a href=""><img src={props.userLogado}/></a>
                  </div>
                  <div className="f-cen">
                  <a href=""><p className="username">{props.username}</p></a>
                    <p className="descricao">{props.descricao}</p>
                  </div>
                <div className="f-dir">
                <a href=""><img src='pontos.png'/></a>
                </div>
              </div>

              <div className="photo">
                <img src={props.imagem} />
              </div>

              <div className="faixa2">
                <div className="f2-esq">
                  <a href=""><img src='coracao.png' /></a>
                  <a href=""><img src='comente.png' /></a>
                  <a href=""><img src='mandar.png' /></a>
                </div>
                <div className="f2-dir">
                  <a href=""><img src='marca.png' /></a>
                </div>
              </div>

              <div className="legenda">
                <img src={props.userCurtida}/>
                <p>Gostos: <a href=""><span className="txtNegrito">{props.username2}</span></a> e <a href=""><span className="txtNegrito">outras pessoas</span></a></p>
                <p><a href=""><span className="txtNegrito">{props.username}</span></a> {props.legenda} <span className="txtCinza">mais</span></p>
                <p className="txtCinza">Ver todos os {props.num_com} comentários</p>
                <p className="txtNegrito"><a href="">{props.username3} </a><span className="txtNormal">{props.comentario1}</span></p>
                <p className="txtNegrito"><a href="">{props.username4} </a><span className="txtNormal">{props.comentario2}</span></p>
                <p><span className="txtHora">HÁ {props.hora} HORAS</span></p>
              </div>

              <div className="areaComentarios">
                    <div className="areaComenEsq">
                        <a href=""><img src="smile.png" /></a>
                        <p className="txtCinza">Adicionar um comentário...</p>
                    </div>
                    <div className="areaComenDir">
                        <p className="txtAzul">Publicar</p>
                    </div>
                </div>
            </div>
    )
}

export default Postagens;