// eslint-disable-next-line
import React from 'react'
import { BrowserRouter as Router, Route, Switch, RouteComponentProps, withRouter } from 'react-router-dom'
import Checkin from 'pages/Checkin'

import Sidebar from 'components/Sidebar'
import UserList from 'pages/UsersList'
import ItemList from 'pages/ItemList'
import styled from 'styled-components/macro'


const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const AppRouterContext: React.Context<{}> & {
    ref?: any
} = React.createContext<{}>({})


class RouterContext extends React.Component {
    constructor(props: RouteComponentProps) {
        super(props)
        this.state = {}
        AppRouterContext.ref = this;
    }


    // noinspection JSUnusedGlobalSymbols
    static getDerivedStateFromProps(props: any) {
        return props;
    }

    render() {
        return <AppRouterContext.Provider value={this.state}>
            {this.props.children}
        </AppRouterContext.Provider>;
    }
}


const AppRouter = () => {
    return (
        <Router>
            <RouterContext>
                <Sidebar />
                <BodyWrapper>
                    <Switch>
                        <Route path={'/items'} component={ItemList} />
                        <Route path={'/item/:id'} component={Checkin} />
                        <Route path={'/users'} component={UserList} />
                        <Route path={'/user/:id'} component={Checkin} />
                        <Route path={'/login'} component={Checkin} />
                        <Route path={'/admin'} component={Checkin} />
                        <Route path={'/'} component={Checkin} />
                    </Switch>
                </BodyWrapper>

            </RouterContext>
        </Router>
    )
}

//@ts-ignore
RouterContext = withRouter(RouterContext);
AppRouterContext.ref = RouterContext



export default AppRouter