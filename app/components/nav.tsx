'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Icon_CollapseIcon, Icon_CrossIcon } from 'public/icon'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/photos': {
    name: 'photo',
  },
  '/video': {
    name: 'video'
  },
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),);

    observer.observe(ref.current);
    return () => observer.disconnect();
  })

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuItemClick = () => {
    setIsOpen(false);
  }

  return (
    <header ref={ref}>
      <nav
        id='nav'
        className='fixed top-0 z-50 w-full fade'
      >
        <div
          className={`lg:fixed lg:top-0 w-full backdrop-blur duration-200 border-b 
        ${isIntersecting
              ? "bg-zinc-900/0 border-transparent"
              : "bg-zinc-900/500 border-zinc-800"}`}>

          <div className="flex justify-between items-center px-4 py-2 lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Icon_CollapseIcon />
              ) : (
                <Icon_CrossIcon />
              )}
            </button>
          </div>


          <div
            className={`lg:ml-96 lg:flex lg:flex-row space-x-0 pr-10 ${isOpen ? 'block' : 'hidden'} lg:block container flex flex-row items-center space-x-0 pr-10`}>
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-lg transition-all hover:text-neutral-800 dark:hover:text-neutral-200 duration-200 flex align-middle relative py-1 px-2 m-1"
                onClick={handleMenuItemClick}
              >
                {name}
              </Link>
            ))}
          </div>

        </div>
      </nav >
    </header>
  )
}
