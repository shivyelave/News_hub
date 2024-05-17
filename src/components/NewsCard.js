import React, { Component } from 'react'

export class NewsCard extends Component {
   
  render() {
    let {title,description,urlToImage,url, author, date}=this.props

    return (
      <>
      <div className="card" style={{width : "18rem"}}>
        <img src={urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary"><strong>By - </strong>{author} </small></p>
          <p className="card-text"><small className="text-body-secondary"> <strong>Time - </strong>{new Date(date).toLocaleString('en-US', { year: 'numeric', month: 'short', day: '2-digit',hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false  })}</small></p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
      </>
    )
  }
}

export default NewsCard