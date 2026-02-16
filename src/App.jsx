import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, ChevronUp, Code2, Search, GraduationCap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { allModules } from './data';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const mainRef = useRef(null);
  const topRef = useRef(null);

  // Identifier EN: selectedModule, literal TR: module titles remain TR
  const [selectedModule, setSelectedModule] = useState(() => {
    const saved = localStorage.getItem('lastJavaScriptSectionId');
    return saved ? allModules.find(m => m.id === parseInt(saved)) : null;
  });

  useEffect(() => {
    if (selectedModule) {
      localStorage.setItem('lastJavaScriptSectionId', selectedModule.id);

      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: 'instant', block: 'start' });
      } else if (mainRef.current) {
        mainRef.current.scrollTop = 0;
      }
    }
  }, [selectedModule]);

  const changePage = (module) => {
    setSelectedModule(module);
    setIsSidebarOpen(false);
  };

  const filteredModules = allModules.filter(module =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextPage = () => {
    const currentIndex = allModules.findIndex(m => m.id === selectedModule.id);
    if (currentIndex < allModules.length - 1) changePage(allModules[currentIndex + 1]);
  };

  const previousPage = () => {
    const currentIndex = allModules.findIndex(m => m.id === selectedModule.id);
    if (currentIndex > 0) changePage(allModules[currentIndex - 1]);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col lg:flex-row overflow-hidden font-sans">
      <header className="lg:hidden bg-[#1e293b] border-b border-slate-700 p-4 sticky top-0 z-50 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => changePage(null)}>
          <div className="bg-[#f7df1e] w-8 h-8 rounded flex items-center justify-center">
            <Code2 className="text-black w-5 h-5" strokeWidth={3} />
          </div>
          <span className="font-black text-white text-xs tracking-tighter uppercase">
            JavaScript Eğitim Rehberi
          </span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-[#f7df1e] text-xs font-black uppercase">
          {isSidebarOpen ? 'KAPAT' : 'MENÜ'}
        </button>
      </header>

      <aside className={`fixed lg:sticky top-0 h-screen w-80 bg-[#1e293b] border-r border-slate-700 transform transition-transform duration-300 z-40 flex flex-col shrink-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 flex-1 flex flex-col min-w-0 overflow-hidden">
          <div className="hidden lg:flex flex-col items-center justify-center mb-8 w-full cursor-pointer" onClick={() => changePage(null)}>
            <img src="/src/images/JSlogo.png" alt="JS Logo" className="w-16 h-16 mb-4" />
            <div className="text-center">
              <h1 className="text-xl font-black text-white tracking-[0.2em] leading-none mb-1 uppercase">JAVASCRIPT</h1>
              <span className="text-[9px] text-[#f7df1e] font-bold tracking-[0.3em] uppercase block">REHBERİ</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-3 block border-t border-slate-700/30 pt-2 italic">Yavuz Barış Özgün</span>
            </div>
          </div>


          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="İçerik ara..."
              className="w-full bg-[#0f172a] border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#f7df1e] text-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto scrollbar-hide">
            {filteredModules.map((module) => (
              <button
                key={module.id}
                onClick={() => changePage(module)}
                className={`w-full text-left px-3 py-3 rounded-lg flex items-center justify-between transition-all group ${selectedModule?.id === module.id ? 'bg-[#f7df1e] text-black font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
              >
                <span className="text-[12px] font-bold uppercase tracking-tight leading-tight line-clamp-2">{module.title}</span>
                <ChevronRight size={14} className={`${selectedModule?.id === module.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'} shrink-0 ml-2`} />
              </button>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-700/50 text-center">
            <p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">
              Crafted by <a href="https://github.com/BozgunBer-2506" target="_blank" rel="noopener noreferrer" className="text-[#f7df1e] hover:underline">The_Bozgun</a> 2026
            </p>
          </div>
        </div>
      </aside>

      <main ref={mainRef} className="flex-1 overflow-y-auto h-screen bg-[#0f172a] scrollbar-hide relative">
        <span ref={topRef} className="absolute top-0 left-0 w-px h-px opacity-0 pointer-events-none" />

        {selectedModule ? (
          <div className="p-6 lg:p-12 max-w-4xl mx-auto w-full pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <article className="max-w-none">
              <div className="mb-6 text-[#f7df1e] font-bold tracking-widest text-[10px] uppercase border-l-2 border-[#f7df1e] pl-3">
                MODÜL {String(selectedModule.id).padStart(2, '0')}
              </div>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ children }) => <h1 className="text-2xl lg:text-3xl font-black text-white mt-10 mb-5 tracking-tight">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl lg:text-2xl font-black text-white mt-10 mb-5 border-b border-slate-800 pb-3 tracking-tight">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg lg:text-xl font-bold text-[#f7df1e] mt-6 mb-3 tracking-tight">{children}</h3>,
                  p: ({ children }) => <p className="text-slate-300 leading-relaxed mb-4 text-sm lg:text-[15px]">{children}</p>,
                  li: ({ children }) => <li className="text-slate-300 ml-4 list-disc mb-2 text-sm lg:text-[15px]">{children}</li>,
                  details: ({ children, ...props }) => (
                    <details {...props} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 my-4">
                      {children}
                    </details>
                  ),
                  summary: ({ children, ...props }) => (
                    <summary {...props} className="flex items-center gap-2 cursor-pointer font-bold text-[#f7df1e] list-none hover:opacity-80">
                      <GraduationCap size={16} />
                      {children}
                    </summary>
                  ),
                  code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <div className="w-full overflow-hidden rounded-xl my-6 border border-slate-800 shadow-xl">
                        <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" customStyle={{ margin: 0, padding: '20px', background: '#0d1117', fontSize: '13px' }} {...props}>
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className="bg-slate-800 text-[#f7df1e] px-1.5 py-0.5 rounded text-[12px] font-mono border border-slate-700/50" {...props}>{children}</code>
                    );
                  },
                }}
              >
                {selectedModule.content}
              </ReactMarkdown>
            </article>

            <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center">
              <button
                onClick={previousPage}
                disabled={allModules.findIndex(m => m.id === selectedModule.id) === 0}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-[#f7df1e] disabled:opacity-0 transition-all"
              >
                <ChevronLeft size={16} /> Önceki
              </button>

              <button
                onClick={nextPage}
                disabled={allModules.findIndex(m => m.id === selectedModule.id) === allModules.length - 1}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f7df1e] hover:scale-105 transition-all"
              >
                Sonraki <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 animate-in fade-in duration-700">
            <div className="flex items-center justify-center mb-4 transition-all duration-500">
              <img src="/src/images/JSlogo.png" alt="JS Logo" className="w-48 h-48" />
            </div>
            <h2 className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic opacity-90 leading-none">Hello World</h2>
            <div className="bg-[#1e293b] border border-slate-700/50 px-10 py-8 rounded-3xl shadow-2xl max-w-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#f7df1e]"></div>
              <p className="text-slate-100 text-xl lg:text-3xl font-black tracking-tight mb-2 uppercase">
                JavaScript Eğitim Rehberi
              </p>
              <p className="text-slate-400 text-sm lg:text-base font-medium mt-4">
                <span className="text-[#f7df1e] uppercase tracking-widest font-bold">Menüden</span> bir konu seç ve hemen öğrenmeye başla.
              </p>
            </div>
          </div>
        )}

        {selectedModule && (
          <button
            onClick={() => {
              if (topRef.current) topRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
            className="fixed bottom-6 right-6 bg-[#f7df1e] text-black p-3 rounded-xl shadow-2xl hover:scale-110 transition-all z-50"
          >
            <ChevronUp size={20} strokeWidth={3} />
          </button>
        )}
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
      `}} />
    </div>
  );
}

export default App;
