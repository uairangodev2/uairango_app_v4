declare interface Estabelecimento {
  id_estabelecimento: number;
  nome: string;
  logo: string;
  nota: number;
  categorias: string[];
  delivery: {
    taxa?: number;
    min?: number;
    max?: number;
  };
  min_taxa: number;
}
