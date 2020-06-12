// eslint-disable-next-line
import React, { useState, useCallback, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, RouteComponentProps, withRouter, Redirect } from 'react-router-dom'
import Checkin from 'pages/Checkin'

import Sidebar from 'components/Sidebar'
import UserList from 'pages/UsersList'
import ItemList from 'pages/ItemList'
import styled from 'styled-components/macro'
import Login from 'pages/Login/Login'
import Navbar from 'components/Navbar'
import ItemDetail from 'pages/ItemDetail'
import Modal from 'components/Modal'
import UserDetail from 'pages/UserDetail'
import { useCurrentUser } from 'store/user/hooks'
import { getCurrentUser, getUserList, updateUserToken } from 'store/user/function'
import realtimeSystem from 'service/realtimeSystem'
import LoadingComponent from 'components/LoadingComponent'
import Admin from 'pages/Admin'
import CurrentUser from 'service/CurrentUser'
import Activities from 'pages/Activities'
import Constants from 'Constants'


const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`
const StyledWrapper = styled.div`
    ${!Constants.IS_MOBILE && `
        display:flex;
        flex-direction: row;
    `}
    
`

const StyledRouterWrapper = styled.div`
    width: 100%;
    height: 100%;
    ${!Constants.IS_MOBILE && `
    `}
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

    useEffect(() => {
        (async () => {
            if (!user) {
                const res = await getCurrentUser()
            }

            if (user) {
                CurrentUser.init()
                await getUserList()
                realtimeSystem.init()
            }

            await setFullyLoaded(true)
        })()

    }, [user])

    const onClickMenu = useCallback(() => {
        setOpenSidebar(true)
    }, [openSidebar])

    const onDismissMenu = useCallback(() => {
        setOpenSidebar(false)
    }, [openSidebar])

    return (
        <Router>
            {
                isFullyLoaded ? (
                    <>
                        {
                            user ? <RouterContext>

                                {/* <Sidebar active={openSidebar} onDismissMenu={onDismissMenu} /> */}

                                <StyledRouterWrapper>
                                    {/* <Navbar onClickMenu={onClickMenu} /> */}
                                    <Modal />
                                    <BodyWrapper>
                                        <Switch>
                                            <PrivateRoute path={'/items'} component={ItemList} />
                                            <PrivateRoute path={'/item/:id'} component={ItemDetail} />
                                            <PrivateRoute path={'/users'} component={UserList} />
                                            <PrivateRoute path={'/user/:id'} component={UserDetail} />
                                            <PrivateRoute path={'/admin'} component={Admin} />
                                            <PrivateRoute path={'/activities'} component={Activities} />

                                            {Constants.IS_MOBILE ? (
                                                <PrivateRoute path={'/'} component={Checkin} />
                                            ) : (
                                                    <PrivateRoute path={'/'} component={Activities} />
                                                )}


                                        </Switch>
                                    </BodyWrapper>
                                </StyledRouterWrapper>

                            </RouterContext> :
                                <Login />
                        }

                    </>
                ) : (
                        <LoadingComponent />
                    )
            }

        </Router>
    )
}

//@ts-ignore
RouterContext = withRouter(RouterContext);
AppRouterContext.ref = RouterContext



export default AppRouter