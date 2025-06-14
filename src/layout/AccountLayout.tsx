import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AccountLayout() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>, inputType: 'userName' | 'password') => {
    const value = e.target.value;
    if (inputType === 'userName') setUserName(value);
    else if (inputType === 'password') setPassword(value);
  };

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: userName,
          password: password,
        }),
      });

      const data = await res.json();

      // Si no es exitoso o el token no existe, lanza error
      if (!res.ok || !data.token) {
        throw new Error(data.error || 'Credenciales inválidas');
      }

      localStorage.setItem('token', data.token);
      navigate('/main/inicio');
    } catch (err: any) {
      alert(err.message || 'Error en login');
    }
  };



  return (
    <div className='w-screen flex items-center justify-center' style={{
      background: ' linear-gradient(300deg,#34e6,#1fea,#1fee)',
      backgroundSize: '180% 180%',
      animation: 'gradient-animation 18s ease infinite'
    }}>
      <div className="mt-[100px] mb-[100px] bg-blue-100 w-[440px] rounded-2xl border border-blue-200 p-10 flex flex-col items-center gap-2">
        <label className="text-center text-blue-500 font-bold text-[20px]">Login</label>

        <div className="flex flex-col gap-2">
          <label className="text-center text-blue-400 font-bold">Nombre de Usuario</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => handleInputLogin(e, 'userName')}
            className="text-center border-sky-600 border-1 rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-center text-blue-400 font-bold">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => handleInputLogin(e, 'password')}
            className="text-center border-sky-600 border-1 rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <label
            className="bg-blue-200 w-[200px] text-center text-blue-400 font-bold rounded cursor-pointer hover:bg-blue-300"
            onClick={handleLogin}
          >
            Login
          </label>
        </div>
      </div>
    </div>
  );
}
