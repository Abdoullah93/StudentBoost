let data_txt;
/* get data and call refresh plot when data is initialized */
function get_data(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/pomodoro_get_data.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
    if (xhr.status === 200) {
        data_txt = this.responseText;
        if (data_txt === '0') {
            alert("Non connecté");
        }else{
            refresh_plot2();
        }
    } else {
        console.error('Erreur lors de la requête :', xhr.status);
    }
    };

    xhr.onerror = function () {
    console.error('Erreur de réseau');
    };
    xhr.send();
}


function refresh_plot2(){
    var data_json = JSON.parse(data_txt);
    var data = [];
    // Utilisez un objet pour regrouper les données par nom de session
    var sessionGroups = {};

    for (let i = 0; i < data_json.length; i++) {
        var session = data_json[i];
        var nomSession = session.nom_session;

        // Si la session n'a pas déjà été ajoutée au groupe, initialisez une entrée vide pour elle
        if (!sessionGroups[nomSession]) {
            sessionGroups[nomSession] = {
                x: [],
                y: [],
                name: nomSession,
                type: 'bar'
            };
        }

        // Ajoutez la date et la durée de la session à l'entrée du groupe
        sessionGroups[nomSession].x.push(session.date_session.split(" ")[0]);
        sessionGroups[nomSession].y.push(session.durée_session);
    }

    // Ajoutez chaque groupe d'entrée à la liste de données finale
    for (let nomSession in sessionGroups) {
        data.push(sessionGroups[nomSession]);
    }

    var layout = {
    title: {
        text:'Votre temps de travail',
        font: {
        family: 'Courier New, monospace',
        size: 24,
        color: '#FFFFFF'
        },
        xref: 'paper',
        x: 0.05,
    },
    xaxis: {
        title: {
        text: 'Dates',
        font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#FFFFFF'
        }
        },
    },
    yaxis: {
        title: {
        text: 'Temps de travail(minutes)',
        font: {
            family: 'Courier New, monospace',
            size: 18,
            color: '#FFFFFF'
        }
        }
    },
    barmode: 'stack',
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
    };
    Plotly.newPlot('myDiv', data, layout);

}