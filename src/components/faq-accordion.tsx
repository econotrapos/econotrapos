import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="econotrapos">
        <AccordionTrigger>¿Que es econotrapos?</AccordionTrigger>
        <AccordionContent>
          Econotrapos es una empresa que ofrece trapos reutilizables y sostenibles para la limpieza y el cuidado de su empresa o fabrica.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="variedad">
        <AccordionTrigger>¿Que tamaños y colores hay disponibles?</AccordionTrigger>
        <AccordionContent>
          Ofrecemos varios tamaños y colores para satisfacer sus necesidades.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="contacto">
        <AccordionTrigger>¿Donde puedo comprar econotrapos?</AccordionTrigger>
        <AccordionContent>
          Puedes encontrar nuestros productos a través de nuestro sitio web o en nuestras redes sociales y comprar por whatsapp.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="material">
        <AccordionTrigger>¿De que materiales estan hechos los trapos?</AccordionTrigger>
        <AccordionContent>
          Nuestros trapos están hechos de algodón y poliester reciclado.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="beneficios">
        <AccordionTrigger>¿Cuales son los beneficios de usar econotrapos?</AccordionTrigger>
        <AccordionContent>
          Nuestros trapos son reutilizables, reducen residuos, ahorran agua y son biodegradables.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="envio">
        <AccordionTrigger>¿Cuanto cuesta el envio?</AccordionTrigger>
        <AccordionContent>
          El envío es gratuito para la región metropolitana desde los 25 kilos.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="lavado">
        <AccordionTrigger>¿Como se lavan los trapos?</AccordionTrigger>
        <AccordionContent>
          Los trapos se pueden lavar en agua fría.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="reutilizacion">
        <AccordionTrigger>¿Cuantas veces se puede reutilizar un trapo?</AccordionTrigger>
        <AccordionContent>
          Nustros trapos pueden ser reutilizados más de 10 veces.
        </AccordionContent>
      </AccordionItem>

    </Accordion>

  )
}
