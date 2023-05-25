//Songs Routes
//Artists Routes
//Genres Routes

async function init() {
   const songs = await fetchAllSongs(); 
   console.log(songs);
   renderSongs(songs);
   console.log(songs);
}

init();

const fetchAllSongs = async () => {
    try {
        const response = await fetch(SONGS_API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function renderSongs(songs) {
    const songContainer = document.querySelector('#song-container');
    songContainer.innerHTML = '';
    songs.forEach((song) => {
        const songElement = renderSong(song);
        songContainer.append(songElement);
    });
    }
    async function addNewSong(song) {
        const response =await fetch('/api/guided-practice/songs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(song),
        });
        const newSong = await response.json();
        return newSong;
        }
    //step 8
