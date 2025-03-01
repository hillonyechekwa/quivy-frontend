import * as React from "react";

function RotatingOrbs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 985 1733" width={985} height={1333} fill="none" {...props}>
      <path
        d="M1591.5 872c0 475.28-356.19 860.5-795.5 860.5C356.694 1732.5.5 1347.28.5 872 .5 396.721 356.694 11.5 796 11.5c439.31 0 795.5 385.221 795.5 860.5z"
        stroke="#DDD"
      />
      <circle cx={648} cy={24} r={24} fill="#E6E6E6" />
      <circle cx={101} cy={1292} r={24} fill="#E6E6E6" />
    </svg>
  );
}

const MemoRotatingOrbs = React.memo(RotatingOrbs);
export default MemoRotatingOrbs;
