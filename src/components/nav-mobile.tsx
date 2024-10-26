"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export function NavMobile() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <MenuIcon className="text-primary" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-row items-center gap-4">
          <a href="/" aria-label="Logotipo Econotrapos">
            <img src="/logotipo.png" alt="Logotipo Econotrapos" className="size-20" />
          </a>
          <SheetDescription className="text-primary text-lg">
            Econotrapos
          </SheetDescription>
        </SheetHeader>
        <nav className="py-14">
          <ul className="flex flex-col items-start gap-6">
            <li>
              <a href="/" className="group relative text-primary/85 py-2 hover:text-primary">
                Inicio
                <span className="absolute h-px w-0 group-hover:w-full bg-primary/0 group-hover:bg-primary bottom-0 left-0 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="/productos" className="group relative text-primary/85 py-2 hover:text-primary">
                Productos
                <span className="absolute h-px w-0 group-hover:w-full bg-primary/0 group-hover:bg-primary bottom-0 left-0 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="/como-creamos" className="group relative text-primary/85 py-2 hover:text-primary">
                Como Creamos
                <span className="absolute h-px w-0 group-hover:w-full bg-primary/0 group-hover:bg-primary bottom-0 left-0 transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="/sobre-nosotros" className="group relative text-primary/85 py-2 hover:text-primary">
                Sobre Nosotros
                <span className="absolute h-px w-0 group-hover:w-full bg-primary/0 group-hover:bg-primary bottom-0 left-0 transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>

  )
}
