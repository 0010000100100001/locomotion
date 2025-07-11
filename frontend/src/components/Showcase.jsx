import SkeletonRenderer from "./SkeletonRenderer";


export default function Showcase({ skeletonData }) {
  if (!skeletonData) return null;

  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-md">
      <SkeletonRenderer node={skeletonData} />
    </div>
  );
}
