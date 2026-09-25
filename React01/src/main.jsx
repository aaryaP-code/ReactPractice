import React from 'react'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//   return (
//     <>
//       <h1>Custom App</h1>
//     </>
//   )
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )

const anotherUser = "Krishna Pandit"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  
    reactElement

)
