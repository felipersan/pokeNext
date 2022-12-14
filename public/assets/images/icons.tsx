export function SearchIcon({ size = 14, color = "#4A427C" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275q-.425 0-.7-.275ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"
      />
    </svg>
  );
}

export function BalanceIcon({ size = 14, color = "#4A427C" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2H11.9747C11.0609 0.793125 9.62719 0 8 0C6.37281 0 4.93906 0.793125 4.02531 2H2C0.897187 2 0 2.89719 0 4V14C0 15.1028 0.897187 16 2 16H14C15.1028 16 16 15.1028 16 14V4C16 2.89719 15.1028 2 14 2ZM8 1C10.2091 1 12 2.79094 12 5C12 7.20906 10.2091 9 8 9C5.79094 9 4 7.20906 4 5C4 2.79094 5.79094 1 8 1ZM15 14C15 14.5522 14.5522 15 14 15H2C1.44781 15 1 14.5522 1 14V4C1 3.44781 1.44781 3 2 3H3.42375C3.15437 3.61344 3 4.28813 3 5C3 7.75688 5.24312 10 8 10C10.7569 10 13 7.75688 13 5C13 4.28813 12.8456 3.61344 12.5763 3H14C14.5522 3 15 3.44781 15 4V14ZM8 8C8.82719 8 9.5 7.32719 9.5 6.5C9.5 6.065 9.31094 5.67625 9.01437 5.40219L9.95938 3.19688C10.0681 2.94344 9.95063 2.64938 9.69656 2.54063C9.44406 2.43187 9.14906 2.54906 9.04031 2.80344L8.09469 5.00969C6.98656 4.9375 6.5 5.89531 6.5 6.5C6.5 7.32719 7.17281 8 8 8ZM8 6C8.27625 6 8.5 6.22375 8.5 6.5C8.5 6.77625 8.27625 7 8 7C7.72375 7 7.5 6.77625 7.5 6.5C7.5 6.22375 7.72375 6 8 6Z"
        fill={color}
      />
    </svg>
  );
}

export function ScaleIcon({ size = 14, color = "#4A427C" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_346_13455)">
        <path
          d="M7.5 0H1.5C0.947812 0 0.5 0.447812 0.5 1V15C0.5 15.5522 0.947812 16 1.5 16H7.5C8.05219 16 8.5 15.5522 8.5 15V1C8.5 0.447812 8.05219 0 7.5 0ZM1.5 15V1H7.5V3H5.75C5.61188 3 5.5 3.11188 5.5 3.25V3.75C5.5 3.88812 5.61188 4 5.75 4H7.5V6H5.75C5.61188 6 5.5 6.11188 5.5 6.25V6.75C5.5 6.88812 5.61188 7 5.75 7H7.5V9H5.75C5.61188 9 5.5 9.11187 5.5 9.25V9.75C5.5 9.88813 5.61188 10 5.75 10H7.5V12H5.75C5.61188 12 5.5 12.1119 5.5 12.25V12.75C5.5 12.8881 5.61188 13 5.75 13H7.5V15H1.5Z"
          fill="#212121"
        />
      </g>
      <defs>
        <clipPath id="clip0_346_13455">
          <rect width="8" height="16" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function LoadingIcon({ size = 14, color = "#4A427C" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <circle cx="18" cy="12" r="0" fill="currentColor">
        <animate
          attributeName="r"
          begin=".67"
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        />
      </circle>
      <circle cx="12" cy="12" r="0" fill="currentColor">
        <animate
          attributeName="r"
          begin=".33"
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        />
      </circle>
      <circle cx="6" cy="12" r="0" fill="currentColor">
        <animate
          attributeName="r"
          begin="0"
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        />
      </circle>
    </svg>
  );
}

export function ChevronTopIcon({ size = 14, color = "#4A427C" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
    >
      <path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M30 20L16 8L2 20"
      />
    </svg>
  );
}
