const btnListIcon = document.querySelector('.btnListIcon');
        const contListEp = document.querySelector('.rowListEpisodes');

        btnListIcon.addEventListener('click', () => {
            contListEp.classList.toggle("active");
        });
       
        const urlParams = new URLSearchParams(window.location.search);
        const nameParam = urlParams.get('nameAnime');

        // console.log(nameParam);
        // console.log(imgParam);
        // console.log(idParam);

        const imgAnime = document.querySelector('.colProfile img');
        const titleAnime = document.querySelector('.containerSearchLetter h2');

        // console.log(animesCollections);
        const s1 = document.querySelector('.s1');
        const s2 = document.querySelector('.s2');
        const s3 = document.querySelector('.s3');
        const s4 = document.querySelector('.s4');
        const s5 = document.querySelector('.s5');
        const s6 = document.querySelector('.s6');
        const s7 = document.querySelector('.s7');
        const s8 = document.querySelector('.s8');
        const s9 = document.querySelector('.s9');
        const s10 = document.querySelector('.s10');
        const s11 = document.querySelector('.s11');
        const p_DescriptionAnime = document.querySelector('.containerDescriptionAnimeProfile p');

        animesCollections.filter(anime => {
            if(anime.name === nameParam){
                titleAnime.innerHTML = anime.name;
                imgAnime.src = `Assets/${anime.image_url}`;  
                p_DescriptionAnime.textContent = anime.description;  
                s2.textContent = anime.category;
                s3.textContent = anime.author;
                s6.textContent = anime.episodesType;
                s7.textContent = anime.qntEpisodes;
                s11.textContent = anime.year;           
            }
        });

        const rowListEpisodes = document.querySelector('.rowListEpisodes');
        const containerComentarios = document.querySelector('.containerComentarios');

        animesCollections.filter(anime => {

            if(anime.name === nameParam){                

                anime.episodes.forEach(episode => {

                    createEpList(episode);

                });
                anime.comments.forEach(comment => {
                    
                    createComments(comment);
                    
                    
                    comment.subComments.forEach(subComment => {
                    
                        createSubComments(subComment);          
                    
                    });
                    
                });               
                

            }

        });

function createEpList(episode) {
    const colEpisode = document.createElement('div');
    const aColEp = document.createElement('a');
    const spanColEp = document.createElement('span');

    colEpisode.classList = "colEpisode";

    aColEp.innerHTML = `${episode.nameEp}` ;
    spanColEp.innerHTML = `${episode.idEpisode}` ;

    colEpisode.appendChild(aColEp);
    aColEp.appendChild(spanColEp);

    rowListEpisodes.appendChild(colEpisode);
}

 function createComments(comment){
    const rowComentario = document.createElement('div');                    
    const colAvatarComment = document.createElement('div');
    const imgAvatarComment = document.createElement('img');

    colAvatarComment.classList = "colAvatarComment";
    rowComentario.classList = "rowComentario";

    const containerCommet = document.createElement('div');
    const contentAvatarComment = document.createElement('div');

    containerCommet.classList = "containerCommet";
    contentAvatarComment.classList = "contentAvatarComment";

    const h3AvatarComment = document.createElement('h3');
    const spanAvatarComment = document.createElement('span');
    const span2AvatarComment = document.createElement('span');
    const aSpanAvatarComment = document.createElement('a');
    const pAvatarComment = document.createElement('p');


    imgAvatarComment.src = 'https://secure.gravatar.com/avatar/1769e0458eb3432262f56393ee0be422?s=48&d=mm&r=g';
    h3AvatarComment.textContent = comment.nameUser;
    spanAvatarComment.textContent = comment.dataComment;
    aSpanAvatarComment.textContent = 'Responder';
    pAvatarComment.textContent = comment.message;


    span2AvatarComment.appendChild(aSpanAvatarComment);
    h3AvatarComment.appendChild(spanAvatarComment);
    h3AvatarComment.appendChild(span2AvatarComment);
    contentAvatarComment.appendChild(h3AvatarComment);
    contentAvatarComment.appendChild(pAvatarComment);
    containerCommet.appendChild(contentAvatarComment);
    colAvatarComment.appendChild(imgAvatarComment);
    rowComentario.appendChild(colAvatarComment);
    rowComentario.appendChild(containerCommet);
    containerComentarios.appendChild(rowComentario);  
 }       


function createSubComments(subComment){
    const rowSubComentario = document.createElement('div');                    
    const scolAvatarComment = document.createElement('div');
    const simgAvatarComment = document.createElement('img');

    scolAvatarComment.classList = "colAvatarComment";
    rowSubComentario.classList = "rowSubComentario";

    const scontainerCommet = document.createElement('div');
    const scontentAvatarComment = document.createElement('div');

    scontainerCommet.classList = "containerCommet";
    scontentAvatarComment.classList = "contentAvatarComment";

    const sh3AvatarComment = document.createElement('h3');
    const sspanAvatarComment = document.createElement('span');
    const spAvatarComment = document.createElement('p');


    simgAvatarComment.src = 'https://secure.gravatar.com/avatar/1769e0458eb3432262f56393ee0be422?s=48&d=mm&r=g';
    sh3AvatarComment.textContent = subComment.subNameUser;
    sspanAvatarComment.textContent = subComment.subDataComment;
    spAvatarComment.textContent = subComment.subMessage;


    sh3AvatarComment.appendChild(sspanAvatarComment);
    scontentAvatarComment.appendChild(sh3AvatarComment);
    scontentAvatarComment.appendChild(spAvatarComment);
    scontainerCommet.appendChild(scontentAvatarComment);
    scolAvatarComment.appendChild(simgAvatarComment);
    rowSubComentario.appendChild(scolAvatarComment);
    rowSubComentario.appendChild(scontainerCommet);
    containerComentarios.appendChild(rowSubComentario); 
}




