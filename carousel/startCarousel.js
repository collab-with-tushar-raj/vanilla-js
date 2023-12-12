let intervalId;
let counter = 0;

export const start = (images, timeInMilliseconds, rootNode) => {
    const div = document.createElement('div');
    div.id = 'carousel_div';
    div.style.border = '1px solid';
    div.style.width = '500px';
    div.style.height = '500px';
    startInterval(images, div, timeInMilliseconds);
    rootNode.appendChild(div);
}

const addChildToParent = (parent, childNode, attrName, attrValue) => {
    parent.replaceChildren();
    childNode.setAttribute(attrName, attrValue);
    parent.appendChild(childNode);
}

const startInterval = (images, div, timeInMilliseconds) => {
    function displayImage() {
        if (counter > images.length - 1) {
            counter = 0;
        }
        const imageNode = document.createElement('img');
        imageNode.width = 500; imageNode.height = 500;
        addChildToParent(div, imageNode, 'src', images[counter]['urls']['thumb']);
        counter++;
    }
    intervalId = setInterval(displayImage, timeInMilliseconds)
}

export const onMouseEnter = () => {
    const div = document.querySelector('#carousel_div')
    div.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
}

export const onMouseLeave = (images, timeInMilliseconds) => {
    const div = document.querySelector('#carousel_div');
    div.addEventListener('mouseleave', () => {
        startInterval(images, div, timeInMilliseconds);
    });
}