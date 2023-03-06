import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl , newsUrl , time} = this.props
        return (
            <>
                <div className="card my-3 card-h-200 border border-dark" style={{ width: "18rem" }}>
              
                    <img src={imageUrl ? imageUrl:"https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body border border-light-subtle">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Go To Source</a>
                        <p class="card-text my-2"><small class="text-muted">Published At : {time}</small></p>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem