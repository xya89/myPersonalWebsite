'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { CollapseIcon, CrossIcon } from 'public/icon'

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
  // '/cook': {
  //   name: 'cooking'
  // }

}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuItemClick = () => {
    setIsOpen(false);
  }

  return (
    <aside className="fixed top-0 mb-16 tracking-tight bg-white dark:bg-black z-50 w-4xl bg-gray-700">
      <div className="lg:sticky lg:top-20">
        <nav className="relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          <div className="flex flex-row justify-between items-center px-4 py-2 lg:hidden">
            <div className="text-lg font-bold">{currentPage}</div>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <CollapseIcon />
              ) : (
                <CrossIcon />
              )}
            </button>
          </div>
          <div className={`lg:flex lg:flex-row space-x-0 pr-10 ${isOpen ? 'block' : 'hidden'} lg:block`}>
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                onClick={handleMenuItemClick}
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}
