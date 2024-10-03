import { Metadata } from 'next'
import { ClientLayout } from './client.layout'

export const metadata: Metadata = {
  title: 'LinkUp ',
  description: 'LinkUp ',
}

export default function RootLayout(props) {
  return (
    <>
      <ClientLayout {...props} />
    </>
  )
}
