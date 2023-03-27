import React from "react";

function Inbox({inbox, inbox2}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="68"
      height="68"
      id={inbox}
      fill="#F2F2F2"
      viewBox="0 0 68 68"
    >
      <g filter="url(#filter0_d_2_188)">
        <path
          d="M64 30c0 16.569-13.431 30-30 30C17.431 60 4 46.569 4 30 4 13.431 17.431 0 34 0c16.569 0 30 13.431 30 30z"
        ></path>
      </g>
      <path
        id={inbox2}
        fill="#8885FF"
        fillRule="evenodd"
        d="M38.444 21.11H24c-.611 0-1.111.5-1.111 1.112v15.555l4.444-4.444h11.111c.611 0 1.111-.5 1.111-1.111v-10c0-.611-.5-1.111-1.11-1.111zm-1.11 2.223v7.778H26.41l-.655.655-.645.645v-9.078h12.222zm4.444 2.222H44c.611 0 1.111.5 1.111 1.111v16.667l-4.444-4.444H28.444c-.61 0-1.11-.5-1.11-1.112v-2.222h14.444v-10z"
        clipRule="evenodd"
      ></path>
      <defs>
        <filter
          id="filter0_d_2_188"
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
            result="effect1_dropShadow_2_188"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2_188"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Inbox;
