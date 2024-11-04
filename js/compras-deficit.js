const ObjectValues = {};

const container = document.querySelector('.Main-section.cc-deficit');
const inputs = container.querySelectorAll('input');
const contResults = document.querySelector('#compra-con-deficit');
const btnResolver = document.getElementById('btn-resolver');

console.log('el contenedor es:')
console.log(contResults);


btnResolver.addEventListener('click',()=>{
    inputs.forEach((element, index) => {
        ObjectValues[element.id] = Number(element.value);
    });


    for (const key in ObjectValues) {
        console.log(typeof(ObjectValues[key]));

    }

    let { P, D, H, E, M, Q, F, CT, N, T, T1, T2, IM } = ObjectValues;

    D = D * 12;
    const formQ  = ((2*H*D/M)**(1/2))*(((M+E)/E)**(1/2));
    const formF  = ((2*H*D/E)**(1/2))*((M/(M+E)))**(1/2);
    const formCT = (((P*D)+(H*(D/formQ)))+(M*((formQ-formF)**2)/(2*formQ))+(E*(formF**2)/(2*formQ)));  
    const formN  = ( D/formQ ); 
    const formT  = ( formQ/D ); 
    const formT1 = ( (formQ-formF)/D );  
    const formT2 = ( formF/D );  
    const formIM = ( formQ-formF);  

    console.log('Accediendo alos valores de forma individual: ')
    console.log('el valor de: formQ',formQ)
    console.log('el valor de: formF',formF)
    console.log('el valor de: formCT',formCT)
    console.log('el valor de: formN',formN)
    console.log('el valor de: formT',formT)
    console.log('el valor de: formT1',formT1)
    console.log('el valor de: formT2',formT2)
    console.log('el valor de: formIM',formIM)

    const insertTable =`
    <table class="Table">
        <tr class="Table-tr">
            <th class="Table-th" >Descripción</th>
            <th class="Table-th" >Resultados</th>
            <th class="Table-th" >Unidades</th>
        </tr>
        <tr class="Table-tr">
            <td class="Table-td" >Cantidad óptima a comprarse (Q)</td>
            <td class="Table-td" >${formQ.toFixed(3)}</td>
            <td class="Table-td" >unidades</td>
        </tr>
        <tr class="Table-tr">
            <td class="Table-td" >Número óptimo de cantidades agotadas (F)</td>
            <td class="Table-td" >${formF.toFixed(3)}</td>
            <td class="Table-td" >unidades</td>
        </tr>
        <tr class="Table-tr">
            <td class="Table-td" >Costo anual óptimo (CT)</td>
            <td class="Table-td" >${formCT.toFixed(3)}</td>
            <td class="Table-td" >$/año</td>
        </tr>
        <tr class="Table-tr">
            <td class="Table-td" >Número de pedidos por año (N)</td>
            <td class="Table-td" >${formN.toFixed(3)}</td>
            <td class="Table-td" >pedidos/año</td>
        </tr>
        <tr class="Table-tr">
            <td class="Table-td" >Tiempo entre pedidos (T)</td>
            <td class="Table-td" >${formT.toFixed(3)}</td>
            <td class="Table-td" >año</td>
        </tr>
        <tr class="Table-tr">
            <td class="Table-td" >Tiempo de inventarios (T<sub>1</sub>)</td>
            <td class="Table-td" >${formT1.toFixed(3)}</td>
            <td class="Table-td" >año</td>
        </tr>
        <tr class="Table-tr">
            <td class="Table-td" >Tiempo de deficit (T<sub>2</sub>)</td>
            <td class="Table-td" >${formT2.toFixed(3)}</td>
            <td class="Table-td" >año</td>
        </tr>
        <tr class="Table-tr">
            <td class="Table-td" >Inventario máximo (Im)</td>
            <td class="Table-td" >${formIM.toFixed(3)}</td>
            <td class="Table-td" >unidades</td>
        </tr>
    </table>
    `;
    console.log('el inner html del div es: ')
    contResults.innerHTML = insertTable;
    console.log('esto')

});





