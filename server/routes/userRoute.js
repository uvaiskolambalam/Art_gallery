const express = require('express')
const router=express.Router()

const authMiddleWare= require('../middleWares/authMiddleware')


const userController = require('../controllers/userController')

router.post('/signup',userController.signup)
router.post('/otp',userController.otp)
router.post('/login',userController.login)
router.post('/getUser',authMiddleWare,userController.userInfo)
router.post('/newpost',userController.newPost)
router.get('/getPosts/:id',userController.getPosts)
router.post('/like',userController.handleLike)
router.post('/addComment',userController.addComment)
router.post('/getUsers',userController.getUsers)
router.post('/getFriends',userController.getFriends)
router.post('/follow',userController.follow)
router.put('/editAbout',userController.editAbout)
router.get('/getUserDetails/:id',userController.getUserDetails)
router.put('/editMoreData',userController.editMoreData)
router.post('/profileImage',userController.profileImage)
router.post('/getProfilePic',userController.getProfilePic)


module.exports = router;
