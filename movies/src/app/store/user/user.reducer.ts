// user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/model/user';
import { setUser } from './user.actions';

const initialState: User = {
  id: 0,
  email: '',
  password: '',
};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, action): User => {
    return { ...state, ...action.value };
  })
);
