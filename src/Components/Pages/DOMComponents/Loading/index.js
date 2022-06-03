import { Html, useProgress } from "@react-three/drei";

function Loading() {
  const { progress } = useProgress();
  return <Html center>{Math.round(progress)}% loaded</Html>;
}

export default Loading;
