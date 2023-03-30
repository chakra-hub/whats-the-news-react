import React, {Component} from "react";
import '../component_css/NewsItem.css'
export class NewsItem extends Component {
    constructor(){
        super();
    }
    render(){
        let {heading, desc, url, imageUrl, source, date_time}=this.props
        return(
            <div className="news_container">
                <img className='news_image' src={imageUrl} alt="" />
                <div className="news_title">{heading}</div>
                <div className="news_desc">{desc}...</div>
                <div className="source">Source : {source}</div>
                <div className="time">On : {new Date(date_time).toString()}</div>
                <a href={url} target='_blank'><button className="read_more">read more</button></a>
            </div>
        );
    }
}