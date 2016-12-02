import React from 'react'
import { render } from 'react-dom'
import App from './App'

require('../sass/app.scss')

const links = [
    ["Laravel", "https://github.com/laravel/laravel"],
    ["React", "https://github.com/facebook/react"],
    ["Boiler-Plate", "https://github.com/ravencole/Laravel-React-Boilerplate"]
]

render(<App links={links} />, document.getElementById('App'))
