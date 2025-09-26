document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');

    // Define los videos con enlaces de YouTube
    const videos = [
        {
            id: 'video1',
            title: 'FCyAT',
            description: 'Conoce las opciones que <a href="https://fcat.uat.edu.mx"> Facultad de Comercio y Administración Tampico</a> ofrece para ti. Conoce los <a href="https://fcat.uat.edu.mx/sites/programestudios/gconocimiento.php">programas de estudio.</a>',
            youtubeUrl: 'https://youtu.be/OCSauN-Y1KM', // <-- Pega aquí el enlace de YouTube
            poster: 'posters/fcyat1.png'
        },
        {
            id: 'video2',
            title: 'FADYCS',
            description: 'Un grupo de jóvenes te da la bienvenida a la <a href="https://fadycs.uat.edu.mx">Facultad de Derecho y Ciencias Sociales</a> y te muestran las bondades de esta facultad. Información para <a href="https://fadycs.uat.edu.mx/admisiones/admision?#aspirantes">Aspirantes.</a>',
            youtubeUrl: '',
            poster: 'posters/fadycs.png'
        },
        {
            id: 'video3',
            title: 'FDYCSV',
            description: 'Crear ciudadanos comprometidos con la responsabilidad social, además los prepara con vocación de justicia.',
            youtubeUrl: '',
            poster: 'posters/FDYCSV.png'
        },
        {
            id: 'video4',
            title: 'FET',
            description: 'Visita la Facultad de Enfermería Tampico, un lugar donde se unen solo los mejores.',
            youtubeUrl: '',
            poster: 'posters/fet.png'
        },
        {
            id: 'video5',
            title: 'UAMMRA',
            description: 'La UAM Reynosa Aztlán transforma tu futuro en las áreas de salud, química, ingeniería, nutrición y criminología.',
            youtubeUrl: '',
            poster: 'posters/uamra.png'
        },
        {
            id: 'video6',
            title: 'FADU',
            description: 'La FADU te prepara para ser un profesional responsable, innovador y creativo.',
            youtubeUrl: '',
            poster: 'posters/fadu.png'
        },
        {
            id: 'video7',
            title: 'FIC',
            description: 'La Facultad de Ingeniería y Ciencias forma líderes en Agronomía, Ciencias Ambientales y Telemática.',
            youtubeUrl: '',
            poster: 'posters/fic.png'
        },
        {
            id: 'video8',
            title: 'FIT',
            description: 'La FIT forma líderes con una clara visión del futuro.',
            youtubeUrl: '',
            poster: 'posters/fit.png'
        },
        {
            id: 'video9',
            title: 'FMM',
            description: 'Innovación y cobertura estatal en la Facultad de Medicina Matamoros.',
            youtubeUrl: '',
            poster: 'posters/fmm.png'
        },
        {
            id: 'video10',
            title: 'FMT',
            description: 'Prestigio y excelencia en la Facultad de Medicina de Tampico.',
            youtubeUrl: '',
            poster: 'posters/fmt.png'
        },
        {
            id: 'video11',
            title: 'UAMRR',
            description: 'Cultura, arte y emprendimiento en UAM Reynosa Rodhe.',
            youtubeUrl: '',
            poster: 'posters/uamrr.png'
        },
        {
            id: 'video12',
            title: 'UATSCDH',
            description: 'Formación profesional en Trabajo Social y Ciencias para el Desarrollo Humano.',
            youtubeUrl: '',
            poster: 'posters/UATSCDH.png'
        },
        {
            id: 'video13',
            title: 'UAMM',
            description: 'Alcanza tu máximo potencial en UAM Mante.',
            youtubeUrl: '',
            poster: 'posters/uamm.png'
        },
        {
            id: 'video14',
            title: 'UAM Matamoros',
            description: 'Más de 60 años de experiencia en la UAM Matamoros.',
            youtubeUrl: '',
            poster: 'posters/uammoros.png'
        },
        {
            id: 'video15',
            title: 'FEV',
            description: 'Responsabilidad social y formación sólida en la Facultad de Enfermería Victoria.',
            youtubeUrl: '',
            poster: 'posters/FEV.png'
        },
        {
            id: 'video16',
            title: 'UAMRB',
            description: 'Excelencia académica en la UAM Río Bravo.',
            youtubeUrl: '',
            poster: 'posters/uamrb.png'
        },
        {
            id: 'video17',
            title: 'UAMVH',
            description: 'Innovación y modernidad en la UAM Valle Hermoso.',
            youtubeUrl: '',
            poster: 'posters/uamvh.png'
        },
    ];

    function renderVideos() {
        videoContainer.innerHTML = '';
        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.dataset.videoId = video.id;

            videoItem.innerHTML = `
                <img src="${video.poster}" alt="${video.title}">
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
            `;
            videoContainer.appendChild(videoItem);
        });
    }

    renderVideos();

    // Modal para mostrar video de YouTube
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <div class="video-player">
                <iframe width="100%" height="315" src="" frameborder="0" allowfullscreen></iframe>
            </div>
            <h2 id="modal-video-title"></h2>
            <p id="modal-video-description"></p>
        </div>
    `;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-button');
    const modalIframe = modal.querySelector('iframe');
    const modalVideoTitle = modal.querySelector('#modal-video-title');
    const modalVideoDescription = modal.querySelector('#modal-video-description');

    videoContainer.addEventListener('click', (event) => {
        const clickedItem = event.target.closest('.video-item');
        if (clickedItem) {
            const videoId = clickedItem.dataset.videoId;
            const selectedVideo = videos.find(v => v.id === videoId);

            if (selectedVideo) {
                // Convertir URL de YouTube a formato embed
                const embedUrl = selectedVideo.youtubeUrl.replace("watch?v=", "embed/");
                modalIframe.src = embedUrl;
                modalVideoTitle.textContent = selectedVideo.title;
                modalVideoDescription.innerHTML = selectedVideo.description;
                modal.style.display = 'flex';
            }
        }
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        modalIframe.src = ''; // Limpiar el iframe
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalIframe.src = '';
        }
    });

    // Búsqueda
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    function filterVideos() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredVideos = videos.filter(video =>
            video.title.toLowerCase().includes(searchTerm) ||
            video.description.toLowerCase().includes(searchTerm)
        );

        videoContainer.innerHTML = '';
        filteredVideos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.dataset.videoId = video.id;

            videoItem.innerHTML = `
                <img src="${video.poster}" alt="${video.title}">
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
            `;
            videoContainer.appendChild(videoItem);
        });

        if (filteredVideos.length === 0) {
            videoContainer.innerHTML = '<p style="text-align: center; width: 100%;">No se encontraron resultados.</p>';
        }
    }

    searchButton.addEventListener('click', filterVideos);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            filterVideos();
        }
    });
});
