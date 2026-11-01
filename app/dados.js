// Carrega as aulas de cada módulo sob demanda (dados/aulas/<n>.js) e guarda na memória.
import { MODULOS_COM_AULAS } from '../dados/index.js';
import { aulaPorId } from './base.js';

const carregados = {};   // n -> Promise<AULAS>
export const temArquivo = n => MODULOS_COM_AULAS.includes(String(n));
export function carregarModulo(n) {
  n = String(n);
  if (!temArquivo(n)) return Promise.resolve({});
  if (!carregados[n]) carregados[n] = import(`../dados/aulas/${n}.js`).then(m => m.AULAS || {}).catch(e => { delete carregados[n]; console.warn('Módulo de aulas não carregou:', n, e.message); return {}; });
  return carregados[n];
}
export const moduloDaAula = id => (aulaPorId(id)?.m.n) ?? String(id).split('-')[0];
export async function carregarAula(id) {
  const aulas = await carregarModulo(moduloDaAula(id));
  return aulas[id] || null;
}
export async function carregarTodas() {
  const lista = await Promise.all(MODULOS_COM_AULAS.map(carregarModulo));
  return Object.assign({}, ...lista);
}
