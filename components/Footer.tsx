export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 text-[#66b3ff]">rescaf</div>
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
