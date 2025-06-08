import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MainPageLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const res = await fetch('http://localhost:4000/api/employee', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (res.status === 401) {
          // Token inválido o no autorizado
          localStorage.removeItem('token'); // Opcional: borrar token inválido
          navigate('/login');
          return;
        }

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Employees data:", data);
      } catch (error) {
        console.error("Fetch error:", error);
        // Aquí podrías también redirigir a login si quieres:
        // navigate('/login');
      }
    };

    fetchEmployees();
  }, [navigate]);

  return (
    <div>
      MainPageLayout
      <Outlet />
    </div>
  );
}
