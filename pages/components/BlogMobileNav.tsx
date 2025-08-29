'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons

const menu = {
  courses: ["Data Science", "UI/UX design", "Digital Marketing", "AI & ML"],
  careers: ["Job Openings", "Life at", "Alumni Success Stories", "AI & ML"],
}

const BlogMobileNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white ">
      {/* Top bar with logo and menu */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between">
        <Link href="/">
          <Image
            src="/images/yellowLogo.png"
            alt="Logo"
            width={90}
            height={40}
            className="object-contain"
          />
        </Link>

        <button onClick={() => setSidebarOpen(true)}>
          <Menu className="w-8 h-8 text-black/50" />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex ">
          {/* Overlay background */}
          <div
            className="bg-black/40 w-full"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="w-64 sm:w-80 bg-white text-black h-full py-6 px-5 shadow-xl relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-4"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Sidebar navigation */}
            <nav className="mt-12 flex flex-col gap-4 font-medium text-lg">
              <Link href="/" onClick={() => setSidebarOpen(false)}>Home</Link>
              {/* course  */}
              <details  className='shadow-sm p-2 rounded-md'>
                <summary className="cursor-pointer">Courses</summary>
                <ul className="ml-4 mt-2 text-sm text-gray-700">
                  {menu.courses.map((item, i) => (
                    <li key={i}>
                      <Link
                        className='hover:text-black py-2'
                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
              {/* career */}
              <details className='shadow-sm p-2 rounded-md'>
                <summary className="cursor-pointer">Careers</summary>
                <ul className="ml-4 mt-2 text-sm text-gray-700">
                  {menu.careers.map((item, i) => (
                    <li key={i}>
                      <Link
                        className='hover:text-black py-2'
                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
              {/* blog content logout */}
              <Link href="/blog" onClick={() => setSidebarOpen(false)}>Blog</Link>
              <Link href="/contact" onClick={() => setSidebarOpen(false)}>Contact Us</Link>
              <Link href="/login" onClick={() => setSidebarOpen(false)}>Logout</Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogMobileNavbar;
