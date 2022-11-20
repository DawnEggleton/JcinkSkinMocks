function postClaims(char) {
    $.ajax({
        url: `https://script.google.com/macros/s/AKfycbyazB9ExMJDak85zdm4Nz0_eGSOQfJnKSTBtCj_ejva-3KBJxUIgFCWHwp8zM2ivjKP/exec`,   
        data: char,
        method: 'POST',
        type: 'POST',
        dataType: "json", 
        async: false,
        success: function () {
            //sendSortRequest(message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('error');
        },
        complete: function () {
            console.log('character added');
        }
    });
}

function formReset(form) {
    $(form).trigger('reset');
    let formObj = document.querySelector(form);
    formObj.querySelectorAll('.ifStudent, .ifCore, .ifStart, .ifElec, .ifUpper, .ifLeadershipPossible, .ifHogwartsQuidditch, .ifLeadership, .ifAdult, .ifJob, .ifUni, .ifCanon, .ifReturn').forEach(field => field.classList.add('hide'));
    formObj.querySelectorAll('input[name="sort-absp"]').forEach(box => box.checked = false);
}

function sendDiscordMessage(webhook, message, embedTitle, notification = null, color = null) {
    const request = new XMLHttpRequest();
    request.open("POST", webhook);

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
  	"content": notification,
	  "embeds": [
	    {
	      "title": embedTitle,
	      "description": message,
	      "color": color
	    }
	  ],
	  "attachments": []
	};

    request.send(JSON.stringify(params));
}