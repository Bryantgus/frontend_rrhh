import { useState } from 'react';

export default function AccountLayout() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleInputLogin = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: 'userName' | 'password'
  ) => {
    const value = e.target.value;
    if (inputType === 'userName') setUserName(value);
    else if (inputType === 'password') setPassword(value);
  };

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

      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }

      const data = await res.json();
      alert(data);
      // Aquí puedes guardar el token o redirigir
    } catch (err: any) {
      alert(err.message || 'Error en login');
    }
  };

  return (
    <div className="bg-red-100 w-[440px] rounded-2xl border border-red-200 p-10 flex flex-col items-center gap-2">
      <label className="text-center text-red-500 font-bold text-[20px]">Login</label>

      <div className="flex flex-col gap-2">
        <label className="text-center text-red-400 font-bold">Nombre de Usuario</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => handleInputLogin(e, 'userName')}
          className="text-center border-pink-600 border-1 rounded-2xl"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-center text-red-400 font-bold">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => handleInputLogin(e, 'password')}
          className="text-center border-pink-600 border-1 rounded-2xl"
        />
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <label
          className="bg-red-200 w-[200px] text-center text-red-400 font-bold rounded cursor-pointer hover:bg-red-300"
          onClick={handleLogin}
        >
          Login
        </label>
      </div>
    </div>
  );
}
