
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './components/utils/appStore';

function App() {
  return (
   <Provider store={appStore}>
<div style={{background:"black",height:"100vh",width:"100%"}}>
<Body />
</div>

   </Provider>
  );
}

export default App;
