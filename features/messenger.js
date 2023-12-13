import { PubSub } from "../libs/pub-sub.js";

export const myMessenger = () => {
    const parentDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'Pub-Sub Model';
    h2.style.textAlign = 'center';

    const messageDiv = document.createElement('div');
    messageDiv.classList.add(...['row']);

    const div1 = document.createElement('div');
    div1.classList.add(...['col-lg-6']);

    const div2 = document.createElement('div');
    div2.classList.add(...['col-lg-6']);

    const header1 = document.createElement('h3');
    header1.textContent = 'Bob';

    const header2 = document.createElement('h3');
    header2.textContent = 'Mary';

    const txtArea1 = document.createElement('textarea');
    txtArea1.classList.add(...['form-control']);
    txtArea1.rows = 5;
    txtArea1.id = 'txtArea1';

    const txtArea2 = document.createElement('textarea');
    txtArea2.id = 'txtArea2';
    txtArea2.rows = 5;
    txtArea2.classList.add(...['form-control']);

    const btn1 = document.createElement('button');
    btn1.id = 'btn1';
    btn1.classList.add(...['btn', 'btn-success', 'float-right', 'my-2']);
    btn1.textContent = 'Send';

    const btn2 = document.createElement('button');
    btn2.id = 'btn2';
    btn2.classList.add(...['btn', 'btn-success', 'float-right', 'my-2']);
    btn2.textContent = 'Send';

    btn1.onclick = () => {
        PubSub.publish('messageByBob', txtArea1.value)
        txtArea1.value = '';
    }
    btn2.onclick = () => {
        PubSub.publish('messageByMary', txtArea2.value)
        txtArea2.value = '';
    }

    div1.replaceChildren(...[header1, txtArea1, btn1]);
    div2.replaceChildren(...[header2, txtArea2, btn2]);
    messageDiv.replaceChildren(...[div1, div2]);

    PubSub.subscribe('messageByMary', (data) => {
        const para = document.createElement('p');
        para.textContent = data;
        div1.appendChild(para);
    });

    PubSub.subscribe('messageByBob', (data) => {
        const para = document.createElement('p');
        para.textContent = data;
        div2.appendChild(para);
    });

    parentDiv.replaceChildren(...[h2, messageDiv]);
    return parentDiv;
}