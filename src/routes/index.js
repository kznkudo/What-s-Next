import { name } from 'ejs';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { hideLayout: true, title: "What's Next" });
});
router.get('/login', (req, res) => {
    res.render('login', { hideLayout: false, title: "What's Next" });
});
router.get('/register', (req, res) => {
    res.render('register', { hideLayout: false, title: "What's Next" });
});
router.get('/dashboard', (req, res) => {
    res.render('dashboard', { hideLayout: false, title: "What's Next" });
});
router.post('/login', (req, res)=>{
  const data ={name, }
})
router.get('/AGBs', (req, res) => {
    res.render('html/AGBs', { hideLayout: true, title: "What's Next" });
});
export default router;

