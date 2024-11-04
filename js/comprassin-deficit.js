const botonCalc = document.getElementById("boton");


botonCalc.addEventListener("click",()=>{

      // Función para calcular la cantidad óptima de pedido (EOQ)
      const H = document.getElementById('costo_ordenar').value;
      const D = document.getElementById('demanda').value;
      const M = document.getElementById('costo_mantenimiento').value;
      const P = document.getElementById('precio').value;


  function calcularEOQ() {
     let var1=(Math.sqrt((2 * D * H) / M));
     return var1;
     console.log("el valor de var1:"+var1);
  }
  
  // Función para calcular el costo total anual óptimo
  function calcularCostoTotalAnual() {
    const EOQ = calcularEOQ();
    return (P*D) + H * (D / EOQ) + M*( EOQ / 2);
  }
  
  // Función para calcular el número de pedidos por año
  function calcularNumeroPedidos() {
    const EOQ = calcularEOQ();
    return D / EOQ;
  }
  
  // Función para calcular el tiempo entre pedidos (en días)
  function calcularTiempoEntrePedidos() {
    const EOQ = calcularEOQ();
    return EOQ / D;
  }

const EOQ = calcularEOQ();
console.log("el valor de EOQ:  "+EOQ)
const costoTotalAnual = calcularCostoTotalAnual();
const numeroPedidos = calcularNumeroPedidos();
const tiempoEntrePedidos = calcularTiempoEntrePedidos();

// Ahora puedes usar estos valores en tus cálculos adicionales o mostrarlos al usuario.



// Ahora puedes usar estas variables en tus cálculos o procesamiento adicional.

const tabla = `<table class="table" border="1" cellspacing="0">
<tr>
  <th class="table__th">NOMBRE</th>
  <th class="table__th">RESULTADO</th>
  <th class="table__th">EQUIVALENCIA</th>
</tr>
<tr>
  <td>Cantidad Optima de Pedido</td>
  <td>${calcularEOQ().toFixed(3)}</td>
  <td>[u]</td>
</tr>
<tr>
  <td>Costo Total Anual Optimo</td>
  <td>${calcularCostoTotalAnual().toFixed(3)}</td>
  <td>$/Año</td>
</tr>
<tr>
  <td>Numeros de Pedidos/año</td>
  <td>${calcularNumeroPedidos().toFixed(3)}</td>
  <td>Pedidos/Año</td>
</tr>
<tr>
  <td>Tiempo Entre Pedidos</td>
  <td>${calcularTiempoEntrePedidos().toFixed(3)}</td>
  <td>u/Año</td>
</tr>
</table>`;

const fuera = document.getElementById("tabla");











  fuera.innerHTML = tabla;
});