import Sidebar from "@/components/ui/dashboard/sidebar"
import "../../styles/globals.css"
export default function Layout({ children }: { children: React.ReactNode }) {
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sidebar />
      {children}
    </main>
  )
}