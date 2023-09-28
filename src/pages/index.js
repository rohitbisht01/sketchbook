import Board from "@/components/board";
import Menubar from "@/components/menubar";
import ToolBox from "@/components/toolbox";

export default function Home() {
  return (
    <>
      <Menubar />
      <ToolBox />
      <Board />
    </>
  );
}
