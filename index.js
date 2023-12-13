import { featureList } from "./features/index.js";

const main = () => {
    const rootDiv = document.querySelector('.root');
    const features = Object.keys(featureList);
    for(let i=0; i < features.length; i++){
        const containerDiv = document.createElement('div');
        containerDiv.classList.add(...['container', 'jumbotron']);
        containerDiv.appendChild(featureList[features[i]]())
        rootDiv.appendChild(containerDiv);
    }
}

main();