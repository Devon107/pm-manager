import Kanban from "@/components/ui/dashboard/kanban"
import { Metadata } from "next"
export const metadata : Metadata = {
  title: 'Dashboard',
}
export default function Page() {
  return (
    <Kanban/>
  )
}