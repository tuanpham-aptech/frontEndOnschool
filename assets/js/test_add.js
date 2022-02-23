$(document).ready(function() {
    $('#add_new').click(function(e) {
        e.preventDefault();
        let arrayItems = [
            'masv',
            'mahoso',
            'fullname',
            'gender',
            'surname',
            'birthdate',
            'birthplace',
            'email',
            'phone'
        ];
        var i = checkValueInput(arrayItems);
        var mahoso = $('#mahoso').val();
        var masv = $('#masv').val();
        var fullname = $('#fullname').val();
        var gender = $('#gender').val();
        var surname = $('#surname').val();
        var birthdate = $('#birthdate').val();
        var birthplace = $('#birthplace').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var religion = $('#religion').val();
        var status = $('#status').val();
        var ethnic = $('#ethnic').val();
        var citizenID = $('#citizenID').val();
        var dateRange = $('#date-range').val();
        var placeIssue = $('#place-issue').val();
        var address = $('#address').val();
        var note = $('#note').val();
        // console.log(i)
        showMessageIndividualPhone(phone);
        showMessageIndividualEmail(email);
        if (i == 0 && isEmail(email) && isPhone(phone)) {
            console.log({
                mahoso,
                masv,
                fullname,
                gender,
                surname,
                birthdate,
                birthplace,
                religion,
                status,
                ethnic,
                citizenID,
                dateRange,
                placeIssue,
                address,
                note
            });
        }
    })
    $("#button-cancle").click(function(e) {
        e.preventDefault();
        console.log("cancle");
    });

    let showMessageIndividualEmail = (email) => {
        if (!(isEmail(email))) {
            $('#form_message-email').text('Vui lòng nhập đúng định dạng email');
            $('#form_message-email').addClass('error');
        } else {
            $('#form_message-email').text('');
            $('#form_message-email').removeClass('error');
        }
    }

    let showMessageIndividualPhone = (phone) => {
        if (!isPhone(phone)) {
            $('#form_message-phone').text('Vui lòng nhập đúng định dạng điện thoại');
            $('#form_message-phone').addClass('error');
        } else {
            $('#form_message-phone').text('');
            $('#form_message-phone').removeClass('error');
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

    let isPhone = (phone) => {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phoneno.test(phone)) {
            return true;
        }
        return false;
    }

    let isEmail = (value) => {
        var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (EmailRegex.test(value)) {
            return true;
        }
        return false;
    }
})