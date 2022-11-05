let url = window.location.href;
let projectID = "no one here by that name!";
leaveonlynumbers(); 
let embedcode = '<iframe src="https://staging.turbowarp.org/'+projectID+'/embed" width="482" height="406" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>'
replaceContentInContainer("guiPlayer", embedcode);

// this wasn't by me, i don't know who made it, but this is one of the most useful javascript functions ever
function leaveonlynumbers() {
    let regex = /\D/g;
    projectID = url.replace(regex, "");
}

// thanks to Randy The Dev on StackOverflow for making this function (i stole it after finding it on a google search)
function replaceContentInContainer(matchClass, content) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) {
            elems[i].innerHTML = content;
        }
    }
}