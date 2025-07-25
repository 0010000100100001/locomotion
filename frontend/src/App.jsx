import MockAppLayout from "./layout/MockAppLayout";
import SectionTitle from "./components/mock/SectionTitle";
import Card from "./components/mock/Card";
import { useEffect, useState } from "react";
import Showcase from "./components/ad/Showcase";
import Overlay from "./components/ad/Overlay";

export default function App() {
  const [skeletonData, setSkeletonData] = useState(null);


useEffect(() => {
  const query = new URLSearchParams(window.location.search);
  const adUnit = query.get("ad");

  let filename = "skeleton_overlay_two.json"; // default fallback

  if (adUnit === "overlay") {
    filename = "skeleton_overlay_one.json";
  } else if (adUnit === "showcase") {
    filename = "skeleton_showcase_one.json";
  }

  fetch(`/json/${filename}`)
    .then((res) => res.json())
    .then(setSkeletonData)
    .catch(console.error);
}, []);

  return (
    <MockAppLayout>
      {skeletonData?.placement === "overlay" && <Overlay skeletonData={skeletonData} />}
      <div className="flex-1 overflow-y-auto">
        {skeletonData?.placement === "showcase" && <Showcase skeletonData={skeletonData} />}

        <div className="px-4 py-3 space-y-4">
          {/* Recently Played */}
          <SectionTitle title="Recently Played" />
          <div className="flex overflow-x-auto space-x-4">
            <Card image="https://c.saavncdn.com/940/Shivers-English-2021-20211022044815-500x500.jpg" text="Shivers" />
            <Card image="https://c.saavncdn.com/artists/Ellie_Goulding_006_20221105190218_500x500.jpg" text="Ellie Goulding" />
            <Card image="https://c.saavncdn.com/artists/Shakira_002_20220916145812_500x500.jpg" text="Shakira" />
          </div>

          {/* New Releases */}
          <SectionTitle title="New Releases" />
          <div className="flex overflow-x-auto space-x-4">
            <Card image="https://c.saavncdn.com/760/Sapphire-English-2025-20250623223610-500x500.jpg" text="Sapphire" />
            <Card image="https://c.saavncdn.com/182/Pehla-Tu-Duja-Tu-From-Son-Of-Sardaar-2-Hindi-2025-20250707201004-500x500.jpg" text="Pehla Tu Duja Tu" />
            <Card image="https://c.saavncdn.com/279/F1-The-Album-Deluxe-English-2025-20250624223443-500x500.jpg" text="F1 The Album" />
          </div>

          {/* Recommended JioTunes */}
          <SectionTitle title="Recommended JioTunes" />
          <div className="flex overflow-x-auto space-x-4">
            <Card image="https://c.saavncdn.com/940/Shivers-English-2021-20211022044815-500x500.jpg" text="Shivers" />
            <Card image="https://c.saavncdn.com/artists/Ellie_Goulding_006_20221105190218_500x500.jpg" text="Ellie Goulding" />
            <Card image="https://c.saavncdn.com/artists/Shakira_002_20220916145812_500x500.jpg" text="Shakira" />
          </div>

          {/* Top Charts */}
          <SectionTitle title="Top Charts" />
          <div className="flex overflow-x-auto space-x-4">
            <Card image="https://c.saavncdn.com/760/Sapphire-English-2025-20250623223610-500x500.jpg" text="Sapphire" />
            <Card image="https://c.saavncdn.com/182/Pehla-Tu-Duja-Tu-From-Son-Of-Sardaar-2-Hindi-2025-20250707201004-500x500.jpg" text="Pehla Tu Duja Tu" />
            <Card image="https://c.saavncdn.com/279/F1-The-Album-Deluxe-English-2025-20250624223443-500x500.jpg" text="F1 The Album" />
          </div>
        </div>
      </div>
    </MockAppLayout>
  );
}
