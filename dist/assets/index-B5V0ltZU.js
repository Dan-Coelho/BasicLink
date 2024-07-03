(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function h(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=h(e);fetch(e.href,t)}})();const m="/assets/logo-CgAeAetd.jpg",u="/assets/reservatorio-CMxNKjOY.jpg",f="/assets/telhas-BaSrLgL5.jpg",g="/assets/impermeabilizante-bicl8iJO.jpg",x="/assets/argamassa-DupFPlNW.jpg",r="/assets/whatsapp-DN40VmUO.png",w="/assets/nova_marca-DVFzBxX5.svg",c="5585999954767",d="5585998184974",b=`https://wa.me/${c}?text=Olá, gostaria de mais informações.`,v=`https://web.whatsapp.com/send?phone=${c}?text=Olá, gostaria de mais informações.`,y=`https://wa.me/${d}?text=Olá, gostaria de mais informações.`,L=`https://web.whatsapp.com/send?phone=${d}?text=Olá, gostaria de mais informações.`;function p(){const i=navigator.userAgent;return/android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i.test(i)}document.querySelector("#app").innerHTML=`
  <div class="container">
      <img src="${m}" class="logo w-2/5 mx-auto rounded-2xl shadow-2xl" alt="Vite logo" width="200" heigth="205"/>
  </div>
    <h1 class="text-center px-7 py-0 mt-6 font-bold text-3xl text-[#032116]" >DEPÓSITO CAMBEBA</h1>
    <h4 class="text-center py-0 text-[#032116] font-bold text-lg">Tudo para sua obra</h4>
    <p class="text-[#032116aa] text-sm font-semibold" >Rua Fausto Aguiar, 572. Cambeba. Fortaleza-CE</p>
    <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Reservatórios</p>
      <img src="${u}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Telhas</p>
      <img src="${f}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Impermeabilizantes</p>
      <img src="${g}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Argamassas</p>
      <img src="${x}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl relative">
      <p class="text-2xl text-[#cfede2] align-bottom">Faça seu pedido pelo WhatsAPP</p>
      <a
          href="#"
          target="_blank"
          id="whatsapp-link"
          class="absolute -bottom-8 right-0"
          ><img src="${r}" alt="link whatsapp" width="70" height="70" class="-p-2"/>
        </a>
    </div>
    <footer class="container flex justify-center w-full h-10 mt-10 bg-[#fa7d20] rounded-2xl relative" >
      <img src="${w}" alt="desenvolvedor" width="50" height="50"/>
      <a
          href="#"
          target="_blank"
          id="whatsapp-link-dev"
          class="place-items-center"
          ><img src="${r}" alt="link whatsapp" width="15" height="15"/>
      </a>
    </footer>
  </div>
`;const l=document.querySelector("#whatsapp-link"),n=document.querySelector("#whatsapp-link-dev");l&&(l.href=p()?b:v);n&&(n.href=p()?y:L);
