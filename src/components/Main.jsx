import { BarChart, BringToFront } from "lucide-react";

function Hero() {
  return (
    <div className="p-4 px-6 flex flex-col md:flex-row gap-3">
      <div className="hero-texts my-3 order-1 md:order-none md:self-center">
        <p className="italic">best products for skin care</p>
        <h1 className="h1">Velvet Cosmetics Limited</h1>
        <p className="">
          We produce and sell an array of award-winning cosmetics for hair and
          skin.
        </p>
        <div className="mt-2">
          <a href="#" className="">
            <button className="px-2 py-1 rounded-full bg-accent text-white">
              Learn more
            </button>
          </a>
        </div>
      </div>

      <div className="hero-carousel bg-accent/50 aspect-[1/1] w-full md:max-h-[350px]">
        <p className="p-2">img carousel</p>
      </div>
    </div>
  );
}

function BrandsRow() {
  return (
    <div className="brands flex justify-around bg-black p-4 px-5 text-white">
      <p className="">Google</p>
      <p className="">Microsoft</p>
      <p className="">Apple</p>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function StatsIcon({ children, number, text }) {
  return (
    <div className="flex">
      <div className="p-2 mr-3 text-accent bg-white rounded-md flex h-max self-center">
        {children}
      </div>
      <div>
        <h3 className="h4">{number}</h3>
        <p className="text-white/70">{text}</p>
      </div>
    </div>
  );
}

function Mission() {
  return (
    <div className="wrapper p-4 px-6 pb-10 container-4xl">
      <div className="mission-card bg-accent py-6 rounded-lg flex flex-col md:flex-row text-white">
        <div className="shrink-0">
          <h2 className="h2 mb-2 ">
            <span className="w-[6px] white-asset h-[24px] rounded-tr-[6px] rounded-br-[6px] bg-white inline-block border translate-y-[4px]"></span>
            <span className="ml-3">Our Mission</span>
          </h2>
          <div className="md:max-w-[500px] space-y-2 px-4 pl-7">
            <p>
              <span className="pl-2 mr-1">At</span>
              <span className="text-cyan-300">Velvet</span>, we are committed to
              our service to our customers and make providing the best products
              and services our priority.
            </p>
            <p>
              <span className="pl-2">Thus</span> we continue to provide more new
              products based on customer feedback all at unbeatable prices.
            </p>
            <div className="stats-group flex flex-col md:flex-row gap-3 !mt-4">
              <StatsIcon number="50,000+" text="Satisfied Customers">
                <BringToFront size={20} className="shrink-0 " />
              </StatsIcon>
              <StatsIcon number="4M+" text="Completed Transactions">
                <BarChart size={20} className="shrink-0 " />
              </StatsIcon>
            </div>
          </div>
        </div>
        <div className=" w-full p-4">
          <div className="bg-blue-500 h-full p-2 rounded">img</div>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Card({ imgUrl, productName, description, price }) {
  return (
    <div className="card flex flex-col shrink-0 w-[200px] h-[280px] bg-white p-3 rounded-md">
      <div className="head mb-2">
        <img src={imgUrl} alt="" className="w-full h-[150px] rounded-md" />
      </div>
      <div className="body grow flex flex-col">
        <p className="text-[14px] font-bold">{productName}</p>
        <p className="text-gray-500">{description}</p>
        <div className="flex mt-auto">
          <div className="price font-bold mr-auto text-[13px]">{price}</div>
          <button className="bg-accent text-blue-50 px-2 rounded-full">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

function Catalogue() {
  return (
    <div className="catalogue flex flex-col items-center px-4 mt-[50px]">
      <h2 className="h2 mb-3">Our Catalogue</h2>
      <div className="flex gap-4 max-w-full overflow-y-auto">
        <Card
          imgUrl=""
          productName="Velvet Crisp"
          description="Our best-selling spray. Suitable for ladies & gents."
          price="140$"
        />
        <Card
          imgUrl=""
          productName="Velvet Luxure"
          description="Simple yet elegant."
          price="120$"
        />
      </div>
    </div>
  );
}

// function BrandsRow() {
//   return (
//     <div className=""></div>
//   );
// }

export default function Main() {
  return (
    <>
      <div className="hero wrapper container-4xl">
        <Hero />
      </div>
      <BrandsRow />
      <div className="mission bg-white">
        <Mission />
      </div>
      <Catalogue />
    </>
  );
}
