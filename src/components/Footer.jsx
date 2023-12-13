/* eslint-disable react/prop-types */
import { ExternalLink } from "lucide-react";
import logo from "/logo.svg";

function Copyright() {
  let year = new Date();
  return (
    <div className="flex gap-2 py-2">
      <img src={logo} alt="" />
      <div className="">Copyright &copy; {year.getFullYear()}</div>
      <div className="pl-2 border-l border-secondary">
        <a href="#" className="hover:underline">
          Trademark Policy
        </a>
      </div>
    </div>
  );
}

function Link({ text, className, children, url = "#" }) {
  return (
    <a href={url} className={`${className} footer-links py-1`}>
      {text}
      {children}
    </a>
  );
}

function Mobile() {
  return (
    <div className="mobile md:hidden">
      <Copyright />
      <div className="mobile-links flex flex-col px-3">
        <Link text="Product" />
        <Link text="Company" />
        <Link text="Social Media" className="flex items-center">
          <ExternalLink size={14} className="ml-[2px]" />
        </Link>
      </div>
    </div>
  );
}

function PC() {
  return (
    <div className="pc hidden md:block">
      <div className="flex gap-8">
        <div className="">
          <Copyright />
        </div>
        <div className="pc-links gap-5 flex pt-[10px]">
          <div className="flex flex-col">
            <p className="font-bold text-secondary">Services</p>
            <Link text="Product" />
            <Link text="Company" />
            <Link text="Social Media" className="flex items-center">
              <ExternalLink size={14} className="ml-[2px]" />
            </Link>
            <Link text="Offices" />
            <Link text="HeadQuarters" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-secondary">Marketing</p>
            <Link text="Showcase" className="flex items-center">
              <ExternalLink size={14} className="ml-[2px]" />
            </Link>
            <Link text="Learn" />
            <Link text="Academy" />
            <Link text="Shipping" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-secondary">Jobs & Offers</p>
            <Link text="Revenue" />
            <Link text="Legal" />
            <Link text="Status Report" className="flex items-center">
              <ExternalLink size={14} className="ml-[2px]" />
            </Link>
            <Link text="Hiring" />
            <Link text="China" />
            <Link text="UK" />
            <Link text="USA" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="wrapper container-4xl">
      <Mobile />
      <PC />
    </div>
  );
}
