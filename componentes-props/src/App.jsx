import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
const App = () => {
  const textoOK = 'Já chegou'
  const textoNOK = 'Ainda não chegou'
  const funcaoOK = () => alert{'Obrigado pelo feedback'}
  const funcaoNOK = () => alert{'Verificamos o que houve'}
  const componenteFeedback = <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK}/>
  return (
    <div className="container border rounded mt-2">
      <div className="row">

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao>
            cabecalho="22/02/2025">
          <Pedido
          icone="fa-hard-drive"
          titulo="SSD"
          descricao="SSD Kingston A400 - SATA"/>
          {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
        <Cartao>
        cabecalho="22/02/2025">
        <Pedido
          icone="fa-laptop"
          titulo="Notebook"
          descricao="Notebook Dell i7 166b"/>
          {componenteFeedback}
        </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
        <Cartao>
          cabecalho="13/02/2025">
        <Pedido
          icone="fa-computer-mouse"
          titulo="Mouse"
          descricao="Mouse sem fio Microsoft"/>
          {componenteFeedback}
        </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
        <Cartao>
            cabecalho="20/02/2025">
        <Pedido
          icone="fa-keyboard"
          titulo="Teclado"
          descricao="Teclado sem fio Microsoft"/>
          {componenteFeedback}
        </Cartao>
        </div>

      </div>

      

    </div>
  )
}

export default App