import { useContext } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { ConfigureStore } from './AppState';
import './FirebaseSetup';
import GeekButton from './GeekButton';
// import { Redirect } from 'react-router-dom';
import Home from './Home';
import ListNote from './ListNote';
import Login from './Login';
import MaterialUi from './MaterialUi';
import PersonDisplay from "./PersonDisplay";
import Profile from './Profile';
import ReactHookFormUi from './ReactHookFormUi';
import ReducerUi from './ReducerUi';
import RouteA from './RouteA';
import SignUp from './SignUp';
import SimpleState from './SimpleState';
import UseEffectMultiple from "./UseEffectMultiple";
import UseEffectOnce from "./UseEffectOnce";
import { Context } from './UserContext';
import UseRefEx from "./UseRefEx";
import WriteContext from './WriteContext';
import WriteReducer from './WriteReducer';

export default function App() {
  const context = useContext(Context);
  const isUserExist = context && context.uid;
  return (
    <Provider store={ConfigureStore()}>
      <BrowserRouter>

        <Routes>
          {/* routes tutorial */}
          <Route path="/RouteA/:name" element={<RouteA />} />
          <Route path="/SubmitButton"
            element={() => <GeekButton name="submitName" label='submit' onClick={SubmitOnClick} />} />
          <Route path="/RestButton"
            element={() => <GeekButton name="resetName" label="reset" onClick={() => alert("reset button is invoked")} />} />

          {/* state tutorial */}
          <Route path="/SimpleState" element={<SimpleState />} />
          <Route path="/ListNote" element={<ListNote />} />

          {/* hooks tutorial */}
          <Route path="/UseEffectOnce" element={<UseEffectOnce />} />
          <Route path="/UseEffectMultiple" element={<UseEffectMultiple />} />
          <Route path="/PersonDisplay" element={<PersonDisplay />} />
          <Route path="/UseRefEx" element={<UseRefEx />} />
          <Route path="/WriteContext" element={<WriteContext />} />

          {/* reducer tutorial */}
          <Route path="/WriteReducer" element={<WriteReducer />} />
          <Route path="/ReducerUi" element={<ReducerUi />} />

          {/* react hook form tutorial */}
          <Route path="/ReactHookFormUi" element={<ReactHookFormUi />} />

          {/* material ui css tutorial */}
          <Route path="/MaterialUi" element={<MaterialUi />} />

          {/* project */}
          {!isUserExist && <Route path="/SignUp" element={<SignUp />} />}
          {!isUserExist && <Route path="/Login" element={<Login />} />}
          <Route path="/Home" element={<Home />} />

          {/* profile */}
          {isUserExist && <Route path="/Profile" element={<Profile />} />}
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />




        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

function SubmitOnClick() {
  alert("submit button is invoked");
}
