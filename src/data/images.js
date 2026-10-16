// Ogni foto ha la versione piena (galleria a schermo intero) e la miniatura in `sm/`
// generata da `npm run images`.
const list = (dir, names) =>
  names.map((name, i) => ({
    id: i + 1,
    src: `/img_sliderhome/${dir}/${name}.webp`,
    thumb: `/img_sliderhome/${dir}/sm/${name}.webp`,
  }));

const range = (n) => Array.from({ length: n }, (_, i) => i + 1);

export const esemplari = list("esemplari", [
  "ulivi2",
  "ulivi01",
  "ulivi3",
  "ulivi4",
  "ulivi5",
  "ulivi6",
  "ulivi07",
]);

export const DaInterno = list("piante_da_interno", range(10));
export const esterno = list("piante_da_esterno", range(10));
export const DaFrutto = list("piante_da_frutto", range(3));
export const sliderone = list("Img_sliderone", range(24));
