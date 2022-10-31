//En este
import {IAction} from 'overmind';
import {DataArray} from '../interfaces/ObjecData';

//AGREGAR ITEM A LISTADO TODO`S
export const addItem: IAction<DataArray, void> = ({state}, item) => {
  //agrager item
  //state.data.unshift(item);
  state.data.push(item);
  state.text = '';
};

//ONCHANGE INPUT
export const handleChange: IAction<string, void> = ({state}, text) => {
  state.text = text;
};

//TASK COMPLETE
export const handleComplete: IAction<number, void> = ({state}, id) => {
  state.data[id].status = true;
};

// export const handleDelete: IAction<number, void> = ({state}, id) => {
//   state.data.shift(id);
// };
export const handleDelete: IAction<[], void> = ({state}, array) => {
  state.data = array;
};
