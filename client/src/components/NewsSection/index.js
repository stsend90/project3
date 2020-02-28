import React from 'react';
import Card from 'react-bootstrap/Card';
import NewsCard from './newsCard';


class ControlledCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    

    componentDidMount() {
        fetch("http://newsapi.org/v2/everything?" + "q=Breweries&" + "sortBy=popularity&" + "apiKey=b504cfeca75d426188bed3c20f49bf93")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result.articles)
              this.setState({
                isLoaded: true,
                items: result.articles
              })
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
          
      };

      renderCard = () => {
          const CardItems = this.state.items.map(article => {
              return (
                  <NewsCard
                    key={article.publishedAt}
                    article={article}
                    />
              )
          });
          return <Card>{CardItems}</Card>;
      }

      render(){
        const { error, isLoaded, items } = this.state;
        if(error) {
          return <div>Error: {error.message}</div>
        } else if (!isLoaded){
          return <div>Loading...</div>
        }else {
          return(
              this.renderCard()
          );
                }
      }
    }

export default ControlledCard;
