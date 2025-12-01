import { createContext, useState } from "react";

type Props = {
  categoria: Categoria | undefined;
  setCategoria: React.Dispatch<React.SetStateAction<Categoria | undefined>>;

  filtro: Filtro;
  setFiltro: React.Dispatch<React.SetStateAction<Filtro>>;
};

export const HomeContext = createContext<Props>({} as Props);

export default function HomeProvider({ children }: React.PropsWithChildren) {
  const [categoria, setCategoria] = useState<Categoria>();

  const [filtro, setFiltro] = useState<Filtro>({id: 1, name: "Todos"});

  return (
    <HomeContext.Provider
      value={{ filtro, setFiltro, categoria, setCategoria }}
    >
      {children}
    </HomeContext.Provider>
  );
}
