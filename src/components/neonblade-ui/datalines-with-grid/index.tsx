import React, { useEffect, useRef, useState } from 'react';

export interface DatalinesWithGridProps {
  lineColor?: string;
  shadowColor?: string;
  bgGridColor?: string;
  cellSize?: number;
  maxLines?: number;
  baseSpeed?: number;
  lineLength?: number;
  spawnProbability?: number;
  overlay?: boolean;
}

function colorWithAlpha(color: string, alpha: number): string {
  if (color.startsWith('#')) {
    const hex = color.slice(1);
    const normalized = hex.length === 3 ? hex.split('').map((value) => value + value).join('') : hex;
    const red = Number.parseInt(normalized.slice(0, 2), 16);
    const green = Number.parseInt(normalized.slice(2, 4), 16);
    const blue = Number.parseInt(normalized.slice(4, 6), 16);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }
  return color;
}

const DatalinesCanvas: React.FC<Omit<DatalinesWithGridProps, 'bgGridColor' | 'overlay'>> = ({
  lineColor = '#00b95a',
  shadowColor = '#00b95a',
  cellSize = 50,
  maxLines = 10,
  baseSpeed = 1.5,
  lineLength = 150,
  spawnProbability = 0.08,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    const lines: Array<{
      x: number;
      y: number;
      history: Array<{ x: number; y: number }>;
      dx: number;
      dy: number;
      speed: number;
      length: number;
    }> = [];

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const draw = () => {
      context.clearRect(0, 0, width, height);

      if (Math.random() < spawnProbability && lines.length < maxLines) {
        lines.push({
          x: Math.floor(Math.random() * (width / cellSize)) * cellSize,
          y: -cellSize,
          history: [],
          dx: 0,
          dy: 1,
          speed: baseSpeed,
          length: lineLength * (0.75 + Math.random() * 0.5),
        });
      }

      lines.forEach((line) => {
        line.history.push({ x: line.x, y: line.y });
        const historyLimit = Math.max(2, Math.ceil(line.length / Math.max(line.speed, 1)));
        if (line.history.length > historyLimit) line.history.shift();

        line.x += line.dx * line.speed;
        line.y += line.dy * line.speed;

        if (line.x % cellSize === 0 && line.y % cellSize === 0) {
          const maxX = Math.floor(width / cellSize) * cellSize;
          if (line.x >= maxX && line.dx === 1) {
            line.dx = 0;
            line.dy = 1;
          } else if (line.x <= 0 && line.dx === -1) {
            line.dx = 0;
            line.dy = 1;
          } else if (line.dy === 1 && Math.random() < 0.3) {
            line.dy = 0;
            line.dx = Math.random() < 0.5 ? -1 : 1;
          } else if (line.dy === 0 && Math.random() < 0.6) {
            line.dy = 1;
            line.dx = 0;
          }
        }

        if (line.history.length < 2) return;
        const tail = line.history[0];
        const head = line.history[line.history.length - 1];
        const gradient = context.createLinearGradient(tail.x, tail.y, head.x, head.y);
        gradient.addColorStop(0, colorWithAlpha(lineColor, 0));
        gradient.addColorStop(0.6, colorWithAlpha(lineColor, 0.35));
        gradient.addColorStop(1, colorWithAlpha(lineColor, 0.9));

        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.lineWidth = 1.5;
        context.strokeStyle = gradient;
        context.beginPath();
        context.moveTo(tail.x, tail.y);
        line.history.slice(1).forEach((point) => context.lineTo(point.x, point.y));
        context.stroke();

        context.strokeStyle = colorWithAlpha(lineColor, 0.95);
        context.shadowColor = shadowColor;
        context.shadowBlur = 8;
        context.beginPath();
        context.moveTo(head.x, head.y);
        context.lineTo(head.x, head.y + 1);
        context.stroke();
        context.shadowBlur = 0;
      });

      for (let index = lines.length - 1; index >= 0; index -= 1) {
        if (lines[index].y > height + cellSize * 2) lines.splice(index, 1);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [baseSpeed, cellSize, lineColor, lineLength, maxLines, shadowColor, spawnProbability]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 h-full w-full pointer-events-none" />;
};

export const DatalinesWithGrid: React.FC<DatalinesWithGridProps> = ({
  lineColor = '#00b95a',
  shadowColor = '#00b95a',
  bgGridColor = 'rgba(0, 185, 90, 0.14)',
  cellSize = 50,
  maxLines = 10,
  baseSpeed = 1.5,
  lineLength = 150,
  spawnProbability = 0.08,
  overlay = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tileCount, setTileCount] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateTiles = () => {
      setTileCount(Math.ceil(container.clientWidth / cellSize) * (Math.ceil(container.clientHeight / cellSize) + 1));
    };

    updateTiles();
    const resizeObserver = new ResizeObserver(updateTiles);
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [cellSize]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 flex flex-wrap overflow-hidden">
      <DatalinesCanvas
        lineColor={lineColor}
        shadowColor={shadowColor}
        cellSize={cellSize}
        maxLines={maxLines}
        baseSpeed={baseSpeed}
        lineLength={lineLength}
        spawnProbability={spawnProbability}
      />
      {Array.from({ length: tileCount }).map((_, index) => (
        <div key={index} className="box-border" style={{ width: cellSize, height: cellSize, border: `0.5px solid ${bgGridColor}` }} />
      ))}
      {overlay && <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/30 via-transparent to-[#252525]/70" />}
    </div>
  );
};
