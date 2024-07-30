import React from 'react'
import {Link, Navigate, NavLink, useNavigate} from "react-router-dom"
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Link2Icon, LinkIcon, LogOut } from 'lucide-react'

const Header = () =>{
    const user = false
    // const[user, fetchUser] = UrlState()
    const navigate = useNavigate();
    return <nav className='py-4 flex justify-between items center'>
      <Link to="/">
      <img src="/logo.png" className='h-36 w-40 ' alt="" />
      </Link>

      <div>
        {!user ? (
        <Button onClick={() => navigate("/auth")}>Login</Button>
          )  :(
        <DropdownMenu>
  <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>MO</AvatarFallback>
</Avatar>

  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel></DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <LinkIcon className='h-4 w-4'/>
        My Links</DropdownMenuItem>
    <DropdownMenuItem  className='text-red-400'>
        <LogOut className='h-4'/>    
        <span>
            LogOut
        </span>   
         
        </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    )    
    
    }
        </div>
    </nav>

}


export default Header