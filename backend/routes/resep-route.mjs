import express from "express";
import { 
    getResep,
    getResepById,
    createResep,
    updResep,
    delResep
} from "../controllers/resep-controller.mjs";
// 1. Import middleware multer yang sudah dibuat
import { upload } from "../middleware/upload-image.mjs"; 

const ResepRouter = express.Router();

ResepRouter.get('/resep', getResep);
ResepRouter.get('/resep/:id', getResepById);

// 2. Sisipkan upload.single('foto') sebelum controller
ResepRouter.post('/resep', upload.single('foto'), createResep);
ResepRouter.patch('/resep/:id', upload.single('foto'), updResep);

ResepRouter.delete('/resep/:id', delResep);

export default ResepRouter;