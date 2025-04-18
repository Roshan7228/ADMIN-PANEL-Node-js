"use client"

import {
    BellIcon,
    CreditCardIcon,
    LogOutIcon,
    MoreVerticalIcon,
    UserCircleIcon,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"

export function NavUser() {
    const { isMobile } = useSidebar()

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-transparent data-[state=open]:text-primary hover:bg-gray-100/10 rounded-xl transition-all border-none"
                        >
                            <Avatar className="h-10 w-10 rounded-xl grayscale">
                                <AvatarImage />
                                <AvatarFallback className="rounded-xl font-bold">CN</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left leading-tight ml-2">
                                <span className="truncate font-semibold text-base">Roshan Kumar</span>
                                <span className="truncate text-xs text-muted-foreground">Frontend Developer</span>
                            </div>
                            <MoreVerticalIcon className="ml-auto size-5 opacity-70" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-2xl bg-gray-800/60 backdrop-blur-md shadow-xl border-none"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-3 font-semibold text-base text-white">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10 rounded-xl">
                                    <AvatarImage />
                                    <AvatarFallback className="rounded-xl font-bold bg-transparent border border-1">CN</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left leading-tight">
                                    <span className="truncate font-semibold text-base text-white">Roshan Kumar</span>
                                    <span className="truncate text-xs text-muted-foreground">Frontend Developer</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="gap-2 text-[17px]  hover:bg-gray-100/20 rounded-lg transition py-2 mb-2">
                                <UserCircleIcon className="size-5" />
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 text-[17px]  hover:bg-gray-100/20 rounded-lg transition py-2 mb-2">
                                <CreditCardIcon className="size-5" />
                                Signin
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 text-[17px]  hover:bg-gray-100/20 rounded-lg transition py-2 mb-2">
                                <BellIcon className="size-5" />
                                Signup
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 text-[17px]  hover:bg-gray-100/20 rounded-lg transition py-2 mb-2">
                            <LogOutIcon className="size-5" />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
