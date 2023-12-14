import { BarChart, BringToFront } from "lucide-react";
import Carousel from "./ui/carousel/carousel";
// import Carousel from "./ui/carousel/carousel";

function Hero() {
  return (
    <div className="p-4 px-6 flex flex-col md:flex-row gap-3 mb-5">
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

      <div className="hero-carousel flex items-center bg-accent/50 aspect-[1/1] w-full max-h-[200px] sm:max-h-[300px]  md:max-h-[350px]">
        <Carousel />
      </div>
    </div>
  );
}

function BrandsRow() {
  return (
    <div className="brands bg-black">
      <div className="wrapper container-4xl flex justify-around p-4 py-10 text-white">
        <p className="">Google</p>
        <p className="">Microsoft</p>
        <p className="">Apple</p>
      </div>
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
    <div className="wrapper p-4 px-6 py-10 container-4xl">
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
        <img
          src={imgUrl}
          alt=""
          className="w-full h-[150px] rounded-md object-cover"
        />
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
    <div className="catalogue flex flex-col items-center px-4 my-[50px]">
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

// eslint-disable-next-line react/prop-types
function MiniTestimonialCard({ userName, city, testimony, isSpecial = false }) {
  return (
    <div
      className={`mini-testimonial-card shrink-0 border flex flex-col w-[180px] h-[150px] rounded-lg ${
        isSpecial ? "bg-accent text-white" : " "
      }`}
    >
      <div className="head flex items-center">
        <img
          src="user-img"
          alt="testimonial-avatar"
          className="w-[32px] h-[32px] rounded-full border m-2"
        />
        <div className="ml-2">
          <p className="font-bold text-[13px]">{userName}</p>
          <p className={`${isSpecial ? "text-sky-300" : "text-accent/70"}`}>
            {city}
          </p>
        </div>
      </div>

      <div className="body p-2">
        <p className={`${isSpecial ? "text-white/70" : "text-gray-500"}`}>
          {testimony}
        </p>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="wrapper container-4xl p-5">
      <div className="testimonials gap-4 flex flex-col items-center">
        <h2 className="h2 text-center">What Our Customers Say</h2>

        <div className="main-testimonial overflow-hidden max-w-[450px] h-[115px] border p-2 flex bg-white shadow-lg shadow-slate-100 rounded-md">
          <div className="img">
            <img src="" alt="" className="w-[120px] object-cover rounded-md" />
          </div>
          <div className="">
            <h4 className="h4">Lucia</h4>
            <p className="text-gray-500">
              I was intrigued by the effectiveness of my Velvet creams. In just
              2 weeks, my skin was cleared of most infections and I&apos;m back
              to my smooth shiny face.
            </p>
          </div>
        </div>

        <div className="mini-testimonials flex gap-3 w-full overflow-x-auto px-3 mt-3">
          <MiniTestimonialCard
            userName="Leonardo Davinci"
            city="New York"
            testimony="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate?"
          />
          <MiniTestimonialCard
            isSpecial={true}
            userName="Leonardo Davinci"
            city="New York"
            testimony="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate?"
          />
        </div>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="wrapper container-4xl text-white md:flex md:justify-center md:items-center md:gap-5">
      <div className="mb-3">
        <h3 className="h3">Join Our Newsletter</h3>
        <p className="opacity-70">
          Get notified on new products from Velvet Cosmetics, twice weekly.
        </p>
      </div>
      <div className="searchbar flex p-1 border rounded-md max-w-[400px] max-h-[36px]">
        <input
          type="text"
          className="grow  p-1 outline-none bg-transparent placeholder:text-white/70"
          placeholder="Email..."
        />
        <button className="text-black bg-white px-3 rounded">Join</button>
      </div>
    </div>
  );
}
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
      <div className="testimonials bg-white">
        <Testimonials />
      </div>
      <div className="newsletter bg-accent p-4 py-10">
        <Newsletter />
      </div>
    </>
  );
}
