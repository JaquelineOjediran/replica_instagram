import Postagens from "./Postagens";
import Stories from "./Stories";
import Sugestoes from "./Sugestoes";

function Conteudo(){
    return(
        <div className="conteudo">
          <div className="c-esq">
            <div className="area-stories">
                <table>
                    <tr>
                        <Stories Storie='foto1.jpg' nomeUser="juu_trind" />
                        <Stories Storie='foto2.jpg' nomeUser="srkenyatta" />
                        <Stories Storie='foto3.jpg' nomeUser="bela_234" />
                        <Stories Storie='foto4.jpg' nomeUser="sbina.az" />
                        <Stories Storie='foto5.jpg' nomeUser="pick_ander" />
                        <Stories Storie='foto6.jpg' nomeUser="henryjack" />
                        <Stories Storie='otempo.jpg' nomeUser="otempo" />
                    </tr>
                </table>
            </div>
                <Postagens userLogado="sitemundonegro.jpg" userCurtida="muser.jpg" username="sitemundonegro" descricao="MUNDO NEGRO" imagem='riri.jpg' username2="carolinamarcal.psi" legenda="Um dos maiores eventos de moda do mundo, o Met Gala 2022 aconteceu nesta última segunda-feira (2). Pela primeira vez em...  " num_com="41" username3="yrispalmer" username4="maadu_aandrade" comentario1="Merecedora, mamãe maravilhosa 😍❤️👏" comentario2="Total admiração. Merece muito" hora="5"  />
                <Postagens userLogado="proauser.png"  userCurtida="muser2.jpg" username="instituto.proa" descricao="INSTITUTO PROA" imagem='proa.jpg' username2="polianerochapsi" legenda="💙 Os #JovensEmpregados dessa semana foram contratados pelas empresas: @btgpactualempresas, Porto Sudeste Brasil, Estúdio... " num_com="87" username3="drthaisaliabadi" username4="isabellabernardesf" comentario1="Parabéns a todos pela conquista. ⬆️❤️" comentario2="👏🏻👏🏻💙💙💙💙" hora="4"  />
                <Postagens userLogado="otempo.jpg"  userCurtida="muser3.webp" username="otempo" descricao="JORNAL ONLINE" imagem='vaquinha.jpg' username2="espacoo_baluarte" legenda="🐮 'EU VOU FAZER UM LEILÃO...' - 'Metade' da vaca Viatina-19, de pouco mais de três, foi vendida por cerca de R$ 3,9... " num_com="46" username3="luolliveira_" username4="gabrielmercadante" comentario1="Chocadaaaa 🐮" comentario2="Pensando aqui 🤡🥵" hora="6"  />
                <Postagens userLogado="fotografouser.webp"   userCurtida="muser4.webp"username="jordanfotografo" descricao="São Paulo" imagem='fotografo.webp' username2="denisefragaoficial" legenda="Um dia lindo de trabalho com a maravilhosa @denisefragaoficial! Eu me apaixonei ainda criança por cinema muito por culpa... " num_com="83" username3="sabrinxtn" username4="asingh23_" comentario1="🔥🔥🔥🔥🔥" comentario2="Que incrível ❤️❤️😍😍" hora="3"  />
                <Postagens userLogado="violadavisuser.webp"   userCurtida="muser5.jpg"username="violadavis" descricao="Atriz" imagem='violadavis.webp' username2="ajanaomi_king" legenda="#TBT: Miss my #HTGAWM family. Look at my G ❤️ #Keating5 #Season3 #HTGAWM #TGIT..." num_com="28" username3="esterpeix" username4="gabisilva0212"  comentario1="Awwwwww memories ❤️❤️❤️" comentario2="Miss u Vee! Calls for a reunion?!" hora="2" />  
          </div>
          
        <div className="aside">
            <div className="a-faixa1">
                <div className="f1-esq">
                   <a href=""><img src="userlogado.jpg"/></a>
                </div>
                <div className="f1-cen">
                    <a href=""><p className="txtNegrito">ojediranjaque</p></a>
                    <p className="txtCinza">🇳🇬 | Jaqueline Ojediran</p>
                </div>
                <div className="f1-dir">
                    <a href=""><p className="txtAzul">Mudar</p></a>
                </div>
            </div>
            <div className="a-faixa2">
                <div className="f2-esq">
                    <p className="txtCinzaF2">Sugestões para você</p>
                </div>
                <div className="f2-dir">
                    <a href=""><p className="txtNegritoF2">Ver todas</p></a>
                </div>
            </div>
            <div className="a-faixa3">
                <Sugestoes users='user1.jpg' userLogado="soph_fischer" biografia="Segue-te"/>
                <Sugestoes users='user2.jpg' userLogado="vi._.batista" biografia="Vocês seguem um ao outro"/>
                <Sugestoes users='user3.jpg' userLogado="ana_luu_costa" biografia="Segue conceitopreto"/>
                <Sugestoes users='user4.webp' userLogado="sebastiaoteodoruo" biografia="Seguido por soph_fischer"/>
                <Sugestoes users='user5.jpg' userLogado="whatsupnati" biografia="Segue-te"/>
            </div>
            <div className="a-faixa4">
                <a href=""><p className="txtRodape">Sobre • Ajuda • Imprensa • API • Empregos • Privacidade • Termos • Localizações • Contas principais • Hashtags • Idioma</p></a>
                <p className="txtRodape">© 2022 INSTAGRAM FROM META</p>
            </div>
        </div>
        </div>
    )
}

export default Conteudo;