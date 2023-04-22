import React from 'react'
import './CSS/style.css'
function Card(props) {
  return (
    <div className='container mt-5'>
        
    <div className="card">
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.p}</p>
    <a href={props.link} className="btn btn-primary">{props.btn}</a>
  </div>
</div>
</div>
  )
}

export default Card