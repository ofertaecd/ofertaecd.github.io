document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');

    // Lista de videos: solo coloca el ID de YouTube
    const videos = [
        {
            id: 'video1',
            title: 'FCyAT',
            description: 'Conoce las opciones que <a href="https://fcat.uat.edu.mx">Facultad de Comercio y Administración Tampico</a> ofrece para ti. Conoce los <a href="https://fcat.uat.edu.mx/sites/programestudios/gconocimiento.php">programas de estudio.</a>',
            videoId: 'OCSauN-Y1KM',
            poster: 'posters/fcyat1.png'
        },
        {
            id: 'video2',
            title: 'FADYCS',
            description: 'Un grupo de jóvenes te da la bienvenida a la <a href="https://fadycs.uat.edu.mx">Facultad de Derecho y Ciencias Sociales</a> y te muestran las bondades de esta facultad. Información para <a href="https://fadycs.uat.edu.mx/admisiones/admision?#aspirantes">Aspirantes.</a>',
            videoId: '',
            poster: 'posters/fadycs.png'
        },
        {
            id: 'video3',
            title: 'FDYCSV',
            description: 'Crear ciudadanos comprometidos con la responsabilidad social, además los prepara con vocación de justicia.',
            videoId: '',
            poster: 'posters/FDYCSV.png'
        },
        {
            id: 'video4',
            title: 'FET',
            description: 'Visita la Facultad de Enfermería Tampico, un lugar donde se unen solo los mejores.',
            videoId: '',
            poster: 'posters/fet.png'
        },
        {
            id: 'video5',
            title: 'UAMMRA',
            description: 'Con la misión de formar profesionistas con habilidades, actitudes y destrezas en las áreas de la salud, química, ingeniería, nutrición y criminología, la UAM Reynosa Aztlán transforma tu futuro.',
            videoId: '',
            poster: 'posters/uamra.png'
        },
        {
            id: 'video6',
            title: 'FADU',
            description: 'La FADU te prepara para ser un profesional responsable y global, con conocimientos actualizados y alta capacidad innovadora y creativa.',
            videoId: '',
            poster: 'posters/fadu.png'
        },
        {
            id: 'video7',
            title: 'FIC',
            description: 'La Facultad de Ingeniería y Ciencias forma a los líderes del mañana en Ingeniero Agrónomo, Ciencias Ambientales e Ingeniero en Telemática.',
            videoId: '',
            poster: 'posters/fic.png'
        },
        {
            id: 'video8',
            title: 'FIT',
            description: 'La Facultad de Ingeniería Tampico es el lugar donde se construyen nuestros sueños, formando líderes con una clara visión del futuro.',
            videoId: '',
            poster: 'posters/fit.png'
        },
        {
            id: 'video9',
            title: 'FMM',
            description: 'La Facultad de Medicina Matamoros, con más de ochenta programas académicos innovadores y cobertura en todo el estado, es el ambiente ideal para crecer y alcanzar tus metas.',
            videoId: '',
            poster: 'posters/fmm.png'
        },
        {
            id: 'video10',
            title: 'FMT',
            description: 'La Facultad de Medicina de Tampico "Dr. Alberto Romo Caballero", con más de 74 años de prestigio y tradición, está lista para recibirte en esta gran comunidad comprometida con la excelencia.',
            videoId: '',
            poster: 'posters/fmt.png'
        },
        {
            id: 'video11',
            title: 'UAMRR',
            description: 'La UAM Reynosa Rodhe, donde la cultura, el arte y el emprendimiento son parte esencial de la formación del universitario, preparándolos para los desafíos del mundo real.',
            videoId: '',
            poster: 'posters/uamrr.png'
        },
        {
            id: 'video12',
            title: 'UATSCDH',
            description: 'Promocionales de la Unidad Académica de Trabajo Social y Ciencias para el Desarrollo Humano que te invitan a formar parte de su comunidad.',
            videoId: '',
            poster: 'posters/UATSCDH.png'
        },
        {
            id: 'video13',
            title: 'UAMM',
            description: 'UAM Mante, el ambiente perfecto para que alcances tu máximo potencial, con docentes destacados en su preparación profesional con el objetivo de que conviertas tu pasión en tu guía.',
            videoId: '',
            poster: 'posters/uamm.png'
        },
        {
            id: 'video14',
            title: 'UAM Matamoros',
            description: 'Con más de sesenta años de experiencia y docentes altamente capacitados, la Unidad Académica Multidisciplinaria Matamoros UAT te invita a transformar tu futuro y descubrir tu potencial.',
            videoId: '',
            poster: 'posters/uammoros.png'
        },
        {
            id: 'video15',
            title: 'FEV',
            description: 'Un profesionista preparado para enfrentar los retos del futuro y con una gran responsabilidad social, es lo que te ofrece la Facultad de Enfermería Victoria.',
            videoId: '',
            poster: 'posters/FEV.png'
        },
        {
            id: 'video16',
            title: 'UAMRB',
            description: 'En la Unidad Académica Multidisciplinaria Río Bravo se cultiva la excelencia, y es donde cada estudiante encuentra su camino hacia un futuro brillante.',
            videoId: '',
            poster: 'posters/uamrb.png'
        },
        {
            id: 'video17',
            title: 'UAMVH',
            description: 'La Unidad Académica Multidisciplinaria Valle Hermoso es sinónimo de modernidad y donde la innovación se encuentra presente en cada programa educativo.',
            videoId: '',
            poster: 'posters/uamvh.png'
        }
    ];
    

    // Renderiza la galería
    function renderVideos() {
        videoContainer.innerHTML = '';
        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.dataset.videoId = video.videoId;

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

    // Modal para mostrar video
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

    // Abrir modal al hacer clic
    videoContainer.addEventListener('click', (event) => {
        const clickedItem = event.target.closest('.video-item');
        if (clickedItem) {
            const videoId = clickedItem.dataset.videoId;
            const selectedVideo = videos.find(v => v.videoId === videoId);

            if (selectedVideo && selectedVideo.videoId) {
                const embedUrl = `https://www.youtube-nocookie.com/embed/${selectedVideo.videoId}`;
                modalIframe.src = embedUrl;
                modalVideoTitle.textContent = selectedVideo.title;
                modalVideoDescription.innerHTML = selectedVideo.description;
                modal.style.display = 'flex';
            }
        }
    });

    // Cerrar modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        modalIframe.src = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
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
            videoItem.dataset.videoId = video.videoId;

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
