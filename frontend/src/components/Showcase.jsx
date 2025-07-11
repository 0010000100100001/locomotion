import SkeletonRenderer from "./SkeletonRenderer";


export default function Showcase({ skeletonData }) {
  if (!skeletonData) return null;

  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-md" style={{ background: "mediumslateblue" }}>
      <SkeletonRenderer node={skeletonData} />
    </div>
  );
}
