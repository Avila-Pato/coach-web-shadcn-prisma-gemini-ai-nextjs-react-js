import { LoaderCircle } from "lucide-react";
import { Suspense } from "react";

export default function Layout({ children }) {
    return (
        <div className="px-5">
            <div className="flex items-center justify-between  mb-5">
                <h1 className="text-6xl font-bold gradient-title">Persprectivas de la industria</h1>
            </div>
            <Suspense
            fallback={<LoaderCircle className="mt-4" width={"100%"} color="gray" /> }
            >    
            {children}
            </Suspense>
        </div>
    )
}