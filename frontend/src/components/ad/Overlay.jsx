import SkeletonRenderer from "./SkeletonRenderer";


export default function Overlay({ skeletonData }) {
  if (!skeletonData) return null;

  return (
      <div className="fixed inset-0 z-50 flex">
        <SkeletonRenderer node={skeletonData} />
      </div>
  );
}
