const firstPartLnk = document.getElementById('first-part');
firstPartLnk.addEventListener('click', deviceChecker)

function deviceChecker(event) {
    const userDevice = navigator.userAgent.toLocaleLowerCase();
    const isMobileTablet =
        userDevice.includes('android') ||
        userDevice.includes('webos') ||
        userDevice.includes('iphone') ||
        userDevice.includes('ipad') ||
        userDevice.includes('ipod') ||
        userDevice.includes('mobile');
    if (isMobileTablet) {
        event.preventDefault();
        window.location.href = 'error.html';
    }
}