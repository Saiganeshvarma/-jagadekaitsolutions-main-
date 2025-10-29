
const Clients = () => {
  const clients = [
    {
      name: "BHASHYAM EDUCATIONAL INSTITUTIONS",
      logo: (
        <div className="text-center group">
          <div className="text-2xl font-bold text-red-600 mb-1 group-hover:text-red-700 transition-colors duration-300">BHASHYAM<sup className="text-xs text-gray-500">®</sup></div>
          <div className="text-sm text-white bg-blue-600 px-4 py-1 rounded-sm group-hover:bg-blue-700 transition-colors duration-300">EDUCATIONAL INSTITUTIONS</div>
        </div>
      )
    },
    {
      name: "Sri Chaitanya Educational Institutions",
      logo: (
        <div className="text-center group">
          <div className="flex items-center justify-center mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">Sri Chaitanya</div>
          </div>
          <div className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Educational Institutions</div>
        </div>
      )
    },
    {
      name: "NRI's Indian Springs",
      logo: (
        <div className="text-center group">
          <div className="text-lg font-bold text-blue-600 mb-1 group-hover:text-blue-700 transition-colors duration-300">NRI's</div>
          <div className="text-lg font-bold text-green-600 mb-1 group-hover:text-green-700 transition-colors duration-300" style={{fontFamily: 'cursive'}}>Indian Springs</div>
          <div className="text-xs text-blue-600 mb-1 group-hover:text-blue-700 transition-colors duration-300">LEARN TO LEAD</div>
          <div className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">The School by NRI Educational Society</div>
        </div>
      )
    },
    {
      name: "VARSITY",
      logo: (
        <div className="text-center group">
          <div className="text-2xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">VARSITY</div>
          <div className="w-8 h-8 bg-gray-800 rounded-sm mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="w-5 h-4 bg-gray-800 border-t-2 border-gray-600"></div>
          </div>
        </div>
      )
    },
    {
      name: "VIVEKA EDUCATIONAL SOCIETY TENALI",
      logo: (
        <div className="text-center group">
          <div className="w-24 h-24 border-4 border-red-500 rounded-full mx-auto flex flex-col items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="text-xs font-bold text-red-600 text-center leading-tight group-hover:text-red-700 transition-colors duration-300">VIVEKA EDUCATIONAL SOCIETY</div>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center my-2 group-hover:scale-110 transition-transform duration-300">
              <div className="w-7 h-7 bg-orange-400 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-orange-300 rounded-full"></div>
              </div>
            </div>
            <div className="text-xs font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">TENALI</div>
          </div>
        </div>
      )
    },
    {
      name: "SRI VENKATESWARA BALA KUTEER GUNTUR",
      logo: (
        <div className="text-center group">
          <div className="w-24 h-24 border-4 border-blue-500 rounded-full mx-auto flex flex-col items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="text-xs font-bold text-blue-600 text-center leading-tight group-hover:text-blue-700 transition-colors duration-300">SRI VENKATESWARA BALA KUTEER</div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center my-2 group-hover:scale-110 transition-transform duration-300">
              <div className="w-7 h-7 bg-blue-400 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-blue-300 rounded-full"></div>
              </div>
            </div>
            <div className="text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">GUNTUR</div>
          </div>
        </div>
      )
    },
    {
      name: "MASTER MINDS",
      logo: (
        <div className="text-center group">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="text-lg font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300">MASTER MINDS</div>
          <div className="text-xs text-red-600 group-hover:text-red-700 transition-colors duration-300">CA CMA CS MEC CEC</div>
        </div>
      )
    },
    {
      name: "KALLAM HARANADH REDDY INSTITUTE OF TECHNOLOGY",
      logo: (
        <div className="text-center group">
          <div className="w-24 h-24 border-4 border-blue-500 rounded-full mx-auto flex flex-col items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="text-xs font-bold text-blue-600 text-center leading-tight group-hover:text-blue-700 transition-colors duration-300">KALLAM HARANADH REDDY INSTITUTE OF TECHNOLOGY</div>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center my-2 group-hover:scale-110 transition-transform duration-300">
              <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-orange-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: "SAKKU",
      logo: (
        <div className="text-center group">
          <div className="text-4xl font-bold text-green-600 mb-2 group-hover:text-green-700 group-hover:scale-110 transition-all duration-300">S✓KKU</div>
        </div>
      )
    },
    {
      name: "mohan",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full"></div>
          </div>
          <div className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300" style={{fontFamily: 'cursive'}}>mohan</div>
        </div>
      )
    },
    {
      name: "KALLAM TEXTILES LTD",
      logo: (
        <div className="text-center group">
          <div className="flex items-center justify-center mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="text-white font-bold text-lg">Q</div>
            </div>
            <div className="text-lg font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">KALLAM TEXTILES LTD</div>
          </div>
          <div className="text-xs text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-300">Formerly Known as "KALLAM SPINNING MILLS LTD"</div>
          <div className="text-xs bg-gradient-to-r from-gray-200 to-gray-300 px-3 py-1 rounded-full inline-block group-hover:from-gray-300 group-hover:to-gray-400 transition-all duration-300">ISO 9001:2015 Certified</div>
        </div>
      )
    },
    {
      name: "VINNER PAN FROZEN SHRIMP",
      logo: (
        <div className="text-center bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-xl">
          <div className="text-2xl font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors duration-300">VINNER</div>
          <div className="w-16 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="w-12 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded"></div>
          </div>
          <div className="text-sm text-white group-hover:text-gray-200 transition-colors duration-300">PAN FROZEN SHRIMP</div>
        </div>
      )
    },
    {
      name: "Shawarma Spot",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-full mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full"></div>
          </div>
          <div className="text-lg font-bold text-orange-600 group-hover:text-orange-700 transition-colors duration-300" style={{fontFamily: 'cursive'}}>Shawarma Spot</div>
        </div>
      )
    },
    {
      name: "Vijaydigital",
      logo: (
        <div className="text-center group">
          <div className="text-2xl font-bold text-red-600 mb-2 group-hover:text-red-700 group-hover:scale-110 transition-all duration-300">Vijaydigita<span className="text-blue-500 group-hover:text-blue-600 transition-colors duration-300">l</span></div>
        </div>
      )
    },
    {
      name: "MINISO",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-red-200 rounded"></div>
            </div>
          </div>
          <div className="text-lg font-bold text-white bg-gradient-to-r from-red-500 to-red-600 px-3 py-1 rounded-lg group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">MINIS<span className="text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300">O</span></div>
        </div>
      )
    },
    {
      name: "Bhumitra",
      logo: (
        <div className="text-center group">
          <div className="flex items-center justify-center mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-gradient-to-br from-green-300 to-green-400 rounded-full"></div>
              </div>
            </div>
            <div className="text-lg font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">Bhumitra</div>
          </div>
          <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">... tomorrow should be better</div>
        </div>
      )
    }
  ];

  const partners = [
    {
      name: "CISCO Partner",
      logo: (
        <div className="text-center group">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
              </div>
            </div>
            <div className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">CISCO</div>
          </div>
          <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Partner</div>
        </div>
      )
    },
    {
      name: "FORTINET",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-red-600 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-2xl">F</div>
          </div>
          <div className="text-lg font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">FORTINET</div>
        </div>
      )
    },
    {
      name: "Cyberoam",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>
          <div className="text-lg font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">Cyberoam</div>
        </div>
      )
    },
    {
      name: "UBIQUITI NETWORKS",
      logo: (
        <div className="text-center group">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="text-white font-bold text-xl">U</div>
            </div>
            <div className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">UBIQUITI</div>
          </div>
          <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">NETWORKS</div>
        </div>
      )
    },
    {
      name: "HIKVISION Authorised Distributor",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-red-600 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-xl">H</div>
          </div>
          <div className="text-lg font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">HIKVISION</div>
          <div className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Authorised Distributor</div>
        </div>
      )
    },
    {
      name: "CP PLUS security made simpler",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-red-600 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-sm">CP PLUS</div>
          </div>
          <div className="text-lg font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">CP PLUS</div>
          <div className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">security made simpler</div>
        </div>
      )
    },
    {
      name: "dahua TECHNOLOGY",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-xl">a</div>
          </div>
          <div className="text-lg font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">dahua</div>
          <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">TECHNOLOGY</div>
        </div>
      )
    },
    {
      name: "GRANDSTREAM CONNECTING THE WORLD",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-xl">G</div>
          </div>
          <div className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">GRANDSTREAM</div>
          <div className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">CONNECTING THE WORLD</div>
        </div>
      )
    },
    {
      name: "MATRIX TELECOM | SECURITY",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-xl">M</div>
          </div>
          <div className="text-lg font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">MATRIX</div>
          <div className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">TELECOM | SECURITY</div>
        </div>
      )
    },
    {
      name: "tp-link",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-blue-400 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-sm">tp-link</div>
          </div>
          <div className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">tp-link</div>
        </div>
      )
    },
    {
      name: "L legrand",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-2xl">L</div>
          </div>
          <div className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">legrand</div>
        </div>
      )
    },
    {
      name: "netfox intelligent networks",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-sm">netfox</div>
          </div>
          <div className="text-lg font-bold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">netfox</div>
          <div className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">intelligent networks</div>
        </div>
      )
    },
    {
      name: "D-Link Building Networks for People",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-sm">D-Link</div>
          </div>
          <div className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">D-Link</div>
          <div className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Building Networks for People</div>
        </div>
      )
    },
    {
      name: "eSSL Technology Development Company",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-sm">eSSL</div>
          </div>
          <div className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">eSSL</div>
          <div className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Technology Development Company</div>
        </div>
      )
    },
    {
      name: "HID",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-xl">HID</div>
          </div>
          <div className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">HID</div>
        </div>
      )
    },
    {
      name: "suprema",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-sm">suprema</div>
          </div>
          <div className="text-lg font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">suprema</div>
        </div>
      )
    },
    {
      name: "SEAGATE",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-xl">S</div>
          </div>
          <div className="text-lg font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">SEAGATE</div>
        </div>
      )
    },
    {
      name: "WD Western Digital",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-sm">WD</div>
          </div>
          <div className="text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">WD</div>
          <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Western Digital</div>
        </div>
      )
    },
    {
      name: "Polycom",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-red-600 rounded-full"></div>
            </div>
          </div>
          <div className="text-lg font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">Polycom</div>
        </div>
      )
    },
    {
      name: "MikroTik",
      logo: (
        <div className="text-center group">
          <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white font-bold text-sm">MikroT</div>
          </div>
          <div className="text-lg font-bold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">MikroTik</div>
        </div>
      )
    }
  ];

  return (
    <>
      {/* Clients Section */}
      <section id="clients" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 via-transparent to-blue-100/20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider bg-orange-100 px-4 py-2 rounded-full">
                Our Trusted Clients
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6 font-sans">
              OUR CLIENTS
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed">
              We're proud to work with industry leaders and innovative organizations that trust us to deliver exceptional solutions.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 mb-20">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/50 p-8 flex items-center justify-center min-h-[160px] relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="w-full relative z-10">
                  {client.logo}
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="text-4xl font-bold text-orange-600 mb-2">16+</div>
              <div className="text-gray-600 font-medium">Trusted Clients</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-3xl p-12 border border-white/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Become part of our growing family of satisfied clients and experience the difference that quality service makes.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-lg"
              >
                Join Our Client Family
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-orange-100/20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
                Our Technology Partners
              </span>
            </div>
            {/* Puzzle Piece Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg transform rotate-12 shadow-lg">
                  <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg transform -rotate-12 -ml-4 shadow-lg">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 font-sans">
              OUR PARTNERS
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed">
              We're proud to partner with industry leaders and innovative technology companies that help us deliver exceptional solutions to our clients.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 mb-20">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/50 p-8 flex items-center justify-center min-h-[160px] relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="w-full relative z-10">
                  {partner.logo}
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Trusted Partners</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Partner Satisfaction</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Partner With Us?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our network of trusted technology partners and help us deliver innovative solutions to clients worldwide.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-lg"
              >
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Clients;
