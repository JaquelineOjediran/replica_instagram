function Cabecalho(){
    return(
        <header>
          <div className="centrao">
            <div className="h-esq">
              <a href=""><img src='Instagram_logo.svg.png' /></a>
            </div>
            <div className="h-cen">
              <img src='procurar.png' />
              <a href=""><p>Pesquisar</p></a>
            </div>
            <div className="h-dir">
              <a href=""><img src='home.png' /></a>
              <a href=""><img src='bate-papo.png' /></a>
              <a href=""><img src='postagem-no-instagram.png' /></a>
              <a href=""><img src='explorar.png' /></a>
              <a href=""><img src='coracao.png' /></a>
              <a href=""><span className="userlog"><img src="userlogado.jpg"/></span></a>
            </div>
          </div>
        </header>
    )
}

export default Cabecalho;