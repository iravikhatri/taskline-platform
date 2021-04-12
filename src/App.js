import { Switch, Route } from 'react-router-dom'

import Dashboard from './features/Dashboard';


function App() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
