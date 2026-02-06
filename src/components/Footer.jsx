export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">About</h3>
            <p className="text-gray-400">UbusanHangin Rap Battle showcasing the talent in doing raps.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Videos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; 2026 UbusanHangin Rap Battle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}