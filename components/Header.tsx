// import React, { useState } from 'react'
// // import {Link as RouterLink, Navigate, NavLink} from "react-router-dom"
// import { Button } from './ui/button'
// import Link from 'next/link';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
// import { Link2Icon, LinkIcon, LogOut } from 'lucide-react'
// import { useRouter } from 'next/navigation';

// const Header = () =>{
//   function fetchUserInBrowser(){
//     const user = localStorage.getItem("userObj");
//     if(!user){
//       return false
//     } else{
//       return true
//     }
   
//   }
//     // const user = false
//     const[user, SetUser] = useState(fetchUserInBrowser())
//     const router = useRouter();
//     return <nav className='py-4 flex justify-between items center'>
//       <Link href="/">
//       <img src="/logo.png" className='h-36 w-40 ' alt="" />
//       </Link>

//       <div>
//         {!user ? (
//         <Button  className='mt-8' onClick={() => router.push("/auth")}>Login</Button>
//           )  :(
//         <DropdownMenu>
//   <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
//   <Avatar>
//   <AvatarImage src="https://github.com/shadcn.png" />
//   <AvatarFallback>MO</AvatarFallback>
// </Avatar>

//   </DropdownMenuTrigger>
//   <DropdownMenuContent>
//     <DropdownMenuLabel></DropdownMenuLabel>
//     <DropdownMenuSeparator />
//     <DropdownMenuItem>
//       {/* <Link href="/dashboard">
//       <LinkIcon className='h-4 w-4'/>
//         Go to Dashboard
//       </Link> */}
//         </DropdownMenuItem>
//         <DropdownMenuSeparator />
//     <DropdownMenuItem>
//         <LinkIcon className='h-4 w-4'/>
//         My Links</DropdownMenuItem>
//     <DropdownMenuItem  className='text-red-400'>
//         <LogOut className='h-4'  />    
//         <span onClick={() => router.push('/')}>
//             LogOut
//         </span>   
         
//         </DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>

//     )    
    
//     }
//         </div>
//     </nav>

// }


// export default Header
'use client'
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Link2Icon, LinkIcon, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [user, setUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserInBrowser = () => {
      const user = localStorage.getItem('userObj');
      if (user) {
        setUser(true);
      }
    };
    fetchUserInBrowser();
  }, []);

  return (
    <nav className="py-4 flex justify-between items-center">
      <Link href="/">
        <img src="/logo.png" className="h-36 w-40" alt="Logo" />
      </Link>

      <div>
        {!user ? (
          <Button className="mt-8" onClick={() => router.push('/auth')}>
            Login
          </Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>User Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/dashboard">
                  <LinkIcon className="h-4 w-4" />
                  Go to Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LinkIcon className="h-4 w-4" />
                My Links
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-400" onClick={() => {
                localStorage.removeItem('userObj');
                setUser(false);
                router.push('/');
              }}>
            
                <LogOut className="h-4" />
                Log Out
             
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;
