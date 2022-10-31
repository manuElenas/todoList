// **Overmind** tiene un concepto de una **acción**. Una **acción** es solo una **función** donde se inyecta el **state** en el primer argumento. Este primer argumento se llama **contexto** y contiene el **estado** de la aplicación, los efectos que haya definido y las referencias a las otras acciones.
import {DataArray} from '../interfaces/ObjecData';

type State = {
  data: DataArray[];
  text: string;
};

export const state: State = {
  data: [],
  text: '',
};
