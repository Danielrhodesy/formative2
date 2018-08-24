console.log('js is working')

$.ajax({
  url: '/config',
  dataType: 'json',
  type: 'GET',
  success: function (data) {
    console.log(data)
  },
  error: function (error) {
    console.log(error)
  }
})
$(document).ready(function () {
  console.log('jq is working')
})
