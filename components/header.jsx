import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from "lucide-react";
import { ModeToggle } from "../components/toggle-mode";
import { checkUser } from "../lib/checkUser";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const Header  = async () => {
  await checkUser();
  // Llama a Clerk (currentUser()) para obtener el usuario que inició sesión.
  // Busca en la DB si existe (db.user.findUnique).
  // Si no existe, lo crea (db.user.create).
  return (
    <header
      className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50
    supports-[backdrop-filter]:bg-background/60"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={600}
            className="h-42 py-2 w-auto object-contain dark:hidden"
          />

          <Image
            src="/darkMode.png"
            alt="logo"
            width={200}
            height={600}
            className="h-42 py-2 w-auto object-contain hidden dark:block"
          />
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href={"/dashboard"} />
            <Button>
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden md:block">Perspectiva Empresariales</span>
              {/* Industry Insights */}
            </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button>
              <StarsIcon className="h-4 w-4"/>
              <span className="hidden md:block">Herramientas de Escalado</span>
              <ChevronDown className="h-4 w-4"/>
              {/* Growth tools */}
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <Link href={"/resume"}  className="flex items-center gap-2">
                 <FileText  className="h-4 w-4" />
                 <span className="hidden md:block">Crear Cv</span>
                 {/* build resume */}
                </Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                 <Link href={"/ai-cover-letter"}  className="flex items-center gap-2">
                 <PenBox  className="h-4 w-4" />
                 <span className="hidden md:block">Carta de Precentacion</span>
                 {/* Cover letter*/}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                 <Link href={"/interview"}  className="flex items-center gap-2">
                 <GraduationCap  className="h-4 w-4" />
                 <span className="hidden md:block">Preparacion para entrevista</span>
                 {/* Interview Prep */}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>
          
      <SignedOut>
        <SignInButton> 
          <Button>
            Sign In
          </Button>
          </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton appearance={{
          elements: {
            avatarBox: "w-10 h-10",
            userButtonPopoverCard: "shadow-xl",
            userPreviewMainIdentifier: "font-semibold"
          }
        }}
        afterSignOutUrl="/"
         />
      </SignedIn>
      <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
