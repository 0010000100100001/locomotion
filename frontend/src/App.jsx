import MockAppLayout from "./layout/MockAppLayout";
import SectionTitle from "./components/SectionTitle";
import Card from "./components/Card";
import Showcase from "./components/Showcase";
import { useEffect, useState } from "react";

export default function App() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://assets2.lottiefiles.com/packages/lf20_touohxv0.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  return (
    <MockAppLayout>
      {/* Showcase Hero Ad */}
      <Showcase
        title="Introducing AdMotion"
        subtitle="Immersive Native Ad Experiences"
        animationJson={animationData}
        cta={{ text: "Learn More", url: "https://example.com" }}
      />

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
    </MockAppLayout>
  );
}
