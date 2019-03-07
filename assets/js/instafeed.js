var token = '214739753.b9e73b9.ff450ebee7064505bd8e93a6254c618f',
  num_photos = 6,
  instaImage = [];

function instafeed(hashtag) {
  $.ajax({
    url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: { access_token: token, count: num_photos },
    success: function (data) {
      console.log(data);
      for (x in data.data) {
        instaImage[x] = data.data[x].images.low_resolution.url;
        $('#' + hashtag + x).attr('src', instaImage[x]);
      }
    },
    error: function (data) {
      console.log(data);
    }
  });
}