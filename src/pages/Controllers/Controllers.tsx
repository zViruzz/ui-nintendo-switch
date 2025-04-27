import { Outlet } from "react-router";
import useControllers from "../../hooks/useControllers";
import OpacityPageTransition from "../../transitions/OpacityPageTransition";

export default function Controller() {
  useControllers({
    settingButtonB: {
      text: "controller.buttonB.back",
      route: "/app",
      action: () => { },
    },
  });

  return (
    <OpacityPageTransition>
      <div className="absolute w-screen h-screen p-[3%] bg-[#0c1720b1] backdrop-blur-md transition-all">
        <div className="bg-gray-message-light dark:bg-gray-message w-full h-full rounded-xl">
          <Outlet />
        </div>
      </div>
    </OpacityPageTransition>
  );
}
