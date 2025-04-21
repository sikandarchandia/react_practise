import React, { Component } from "react";
import "./styling.css";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  
  async componentDidMount() {
    const API =
      "https://newsapi.org/v2/everything?q=tesla&from=2025-03-21&sortBy=publishedAt&apiKey=c240c860fab8431eaf449260fe4f61b5";

    const data = await fetch(API);

    const newData = await data.json();

    if (newData.articles) {
      this.setState({
        articles: newData.articles,
      });
    } else {
      console.log("could not find author");
    }
  }
  render() {
  
    return (
      <div>
        <h1>UK News start</h1>
        <div className="content">
          {this.state.articles.map((value, i) => (
            <div className="card1" key={i}>
              <div className="card-header">
                <h1>{value.author} </h1>
              </div>
              <div className="card-body">
                <img
                  src={
                    value.urlToImage
                      ? value.urlToImage
                      : "https://compote.slate.com/images/6b551018-5230-461f-b20c-65ced996c4cb.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560"
                  }
                  alt=""
                />
                <p>
                  {" "}
                  {value.content
                    ? value.description
                    : "Happy Friday! We're looking forward to warmer temperatures this weekend, and we hope you have some plans to enjoy them, too.\r\nIf you're traveling to JFK airport  this weekend, note that   trains aren… [+7571 chars]"}{" "}
                </p>
              </div>
              <div className="card-footer">
                {/* <a href={value.url} >Read More</a> */}
                <h4>
                  Publishes At: <span>{value.publishedAt}</span>{" "}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
