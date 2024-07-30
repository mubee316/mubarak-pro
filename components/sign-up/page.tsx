
// 'use client';
// import { useState } from 'react';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth } from '../firebase/config';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     try {
//       const res = await createUserWithEmailAndPassword(email, password);
//       console.log({ res });
//       setEmail('');
//       setPassword('');
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
//         <form onSubmit={handleSignUp}>
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
//             Sign Up
//           </button>
//         </form>
//         {loading && <p>Loading...</p>}
//         {error && <p>Error: {error.message}</p>}
//         {user && <p>Signed up user: {user.email}</p>}
//       </div>
//     </div>
//   );
// };

// export default SignUp;



'use client';
import { useState, FormEvent } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../app/firebase/config';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail('');
      setPassword('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp}>
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
            Sign Up
          </button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {user && <p>Signed up user: {user.user.email}</p>}
      </div>
    </div>
  );
};

export default SignUp;
