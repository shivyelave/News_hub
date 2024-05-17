import React, { Component } from "react";
import NewsCard from "./NewsCard";
import Loader from "./Loader";

export class NewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      total: null
    };
  }

  async componentDidMount() {

    let pageSize = this.props.pageSize;
    let country = this.props.country;
    let category = this.props.category;

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3600c65d8c42440ea41e7ca1fe8e76bb&pagesize=${pageSize}&page=1`;
    this.setState({loading:true})
    let data = await fetch(url);
    let pharsedData = await data.json();
    document.title = `News Hub - ${ this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`
    
    this.setState({
      articles: pharsedData.articles,
      loading:false,
      total:pharsedData.totalResults
    });
  }


  nextpage = async()=>{


    let pageSize = this.props.pageSize;
    let country = this.props.country;
    let category = this.props.category;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3600c65d8c42440ea41e7ca1fe8e76bb&pagesize=${pageSize}&page=${this.state.page+1}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let pharsedData = await data.json();
    this.setState({
      articles: pharsedData.articles,
      page:this.state.page+1,
      loading:false

    });

    
  
  }
  previousPage = async()=>{
    this.setState(this.state.loading=true)

    let pageSize = this.props.pageSize;
    let country = this.props.country;
    let category = this.props.category;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3600c65d8c42440ea41e7ca1fe8e76bb&pagesize=${pageSize}&page=${this.state.page-1}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let pharsedData = await data.json();
    this.setState({
      articles: pharsedData.articles,
      loading:false,
      page:this.state.page-1
    });


  
  }
  render() {

    return (
      <>
      
        <div className="mt-5 margin-bottom container ">
          <h1 className="d-flex  justify-content-center mb-4">
            Trending Now: Explore Today's Top Stories - { this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}
          </h1>
          <div>{this.state.loading && < Loader/>} </div>
          <div className="d-flex flex-wrap justify-content-evenly gap-3 ">
            {this.state.articles.map((element) => {
              return (
                <div key={element.url}>
                  <NewsCard
                    title={element.title}
                    description={element.description}
                    urlToImage={!element.urlToImage?'https://images.moneycontrol.com/static-mcnews/2024/05/20240501104341_market_stocks_sensex_Nifty.jpg':element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-around my-3">

          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousPage}>&larr; Previous </button>
          <button disabled={this.state.page>=Math.ceil(this.state.total/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.nextpage}>Next &rarr;</button>

          </div>
        </div>
      </>
    );
  }
}

export default NewsContainer;
