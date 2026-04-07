import { combineReducers } from '@reduxjs/toolkit';

import { MenuPage } from './f-menu';
import { MenuLeft } from './f-menuleft';
import { Modal } from './f-modal';
import { User } from './f-user';
import { WebSocket } from './f-websocket';

import { Articles, ArticleForm, SearchInput } from './a-articles';
import { People, PeopleInput } from './a-people';
import { Bookmarks } from './a-bookmarks';

const rootReducer = combineReducers({
  MenuPage: MenuPage,
  MenuLeft: MenuLeft,
  Modal: Modal,
  User: User,
  WebSocket: WebSocket,
  Articles: Articles,
  ArticleForm: ArticleForm,
  SearchInput: SearchInput,
  Bookmarks: Bookmarks,
  People: People,
  PeopleInput: PeopleInput,
});

export default rootReducer;