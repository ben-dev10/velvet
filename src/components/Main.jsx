/* eslint-disable react/prop-types */
import {
  ArrowUpRightIcon,
  BarChart,
  BringToFront,
  Network,
} from "lucide-react";
import Carousel from "./ui/carousel/carousel";
import womanImg from "../assets/cosmetics/woman-cosmetic.png";
import cosmetic1 from "../assets/cosmetics/cosmetic (1).png";
import cosmetic2 from "../assets/cosmetics/cosmetic (2).png";
import cosmetic4 from "../assets/cosmetics/cosmetic (4).png";
import cosmetic6 from "../assets/cosmetics/cosmetic (6).png";
import lucia from "../assets/cosmetics/natural-beauty.png";
import rauch from "../assets/avatars/rauch.png";
import lee from "../assets/avatars/lee.png";
import simon from "../assets/avatars/simon.png";
import steven from "../assets/avatars/steven.png";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="p-4 px-6 flex flex-col md:flex-row gap-3 mb-5">
      <div className="hero-texts my-3 order-1 md:order-none md:self-center">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring" }}
        >
          <p className="italic text-accent">best products for skin care</p>
          <h1 className="h1">Velvet Cosmetics Limited</h1>
          <p className="md:pr-8">
            We produce and sell an array of award-winning cosmetics for hair and
            skin.
          </p>
        </motion.div>
        <div className="mt-4">
          <a href="#" className="">
            <button className="flex items-center px-3 py-[6px] rounded-full bg-accent text-white active:scale-[0.9] duration-300 hover:bg-[hsl(253,51%,45%)]">
              Learn more <ArrowUpRightIcon size={14} className="ml-1" />
            </button>
          </a>
        </div>
      </div>

      <div className="relative hero-carousel flex items-center justify-center {bg-accent/50} aspect-[1/1] w-full max-h-[260px] sm:max-h-[300px] md:max-w-[400px]  md:max-h-[350px]">
        <Carousel />
      </div>
    </div>
  );
}

function BrandsRow() {
  return (
    <div className="brands bg-black font-semibold text-[16px]">
      <div className="wrapper container-4xl flex justify-around p-4 py-10 text-white">
        <p className="">Rexona</p>
        <p className="">Nivea</p>
        <p className="">Dodo</p>
      </div>
    </div>
  );
}

function StatsIcon({ children, number, text }) {
  return (
    <div className="flex shrink-0">
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
          <div className="md:max-w-[500px] space-y-2 px-4 pl-7 md:px-10 md:mt-4">
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
            <div className="stats-group flex flex-col md:flex-row gap-3 !mt-4 !mb-4 flex-wrap">
              <StatsIcon number="50,000+" text="Satisfied Customers">
                <BringToFront size={20} className="shrink-0 " />
              </StatsIcon>
              <StatsIcon number="4M+" text="Completed Transactions">
                <BarChart size={20} className="shrink-0 " />
              </StatsIcon>
              <StatsIcon number="50M+" text="Total Customers">
                <Network size={20} className="shrink-0 " />
              </StatsIcon>
            </div>
          </div>
        </div>
        <div className=" w-full p-4 flex justify-center">
          <div className="bg-blue-50 h-full p-2 rounded sm:max-w-[350px]">
            <img src={womanImg} alt="" className="object-cover " />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ imgUrl, productName, description, price }) {
  return (
    <div className="card flex flex-col shrink-0 w-[200px] h-[280px] bg-white p-3 rounded-md shadow-md shadow-blue-100/50">
      <div className="head mb-2">
        <img
          src={imgUrl}
          alt=""
          className="w-full h-[150px] rounded-md object-contain"
        />
      </div>
      <div className="body grow flex flex-col">
        <p className="text-[14px] font-bold">{productName}</p>
        <p className="text-gray-500">{description}</p>
        <div className="flex mt-auto">
          <div className="price font-bold mr-auto text-[13px]">{price}</div>
          <button className="bg-accent text-blue-50 px-4 py-[3px] rounded-full hover:bg-[hsl(253,51%,45%)]">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

function Catalogue() {
  return (
    <div className="catalogue flex flex-col items-center px-4 my-[25px] mb-[50px]">
      <h2 className="h2 mb-3">Our Catalogue</h2>
      <div className="flex gap-4 max-w-full overflow-y-auto">
        <Card
          imgUrl={cosmetic1}
          productName="Velvet Crisp"
          description="Our best-selling spray. Suitable for ladies & gents."
          price="140$"
        />
        <Card
          imgUrl={cosmetic2}
          productName="Velvet Luxure"
          description="Simple yet elegant."
          price="120$"
        />
        <Card
          imgUrl={cosmetic4}
          productName="Alastin Skincare"
          description="Our least expensive, but don't be fooled!"
          price="50$"
        />
        <Card
          imgUrl={cosmetic6}
          productName="Rejuvity"
          description="A pack of premium goodness for smooth skin"
          price="250$"
        />
      </div>
    </div>
  );
}

function MiniTestimonialCard({
  userName,
  url,
  city,
  testimony,
  isSpecial = false,
}) {
  return (
    <div
      data-aos="fade-up"
      className={`mini-testimonial-card shrink-0 border pt-2 flex flex-col w-[180px] h-[150px] rounded-lg ${
        isSpecial ? "bg-accent text-white" : " "
      }`}
    >
      <div className="head flex items-center">
        <img
          src={url}
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

      <div className="body p-2 px-3">
        <p className={`${isSpecial ? "text-white/80" : "text-gray-500"}`}>
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

        <div
          data-aos="fade-up"
          className="main-testimonial overflow-hidden max-w-[450px] h-[135px] border p-2 flex bg-white shadow-lg shadow-slate-100 rounded-md"
        >
          <div className="img shrink-0 h-[100%] mr-4">
            <img
              src={lucia}
              alt=""
              className="w-[120px] object-cover rounded-md h-[100%]"
            />
          </div>
          <div className="">
            <h4 className="h4">Lucia</h4>
            <p className="text-gray-500">
              I was intrigued by the effectiveness of my Velvet creams. In just
              2 weeks, my skin was back to normal.
            </p>
          </div>
        </div>

        <div className="mini-testimonials flex gap-3 w-full overflow-x-auto overflow-y-hidden px-3 mt-3">
          <MiniTestimonialCard
            url={lee}
            userName="Leonardo Davinci"
            city="New York"
            testimony="Velvet is the best cosmetics company in the world!"
          />
          <MiniTestimonialCard
            url={simon}
            isSpecial={true}
            userName="BestBrain246"
            city="Kasoa"
            testimony="I know creams aren't for animals but I was surprised to see my cat's fur turning white"
          />
          <MiniTestimonialCard
            url={steven}
            userName="John Wick"
            city="Kentucky"
            testimony="I love good products, that's why I love Velvet"
          />
          <MiniTestimonialCard
            url={rauch}
            userName="Marvin"
            city="Lagos"
            testimony="If you want the best products for your skin, try Velvet's collection of cosmetics"
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
      <div className="testimonials bg-white py-8 md:pb-12 pt-4">
        <Testimonials />
      </div>
      <div className="newsletter bg-accent p-4 py-10">
        <Newsletter />
      </div>
    </>
  );
}
