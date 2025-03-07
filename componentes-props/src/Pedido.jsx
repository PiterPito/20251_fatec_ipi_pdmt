const Pedido = (props) => {
    return (
            <div className="d-flex">
              <div className="d-flex align-items-center">
                <i className={'fa-solid ${props.icone} fa-2x fa-beat'}></i>
              </div>
              <div className="flex-grow-1 border ms-3 p-3">
                <h4 className="text-center">{props.titulo}</h4>
                <p className="text-center">{props.descricao}</p>
              </div>
            </div>
    )
}

export default Pedido