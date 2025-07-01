import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: "What's Next" });
});
router.get('/login', (req, res) => {
    res.render('login', { title: "What's Next" });
});
router.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: "What's Next" });
});
export default router;

