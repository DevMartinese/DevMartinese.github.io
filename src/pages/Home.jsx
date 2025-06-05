import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Vercel Ship',
    year: 2025,
    slug: 'vercel-ship',
    description: 'Partnering with Vercel means pushing the limits of performance and innovation. Together, we craft a digital ecosystem built for speed, precision, and impact.',
    tags: ['Websites & Features', 'Marketing Execution', 'IRL Experience Design'],
    // Aquí podrías poner una imagen o un canvas de preview
  },
  // Puedes agregar más proyectos aquí
];

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col px-6 py-12">
      <h1 className="text-[4rem] md:text-[6rem] font-black leading-none text-white mb-8 tracking-tight">
        Featured Projects
      </h1>
      <div className="border-t border-white/20 w-full mb-8" />
      <div className="w-full flex flex-col gap-24">
        {projects.map((project) => (
          <div key={project.slug} className="grid md:grid-cols-2 gap-12 items-center border border-white/10 bg-black/60 rounded-xl overflow-hidden">
            {/* Preview Canvas o Imagen */}
            <div className="aspect-video bg-black flex items-center justify-center border-r border-white/10 p-8">
              {/* Aquí podrías poner un canvas de R3F o una imagen */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-5xl text-white/10 font-black select-none">▲</span>
              </div>
            </div>
            {/* Info */}
            <div className="flex flex-col h-full justify-between p-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                    {project.name}
                  </h2>
                  <span className="text-2xl md:text-3xl font-black text-white/60 ml-4">
                    {project.year}
                  </span>
                </div>
                <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-xl">
                  {project.description}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-4 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-white text-black font-bold px-4 py-2 rounded text-xs md:text-base uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-block text-lg md:text-xl font-black text-white border-2 border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 