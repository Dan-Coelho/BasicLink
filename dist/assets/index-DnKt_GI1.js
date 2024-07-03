(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c="/assets/logo-CgAeAetd.jpg",d="/assets/reservatorio-CMxNKjOY.jpg",p="/assets/telhas-BaSrLgL5.jpg",m="/assets/impermeabilizante-bicl8iJO.jpg",h="/assets/argamassa-DupFPlNW.jpg",r="/assets/whatsapp-DN40VmUO.png",u="/assets/nova_marca-DVFzBxX5.svg",l="5585999954767",i="5585998184974";document.querySelector("#app").innerHTML=`
  <div class="container">
      <img src="${c}" class="logo w-2/5 mx-auto rounded-2xl shadow-2xl" alt="Vite logo" width="200" heigth="205"/>
  </div>
    <h1 class="text-center px-7 py-0 mt-6 font-bold text-3xl text-[#032116]" >DEPÓSITO CAMBEBA</h1>
    <h4 class="text-center py-0 text-[#032116] font-bold text-lg">Tudo para sua obra</h4>
    <p class="text-[#032116aa] text-sm font-semibold" >Rua Fausto Aguiar, 572. Cambeba. Fortaleza-CE</p>
    <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Reservatórios</p>
      <img src="${d}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Telhas</p>
      <img src="${p}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Impermeabilizantes</p>
      <img src="${m}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Argamassas</p>
      <img src="${h}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl relative">
      <p class="text-2xl text-[#cfede2] align-bottom">Faça seu pedido pelo WhatsAPP</p>
      <a
          /* href="https://web.whatsapp.com/send?phone=${l}" */
          href="https://wa.me/${l}?text=Olá, gostaria de mais informações."
          target="_blank"
          class="absolute -bottom-8 right-0"
          ><img src="${r}" alt="link whatsapp" width="70" height="70"/>
        </a>
    </div>
    <footer class="container flex justify-center w-full h-10 mt-10 bg-[#fa7d20] rounded-2xl relative" >
      <img src="${u}" alt="desenvolvedor" width="50" height="50"/>
      <a
          /* href="https://web.whatsapp.com/send?phone=${i}" */
          href="https://wa.me/${i}?text=Olá, gostaria de mais informações."
          target="_blank"
          class="place-items-center"
          ><img src="${r}" alt="link whatsapp" width="15" height="15"/>
      </a>
    </footer>
  </div>
`;
