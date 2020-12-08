const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const containerGalleryRef = document.querySelector('#gallery');

containerGalleryRef.classList.add('list');
containerGalleryRef.style.display = 'flex';
const createImageRef = image => {
    const listItemRef = document.createElement('li');
    listItemRef.style = "list-style: none"; 
    const imageRef = document.createElement('img');
    listItemRef.append(imageRef);
    imageRef.setAttribute("width", "300");
    imageRef.setAttribute("height", "200");
    imageRef.setAttribute("src", image.url);

    console.log(imageRef);
    return listItemRef;
}

const imagesList = images.map(image => createImageRef(image));
console.log(imagesList);
containerGalleryRef.append(...imagesList);


