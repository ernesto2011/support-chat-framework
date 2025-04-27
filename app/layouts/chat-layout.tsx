import { LogOut, X } from "lucide-react";
import { Form, Link, Outlet, redirect } from "react-router";
import { ChatList } from "~/chat/components/ChatList";
import { ContactDetails } from "~/chat/components/contact-details/ContactDetails";
import { Button } from "~/components/ui/button";
import { getClient, getClients } from "~/fake/fake-data";
import type { Route } from "./+types/chat-layout";
import { getSession } from "~/sessions.server";

export async function loader({request, params}:Route.LoaderArgs) {
  const session= await getSession(request.headers.get("Cookie"));
  const userName = session.get("name")
  const {clientId} = params
  if(!session.has("userId")){
    return redirect("/auth/login")

  }
  const clients = await getClients()
  if(clientId){
    const client= await getClient(clientId)
    return {client, clients, userName}
  }

  return {clients, userName}
}

export default function ChatLayout({loaderData}: Route.ComponentProps) {
    const{ client, clients, userName} = loaderData
    return (
      <div className="flex h-screen bg-background">
        {/* Sidebar */}
        <div className="w-64 border-r bg-muted/10">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary" />
              <Link to='/chat' className="font-semibold">{userName || 'NexTalk'}</Link>
            </div>
          </div>
            <ChatList clients={clients} />
            <Form method="post" action="/auth/logout" className="p-4 border-t">
                <Button variant='ghost' className="w-full hover:bg-gray-200">
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Log out</span>
                </Button>
            </Form>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 flex">
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="h-14 border-b px-4 flex items-center justify-between">
              <div></div> {/* Empty div to maintain spacing */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  Save conversation
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </header>
            <Outlet/>
          </div>
  
          {/* Right Panel - Contact Details */}
          <div className="w-50 lg:w-80 border-l">
            <div className="h-14 border-b px-4 flex items-center">
              <h2 className="font-medium">Contact details</h2>
            </div>
           <ContactDetails client={client}/>
          </div>
        </div>
      </div>
    )
  }