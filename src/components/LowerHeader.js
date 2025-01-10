"use client"

import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

const menuData = {
    New: {
      Featured: {
        title: 'Featured',
        items: [
          'New Arrivals',
          'Best Sellers',
          'Latest Drops',
          'Workout Must-Haves',
          'AJ3 "Black Cat" & More',
          'All Sale: New Styles Added'
        ]
      }, Trending: {
        title: 'Trending',
        items: [
          'New Arrivals',
          'Best Sellers',
          'Latest Drops',
          'Workout Must-Haves',
          'AJ3 "Black Cat" & More',
          'All Sale: New Styles Added'
        ]
      }, Explore: {
        title: 'Explore',
        items: [
          'New Arrivals',
          'Best Sellers',
          'Latest Drops',
          'Workout Must-Haves',
          'AJ3 "Black Cat" & More',
          'All Sale: New Styles Added'
        ]
      },
    },
    Men: {
      Shoes: {
        title: 'Shoes',
        items: [
          'All Shoes',
          'Basketball',
          'Lifestyle',
          'Jordan',
          'Retro Running',
          'Running',
          'Training & Gym',
          'Shoes $100 & Under'
        ]
      },
      Clothing: {
        title: 'Clothing',
        items: [
          'All Clothing',
          'Hoodies & Sweatshirts',
          'Jordan',
          'Outerwear',
          'Pants',
          'Shorts',
          'Tops & T-Shirts'
        ]
      },
      Accessories: {
        title: 'Accessories',
        items: [
          'Bags & Backpacks',
          'Hats & Headwear',
          'Socks'
        ]
      },
      ShopBySport: {
        title: 'Shop by Sport',
        items: [
          'Baseball',
          'Basketball',
          'Fan Gear',
          'Football',
          'Golf',
          'Running',
          'Soccer',
          'Tennis',
          'Training & Gym'
        ]
      }
    },
    Women: {
      Shoes: {
        title: 'Shoes',
        items: [
          'All Shoes',
          'Lifestyle',
          'Running',
          'Training & Gym',
          'Sandals & Slides',
          'Shoes $100 & Under'
        ]
      },
      Clothing: {
        title: 'Clothing',
        items: [
          'All Clothing',
          'Tops & T-Shirts',
          'Sports Bras',
          'Pants & Leggings',
          'Shorts',
          'Hoodies & Sweatshirts',
          'Jackets & Vests'
        ]
      },
      Accessories: {
        title: 'Accessories',
        items: [
          'Bags & Backpacks',
          'Hats & Headwear',
          'Socks'
        ]
      },
      ShopBySport: {
        title: 'Shop by Sport',
        items: [
          'Yoga',
          'Running',
          'Training & Gym',
          'Tennis',
          'Dance',
          'Basketball'
        ]
      }
    },
    Kids: {
      Featured: {
        title: 'Featured',
        items: [
          'New Releases',
          'Best Sellers',
          'Sale',
          'Back to School'
        ]
      },
      Boys: {
        title: 'Boys',
        items: [
          'Shoes',
          'Clothing',
          'Accessories',
          'All Boys'
        ]
      },
      Girls: {
        title: 'Girls',
        items: [
          'Shoes',
          'Clothing',
          'Accessories',
          'All Girls'
        ]
      },
      Baby: {
        title: 'Baby & Toddler',
        items: [
          'Baby Girl',
          'Baby Boy',
          'All Baby & Toddler'
        ]
      },
      ShopByAge: {
        title: 'Shop By Age',
        items: [
          'Big Kids (7-15 years)',
          'Little Kids (4-7 years)',
          'Toddler (1-4 years)',
          'Babies (0-1 years)'
        ]
      }
    },
    Sale: {
      Featured: {
        title: 'Featured',
        items: [
          'All Sale',
          'Best Sellers on Sale',
          'Last Chance Sale'
        ]
      },
      Men: {
        title: 'Men',
        items: [
          'Shoes',
          'Clothing',
          'Accessories'
        ]
      },
      Women: {
        title: 'Women',
        items: [
          'Shoes',
          'Clothing',
          'Accessories'
        ]
      },
      Kids: {
        title: 'Kids',
        items: [
          'Boys',
          'Girls',
          'Baby & Toddler'
        ]
      }
    }
  }
  
  const navItems = ['New', 'Men', 'Women', 'Kids', 'Sale']


export default function LowerHeader() {

    const [activeMenu, setActiveMenu] = useState(null)

    return (
    <header className="relative">
      <div className="flex gap-3 justify-between items-center p-3 bg-[#333333] text-white w-full">
        <div className="w-1/3 text-center">Logos</div>

        <nav className="flex gap-3 justify-center w-1/3">
          {navItems.map((item) => (
            <div
              key={item}
              className="cursor-pointer"
              onMouseEnter={() => setActiveMenu(item)}
            //   onMouseLeave={() => setActiveMenu(null)}
            >
              {item}
            </div>
          ))}
        </nav>

        <div className="flex gap-3 items-center justify-center text-center w-1/3">
          <div className="relative max-w-[200px] w-full">
            <div className="absolute left-[10px] top-[8px] text-[#000]">
              <IoSearchSharp />
            </div>
            <input
              className="py-1 pl-7 text-[#000] placeholder:text-black w-full px-3 outline-none border-none bg-[#eeeeee] rounded-xl"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="text-3xl cursor-pointer hover:bg-[#c7c7c7] rounded-full p-1">
            <CiHeart />
          </div>
          <div className="text-3xl cursor-pointer hover:bg-[#c7c7c7] rounded-full p-1">
            <IoBagOutline />
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {activeMenu && menuData[activeMenu] && (
        <div
          className="absolute left-0 w-full items-center  bg-white py-8 shadow-lg z-50"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8 px-8">
            {Object.entries(menuData[activeMenu]).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-medium mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-black text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
    )
}
