interface WaveDividerProps {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
  goldLine?: boolean;
  height?: number;
}

export default function WaveDivider({
  fromColor = "#F8F4EC",
  toColor   = "#EFE6D8",
  flip      = false,
  goldLine  = true,
  height    = 72,
}: WaveDividerProps) {
  const d = "M0,40 C200,80 400,0 640,40 C880,80 1080,10 1280,40 L1280,72 L0,72 Z";
  const dLine = "M0,40 C200,80 400,0 640,40 C880,80 1080,10 1280,40";

  return (
    <div
      className="w-full overflow-hidden leading-[0] block"
      aria-hidden="true"
      style={{ height, background: fromColor, transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1280 72"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <path d={d} fill={toColor} />
        {goldLine && (
          <path
            d={dLine}
            fill="none"
            stroke="rgba(184,137,59,0.3)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
    </div>
  );
}
