import express from 'express';
import { indexPage, messagesPage, addMessage } from '../controllers';

const indexRouter = express.Router();

indexRouter.post('/messages', addMessage);
indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);

export default indexRouter;