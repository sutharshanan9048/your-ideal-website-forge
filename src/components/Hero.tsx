
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>
      
      {/* Dotted pattern overlay */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-20">
        <div className="grid grid-cols-12 gap-1 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full opacity-30"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Modern Next.js
              <br />
              authentication is an
              <br />
              npm install away
            </h1>
            
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Clerk's components and auth helpers are purpose-built for the Next.js 
              App Router, making it intuitive to protect your pages and endpoints 
              behind a secure interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg transition-all duration-200 text-lg">
                Start building
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-lg transition-all duration-200 text-lg">
                Explore the docs
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl border border-gray-700 overflow-hidden">
                <div className="absolute inset-4 bg-black/50 rounded-xl flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-32 bg-gray-600 rounded"></div>
                      <div className="h-3 w-24 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  <Button 
                    size="icon" 
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full w-10 h-10"
                  >
                    <Play className="w-5 h-5 text-white" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M20,20 Q50,5 80,20 Q95,50 80,80 Q50,95 20,80 Q5,50 20,20" 
                stroke="white" 
                strokeWidth="0.5" 
                fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
