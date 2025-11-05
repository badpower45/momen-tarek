export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-4 md:mb-6 flex justify-center">
            <div className="bg-black rounded-xl md:rounded-2xl p-3 md:p-4 border-2 border-red-600 inline-block">
              <svg width="50" height="50" viewBox="0 0 100 100" fill="none" className="md:w-[60px] md:h-[60px]">
                <text x="50" y="55" fill="#dc2626" fontSize="36" fontWeight="bold" textAnchor="middle">MTR</text>
              </svg>
            </div>
          </div>

          {/* Brand Name */}
          <h3 className="text-xl md:text-2xl mb-1 md:mb-2">TEAM MOMEN TAREK</h3>
          <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">Mixed Martial Arts</p>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-6 md:pt-8">
            <p className="text-gray-500 text-sm md:text-base px-4">
              © 2025 Team Momen Tarek. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
