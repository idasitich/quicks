import React from "react";

function TaskIcon({task, task2}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="68"
      height="68"
      viewBox="0 0 68 68"
      id={task}
      fill="#F2F2F2"
    >
      <g filter="url(#filter0_d_2_175)">
        <path
          d="M64 30c0 16.569-13.431 30-30 30C17.431 60 4 46.569 4 30 4 13.431 17.431 0 34 0c16.569 0 30 13.431 30 30z"
        ></path>
      </g>
      <path
        id={task2}
        fill="#F8B76B"
        fillRule="evenodd"
        d="M25.111 21.667h20c1.222 0 2.222 1 2.222 2.222v14.444c0 1.223-1 2.223-2.222 2.223h-20c-1.222 0-2.222-1-2.222-2.223V23.89c0-1.222 1-2.222 2.222-2.222zm0 2.222v14.444H34V23.89h-8.889zm20 14.444h-8.889V23.89h8.89v14.444zM44 27.778h-6.667v1.667H44v-1.667zm-6.667 2.778H44v1.666h-6.667v-1.666zM44 33.333h-6.667V35H44v-1.667z"
        clipRule="evenodd"
      ></path>
      <defs>
        <filter
          id="filter0_d_2_175"
          width="68"
          height="68"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_175"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2_175"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default TaskIcon;
