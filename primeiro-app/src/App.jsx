import './styles.css'
function App () {
  const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}
  const textoDoRotulo = 'Nome:'
  const obterTextoDoBotao = () => 'Enviar'
  const aoClicarNoBotao = () => alert('Clicou')
  return(
    <div
    style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8 }}>
      <label 
      htmlFor="nome"
      className='rotulo'
      style={{display: 'block', marginBottom: 4}}>
        {textoDoRotulo}
      </label>
      <input 
      type="text"
      id="nome"
      style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}/>
    <button
    onClick={() =>oClicarNoBotao()}
      style={estilosBotao}>
      {obterTextoDoBotao()}
    </button>
    </div>
  )
}

export default App