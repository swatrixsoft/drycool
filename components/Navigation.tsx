'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { siteContent } from '@/data/site-content';

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
  subItems?: MenuItem[];
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openChildSubmenu, setOpenChildSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = siteContent.navigation.main as MenuItem[];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <Image src="/images/logo-old.png" alt="Drycool logo" fill className="object-contain p-1" />
            </div>
            <span className="font-bold text-xl hidden sm:inline text-gray-900">
              Drycool Systems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-0 items-center">
            {navItems.map((item, index) => {
              const hasSubmenu = item.subItems && item.subItems.length > 0;
              const itemHref = item.href || '#';
              const isLastItem = index === navItems.length - 1;
              return (
                <div key={item.label} className={`relative group ${isLastItem ? '' : ''}`}>
                  {itemHref === '#' ? (
                    <div className="text-gray-700 hover:text-blue-600 text-sm transition-colors duration-300 px-3 py-2 flex items-center rounded hover:bg-blue-50 cursor-default whitespace-nowrap">
                      {item.label}
                      {hasSubmenu && <ChevronDown size={14} className="ml-0.5" />}
                    </div>
                  ) : (
                    <Link
                      href={itemHref}
                      className="text-gray-700 hover:text-blue-600 text-sm transition-colors duration-300 px-3 py-2 flex items-center rounded hover:bg-blue-50 whitespace-nowrap"
                    >
                      {item.label}
                      {hasSubmenu && <ChevronDown size={14} className="ml-0.5" />}
                    </Link>
                  )}

                  {/* Dropdown Menu - Special 4-column layout for Products */}
                  {hasSubmenu && (
                    <div className={`absolute mt-0 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-blue-600 z-50 ${
                      item.label === 'Products'
                        ? 'left-[-20vw] w-[min(74vw,68rem)]'
                        : item.label === 'DOWNLOAD'
                          ? 'right-0 w-[min(70vw,46rem)]'
                          : isLastItem
                            ? 'right-0 min-w-max'
                            : 'left-0 min-w-max'
                    }`}>
                      {item.label === 'Products' ? (
                        // 4-column mega menu for Products
                        <div className="grid grid-cols-1 gap-5 px-5 py-4 sm:grid-cols-2 xl:grid-cols-4">
                          {item.subItems!.map((column) => (
                            <div key={column.label}>
                              <h3 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider border-b-2 border-blue-600 pb-2">{column.label}</h3>
                              {column.children ? (
                                <ul className="space-y-1">
                                  {column.children.map((item) => (
                                    <li key={item.label}>
                                      {item.children ? (
                                        <div>
                                          <p className="font-semibold text-blue-600 text-xs mb-1">{item.label}</p>
                                          <ul className="space-y-0.5 pl-3">
                                            {item.children.map((subItem) => (
                                              <li key={subItem.label}>
                                                <Link
                                                  href={subItem.href || '/'}
                                                  className="text-xs text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200"
                                                >
                                                  {subItem.label}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ) : (
                                        <Link
                                          href={item.href || '/'}
                                          className="text-xs text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 block"
                                        >
                                          {item.label}
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ) : item.label === 'DOWNLOAD' ? (
                        // Download menu with better layout
                        <div className="grid grid-cols-1 gap-1 px-2 py-2 sm:grid-cols-2 sm:gap-2">
                          {[item.subItems!.slice(0, 6), item.subItems!.slice(6, 12)].map((column, colIdx) => (
                            <div key={colIdx} className="space-y-1">
                              {column.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href || '/'}
                                  className="block rounded px-2 py-2 text-xs font-medium text-gray-700 transition-all duration-200 hover:bg-blue-600 hover:text-white"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        // Standard dropdown for other menus
                        <div className="space-y-0 px-0 py-1">
                          {item.subItems!.map((subItem) => {
                            if (subItem.children) {
                              return (
                                <div key={subItem.label} className="relative group/nested">
                                  <div className="flex items-center justify-between cursor-default text-gray-900 font-semibold text-xs px-3 py-2 hover:text-blue-600 hover:bg-blue-50 transition-colors border-l-4 border-transparent hover:border-blue-600">
                                    <span>{subItem.label}</span>
                                  </div>
                                  {/* Sub-submenu */}
                                  <div className="absolute left-full top-0 ml-2 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 min-w-max border-l-4 border-blue-600">
                                    {subItem.children.map((child) => (
                                      <Link
                                        key={child.label}
                                        href={child.href || '/'}
                                        className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors whitespace-nowrap first:rounded-t-lg last:rounded-b-lg hover:pl-4"
                                      >
                                        {child.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              );
                            }
                            return (
                              <Link
                                key={subItem.label}
                                href={subItem.href || '/'}
                                className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-all duration-200 border-l-4 border-transparent hover:border-blue-600 hover:pl-4"
                              >
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn-primary text-sm py-2 px-6"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4 max-h-96 overflow-y-auto">
            {navItems.map((item) => {
              const hasSubmenu = item.subItems && item.subItems.length > 0;
              const submenuKey = `submenu-${item.label}`;
              const itemHref = item.href || '/';
              return (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={itemHref}
                      className="block flex-1 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300"
                      onClick={() => {
                        if (!hasSubmenu) setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                    {hasSubmenu && (
                      <button
                        onClick={() => {
                          const isSame = openSubmenu === submenuKey;
                          setOpenSubmenu(isSame ? null : submenuKey);
                          setOpenChildSubmenu(null);
                        }}
                        className="px-4 py-2"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            openSubmenu === submenuKey ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {hasSubmenu && openSubmenu === submenuKey && (
                    <div className="pl-4 space-y-1">
                      {item.subItems!.map((subItem) => {
                        if (subItem.children) {
                          const childSubmenuKey = `submenu-${subItem.label}`;
                          return (
                            <div key={subItem.label}>
                              <div className="flex items-center justify-between">
                                <span className="block flex-1 px-4 py-2 text-sm font-semibold text-gray-700">
                                  {subItem.label}
                                </span>
                                <button
                                  onClick={() =>
                                    setOpenChildSubmenu(
                                      openChildSubmenu === childSubmenuKey ? null : childSubmenuKey
                                    )
                                  }
                                  className="px-4 py-2"
                                >
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform ${
                                      openChildSubmenu === childSubmenuKey ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                              </div>
                              {openChildSubmenu === childSubmenuKey && (
                                <div className="pl-4 space-y-1">
                                  {subItem.children.map((child) => (
                                    <Link
                                      key={child.label}
                                      href={child.href || '/'}
                                      className="block px-4 py-2 text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }
                        return (
                          <Link
                            key={subItem.label}
                            href={subItem.href || '/'}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              className="block btn-primary text-center py-2 px-4 w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
