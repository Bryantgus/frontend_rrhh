Crear 2 vistas para el frontend con las siguientes responsabilidades:

Una pantalla para Login.

Una pantalla para todo el sistema con lo siguiente:

Home
Opciones de menus ==> Con permisología
Poder ver listado de Empleado, Cargo, rango de salario por cargo, listado de ponches

Poder editar, guardar y borrar(soft delete) Empleados, Cargos, asignar Empleados a Cargo.

Poder Ponchar y para poder editar los ponches debe ser gerente o director

Listado de cargo 

Director --- Todo (Modificar nomina, Vincular y desvincular)
Gerente --- Generar nomina, Update, Asignar, Ver (Empleado, Cargo, Permisos, Nomina, Desvincular Empleado)
Encargado --- Asignar Cargo, Ver, Update (Empleado)
Coordinardor --- Update(horasExtras), Ver
Analista --- Ver

PUEDEN USAR CUALQUIER FRAMERWORK CSS

Para la nominas debes calcular las horas extra a 35% más que la hora normales donde la hora base son 8 horas diarias por 5 dias a la semana, el salario debe ser  en base 23.23 dias.

Al final hacer el reporte de nomina, Visualizar una exportacion con el reporte.

Salario base, horas extra, monto salario, monto extra, total neto, codigo empleado, nombre empleado y cargo