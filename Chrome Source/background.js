chrome.runtime.onMessage.addListener(Listen);

function Listen(request, sender, sendResponse)
{
	if (request.greeting == "OnOff-Get")
	{
		sendResponse(localStorage.getItem("OnOff"));
	}
	else if (request.greeting.split(":")[0] == "OnOff-Set")
	{
		localStorage.setItem("OnOff", request.greeting.split(":")[1]);
		sendResponse("Set");
	}
	else if (request.greeting == "URL-Get")
	{
		sendResponse(localStorage.getItem("URL"));
	}
	else if (request.greeting.split(":")[0] == "URL-Set")
	{
		localStorage.setItem("URL", request.greeting.split(":")[1]);
		sendResponse("Set");
	}
}