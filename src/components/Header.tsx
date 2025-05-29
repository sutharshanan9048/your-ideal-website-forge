
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-white font-bold text-xl">Clerk</div>
            <nav className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Product
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Changelog</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Company
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">Sign in</button>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg transition-all duration-200">
              Start building
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
