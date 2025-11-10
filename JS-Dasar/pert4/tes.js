const clientId = '7990e15b3adc4bf39081b9940c45aa25';  // Ganti dengan Client ID 
const redirectUri = 'http://localhost:5500/pert4/index.html';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const scopes = [
    'user-read-playback-state',
    'user-modify-playback-state',
    'streaming',
    'user-top-read',
    'playlist-read-private',
    'playlist-read-collaborative'
];

// Tombol login
document.getElementById('login-button').addEventListener('click', () => {
    const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    window.location.href = authUrl;
});

// Ambil token dari URL
function getAccessToken() {
    const hash = window.location.hash.substring(1).split('&').reduce((acc, item) => {
        let parts = item.split('=');
        acc[parts[0]] = decodeURIComponent(parts[1]);
        return acc;
    }, {});

    if (hash.access_token) {
        sessionStorage.setItem('spotify_token', hash.access_token);
        window.history.replaceState({}, document.title, window.location.pathname);
        return hash.access_token;
    }
    return sessionStorage.getItem('spotify_token');
}

// Ambil daftar playlist pengguna
async function getUserPlaylists() {
    const token = getAccessToken();
    if (!token) {
        console.error("Token tidak ditemukan!");
        return;
    }

    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
    });

    if (!response.ok) {
        console.error("Gagal mengambil playlist:", await response.text());
        return;
    }

    const data = await response.json();
    console.log("Playlist:", data);

    const playerDiv = document.getElementById("player");
    playerDiv.innerHTML = data.items.map(playlist => `
        <p>${playlist.name}</p>
        <button onclick="getPlaylistTracks('${playlist.id}')">Lihat Lagu</button>
    `).join("");
}

// Ambil lagu dari playlist yang dipilih
async function getPlaylistTracks(playlistId) {
    const token = getAccessToken();
    if (!token) {
        console.error("Token tidak ditemukan!");
        return;
    }

    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
    });

    if (!response.ok) {
        console.error("Gagal mengambil lagu:", await response.text());
        return;
    }

    const data = await response.json();
    console.log("Lagu:", data);

    const playerDiv = document.getElementById("player");
    playerDiv.innerHTML = data.items.map(track => `
        <p>${track.track.name} - ${track.track.artists.map(a => a.name).join(", ")}</p>
        <button onclick="playSongEmbed('${track.track.uri}')">Putar</button>
    `).join("");
}

// Putar lagu menggunakan Embed Spotify
function playSongEmbed(uri) {
    const embedPlayer = document.getElementById("embed-player");
    embedPlayer.src = `https://open.spotify.com/embed/track/${uri.split(':')[2]}`;
}

// Jalankan fungsi saat halaman selesai dimuat
window.onload = getUserPlaylists;
 