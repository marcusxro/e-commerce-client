'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from "react"

const categories = [
  {
    title: "Icons",
    items: ["Air Force 1", "LeBrons", "Air Max 90", "Air Max 95"]
  },
  {
    title: "Shoes",
    items: ["All Shoes", "Lifestyle Shoes", "Basketball Shoes", "Running Shoes"]
  },
  {
    title: "Clothing",
    items: ["All Clothing", "Fleece", "Hoodies & Pullovers", "Shirts & Tops"]
  },
  {
    title: "Kids'",
    items: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Shirts & Tops", "Kids' Pants & Tights"]
  }
]

export default function CategoryNav() {
  const [openCategory, setOpenCategory] = useState(null)

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  return (
    <nav className="w-full max-w-7xl mx-auto px-4 py-10">
      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category.title} className="space-y-2">
            <h2 className="text-xl font-semibold">{category.title}</h2>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {categories.map((category) => (
          <div key={category.title} className="border-b border-gray-200">
            <button
              onClick={() => toggleCategory(category.title)}
              className="w-full py-4 flex items-center justify-between text-left"
              aria-expanded={openCategory === category.title}
              aria-controls={`category-${category.title}`}
            >
              <span className="text-lg font-semibold">{category.title}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openCategory === category.title ? "rotate-180" : ""
                }`}
              />
            </button>
            {openCategory === category.title && (
              <ul
                id={`category-${category.title}`}
                className="pb-4 space-y-3"
                role="region"
                aria-labelledby={`category-${category.title}-button`}
              >
                {category.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-black transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

