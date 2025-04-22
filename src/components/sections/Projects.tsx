import React, { useState } from 'react';
import { projects } from '../../data/projects';
import Modal from '../UI/Modal';
import { ExternalLink, Code, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const getSelectedProject = () => {
    return projects.find((project) => project.id === selectedProjectId) || null;
  };

  const handleOpenModal = (id: string) => {
    setSelectedProjectId(id);
  };

  const handleCloseModal = () => {
    setSelectedProjectId(null);
  };

  const selectedProject = getSelectedProject();

  return (
    <section id="projects" className="section bg-dark-800 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16 glitch text-neon-green"
          data-text="Featured Projects"
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group"
              data-tilt
            >
              <div className="relative overflow-hidden rounded-md mb-4 bg-dark-900 aspect-video flex items-center justify-center">
                <div className="flex items-center justify-center h-full w-full transition-transform group-hover:scale-110">
                  <span className="font-orbitron text-5xl text-neon-green/30">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleOpenModal(project.id)}
                      className="bg-neon-green/20 p-2 rounded-full text-neon-green hover:bg-neon-green hover:text-black transition-colors"
                      aria-label={`View details for ${project.title}`}
                    >
                      <Eye size={20} />
                    </button>

                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-neon-green/20 p-2 rounded-full text-neon-green hover:bg-neon-green hover:text-black transition-colors"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <Code size={20} />
                      </a>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-neon-green/20 p-2 rounded-full text-neon-green hover:bg-neon-green hover:text-black transition-colors"
                        aria-label={`Visit live site of ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-neon-green/10 text-neon-green rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleOpenModal(project.id)}
                className="text-neon-green hover:text-neon-pink transition-colors text-sm font-orbitron flex items-center"
              >
                View Details <Eye size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={!!selectedProjectId}
          title={selectedProject.title}
          content={selectedProject.fullDescription}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Projects;
