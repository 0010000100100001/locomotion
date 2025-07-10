import MockAppLayout from "./layout/MockAppLayout";

export default function App() {
  return (
    <MockAppLayout>
      <div className="text-white text-lg font-bold">
        Hello from inside the layout!
      </div>
    </MockAppLayout>
  );
}

