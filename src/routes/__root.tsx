import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from '@tanstack/react-router'
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import appCss from '../styles.css?url'
import { DefaultCatchBoundary } from '@/components/error/default-catch-boundary'
import { ThemeProvider } from '@/context/theme-provider'
import { cn } from '@/lib/utils'
import { getThemeServerFn } from '@/server/theme'
import { Toaster } from '@/components/ui/sonner'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
      gcTime: 10 * 60 * 1000, // Cache data for 10 minutes
      refetchOnWindowFocus: false, // Don't refetch on window focus
      retry: 1, // Retry failed requests once
    },
  },
})

export const Route = createRootRouteWithContext<{
  metadata: {
    title: string
  };
  baseUrl?: string;
}>()({
  beforeLoad: async ({ context }) => {
    context.metadata.title = 'Home | ' + context.metadata.title;
  },
  loader: () => getThemeServerFn(),
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "GNFI Insight",
      },
      {
        name: "description",
        content: "Bangun Wawasan Lewat Data dan Cerita. GNFI Insight berkomitmen menghadirkan konten mendalam berbasis data dan visual interaktif.",
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg" },
    ],
  }),
  errorComponent: (props) => {
    const theme = Route.useLoaderData();

    return (
      <RootDocument>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme={theme}>
            <div className="flex min-h-screen flex-col items-center justify-center bg-background">
              <DefaultCatchBoundary {...props} />
            </div>
          </ThemeProvider>
        </QueryClientProvider>
      </RootDocument>
    );
  },
  component: RootComponent,
});
function RootComponent() {
  const theme = Route.useLoaderData();
  return <RootDocument>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme={theme}>
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  </RootDocument>
}
function RootDocument({ children }: { children: React.ReactNode }) {
  const theme = Route.useLoaderData();
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased scroll-smooth", theme)}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Toaster />
        {/* <TanStackDevtools
          config={{

            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        /> */}
        <Scripts />
      </body>
    </html>
  )
}
