function Check() 
{
	button=document.getElementById('toggle');
	if (button.value == "false") 
	{
		$('body').css('overflow', 'hidden');
		button.value = "true";
	}
	else 
	{
		$('body').css('overflow', 'auto');
		button.value = "false";
	}
};