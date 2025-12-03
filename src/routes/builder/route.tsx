import { $getAllPosts } from "@/server/post";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { AppSidebar } from "@/components/app-sidebar";
import { NavActions } from "@/components/nav-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { createServerFn } from "@tanstack/react-start";

export const Route = createFileRoute("/builder")({
  component: RouteComponent,
  async beforeLoad() {
    if (import.meta.env.PROD) {
      throw redirect({ to: "/" });
    }
  },
  loader: async () => {
    const unfinished = await $getAllPosts({ data: { offset: 0, limit: 100, finished: false } });
    const finished = await $getAllPosts({ data: { offset: 0, limit: 100 } });
    return { unfinishedPosts: unfinished.posts, unfinishedMeta: unfinished.meta, finishedPosts: finished.posts, finishedMeta: finished.meta };
  },
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Builder | GNFI Insight
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto px-3">
            <NavActions />
          </div>
        </header>
        <div className="flex flex-1 flex-col px-2 ">
          <Toaster position="top-right" />
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
