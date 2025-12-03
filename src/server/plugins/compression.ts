import { useCompression } from 'h3-compression'

export default function (nitroApp: any) {
  nitroApp.hooks.hook('render:response', async (response: any, { event }: any) => {
    await useCompression(event, response)
  })
}
