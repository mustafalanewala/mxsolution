"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/site/primitives";

/**
 * The hero's moving part: one window, cycling through the four things we
 * actually build. Websites, the dashboards a team works in, WhatsApp
 * automation, storefronts.
 *
 * Literal on purpose. An abstract mark looks like design; this answers
 * "what do you make?" before anyone reads a word of the headline.
 *
 * Drawn as SVG rather than shipped as images: four covers would be most
 * of a megabyte, and this is a few kilobytes that stays sharp at any size
 * and repaints itself if the brand colours change.
 */

const HOLD_MS = 3400;

const INK = "hsl(var(--foreground))";
const PAPER = "hsl(var(--background))";
const SOFT = "hsl(var(--surface))";
const TINT = "hsl(var(--primary-soft))";
const BLUE = "hsl(var(--primary))";

/** The real ones. A grey traffic light reads as a wireframe, not a window. */
const TRAFFIC = ["#FF5F57", "#FEBC2E", "#28C840"] as const;

/** Stand-in for a line of text — the unit almost everything here is made of. */
function Bar({
  x,
  y,
  w,
  h = 8,
  fill = INK,
  o = 0.14,
  r,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  fill?: string;
  o?: number;
  r?: number;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={r ?? h / 2}
      fill={fill}
      fillOpacity={o}
    />
  );
}

/* ── The four screens ─────────────────────────────────────────────── */

function WebsiteScreen() {
  return (
    <>
      {/* Its own nav, inside the page we're showing */}
      <rect x="30" y="70" width="15" height="15" rx="4" fill={BLUE} />
      <Bar x={252} y={74} w={26} h={6} o={0.18} />
      <Bar x={288} y={74} w={26} h={6} o={0.18} />
      <Bar x={324} y={74} w={26} h={6} o={0.18} />
      <rect x="358" y="68" width="32" height="19" rx="9.5" fill={INK} fillOpacity="0.1" />
      <path d="M30 98h360" stroke={INK} strokeOpacity="0.08" strokeWidth="1.5" />

      {/* Headline, sub, two buttons */}
      <Bar x={30} y={114} w={188} h={14} o={0.2} r={7} />
      <Bar x={30} y={136} w={138} h={14} o={0.2} r={7} />
      <Bar x={30} y={164} w={172} h={7} o={0.1} />
      <Bar x={30} y={178} w={124} h={7} o={0.1} />
      <motion.rect
        x="30"
        y="198"
        width="86"
        height="27"
        rx="13.5"
        fill={BLUE}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.35 }}
        style={{ transformOrigin: "73px 211px" }}
      />
      <rect
        x="126"
        y="198"
        width="70"
        height="27"
        rx="13.5"
        fill="none"
        stroke={INK}
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />

      {/* The picture every landing page has */}
      <rect x="236" y="112" width="154" height="108" rx="8" fill={SOFT} />
      <circle cx="270" cy="142" r="9" fill={INK} fillOpacity="0.13" />
      <path
        d="M240 220 L278 176 L304 206 L330 184 L386 220 Z"
        fill={INK}
        fillOpacity="0.11"
      />

      {/* Three feature cards */}
      {[30, 157, 284].map((x, i) => (
        <g key={x}>
          <rect x={x} y="240" width="106" height="52" rx="8" fill={SOFT} />
          <rect
            x={x + 14}
            y="252"
            width="14"
            height="14"
            rx="4"
            fill={i === 0 ? BLUE : INK}
            fillOpacity={i === 0 ? 1 : 0.18}
          />
          <Bar x={x + 14} y={274} w={64} h={6} o={0.13} />
          <Bar x={x + 14} y={284} w={42} h={6} o={0.09} />
        </g>
      ))}
    </>
  );
}

const CHART = [
  [126, 258],
  [166, 240],
  [206, 248],
  [246, 212],
  [286, 220],
  [326, 188],
  [366, 166],
] as const;

const CHART_LINE = CHART.map(([x, y], i) => `${i ? "L" : "M"} ${x} ${y}`).join(
  " ",
);

function DashboardScreen() {
  return (
    <>
      {/* Sidebar */}
      <rect x="30" y="68" width="62" height="224" rx="8" fill={SOFT} />
      <rect x="42" y="80" width="15" height="15" rx="4" fill={BLUE} />
      <rect x="38" y="112" width="46" height="16" rx="5" fill={BLUE} fillOpacity="0.14" />
      <Bar x={44} y={118} w={34} h={5} fill={BLUE} o={0.55} />
      <Bar x={44} y={142} w={34} h={5} o={0.16} />
      <Bar x={44} y={164} w={28} h={5} o={0.16} />
      <Bar x={44} y={186} w={34} h={5} o={0.16} />

      {/* Two stat tiles, one of them the one that matters */}
      <rect x="106" y="68" width="136" height="62" rx="8" fill={SOFT} />
      <Bar x={120} y={82} w={46} h={6} o={0.16} />
      <Bar x={120} y={98} w={68} h={15} o={0.22} r={4} />

      <rect x="254" y="68" width="136" height="62" rx="8" fill={TINT} />
      <Bar x={268} y={82} w={46} h={6} fill={BLUE} o={0.35} />
      <Bar x={268} y={98} w={56} h={15} fill={BLUE} o={0.6} r={4} />

      {/* The chart everyone actually looks at */}
      <rect x="106" y="144" width="284" height="148" rx="8" fill={SOFT} />
      {[194, 226, 258].map((y) => (
        <path
          key={y}
          d={`M126 ${y}h240`}
          stroke={INK}
          strokeOpacity="0.06"
          strokeWidth="1.5"
        />
      ))}
      <path d="M126 274h240" stroke={INK} strokeOpacity="0.14" strokeWidth="1.5" />
      <motion.path
        d={`${CHART_LINE} L 366 274 L 126 274 Z`}
        fill={BLUE}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
      />
      <motion.path
        d={CHART_LINE}
        fill="none"
        stroke={BLUE}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
      />
      {CHART.map(([x, y], i) => (
        <motion.circle
          key={x}
          cx={x}
          cy={y}
          r="3.5"
          fill={PAPER}
          stroke={BLUE}
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: EASE, delay: 0.3 + i * 0.13 }}
        />
      ))}
    </>
  );
}

function ChatScreen() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Everything sits a little higher than it did, so the composer
          stops on 292 like every other screen instead of resting on the
          window's bottom edge. */}

      {/* Who you're talking to */}
      <rect x="30" y="66" width="360" height="44" rx="8" fill={SOFT} />
      <circle cx="56" cy="88" r="14" fill={BLUE} fillOpacity="0.22" />
      <Bar x={80} y={79} w={88} h={8} o={0.2} />
      <Bar x={80} y={93} w={54} h={6} o={0.11} />
      <circle cx="66" cy="97" r="4.5" fill={TRAFFIC[2]} />

      {/* Them */}
      <rect x="30" y="120" width="168" height="38" rx="14" fill={SOFT} />
      <Bar x={46} y={132} w={106} h={6} o={0.18} />
      <Bar x={46} y={144} w={74} h={6} o={0.11} />

      {/* Us, arriving */}
      <motion.g
        initial={{ x: 22, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
      >
        <rect x="182" y="168" width="208" height="42" rx="14" fill={BLUE} />
        <Bar x={198} y={181} w={148} h={6} fill="#fff" o={0.75} />
        <Bar x={198} y={193} w={104} h={6} fill="#fff" o={0.45} />
      </motion.g>

      {/* Them again, still typing */}
      <rect x="30" y="220" width="86" height="32" rx="14" fill={SOFT} />
      {[52, 66, 80].map((cx, i) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy="236"
          r="3.5"
          fill={INK}
          initial={{ opacity: 0.2 }}
          animate={reduced ? { opacity: 0.25 } : { opacity: [0.18, 0.55, 0.18] }}
          transition={{
            duration: 1.2,
            repeat: reduced ? 0 : Infinity,
            ease: "easeInOut",
            delay: i * 0.16,
          }}
        />
      ))}

      {/* Where you'd reply */}
      <rect x="30" y="262" width="300" height="30" rx="15" fill={SOFT} />
      <Bar x={48} y={274} w={112} h={6} o={0.12} />
      <circle cx="366" cy="277" r="15" fill={BLUE} />
      <path
        d="M359 277h13M367 272l5 5-5 5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  );
}

function StoreScreen() {
  return (
    <>
      {/* Search and a cart with something in it */}
      <rect x="30" y="68" width="228" height="27" rx="13.5" fill={SOFT} />
      <circle cx="48" cy="81" r="5" fill="none" stroke={INK} strokeOpacity="0.25" strokeWidth="1.5" />
      <path d="M52 85l4 4" stroke={INK} strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
      <Bar x={64} y={78} w={78} h={6} o={0.12} />
      <circle cx="372" cy="81" r="16" fill={SOFT} />
      <circle cx="383" cy="70" r="7" fill={BLUE} />

      {/* The rack */}
      {[30, 157, 284].map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y="108"
            width="106"
            height="94"
            rx="8"
            fill={i === 1 ? TINT : SOFT}
          />
          <rect
            x={x + 18}
            y="126"
            width="70"
            height="48"
            rx="6"
            fill={INK}
            fillOpacity="0.08"
          />
          <Bar
            x={x + 18}
            y={182}
            w={38}
            h={8}
            fill={i === 1 ? BLUE : INK}
            o={i === 1 ? 0.55 : 0.2}
          />
          <Bar x={x} y={212} w={72} h={7} o={0.13} />
          <Bar x={x} y={225} w={48} h={7} o={0.09} />
        </g>
      ))}

      {/* Checkout */}
      <motion.rect
        x="30"
        y="250"
        width="150"
        height="34"
        rx="17"
        fill={BLUE}
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
        style={{ transformOrigin: "105px 267px" }}
      />
      <rect
        x="192"
        y="250"
        width="92"
        height="34"
        rx="17"
        fill="none"
        stroke={INK}
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />
      <Bar x={300} y={256} w={90} h={8} o={0.13} />
      <Bar x={300} y={270} w={62} h={8} o={0.09} />
    </>
  );
}

const SCREENS = [
  { label: "Websites", Screen: WebsiteScreen },
  { label: "Dashboards & internal tools", Screen: DashboardScreen },
  { label: "WhatsApp automation", Screen: ChatScreen },
  { label: "Online stores", Screen: StoreScreen },
] as const;

/* ── The window around them ───────────────────────────────────────── */

export function HeroScreens({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SCREENS.length),
      HOLD_MS,
    );
    return () => clearInterval(id);
  }, [reduced]);

  const { label, Screen } = SCREENS[index];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg
        viewBox="0 0 420 322"
        className="h-auto w-full"
        role="img"
        aria-label={`Illustration of what we build, currently showing: ${label}`}
      >
        {/* Just enough shadow to lift the window off the page */}
        <rect
          x="16"
          y="20"
          width="400"
          height="300"
          rx="18"
          fill={INK}
          fillOpacity="0.05"
        />

        <rect
          x="10"
          y="10"
          width="400"
          height="300"
          rx="18"
          fill={PAPER}
          stroke={INK}
          strokeWidth="1.5"
        />

        {/* Chrome */}
        <path d="M10 52h400" stroke={INK} strokeWidth="1.5" />
        {TRAFFIC.map((colour, i) => (
          <circle key={colour} cx={34 + i * 17} cy="31" r="4.5" fill={colour} />
        ))}
        <rect x="96" y="22" width="196" height="18" rx="9" fill={SOFT} />
        <circle cx="110" cy="31" r="4" fill={BLUE} />
        <Bar x={122} y={28} w={92} h={6} o={0.13} />

        {/* Clipped so an arriving message can't escape the window */}
        <clipPath id="hero-screen">
          <rect x="11" y="53" width="398" height="256" />
        </clipPath>
        <g clipPath="url(#hero-screen)">
          <AnimatePresence mode="wait">
            <motion.g
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <Screen />
            </motion.g>
          </AnimatePresence>
        </g>
      </svg>

      {/* Names what's on screen, so the picture never has to be guessed.
          The label sizes to its own text rather than sitting in a fixed
          slot, so the pair stays truly centred on every screen — popLayout
          lets the outgoing label leave the flow while the new one arrives,
          and `layout` glides the dots across instead of jumping. */}
      <motion.div
        layout
        transition={{ duration: 0.4, ease: EASE }}
        className="mt-5 flex items-center justify-center gap-3"
      >
        <motion.div
          layout
          transition={{ duration: 0.4, ease: EASE }}
          className="flex shrink-0 items-center gap-1.5"
        >
          {SCREENS.map((screen, i) => (
            <span
              key={screen.label}
              aria-hidden
              className={cn(
                "size-1.5 rounded-full transition-colors duration-500",
                i === index ? "bg-primary" : "bg-foreground/15",
              )}
            />
          ))}
        </motion.div>

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.p
            key={label}
            layout
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="whitespace-nowrap text-caption font-medium text-muted-foreground"
          >
            {label}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
