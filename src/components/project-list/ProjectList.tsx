'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const ProjectList: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  const fetchAllRepos = async () => {
    try {
      const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
      let allRepos: Repo[] = [];
      let page = 1;

      while (true) {
        const response = await axios.get<Repo[]>(
          `https://api.github.com/users/${username}/repos`,
          {
            params: { page, per_page: 100 }, // Solicita até 100 repositórios por página
          }
          
        );
        console.log(response.data)

        // Filtra os repositórios que possuem descrição
        const reposWithDescription = response.data.filter(repo => repo.description);

        if (reposWithDescription.length === 0) break; // Sai do loop se não houver mais repositórios com descrição

        allRepos = [...allRepos, ...reposWithDescription];
        page++;
      }

      setRepos(allRepos);
      setLoading(false);
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        setError('Usuário não encontrado');
      } else {
        setError('Erro ao carregar os repositórios');
      }
      setLoading(false);
    }
  };

  fetchAllRepos();
}, []);

  if (loading) return <p className='text-white'>Carregando...</p>;
  if (error) return <p className='text-red-500'>{error}</p>;

  return (
    <section
      id="projects"
      className="flex flex-col max-sm:justify-end max-sm:pb-8 h-auto min-h-dvh justify-center [&>*]:z-10 text-white"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mt-18">Meus Repositórios no GitHub</h2>
      <ul className="grid grid-cols-1 gap-4 mt-12 height-auto">
        {repos.map((repo) => (
          <li key={repo.id} className="p-4 w-2/4 mx-auto  bg-gray-900 rounded-lg shadow-md ">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg font-medium"
            >
              {repo.name.toUpperCase()}
            </a>
            <p className="text-gray-300 mt-1 text-ssm">{repo.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
