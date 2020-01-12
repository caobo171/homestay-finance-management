// eslint-disable-next-line
import React, { useState, useCallback, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, RouteComponentProps, withRouter, Redirect } from 'react-router-dom'
import Checkin from 'pages/Checkin'

import Sidebar from 'components/Sidebar'
import UserList from 'pages/UsersList'
import ItemList from 'pages/ItemList'
import styled from 'styled-components/macro'
import Login from 'pages/Login'
import Navbar from 'components/Navbar'
import ItemDetail from 'pages/ItemDetail'
import Modal from 'components/Modal'
import SelectForm from 'pages/Form/SelectForm'
import AddActivityForm from 'pages/Form/AddActivityForm/BuyAction'
import UseActionForm from 'pages/Form/AddActivityForm/UseActionForm'
import { useCurrentUser } from 'store/user/hooks'
import { useEffectOnce } from 'react-use'
import { getCurrentUser, getUserList } from 'store/user/function'
import realtimeSystem from 'service/realtimeSystem'


const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
`


const PrivateRoute: React.FC<{
    component: React.ComponentType<any>,
    [prop: string]: any
}> = ({ component, ...rest }) => {
    const user = useCurrentUser()
    return <Route {...rest} render={props => {
        const Component = component;
        return user ? <Component {...props} /> : <Redirect to={'/login'} />
    }} />
}





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

    const user = useCurrentUser()
    const [isFullyLoaded, setFullyLoaded] = useState(false)

    const [openSidebar, setOpenSidebar] = useState(false)

    useEffectOnce(() => {
        (async () => {


            const res = await getCurrentUser()

            if(res){
                await getUserList()
                realtimeSystem.init()
            }
            
            await setFullyLoaded(true)
        })()
    })

    const onClickMenu = useCallback(()=>{
        setOpenSidebar(true)
    },[openSidebar])

    const onDismissMenu = useCallback(()=>{
        setOpenSidebar(false)
    },[openSidebar])

    return (
        <Router>
            {
                isFullyLoaded ? (
                    <RouterContext>
                        <Navbar onClickMenu={onClickMenu} />
                        <Sidebar active={openSidebar} onDismissMenu={onDismissMenu}/>

                        <Modal/>
                        <BodyWrapper>
                            <Switch>
                                <PrivateRoute path={'/items'} component={ItemList} />
                                <PrivateRoute path={'/item/:id'} component={ItemDetail} />
                                <PrivateRoute path={'/users'} component={UserList} />
                                <PrivateRoute path={'/user/:id'} component={Checkin} />
                                <PrivateRoute path={'/admin'} component={Checkin} />
                                <Route path={'/login'} component={Login} />
                                <PrivateRoute path={'/'} component={Checkin} />

                            </Switch>
                        </BodyWrapper>

                    </RouterContext>
                ) : (
                        <div />
                    )
            }

        </Router>
    )
}

//@ts-ignore
RouterContext = withRouter(RouterContext);
AppRouterContext.ref = RouterContext



export default AppRouter