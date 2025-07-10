import MockAppLayout from "./layout/MockAppLayout";
import SectionTitle from "./components/SectionTitle";
import Card from "./components/Card";

export default function App() {
  return (
    <MockAppLayout>
      {/* Top Tabs */}
      <div className="flex space-x-6 text-sm font-medium text-gray-300">
        <span className="text-white border-b-2 border-teal-400 pb-1">Music</span>
        <span>Podcasts</span>
        <span className="relative">
          JioTunes
        </span>
      </div>

      {/* Recently Played */}
      <SectionTitle title="Recently Played" />
      <div className="flex overflow-x-auto space-x-4">
        <Card image="https://via.placeholder.com/100" text="Shivers" />
        <Card image="https://via.placeholder.com/100" text="Ellie Goulding" />
        <Card image="https://via.placeholder.com/100" text="Shakira" />
      </div>

      {/* New Releases */}
      <SectionTitle title="New Releases" />
      <div className="flex overflow-x-auto space-x-4">
        <Card image="https://via.placeholder.com/120x120" text="Sapphire" />
        <Card image="https://via.placeholder.com/120x120" text="Pehla Tu Duja Tu" />
        <Card image="https://via.placeholder.com/120x120" text="F1 The Album" />
      </div>
    </MockAppLayout>
  );
}
