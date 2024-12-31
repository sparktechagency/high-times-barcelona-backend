import { Router } from 'express';
import { MemberController } from './member.controller';

const router = Router();
router.post('/create', MemberController.createMember);
router.get('/', MemberController.getAllMember);
router.delete('/:id', MemberController.deleteMember);

export const MemberRoutes = router;
