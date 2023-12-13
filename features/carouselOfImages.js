import { onMouseEnter, onMouseLeave, start } from "../libs/carousel.js";

export const carouselOfImages = async () => {
    const apiResponse = await fetch(`https://api.unsplash.com/photos/`, {
        headers: {
            'Authorization': `Client-ID iRw2TcH8Mu2Akeo5fxgb2BNZDAhFB4bTpXajlaYyw7Q`
        }
    })
    const images = await apiResponse.json();
    const rootDiv = document.querySelector('.root')
    start(images, 500, rootDiv);
    onMouseEnter();
    onMouseLeave();
}