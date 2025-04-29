import { TextContent } from '@/types/TextContent'

export const data: TextContent[] = [
  {
    description: (
      <ul className="text-gray-700">
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Presidente:</span>
          <br />
          Augusto Gomes Simões Mamede
        </li>
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Secretário:</span>
          <br />
          Álvaro Ferreira Pires
        </li>
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Secretária:</span>
          <br />
          Maria Ângela Lopes da Cruz
        </li>
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Suplente:</span>
          <br />
          Mário Fernandes Oliveira
        </li>
      </ul>
    ),
    id: 1,
    title: 'Assembleia Geral',
  },
  {
    description: (
      <ul className="text-gray-700">
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Presidente:</span>
          <br />
          António Alves Silva Pires
        </li>
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Primeiro Secretário:</span>
          <br />
          Maria Isabel Silva C. Machado Costa
        </li>
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Segundo Secretário:</span>
          <br />
          Graciliano João Melo Ferreira
        </li>
      </ul>
    ),
    id: 2,
    title: 'Direção',
  },
  {
    description: (
      <ul className="text-gray-700">
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Presidente:</span>
          <br />
          Manuel Lindo Cardoso
        </li>
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Vice-presidente:</span>
          <br />
          Carlos Alberto Simões Godinho
        </li>
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Secretário:</span>
          <br />
          Luís Branco da Cruz
        </li>
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Tesoureiro:</span>
          <br />
          Marcolino Ferreira Lopes
        </li>
        <li className="dark:text-foreground mb-4">
          <span className="font-semibold">Vogal:</span>
          <br />
          Nuno Filipe Santos Veiga
        </li>
      </ul>
    ),
    id: 3,
    title: 'Conselho Fiscal',
  },
  {
    description: (
      <ul className="text-gray-700">
        <li className="dark:text-foreground mb-4">
          Hugo Daniel Ferreira Carvalho de Oliveira Rodrigues
        </li>
        <li className="dark:text-foreground mb-4">
          Maria José Ferreira Gonçalves
        </li>
        <li className="dark:text-foreground mb-4">Licínia Silva Matos</li>
        <li className="dark:text-foreground mb-4">Manuel Nascimento Lopes</li>
      </ul>
    ),
    id: 4,
    title: 'Suplentes',
  },
]
