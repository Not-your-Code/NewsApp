import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: [],
            loading: false,
            page: 2,
            totalResults: 0

        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1, this.props.category.length)} - News Palace `
    }


    async updateNews(){
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5586d356392a43049b140af494e7004a&page=${this.state.page}&pageSize=${this.props.pagesize}`
        let data = await fetch(url);

        let parsed_data = await data.json();
        console.log(parsed_data);
        this.setState({
            article: parsed_data.articles,
            totalArticles: parsed_data.totalResults,
            loading: false,
            

        })

    }
    async componentDidMount() {
        this.updateNews()
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5586d356392a43049b140af494e7004a&page=${this.state.page}&pageSize=${this.props.pagesize}`
         this.updateNews();
        let data = await fetch(url);
        this.setState({ loading: true })
        let parsed_data = await data.json();
        console.log(parsed_data);
        this.setState({ article: parsed_data.articles })
        this.setState({ page: this.state.page - 1, loading: false })
    }
    handleNextClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5586d356392a43049b140af494e7004a&page=${this.state.page}&pageSize=${this.props.pagesize}`
        this.updateNews();
        let data = await fetch(url);
        this.setState({ loading: true })
        let parsed_data = await data.json();
        console.log(parsed_data);
        this.setState({ article: parsed_data.articles })
        this.setState({ page: this.state.page + 1, loading: false, time: parsed_data.publishedAt })

    }

    fetchMoreData =  async()=>{
        this.setState({page: this.state.page+1})
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5586d356392a43049b140af494e7004a&page=${this.state.page}&pageSize=${this.props.pagesize}`
        let data = await fetch(url);

        let parsed_data = await data.json();
        console.log(parsed_data);
        this.setState({
            article:this.state.article.concat( parsed_data.articles),
            totalArticles: parsed_data.totalResults,
            loading: false,
            

        })
       
    }
    render() {
        return (

            <>
                <h2 class="text-dark-emphasis text-center">NewsPalace - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1, this.props.category.length)} Headlines </h2>
                <br></br>
                {  /*  {this.state.loading && <Spinner />}*/}
                <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.article.length != this.state.totalArticles}
                    loader={<Spinner/>}
                    style={{
                        overflow  : 'hidden',
                        scroll : 'smooth'
                    }}
                > 
                
                    <div className='container overflow-hidden'>
                    <div className='row overflow-hidden'>
                        {this.state.article.map((element, key) => {
                            return <div className='col-md-3 overflow-hidden' key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                                    imageUrl={element.urlToImage} newsUrl={element.url} time={element.publishedAt.slice(0, 10)} />
                            </div>
                           
                        })}
                         </div>
                    </div>
                    
                </InfiniteScroll>

                {/*<div className='container my-3 text-center'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-2" onClick={this.handlePrevClick}>previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalArticles / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                    </div> */}
            </>
        )
    }
}


News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pagesize: PropTypes.number,
    time: PropTypes.string
};

News.defaultProps = {
    country: 'in',
    pagesize: 12
}
export default News