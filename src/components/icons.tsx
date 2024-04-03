import { SVGProps } from 'react'

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 256 256'
      {...props}
    >
      <g fill='currentColor'>
        <path
          d='m96 240l16-80l-64-24L160 16l-16 80l64 24Z'
          opacity='.2'
        />
        <path d='M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z' />
      </g>
    </svg>
  )
}

export function HamburgerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill='none'
      width='24'
      height='24'
      stroke='currentColor'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h16m-7 6h7'
      ></path>
    </svg>
  )
}

export function PwaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 512 512'
      {...props}
    >
      <path
        fill='currentColor'
        d='m330.7 352l77.72-192H356.9l-53.16 124.07L265.93 160h-39.61l-40.58 124.07l-28.63-56.53l-25.9 79.46l26.3 45h50.7l36.68-111.27l35 111.27ZM48.79 286.09h31.65a93.39 93.39 0 0 0 25.62-3.21l8.18-25.19l22.88-70.39a55.75 55.75 0 0 0-6-7.82Q113.54 160 79.59 160H0v192h48.79Zm41.9-81.92q6.89 6.92 6.88 18.52t-6 18.53q-6.64 7.62-24.44 7.61H48.79v-51.58h18.42q16.59 0 23.48 6.92m286.16 113.44l14.79-37.25h42.69l-20.26-56.51L439.41 160L512 352h-53.53l-12.4-34.39Z'
      />
    </svg>
  )
}

export function VmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 32 32'
      {...props}
    >
      <path
        fill='currentColor'
        d='M3.4 11C3 10.1 2 9.7 1 10.2s-1.3 1.4-.9 2.3l4 8.5c.6 1.3 1.3 2 2.5 2c1.3 0 1.9-.8 2.5-2c0 0 3.4-7.4 3.4-7.5c0-.1.1-.3.5-.3c.3 0 .5.2.5.6V21c0 1.1.6 2 1.8 2s1.8-.9 1.8-2v-6c0-1.1.8-1.9 1.9-1.9c1.1 0 1.9.8 1.9 1.9v6c0 1.1.6 2 1.8 2s1.8-.9 1.8-2v-6c0-1.1.8-1.9 1.9-1.9c1.1 0 1.9.8 1.9 1.9v6c0 1.1.6 2 1.8 2s1.8-.9 1.8-2v-6.8c0-2.5-2-4.2-4.4-4.2s-3.9 1.7-3.9 1.7c-.8-1-1.9-1.7-3.8-1.7c-2 0-3.7 1.7-3.7 1.7c-.8-1-2.2-1.7-3.3-1.7c-1.7 0-3.1.8-4 2.7l-2.5 5.9z'
      />
    </svg>
  )
}

export function AwsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M17 18.5a15.198 15.198 0 0 1-7.37 1.44A14.62 14.62 0 0 1 3 17m16.5 4c.907-1.411 1.451-3.323 1.5-5c-1.197-.773-2.577-.935-4-1M3 11V6.5a1.5 1.5 0 0 1 3 0V11M3 9h3m3-4l1.2 6L12 7l1.8 4L15 5m3 5.25c0 .414.336.75.75.75H20a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75'
      />
    </svg>
  )
}

export function HboIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <path d='M2 16V8m4 0v8m-4-4h4m3 4h2a2 2 0 1 0 0-4H9h2a2 2 0 1 0 0-4H9zm10-8a4 4 0 1 1 0 8a4 4 0 0 1 0-8' />
        <path d='M18 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0' />
      </g>
    </svg>
  )
}

export function WixIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m3 9l1.5 6l1.379-5.515a.64.64 0 0 1 1.242 0L8.5 15L10 9m3 2.5V15m3-6l5 6m0-6l-5 6m-3-6h.01'
      />
    </svg>
  )
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'
      />
    </svg>
  )
}

export function LikedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
      />
    </svg>
  )
}
