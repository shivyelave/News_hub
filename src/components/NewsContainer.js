import React, { Component } from "react";
import NewsCard from "./NewsCard";
import Loader from "./Loader";

export class NewsContainer extends Component {
  constructor(props) {
    super(props);
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
    //  'https://gnews.io/api/v4/top-headlines?country=${country}&category=${category}&lang=en&max=${pageSize}&apikey=e2c4054f8b174b8688d7593e58930a1c;
    let url = `https://gnews.io/api/v4/top-headlines?country=${country}&category=${category}&lang=en&max=${pageSize}&apikey=e2c4054f8b174b8688d7593e58930a1c`;
    this.setState({loading:true})
    let data = await fetch(url);
    let pharsedData = await data.json();
    document.title = `News Hub - ${ this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`
    
    this.setState({
      articles: pharsedData.articles,
      loading:false,
      total:pharsedData.totalArticles
    });
  }


  // nextpage = async()=>{


  //   let pageSize = this.props.pageSize;
  //   let country = this.props.country;
  //   let category = this.props.category;
  //   let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3600c65d8c42440ea41e7ca1fe8e76bb&pagesize=${pageSize}&page=${this.state.page+1}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let pharsedData = await data.json();
  //   this.setState({
  //     articles: pharsedData.articles,
  //     page:this.state.page+1,
  //     loading:false

  //   });

    
  
  // }
  // previousPage = async()=>{
  //   this.setState(this.state.loading=true)

  //   let pageSize = this.props.pageSize;
  //   let country = this.props.country;
  //   let category = this.props.category;
  //   let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3600c65d8c42440ea41e7ca1fe8e76bb&pagesize=${pageSize}&page=${this.state.page-1}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let pharsedData = await data.json();
  //   this.setState({
  //     articles: pharsedData.articles,
  //     loading:false,
  //     page:this.state.page-1
  //   });


  
 // }
 render() {
  const { articles, loading } = this.state;

  return (
    <>
      <div className="marginTop  margin-bottom container">
        <h1 className="d-flex justify-content-center">
          Trending Now: Explore Today's Top Stories - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}
        </h1>
        <div>{loading && <Loader />}</div>
        {articles && articles.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-evenly gap-3">
            {articles.map((element) => (
              <div key={element.url} className="my-3">
                <NewsCard
                  title={element.title}
                  description={element.description}
                  image={!element.image ? 'https://images.moneycontrol.com/static-mcnews/2024/05/20240501104341_market_stocks_sensex_Nifty.jpg' : element.image}
                  url={element.url}
                  //author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>No articles to display</div>
        )}
      </div>
      {/* <div className="d-flex justify-content-around my-3">
    
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousPage}>&larr; Previous </button>
      <button disabled={this.state.page>=Math.ceil(this.state.total/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.nextpage}>Next &rarr;</button>
    
      </div> */}
    </>
  );
}
    
 
}

export default NewsContainer;
