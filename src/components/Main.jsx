function Hero() {
  return (
    <div className="h-[150px] bg-gradient-to-br from-lime-500 to-green-700"></div>
  );
}

export default function Main() {
  return (
    <div className="wrapper wrapper max-w-4xl mx-auto">
      <Hero />
      <p>Main</p>
    </div>
  );
}
