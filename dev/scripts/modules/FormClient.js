import $ from "jquery";

const $form = $('#form-client');

function getInputs($form) {
    return $form.find("[name]");    
}

function getSerializedObject($inputs) {
    let data = {};
    $inputs.each((i, input) => {
        let $input = $(input);
        let key = $input.attr('name');
        let val  = $input.val();
        data[key] = val;
    });
    return data;
}

function getUrl($checkbox) {
    if($checkbox.is(':checked')) {
        return "http://miaucore.azurewebsites.net/api/Investor/Post";
    } else {
        return "http://miaucore.azurewebsites.net/api/Client/Post";
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
}

function sendPost(url, data, $form) {
    $.post(url, data).done(() => {
        $form[0].reset();
        alert('Sign in with success!');
        window.location = "/project";
    }).fail(() => {
        alert('Failed to sign in, try again later');
    });
}

export default function init() {    
   bindEvents();
}


// [17:37:55] Mateus Hortencio: http://miaucore.azurewebsites.net/api/Client/Post
// [17:38:08] Mateus Hortencio: http://miaucore.azurewebsites.net/api/Investor/Post