export interface BonusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageIndex: number;
}

export interface IndustryExample {
  id: "restaurantes" | "belleza" | "tiendas" | "servicios" | "emprendedores";
  label: string;
  idea: string;
  prompt: string;
  exampleText: string;
  format: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const BONUS_ITEMS: BonusItem[] = [
  {
    id: "bono-1",
    number: "Bono 1",
    title: "20 Plantillas de Publicaciones",
    description: "Modelos para personalizar tus publicaciones.",
    imageIndex: 0,
  },
  {
    id: "bono-2",
    number: "Bono 2",
    title: "Calendario de Fechas Comerciales",
    description: "Fechas e ideas para planificar campañas.",
    imageIndex: 1,
  },
  {
    id: "bono-3",
    number: "Bono 3",
    title: "Checklist de Perfil Profesional",
    description: "Revisa y mejora la presentación de tus perfiles.",
    imageIndex: 2,
  },
  {
    id: "bono-4",
    number: "Bono 4",
    title: "50 Frases para Captar Atención",
    description: "Ideas para títulos, aperturas y llamadas a la acción.",
    imageIndex: 3,
  },
  {
    id: "bono-5",
    number: "Bono 5",
    title: "Control de Resultados",
    description: "Registra y analiza el desempeño de tus publicaciones.",
    imageIndex: 4,
  },
];

export const INDUSTRY_EXAMPLES: IndustryExample[] = [
  {
    id: "restaurantes",
    label: "Restaurantes",
    idea: "Presenta el plato favorito de tus clientes.",
    prompt:
      "Actúa como especialista en contenido para restaurantes. Escribe una publicación breve y cercana para presentar nuestro plato más popular. Incluye una invitación a consultar el menú.",
    exampleText:
      "¿Ya sabes qué vas a comer hoy? Descubre uno de los favoritos de nuestro menú y encuentra tu próxima opción deliciosa.",
    format: "Foto del plato + texto breve + invitación a consultar el menú.",
  },
  {
    id: "belleza",
    label: "Salones de Belleza",
    idea: "Muestra el cuidado detrás de cada cita y explica los beneficios de tu servicio.",
    prompt:
      "Actúa como creador de contenido para un salón de belleza. Redacta una publicación clara y amable sobre nuestro servicio de cuidado capilar, explicando para quién es ideal e invitando a consultar horarios disponibles.",
    exampleText:
      "Un cabello bien cuidado empieza con un diagnóstico personalizado. Conoce nuestro tratamiento hidratante y pregúntanos por los horarios disponibles esta semana.",
    format: "Video corto del proceso o resultado + explicación breve + enlace a citas.",
  },
  {
    id: "tiendas",
    label: "Tiendas",
    idea: "Destaca un producto útil de temporada y muestra cómo combinarlo o aprovecharlo.",
    prompt:
      "Actúa como asistente de comunicación para una tienda minorista. Crea un texto corto y directo para presentar un artículo recién llegado, destacando su uso práctico e invitando a escribir por mensaje para consultar tallas o disponibilidad.",
    exampleText:
      "Recién llegado a tienda: una pieza práctica para el uso diario, pensada para combinar con todo. Escríbenos por mensaje para consultar colores y disponibilidad.",
    format: "Carrusel de 3 fotos del producto + descripción clara + llamado a consultar disponibilidad.",
  },
  {
    id: "servicios",
    label: "Servicios Profesionales",
    idea: "Responde una duda frecuente que tus clientes suelen tener antes de contratarte.",
    prompt:
      "Actúa como redactor para un profesional independiente. Escribe una publicación educativa que responda una pregunta común de nuestros clientes de forma sencilla y sin tecnicismos, cerrando con una invitación a solicitar orientación.",
    exampleText:
      "¿Tienes dudas sobre qué preparar antes de tu primera asesoría? Aquí te compartimos tres puntos clave para aprovechar mejor tu tiempo y tomar decisiones con mayor claridad.",
    format: "Imagen con 3 puntos clave o Reel explicativo de 30 segundos + invitación a consultar.",
  },
  {
    id: "emprendedores",
    label: "Emprendedores",
    idea: "Comparte cómo nació tu proyecto o el proceso detrás de tu trabajo diario.",
    prompt:
      "Actúa como estratega de contenido para pequeños emprendedores. Redacta una publicación cercana contando brevemente cómo preparamos cada pedido y por qué cuidamos cada detalle, invitando a conocer el catálogo.",
    exampleText:
      "Detrás de cada pedido hay tiempo, dedicación y atención al detalle. Conoce cómo trabajamos cada día y descubre lo que tenemos disponible para ti.",
    format: "Foto real del espacio de trabajo + historia breve en 3 líneas + enlace al catálogo.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Necesito experiencia en inteligencia artificial?",
    answer:
      "No. El material está pensado para ayudarte a comenzar con instrucciones y ejemplos prácticos.",
  },
  {
    id: "faq-2",
    question: "¿Puedo usarlo para mi tipo de negocio?",
    answer:
      "Los recursos pueden adaptarse a diferentes negocios. Es importante personalizar las ideas según tus productos, servicios y clientes.",
  },
  {
    id: "faq-3",
    question: "¿El contenido está en español?",
    answer: "Sí. Los materiales del kit están preparados en español.",
  },
  {
    id: "faq-4",
    question: "¿Qué recibiré después de comprar?",
    answer:
      "Recibirás acceso al material digital incluido en tu compra después de la confirmación del pago.",
  },
  {
    id: "faq-5",
    question: "¿Necesito una suscripción paga de ChatGPT?",
    answer:
      "Puedes comenzar con herramientas de IA que ofrecen opciones gratuitas, aunque algunas funciones pueden depender de los límites y condiciones de cada plataforma.",
  },
  {
    id: "faq-6",
    question: "¿Los cinco bonos están incluidos?",
    answer: "Sí. Los cinco bonos anunciados están incluidos en el precio del kit principal.",
  },
  {
    id: "faq-7",
    question: "¿Tengo que comprar los productos adicionales?",
    answer: "No. Los complementos son opcionales.",
  },
  {
    id: "faq-8",
    question: "¿Cómo puedo solicitar ayuda?",
    answer: "Puedes utilizar el canal de soporte indicado en esta página.",
  },
  {
    id: "faq-9",
    question: "¿Cuáles son las condiciones de reembolso?",
    answer: "Consulta las condiciones de reembolso publicadas para esta compra.",
  },
];
