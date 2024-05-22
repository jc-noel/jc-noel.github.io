const axios = require('axios');
const fs = require('fs');

const clientId = process.env.IMGUR_CLIENT_ID;
const albumId = process.env.IMGUR_ALBUM_ID;

const fetchImgurImages = async () => {
  try {
    const response = await axios.get(`https://api.imgur.com/3/album/${albumId}/images`, {
      headers: { Authorization: `Client-ID ${clientId}` }
    });

    if (response.status === 200) {
      const images = response.data.data.map(image => ({ url: image.link }));
      fs.writeFileSync('_data/imgur_images.json', JSON.stringify(images, null, 2));
      console.log('Successfully updated imgur_images.json');
    } else {
      console.error('Failed to fetch images:', response.status);
    }
  } catch (error) {
    console.error('Error fetching images:', error.message);
  }
};

fetchImgurImages();
