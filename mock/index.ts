import { createServer, Server } from "miragejs";

declare global {
  interface Window {
    server?: Server;
  }
}

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get("/api-v3/categories", (): Categoria[] => {
      return [
        {
          id: 0,
          icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33333 8.66666H12.6667V7.33333H3.33333V8.66666ZM2 11.3333H11.3333V10H2V11.3333ZM4.66667 4.66666V6H14V4.66666H4.66667Z" fill="currentColor"/>
</svg>
`,
          name: "Todos",
          color: "#FF3B00",
        },
        {
          id: 1,
          icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 4V9.33334H12.6667V14.6667H14V1.33334C12.16 1.33334 10.6667 2.82667 10.6667 4ZM7.33333 6H6V1.33334H4.66667V6H3.33333V1.33334H2V6C2 7.47334 3.19333 8.66667 4.66667 8.66667V14.6667H6V8.66667C7.47333 8.66667 8.66667 7.47334 8.66667 6V1.33334H7.33333V6Z" fill="currentColor" fill-opacity="0.75"/>
</svg>
`,
          name: "Restaurantes",
          color: "#FF7200",
        },
        {
          id: 2,
          icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 1.33334L3.34 13.4867C3.42 14.1533 3.98 14.6667 4.66667 14.6667H11.3333C12.02 14.6667 12.58 14.1533 12.66 13.4867L14 1.33334H2ZM11.3333 13.3333L4.66667 13.34L3.92667 6.66667H12.0667L11.3333 13.3333ZM12.22 5.33334H3.78L3.48667 2.66667H12.5067L12.22 5.33334ZM8 12.6667C9.10667 12.6667 10 11.7733 10 10.6667C10 9.33334 8 7.06667 8 7.06667C8 7.06667 6 9.33334 6 10.6667C6 11.7733 6.89333 12.6667 8 12.6667ZM8 9.27334C8.39333 9.88 8.66667 10.4267 8.66667 10.6667C8.66667 11.0333 8.36667 11.3333 8 11.3333C7.63333 11.3333 7.33333 11.0333 7.33333 10.6667C7.33333 10.42 7.60667 9.87334 8 9.27334Z" fill="currentColor" fill-opacity="0.75"/>
</svg>
`,
          name: "Bebidas",
          color: "#B72B2B",
        },
        {
          id: 3,
          icon: `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6667 5.32667H11.4734L8.55341 0.953332C8.42675 0.766666 8.21341 0.673332 8.00008 0.673332C7.78675 0.673332 7.57341 0.766666 7.44675 0.959999L4.52675 5.32667H1.33341C0.966748 5.32667 0.666748 5.62667 0.666748 5.99333C0.666748 6.05333 0.673415 6.11333 0.693415 6.17333L2.38675 12.3533C2.54008 12.9133 3.05341 13.3267 3.66675 13.3267H12.3334C12.9467 13.3267 13.4601 12.9133 13.6201 12.3533L15.3134 6.17333L15.3334 5.99333C15.3334 5.62667 15.0334 5.32667 14.6667 5.32667ZM8.00008 2.52667L9.86675 5.32667H6.13341L8.00008 2.52667ZM12.3334 11.9933L3.67341 12L2.20675 6.66H13.8001L12.3334 11.9933ZM8.00008 7.99333C7.26675 7.99333 6.66675 8.59333 6.66675 9.32667C6.66675 10.06 7.26675 10.66 8.00008 10.66C8.73341 10.66 9.33341 10.06 9.33341 9.32667C9.33341 8.59333 8.73341 7.99333 8.00008 7.99333Z" fill="currentColor" fill-opacity="0.75"/>
</svg>
`,
          name: "Farmácias",
          color: "#5BA2B1",
        },
        {
          id: 4,
          icon: `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6667 5.32667H11.4734L8.55341 0.953332C8.42675 0.766666 8.21341 0.673332 8.00008 0.673332C7.78675 0.673332 7.57341 0.766666 7.44675 0.959999L4.52675 5.32667H1.33341C0.966748 5.32667 0.666748 5.62667 0.666748 5.99333C0.666748 6.05333 0.673415 6.11333 0.693415 6.17333L2.38675 12.3533C2.54008 12.9133 3.05341 13.3267 3.66675 13.3267H12.3334C12.9467 13.3267 13.4601 12.9133 13.6201 12.3533L15.3134 6.17333L15.3334 5.99333C15.3334 5.62667 15.0334 5.32667 14.6667 5.32667ZM8.00008 2.52667L9.86675 5.32667H6.13341L8.00008 2.52667ZM12.3334 11.9933L3.67341 12L2.20675 6.66H13.8001L12.3334 11.9933ZM8.00008 7.99333C7.26675 7.99333 6.66675 8.59333 6.66675 9.32667C6.66675 10.06 7.26675 10.66 8.00008 10.66C8.73341 10.66 9.33341 10.06 9.33341 9.32667C9.33341 8.59333 8.73341 7.99333 8.00008 7.99333Z" fill="currentColor" fill-opacity="0.75"/>
</svg>
`,
          name: "Mercado",
          color: "#929924",
        },
      ];
    });

    this.get("/api-v3/orders/last", () => {
      return [
        {
          id_estabelecimento: 1,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/95b54bf6746f198da685451e74043f8d.png",
          nome: "UaiRango",
        },
        {
          id_estabelecimento: 2,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/9efcf2a3798696667afa2ae617612740.png",
          nome: "Angeloni",
        },
        {
          id_estabelecimento: 3,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/cf40a116aabac8c160f28f6245107bcc.png",
          nome: "Açougue do Zé carvalho de maria",
        },
        {
          id_estabelecimento: 4,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/1c722c63143c0bbd43d5184af9874197.png",
          nome: "Alquimia",
        },
        {
          id_estabelecimento: 5,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/9191e029f63b571df5d3e049cccf76e0.png",
          nome: "Açaí do lu",
        },
        {
          id_estabelecimento: 6,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/95b54bf6746f198da685451e74043f8d.png",
          nome: "UaiRango",
        },
        {
          id_estabelecimento: 7,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/9efcf2a3798696667afa2ae617612740.png",
          nome: "Angeloni",
        },
        {
          id_estabelecimento: 8,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/cf40a116aabac8c160f28f6245107bcc.png",
          nome: "Açougue do Zé carvalho de maria",
        },
        {
          id_estabelecimento: 9,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/1c722c63143c0bbd43d5184af9874197.png",
          nome: "Alquimia",
        },
        {
          id_estabelecimento: 10,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/9191e029f63b571df5d3e049cccf76e0.png",
          nome: "Açaí do lu",
        },
      ];
    });

    this.get("/api-v3/estabs", (): Estabelecimento[] => {
      let items: Estabelecimento[] = [
        {
          id_estabelecimento: 1,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/95b54bf6746f198da685451e74043f8d.png",
          nome: "UaiRango",
          nota: 4.5,
          categorias: ["Hamburgeria", "Bebidas"],
          delivery: {
            min: 30,
            max: 60,
          },
          min_taxa: 8,
        },
        {
          id_estabelecimento: 2,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/9efcf2a3798696667afa2ae617612740.png",
          nome: "Angeloni",
          nota: 4.5,
          categorias: ["Mercado", "Bebidas"],
          delivery: {
            min: 30,
            max: 60,
          },
          min_taxa: 8,
        },
        {
          id_estabelecimento: 3,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/cf40a116aabac8c160f28f6245107bcc.png",
          nome: "Açougue do Zé carvalho de maria",
          nota: 4.5,
          categorias: ["Mercado", "Bebidas"],
          delivery: {
            min: 30,
            max: 60,
          },
          min_taxa: 8,
        },
        {
          id_estabelecimento: 4,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/1c722c63143c0bbd43d5184af9874197.png",
          nome: "Alquimia",
          nota: 4.5,
          categorias: ["Mercado", "Bebidas"],
          delivery: {
            min: 30,
            max: 60,
          },
          min_taxa: 8,
        },
        {
          id_estabelecimento: 5,
          logo: "https://www.uairango.com/imagens/img_estabelecimentos/9191e029f63b571df5d3e049cccf76e0.png",
          nome: "Açaí do lu",
          nota: 4.5,
          categorias: ["Mercado", "Bebidas"],
          delivery: {
            min: 30,
            max: 60,
          },
          min_taxa: 8,
        },
      ];

      //return items multipled by 5 to simulate a larger list
      return Array(5)
        .fill(items)
        .flat();
    });

    this.get("/api-v3/filters", (): Filtro[] => {
      return [
        {
          id: 1,
          name: "Todos",
        },
        {
          id: 2,
          name: "Entrega grátis",
        },
        {
          id: 3,
          name: "Pagamento Online",
        },
        {
          id: 4,
          name: "Uainiversario",
        },
      ];
    });
  },
});
