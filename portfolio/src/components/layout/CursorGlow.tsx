import { useCursorPosition } from "@/hooks/useCursorPosition";

export default function CursorGlow() {
  const { position, isVisible } = useCursorPosition();

  return (
    <div
      className="cursor-glow"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
      aria-hidden="true"
    />
  );
}
