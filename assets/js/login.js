$(document).ready(function() {
    $('#login_btn').click(function(e) {
        e.preventDefault();
        let arrayItems = [
            'email',
            'password',
        ];
        var i = checkValueInput(arrayItems);
        var email = $('#email').val();
        var password = $('#password').val();
        // console.log(i)
        showMessageIndividualEmail(email);
        if (i == 0 && isEmail(email)) {
            console.log({
                email,
                password,
            });
        }
    })

    let showMessageIndividualEmail = (email) => {
        if (!(isEmail(email))) {
            $('#form_message-email').text('Vui lòng nhập đúng định dạng email');
            $('#form_message-email').addClass('error');
        } else {
            $('#form_message-email').text('');
            $('#form_message-email').removeClass('error');
        }
    }

    var checkValueInput = (arrayItems) => {
        var i = 0;
        arrayItems.map((item) => {
            if ($('#' + item).val() == '') {
                $('#form_message-' + item).text('Vui lòng nhập trường này ');
                $('#form_message-' + item).addClass('error')
                i++;
            } else {
                $('#form_message-' + item).text('');
                $('#form_message-' + item).removeClass('error')
            }
        })
        return i;
    }

    let isEmail = (value) => {
        var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (EmailRegex.test(value)) {
            return true;
        }
        return false;
    }
})