function customRender(reactElement, mainContainer) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.traget)

    // mainContainer.appendChild(domElement)

    const domElemnt = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in props) {
        if(prop == children) continue;
    }
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)