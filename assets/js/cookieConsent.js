function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }
  
  function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }
  
  function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
  
  function hideCookieBanner() {
    document.getElementById('cookieConsentBanner').style.display = 'none';
  }
  
  function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    hideCookieBanner();
  }
  
  function hasConsentedToCookies() {
    return getCookie('cookieConsent') === 'accepted';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('acceptCookiesButton').addEventListener('click', acceptCookies);
  
    if (hasConsentedToCookies()) {
      hideCookieBanner();
    }
  });
  
  const cookieSettingsPopup = document.getElementById('cookieSettingsPopup');
  
  const cookieSettingsLink = document.getElementById('cookieSettingsLink');
  
  const saveSettingsButton = document.getElementById('saveSettingsButton');
  
  function showCookieSettings() {
    cookieSettingsPopup.style.display = 'block';
  }
  
  function saveCookieSettings() {
    const analyticsCheckbox = document.querySelector('input[name="analytics"]');
    const marketingCheckbox = document.querySelector('input[name="marketing"]');
  
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
  
    document.cookie = `analyticsEnabled=${analyticsCheckbox.checked}; expires=${expirationDate.toUTCString()}`;
    document.cookie = `marketingEnabled=${marketingCheckbox.checked}; expires=${expirationDate.toUTCString()}`;
  
    cookieSettingsPopup.style.display = 'none';
  }
  
  cookieSettingsLink.addEventListener('click', showCookieSettings);
  
  saveSettingsButton.addEventListener('click', saveCookieSettings);
  