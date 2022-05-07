function Cabecalho(){
    return(
        <header>
          <div className="centrao">
            <div className="h-esq">
              <img src='Instagram_logo.svg.png' />
            </div>
            <div className="h-cen">
              <img src='procurar.png' />
              <p>Pesquisar</p>
            </div>
            <div className="h-dir">
              <img src='home.png' />
              <img src='bate-papo.png' />
              <img src='postagem-no-instagram.png' />
              <img src='explorar.png' />
              <img src='coracao.png' />
              <span className="userlog"><img src="userlogado.jpg"/></span>
            </div>
          </div>
        </header>
    )
}

export default Cabecalho;