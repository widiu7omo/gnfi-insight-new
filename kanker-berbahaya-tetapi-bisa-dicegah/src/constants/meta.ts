import { isProd } from "./env";
import meta from '@public/article/generated-meta.json';
import metaConfig from '@root/meta-config.json';
const baseUrlWithSlug = isProd ? `${metaConfig.baseUrl}/${meta.slug}` : "http://localhost:3000/"
export const baseUrl = baseUrlWithSlug.replaceAll(!metaConfig.withSlug ? `/${meta.slug}` : '', '')