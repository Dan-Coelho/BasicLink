import "./style.css";
import logo from "./img/logo.png";
import caixa from "./img/reservatorio.jpg";
import telha from "./img/telhas.jpg";
import impermeabilizante from "./img/impermeabilizante.jpg";
import argamassa from "./img/argamassa.jpg";
import whats from "./img/whatsapp.png";
import marca from "./img/nova_marca.svg";

const number: ImportMetaEnv = import.meta.env.VITE_WHATS_NUMBER;
const numberDev: ImportMetaEnv = import.meta.env.VITE_WHATS_NUMBERDEV;

const whatsappLinkMobile = `https://wa.me/${number}?text=Olá, gostaria de mais informações.`;
const whatsappLinkBrowser = `https://web.whatsapp.com/send?phone=${number}?text=Olá, gostaria de mais informações.`;
const whatsappLinkMobileDev = `https://wa.me/${numberDev}?text=Olá, gostaria de mais informações.`;
const whatsappLinkBrowserDev = `https://web.whatsapp.com/send?phone=${numberDev}?text=Olá, gostaria de mais informações.`;

function isMobile() {
  const userAgent = navigator.userAgent;
  return /android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i.test(
    userAgent
  );
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
      <img src="${logo}" class="logo w-2/5 mx-auto rounded-2xl" alt="Vite logo" width="300" heigth="305"/>
  </div>
    <h1 class="text-center px-7 py-0 mt-6 font-bold text-3xl text-[#032116]" >DEPÓSITO CAMBEBA</h1>
    <h4 class="text-center py-0 text-[#032116] font-bold text-lg">Tudo para sua obra</h4>
    <p class="text-[#032116aa] text-sm font-semibold" >Rua Fausto Aguiar, 572. Cambeba. Fortaleza-CE</p>
    <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Reservatórios</p>
      <img src="${caixa}" class="rounded-md" width="70" height="70" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Telhas</p>
      <img src="${telha}" class="rounded-md" width="70" height="70" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Impermeabilizantes</p>
      <img src="${impermeabilizante}" class="rounded-md" width="70" height="70" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl">
      <p class="text-2xl text-[#cfede2] align-bottom">Argamassas</p>
      <img src="${argamassa}" class="rounded-md" width="70" height="70" />
    </div>
     <div class="w-full h-20 p-4 mt-6 flex justify-between bg-[#032116] rounded-3xl relative">
      <p class="text-2xl text-[#cfede2] align-bottom">Faça seu pedido pelo WhatsAPP</p>
      <a
          href="#"
          target="_blank"
          id="whatsapp-link"
          class="absolute -bottom-8 right-0"
          ><img src="${whats}" alt="link whatsapp" width="70" height="70" class="-p-2"/>
        </a>
    </div>
    <footer class="container flex justify-center w-full h-4 mt-10 bg-[#fa7d20] rounded-2xl relative" >
      <img src="${marca}" alt="desenvolvedor" width="50" height="50"/>
      <a
          href="#"
          target="_blank"
          id="whatsapp-link-dev"
          class="place-items-center"
          ><img src="${whats}" alt="link whatsapp" width="15" height="15"/>
      </a>
    </footer>
  </div>
`;
const whatsappLink: HTMLAnchorElement | null =
  document.querySelector("#whatsapp-link");
const whatsappLinkDev: HTMLAnchorElement | null =
  document.querySelector("#whatsapp-link-dev");

if (whatsappLink) {
  whatsappLink.href = isMobile() ? whatsappLinkMobile : whatsappLinkBrowser;
}
if (whatsappLinkDev) {
  whatsappLinkDev.href = isMobile()
    ? whatsappLinkMobileDev
    : whatsappLinkBrowserDev;
}
