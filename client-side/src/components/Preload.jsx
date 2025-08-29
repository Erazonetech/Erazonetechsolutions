


export const MySvgIcon = () => (
  <svg
    width="54"
    height="52"
    viewBox="0 0 54 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4985 51.7665H53.9918V32.3528L0 21.5703L13.4985 51.7665Z"
      fill="url(#paint0_linear_489_2)"
    />
    <path
      d="M0 21.5703L13.4985 51.7665H53.9918L0 21.5703Z"
      fill="url(#paint1_linear_489_2)"
    />
    <path
      d="M25.8164 36.0079L53.9994 0L53.9835 51.7706L25.8164 36.0079Z"
      fill="url(#paint2_linear_489_2)"
    />
    <defs>
      <linearGradient id="paint0_linear_489_2" x1="1.63558" y1="26.3549" x2="34.5222" y2="43.8496" gradientUnits="userSpaceOnUse">
        <stop offset="0.14" stopColor="#06FFFF" />
        <stop offset="0.38" stopColor="#05F9FF" />
        <stop offset="0.7" stopColor="#02E8FF" />
        <stop offset="0.88" stopColor="#00DBFF" />
        <stop offset="0.92" stopColor="#00CBF4" />
        <stop offset="0.99" stopColor="#00A2D7" />
        <stop offset="1" stopColor="#009ED4" />
      </linearGradient>
      <linearGradient id="paint1_linear_489_2" x1="45.2575" y1="64.3906" x2="11.4003" y2="24.0069" gradientUnits="userSpaceOnUse">
        <stop offset="0.41" stopColor="#06FFFF" />
        <stop offset="0.55" stopColor="#03EFFF" />
        <stop offset="0.69" stopColor="#00DBFF" />
        <stop offset="0.79" stopColor="#00CBF4" />
        <stop offset="0.98" stopColor="#00A2D7" />
        <stop offset="1" stopColor="#009ED4" />
      </linearGradient>
      <linearGradient id="paint2_linear_489_2" x1="56.5143" y1="4.88717" x2="41.4836" y2="43.2553" gradientUnits="userSpaceOnUse">
        <stop offset="0.33" stopColor="#06FFFF" />
        <stop offset="0.54" stopColor="#03EFFF" />
        <stop offset="0.75" stopColor="#00DBFF" />
        <stop offset="0.83" stopColor="#00CBF4" />
        <stop offset="0.98" stopColor="#00A2D7" />
        <stop offset="1" stopColor="#009ED4" />
      </linearGradient>
    </defs>
  </svg>
);




function Preload() {
  return (
    <div className="preload preloader-start preloader_animation">
        <div className="preloader__wrapp">
         <MySvgIcon/>
        </div>
    </div>
  )
}

export default Preload