export interface ItemBoxType {
  id: number;
  name: string;
  image?: string | null;
  introduce?: string | null;
  etype?: number | null;
}

export interface ItemInfoType extends ItemBoxType {
  achieving?: string | null;
  describe?: string | null;
  richtxt?: string | null;
}
