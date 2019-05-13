document.addEventListener("DOMContentLoaded", function(event) {
	var resultsButton = document.getElementById("BackgroundSwitch");
	resultsButton.addEventListener('click', onSwitch);
	if (localStorage.getItem("thelink") == null)
	{
		localStorage.setItem("thelink", "Set Link");
	}
	chrome.runtime.sendMesage({greeting:"OnOff-Get"}, SetSwitch);
	document.getElementById("linkin").value = localStorage.getItem("thelink");
});

function SetSwitch(seter)
{
	if (seter == "true")
	{
		document.querySelector('#checkbox').checked = true;
	}
	else
	{
		document.querySelector('#checkbox').checked = false;
	}
}

function onSwitch()
{
	chrome.runtime.sendMesage({greeting:"OnOff-Set:" + document.querySelector('#checkbox').checked});
	localStorage.setItem("OnOff", document.querySelector('#checkbox').checked);
	if (document.getElementById("linkin") != null)
	{
		localStorage.setItem("thelink", document.getElementById("linkin").value);
	}
}