window.addEventListener('DOMContentLoaded',()=>{
 if(typeof Chart==='undefined'){document.querySelectorAll('.canvas').forEach(x=>x.innerHTML='<p>Charts require an internet connection to load Chart.js.</p>');return;}
 const d=window.shopData;const money=v=>'₱'+Number(v).toLocaleString('en-PH');
 Chart.defaults.color='#98a5c1';Chart.defaults.font.family='Inter,system-ui,sans-serif';
 new Chart(document.getElementById('monthly'),{type:'bar',data:{labels:d.months.map(x=>x.label),datasets:[{label:'Revenue',data:d.months.map(x=>Number(x.revenue)),backgroundColor:'#7c79ff',borderRadius:8,maxBarThickness:48}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>money(c.parsed.y)}}},scales:{x:{grid:{display:false}},y:{grid:{color:'#26314a'},ticks:{callback:money}}}}});
 new Chart(document.getElementById('categories'),{type:'doughnut',data:{labels:d.categories.map(x=>x.label),datasets:[{data:d.categories.map(x=>Number(x.revenue)),backgroundColor:['#7c79ff','#32c6b1','#ffb568','#f472b6'],borderWidth:0,hoverOffset:6}]},options:{responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{position:'bottom',labels:{padding:18,usePointStyle:true}},tooltip:{callbacks:{label:c=>c.label+': '+money(c.parsed)}}}}});
});
