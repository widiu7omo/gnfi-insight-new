import { PropsWithChildren } from 'react'

export default function Section({
  children,
  ...rest
}: PropsWithChildren<{ id: string }>) {
  return (
    <section
      id={rest.id}
      className="flex flex-col items-center w-full space-y-4"
    >
      {children}
    </section>
  )
}
