//buttons
let resolution=document.getElementById('resolution');

resolution.addEventListener('click', ()=>{

      

      //contenedores
      let container2= document.getElementById('container2'); 


      let D=document.getElementById('D_value').value;
      let W=document.getElementById('W_value').value;


      //verificación, si W<D

      if (W<D){
         document.getElementById('message').innerHTML="¡¡¡La tasa de producción es menor a la Demanda!!! \n Vuelva a ingresar los datos..";
         
      
      }else{


            let Q=0
           
            let H=document.getElementById('H_value').value;
            let M=document.getElementById('M_value').value;
            let P=document.getElementById('P_value').value;      
      //operaciones

      let Vres=new Array(5);
      let Vname=new Array(5);
      let Unidades=new Array(5);

      Vname=['Cantidad económica de manufacturación (Q)',
      'Número de tandas de producción (N)',
      'Tiempo de fabricación (t)',
      'Inventario maximo (Im)',
      'Tiempo de facricación (t1)',
      'Costo total anual optimo (CT)'];

      Unidades=['unidades','tandas/año','años','unidades','año','$/año'];

      //para hallar Q

      let Q_res=0;
      let numerador=0;
      let denominador=0;
      

      numerador=2*H*D;
      denominador=M*(1-(D/W));
      Q_res=Math.sqrt(numerador/denominador);
      Q_res=Q_res.toFixed(3);
      Vres[0]=Q_res;

      //verificación

      if(Q==0){
            Q=Q_res;
       }
      

      

      //para hallar N

      let N_res=D/Q;
      N_res=N_res.toFixed(3);
      Vres[1]=N_res;

      //para hallar t
      let t_res=Q/D;
      t_res=t_res.toFixed(3);
      Vres[2]=t_res;

      //para hallar Im
      let Im_res=Q*(1-(D/W));
      Im_res=Im_res.toFixed(3);
      Vres[3]=Im_res;

      //para hallar ti
      let ti_res=Q/W;
      ti_res=ti_res.toFixed(3);
      Vres[4]=ti_res;
      
      //para calcular el costo total optimo CT

      let CT_res=0;
      CT_res=P*D+H*(D/Q)+M*(Q/2)*(1-(D/W));
      CT_res=CT_res/1000;
      CT_res=CT_res.toFixed(3);
      Vres[5]=CT_res;

      //para mostrar resultados

    
      let table="<table  class='table' border='1' cellspacing='1'>"; 

      table += '<tr class="table__tr" >\n';
      for (let i = 0; i < 3; i++) {
            if (i==0){
            table +='<th class="table__th" >NOMBRE</th>\n';
            }else{
            
            if(i==2){
                  table +='<th class="table__th" >UNIDADES</th>\n';
            }else{
                  table +='<th class="table__th" >VALOR</th>\n';
            }
            }
      }
      table+='</tr >';

      for(let i=0;i<6;i++){
          table+="<tr class='table__tr'>";
          
          for(let j=0;j<3;j++){
                if (j==0){
                     table+=`<td class='table__td'>${Vname[i]}</td>`;
                }else{
                     
                     if(j==2){
                     table+=`<td class='table__td'>${Unidades[i]}</td>`;
                     }else{
                        table+=`<td class='table__td'>${Vres[i]}</td>`; 
                     }
                }    

          }
  
          table+="</tr>";
          
      }
      table+="</table>";


      container2.innerHTML=table;




}
     
      
} );