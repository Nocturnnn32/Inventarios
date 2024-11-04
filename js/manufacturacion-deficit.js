let botonNew=document.getElementById("resolver_lmc")
botonNew.addEventListener('click' , ()=>{
    let E2= document.getElementById("E1").value;
    let H2= document.getElementById("H1").value;
    let D2= document.getElementById("D1").value;
    let M2= document.getElementById("M1").value;
    let W2= document.getElementById("W1").value;
    let P2= document.getElementById("P1").value;
    let E =parseInt(E2);
    let H =parseInt(H2);
    let D =parseInt(D2);
    let M =parseInt(M2);
    let W =parseInt(W2);
    let P =parseInt(P2);
    var tablaView = document.getElementById("clase2");
    tablaView.innerHTML="";
    if(D<W)
    {

        /* cantidad economica de pedido de manipulacion*/
        var Q1=(2*H*D*W)/((M*W)-(M*D));
        var Q2=(M+E)/E;
        var Q=Math.sqrt(Q1)*Math.sqrt(Q2);
    
        
        /* numero de pedidos en [T] */
        var N =D/Q;
        /* tiempo entre de llegada de pedidos  */
        var t=Q/D;
        /* Déficit */
        var F1=(2*H*D)/E;
        var F2=(W-D)/W;
        var F3=M/(M+E);
        var F=Math.sqrt(F1)*Math.sqrt(F2)*Math.sqrt(F3);
    
        /* Inventario maximo */
        var Im=Q*((W-D)/W)-F;
        /* tiempo de existencia de inventario */
        var t12=(Im/D)+(Im/(W-D));
        /* tiempo de deficit */
        var t34=F*((1/D)+(1/(W*D)));
        /* Ecuacion para N pedidos */
        var U=(W-D)/W
        var CT=(P*D)+((H*D)/Q)+(M/(2*Q))*(((Q*U)-F)**2)*(1/U)+((E*(F**2))/(2*Q))*(1/U);
    
        /* generando lña tabla */
        var tabla = "<table border='1px' >";
        tabla +="<tr>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Valor</th>";
        tabla += "<th>Unidad</th>";
        tabla +="</tr>";

        tabla +="<tr>";
        tabla +="<td>Ecuacion para N pedidos</td>";
        tabla += `<td>CT =  ${CT.toFixed(3)}</td>`; 
        tabla += "<td>$</td>"; 
        tabla +="<tr>";
    
        tabla +="<tr>";
        tabla +="<td>Cantidad economica de pedido de manipulacion</td>";
        tabla += `<td>Q =  ${Q.toFixed(3)}</td>`;
        tabla += "<td>Unidades</td>"; 
        tabla +="<tr>";
    
        tabla +="<tr>";
        tabla +="<td>numero de pedidos en [T]</td>";
        tabla += `<td>N =  ${N.toFixed(3)}</td>`;
        tabla += "<td>Tandas/año</td>"; 
        tabla +="<tr>";
    
        tabla +="<tr>";
        tabla +="<td>tiempo entre de llegada de pedidos </td>";
        tabla += `<td>t =  ${t.toFixed(3)}</td>`;
        tabla += "<td>Unidad/T</td>";
        tabla +="<tr>";
    
        tabla +="<tr>";
        tabla +="<td>Inventario maximo </td>";
        tabla += `<td>Im =  ${Im.toFixed(3)}</td>`;
        tabla += "<td>Unidades</td>";
        tabla +="<tr>";
    
        tabla +="<tr>";
        tabla +="<td>tiempo de existencia de inventario</td>";
        tabla += `<td>t1+t2 =  ${t12.toFixed(3)}</td>`;
        tabla += "<td>Años</td>";
        tabla +="<tr>";
    
        tabla +="<tr>";
        tabla +="<td>tiempo de deficit </td>";
        tabla += `<td>t3+t4 =  ${t34.toFixed(3)}</td>`;
        tabla += "<td>Dias</td>";
        tabla +="<tr>";
    
        tabla +="<tr>";
        tabla +="<td>deficit </td>";
        tabla += `<td>F =  ${F.toFixed(3)}</td>`;
        tabla += "<td>Unidades</td>";
        tabla +="<tr>";
    
        tabla += "</table>";
    
        tablaView.innerHTML +=tabla;

    }
    else
    {
        tablaView.innerHTML +="La demanda (D) debe ser menor de la taza de manufacturaciones (W)";
    }

  

})