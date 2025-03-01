import * as React from "react";

function BackgroundGrid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={1728} height={961} fill="none" {...props}>
      <path
        stroke="#CCC"
        d="M.5.5h95v960H.5zM96.5.5h95v960h-95zM192.5.5h95v960h-95zM288.5.5h95v960h-95zM384.5.5h95v960h-95zM480.5.5h95v960h-95zM576.5.5h95v960h-95zM672.5.5h95v960h-95zM768.5.5h95v960h-95zM864.5.5h95v960h-95zM960.5.5h95v960h-95zM1056.5.5h95v960h-95zM1152.5.5h95v960h-95zM1248.5.5h95v960h-95zM1344.5.5h95v960h-95zM1440.5.5h95v960h-95zM1536.5.5h95v960h-95zM1632.5.5h95v960h-95z"
      />
      <path
        stroke="#CCC"
        d="M.5.5h1727v87H.5zM.5 88.5h1727v86H.5zM.5 175.5h1727v87H.5zM.5 263.5h1727v86H.5zM.5 350.5h1727v87H.5zM.5 438.5h1727v86H.5zM.5 525.5h1727v87H.5zM.5 613.5h1727v86H.5zM.5 700.5h1727v87H.5zM.5 788.5h1727v86H.5z"
      />
    </svg>
  );
}

const MemoBackgroundGrid = React.memo(BackgroundGrid);
export default MemoBackgroundGrid;
 