
document.addEventListener("DOMContentLoaded", function(event) {
	
	var resultsButton = document.getElementById("BackgroundSwitch");
	resultsButton.addEventListener('click', onSwitch);

	try {
		chrome.storage.local.get("thelink");
	} catch (error) {
		InitalSet();
	}
	chrome.storage.local.get("OnOff", GetSwitch);
	chrome.storage.local.get("thelink", SetTexbox);
});

function InitalSet()
{
	chrome.storage.local.set({"thelink":"Set Link"});
}

function GetSwitch(sValue)
{
	document.querySelector('#checkbox').checked = sValue.OnOff;
}

function SetTexbox(sValue)
{
	document.getElementById("linkin").value = sValue.thelink;
}

function onSwitch()
{
	chrome.storage.local.set({"OnOff":document.querySelector('#checkbox').checked});
	if (document.getElementById("linkin") != null)
	{
		chrome.storage.local.set({"thelink":document.getElementById("linkin").value});
	}
}