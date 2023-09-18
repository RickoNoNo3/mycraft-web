import {Constants} from '../../Constants';
import {ItemBoxType} from '../../type/BookTypes';

export async function ListCategories() {
  const res = await (fetch(`${Constants.ServerUrl}/equiment/findBigTypes`).then(r => r.json()));
  if (res.code !== 20000) {
    throw res.errorMessage;
  }
  return res.data.map(d => ({
    ...d,
    image: d.picture || d.image,
    name: d.introduce || d.typename || d.name,
  })) as ItemBoxType[];
}

export async function GetCategoryById(id: number) {
  const categories = await ListCategories();
  return categories.find(c => c.id === id);
}

export async function ListSubCategoriesByCategoryId(categoryId: number) {
  const res = await (fetch(`${Constants.ServerUrl}/equiment/tinyTypeByBigType?id=${categoryId}`).then(r => r.json()));
  if (res.code !== 20000) {
    throw res.errorMessage;
  }
  return res.data.map(d => ({
    ...d,
    image: d.picture || d.image,
    name: d.introduce || d.typename || d.name,
  })) as ItemBoxType[];
}

let findingItems: Promise<ItemBoxType[]> | null = null;

export async function FindItems(subCategoryId: number, name?: string) {
  if (findingItems) await findingItems;
  findingItems = (async () => {
    const nameQuery = typeof name === 'string' ? `&name=${name.trim()}` : '';
    const res = await (fetch(`${Constants.ServerUrl}/equiment/findItemByTinyType?size=12000&etype=${subCategoryId}${nameQuery}`, {
      method: 'POST',
    }).then(r => r.json()));
    if (res.code !== 20000) {
      throw res.errorMessage;
    }
    return res.data.records.map(d => ({
      ...d,
      image: d.picture || d.image,
      name: d.introduce || d.typename || d.name,
    })) as ItemBoxType[];
  })();
  return await findingItems;
}

export async function GetItem(id: number) {
  const res = await (fetch(`${Constants.ServerUrl}/equiment/item?id=${id}`).then(r => r.json()));
  console.log(res);
  if (res.code !== 20000) {
    throw res.errorMessage;
  }
  return {
    ...res.data,
    image: res.data.picture || res.data.image,
  };
}
