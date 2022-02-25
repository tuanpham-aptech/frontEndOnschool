$(document).ready(function() {
    // Check Email
    $.validator.addMethod("checkEmail", function(value, element) {
        return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
    }, 'Vui lòng nhập đúng định dạng email.');

    $("#login_form").validate({
        submitHandler: function(form) {
            console.log($('#login_form').serializeArray())
        },
        rules: {
            "email": {
                required: true,
                checkEmail: true,
            },
            "password": {
                required: true,
                minlength: 8
            }
        },
        messages: {
            "email": {
                required: "Bắt buộc nhập email",
            },
            "password": {
                required: "Bắt buộc nhập mật khẩu",
                minlength: "Hãy nhập ít nhất 8 ký tự"
            }
        }
    });
});