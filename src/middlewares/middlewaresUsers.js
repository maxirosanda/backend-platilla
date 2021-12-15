
export const auth = (req,res,next)=>{

    if( req.isAuthenticated()){
        next()
    }else{
        res.status(200).redirect('/login')
    }


}
