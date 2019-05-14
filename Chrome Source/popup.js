
document.addEventListener("DOMContentLoaded", function(event) {
	InitalSet();
	var resultsButton = document.getElementById("BackgroundSwitch");
	resultsButton.addEventListener('click', onSwitch);
	var text = document.getElementById("linkin");
	text.addEventListener('change', onChange);
	var colourPicker = document.getElementById("colourpicker");
	colourPicker.addEventListener('change', onColourChange);
	chrome.storage.local.get("OnOff", GetSwitch);
	chrome.storage.local.get("thelink", SetTexbox);
	chrome.storage.local.get("colourP", SetColourPicker);
});

function InitalSet()
{
	chrome.storage.local.get("thelink", InitalString);
	chrome.storage.local.get("colourP", InitalColourPicker);
}

function InitalColourPicker(sValue)
{
	if (sValue.colourP == "undefined")
	{
		chrome.storage.local.set({"colourP":"#f907f1"});
	}
}

function InitalString(sValue)
{
	if (sValue.thelink == "undefined")
	{
		chrome.storage.local.set({"thelink":"Set Link"});
	}
}

function GetSwitch(sValue)
{
	document.querySelector('#checkbox').checked = sValue.OnOff;
}

function SetTexbox(sValue)
{
	document.getElementById("linkin").value = sValue.thelink;
}

function SetColourPicker(sValue)
{
	document.getElementById("colourpicker").value = sValue.colourP;
}

function onChange()
{
	var text = document.getElementById("linkin");
	chrome.storage.local.set({"thelink":text.value});
}

function onColourChange()
{
	var colourPicker = document.getElementById("colourpicker");
	chrome.storage.local.set({"colourP":colourPicker.value});
}

function onSwitch()
{
	chrome.storage.local.set({"OnOff":document.querySelector('#checkbox').checked});
	if (document.getElementById("linkin").value != null)
	{
		chrome.storage.local.set({"thelink":document.getElementById("linkin").value});
	}
}