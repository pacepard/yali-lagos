import { Background } from "@/components/custom/background";
import Abouts from "@/components/features-one";


export default function ProgramsPage() {
  return (
    <>
      <Background>
        
        <div className="container flex min-h-[50vh] flex-col items-center justify-center text-center">
          
            {/* Hero Content */}
            <div className="text-center">
              <h1 className="text-6xl sm:text-7xl font-bold mb-6 text-gray-900">
                Our Programs
              </h1>
              <p className="text-xl text-gray-700">
                Welcome to YALI Network Lagos. Where impact is our benchmark

              </p>
            
          </div>
        </div>
         
         <Abouts />
      
      </Background>
    </>
  );
}
