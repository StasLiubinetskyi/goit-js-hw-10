!function(){var e="live_StFJuQrjrLxUbZHjXuy4xvVkX5F8Glrm5OK6AwPQEf5ETNQZiWPko1KC4BSHcjub";function t(t){return fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(t),{headers:{"x-api-key":e}}).then((function(e){return e.json()})).then((function(e){var t=e[0];return{url:t.url,description:t.breeds[0].description}})).catch((function(e){throw e}))}var n=document.querySelector(".breed-select"),r=document.querySelector(".loader"),c=(document.querySelector(".error"),document.querySelector(".cat-info"));function o(e){t(e).then((function(e){var t=document.createElement("img");t.src=e.url;var r=document.createElement("h3");r.textContent="Breed: ".concat(n.options[n.selectedIndex].text);var o=document.createElement("p");o.textContent="Description: ".concat(e.description),c.innerHTML="",c.appendChild(t),c.appendChild(r),c.appendChild(o)})).catch((function(e){console.error("Error fetching cat info:",e)}))}n.addEventListener("change",(function(){var e=n.value;e&&(r.style.display="block",c.innerHTML="",o(e).finally((function(){r.style.display="none"})))})),fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":e}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw e})).then((function(e){e.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,n.appendChild(t)}))})).catch((function(e){console.error("Error fetching breeds:",e)}))}();
//# sourceMappingURL=index.b8aeb2cd.js.map
