import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AccountLayout() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  const navigate = useNavigate();

  const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>, inputType: 'userName' | 'password') => {
    const value = e.target.value;

    if (inputType === 'userName') {
      setUserName(value);
    } else if (inputType === 'password') {
      setPassword(value);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; 
      return; 
    }

    fetch('https://jsonpalaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert('Error de servidor');
      });
    
  }, [count]);

  const handleLogin = () => {
    setCount(prev => prev+1)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 ">
      <div className="bg-red-100 w-[440px] rounded-2xl border border-red-200 p-10 flex flex-col items-center gap-2">
        <label className='text-center text-red-500 font-bold text-[20px]'>Login</label>

        <div className='flex flex-col gap-2'>
          <label className='text-center text-red-400 font-bold'>Nombre de Usuario</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => handleInputLogin(e, 'userName')}
            className='text-center border-pink-600 border-1 rounded-2xl'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-center text-red-400 font-bold'>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => handleInputLogin(e, 'password')}
            className='text-center border-pink-600 border-1 rounded-2xl'
          />
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <label
            className="bg-red-200 w-[200px] text-center text-red-400 font-bold rounded cursor-pointer hover:bg-red-300"
            onClick={() => handleLogin()}
          >
            Login
          </label>
        </div>
      </div>
    </div>
  );
}
