import type { SVGProps } from "react";

/**
 * The site's icon set — drawn here rather than pulled from a library, so
 * every glyph shares one grid, one stroke weight and one set of terminals.
 *
 * Rules: 24×24 box, 1.5 stroke, round caps and joins, currentColor, no
 * fills. Geometry only — circles, lines and right angles — so they sit
 * beside Inter without arguing with it.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ── Approach ───────────────────────────────────────────────────── */

/** Understand — an aperture opening on the business */
export function IconUnderstand(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  );
}

/** Identify — a crosshair finding the real problem */
export function IconIdentify(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="6" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
    </Icon>
  );
}

/** Strategize — three decisions, one route between them */
export function IconStrategize(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="4.5" cy="18" r="2.25" />
      <circle cx="12" cy="6" r="2.25" />
      <circle cx="19.5" cy="15" r="2.25" />
      <path d="M6.1 16.3 10.4 7.9M13.4 7.6l4.8 5.8" />
    </Icon>
  );
}

/** Build — layers stacking into a system */
export function IconBuild(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 8.5 12 4l8 4.5-8 4.5z" />
      <path d="M4 13.5 12 18l8-4.5" />
      <path d="M4 17.5 12 22l8-4.5" />
    </Icon>
  );
}

/** Grow — the line that has to move */
export function IconGrow(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 17.5 9 11l4 4 8-8.5" />
      <path d="M15.5 6.5H21V12" />
    </Icon>
  );
}

/* ── Services ───────────────────────────────────────────────────── */

/** Websites — a browser frame */
export function IconWeb(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.25" y="3.75" width="19.5" height="16.5" rx="2.5" />
      <path d="M2.25 8.75h19.5" />
      <path d="M5.5 6.25h.01M8 6.25h.01" />
    </Icon>
  );
}

/** Design — two shapes sharing a grid */
export function IconDesign(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="8.25" cy="8.25" r="4.75" />
      <rect x="12.25" y="12.25" width="8.5" height="8.5" rx="1.5" />
    </Icon>
  );
}

/** E-commerce — a bag */
export function IconCommerce(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4.5 7.5h15l-1.15 13H5.65z" />
      <path d="M9 7.5V6a3 3 0 0 1 6 0v1.5" />
    </Icon>
  );
}

/** Custom software — brackets */
export function IconSoftware(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8.75 6.5 3.5 12l5.25 5.5M15.25 6.5 20.5 12l-5.25 5.5" />
    </Icon>
  );
}

/** CRM & ERP — a record with a person on it */
export function IconRecords(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <circle cx="8.5" cy="10.25" r="2" />
      <path d="M5.25 16.25a3.6 3.6 0 0 1 6.5 0" />
      <path d="M14.75 9.75h4M14.75 13.75h4" />
    </Icon>
  );
}

/** Dashboards — bars in a frame */
export function IconDashboard(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="3.5" width="19" height="17" rx="2.5" />
      <path d="M7.25 16v-3.25M12 16V8.5M16.75 16v-5" />
    </Icon>
  );
}

/** Automation — the loop that runs without anyone */
export function IconAutomate(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1" />
      <path d="M20.5 3.5V8H16" />
    </Icon>
  );
}

/** APIs — two systems linked */
export function IconApi(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10.5 13.5a4.75 4.75 0 0 0 6.7 0l2.3-2.3a4.75 4.75 0 0 0-6.7-6.7l-1.1 1.1" />
      <path d="M13.5 10.5a4.75 4.75 0 0 0-6.7 0l-2.3 2.3a4.75 4.75 0 0 0 6.7 6.7l1.1-1.1" />
    </Icon>
  );
}

/** Messaging — the bubble, drawn on our own grid */
export function IconChat(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.4A8.5 8.5 0 1 1 20.5 11.6z" />
      <path d="M9 12h.01M12 12h.01M15 12h.01" />
    </Icon>
  );
}

/** Search — the magnifier */
export function IconSearch(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="10.75" cy="10.75" r="6.75" />
      <path d="M15.6 15.6 20.5 20.5" />
    </Icon>
  );
}

/** Customisation — the controls, set where you need them */
export function IconCustomise(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.5 8h9.5M18.5 8h2M3.5 16h2.5M11.5 16h9" />
      <circle cx="15.75" cy="8" r="2.5" />
      <circle cx="8.75" cy="16" r="2.5" />
    </Icon>
  );
}

/** Support — the dial that has to keep reading green */
export function IconSupport(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.25 17.5a9 9 0 1 1 17.5 0" />
      <path d="M12 17.5 16 11.5" />
    </Icon>
  );
}

/* ── Interface ──────────────────────────────────────────────────── */

export function IconMenu(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 9h16M4 15h16" />
    </Icon>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Icon>
  );
}

/** Rotates 45° under CSS to become a close mark */
export function IconPlus(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  );
}

/** Lookup used by the approach section, keyed off content. */
export const approachIcons = {
  understand: IconUnderstand,
  identify: IconIdentify,
  strategize: IconStrategize,
  build: IconBuild,
  grow: IconGrow,
} as const;

export type ApproachIcon = keyof typeof approachIcons;

/** Lookup used by the services grid, keyed off content. */
export const serviceIcons = {
  web: IconWeb,
  design: IconDesign,
  commerce: IconCommerce,
  software: IconSoftware,
  records: IconRecords,
  dashboard: IconDashboard,
  automate: IconAutomate,
  api: IconApi,
  chat: IconChat,
  search: IconSearch,
  customise: IconCustomise,
  support: IconSupport,
} as const;

export type ServiceIcon = keyof typeof serviceIcons;
