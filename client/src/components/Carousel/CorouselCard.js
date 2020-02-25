import React from "react";
import Carousel from "react-bootstrap/Carousel";


export const CarouselCard = (article) => {

    return (
        <>

            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src= {article.src}
                    alt = {`img for ${article.title}`}
                />
            </Carousel.Item>
            <Carousel.Caption>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
            </Carousel.Caption>
        </>
    )
}

export default CarouselCard;