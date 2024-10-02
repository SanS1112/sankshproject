const tbody=document.querySelector('table tbody');
let selectedElement;

let arr=[{id:1,ChemicalName:"SulphuricAcid", Vendor:"Formosa", Density:45, Viscosity:30.32, Packaging:'Bag', PackSize:100.00, Unit:'kg', Quantity:789},
  {id:2,ChemicalName:"NitricAcid", Vendor:"Sinopec", Density:50, Viscosity:60.32, Packaging:'Bag', PackSize:190.00, Unit:'kg', Quantity:600},
  {id:3,ChemicalName:"AceticAcid", Vendor:"Xian",Density :65, Viscosity:80.22, Packaging:'Barrel', PackSize:120.00, Unit:'L', Quantity:598},
  {id:4,ChemicalName:"Ammonium Persulfate", Vendor:"LG Chem",Density :3232, Viscosity:77.32, Packaging:'Barrel', PackSize:112.00, Unit:'L', Quantity:232},
  {id:5,ChemicalName:"Caustic Potash", Vendor:"Formosa",Density :67, Viscosity:12.20, Packaging:'Bag', PackSize:166.00, Unit:'kg', Quantity:598},
  {id:6,ChemicalName:"Ferric Nitrate", Vendor:"Sinopec",Density :99, Viscosity:76.32, Packaging:'Barrel', PackSize:199.00, Unit:'kg', Quantity:598},
  {id:7,ChemicalName:"N-Pentane", Vendor:"Sinopec",Density :32, Viscosity:8.12, Packaging:'Barrel', PackSize:220.00, Unit:'L', Quantity:598},
  {id:8,ChemicalName:"Glycol Ether", Vendor:"DuPoint",Density :44, Viscosity:0.22, Packaging:'Bag', PackSize:120.00, Unit:'kg', Quantity:598},
  {id:9,ChemicalName:"Formaldehyde", Vendor:"LG Chem",Density :19, Viscosity:19.32, Packaging:'Barrel', PackSize:145.00, Unit:'L', Quantity:66},
  {id:10,ChemicalName:"PropylAmino", Vendor:"Axion",Density :88, Viscosity:72.12, Packaging:'Bag', PackSize:1333.00, Unit:'kg', Quantity:555},
  {id:11,ChemicalName:"Amino Acid", Vendor:"Betrt",Density :31, Viscosity:45.76, Packaging:'Barrel', PackSize:155.00, Unit:'L', Quantity:324},
  {id:12,ChemicalName:"Ribonuc Acid", Vendor:"Formosa",Density :23, Viscosity:43.54, Packaging:'Bag', PackSize:111.00, Unit:'kg', Quantity:654},
  {id:13,ChemicalName:"Pentonic Acid", Vendor:"DuPoint",Density :50, Viscosity:18.07, Packaging:'Bag', PackSize:145.00, Unit:'kg', Quantity:444},
  {id:14,ChemicalName:"Kalotyic Acid", Vendor:"Betrt",Density :90, Viscosity:9.81, Packaging:'Bag', PackSize:166.00, Unit:'kg', Quantity:111},
  {id:15,ChemicalName:"Mono Phosphate", Vendor:"LG Chem",Density :44, Viscosity:50.21, Packaging:'Barrel', PackSize:189.00, Unit:'L', Quantity:222},
];
displayTable();



function displayTable(){
    tbody.innerHTML='';
    for(let i=0; i<arr.length;i++){
    tbody.innerHTML=tbody.innerHTML+`<tr><td>${arr[i].ChemicalName}</td><td>${arr[i].Vendor}</td><td>${arr[i].Density}</td><td>${arr[i].Viscosity}</td><td>${arr[i].Packaging}</td><td>${arr[i].PackSize}</td><td>${arr[i].Unit}</td><td>${arr[i].Quantity}</td></tr>`
    }
  
    [...document.querySelector('table tbody').querySelectorAll('tr')].map((p,i)=> p.addEventListener('click', (e)=>{ selectedElement=null;
      [...document.querySelector('table tbody').querySelectorAll('tr')].map((e)=>e.style.backgroundColor='transparent');
      selectedElement=i;
      p.style.backgroundColor='grey';
      ToggleUpButton.disabled=false;
      ToggleDownButton.disabled=false;
    }));
    }

const navButtons=[...document.querySelectorAll('nav ul button')];
let AddButton=navButtons[0];
let SaveButton=navButtons[1];
let ToggleUpButton=navButtons[2];
let ToggleDownButton=navButtons[3];
let DeleteButton=navButtons[4];

AddButton.addEventListener('click', ()=>{selectedElement=null;ToggleUpButton.disabled=false;
  ToggleDownButton.disabled=false; ;tbody.innerHTML= tbody.innerHTML+ '<tr><td><input type="text" /></td><td><input type="text" /></td><td><input type="text" /></td><td><input type="text" /></td><td><input type="text" /></td><td><input type="text" /></td><td><input type="text" /></td><td><input type="text" /></td></tr>';
});

DeleteButton.addEventListener('click', ()=>{
 arr=[...arr.filter((e,i)=>i!==selectedElement)];
 displayTable();
})


SaveButton.addEventListener('click', ()=>{
  selectedElement=null;
  ToggleUpButton.disabled=false;
  ToggleDownButton.disabled=false;
const InputData= [...document.querySelectorAll('input')];
if(InputData.length!==0){
arr.push({id:arr.length,ChemicalName:InputData[0].value, Vendor:InputData[1].value, Density:InputData[2].value,Viscosity:InputData[3].value,Packaging:InputData[4].value,PackSize:InputData[5].value,Unit:InputData[6].value,Quantity:InputData[7].value, });
displayTable();
}else{[...document.querySelector('table tbody').querySelectorAll('tr')].map((e)=>e.style.backgroundColor='transparent');}
});

document.querySelector('thead').addEventListener('click', (p)=> { 
  selectedElement=null;
  ToggleUpButton.disabled=false;
  ToggleDownButton.disabled=false;
  if(p.target.innerHTML==="Density" ||p.target.innerHTML==="Viscosity"||p.target.innerHTML==="PackSize"|| p.target.innerHTML==="Quantity"){
  arr.sort((a,b)=>b[`${p.target.innerHTML}`]-a[`${p.target.innerHTML}`]);
  }else{
  arr.sort((a,b)=> b[`${p.target.innerHTML}`].localeCompare(a[`${p.target.innerHTML}`]));}
  displayTable();
  
});

ToggleUpButton.addEventListener('click',(e)=>{const y=arr[selectedElement-1];
  ToggleDownButton.disabled=false;
  if(selectedElement<=0){ToggleUpButton.disabled=true; return;} 
  arr[selectedElement-1]=arr[selectedElement];
  arr[selectedElement]=y;
  selectedElement=selectedElement-1;
  if(selectedElement<=0){ToggleUpButton.disabled=true;} 
  displayTable();
  [...document.querySelector('table tbody').querySelectorAll('tr')].map((p,i)=>{
    if(i===selectedElement){p.style.backgroundColor='grey';}
  });
} );

ToggleDownButton.addEventListener('click',(e)=>{
  ToggleUpButton.disabled=false;
  if(selectedElement>=arr.length-1){ToggleDownButton.disabled=true; return;} 
  const y=arr[selectedElement+1];
  arr[selectedElement+1]=arr[selectedElement];
  arr[selectedElement]=y;
  selectedElement=selectedElement+1;
 
  if(selectedElement>=arr.length-1){ToggleDownButton.disabled=true;} 
  displayTable();
  [...document.querySelector('table tbody').querySelectorAll('tr')].map((p,i)=>{
    if(i===selectedElement){p.style.backgroundColor='grey';}
  });
} );

