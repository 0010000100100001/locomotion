import MockAppLayout from "./layout/MockAppLayout";
import SectionTitle from "./components/SectionTitle";
import Card from "./components/Card";
import Showcase from "./components/Showcase";
import { useEffect, useState } from "react";


export default function App() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://assets2.lottiefiles.com/packages/lf20_touohxv0.json")
      .then(res => res.json())
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
        <Card image="https://placehold.co/100x100/1f1f27/a0a0a0?text=Shivers" text="Shivers" />
        <Card image="https://placehold.co/100x100/1f1f27/a0a0a0?text=Ellie" text="Ellie Goulding" />
        <Card image="https://placehold.co/100x100/1f1f27/a0a0a0?text=Shakira" text="Shakira" />
      </div>

      {/* New Releases */}
      <SectionTitle title="New Releases" />
      <div className="flex overflow-x-auto space-x-4">
        <Card image="https://placehold.co/120x120/1f1f27/a0a0a0?text=Sapphire" text="Sapphire" />
        <Card image="https://placehold.co/120x120/1f1f27/a0a0a0?text=Pehla+Tu" text="Pehla Tu Duja Tu" />
        <Card image="https://placehold.co/120x120/1f1f27/a0a0a0?text=F1+Album" text="F1 The Album" />
      </div>
    </MockAppLayout>
  );
}
