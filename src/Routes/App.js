import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu.jsx'
import Detail from '../components/Detail.jsx'



function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Menu} />
                    {/* <Route path="/:tipo/:productId" component={(props) => <Detail{...props} />} /> */}
                    <Route path="/:tipo/:productId" component={Detail} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
