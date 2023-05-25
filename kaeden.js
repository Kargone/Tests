let panelOpen = true;
document.body.onload = addPanel();

function addPanel() {
    const body = document.getElementById("game_body");
    let new_div = document.createElement("div");
    new_div.style = 'display: block; position: fixed; top: 0px; right: 0px; background-color: black; width: 200px; min-height: 200px; height: fit-content; z-index: 1000; opacity: 0.6; color: rgba(20, 255, 20, 1)';
    new_div.setAttribute('id', 'main_panel');
    body.prepend(new_div);
    addBackButton();
    addTitle();
    for (let title of ['Hi1', 'Hi2', 'Hi3', 'Hi4', 'Hi5', 'Hi6', 'Hi7']) {
        addFolder(title);
    }

    function addBackButton() {
        let panel_back = document.createElement("div");
        panel_back.style = 'display: block !important; position: fixed; top: 0px; right: 0px; background-color: red; width: 10px; height: 10px; z-index: 1001';
        panel_back.setAttribute('id', 'panel_back');
        body.prepend(panel_back);
        document.getElementById("panel_back").addEventListener('click', function () {
            if (panelOpen) document.getElementById("main_panel").style.display = 'none';
            if (!panelOpen) document.getElementById("main_panel").style.display = 'block';
            panelOpen = !panelOpen;
        });
    }
    function addTitle() {
        document.getElementById("main_panel").innerHTML += '<p style="text-align: center; opacity: 1">Shello</p>';
    }
    function addFolder(title) {
        document.getElementById("main_panel").innerHTML += `
            <p id="folder-title-${title}" style="text-align: left; opacity: 1; margin-left: 10px">${title}</p>
            <div id="folder-div-${title}" style="text-align: left; opacity: 1; margin-left: 10px"></div>
        `;
    }
}