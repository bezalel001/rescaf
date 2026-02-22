import rescafLogo from '../rescaf-logo.png';

export function Footer() {
  return (
    <footer className="bg-[#0E111A] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src={rescafLogo}
              alt="Rescaf logo"
              className="h-20 w-20 object-contain rounded-[22px]"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 68%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 68%, transparent 100%)',
              }}
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building global tools and infrastructure that turn potential into progress.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} rescaf. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
