import React, { Component } from "react";
import { NewsItem } from "./NewsItem";
import "../component_css/News.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "sports",
    pagesize: 16,
    totalResults: 0
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      total_results: "",
    };
    document.title=this.props.category;
  }

  updateNews = async () => {
    this.props.updateProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89ce06ecc69b44b4afb17d90b7b35c4f&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    this.props.updateProgress(40);
    let parsed_data = await data.json();
    this.props.updateProgress(70);
    this.setState({
      total_results: parsed_data.totalResults,
      articles: parsed_data.articles,
    });
    this.props.updateProgress(100);
  };

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89ce06ecc69b44b4afb17d90b7b35c4f&page=1&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({ loading: false });
    this.setState({
      total_results: parsed_data.totalResults,
      articles: parsed_data.articles,
    });
  }

  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 }, function () {
      this.updateNews();
    });
  };

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 }, function () {
      this.updateNews();
    });
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=89ce06ecc69b44b4afb17d90b7b35c4f&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsed_data.articles),
      total_results: parsed_data.totalResults,
    });

  };

  render() {
    return (
        <>
        <div className="headline">
          <h2>Todays Top News</h2>
        </div>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.totalResults}
          loader={<Spinner/>}
        >
        <div className="all_news_container">
          {!this.state.loading &&
            this.state.articles.map(function (element) {
              return (
                <>
                  <NewsItem
                    heading={element.title.slice(0, 50)}
                    desc={element.description}
                    url={element.url}
                    imageUrl={element.urlToImage}
                    date_time={element.publishedAt}
                    source={element.source.name}
                  />
                </>
              );
            })}
        </div>
        </InfiniteScroll>
      </>
    );
  }
}
