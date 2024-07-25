import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue, useSpring, MotionValue } from "framer-motion";
import { distance } from "@popmotion/popcorn";
import styles from "@/styles/AnimatedCircles.module.css";

interface Active {
  row: number;
  col: number;
}

interface SquareProps {
  active: Active;
  setActive: React.Dispatch<React.SetStateAction<Active>>;
  colIndex: number;
  rowIndex: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const grid = [[0, 1, 2, 3], [6, 7, 8, 9], [12, 13, 14, 15], [18, 19, 20, 21]];
const size = 60;
const gap = 10;

const Square: React.FC<SquareProps> = ({ active, setActive, colIndex, rowIndex, x, y }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  const handleDragEnd = () => {
    x.set(0);
    y.set(0);
    setActive({ row: 0, col: 0 });
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      onDragEnd={handleDragEnd}
      className={styles.circle}
      style={{
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0
      }}
    />
  );
};

const AnimatedSquare: React.FC = () => {
  const [active, setActive] = useState<Active>({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className={styles.app}>
      <motion.div
        animate={{ "--base-hue": 360 } as any}
        initial={{ "--base-hue": 0 } as any}
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        style={{ width: "100%", height: "100%" }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: 360,
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut", 
            repeatDelay: 2}}
          style={{
            display: "flex",
            width: (size + gap) * 4 - gap,
            height: (size + gap) * 4 - gap,
            top: "42%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "relative",
            perspective: 500
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((_item, colIndex) => (
              <Square
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
                key={rowIndex + colIndex}
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedSquare;