import { useState, useMemo } from "react";

const useIsHovered = () => {
  const [isHovered, setIsHovered] = useState();

  const hoverEventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setIsHovered(true);
      },
      onMouseOut() {
        setIsHovered(false);
      },
    }),
    []
  );

  return [isHovered, hoverEventHandlers];
};

export default useIsHovered;
