import React from 'react'

const Cards = (props) => {

    const {imagen, titulo, texto} = props

  return (
    <div className='card' style={{width:"18rem"}}>
        <img src={imagen} alt="..." className="card-img-top img-thumbnail" />
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{texto}</p>
            <a href="index.html" className="btn btn-primary">Ver mas</a>
        </div>
    </div>
  )
}

export default Cards