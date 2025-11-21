import React from 'react';
import { Youtube, Briefcase, Heart, ShoppingBag } from 'lucide-react';
import { ServiceDetails, ServiceId } from './types';

// --- IMAGES ---
// ⚠️ IMPORTANTE: Reemplaza esta URL con el link directo de la imagen que acabas de subir.
// Como soy una IA de texto, no puedo alojar el archivo, pero he preparado todo para que funcione
// en cuanto pegues el link aquí abajo.
export const BRAND_IMAGE_URL = "https://i.postimg.cc/6QRxpR03/Whisk-d59077067cf3e668e8449ef6896a0d29dr.jpg"; 

export const BACKGROUND_IMAGE_URL = BRAND_IMAGE_URL; 
export const PROFILE_IMAGE_URL = "https://i.postimg.cc/RZW9gMFk/Imagen-de-Whats-App-2025-11-20-a-las-15-24-49-34b8c736.jpg";

// 3. MUSICA DE FONDO (Loop)
// REEMPLAZA EL LINK DE ABAJO POR EL DE TU CANCION MP3
export const BACKGROUND_MUSIC_URL = "https://soundcloud.com/bandita-del-cerro/la-bandita-del-cerro"; 

// --- TEXTS ---
export const BRAND_NAME = "GRAN PATAS NEGRAS";
export const SLOGAN_TEXT = "Un gran abrazo por atrás...";
export const WELCOME_TEXT = ""; // Content removed
export const FOOTER_TEXT = "© 2025 Patas Negras. Todos los derechos reservados.";

// --- SERVICES DATA ---
export const SERVICES_DATA: Record<ServiceId, ServiceDetails> = {
  saludos: {
    title: "SALUDOS PERSONALIZADOS",
    subtitle: "VIDEO DEDICADO",
    description: `Hola Weones

Los saludos que subo al perfil se me ocurren a mi (me salen de la raja), y algunos que logro escoger de todos los que me piden y los seguiré haciendo pariente.

Esta opción es por si quieres Webiar o Molestar a alguien, Felicitarlo o simplemente saludar de manera personalizada con lo que tu quieras y el toque del Gran Patas Negras (Un Caballero).

¿Webiamos o Felicitamos a Alguien hijo de la Diuca?`,
    buttons: [
      { text: "Saludo: 8s - $2.390", url: "https://mpago.la/1q16svx" },
      { text: "Saludo: 16segundos - $3.390", url: "https://mpago.la/2g2F9AV" }
    ],
    bottomText: "ME MANDAS EL MENSAJE A MI DM Y EL COMPROBANTE MI AMOR..."
  },
  colabs: {
    title: "COLABS / NEGOCIOS",
    subtitle: "TRABAJEMOS JUNTOS",
    description: `¿Tienes un negocio, empresa o emprendimiento y te gustaría crear algo diferente, dinámico y entretenido? 🚀
Ofrezco servicios de:
• Creación de contenido 
• Embajador de marca a largo plazo 
• Promoción de productos y marcas en historias y posts 
Cuéntame tu idea y creemos algo entretnido juntos. ¡Hagamos que tu marca destaque! 
Contáctanos por DM o E-Mail.`,
    buttons: [
      { text: "Conversemos aquí", url: "https://mail.google.com/" }
    ]
  },
  productos: {
    title: "MIS PRODUCTOS",
    subtitle: "TIENDA OFICIAL",
    description: `🧦🔥 ¡AÚN NADA WEÓN, un beso donde no te da la luz por mientras....
🚚 Envíos a todo Chile
📦 Edición limitada. 😎`,
    // Aquí están los 3 cuadros para imagenes.
    gallery: [
      "https://i.postimg.cc/RZW9gMFk/Imagen-de-Whats-App-2025-11-20-a-las-15-24-49-34b8c736.jpg", // La imagen que enviaste
      "https://i.postimg.cc/RZW9gMFk/Imagen-de-Whats-App-2025-11-20-a-las-15-24-49-34b8c736.jpg",
      "https://i.postimg.cc/RZW9gMFk/Imagen-de-Whats-App-2025-11-20-a-las-15-24-49-34b8c736.jpg"
    ],
    priceTag: "Valor: $10.990 + Envío",
    buttons: [
      { text: "Enviame un Mensaje Directo", url: "https://www.instagram.com/direct" }
    ]
  }
};

// --- ICONS MAPPING ---
export const ICONS = {
  Youtube: <Youtube className="h-6 w-6" />,
  Colabs: <Briefcase className="h-6 w-6" />,
  Saludos: <Heart className="h-6 w-6" />,
  Productos: <ShoppingBag className="h-6 w-6" />,
};
