import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { NotFound } from './components/error/not-found'
import { Pending } from './components/ui/pending'
import ReactGA from 'react-ga4';
//GA
if (import.meta.env.PROD) { // Only initialize in production
  ReactGA.initialize('G-1CY08P02JH');
}
// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {
      metadata: { title: "GNFI Insight" },
      baseUrl: process.env.BASE_URL
    },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    defaultNotFoundComponent: () => <NotFound />,
    defaultPendingComponent: () => <Pending />,
  })
  router.history?.subscribe((location) => {
    if (import.meta.env.PROD) {
      ReactGA.send({ hitType: 'pageview', page: router.history.location.pathname + router.history.location.search });
    }
  })
  return router
}
