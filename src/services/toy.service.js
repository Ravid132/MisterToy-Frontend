import { httpService } from './http.service';

export const toyService = {
  query,
  getById,
  save,
  remove,
  update,
};

async function query(filterBy) {
  const toys = await httpService.get(`toy`, { params: filterBy });
  return toys;
}

async function getById(toyId) {
  const toy = await httpService.get(`toy/${toyId}`);
  return toy;
}

async function save(toy) {
  const savedToy = await httpService.post('toy', toy);
  return savedToy;
}

async function update(toy) {
  const updatedToy = await httpService.put('toy', toy);
  return updatedToy;
}

async function remove(toyId) {
  await httpService.delete(`toy/${toyId}`);
}
