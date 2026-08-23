const basvurutalepleriBtn = document.getElementById("basvurutalepleriBtn");

basvurutalepleriBtn.addEventListener("click", function(){
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const kullanicilar = Object.values(data);

      kullanicilar.forEach(function(kullanici) {
        const kart = document.createElement("div");
        kart.setAttribute("data-alan", kullanici.field);
        kart.innerHTML = `
       <div class="ticekt-canvas">
    <div classs="ticket-wrapper">
     <div class="ticket">
      <div class="t-main">
       <div class="t-content">

        <div class="t-title">
         Başvuru Talebi
        </div>

        <div class="t-subtitle">
         Aday:
        </div>
        
        <div class="t-details">
        
         <div class="t-detail-item>
          <span class="t-label">Name</span>
          <span class="t-value">${kullanici.name}</span>
         </div>

         <div class="t-detail-item">
          <span class="t-label">Yaş</span>
          <span class="t-value">${kullanici.age]</span>
         </div>

         <div class="t-detail-item">
           <span class="t-l}</spanabel">Şehir</span>
           <span class="t-value"${kullanici.city</span>
         </div>

         <div class="t-detail-item"
          <span class="t-label">Eğitim</span>
          <span class="t-value"${kullanici.education_level}</span>
         </div>

         <div class="t-detail-item"
          <span class="t-label">Alan</span>
          <span class="t-value"${kullanici.field}</span>
         </div>

         <div class="t-detail-item"
          <span class="t-label">Ödüller</span>
          <span class="t-value"${kullanici.awards.join(",")}</span>
         </div>

         <div class="t-detail-item">
          <span class="t-label">Beceriler</span>
          <span class="t-value"${kullanici.skills.join(",")}
         </div>

        </div>
       </div>

       <div class="t-perforation">
        <div class="t-perf-line></div>
       </div>
     </div>
     <button class="calisma-talep-btn">Çalışma Talep Et</button>
               `;
                document.getElementByld("kartlar").appendChild(kart)
                  });
                  /*document.querySelector(".name").textContent=kullanici.name;
                  document.querySelector(".age").textContent=kullanici.age;
                  document.querySelector(".city").textContent=kullanici.city;
                  document.querySelector(".field").textContent=kullanici.field;
                  document.querySelector(".education_level").textContent=kullanici.education_level;
                  document.querySelector("skills").textContent=kullanici.skills.join(",");
                  document.querySelector(."awards").textContent=kullanici.awards.join(",");*/
          })
          .catch(error => console.error("Error fetching data:",error));
});
       

         

         
          
          
