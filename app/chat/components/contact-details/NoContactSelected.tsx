import { User2Icon } from "lucide-react"

export const NoContactSelected = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-68px)] text-center">
        <User2Icon className="h-16 w-16 text-gray-400 mb-4" />
      <p className="text-2xl text-gray-400">Select a contact</p>
    </div>
  )
}