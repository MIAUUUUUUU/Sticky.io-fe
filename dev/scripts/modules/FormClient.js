import $ from "jquery";

const $form = $('#form-client');

function getInputs($form) {
    return $form.find("[name]");    
}

function getSerializedObject($inputs) {
    let data = {};
    $inputs.each((i, input) => {
        let $input = $(input);
        if($input.is(':visible')) {
            let key = $input.attr('name');
            let val  = $input.val();
            data[key] = val;
        }
    });
    return data;
}

function getUrl($checkbox) {
    if($checkbox.is(':checked')) {
        return "http://miaucore.azurewebsites.net/api/Investor";
    } else {
        return "http://miaucore.azurewebsites.net/api/Client";
    }
}

function bindEvents() {
    $form.on('submit', ev => {
        ev.preventDefault();
        let inputs = getInputs($form);
        let data = getSerializedObject(inputs);
        let url = getUrl($form.find('#flipswitch'));
        sendPost(url, data, $form);
    });
    
    $('#flipswitch').on('change', ev => {
        if($('#flipswitch').is(':checked')) {
            $('[data-investor]').show();
            $('[data-client]').hide();
            $('[data-investor]').removeAttr('disabled')
            $('[data-client]').attr('disabled', 'true');
        } else {
            $('[data-client]').show();
            $('[data-investor]').hide();
            $('[data-client]').removeAttr('disabled')
            $('[data-investor]').attr('disabled', 'true');
        }
    });
}

function sendPost(url, data, $form) {
    $.ajax({
        url: url,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: (val) => {
            $form[0].reset();
            alert('Sign in with success!');
            window.location = "/project";    
        },
        error: (val) => {
            alert("Falied to sign in, try again later")
        }
    });
}

export default function init() {    
   bindEvents();
}


// [17:37:55] Mateus Hortencio: http://miaucore.azurewebsites.net/api/Client/Post
// [17:38:08] Mateus Hortencio: http://miaucore.azurewebsites.net/api/Investor/Post

/*[19:23, 9/10/2016] Matheus Avatar: investors'
        public string Company { get; set; }
        public string Telephone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string NERC { get; set; }
        public string Message { get; set; }
        */