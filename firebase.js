// ✅ firebase.js (Final version using Firebase Authentication + Realtime Database)

// ⚠️ Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// ✅ Sign up
function signup() {
  const email = document.getElementById('auth-email').value;
  const password = document.getElementById('auth-password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById('auth-status').textContent = "Signed up!";
    })
    .catch(e => {
      document.getElementById('auth-status').textContent = e.message;
    });
}

// ✅ Log in
function login() {
  const email = document.getElementById('auth-email').value;
  const password = document.getElementById('auth-password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById('auth-status').textContent = "Logged in!";
      loadCartFromFirebase();
    })
    .catch(e => {
      document.getElementById('auth-status').textContent = e.message;
    });
}

// ✅ Log out
function logout() {
  auth.signOut().then(() => {
    document.getElementById('auth-status').textContent = "Logged out!";
    localStorage.removeItem("cart");
    if (typeof updateCartCount === 'function') updateCartCount();
    if (typeof renderMiniCart === 'function') renderMiniCart();
  });
}

// ✅ Auto-check login status
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById('auth-status').textContent = `Logged in as ${user.email}`;
    loadCartFromFirebase();
  } else {
    document.getElementById('auth-status').textContent = "Not logged in";
    localStorage.removeItem("cart");
    if (typeof updateCartCount === 'function') updateCartCount();
    if (typeof renderMiniCart === 'function') renderMiniCart();
  }
});

// ✅ Save cart to Firebase Realtime DB
function saveCartToFirebase() {
  const user = auth.currentUser;
  if (!user) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  db.ref('carts/' + user.uid).set(cart);
}

// ✅ Load cart from Firebase Realtime DB
function loadCartFromFirebase() {
  const user = auth.currentUser;
  if (!user) return;

  db.ref('carts/' + user.uid).once('value').then(snapshot => {
    const cart = snapshot.val() || [];
    localStorage.setItem("cart", JSON.stringify(cart));
    if (typeof updateCartCount === 'function') updateCartCount();
    if (typeof renderMiniCart === 'function') renderMiniCart();
    if (typeof loadCart === 'function') loadCart();
  });
}