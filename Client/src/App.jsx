import React from "react"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Component/app-sidebar.jsx";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <SidebarProvider className="dark">
          <AppSidebar />
          <SidebarTrigger className="mt-[5px] size-[50px] text-[white] hover:bg-gray-700 rounded-lg transition-all" />
        </SidebarProvider>
      </div>
    </>
  )
}

export default App
