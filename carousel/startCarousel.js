let intervalId;
let counter = 0;
let collection;
let timer;

export const start = (array, timeInMilliseconds, rootNode) => {
    collection = array;
    timer = timeInMilliseconds;
    const div = document.createElement('div');
    div.id = 'carousel_div';
    div.style.border = '1px solid';
    div.style.width = '500px';
    div.style.height = '500px';
    startInterval(div);
    rootNode.appendChild(div);
}

const addChildToParent = (parent, childNode, attrName, attrValue) => {
    parent.replaceChildren();
    childNode.setAttribute(attrName, attrValue);
    parent.appendChild(childNode);
}

const startInterval = (div) => {
    function displayImage() {
        if (counter > collection.length - 1) {
            counter = 0;
        }
        const imageNode = document.createElement('img');
        imageNode.width = 500; imageNode.height = 500;
        addChildToParent(div, imageNode, 'src', collection[counter]['urls']['thumb']);
        counter++;
    }
    intervalId = setInterval(displayImage, timer)
}

export const onMouseEnter = () => {
    const div = document.querySelector('#carousel_div')
    div.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
}

export const onMouseLeave = () => {
    const div = document.querySelector('#carousel_div');
    div.addEventListener('mouseleave', () => {
        startInterval(div);
    });
}