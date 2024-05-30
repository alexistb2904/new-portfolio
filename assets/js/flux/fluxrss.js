const fluxRSS = fetch("https://corsproxy.io/?" + encodeURIComponent("https://code-garage.fr/blog/rss/"))
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    if (document.querySelector("main").id == "flux-rss") {
      const items = data.querySelectorAll("item");
      let html = `<div class="items-rss">`;
      let articleIndex = 0;
      items.forEach((el) => {
        const item = {};
        item.title = el.getElementsByTagName("title")[0].textContent;
        item.description = el.getElementsByTagName("description")[0].textContent;
        item.link = el.getElementsByTagName("link")[0].textContent;
        item.guid = el.getElementsByTagName("guid")[0].textContent;
        item.categories = Array.from(el.getElementsByTagName("category")).map((category) => category.textContent);
        item.creator = el.getElementsByTagName("dc:creator")[0].textContent;
        item.pubDate = new Date(el.getElementsByTagName("pubDate")[0].textContent);
        item.content = el.getElementsByTagName("content:encoded")[0].textContent;
        item.imageUrl = el.getElementsByTagName("media:content")[0].getAttribute("url");
        html += `
                <a class="item-rss" href="./articles/?article=${articleIndex}" target="_blank">
                    <img src="${item.imageUrl}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </a>
            `;
        articleIndex++;
      });
      html += `</div>`;
      console.log(html);
      document.querySelector("main").innerHTML = html;
    } else if (document.querySelector("main").id == "article-rss") {
      const urlParams = new URLSearchParams(window.location.search);
      const articleToShow = urlParams.get("article");
      console.log(articleToShow);
      if (articleToShow) {
        const items = data.querySelectorAll("item");
        let html = ``;
        let articleIndex = 0;
        let found = false;
        items.forEach((el) => {
          if (articleIndex == articleToShow) {
            let found = true;
            const item = {};
            item.title = el.getElementsByTagName("title")[0].textContent;
            item.description = el.getElementsByTagName("description")[0].textContent;
            item.link = el.getElementsByTagName("link")[0].textContent;
            item.guid = el.getElementsByTagName("guid")[0].textContent;
            item.categories = Array.from(el.getElementsByTagName("category")).map((category) => category.textContent);
            item.creator = el.getElementsByTagName("dc:creator")[0].textContent;
            item.pubDate = new Date(el.getElementsByTagName("pubDate")[0].textContent);
            item.content = el.getElementsByTagName("content:encoded")[0].textContent;
            item.imageUrl = el.getElementsByTagName("media:content")[0].getAttribute("url");
            html += `
                    <h1>${item.title}</h1>
                    <p>${item.description}</p>
                    Date de Publication : ${new Date(item.pubDate).toLocaleDateString()}
                    <br>
                    <br>
                    <div class="image-rss">
                        <img src="${item.imageUrl}" alt="${item.title}">
                    </div>
                    
                    <br>
                    ${item.content
                      .replace(/<p>!!! well<\/p>/g, "<div class='codeblock'>")
                      .replace(/<p>!!!<\/p>/g, "</div>")
                      .replace(/!!! well/g, "<div class='codeblock'>")
                      .replace(/::: playground/g, "<div class='playground'>")
                      .replace(/&quot;/g, '"')
                      .replace(/&lt;/g, "<")
                      .replace(/&gt;/g, ">")
                      .replace(/:::/g, "</div>")
                      .replace(/!!!/g, "</div>")}
                    <div>Créateur : ${item.creator} <br> Lien Originel : ${item.link}</div>
                `;
          }
          articleIndex++;
        });
        if (found) {
          document.querySelector("main").innerHTML = html;
        } else {
          document.querySelector("main").innerHTML = "<h1>Aucun Article Trouvé</h1>";
        }
      } else {
        document.querySelector("main").innerHTML = "<h1>Aucun Article Sélectionné</h1>";
      }
    }
  });
