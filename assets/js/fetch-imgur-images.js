const axios = require('axios');
const fs = require('fs');
const path = require('path');

const clientId = process.env.IMGUR_CLIENT_ID;
const albumId = process.env.IMGUR_ALBUM_ID;
const dataFilePath = path.join(__dirname,'..', '..', '_data', 'imgur-images.json');

const fetchImgurImages = async () => {
  try {
    const response = await axios.get(
      `https://api.imgur.com/3/album/${albumId}/images`,
      {
        headers: { Authorization: `Client-ID ${clientId}` },
      }
    );

    if (response.status === 200 && response.data.success) {
      const images = response.data.data.map((image) => ({
        id: image.id,
        link: image.link,
        width: image.width,
        height: image.height,
        datetime: image.datetime,
      }));
      const newData = JSON.stringify(images, null, 2);

      let oldData = '';
      if (fs.existsSync(dataFilePath)) {
        oldData = fs.readFileSync(dataFilePath, 'utf8');
      }

      if (newData !== oldData) {
        fs.writeFileSync(dataFilePath, newData);
        console.log('Successfully updated imgur-images.json');
      } else {
        console.log('No changes detected in imgur-images.json');
      }
    } else {
      console.error('Failed to fetch images:', response.status);
    }
  } catch (error) {
    console.error('Error fetching images:', error.message);
  }
};

fetchImgurImages();