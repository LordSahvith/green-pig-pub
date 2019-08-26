var token = '4647186609.1677ed0.e53d7460a800417782d142d93108188d',
  num_photos = 6,
  instaImage = [];

function instafeed(hashtag) {
  $.ajax({
    url: 'https://api.instagram.com/v1/tags/grimreaper/media/recent',
    // url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
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
// https://api.instagram.com/oauth/authorize/?client_id=61d046dd6fdc4872811e51db5b2a7c2a&redirect_uri=https://rudrastyh.com/tools/access-token&response_type=code
// http://rudrastyh.com/tools/access-token?code=f2fc54391ffe4084915870ef83be1e6a
// https://api.instagram.com/oauth/authorize/?client_id=61d046dd6fdc4872811e51db5b2a7c2a&redirect_uri=https://rudrastyh.com/tools/access-token&response_type=token

// curl -F 'client_id=61d046dd6fdc4872811e51db5b2a7c2a' \ -F 'client_secret=9eeee6e0954b4d08bf91cac6c7bab8c7 ' \ -F 'grant_type=authorization_code' \ -F 'redirect_uri=http://rudrastyh.com/tools/access-token' \ -F 'code=0e0fb2993f574aa2abd0d34cf1990e48' \ https:///api.instagram.com//oauth//access_token