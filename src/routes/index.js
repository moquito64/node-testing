import express from 'express';
import { indexPage, messagesPage, addMessage } from '../controllers';
import { modifyMessage, performAsyncAction } from '../middleware';
const indexRouter = express.Router();

indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);
indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);

export default indexRouter;