import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/model/user';

export const selectUserState = createFeatureSelector<User>('user');

export const selectUser = createSelector(selectUserState, (user: User) => user);
