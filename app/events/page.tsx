import ContactUsSection from "@/components/blocks/contact-us";
import { Background } from "@/components/custom/background";


export default function EventPage() {
  return (
    <>
      <Background>
        
        <div className="pt-20 pb-10 container flex min-h-[50vh] flex-col items-center justify-center text-center">
          
            {/* Hero Content */}
            <div className="text-center">
              <h1 className="text-6xl sm:text-7xl font-bold mb-6 text-gray-900">
                Our Events
              </h1>
              <p className="text-xl text-gray-700">
                 Welcome to YALI Network Lagos. Where impact is our benchmark.
              </p>
            
          </div>
        </div>

        <ContactUsSection />
      </Background>
    </>
  );
}
