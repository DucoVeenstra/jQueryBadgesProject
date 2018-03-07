$(function() {

  // your code will go here
  var $badges = $('#badges');

  $.ajax({
    url: 'https://www.codeschool.com/users/DV84.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      console.log(response);
      
      response.badges.map((badge) => {
        $div = $(`<div class="course" />`).appendTo($badges);

        $(`<h3>${badge.name}</h3>`).appendTo($div);
        $(`<img src="${badge.badge}"/>`).appendTo($div);
        $(`${badge.course_url ? "<a class='btn btn-primary' href=" + badge.course_url + " target='_blank'>See Course</a>" : ""}`).appendTo($div);
      });
    }
  });
});
