import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselCard from "./CorouselCard";

class ControlledCarousel extends React.Component {
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
              console.log(result)
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
  
    render(){
        return(
            <Carousel>
                {this.state.items && Array.isArray(this.state.items) && this.state.items.map(article => {
                    return (
                        <CarouselCard
                            key =  {article.publishedAt}
                            article = {article}
                        />
                    )
                })}
            </Carousel>
        )
    }

    //     <Carousel>
    //     <Carousel.Item>
    //       <img
    //         className="d-block w-100"
    //         src="holder.js/800x400?text=First slide&bg=373940"
    //         alt="First slide"
    //       />
    //       <Carousel.Caption>
    //         <h3>First slide label</h3>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         className="d-block w-100"
    //         src="holder.js/800x400?text=Second slide&bg=282c34"
    //         alt="Second slide"
    //       />
  
    //       <Carousel.Caption>
    //         <h3>Second slide label</h3>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         className="d-block w-100"
    //         src="holder.js/800x400?text=Third slide&bg=20232a"
    //         alt="Third slide"
    //       />
  
    //       <Carousel.Caption>
    //         <h3>Third slide label</h3>
    //         <p>
    //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //         </p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   </Carousel>
        
    
}
export default ControlledCarousel;
    //   const { error, isLoaded, items } = this.state;
    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    //   } else {
    //     return (
    //       <ul>
    //         {items.map(item => (
    //           <li key={item.name}>
    //             {item.name} {item.price}
    //           </li>
    //         ))}
    //       </ul>
    //     );
    //   }
    // }
  








// function ControlledCarousel() {
//     // const [index, setIndex] = useState(0);
//     // const [direction, setDirection] = useState(null);
  
//     // const handleSelect = (selectedIndex, e) => {
//     //   setIndex(selectedIndex);
//     //   setDirection(e.direction);
//     // };
  
//     return (
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=First slide&bg=373940"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Second slide&bg=282c34"
//             alt="Second slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Third slide&bg=20232a"
//             alt="Third slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
  
//   render(<ControlledCarousel />);
