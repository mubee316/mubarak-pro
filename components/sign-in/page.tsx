// 'use client';
// import { useState, FormEvent } from 'react';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth } from '../../app/firebase/config';
// import { useRouter } from 'next/navigation';
// import { useNavigate, useSearchParams } from 'react-router-dom';

// const SignIn: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const longLink = searchParams.get("createNew");

//   const router = useRouter()
//   const handleSignIn = async (event: FormEvent) => {
//     event.preventDefault();
//     try {
//       const res = await signInWithEmailAndPassword(email, password);
//       console.log({ res });
//       navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);

//       setEmail('');
//       setPassword('');
//       router.push('/')
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-6">Sign In</h2>
//         <form onSubmit={handleSignIn}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Sign In
//           </button>
//         </form>
//         {loading && <p>Loading...</p>}
//         {error && <p>Error: {error.message}</p>}
//         {user && <p>Signed in user: {user.user.email}</p>}
//       </div>
//     </div>
//   );
// };

// export default SignIn;


// 'use client';
// import { useState, FormEvent } from 'react';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth } from '../../app/firebase/config';
// import { useRouter, useSearchParams } from 'next/navigation';

// const SignIn: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const longLink = searchParams.get("createNew");

//   const handleSignIn = async (event: FormEvent) => {
//     event.preventDefault();
//     try {
//       const res = await signInWithEmailAndPassword(email, password);
//       console.log({ res });
//       setEmail('');
//       setPassword('');

//       if (longLink) {
//         router.push(`/dashboard?createNew=${longLink}`);
//       } else {
//         router.push('/');
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-6">Sign In</h2>
//         <form onSubmit={handleSignIn}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Sign In
//           </button>
//         </form>
//         {loading && <p>Loading...</p>}
//         {error && <p>Error: {error.message}</p>}
//         {user && <p>Signed in user: {user.user.email}</p>}
//       </div>
//     </div>
//   );
// };

// export default SignIn;

'use client';
import { useState, FormEvent } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../app/firebase/config';
import { useNavigate, useLocation } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const longLink = searchParams.get("createNew");

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail('');
      setPassword('');

      if (longLink) {
        navigate(`/dashboard?createNew=${longLink}`);
      } else {
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {user && <p>Signed in user: {user.user.email}</p>}
      </div>
    </div>
  );
};

export default SignIn;


