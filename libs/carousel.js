let intervalId;
let counter = 0;
let collection;
let timer;
let containingBox;

export const Carousel = {
    start(array, timeInMilliseconds, container) {
        initialise(array, timeInMilliseconds, container)
        startInterval();
    },
    stop() {
        clearInterval(intervalId);
    },
    resume() {
        startInterval();
    }
}

const initialise = (data, timeInMilliseconds, container) => {
    collection = data;
    timer = timeInMilliseconds;
    containingBox = container;
}

const addImageToContainer = (childNode, attrName, attrValue) => {
    containingBox.replaceChildren();
    childNode.setAttribute(attrName, attrValue);
    containingBox.appendChild(childNode);
}

const startInterval = () => {
    function displayImage() {
        if (counter > collection.length - 1) {
            counter = 0;
        }
        const imageNode = document.createElement('img');
        imageNode.width = 500; imageNode.height = 500;
        addImageToContainer(imageNode, 'src', collection[counter]['urls']['thumb']);
        counter++;
    }
    intervalId = setInterval(displayImage, timer)
}