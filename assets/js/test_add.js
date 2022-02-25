$(document).ready(function() {
    // Check Email
    $.validator.addMethod("checkEmail", function(value, element) {
        return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
    }, 'Vui lòng nhập đúng định dạng email.');
    // Check Phone
    $.validator.addMethod("checkPhone", function(value, element) {
        return this.optional(element) || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
    }, 'Vui lòng nhập đúng định dạng điện thoại.');
    //Select Check
    $.validator.addMethod('selectCheck', function(value) {
        return (value != '');
    }, "Vui lòng chọn giới tính ");
    $("#form").validate({
        submitHandler: function(form) {
            console.log($('#form').serializeArray())
        },
        rules: {
            "mahoso": {
                required: true,
                maxlength: 15
            },
            "masv": {
                required: true,
                minlength: 8
            },
            "fullname": {
                required: true,
            },
            "surname": {
                required: true,
            },
            "birthdate": {
                required: true,
            },
            "birthplace": {
                required: true,
            },
            "email": {
                required: true,
                checkEmail: true,
            },
            "phone": {
                checkPhone: true,
                required: true,
            },
            "gender": {
                selectCheck: true,
            }
        },
        messages: {
            "mahoso": {
                required: "Bắt buộc nhập mã hồ sơ",
                minlength: "Hãy nhập tối thiểu 5 ký tự",
            },
            "masv": {
                required: "Bắt buộc nhập mã sinh viên",
                minlength: "Hãy nhập ít nhất 8 ký tự"
            },
            "fullname": {
                required: "Bắt buộc nhập mã sinh viên",
            },
            "surname": {
                required: "Bắt buộc nhập họ đệm",
            },
            "birthdate": {
                required: "Bắt buộc nhập ngày sinh",
            },
            "birthplace": {
                required: "Bắt buộc nhập nơi sinh",
            },
            "email": {
                required: "Bắt buộc nhập email",
            },
            "phone": {
                required: "Bắt buộc nhập số điện thoại",
            },
            "gender": {
                required: "Vui lòng chọn giới tính "
            }
        }
    });
});