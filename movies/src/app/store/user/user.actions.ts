import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/user';

export const setUser = createAction(
  '[User] setUser',
  props<{
    value: User;
  }>()
);
