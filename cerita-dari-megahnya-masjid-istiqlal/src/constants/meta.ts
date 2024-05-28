import { isProd } from "./env";
import meta from '@public/article/generated-meta.json';
export const baseUrl = isProd ? `https://www.goodnewsfromindonesia.id/special-insights/${meta.slug}` : "http://localhost:3000"