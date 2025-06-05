// Secure Hashing with SHA-256
async function sha256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hash = await window.crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Validation Functions
function isValidUsername(username) {
  return /^[A-Za-z0-9]{8,20}$/.test(username);
}
function isValidPassword(password, username) {
  if (password.length < 8 || password.length > 20) return false;
  if (!/[A-Za-z]/.test(password)) return false;         // at least one letter
  if (!/[0-9]/.test(password)) return false;            // at least one digit
  if (!/[!@#$%^&*]/.test(password)) return false;       // at least one special char
  if (password.toLowerCase().includes(username.toLowerCase())) return false;
  return true;
}

// Local storage "file" simulation
function loadUsers() {
  let users = localStorage.getItem("users");
  if (!users) return {};
  return JSON.parse(users);
}
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// UI Switching
function showLogin() {
  document.getElementById("loginForm").style.display = "";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("welcomeMsg").style.display = "none";
  document.getElementById("loginMsg").innerHTML = "";
}
function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "";
  document.getElementById("welcomeMsg").style.display = "none";
  document.getElementById("regMsg").innerHTML = "";
}
function showWelcome(username) {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("welcomeMsg").style.display = "";
  document.getElementById("welcomeText").innerHTML = `Halo, <b>${username}</b>! Anda berhasil login.`;
}

// Register Function
async function register() {
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value;
  const regMsg = document.getElementById("regMsg");

  if (!isValidUsername(username)) {
    regMsg.innerHTML = '<div class="error">Username 8-20 karakter, hanya huruf/angka.</div>';
    return;
  }
  if (!isValidPassword(password, username)) {
    regMsg.innerHTML = `<div class="error">Password 8-20 karakter, minimal 1 huruf, 1 angka, 1 karakter unik (!@#$%^&*), dan tidak mengandung username.</div>`;
    return;
  }
  let users = loadUsers();
  if (users[username]) {
    regMsg.innerHTML = `<div class="error">Username sudah terdaftar.</div>`;
    return;
  }
  const hash = await sha256(password);
  users[username] = hash;
  saveUsers(users);
  regMsg.innerHTML = `<div class="success">Registrasi berhasil! Silakan login.</div>`;
  setTimeout(showLogin, 1200);
}

// Login Function
async function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  const loginMsg = document.getElementById("loginMsg");
  let users = loadUsers();

  if (!users[username]) {
    loginMsg.innerHTML = `<div class="error">Username tidak ditemukan.</div>`;
    return;
  }
  const hash = await sha256(password);
  if (users[username] !== hash) {
    loginMsg.innerHTML = `<div class="error">Password salah.</div>`;
    return;
  }
  showWelcome(username);
}

function logout() {
  showLogin();
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
}

// Export JSON File (for "penyimpanan file json" requirement)
function exportUsers() {
  const users = localStorage.getItem("users");
  const blob = new Blob([users], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "users.json";
  a.click();
  URL.revokeObjectURL(url);
}

// Default show login
showLogin();
