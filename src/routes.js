import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Chat from './Components/Chat/Chat';
export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/dash' component={Dashboard} />
        <Route path='/profile' component={Profile} />
        <Route path='/chat/:id' component={Chat} />
    </Switch>
)