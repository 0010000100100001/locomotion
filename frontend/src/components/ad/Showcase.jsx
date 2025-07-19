import SkeletonRenderer from "./SkeletonRenderer";


export default function Showcase({ skeletonData }) {
  if (!skeletonData) return null;

  return (
      <SkeletonRenderer node={skeletonData} />
  );
}
