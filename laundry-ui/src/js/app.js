/*
  laundry-ui/src/js/app.js
  - Vanilla JS single-page UI for Laundry admin (static)
  - Mock data arrays below (replace with API calls where TODO markers appear)
*/

/* ---------------- Mock data (realistic samples) ---------------- */
// TODO: Replace mock arrays with fetch() to backend API endpoints
const mockDrivers = [
  {id:'DRV-001', name:'Ravi Kumar', phone:'+94 712345678', vehicle:'VEH-01', status:'Active'},
  {id:'DRV-002', name:'Saman Perera', phone:'+94 712987654', vehicle:'VEH-02', status:'Active'},
  {id:'DRV-003', name:'Nirosha Silva', phone:'+94 712555111', vehicle:null, status:'Inactive'}
];

const mockVehicles = [
  {id:'VEH-01', reg:'WP NA-1234', model:'Suzuki Alto'},
  {id:'VEH-02', reg:'WP KB-9876', model:'Toyota Hiace'},
  {id:'VEH-03', reg:'WP AA-4321', model:'Nissan NV200'}
];

const mockBookings = [
  {id:'BKG-1001', customer:'Suresh Jayasuriya', pickup:'2025-12-09 09:30', driverId:'DRV-001', status:'Pending', amount:12.5},
  {id:'BKG-1002', customer:'Kumari Silva', pickup:'2025-12-09 10:45', driverId:null, status:'Pending', amount:18.0},
  {id:'BKG-1003', customer:'Dilan Perera', pickup:'2025-12-08 16:00', driverId:'DRV-002', status:'In Progress', amount:9.0},
  {id:'BKG-1004', customer:'Nimal Wickramasinghe', pickup:'2025-12-07 08:00', driverId:'DRV-003', status:'Completed', amount:25.0},
  {id:'BKG-1005', customer:'Priya Fernando', pickup:'2025-12-10 13:20', driverId:null, status:'Pending', amount:14.0},
  {id:'BKG-1006', customer:'Rohana Silva', pickup:'2025-12-06 11:00', driverId:'DRV-002', status:'Cancelled', amount:0.0}
];

/* ---------------- App state & elements ---------------- */
const App = { state: { role: localStorage.getItem('laundry_role') || 'Kawya', bookingsFilter: 'All' }, els: {} };

const ROLES = ['Kawya','Gayathri','Sewmini','Himasha','Kavindi','Minidu','Nipuni'];
const MENUS = { default:['Dashboard','Bookings','Drivers','Employees','Vehicles','Salary','Settings','Profile'] };

document.addEventListener('DOMContentLoaded', ()=>{
  App.els.sidebar = document.getElementById('sidebar');
  App.els.topbar = document.getElementById('topbar');
  App.els.content = document.getElementById('content');
  App.els.modalRoot = document.getElementById('modal-root');

  renderSidebar();
  renderTopbar();
  renderDashboard();
  startClock();
});

/* ---------------- Sidebar ---------------- */
function renderSidebar(){
  const el = App.els.sidebar; el.innerHTML = '';
  // brand
  const brand = el.appendChild(document.createElement('div')); brand.className='brand';
  brand.innerHTML = `<img src="../assets/logo.png" alt="Giggling Laundry logo"><div><div class="title">Giggling Laundry</div><div class="sub">Admin panel - ${escapeHtml(App.state.role)}</div></div>`;
  // menu
  const menu = el.appendChild(document.createElement('div')); menu.className='menu';
  const items = MENUS.default;
  items.forEach(name=>{
    const btn = document.createElement('button'); btn.type='button'; btn.className='menu-item'; btn.dataset.name=name; btn.innerHTML=`<span class="label">${name}</span>`;
    if(name==='Dashboard') btn.classList.add('active');
    btn.addEventListener('click', ()=>{ onMenu(name, btn); });
    menu.appendChild(btn);
  });
  const footer = el.appendChild(document.createElement('div')); footer.className='footer'; footer.innerHTML = `<div style="margin-top:12px"><button id="toggle-sidebar" class="ghost">☰</button></div>`;
  document.getElementById('toggle-sidebar').addEventListener('click', toggleSidebar);
}

function onMenu(name, btn){
  document.querySelectorAll('.menu-item').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  if(name==='Dashboard') renderDashboard();
  else if(name==='Bookings') scrollToBookings();
  else if(name==='Drivers') renderDriversPanel();
  else renderGeneric(name);
}

function toggleSidebar(){
  const sb = document.querySelector('.sidebar');
  if(sb.style.left === '-9999px'){ sb.style.left='0'; } else { sb.style.left='-9999px'; }
}

/* ---------------- Topbar ---------------- */
function renderTopbar(){
  const t = App.els.topbar; t.innerHTML = '';
  const left = document.createElement('div'); left.className='live-time'; left.id='live-time'; t.appendChild(left);
  const right = document.createElement('div'); right.className='top-controls';
  const sel = document.createElement('select'); sel.className='role-switch'; sel.setAttribute('aria-label','Switch role'); ROLES.forEach(r=>{ const o=document.createElement('option'); o.value=r; o.textContent=r; if(r===App.state.role) o.selected=true; sel.appendChild(o); });
  sel.addEventListener('change', (e)=>{ App.state.role = e.target.value; localStorage.setItem('laundry_role', App.state.role); renderSidebar(); renderTopbar(); });
  right.appendChild(sel);
  const user = document.createElement('div'); user.className='user'; user.innerHTML=`<div id="user-name">${escapeHtml(App.state.role)}</div><img class="avatar" src="../assets/icons/avatar.svg" alt="avatar">`;
  right.appendChild(user);
  t.appendChild(right);
}

function startClock(){
  const el = document.getElementById('live-time'); if(!el) return;
  function tick(){ const now=new Date(); el.textContent = now.toLocaleString(undefined,{weekday:'short',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}); }
  tick(); setInterval(tick,1000);
}

/* ---------------- Dashboard (hero + tiles + bookings) ---------------- */
function renderDashboard(){
  const c = App.els.content; c.innerHTML = '';
  // Hero
  const hero = document.createElement('section'); hero.className='hero';
  hero.innerHTML = `
    <div class="hero-left"><div class="hero-circle"><img src="../assets/bg.jpg" alt="laundry hero"></div></div>
    <div class="hero-right"><div class="hero-pre">Laundry Presentation</div><h1 class="hero-title">Laundry That<br>Makes Your Life Easier</h1><div class="hero-cta"><button class="btn primary" id="start-slide">Start Slide</button><button class="btn ghost" id="contact-now">Contact Now</button></div></div>
  `;
  c.appendChild(hero);

  // Tiles
  const tilesWrap = document.createElement('div'); tilesWrap.className='tiles';
  const tiles = [
    {id:'bookings', title:'Bookings', sub:'Manage pickups', icon:'🧺'},
    {id:'drivers', title:'Drivers', sub:'Active drivers', icon:'🚚'},
    {id:'vehicles', title:'Vehicles', sub:'Fleet overview', icon:'🚗'},
    {id:'customers', title:'Customers', sub:'Customers', icon:'👥'},
    {id:'salary', title:'Salary', sub:'Payroll', icon:'💵'},
    {id:'settings', title:'Settings', sub:'System', icon:'⚙️'}
  ];
  tiles.forEach(t=>{
    const el = document.createElement('div'); el.className='tile'; el.tabIndex=0; el.dataset.id=t.id;
    el.innerHTML = `<div class="icon" aria-hidden="true">${t.icon}</div><div class="meta"><div class="title">${t.title}</div><div class="sub">${t.sub}</div></div>`;
    el.addEventListener('click', ()=>{ console.log('Tile clicked:', t.id); if(t.id==='drivers') renderDriversPanel(); });
    el.addEventListener('keydown',(e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); el.click(); } });
    tilesWrap.appendChild(el);
  });
  c.appendChild(tilesWrap);

  // Recent bookings
  const recent = document.createElement('div'); recent.className='recent';
  recent.innerHTML = `
    <div class="card">
      <div class="card-head"><h2>Recent Bookings</h2><div class="filters"><button class="chip active" data-status="All">All</button><button class="chip" data-status="Pending">Pending</button><button class="chip" data-status="In Progress">In Progress</button><button class="chip" data-status="Completed">Completed</button><button class="chip" data-status="Cancelled">Cancelled</button></div></div>
      <div class="table-wrap"><table class="table" id="bookings-table"><thead><tr><th>Booking ID</th><th>Customer</th><th>Pickup Time</th><th>Driver</th><th>Status</th><th>Amount</th><th>Actions</th></tr></thead><tbody></tbody></table></div>
    </div>
  `;
  c.appendChild(recent);

  bindBookingFilters();
  renderBookings();
}

function bindBookingFilters(){
  App.els.content.querySelectorAll('.chip').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      App.els.content.querySelectorAll('.chip').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active'); App.state.bookingsFilter = btn.dataset.status; renderBookings();
    });
  });
}

function renderBookings(){
  const tbody = document.querySelector('#bookings-table tbody'); tbody.innerHTML='';
  const filter = App.state.bookingsFilter || 'All';
  mockBookings.filter(b=> filter==='All' ? true : b.status===filter).forEach(b=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${b.id}</td>
      <td>${escapeHtml(b.customer)}</td>
      <td>${b.pickup}</td>
      <td>${b.driverId ? findDriver(b.driverId).name : '<span class="muted">Unassigned</span>'}</td>
      <td><span class="status ${b.status.toLowerCase().replace(/\s+/g,'')}">${b.status}</span></td>
      <td>$${(b.amount||0).toFixed(2)}</td>
      <td><button data-act="view" data-id="${b.id}" class="btn small">View</button> <button data-act="assign" data-id="${b.id}" class="btn small ghost">Assign</button> <button data-act="complete" data-id="${b.id}" class="btn small">Mark Complete</button></td>
    `;
    tr.querySelectorAll('button[data-act]').forEach(btn=>btn.addEventListener('click', onBookingAction));
    tbody.appendChild(tr);
  });
}

function onBookingAction(e){
  const act = e.currentTarget.dataset.act; const id = e.currentTarget.dataset.id; const booking = mockBookings.find(b=>b.id===id);
  if(!booking) return;
  if(act==='view'){
    showModal(`<div class="modal-header"><strong>Booking ${booking.id}</strong></div><div><p><strong>Customer:</strong> ${escapeHtml(booking.customer)}</p><p><strong>Pickup:</strong> ${booking.pickup}</p><p><strong>Driver:</strong> ${booking.driverId ? findDriver(booking.driverId).name : 'Unassigned'}</p><p><strong>Status:</strong> ${booking.status}</p><p><strong>Amount:</strong> $${(booking.amount||0).toFixed(2)}</p></div><div style="text-align:right;margin-top:12px"><button data-close class="btn">Close</button></div>`);
  } else if(act==='assign'){
    const options = mockDrivers.map(d=>`<option value="${d.id}">${escapeHtml(d.name)} — ${escapeHtml(d.phone)}</option>`).join('');
    showModal(`<div class="modal-header"><strong>Assign Driver — ${booking.id}</strong></div><div><label for="assign-driver">Driver</label><select id="assign-driver" style="width:100%;padding:8px;border-radius:8px;margin-top:8px">${'<option value="">-- Unassigned --</option>'}${options}</select></div><div style="text-align:right;margin-top:12px"><button id="assign-save" class="btn">Assign</button> <button data-close class="btn ghost">Cancel</button></div>`);
    document.getElementById('assign-save').addEventListener('click', ()=>{
      const did = document.getElementById('assign-driver').value || null;
      // TODO: call API to assign driver instead of modifying mock array directly
      booking.driverId = did; if(booking.status==='Pending' && did) booking.status='In Progress'; hideModal(); renderBookings();
    });
  } else if(act==='complete'){
    if(!confirm('Mark booking complete?')) return; booking.status='Completed'; // TODO: POST status update to API
    renderBookings();
  }
}

function scrollToBookings(){ const el = document.getElementById('bookings-table'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'}); }

/* ---------------- Drivers management panel ---------------- */
function renderDriversPanel(){
  App.els.content.innerHTML = '';
  const panel = document.createElement('section'); panel.className='card';
  panel.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h3>Manage Drivers</h3><div><button id="add-driver" class="btn">Add Driver</button></div></div><div id="drivers-list"></div>`;
  App.els.content.appendChild(panel);
  document.getElementById('add-driver').addEventListener('click', openAddDriver);
  renderDriversList();
}

function renderDriversList(){
  const wrap = document.getElementById('drivers-list'); wrap.innerHTML='';
  mockDrivers.forEach(d=>{
    const row = document.createElement('div'); row.style.display='flex'; row.style.justifyContent='space-between'; row.style.padding='10px 0'; row.style.borderBottom='1px solid #f1f5f9';
    row.innerHTML = `<div><strong>${escapeHtml(d.name)}</strong><div class="small muted">${escapeHtml(d.phone)} • ${d.vehicle || '—'}</div></div><div><button class="btn ghost" data-act="edit" data-id="${d.id}">Edit</button> <button class="btn" data-act="delete" data-id="${d.id}">Delete</button></div>`;
    wrap.appendChild(row);
  });
  wrap.querySelectorAll('button[data-act]').forEach(btn=>btn.addEventListener('click',(e)=>{
    const act = e.currentTarget.dataset.act; const id = e.currentTarget.dataset.id; if(act==='edit') openEditDriver(id); if(act==='delete') { if(!confirm('Delete driver?')) return; const idx=mockDrivers.findIndex(x=>x.id===id); if(idx>=0) mockDrivers.splice(idx,1); renderDriversList(); }
  }));
}

function openAddDriver(){
  const options = mockVehicles.map(v=>`<option value="${v.id}">${escapeHtml(v.reg)} — ${escapeHtml(v.model)}</option>`).join('');
  showModal(`<div class="modal-header"><strong>Add Driver</strong></div><div><label for="dname">Name</label><input id="dname" style="width:100%;padding:8px;margin-top:6px;border-radius:8px;border:1px solid #e6eefc" /><label for="dphone" style="margin-top:8px;display:block">Phone</label><input id="dphone" style="width:100%;padding:8px;margin-top:6px;border-radius:8px;border:1px solid #e6eefc" /><label for="dveh" style="margin-top:8px;display:block">Vehicle</label><select id="dveh" style="width:100%;padding:8px;margin-top:6px;border-radius:8px;border:1px solid #e6eefc"><option value="">-- None --</option>${options}</select></div><div style="text-align:right;margin-top:12px"><button id="drv-save" class="btn">Save</button> <button data-close class="btn ghost">Cancel</button></div>`);
  document.getElementById('drv-save').addEventListener('click', ()=>{
    const name=document.getElementById('dname').value.trim(); const phone=document.getElementById('dphone').value.trim(); const vehicle=document.getElementById('dveh').value||null; if(!name){ alert('Name required'); return; }
    const id='DRV-'+Math.floor(Math.random()*90000+1000);
    // TODO: POST to API to create driver
    mockDrivers.push({id,name,phone,vehicle,status:'Active'}); hideModal(); renderDriversPanel();
  });
}

function openEditDriver(id){
  const d = mockDrivers.find(x=>x.id===id); if(!d) return alert('Driver not found');
  const options = mockVehicles.map(v=>`<option value="${v.id}" ${d.vehicle===v.id?'selected':''}>${escapeHtml(v.reg)} — ${escapeHtml(v.model)}</option>`).join('');
  showModal(`<div class="modal-header"><strong>Edit Driver</strong></div><div><label for="dname">Name</label><input id="dname" value="${escapeHtml(d.name)}" style="width:100%;padding:8px;margin-top:6px;border-radius:8px;border:1px solid #e6eefc" /><label for="dphone" style="margin-top:8px;display:block">Phone</label><input id="dphone" value="${escapeHtml(d.phone)}" style="width:100%;padding:8px;margin-top:6px;border-radius:8px;border:1px solid #e6eefc" /><label for="dveh" style="margin-top:8px;display:block">Vehicle</label><select id="dveh" style="width:100%;padding:8px;margin-top:6px;border-radius:8px;border:1px solid #e6eefc"><option value="">-- None --</option>${options}</select></div><div style="text-align:right;margin-top:12px"><button id="drv-update" class="btn">Save</button> <button data-close class="btn ghost">Cancel</button></div>`);
  document.getElementById('drv-update').addEventListener('click', ()=>{
    const name=document.getElementById('dname').value.trim(); const phone=document.getElementById('dphone').value.trim(); const vehicle=document.getElementById('dveh').value||null; if(!name){ alert('Name required'); return; }
    // TODO: PUT /drivers/:id
    d.name=name; d.phone=phone; d.vehicle=vehicle; hideModal(); renderDriversPanel();
  });
}

/* ---------------- Modal helper ---------------- */
function showModal(html){
  const root = App.els.modalRoot; root.innerHTML=''; root.classList.add('open'); root.setAttribute('aria-hidden','false');
  const box = document.createElement('div'); box.className='modal'; box.innerHTML = html; root.appendChild(box);
  // backdrop click
  root.addEventListener('click', onBackdrop);
  // Esc
  function onKey(e){ if(e.key==='Escape') hideModal(); }
  document.addEventListener('keydown', onKey);
  root._cleanup = ()=>{ root.removeEventListener('click', onBackdrop); document.removeEventListener('keydown', onKey); };
}
function hideModal(){ const root=App.els.modalRoot; if(!root) return; root.classList.remove('open'); root.setAttribute('aria-hidden','true'); root.innerHTML=''; if(root._cleanup) root._cleanup(); }
function onBackdrop(e){ if(e.target===App.els.modalRoot) hideModal(); }

/* ---------------- Utilities ---------------- */
function findDriver(id){ return mockDrivers.find(d=>d.id===id) || {name:'—'}; }
function escapeHtml(s){ if(!s) return ''; return String(s).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]); }

/* ---------------- Generic page for unimplemented menu items ---------------- */
function renderGeneric(title){ App.els.content.innerHTML = `<div class="card"><h2>${escapeHtml(title)}</h2><p class="muted">Page UI skeleton for ${escapeHtml(title)}.</p></div>`; }

/* ---------------- Small helpers ---------------- */
function findDOM(selector){ return document.querySelector(selector); }

/* End of file */
