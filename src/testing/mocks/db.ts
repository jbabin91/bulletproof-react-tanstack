import { factory, primaryKey } from '@mswjs/data';
import { nanoid } from 'nanoid';

const models = {
  comment: {
    authorId: String,
    body: String,
    createdAt: Date.now,
    discussionId: String,
    id: primaryKey(nanoid),
  },
  discussion: {
    authorId: String,
    body: String,
    createdAt: Date.now,
    id: primaryKey(nanoid),
    teamId: String,
    title: String,
  },
  team: {
    createdAt: Date.now,
    description: String,
    id: primaryKey(nanoid),
    name: String,
  },
  user: {
    bio: String,
    createdAt: Date.now,
    email: String,
    firstName: String,
    id: primaryKey(nanoid),
    lastName: String,
    password: String,
    role: String,
    teamId: String,
  },
};

export type Model = keyof typeof models;

export const db = factory(models);

const dbFilePath = 'mocked-db.json';

export const loadDb = async () => {
  // If we are running in a Node.js environment
  if (typeof window === 'undefined') {
    const { readFile, writeFile } = await import('node:fs/promises');
    try {
      const data = await readFile(dbFilePath, 'utf8');
      return JSON.parse(data);
    } catch (error: any) {
      if (error?.code === 'ENOENT') {
        const emptyDB = {};
        await writeFile(dbFilePath, JSON.stringify(emptyDB, null, 2));
        return emptyDB;
      } else {
        console.error('Error loading mocked DB:', error);
        return null;
      }
    }
  }
  // If we are running in a browser environment
  return Object.assign(
    JSON.parse(window.localStorage.getItem('msw-db') ?? '{}'),
  );
};

export const storeDb = async (data: string) => {
  // If we are running in a Node.js environment
  if (typeof window === 'undefined') {
    const { writeFile } = await import('node:fs/promises');
    await writeFile(dbFilePath, data);
  } else {
    // If we are running in a browser environment
    window.localStorage.setItem('msw-db', data);
  }
};

export const persistDb = async (model: Model) => {
  if (process.env.NODE_ENV === 'test') return;
  const data = await loadDb();
  data[model] = db[model].getAll();
  await storeDb(JSON.stringify(data));
};

export const initializeDb = async () => {
  const database = await loadDb();
  for (const [key, model] of Object.entries(db)) {
    const dataEntires = database[key];
    if (dataEntires) {
      for (const entry of dataEntires) {
        model.create(entry);
      }
      // dataEntires?.forEach((entry: Record<string, any>) => {
      //   model.create(entry);
      // });
    }
  }
};

export const resetDb = () => {
  window.localStorage.clear();
};
