import {
  ArrowUpRight,
  CheckCheckIcon,
  Link as LinkIcon,
  MoreHorizontal,
  Trash2,
} from "lucide-react"
import { useState } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "@tanstack/react-router"

const INITIAL_ITEMS_LIMIT = 5

export function NavWip({
  items,
}: {
  items: {
    name: string
    url: string
    emoji: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS_LIMIT)

  const visibleItems = items.slice(0, visibleCount)
  const hasMore = visibleCount < items.length
  const location = useLocation();
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + INITIAL_ITEMS_LIMIT, items.length))
  }

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Work In Progress</SidebarGroupLabel>
      <SidebarMenu>
        {visibleItems.map((item) => {
          const slug = item.url.replaceAll('/builder/', '');
          const activeSlug = location.pathname.replaceAll("/builder/", '')
          return (
          <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={slug === activeSlug}>
              <Link to={'/builder/$slug'} params={{ slug: item.url.replaceAll('/builder/', '') }}>
                <span>{item.emoji}</span>
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <CheckCheckIcon className="text-muted-foreground" />
                  <span>Mark Finished</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to={'/$slug'} target="_blank" params={{ slug: item.url.replaceAll('/builder/', '') }}>
                    <LinkIcon className="text-muted-foreground" />
                    <span>Preview Link</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={'/builder/$slug'} target="_blank" params={{ slug: item.url.replaceAll('/builder/', '') }}>
                    <ArrowUpRight className="text-muted-foreground" />
                    <span>Open Builder</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
          )
        })}
        {hasMore && (
          <SidebarMenuItem>
            <SidebarMenuButton
              className="text-sidebar-foreground/70"
              onClick={handleLoadMore}
            >
              <MoreHorizontal />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )}
      </SidebarMenu>
    </SidebarGroup>
  )
}
