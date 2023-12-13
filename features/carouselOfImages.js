import { Carousel } from "../libs/carousel.js";

export const carouselOfImages = () => {
    const parentDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'Carousel';
    h2.style.textAlign = 'center';
    const div = document.createElement('div');
    div.id = 'carousel_div';
    div.style.border = '1px solid';
    div.style.width = '500px';
    div.style.height = '500px';
    div.style.margin = '0 auto';
    getData().then(images => {
        Carousel.start(images, 500, div);
        onMouseEnter(div);
        onMouseLeave(div);
    });
    parentDiv.replaceChildren(...[h2, div]);
    return parentDiv;
}

const getData = async () => {
    const apiResponse = await fetch(`https://api.unsplash.com/photos/`, {
        headers: {
            'Authorization': `Client-ID iRw2TcH8Mu2Akeo5fxgb2BNZDAhFB4bTpXajlaYyw7Q`
        }
    })
    const listOfImages = await apiResponse.json();
    return listOfImages;
}

const onMouseEnter = (element) => {
    element.addEventListener('mouseenter', () => {
        Carousel.stop();
    });
}

const onMouseLeave = (element) => {
    element.addEventListener('mouseleave', () => {
        Carousel.resume();
    });
}