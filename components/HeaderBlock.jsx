import React from 'react';

export const HeaderBlock = {
  fields: {
    logoText: { type: "text" },
    links: {
      type: "array",
      getItemSummary: (item) => item.label || "Link",
      defaultItemProps: { label: "Link", url: "#" },
      arrayFields: {
        label: { type: "text" },
        url: { type: "text" },
      },
    },
    buttonText: { type: "text" },
  },
  defaultProps: {
    logoText: "STORIVO",
    links: [
      { label: "Home", url: "/" },
      { label: "Shop", url: "/shop" },
      { label: "About", url: "/about" },
    ],
    buttonText: "Cart (0)",
  },
  render: ({ logoText, links, buttonText }) => (
    <header className="w-full bg-white border-b py-5 px-8 flex items-center justify-between font-sans relative z-50">
      <div className="text-3xl font-black tracking-tighter">{logoText}</div>
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link, i) => (
          <a key={i} href={link.url} className="text-sm font-bold text-gray-600 hover:text-black transition-colors uppercase tracking-wide">
            {link.label}
          </a>
        ))}
      </nav>
      <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg">
        {buttonText}
      </button>
    </header>
  ),
};
