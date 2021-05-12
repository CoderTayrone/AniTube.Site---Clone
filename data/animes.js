const animesCollections = [{
    idAnime: 1,
    name: 'Sentouin Haken',
    description: 'Boku no Hero Academia 5 – Todos os Episódios',
    image_url: 'Sentouin-Hakenshimasu-Todos-os-Episódios-AniTube.jpg',
    category: 'Aventurra, Ação, Magia',
    author: 'Desenconhecido',
    episodesType: 'Legendado',
    qntEpisodes: '12',
    episodes: [{
        idEpisode: 1,
        nameEp: 'Boku no Hero Academia 5 – Todos os Episódios',
        imageUrl_ep: 'Sentouin-Hakenshimasu-Todos-os-Episódios-AniTube.jpg',
        video_url_ep: 'Sentouin.mp4',
        by: 'Kira',
        date: '13/01/2021',
        description_ep: 'Boku no Hero Academia 5 – Todos os Episódios',
        likes: '359',
        comments: [{
            idComment: 1,
            nameUser: 'Tayrone',
            emailUser: 'tayrone.contato@gmail.com',
            message: 'Best Anime',
            dataComment: '28/04/2021',
        }],
    }
],  comments: [{
    nameUser: 'Tayrone',
    emailUser: 'tayrone.contato@gmail.com',
    message: 'Best Anime',
    dataComment: '28/04/2021',
}],
    year: '2021',
    likest: '15402',    
}];
const formComent = document.querySelector('#formComent');
const formName = document.querySelector('#formName');
const formEmail = document.querySelector('#formEmail');
const btnSubmit = document.querySelector('#btnSubmit');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    addComment(formName.value, formEmail.value, formComent.value);
})


function addComment(name, email, message, data = '11/05/2021' ){

 

    animesCollections.comments.push({

        nameUser: name, 
        emailUser: email, 
        message: message, 
        dataComment: data,

    });
    animesCollections.comments.forEach(comment => console.log(comment.nameUser));
    

}