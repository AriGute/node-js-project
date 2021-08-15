$(document).ready(function () {

    $('#postForm').on('submit', function () {
        let newPost = $('form input');
        const post = {
            item: newPost.val()
        };
        $.ajax({
            type: 'POST',
            data: post,
            success: function (posts) {
                location.reload();
            }
        });
        return false;
    });
    $('li').on('click', function () {
        const item = $(this).text().replace(/ /g, '-');
        $.ajax({
            type: 'DELETE',
            url: '/home/'+item,
            success: function (posts) {
                location.reload();
            }
        });
    });

});