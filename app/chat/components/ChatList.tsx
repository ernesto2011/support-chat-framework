import { NavLink, useParams } from "react-router"
import { Button } from "~/components/ui/button"
import { ScrollArea } from "~/components/ui/scroll-area"
import type { Client } from "../interfaces/chat.interface"

interface Props{
  clients: Client[]
}

export const ChatList = ({clients}:Props) => {
  const {clientId }= useParams()

  return (
    <ScrollArea className="h-[calc(100vh-126px)]">
    <div className="space-y-4 p-4">
      <div className="space-y-1">
        <h3 className="px-2 text-sm font-semibold">Contacts</h3>
        <div className="space-y-1">
        {
          clients.map(client =>(
            <NavLink key={client.id} to={`/chat/${client.id}`} className= {({isActive, isPending})=>
              isActive ? "w-full justify-start flex items-center gap-2 ml-4 bg-primary/40 text-primary transition-colors duration-200 rounded-2xl" 
              : isPending 
              ?"w-full justify-start flex items-center gap-2 ml-4 hover:bg-primary/10 transition-colors duration-200 rounded-2xl"
              : "w-full justify-start flex items-center gap-2 ml-4 text-muted-foreground hover:bg-primary/10 transition-colors duration-200 rounded-2xl"}>
              <div className={`h-6 w-6 rounded-full bg-${client.color}-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs`}>	
                {client.name.charAt(0).toUpperCase()
                +client.name.charAt(client.name.indexOf(' ')+1).toUpperCase()}
              </div>
              <span className={`${clientId === client.id ? 'text-white' :''}`}>{client.name}</span>
            </NavLink>
          ))
        }

         
        </div>
      </div>
      <div className="pt-4 border-t mt-4">
        <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
        <Button variant="ghost" className="w-full justify-start">
          <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
            TM
          </div>
          Thomas Miller
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <div className="h-6 w-6 rounded-full bg-pink-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
            SB
          </div>
          Sarah Brown
        </Button>
      </div>
    </div>
  </ScrollArea>
  )
}
