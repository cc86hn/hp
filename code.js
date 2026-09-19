function showDirections(url) {
    newwindow = window.open(url, 'name', 'height=480px,width=632px');
    if (window.focus) { newwindow.focus() }
    return false;
}