$(document).ready(function () {
  console.log('jq is working')
  var key

  $.ajax({
    url: '/config',
    dataType: 'json',
    type: 'GET',
    success: function (data) {
      key = data[0].API_KEY
      console.log(key)
      getBlogData()
    },
    error: function (error) {
      console.log(error)
    }
  })

  function getBlogData () {
    $.ajax({
      url: 'https://www.googleapis.com/blogger/v3/blogs/5694525144925559360/posts?key=' + key,
      dataType: 'json',
      type: 'GET',
      success: function (blogData) {
        console.log(blogData)
        for (let i = 0; i < blogData.items.length; i++) {
          $('#container').append('<h3>' + blogData.items[i].title + '</h3>')
          $('#container').append('<br>')
          // $('#container').append('<br>')
          $('#container').append('<p>' + blogData.items[i].content + '</p>')
          $('#container').append('<hr>')

        }
      },
      error: function (error) {
        console.log(error)
      }
    })
  }
})
