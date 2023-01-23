export interface DogApiDto {
  status: string;
  message: string;
}

export interface MarkRecord {
  image: string;
  mark: number;
}

export const RefreshEvent = 'RefreshEvent';
