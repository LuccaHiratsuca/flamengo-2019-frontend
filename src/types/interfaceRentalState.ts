import { IError } from './interfaceError';

export interface RentalState {
    loading: boolean;
    infoRentals: IRentals[] | null;
    error: IError | null;
    success: boolean;
  }

  export interface IRentals {
    identifier: string;
    status: string;
    cpfCorretor: string;
    cpfLocatario: string;
    idImovel: string;
    dataAluguel: string;
}