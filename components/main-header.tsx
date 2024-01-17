"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { TypographyH3, TypographyH4 } from "./typography"
import { Separator } from "@/components/ui/separator"

type NavItemProps = { link: string; label: string }

const NavItems: NavItemProps[] = [
  {
    link: "/meals",
    label: "Browse Meals",
  },
  {
    link: "/community",
    label: "Trove Community",
  },
]

function NavItem({ link, label }: NavItemProps) {
  return (
    <NavigationMenuItem>
      <Link href={link} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

export default function MainHeader() {
  return (
    <>
      <header className="flex flex-row justify-between items-center px-10 py-3">
        <div className="flex flex-row gap-10 items-center">
          <Link href={"/"}>
            <TypographyH3>😋 Tasty Trove</TypographyH3>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              {NavItems.map((i) => {
                return <NavItem key={i.label} label={i.label} link={i.link} />
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <ModeToggle />
      </header>
      <Separator />
    </>
  )
}
