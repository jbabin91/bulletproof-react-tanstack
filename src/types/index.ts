export type BaseEntity = {
  id: string;
  createdAt: string;
};

export type EnumValue<T> = T[keyof T];
