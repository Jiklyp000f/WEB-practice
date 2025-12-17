const imageUrls = [
    'https://otvet.cdn-vk.net/api/pictures/images/4ba11f583ec5fa1e234de222406fc0cf044d996c7869395cffdcf5b35624368d49da6c3c811fc5f8072a30a3b562b775.jpg?size=origin',
    'https://i.pinimg.com/originals/5d/e2/42/5de24294bad21ec99931f4c362354f22.jpg',
    'https://img.freepik.com/free-photo/black-cat-crossing-neon-city-street_23-2152005296.jpg?semt=ais_hybrid&w=740&q=80',
    'https://avatars.mds.yandex.net/i?id=9a486c19a8887e58a889f8189892ced0-4565632-images-thumbs&n=13',
    'https://i.pinimg.com/originals/bc/ce/da/bcceda4a71ca88936fe06ee871d1453b.jpg'
];

let currentImageIndex = 0;

const currentImageElement = document.getElementById('currentImage');
const changeImageButton = document.getElementById('changeImageButton');
const imageCounterElement = document.getElementById('imageCounter');

function updateImage() {
    currentImageElement.src = imageUrls[currentImageIndex];
    imageCounterElement.textContent = currentImageIndex + 1;
}

function changeImage() {
    currentImageIndex++;
    
    if (currentImageIndex >= imageUrls.length) {
        currentImageIndex = 0; 
    }
    
    updateImage();
}

changeImageButton.onclick = changeImage;

updateImage();