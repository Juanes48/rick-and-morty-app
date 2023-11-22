import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className="row">
        {
            characters.map((item, index) => (
                <div key ={index}className="col mb-4">
                    <div className="card p-3 mb-2 " style={{minWidth: "200px", backgroundColor:"#F2FFE9",}}>
                        <img class="rounded-circle" src={item.image} alt="" />
                        <div className="card-boby rounded">
                            <h5 className="card-tittle">{item.name}</h5>
                            <hr />
                            <p>status: {item.status}</p>
                            <p>genero: {item.gender}</p>
                            <p>especie: {item.species}</p>
                            <p>location: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        
    </div>
  )
}

export default Characters