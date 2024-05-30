import Box from "./Box";

export default function Visiablility() {
  return (
    <div>
      <LongSection />
      <Box />
      <LongSection />
    </div>
  );
}

function LongSection() {
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item {i + 1}</li>);
  }
  return <ul>{items}</ul>;
}
