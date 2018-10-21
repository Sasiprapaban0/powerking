import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import RootContainer from 'Containers/Root'
const render = Component => {
    ReactDOM.render(
        <AppContainer >
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
}

render(RootContainer)
// webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/Root', () => render(RootContainer))
}
