
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import React, { useState } from 'react'
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"
// import { useNavigate } from 'react-router-dom'
// import background from '../../public/background.png'
  
// const LandingPage = () => {
//     const[longUrl, setLongUrl]= useState();
//     const navigate = useNavigate();
//     const handleShorten = (e) => {
//         e.preventDefault();
//         if(longUrl) navigate(`/auth?createNew=${longUrl}`);
//     };
//   return (
//     <div className='flex flex-col items-center bg-center'>
//         <div>
//        </div>
//         <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-blue-300 text-center font-extrabold'>Create Your Loooooong Link</h2>
//         <form  onSubmit={handleShorten} className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
//             <Input 
//             type="url"
//             placeholder="Enter your url"
//             onChange={(e)=>setLongUrl(e.target.value)}
//             className="h-full flex-1 p-4 px-4"/>
//             <Button className="h-full bg-blue-400" type="submit"  variant="destructive">Shorten </Button>
//         </form >
//         <img src="/cutter.png" alt='banner' className='w-full my-11 md:px-11' />
//         <Accordion type="multiple"  className='w-full md:px-11'>
//   <AccordionItem value="item-1">
//     <AccordionTrigger>What is LinkBite?</AccordionTrigger>
//     <AccordionContent>
//     LinkBite is a URL shortening service that allows you to create shorter, more manageable links from long URLs.    </AccordionContent>
//   </AccordionItem>
//   <AccordionItem value="item-2">
//     <AccordionTrigger>Is LinkBite free to use?</AccordionTrigger>
//     <AccordionContent>
//     Yes, LinkBite is free to use. There are no charges for creating and sharing shortened URLs.    </AccordionContent>
//   </AccordionItem>
//   <AccordionItem value="item-3">
//     <AccordionTrigger>How do I create a shortened URL?</AccordionTrigger>
//     <AccordionContent>
// To create a shortened URL, enter your long URL into the input field on the LinkBite homepage and click the "Shorten" button. A new, shorter link will be generated for you to use.

//     </AccordionContent>
//   </AccordionItem>
// </Accordion>


//     </div>
//   )
// }

// export default LandingPage





// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import React, { useState } from 'react';
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion";
// import { useNavigate } from 'react-router-dom';
// import background from '../../public/background.png';

// const LandingPage = () => {
//     const [longUrl, setLongUrl] = useState('');
//     const navigate = useNavigate();

//     const handleShorten = (e) => {
//         e.preventDefault();
//         if (longUrl) navigate(`/auth?createNew=${longUrl}`);
//     };

//     return (
//         <div className='flex flex-col items-center bg-center' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
//             <div></div>
//             <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-blue-300 text-center font-extrabold'>
//                 Create Your Loooooong Link
//             </h2>
//             <form onSubmit={handleShorten} className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
//                 <Input
//                     type="url"
//                     placeholder="Enter your url"
//                     onChange={(e) => setLongUrl(e.target.value)}
//                     className="h-full flex-1 p-4 px-4"
//                 />
//                 <Button className="h-full bg-blue-400" type="submit" variant="destructive">
//                     Shorten
//                 </Button>
//             </form>
//             <img src="/cutter.png" alt='banner' className='w-full my-11 md:px-11' />
//             <Accordion type="multiple" className='w-full md:px-11'>
//                 <AccordionItem value="item-1">
//                     <AccordionTrigger>What is LinkBite?</AccordionTrigger>
//                     <AccordionContent>
//                         LinkBite is a URL shortening service that allows you to create shorter, more manageable links from long URLs.
//                     </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-2">
//                     <AccordionTrigger>Is LinkBite free to use?</AccordionTrigger>
//                     <AccordionContent>
//                         Yes, LinkBite is free to use. There are no charges for creating and sharing shortened URLs.
//                     </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-3">
//                     <AccordionTrigger>How do I create a shortened URL?</AccordionTrigger>
//                     <AccordionContent>
//                         To create a shortened URL, enter your long URL into the input field on the LinkBite homepage and click the "Shorten" button. A new, shorter link will be generated for you to use.
//                     </AccordionContent>
//                 </AccordionItem>
//             </Accordion>
//         </div>
//     );
// }

// export default LandingPage;

// 'use client';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import React, { useState } from 'react';
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion";
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import background from '../../public/background.png';
// // import { Router } from 'react-router-dom';

// const LandingPage = () => {
//     const [longUrl, setLongUrl] = useState('');
//     const router = useRouter();

//     const handleShorten = (e) => {
//         e.preventDefault();
//         if (longUrl) router.push(`/auth?createNew=${longUrl}`);
//     };

//     return (
//         <div className='flex flex-col items-center bg-center' style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
//             <div></div>
//             <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-blue-300 text-center font-extrabold'>
//                 Create Your Loooooong Link
//             </h2>
//             <form onSubmit={handleShorten} className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
//                 <Input
//                     type="url"
//                     placeholder="Enter your url"
//                     onChange={(e) => setLongUrl(e.target.value)}
//                     className="h-full flex-1 p-4 px-4"
//                 />
//                 <Button className="h-full bg-blue-400" type="submit" variant="destructive">
//                     Shorten
//                 </Button>
//             </form>
//             <Image src="/cutter.png" alt='banner' width={500} height={300} className='w-full my-11 md:px-11' />
//             <Accordion type="multiple" className='w-full md:px-11'>
//                 <AccordionItem value="item-1">
//                     <AccordionTrigger>What is LinkBite?</AccordionTrigger>
//                     <AccordionContent>
//                         LinkBite is a URL shortening service that allows you to create shorter, more manageable links from long URLs.
//                     </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-2">
//                     <AccordionTrigger>Is LinkBite free to use?</AccordionTrigger>
//                     <AccordionContent>
//                         Yes, LinkBite is free to use. There are no charges for creating and sharing shortened URLs.
//                     </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-3">
//                     <AccordionTrigger>How do I create a shortened URL?</AccordionTrigger>
//                     <AccordionContent>
//                         To create a shortened URL, enter your long URL into the input field on the LinkBite homepage and click the "Shorten" button. A new, shorter link will be generated for you to use.
//                     </AccordionContent>
//                 </AccordionItem>
//             </Accordion>
//         </div>
//     );
// }

// export default LandingPage;



'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from 'react-router-dom';
import Image from 'next/image';
import background from '../../public/background.png';
// import news from '../../public/news'
// import { Router } from 'react-router-dom';

const LandingPage = () => {
    const [longUrl, setLongUrl] = useState('');
    const navigate = useNavigate();

    const handleShorten = (e:any    ) => {
        e.preventDefault();
        if (longUrl) navigate(`/auth?createNew=${longUrl}`);
    };

    return (
        <div className='flex flex-col items-center bg-center' style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
            <div></div>
            <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-blue-300 text-center font-extrabold'>
                Create Your Loooooong Link
            </h2>
            <form onSubmit={handleShorten} className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
                <Input
                    type="url"
                    placeholder="Enter your url"
                    onChange={(e) => setLongUrl(e.target.value)}
                    className="h-full flex-1 p-4 px-4"
                />
                <Button className="h-full bg-blue-400" type="submit" variant="destructive">
                    Shorten
                </Button>
            </form>
            <Image src="/cutter.png" alt='banner' width={500} height={300} className='w-full my-11 md:px-11' />
            <Accordion type="multiple" className='w-full md:px-11'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is LinkBite?</AccordionTrigger>
                    <AccordionContent>
                        LinkBite is a URL shortening service that allows you to create shorter, more manageable links from long URLs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is LinkBite free to use?</AccordionTrigger>
                    <AccordionContent>
                        Yes, LinkBite is free to use. There are no charges for creating and sharing shortened URLs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How do I create a shortened URL?</AccordionTrigger>
                    <AccordionContent>
                        To create a shortened URL, enter your long URL into the input field on the LinkBite homepage and click the "Shorten" button. A new, shorter link will be generated for you to use.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
          
        </div>
        
    );
}

export default LandingPage;

