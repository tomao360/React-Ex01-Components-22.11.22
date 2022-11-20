import "./App.css";
import {
  HeaderComponent,
  DeadpoolComponent,
  BatmanComponent,
  SpidermanComponent,
} from "./components";

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <DeadpoolComponent />
      <BatmanComponent />
      <SpidermanComponent />
    </div>
  );
}

export default App;
