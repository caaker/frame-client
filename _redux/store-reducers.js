import { combineReducers } from '@reduxjs/toolkit';

import { MenuPage } from                  './f-menu';
import { MenuLeft } from                  './f-menuleft';
import { Modal } from                     './f-modal';
import { SearchInput } from               './f-search';

import { User } from                      './f-user';
import { Server } from                    './f-server';

import { ArticleForm } from               './a-article-form';
import { Articles } from                  './a-articles';
import { Bookmarks } from                 './a-bookmarks';

const rootReducer = combineReducers({
  MenuPage: MenuPage,
  MenuLeft: MenuLeft,
  Modal: Modal,
  SearchInput: SearchInput,

  User: User,
  Server: Server,

  Articles: Articles,
  ArticleForm: ArticleForm,
  Bookmarks: Bookmarks,
});

export default rootReducer;