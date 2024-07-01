import "./style.css";
import logo from "./img/logo.jpg";
import caixa from "./img/reservatorio.jpg";
import telha from "./img/telhas.jpg";
import impermeabilizante from "./img/impermeabilizante.jpg";
import argamassa from "./img/argamassa.jpg";
import whats from "./img/whatsapp.png";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
      <img src="${logo}" class="logo w-2/5 mx-auto rounded-2xl shadow-2xl" alt="Vite logo" width="200" heigth="205"/>
  </div>
    <h1 class="text-center px-7 py-0 mt-6 font-bold text-3xl text-[#032116]" >DEPÓSITO CAMBEBA</h1>
    <h4 class="text-center py-0 text-[#032116] font-bold text-lg">Tudo para sua obra</h4>
    <p class="text-[#032116aa] text-sm font-semibold" >Rua Fausto Aguiar, 572. Cambeba. Fortaleza-CE</p>
    <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Reservatórios</p>
      <img src="${caixa}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Telhas</p>
      <img src="${telha}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Impermeabilizantes</p>
      <img src="${impermeabilizante}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Argamassas</p>
      <img src="${argamassa}" class="rounded-md" width="100" height="100" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl relative">
      <p class="text-2xl text-[#cfede2] align-bottom">Faça seu pedido pelo WhatsAPP</p>
      <a
          href="https://web.whatsapp.com/send?phone=5585999954767"
          target="_blank"
          class="absolute -bottom-8 right-0"
          ><img src="${whats}" alt="link whatsapp" width="70" height="70"/>
        </a>
    </div>
  </div>
`;
