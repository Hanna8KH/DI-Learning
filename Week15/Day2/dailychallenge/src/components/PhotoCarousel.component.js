import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./PhotoCarousel.component.css"
export function PhotoCarousel() {
        return (
            <Carousel>
                <div>
                    <img src="hk.jpeg" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="lv.webp" />
                    <p className="legend">Las Vegas</p>
                </div>
                <div>
                    <img src="japan.webp" />
                    <p className="legend">Japan</p>
                </div>                
                <div>
                    <img src="macao.webp" />
                    <p className="legend">Macao</p>
                </div>
            </Carousel>
        );
    
};

