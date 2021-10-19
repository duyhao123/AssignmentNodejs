schema.pre('save', function(next){
    const err = new Error('something went wrong');
    //goi next() ma truyen vao mot tham so err
    next(err);
});

schema.pre('save', function(){
    // Return ve mot project roi reject loi
    return new Promise((resolve, reject)=>{
        reject(new Error('somthing went wrong'));
    });
});

schema.pre('save', function(){
    // Throw error nhu la mot tac vu dong bo
    throw new Error('somthing went wrong');
});

// Hien thi ra loi
myDoc.save(function(err){
    console.log(err.message);
});