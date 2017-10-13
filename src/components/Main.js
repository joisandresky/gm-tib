import React from 'react'
import {Switch, Route} from 'react-router-dom'

import GroupMaker from './GroupMaker'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={GroupMaker} />
        </Switch>
    </main>
)

export default Main