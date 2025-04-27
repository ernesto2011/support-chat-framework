import { useLoaderData, useNavigation, useParams } from "react-router"
import { ContactInfo } from "./ContactInfo"
import { NoContactSelected } from "./NoContactSelected"
import { ContactLoadingSkeleton } from "./ContactLoadingSkeleton"
import type { Client } from "~/chat/interfaces/chat.interface"

interface Props{
  client?: Client
}
export const ContactDetails = ({client}:Props) => {
  const {clientId} = useParams()
  const {clients} = useLoaderData()
  const state = useNavigation()
  const isPending = state.state === 'loading'
  if(client) return <ContactInfo client={client}/>
  if(isPending) return <ContactLoadingSkeleton/>
  //const client = clients.find((client:Client) => client.id === clientId)
  if(!client) return <NoContactSelected/>
  return (
      <ContactInfo client={client}/>
  )
}
