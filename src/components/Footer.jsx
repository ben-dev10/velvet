/* eslint-disable react/prop-types */
import { ExternalLink } from "lucide-react";
import logo from "../assets/velvet-icon-group.svg";
import { Link } from "react-router-dom";

function Socials() {
  return (
    <div className="flex gap-2 my-2 ">
      <svg
        className="fill-white/90 w-[18px] cursor-pointer hover:opacity-70"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        version="1.1"
        aria-hidden="false"
      >
        <desc lang="en-US">X (formerly Twitter) icon</desc>
        <path d="M13.69 10.622 20.25 3h-1.555l-5.693 6.618L8.454 3H3.21l6.876 10.007L3.21 21h1.554l6.012-6.99L15.578 21h5.245L13.69 10.622Zm-2.126 2.474-.697-.996-5.543-7.93H7.71l4.474 6.399.697.997 5.815 8.317h-2.387l-4.745-6.787Z"></path>
      </svg>

      <svg
        className="fill-white/90 w-[18px] cursor-pointer hover:opacity-70"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        version="1.1"
        aria-hidden="false"
      >
        <desc lang="en-US">Instagram icon</desc>
        <path d="M21.933 7.877c-.048-1.064-.219-1.79-.465-2.429a4.874 4.874 0 0 0-1.154-1.77 4.959 4.959 0 0 0-1.77-1.154c-.635-.246-1.361-.417-2.429-.464C15.052 2.012 14.71 2 11.996 2c-2.714 0-3.056.012-4.123.06-1.063.047-1.79.218-2.425.464-.658.254-1.214.599-1.77 1.155a4.959 4.959 0 0 0-1.154 1.77c-.246.634-.417 1.36-.464 2.428C2.012 8.94 2 9.282 2 11.996c0 2.714.012 3.056.06 4.123.047 1.064.218 1.79.464 2.429.254.658.599 1.214 1.155 1.77a4.958 4.958 0 0 0 1.77 1.154c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.056-.012 4.123-.06c1.063-.047 1.79-.218 2.429-.464a4.872 4.872 0 0 0 1.77-1.155 4.956 4.956 0 0 0 1.154-1.77c.246-.634.417-1.36.465-2.428.047-1.067.059-1.405.059-4.123s-.016-3.056-.067-4.119Zm-1.798 8.159c-.044.976-.206 1.504-.345 1.857a3.103 3.103 0 0 1-.746 1.15c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.047-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.207-1.857-.345a3.103 3.103 0 0 1-1.15-.746 3.054 3.054 0 0 1-.747-1.151c-.135-.353-.301-.881-.345-1.857-.047-1.056-.06-1.37-.06-4.04s.013-2.984.06-4.04c.044-.976.206-1.504.345-1.857.183-.468.397-.801.746-1.15.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.047 1.37-.06 4.04-.06s2.984.013 4.04.06c.976.044 1.504.206 1.857.345.468.183.801.397 1.15.746.35.35.568.683.747 1.151.135.353.301.881.345 1.857.047 1.056.06 1.37.06 4.04s-.012 2.988-.06 4.04Zm-8.139-9.17a5.136 5.136 0 1 0 .002 10.27 5.136 5.136 0 0 0-.002-10.27Zm0 8.463a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665Zm6.536-8.67a1.197 1.197 0 1 1-2.397 0 1.197 1.197 0 1 1 2.397 0Z"></path>
      </svg>

      <svg
        className="fill-white/90 w-[22px] cursor-pointer hover:opacity-70"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        version="1.1"
        aria-hidden="false"
      >
        <desc lang="en-US">Facebook icon</desc>
        <path d="M22 12c0-5.563-4.5-10-10-10S2 6.5 2 12c0 5 3.688 9.125 8.438 9.875v-6.938H7.874V12h2.563V9.812c0-2.5 1.5-3.874 3.75-3.874 1.124 0 2.25.187 2.25.187v2.438h-1.25c-1.25 0-1.626.75-1.626 1.562V12h2.75l-.437 2.875h-2.313v7C18.313 21.187 22 17 22 12Z"></path>
      </svg>
    </div>
  );
}

function Copyright() {
  let year = new Date();
  return (
    <div className="flex gap-2 py-2 items-center">
      <Link to={`/`} title="Go to homepage">
        <img src={logo} alt="" width="100px" />
      </Link>
      <div className="">Copyright &copy; {year.getFullYear()}</div>
      <div className="pl-2 border-l border-secondary">
        <a href="#" className="hover:underline">
          Trademark Policy
        </a>
      </div>
    </div>
  );
}

function FooterLink({ text, className, children, url = "#" }) {
  return (
    <a href={url} className={`${className} footer-links text-white/70 py-1`}>
      {text}
      {children}
    </a>
  );
}

function Mobile() {
  return (
    <div className="mobile md:hidden pb-[70px]">
      <Copyright />
      <div className="mobile-links flex flex-col px-3">
        <FooterLink text="Product" />
        <FooterLink text="Company" />
        <FooterLink text="Social Media" className="flex items-center">
          <ExternalLink size={14} className="ml-[2px]" />
        </FooterLink>
      </div>
      <Socials />
    </div>
  );
}

function PC() {
  return (
    <div className="pc hidden md:block">
      <div className="flex gap-8">
        <div className="">
          <Copyright />
          <Socials />
        </div>
        <div className="pc-links gap-5 flex pt-[10px]">
          <div className="flex flex-col">
            <p className="font-semibold">Services</p>
            <FooterLink text="Product" />
            <FooterLink text="Company" />
            <FooterLink text="Social Media" className="flex items-center">
              <ExternalLink size={14} className="ml-[2px]" />
            </FooterLink>
            <FooterLink text="Offices" />
            <FooterLink text="HeadQuarters" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Marketing</p>
            <FooterLink text="Showcase" className="flex items-center">
              <ExternalLink size={14} className="ml-[2px]" />
            </FooterLink>
            <FooterLink text="Learn" />
            <FooterLink text="Academy" />
            <FooterLink text="Shipping" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Jobs & Offers</p>
            <FooterLink text="Revenue" />
            <FooterLink text="Legal" />
            <FooterLink text="Status Report" className="flex items-center">
              <ExternalLink size={14} className="ml-[2px]" />
            </FooterLink>
            <FooterLink text="Hiring" />
            <FooterLink text="China" />
            <FooterLink text="UK" />
            <FooterLink text="USA" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterMini() {
  return (
    <div className="container-4xl px-4 py-2">
      <p className="text-center opacity-70">
        <span className="text-cyan-400">Velvet Cosmetic Limited</span>, HQ Accra
        Ghana
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="text-white bg-[#0F0A20]">
      <div className="wrapper container-4xl p-4">
        <Mobile />
        <PC />
      </div>
      <div className="bg-black">
        <FooterMini />
      </div>
    </div>
  );
}
