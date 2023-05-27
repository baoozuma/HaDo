            // Dữ liệu của các poster
            var posters = [
                {
                  version: "Version 1",
                  image: "./assets/posters/1.svg",
                  downloadLink: "./assets/posters/1.png"
                },
                {
                  version: "Version 2",
                  image: "./assets/posters/2.svg",
                  downloadLink: "./assets/posters/2.png"
                },
                {
                  version: "Version 3",
                  image: "./assets/posters/3.svg",
                  downloadLink: "./assets/posters/3.png"
                }
              ];
            
              // Hiển thị tất cả các poster
              function displayAllPosters() {
                for (var i = 0; i < posters.length; i++) {
                  var poster = posters[i];
                  var posterElement = document.createElement("div");
                  posterElement.className = "posterItem";
            
                  var versionPosterElement = document.createElement("div");
                  versionPosterElement.className = "posterVersion";
                  versionPosterElement.textContent = poster.version;
                  posterElement.appendChild(versionPosterElement);
            
                  var imageElement = document.createElement("img");
                  imageElement.src = poster.image;
                  posterElement.appendChild(imageElement);
            
                  var downloadLinkElement = document.createElement("div");
                  var linkElement = document.createElement("a");
                  linkElement.href = poster.downloadLink;
                  linkElement.download = "";
                  linkElement.textContent = "Download";
                  downloadLinkElement.appendChild(linkElement);
                  posterElement.appendChild(downloadLinkElement);
            
                  document.getElementById("posterContainer").appendChild(posterElement);
                }
              }
            
              // Hiển thị tất cả các poster khi trang được tải
              displayAllPosters();