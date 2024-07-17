/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Typing = ({ texts, speed = 150, delay = 1000 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    if (subIndex === texts[index].length + 1 && !deleting) {
      setIsPaused(true);
      setTimeout(() => {
        setDeleting(true);
        setIsPaused(false);
      }, delay);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, isPaused, texts, speed, delay]);

  useEffect(() => {
    if (!isPaused) {
      setText(texts[index].substring(0, subIndex));
    }
  }, [subIndex, index, isPaused, texts]);

  return <div className='typing'>{text}</div>;
};

export default Typing;
