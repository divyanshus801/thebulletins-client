
let cacheData = "appV1";

this.addEventListener("install",(event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache)=> {
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/0.chunk.js",
                "/static/js/main.chunk.js",
                "/gtag/js?id=G-M94H84T7LX",
                "/ajax/libs/font-awesome/5.15.1/css/all.min.css",
                "/images/thebulletins.png",
                "/css2?family=Roboto:wght@300&display=swap",
                "/index.html",
                "/"
                
            ])
        })
    )
})

this.addEventListener("fetch",(event) => {
    
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((resp) => {
               if(resp){
                   return resp
               }
               let requestUrl = event.request.clone();
               return fetch(requestUrl);
            })
        )
    }
        
    
 
})