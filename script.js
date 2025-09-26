document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');

    // Aquí definirás tus videos locales.
    // Asegúrate de que las rutas a 'src' sean correctas para tus archivos de video.
    // También, las 'poster' son las miniaturas que se mostrarán.
    const videos = [
        {
            id: 'video1',
            title: 'FCyAT',
            description: 'Conoce las opciones que <a href="https://fcat.uat.edu.mx"> Facultad de Comercio y Administración Tampico</a> ofrece para ti. 		Conoce los  <a href="https://fcat.uat.edu.mx/sites/programestudios/gconocimiento.php">programas de estudio.</a>',
            src: '<a href="https://youtu.be/OCSauN-Y1KM>', // Cambia esta ruta a tu video
            poster: 'posters/fcyat1.png' // Cambia esta ruta a tu miniatura
        },
        {
            id: 'video2',
            title: 'FADYCS',
            description: 'Un grupo de jóvenes te da la bienvenida a la <a href="https://fadycs.uat.edu.mx/?fbclid=IwY2xjawMv2TJleHRuA2FlbQIxMABicmlkETF4WTI3VzFiS0tyeDBsWHk0AR4_cWIDCDIc1RPd-auJ1-W_9jYHzYZDVTHYBAkeAqmWwalJZZQ6ma10p4C_9A_aem_fEMupVCgf73nl9GfOTGlBQ"> Facultad de Derecho y Ciencias Sociales</a>  y te muestran las bondades de esta facultad. Información para <a href="https://fadycs.uat.edu.mx/admisiones/admision?#aspirantes">Aspirantes.</a>',
            src: 'videos/DERECHO TAMPICO.mp4',
            poster: 'posters/fadycs.png'
        },
        {
            id: 'video3',
            title: 'FDYCSV',
            description: 'Crear ciudadanos comprometidos con la responsabilidad social, ademas los prepara con vocación de justicia.',
            src: 'videos/DERECHO VICTORIA 1.mp4',
            poster: 'posters/FDYCSV.png'
        },
        {
            id: 'video4',
            title: 'FET',
            description: 'Visita la Facultad de Enfermería Tampico, un lugar donde se unen solo los mejores.',
            src: 'videos/ENFERMERIA TAMPICO 1.mp4',
            poster: 'posters/fet.png'
        },
	{
            id: 'video5',
            title: 'UAMMRA',
            description: 'Con la misión de formar profesionistas con habilidades, actitudes y destrezas en las áreas de la salud, química, ingeniería, nutrición y criminología, la UAM Reynosa Aztlán, transforma tu futuro. ',
            src: 'videos/UAMREYNOSAAZTLAN 1.mp4',
            poster: 'posters/uamra.png'
        },
       
	{
            id: 'video6',
            title: 'FADU',
            description: 'La FADU te prepara para ser un profesional responsable y global, con conocimientos actualizados y alta capacidad innovadora y creativa.',
            src: 'videos/FADU 1.mp4',
            poster: 'posters/fadu.png'
        },
	{
            id: 'video7',
            title: 'FIC',
            description: 'La Facultad de ingeniería y Ciencias, prepara a los líderes del mañana en tres emocionantes carreras, Ingeniero Agrónomo, Ingeniero en Ciencias Ambientales e Ingeniero en Telemática.',
            src: 'videos/FIC 1.mp4',
            poster: 'posters/fic.png'
        },
	{
            id: 'video8',
            title: 'FIT',
            description: 'La Facultad de ingeniería Tampico, es el lugar dónde se construyen nuestros sueños, formando líderes con una clara visión del futuro.',
            src: 'videos/FIT 3.mp4',
            poster: 'posters/fit.png'
        },
	{
            id: 'video9',
            title: 'FMM',
            description: 'La Facultad de Medicina Matamoros, cuenta con más de ochenta programas académicos innovadores y tiene cobertura en todo el estado, encuentras el ambiente ideal para crecer y alcanzar tus metas.',
            src: 'videos/MEDICINA MATAMOROS 1.mp4',
            poster: 'posters/fmm.png'
        },
	{
            id: 'video10',
            title: 'FMT',
            description: 'La Facultad de Medicina de Tampico, Dr. Alberto Romo Caballero, cuenta con más de 74 años de prestigio y tradición, esta facultad está lista para recibirte en esta gran comunidad comprometida con la excelencia. ',
            src: 'videos/MEDICINA TAMPICO 1.mp4',
            poster: 'posters/fmt.png'
        },
	{
            id: 'video11',
            title: 'UAMRR',
            description: 'La UAM Reynosa Rodhe, donde la cultura, el arte y el emprendimiento son parte esencial de la formación del universitario, preparándolos para los desafíos del mundo real. ',
            src: 'videos/REYNOSA RODHE 1.mp4',
            poster: 'posters/uamrr.png'
        },
	{
            id: 'video12',
            title: 'UATSCDH',
            description: 'Promocionales de la Unidad Académica de Trabajo Social y Ciencias para el Desarrollo Humano que te invitan a formar parte de su comunidad. ',
            src: 'videos/TS mix1-2.mp4',
            poster: 'posters/UATSCDH.png'
        },
	{
            id: 'video13',
            title: 'UAMM',
            description: 'UAM Mante, el ambiente perfecto para que alcances tu máximo potencial, con docentes destacados en su preparación profesional con el objetivo de que conviertas tu pasión en tu guía. ',
            src: 'videos/UAM MANTE 1.mp4',
            poster: 'posters/uamm.png'
        },
	{
            id: 'video14',
            title: 'UAM Matamoros',
            description: 'Con más de sesenta años de experiencia y docentes altamente capacitados, la Unidad Academica Multidisciplinaria Matamoros UAT, te invita a transformar tu futuro y descubrir tu potencial.',
            src: 'videos/UAM MATAMOROS 1.mp4',
            poster: 'posters/uammoros.png'
        },
	 {
            id: 'video15',
            title: 'FEV',
            description: 'Un profesionista preparado para enfrentar los retos del futuro y con una gran responsabilidad social, es lo que te ofrece la Facultad de Enfermería Victoria',
            src: 'videos/ENFERMERIA VICTORIA 1.mp4',
            poster: 'posters/FEV.png'
        },
	{
            id: 'video16',
            title: 'UAMRB',
            description: 'En la Unidad Académica Multidisciplinaria Rio Bravo, se cultiva la excelencia y es donde cada estudiante encuentra su camino hacia un futuro brillante.',
            src: 'videos/UAM RIO BRAVO 1.mp4',
            poster: 'posters/uamrb.png'
        },
	{
            id: 'video17',
            title: 'UAMVH',
            description: 'La Unidad Académica Multidisciplinaria Valle Hermoso, es sinónimo de modernidad y dónde la innovación se encuentra presente en cada programa educativo.',
            src: 'videos/UAM VH 1.mp4',
            poster: 'posters/uamvh.png'
        },
        // Añade más videos siguiendo el mismo formato
    ];

    function renderVideos() {
        videoContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar
        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.dataset.videoId = video.id; // Guarda el ID para fácil acceso

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

    // Inicializar la carga de videos
    renderVideos();

    // --- Funcionalidad del Modal de Video ---
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <div class="video-player">
                <video controls autoplay></video>
            </div>
            <h2 id="modal-video-title"></h2>
            <p id="modal-video-description"></p>
        </div>
    `;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-button');
    const modalVideoPlayer = modal.querySelector('.video-player video');
    const modalVideoTitle = modal.querySelector('#modal-video-title');
    const modalVideoDescription = modal.querySelector('#modal-video-description');

    // Abrir el modal al hacer clic en un video
    videoContainer.addEventListener('click', (event) => {
        const clickedItem = event.target.closest('.video-item');
        if (clickedItem) {
            const videoId = clickedItem.dataset.videoId;
            const selectedVideo = videos.find(v => v.id === videoId);

            if (selectedVideo) {
                modalVideoPlayer.src = selectedVideo.src;
                modalVideoPlayer.poster = selectedVideo.poster;
                modalVideoTitle.textContent = selectedVideo.title;
                modalVideoDescription.innerHTML = selectedVideo.description;
                modal.style.display = 'flex'; // Mostrar el modal
            }
        }
    });

    // Cerrar el modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        modalVideoPlayer.pause(); // Pausar el video al cerrar
        modalVideoPlayer.currentTime = 0; // Reiniciar el video
    });

    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalVideoPlayer.pause();
            modalVideoPlayer.currentTime = 0;
        }
    });

    // --- Funcionalidad de Búsqueda (Básica) ---
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    function filterVideos() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredVideos = videos.filter(video =>
            video.title.toLowerCase().includes(searchTerm) ||
            video.description.toLowerCase().includes(searchTerm)
        );

        videoContainer.innerHTML = ''; // Limpiar el contenedor
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
