import { Icon } from "./Components/Atoms/Icon";
import FormCore from "./Components/Organisms/main-form";
import Render from "./Components/Organisms/Render";

export default function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="logo-wrapper w-3/12" style={{ background: "white" }}>
          {/* <LogoIcon /> */}
        </div>
        <div className="flex p-2 justify-end items-center w-9/12">
          <div className="h-100 user-btn">
            <Icon iconName="user" />
          </div>
        </div>
      </div>

      <div className="Core">
        <div className="Handlers">
          <div className="Menu w-3/12">
            <FormCore />
          </div>
          <div className="Render w-9/12">
            <Render />
          </div>
        </div>
        <div className="Resume">Resume</div>
      </div>
    </div>
  );
}
