"use client"

import Link from 'next/link';
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";


export default function Header
() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className=''>
            <NavigationMenuTrigger >Item One</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className=''>
            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
            <NavigationMenuContent className='flex gap-3 p-4 '>
              <NavigationMenuLink>
                <Link href='/about'>About</Link>
              </NavigationMenuLink>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/main/addTask'>Add Task</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

