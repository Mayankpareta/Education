"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { TiArrowRightThick } from "react-icons/ti";

const menu = {
  courses: ["Data Science", "UI/UX design", "Digital Marketing", "AI & ML"],
  careers: ["Job Openings", "Life at", "Alumni Success Stories", "AI & ML"],
};

const DesktopNav = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="flex justify-center">
    <div className="sticky top-0 z-20 text-base mx-w-8xl flex justify-evenly text-white font-bold items-center w-[1600px] px-10 shadow-md bg-[#49BBBD]">
      {/* Logo */}
      <div className=" font-bold">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={90}
            height={40}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Center Nav */}
      <div className="flex gap-12 relative">

        <div className="hover:text-black/60" >
            <Link href={"/"} >Home</Link>
        </div>

        {/* Courses */}
        <div
          className="relative "
          onMouseEnter={() => setOpen("courses")}
          onMouseLeave={() => setOpen(null)}
        >
          <button className="hover:text-black/60 h-5">Courses</button>
          {open === "courses" && <Dropdown items={menu.courses} title= 'Web Development' linktext = 'View All Courses' link = '/course' />}
        </div>

        {/* Careers */}
        <div
          className="relative"
          onMouseEnter={() => setOpen("careers")}
          onMouseLeave={() => setOpen(null)}
        >
          <button className="hover:text-black/60">Careers</button>
          {open === "careers" && <Dropdown items={menu.careers} title="Internship Program" linktext = 'Join Our Team' link = '/course' />}
        </div>

        {/* Blog */}
        <Link href="/blog" className="hover:text-black/60">
          Blog
        </Link>

        {/* Contact */}
        <Link href="/contact" className="hover:text-black/60">
          Contact Us
        </Link>
      </div>

      {/* Login/Signup */}
      <div className="flex gap-4 ">
        <Link href='/login' className="hover:underline bg-white text-black p-2 rounded-3xl px-8">
          Login
        </Link>
        <Link href="/register" className="hover:underline bg-white/30 p-2 rounded-3xl px-8">
          Signup
        </Link>
      </div>
    </div>
    </div>
  );
};

const Dropdown = ({ items, title, linktext, link }: {title?: string, linktext?: string, link?: string, items:string[] }) => (
  <div className="absolute left-[-100] top-full pt-3  text-black shadow-lg  z-50 w-[320px]">
    <div className="bg-white/80 rounded-xl py-3">
    <div className="w-8/10 mx-auto py-5 ">
        <h3 className="text-base font-medium border-b-2 pb-1 border-[#29B9E7] inline">{title}</h3>
        {items.map((item, i) => (
          <div key={i} className="py-1 font-medium mt-2 text-base text-black/80">
            <Link
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              key={i}
              className="block pt-1 hover:text-black/100 "
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
      <hr />
      <div className="py-2">
        <Link className="pl-7 text-black/80 hover:text-black/100 flex items-center gap-2  font-medium" href={link || ''}>{linktext} <TiArrowRightThick className="text-xl"/></Link>
      </div>
    </div>
  </div>
);

export default DesktopNav;
