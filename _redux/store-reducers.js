// frame

import Menu              from  './f-menu';
import Modal             from  './f-modal';
import User              from  './f-user';
import WebSocket         from  './f-websocket';

// apps

import Articles          from  './a-articles';
import People            from  './a-people';
import Bookmarks         from  './a-bookmarks';

const combiner = {

  // frame

  ...Menu,
  ...Modal,
  ...User,
  ...WebSocket,

  // app - articles

  ...Articles,

  // app - people

  ...People,

  // app - bookmarks

  ...Bookmarks

};

import {combineReducers} from 'redux';
export default combineReducers(combiner);