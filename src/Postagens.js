function Postagens(props){
    return(
        <div className="area-posts">
              <div className="faixa1">
                <div className="f-esq">
                  <img src={props.userLogado}/>
                  </div>
                  <div className="f-cen">
                    <p className="username">{props.username}</p>
                    <p className="descricao">{props.descricao}</p>
                  </div>
                <div className="f-dir">
                  <img src='pontos.png'/>
                </div>
              </div>

              <div className="photo">
                <img src={props.imagem} />
              </div>

              <div className="faixa2">
                <div className="f2-esq">
                  <img src='coracao.png' />
                  <img src='comente.png' />
                  <img src='mandar.png' />
                </div>
                <div className="f2-dir">
                  <img src='marca.png' />
                </div>
              </div>

              <div className="legenda">
                <img src={props.userCurtida}/>
                <p>Gostos: <span className="txtNegrito">{props.username2}</span> e <span className="txtNegrito">outras pessoas</span></p>
                <p><span className="txtNegrito">{props.username}</span> {props.legenda} <span className="txtCinza">mais</span></p>
                <p className="txtCinza">Ver todos os {props.num_com} comentários</p>
                <p className="txtNegrito">{props.username3} <span className="txtNormal">{props.comentario1}</span></p>
                <p className="txtNegrito">{props.username4} <span className="txtNormal">{props.comentario2}</span></p>
                <p><span className="txtHora">HÁ {props.hora} HORAS</span></p>
              </div>

              <div className="areaComentarios">
                    <div className="areaComenEsq">
                        <img src="smile.png" />
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