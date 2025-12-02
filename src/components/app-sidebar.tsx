"use client"

import * as React from "react"
import {
  Command,
  Home,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavWip } from "./nav-wip"
import { NavFinished } from "./nav-finished"
import { useLoaderData } from "@tanstack/react-router"

// This is sample data.
const data = {
  teams: [
    {
      name: "GNFI Insight",
      logo: Command,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
    },

  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  wip: [
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
  ],
  finished: [
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
  ],
}
type PostType = {
  name: string;
  url: string;
  emoji: string;
}
function generateItems(posts: {
  slug: string;
  title: string;
  description: string;
  image: string;
  finished?: boolean;
}[]): PostType[] {
  return posts.map(post => ({
    name: post.title,
    url: '/builder/' + post.slug,
    emoji: post.finished ? '✅' : '🔄'
  }))
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { finishedPosts, unfinishedPosts } = useLoaderData({ from: '/builder' })
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavWip items={generateItems(unfinishedPosts)} />
        <NavFinished items={generateItems(finishedPosts)} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
